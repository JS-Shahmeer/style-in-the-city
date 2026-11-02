import { NextResponse } from "next/server";
import { emptyInquiry, serviceOptions, formatOptions, validateInquiry } from "@/lib/inquiryOptions";
import { getTransporter, isMailConfigured, smtpConfig } from "@/lib/server/mailer";
import { buildConfirmationEmail, buildStudioEmail } from "@/lib/server/inquiryEmail";
import { rateLimit } from "@/lib/server/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODES = ["booking", "consultation", "contact"];
const MAX_LENGTH = { goals: 4000, notes: 4000, default: 300 };
const MIN_FILL_MS = 2500; // humans don't complete the form in under ~2.5s

function clean(body) {
  const inquiry = {};
  for (const [key, fallback] of Object.entries(emptyInquiry)) {
    const value = body?.[key];
    if (typeof fallback === "boolean") {
      inquiry[key] = value === true;
    } else {
      const limit = MAX_LENGTH[key] || MAX_LENGTH.default;
      // Strip control characters (except newlines/tabs) to keep emails and headers clean.
      inquiry[key] =
        typeof value === "string"
          ? value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, limit)
          : "";
    }
  }
  inquiry.inquiry_type = MODES.includes(body?.inquiry_type) ? body.inquiry_type : "booking";
  if (inquiry.service && !serviceOptions.some((o) => o.value === inquiry.service)) inquiry.service = "";
  if (inquiry.session_format && !formatOptions.some((o) => o.value === inquiry.session_format)) {
    inquiry.session_format = "";
  }
  // Single-line fields must never carry line breaks into headers.
  for (const key of ["full_name", "email", "phone"]) inquiry[key] = inquiry[key].replace(/[\r\n]+/g, " ");
  return inquiry;
}

function clientIp(request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Bots: filled the hidden field or submitted inhumanly fast. Pretend success.
  const elapsed = Number(body?.elapsed_ms);
  if ((typeof body?.company === "string" && body.company.trim()) || (Number.isFinite(elapsed) && elapsed < MIN_FILL_MS)) {
    return NextResponse.json({ ok: true });
  }

  if (!rateLimit(clientIp(request))) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again a little later." },
      { status: 429 }
    );
  }

  const inquiry = clean(body);
  const errors = validateInquiry(inquiry, inquiry.inquiry_type);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "Please check the form.", errors }, { status: 422 });
  }

  if (!isMailConfigured()) {
    console.error("[inquiry] SMTP is not configured (SMTP_USER / SMTP_PASS / MAIL_TO).");
    return NextResponse.json(
      { ok: false, error: "Email delivery is not configured yet." },
      { status: 503 }
    );
  }

  const config = smtpConfig();
  const meta = {
    receivedAt: new Date().toLocaleString("en-US", { timeZone: "America/Denver", timeZoneName: "short" }),
    page: request.headers.get("referer") || "",
  };

  try {
    const transporter = getTransporter();
    const studio = buildStudioEmail(inquiry, meta);
    await transporter.sendMail({
      from: config.from,
      to: config.to,
      replyTo: { name: inquiry.full_name, address: inquiry.email },
      subject: studio.subject,
      text: studio.text,
      html: studio.html,
    });

    if (config.sendConfirmation) {
      const confirmation = buildConfirmationEmail(inquiry);
      await transporter
        .sendMail({
          from: config.from,
          to: { name: inquiry.full_name, address: inquiry.email },
          replyTo: config.to,
          subject: confirmation.subject,
          text: confirmation.text,
          html: confirmation.html,
        })
        .catch((error) => console.error("[inquiry] confirmation email failed:", error.message));
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[inquiry] send failed:", error.message);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your request just now." },
      { status: 502 }
    );
  }
}

export function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed." }, { status: 405 });
}
