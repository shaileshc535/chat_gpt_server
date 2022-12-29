import express from "express";
import chatcontroller from "../controller/chat/chatcontroller";
import imageGenratorController from "../controller/image/imageGenratorController";
import getEmailContent from "../controller/email/emailController";
import getSeoContent from "../controller/seo/seoController";
import getBlogPost from "../controller/blogs/blogController";

const router = express.Router();

router.post("/gpt", chatcontroller.Chat);

router.post("/image", imageGenratorController.ImageGenrator);

router.post("/email", getEmailContent);

router.post("/seo", getSeoContent);

router.post("/blog", getBlogPost);

export default router;
