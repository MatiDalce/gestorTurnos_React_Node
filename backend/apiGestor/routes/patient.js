const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const { validatePatientFields } = require('../middlewares/patientValidation');


router.get('/', patientController.get);
router.get("/limit", patientController.getOneLimit)
router.get("/search", patientController.search)
router.get('/:id', patientController.getOne)



router.post('/', validatePatientFields, patientController.post);

router.put("/:id",  validatePatientFields,  patientController.put);

router.delete("/:id", patientController.delete);
router.get("/patient-appointments/:id", patientController.patientApointments)
router.get("/patient-appointmentsDSC/:id", patientController.patientApointmentsDSC)


module.exports = router