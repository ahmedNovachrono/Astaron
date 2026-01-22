import { Router } from "express";
import authMiddleware from "../Middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscription,
} from "../Controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/user/:id", authMiddleware, getUserSubscription);

subscriptionRouter.post("/:id", authMiddleware, createSubscription);

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "updating a subscription" });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE A subscription" });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "GET user subscriptions" });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "Cancel a subscription" });
});

subscriptionRouter.get("/upcoming-renewls", (req, res) => {
  res.send({ title: "GET upcoming renewls subscription" });
});

export default subscriptionRouter;
