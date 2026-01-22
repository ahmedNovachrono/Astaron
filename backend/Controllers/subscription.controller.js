import Subscription from "../models/subscription.model.js";
import { workflowClient } from "../config/upstash.js";
import { SERVER_URL } from "../config/env.js";

export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      userId: req.user._id,
    });
    console.log(SERVER_URL);

    const { workflowRunId } = await workflowClient.trigger({
      url: `${SERVER_URL}/api/workflows/subscription/reminder`,
      body: { subscriptionId: subscription._id },
      retries: 0,
    });
    res.status(201).json({ success: true, data: subscription, workflowRunId });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

//getting user subs
export const getUserSubscription = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.id) {
      const error = new Error("You are not the owner of this account");
      error.status = 401;
      throw error;
    }

    const userSubscription = await Subscription.findOne({
      userId: req.params.id,
    });

    res.status(200).json({ success: true, subscription: userSubscription });
  } catch (error) {
    next(error);
  }
};
