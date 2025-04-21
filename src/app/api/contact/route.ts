import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, interest } = body;

    // Basic validation
    if (!name || !email || !interest) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Construct email content
    const emailContent = `
      New Education Form Submission:
      Name: ${name}
      Email: ${email}
      Interest: ${interest}
    `;

    try {
      const data = await resend.emails.send({
        from: "Hormones for Me <onboarding@resend.dev>",
        to: "charles@hormonesforme.com",
        subject: "New Education Form Submission",
        text: emailContent,
      });

      return NextResponse.json({ success: true, data });
    } catch (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: "Failed to send email via Resend" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
