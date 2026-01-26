import { Router } from "express";
import { signIn, signUp, signOut } from "../Controllers/auth.controller.js";
import authMiddleware from "../Middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.post("/sign-up", signUp);

authRouter.post("/sign-in", signIn);

authRouter.post("/sign-out", signOut);

export default authRouter;
