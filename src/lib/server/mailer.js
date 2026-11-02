import "server-only";
import nodemailer from "nodemailer";

let transporter;

/** Reads SMTP settings from the environment (Hostinger mail by default). */
export function smtpConfig() {
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER || "";
  return {
    host: process.env.SMTP_HOST || "smtp.hostinger.com",
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    user,
    pass: process.env.SMTP_PASS || "",
    from: process.env.MAIL_FROM || (user ? `Style In The City Studio <${user}>` : ""),
    to: process.env.MAIL_TO || user,
    sendConfirmation: process.env.SEND_CONFIRMATION_EMAIL === "true",
  };
}

export function isMailConfigured() {
  const config = smtpConfig();
  return Boolean(config.user && config.pass && config.to);
}

export function getTransporter() {
  if (transporter) return transporter;
  const config = smtpConfig();
  transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: { user: config.user, pass: config.pass },
    connectionTimeout: 15_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });
  return transporter;
}
