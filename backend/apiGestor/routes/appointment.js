const express = require ('express') ;
const router = express.Router () ;
const appointmentController = require ('../controllers/appointmentController') ;

router.get("/", appointmentController.get)
router.get('/download', appointmentController.download);
router.get('/download/:id', appointmentController.downloadOne);
router.post("/", appointmentController.post)
router.put("/", appointmentController.put)
router.delete("/", appointmentController.delete)


module.exports = router