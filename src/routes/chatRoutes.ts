import express from "express";
import chatcontroller from "../controller/chat/chatcontroller";
// import auth from "../middleware/auth.middleware";

const router = express.Router();

router.post("/gpt", chatcontroller.Chat);

export default router;
