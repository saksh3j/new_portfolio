import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function sanitize(input: unknown): string {
  if (typeof input !== "string") {
    return "";
  }

  return input.trim();
}

function validatePayload(payload: ContactPayload): string | null {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!payload.name || payload.name.length > 120) {
    return "Invalid name.";
  }
  if (!payload.email || payload.email.length > 200 || !emailPattern.test(payload.email)) {
    return "Invalid email.";
  }
  if (!payload.subject || payload.subject.length > 160) {
    return "Invalid subject.";
  }
  if (!payload.message || payload.message.length > 4000) {
    return "Invalid message.";
  }

  return null;
}

function apiJson(body: Record<string, string>, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: {
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    const payload: ContactPayload = {
      name: sanitize(body.name),
      email: sanitize(body.email),
      subject: sanitize(body.subject),
      message: sanitize(body.message),
    };

    const validationError = validatePayload(payload);
    if (validationError) {
      return apiJson({ message: validationError }, 400);
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === "true" || port === 465;
    const to = process.env.CONTACT_TO ?? user;
    const from = process.env.CONTACT_FROM ?? user;

    if (!host || !user || !pass || !to || !from || Number.isNaN(port)) {
      return apiJson({ message: "Email service is not configured." }, 500);
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: payload.email,
      subject: `[Portfolio] ${payload.subject}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        "",
        payload.message,
      ].join("\n"),
    });

    return apiJson({ message: "Message sent successfully." });
  } catch {
    return apiJson({ message: "Unable to send message right now." }, 500);
  }
}
