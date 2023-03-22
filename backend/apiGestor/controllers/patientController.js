const db = require("../database/models");
const Op = db.Sequelize.Op;


module.exports = {
    get: async (req, res) => {
        try {
            const patients = await db.Patient.findAll({
                attributes: { exclude: ['updatedAt', 'createdAt'] } // exclude createdAt field
              });;
            res.json(patients);
          } catch (err) {
            console.error(err);
            res.status(500).send('Error al obtener los pacientes');
          }
    }
}


