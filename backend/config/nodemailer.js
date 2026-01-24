import nodemailer from "nodemailer";

export const accountEmail = "my gmail account";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: accountEmail,
    pass: "from gmaila pp passwords",
  },
});

export default transporter;
