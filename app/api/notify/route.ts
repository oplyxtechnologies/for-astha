import { NextResponse } from "next/server";
import { Resend } from "resend";
import ForgiveAlert from "@/emails/ForgiveAlert";
import ThankYouAlert from "@/emails/ThankYouEmail";

// Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// addresses
const YOUR_EMAIL = "gdrajan.sharma@gmail.com";
const HER_EMAIL = "kandelaastha36@gmail.com"; // change later if needed

export async function POST() {
  try {
    // send to you
    await resend.emails.send({
      from: "connect@oplyx.tech", // or a verified sender
      to: YOUR_EMAIL,
      subject: "She Forgave You ❤️",
      react: ForgiveAlert(),
    });

    // send to her
    await resend.emails.send({
      from: "connect@oplyx.tech", // or a verified sender
      to: HER_EMAIL,
      subject: "Thank You for Forgiving Me 💖",
      react: ThankYouAlert(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
