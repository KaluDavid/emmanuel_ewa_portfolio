export const runtime = "nodejs";
import { Mailer } from "@/components/ui/mailer";
import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.SENDER_EMAIL,
    subject: `New message from  ${name}`,
    html: Mailer({ name, email, message }),
    replyTo: email,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Message sent successfully");
        } else {
          reject(`Failed to send message: ${err.message}`);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({
      message: "Message sent successfully",
    });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
