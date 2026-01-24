import transporter, { accountEmail } from "../config/nodemailer.js";
import { emailTemplates } from "./email-template.js";

const sendEmailReminder = async ({ to, type, subscription }) => {
  if (!to || !type)
    throw new Error(`wrong parameters in send reminder function`);

  const template = emailTemplates.find((t) => t.label === type);

  if (!template) throw new Error("Invalid Email type in template");

  const mailInfo = {
    userName: subscription.userId.username,
    subscriptionName: subscription.name,
    renewalDate: subscription.renewalDate,
    planeName: subscription.name,
    price: subscription.price,
    paymentMethod: subscription.paymentMethod,
  };

  const message = template.generateBody(mailInfo);
  const subject = template.generateSubject(mailInfo);

  const mailOptions = {
    to: subscription.userId.email,
    from: accountEmail,
    subject: subject,
    html: message,
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (!info || error)
      return console.log(error, "error accurd while sending email");
    console.log("email has been sent", info.messageId, info);
  });
};

export default sendEmailReminder;
