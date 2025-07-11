import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); // keep the key in .env.local

// customise these ↴
const YOUR_EMAIL = "gdrajan.sharma@gmail.com";
const HER_EMAIL = "gdrajan.sharma@gmail.com";

export async function POST() {
  try {
    /* mail to you */
    await resend.emails.send({
      from: "connect@oplyx.tech",
      to: YOUR_EMAIL,
      subject: "She Forgave You ❤️",
      html: `<p>Aastha clicked <strong>I Forgive You</strong>. Time to keep your promises! ✨</p>`,
    });

    /* mail to her */
    await resend.emails.send({
      from: "connect@oplyx.tech",
      to: HER_EMAIL,
      subject: "Thank you for forgiving me 💖",
      html: `
        <p>Hi Aastha,</p>
        <p>Thank you for pressing that button and giving me another chance.
        I value you more than words can say and I’ll prove it every day.</p>
        <p>With all my love,<br/>Me 💌</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
