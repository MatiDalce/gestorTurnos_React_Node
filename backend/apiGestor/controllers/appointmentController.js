const db = require("../database/models");
const Op = db.Sequelize.Op;


module.exports = {
    get: async (req, res) => {
        try {
            const appointments = await db.Appointment.findAll({
                attributes: { exclude: ['updatedAt', 'createdAt'] },
                include: [{
                    association: "patient", as: "Patient",
                    attributes: { exclude: ['createdAt', 'updatedAt'] }
                }]
            });
            res.status(200).json(appointments);
        } catch (err) {
            console.error(err);
            res.status(500).send('Error al obtener los turnos');
        }
    },
    post: async (req, res) => {
        const { day, hour, patient, note } = req.body;

        try {
            const newAppointment = await db.Appointment.create({
                day,
                hour,
                patient,
                note
            });
            res.status(201).json(newAppointment);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error creating appointment record' });
        }
    },
    put: async (req, res) => {

        const { id } = req.params;
        const { day, hour, patient, note } = req.body;

        try {
            const result = await db.Appointment.update(
                {
                    day,
                    hour,
                    patient,
                    note
                },
                { where: { id } }
            );

            if (result[0] > 0) {
                res.status(200).json({ message: 'Appointment record updated successfully' });
            } else {
                res.status(404).json({ message: 'No Appointment record found for the given ID' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).send('Error updating Appointment record');
        }

    },
    delete: async (req, res) => {
        const { id } = req.params;

        try {
            const result = await db.Appointment.destroy({ where: { id } });

            if (result > 0) {
                res.status(200).json({ message: 'Appointment record deleted successfully' });
            } else {
                res.status(404).json({ message: 'No Appointment record found for the given ID' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).send('Error deleting Appointment record');
        }

    }
}