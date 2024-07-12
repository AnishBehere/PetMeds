import express from "express";
import {
  isAdminAuthenticate,
  ispatientAuthenticate,
} from "../middlewares/auth.js";
import {
  postAppointment,
  getAllAppointments,
  updateAppointmentStatus,
  deleteAppointment,
} from "../controllers/appointmentController.js";

const router = express.Router();
router.post("/post", postAppointment, ispatientAuthenticate);
router.get("/getall", getAllAppointments, isAdminAuthenticate);
router.put("/update/:id", updateAppointmentStatus, isAdminAuthenticate);
router.delete("/delete/:id", deleteAppointment, isAdminAuthenticate);
export default router;
