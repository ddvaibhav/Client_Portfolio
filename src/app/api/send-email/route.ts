import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";


// Contact form endpoint: sends email via Resend.


export async function POST(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid JSON request body" },
      { status: 400 }
    );
  }

  const { name, email, message, projectType, timeline, honeypot } = body || {};

  // Submission time (backend-derived)
  const time = new Date().toISOString();


  // Honeypot check (bots will fill this hidden field)
  if (honeypot) {
    return NextResponse.json(
      { error: "Spam detected" },
      { status: 400 }
    );
  }

  // Validate required fields
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Validate input lengths to prevent resource exhaustion/DoS attacks
  if (
    name.length > 100 ||
    email.length > 250 ||
    message.length > 5000 ||
    (projectType && projectType.length > 100) ||
    (timeline && timeline.length > 100)
  ) {
    return NextResponse.json(
      { error: "Input text exceeds maximum allowed limit" },
      { status: 400 }
    );
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email format" },
      { status: 400 }
    );
  }

  // Validate message length (allow any non-empty message)
  if (!message || message.trim().length < 1) {
    return NextResponse.json(
      { error: "Message is required" },
      { status: 400 }
    );
  }


  // Block disposable email providers
  const blockList = ["tempmail", "mailinator", "10minutemail", "guerrillamail"];
  const domain = email.split("@")[1];
  if (domain && blockList.some((blocked) => domain.includes(blocked))) {
    return NextResponse.json(
      { error: "Temporary email addresses are not allowed" },
      { status: 403 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "contact.sarangbhavar7721@gmail.com";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY in environment variables (set RESEND_API_KEY)." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);

    const fromEmail = "onboarding@resend.dev";
    const subject = `New Contact Form Submission - ${name}`;

    console.log("Resend Email Debug:", {
      to: toEmail,
      from: fromEmail,
      replyTo: email,
      subject,
    });


    const res = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: toEmail,
      subject,
      replyTo: email,
      react: EmailTemplate({
        name,
        email,
        projectType,
        timeline,
        message,
        time: new Date().toLocaleString(),
      }),
    });

    console.log("Resend Response:", res);

    return NextResponse.json({ success: true, data: res });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send email";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }



}
