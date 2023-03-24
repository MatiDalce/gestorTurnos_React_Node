const express = require ('express') ;
const router = express.Router () ;
const patientController = require ('../controllers/patientController') ;


router.get ('/', patientController.get) ;
router.post('/', patientController.post);
router.put("/:id", patientController.put);
router.delete("/:id", patientController.delete);


module.exports = router