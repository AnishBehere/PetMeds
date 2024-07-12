import exprerss from "express";
import {
  isAdminAuthenticate,
  ispatientAuthenticate,
} from "../middlewares/auth.js";

import {
  addNewAdmin,
  addNewDoctor,
  getAllDoctors,
  getUserDetails,
  login,
  logoutAdmin,
  logoutPatient,
  patientRegister,
} from "../controllers/usercontrol.js";

// router object
const router = exprerss.Router();

//router for post

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew", addNewAdmin);
router.get("/doctors", getAllDoctors);
router.get("/admin/me", isAdminAuthenticate, getUserDetails);
router.get("/patient/me", ispatientAuthenticate, getUserDetails);
router.get("/patient/logout", ispatientAuthenticate, logoutPatient);
router.get("/admin/logout", isAdminAuthenticate, logoutAdmin);
router.post("/doctor/addnew", isAdminAuthenticate, addNewDoctor);

export default router;
