import { Router } from "express";
import { getUser } from "../Controllers/user.controller.js";
import authMiddleware from "../Middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/:id", authMiddleware, getUser);

userRouter.post("/:id", (req, res) => {
  res.send({ titile: "POST user" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ titile: "Update user" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ titile: "Delete user" });
});

export default userRouter;
