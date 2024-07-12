import express from "express";
import {
  sendMessage,
  getAllMessages,
} from "../controllers/messageController.js";

// message sent karna haii to router ka use kiaa
import { isAdminAuthenticate } from "../middlewares/auth.js";
const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall", isAdminAuthenticate, getAllMessages);

export default router;
