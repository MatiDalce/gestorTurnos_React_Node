const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');


router.get('/', patientController.get);
router.get("/limit", patientController.getOneLimit)
router.get("/search", patientController.search)
router.get('/:id', patientController.getOne)



router.post('/', patientController.post);

router.put("/:id", patientController.put);

router.delete("/:id", patientController.delete);


module.exports = router