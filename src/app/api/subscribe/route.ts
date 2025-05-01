import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, to } = body;

    // Create a test account using Ethereal (for development)
    // In production, you'd use your actual SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.ethereal.email",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "newsletter@hormonesforme.com",
      to,
      subject: "New Newsletter Subscription",
      text: `
New newsletter subscription:

First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}

Please add this subscriber to your mailing list.
      `,
      html: `
<h2>New Newsletter Subscription</h2>
<p><strong>First Name:</strong> ${firstName}</p>
<p><strong>Last Name:</strong> ${lastName}</p>
<p><strong>Email:</strong> ${email}</p>
<p>Please add this subscriber to your mailing list.</p>
      `,
    });

    return NextResponse.json(
      { message: "Subscription successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { message: "Failed to process subscription" },
      { status: 500 }
    );
  }
}
