const db = require("../database/models");
const Op = db.Sequelize.Op;


module.exports = {
  get: async (req, res) => {
    try {
      const patients = await db.Patient.findAll({
        attributes: { exclude: ['updatedAt', 'createdAt'] } // exclude createdAt field
      });;
      res.status(200).json(patients);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al obtener los pacientes');
    }
  },
  post: async (req, res) => {
    const { name, age, gender, phone, address } = req.body;

  try {
    const newPatient = await db.Patient.create({
      name,
      age,
      gender,
      phone,
      address
    });
    res.status(201).json(newPatient);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating patient record' });
  }
  },
  put: async (req, res) => {

    const { id } = req.params;
    const { name, age, email } = req.body;

    try {
      const result = await db.Patient.update(
        { name, age, email },
        { where: { id } }
      );

      if (result[0] > 0) {
        res.status(200).json({ message: 'Patient record updated successfully' });
      } else {
        res.status(404).json({ message: 'No patient record found for the given ID' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Error updating patient record');
    }

  },
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const result = await db.Patient.destroy({ where: { id } });

      if (result > 0) {
        res.status(200).json({ message: 'Patient record deleted successfully' });
      } else {
        res.status(404).json({ message: 'No patient record found for the given ID' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Error deleting patient record');
    }

  }
}



