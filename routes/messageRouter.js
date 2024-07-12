import express from "express";
import { sendMessage,getAllMessages } from "/Users/Anish/Downloads/meddy/controllers/messageController.js";

// message sent karna haii to router ka use kiaa
import {isAdminAuthenticate }from "/Users/Anish/Downloads/meddy/middlewares/auth.js"
const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall", isAdminAuthenticate, getAllMessages);

export default router;