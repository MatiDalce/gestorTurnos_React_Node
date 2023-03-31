const express = require ('express') ;
const router = express.Router () ;
const appointmentController = require ('../controllers/appointmentController') ;

router.get("/", appointmentController.get);
router.get("/search", appointmentController.search)
router.get('/download', appointmentController.download);
router.get('/download/:id', appointmentController.downloadOne);
router.get("/:id", appointmentController.getOne)


router.post("/", appointmentController.post)
router.put("/:id", appointmentController.put)

router.delete("/", appointmentController.delete)


module.exports = router