const db = require("../database/models");
const Op = db.Sequelize.Op;
const fs = require('fs');


module.exports = {
    get: async (req, res) => {
        try {
            const appointments = await db.Appointment.findAll({
                attributes: { exclude: ['updatedAt', 'createdAt', 'patientId'] },
                include: [{
                    association: "patient", as: "Patient",
                    attributes: { exclude: ['createdAt',
                     'updatedAt',
                      'birthday', 
                      'maritalStatus', 
                      'email', 
                      'socialService', 
                      "maritalStatus", 
                      "contactPhone",
                      "personalPhoneNumber",
                      "academicLevel",
                      "bloodType",
                      "takesMedication",
                      "medication",
                      "hasAllergies",
                      "allergies",
                      "hasChronicDisease",
                      "chronicDisease",
                      "familyMembers",
                      "parents",
                      "children",
                      "siblings"
                    ] }
                }]
            });
            res.status(200).json(appointments);
        } catch (err) {
            console.error(err);
            res.status(500).send('Error al obtener los turnos');
        }
    },

    getOne: async (req, res) => {
        const { id } = req.params;
      
        try {
          const appointment = await db.Appointment.findOne({
            where: { id },
            attributes: { exclude: ['updatedAt', 'createdAt', 'patientId'] },
            include: [{
              association: "patient", as: "Patient",
              attributes: { exclude: ['createdAt',
               'updatedAt',
                'birthday', 
                'maritalStatus', 
                'email', 
                'socialService', 
                "maritalStatus", 
                "contactPhone",
                "personalPhoneNumber",
                "academicLevel",
                "bloodType",
                "takesMedication",
                "medication",
                "hasAllergies",
                "allergies",
                "hasChronicDisease",
                "chronicDisease",
                "familyMembers",
                "parents",
                "children",
                "siblings"
              ] }
            }]
          });
      
          if (appointment) {
            res.status(200).json(appointment);
          } else {
            res.status(404).json({ message: 'No appointment found for the given ID' });
          }
        } catch (err) {
          console.error(err);
          res.status(500).send('Error al obtener el turno');
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
    },

    download: async (req, res) => {

        try {
            const appointments = await db.Appointment.findAll({
                attributes: { exclude: ['updatedAt', 'createdAt'] },
                include: [{
                    model: db.Patient, as: "patient",
                    attributes: { exclude: ['createdAt', 'updatedAt'] }
                }]
            });

            let fileContent = '';
            for (let appointment of appointments) {
                fileContent += `Nombre: ${appointment.patient.name}\nNota: ${appointment.note}\n\n`;

            }

            fs.writeFile('appointments.txt', fileContent, (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
                res.download('appointments.txt', 'appointments.txt', () => {
                    fs.unlink('appointments.txt', (err) => {
                        if (err) {
                            console.error(err);
                            throw err;
                        }
                        console.log('The file has been deleted!');
                    });
                });
            });
        } catch (err) {
            console.error(err);
            res.status(500).send('Internal server error');
        }
    },
    downloadOne: async (req, res) => {

        try {
            const appointmentId = req.params.id; // get the appointment ID from request parameter
            const appointment = await db.Appointment.findOne({
                where: { id: appointmentId },
                attributes: { exclude: ['updatedAt', 'createdAt'] },
                include: [{
                    model: db.Patient, as: "patient",
                    attributes: { exclude: ['createdAt', 'updatedAt'] }
                }]
            });
    
            if (!appointment) {
                return res.status(404).send('Appointment not found'); // return error if appointment not found
            }
    
            const fileContent = `Nombre: ${appointment.patient.name}\nNota: ${appointment.note}\n\n`;
            fs.writeFile('appointment.txt', fileContent, (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
                res.download('appointment.txt', 'appointment.txt', () => {
                    fs.unlink('appointment.txt', (err) => {
                        if (err) {
                            console.error(err);
                            throw err;
                        }
                        console.log('The file has been deleted!');
                    });
                });
            });
        } catch (err) {
            console.error(err);
            res.status(500).send('Internal server error');
        }
    }
    
}