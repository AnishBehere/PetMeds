import express from "express";
import {
  isAdminAuthenticate,
  ispatientAuthenticate,
} from "/Users/Anish/Downloads/meddy/middlewares/auth.js";
import {
  postAppointment,
  getAllAppointments,
  updateAppointmentStatus,
  deleteAppointment,
} from "/Users/Anish/Downloads/meddy/controllers/appointmentController.js";

const router = express.Router();
router.post("/post", postAppointment, ispatientAuthenticate);
router.get("/getall", getAllAppointments, isAdminAuthenticate);
router.put("/update/:id", updateAppointmentStatus, isAdminAuthenticate);
router.delete("/delete/:id", deleteAppointment, isAdminAuthenticate);
export default router;
