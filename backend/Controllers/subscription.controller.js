import Subscription from "../models/subscription.model.js";
import { workflowClient } from "../config/upstash.js";
import { SERVER_URL } from "../config/env.js";
import Stripe from "stripe";

export const createSubscription = async (req, res, next) => {
  const stripe = Stripe(
    "sk_test_51SuVEtAbYD8TeU1upsS6aLlphUx8gUliTmGFsp6dwLmCr7Lmv8WJL7j6wOgQnbnQGhEXYv6klzL3woTVDyL0Ix5700Sv43FNYo"
  );
  try {
    const prices = await stripe.prices.list({
      lookup_keys: ["gg-ad02d6c"],
      expand: ["data.product"],
    });

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: prices.data[0].id,
          quantity: 1,
        },
      ],
      success_url: "https://docs.stripe.com/api/checkout/sessions",
      client_reference_id: req.params.id,
      mode: "subscription",
    });
    const { url } = session;

    // const subscription = await Subscription.create({
    //   ...req.body,
    //   userId: req.user._id,
    // });

    // const { workflowRunId } = await workflowClient.trigger({
    //   url: `${SERVER_URL}/api/workflows/subscription/reminder`,
    //   body: { subscriptionId: subscription._id },
    //   retries: 0,
    // });
    //res.status(201).json({ success: true, data: subscription, workflowRunId });
    res.status(201).json({ success: true, url, session });
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
