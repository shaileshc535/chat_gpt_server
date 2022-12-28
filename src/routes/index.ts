import express from "express";
import userRoutes from "./userRoute";
import chatRoutes from "./chatRoutes";

const Router = express.Router();

Router.use("/user", userRoutes);
Router.use("/chat", chatRoutes);

export default Router;
