import express from "express";
import { google, signIn, signUp } from "../controllers/Auth.controller.js";
const authRouter = express.Router();

authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);
authRouter.post("/google", google);
export default authRouter;
