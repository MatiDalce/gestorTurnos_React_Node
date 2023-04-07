const express = require ('express') ;
const router = express.Router () ;
const appointmentController = require ('../controllers/appointmentController') ;
const { appointmentValidationPost } = require("../middlewares/appointmentsValidation")


router.get("/", appointmentController.get);
router.get("/search", appointmentController.search)
router.get("/calendar", appointmentController.calendar)
router.get('/download', appointmentController.download);
router.get('/download/:id', appointmentController.downloadOne);
router.get("/:id", appointmentController.getOne)



router.post("/", appointmentValidationPost ,appointmentController.post)
router.put("/:id", appointmentValidationPost , appointmentController.put)

router.delete("/:id", appointmentController.delete)


module.exports = router