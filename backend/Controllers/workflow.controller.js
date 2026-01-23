import { createRequire } from "module";
import Subscription from "../models/subscription.model.js";
import dayjs from "dayjs";
const require = createRequire(import.meta.url);
const { serve } = require("@upstash/workflow/express");
import { SERVER_URL } from "../config/env.js";

export const sendReminders = serve(
  async (context) => {
    const { subscriptionId } = await context.requestPayload;
    const subscription = await fetchSubscription(context, subscriptionId);

    if (!subscription || subscription.status !== "active") return;

    const renwalDate = dayjs(subscription.renwalDate);

    if (!renwalDate.isValid()) {
      console.log("invalid renewal date");
      return;
    }
    //If renewalDate has passed
    if (renwalDate.isBefore(dayjs())) {
      console.log(
        `subscription date has passed for subscript with thid id: ${subscriptionId}, stooping workflow`
      );
      return;
    }

    const REMINDERS = [14, 7, 3, 1];

    for (const daysBefore of REMINDERS) {
      const reminderDate = renwalDate.subtract(daysBefore, "day");

      if (reminderDate.isAfter(dayjs())) {
        await sleepUntilReminder(
          context,
          `reminder ${daysBefore} days before`,
          reminderDate
        );

        await triggerReminder(
          context,
          `reminder ${daysBefore} days before renewing subscription with id ${subscriptionId}`
        );
      }
    }
  },
  { url: `${SERVER_URL}/api/workflows/subscription/reminder` }
);

const fetchSubscription = async (context, subscriptionId) => {
  return await context.run("fetch subscription", async () => {
    return await Subscription.findById(subscriptionId).populate(
      "userId",
      "name email"
    );
  });
};

const sleepUntilReminder = async (context, label, date) => {
  console.log(date.toISOString());
  console.log(`Sleeping unitl ${label} reminder at ${date}`);
  return await context.sleepUntil(label, date.toDate());
};

const triggerReminder = async (context, label) => {
  return await context.run(label, async () => {
    console.log(`triggering ${label} reminder`);
    //Send email
  });
};
