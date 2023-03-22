const express = require ('express') ;
const router = express.Router () ;
const patientController = require ('../controllers/patientController') ;


router.get ('/', patientController.get) ;


module.exports = router