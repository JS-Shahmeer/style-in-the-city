import "server-only";
import {
  closetScopeOptions,
  formatOptions,
  serviceOptions,
} from "@/lib/inquiryOptions";

const TYPE_LABELS = {
  booking: "Booking request",
  consultation: "Consultation request",
  contact: "Contact message",
};

const OCCASION_LABELS = {
  "personal-style": "Understanding my personal style",
  "wardrobe-review": "Reviewing my existing wardrobe",
  "outfit-building": "Creating outfit combinations",
  event: "Preparing for an upcoming event",
  vacation: "Planning outfits for a vacation",
  priorities: "Identifying priorities and wardrobe gaps",
};

const labelFor = (options, value) =>
  options.find((option) => (option.value ?? option) === value)?.label ?? value;

export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Ordered label/value rows for the studio's notification email. */
function rows(inquiry) {
  return [
    ["Name", inquiry.full_name],
    ["Email", inquiry.email],
    ["Phone", inquiry.phone],
    ["Service", inquiry.service && labelFor(serviceOptions, inquiry.service)],
    ["Session format", inquiry.session_format && labelFor(formatOptions, inquiry.session_format)],
    ["Closet scope", inquiry.closet_scope && labelFor(closetScopeOptions, inquiry.closet_scope)],
    ["Focus", inquiry.occasion_type && (OCCASION_LABELS[inquiry.occasion_type] || inquiry.occasion_type)],
    ["Preferred date", inquiry.preferred_date],
    ["Availability", inquiry.availability],
    [inquiry.inquiry_type === "contact" ? "Message" : "Goals", inquiry.goals],
    ["Notes", inquiry.notes],
    ["Privacy consent", inquiry.privacy_consent ? "Yes" : "No"],
    ["Marketing opt-in", inquiry.marketing_consent ? "Yes" : "No"],
  ].filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== "");
}

export function buildStudioEmail(inquiry, meta = {}) {
  const type = TYPE_LABELS[inquiry.inquiry_type] || "Website inquiry";
  const subject = `${type}: ${inquiry.full_name}${
    inquiry.service ? ` (${labelFor(serviceOptions, inquiry.service).split(" — ")[0]})` : ""
  }`;
  const list = rows(inquiry);

  const text = [
    `${type} from the website`,
    "",
    ...list.map(([label, value]) => `${label}: ${value}`),
    "",
    `Received: ${meta.receivedAt || new Date().toISOString()}`,
    meta.page ? `Page: ${meta.page}` : null,
    "",
    "Reply to this email to answer the client directly.",
  ]
    .filter((line) => line !== null)
    .join("\n");

  const html = `<!doctype html><html><body style="margin:0;background:#f7f7f7;font-family:Helvetica,Arial,sans-serif;color:#000">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7f7;padding:24px 0"><tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#fff;border:1px solid #e6e6e6">
<tr><td style="background:#000;color:#fff;padding:20px 28px;font-size:12px;letter-spacing:.2em;text-transform:uppercase;font-weight:600">Style In The City Studio</td></tr>
<tr><td style="padding:28px 28px 8px"><p style="margin:0;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#737373;font-weight:600">${escapeHtml(type)}</p>
<h1 style="margin:10px 0 0;font-size:22px;line-height:1.2;text-transform:uppercase;letter-spacing:-.02em">${escapeHtml(inquiry.full_name)}</h1></td></tr>
<tr><td style="padding:16px 28px 8px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${list
  .map(
    ([label, value]) =>
      `<tr><td style="padding:10px 0;border-top:1px solid #e6e6e6;width:150px;vertical-align:top;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#737373;font-weight:600">${escapeHtml(
        label
      )}</td><td style="padding:10px 0;border-top:1px solid #e6e6e6;font-size:15px;line-height:1.55;white-space:pre-wrap">${
        label === "Email"
          ? `<a href="mailto:${escapeHtml(value)}" style="color:#000">${escapeHtml(value)}</a>`
          : escapeHtml(value)
      }</td></tr>`
  )
  .join("")}
</table></td></tr>
<tr><td style="padding:16px 28px 28px;font-size:12px;color:#737373">Received ${escapeHtml(
    meta.receivedAt || new Date().toISOString()
  )}${meta.page ? ` · ${escapeHtml(meta.page)}` : ""}<br>Reply to this email to answer the client directly.</td></tr>
</table></td></tr></table></body></html>`;

  return { subject, text, html };
}

/** Optional acknowledgement to the visitor (off unless SEND_CONFIRMATION_EMAIL=true). */
export function buildConfirmationEmail(inquiry) {
  const firstName = inquiry.full_name.trim().split(/\s+/)[0];
  const subject = "We've received your request — Style In The City Studio";
  const text = `Hi ${firstName},

Thank you for getting in touch with Style In The City Studio. Your request is with us, and we'll reply personally to talk through the details and confirm timing. Nothing is booked, and nothing is charged, until we've spoken.

Love your style, Love your closet, Love Yourself.
Style In The City Studio`;
  const html = `<!doctype html><html><body style="margin:0;background:#f7f7f7;font-family:Helvetica,Arial,sans-serif;color:#000">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 0"><tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#fff;border:1px solid #e6e6e6">
<tr><td style="background:#000;color:#fff;padding:20px 28px;font-size:12px;letter-spacing:.2em;text-transform:uppercase;font-weight:600">Style In The City Studio</td></tr>
<tr><td style="padding:28px;font-size:15px;line-height:1.65">
<p style="margin:0 0 14px">Hi ${escapeHtml(firstName)},</p>
<p style="margin:0 0 14px">Thank you for getting in touch with Style In The City Studio. Your request is with us, and we'll reply personally to talk through the details and confirm timing.</p>
<p style="margin:0 0 22px">Nothing is booked, and nothing is charged, until we've spoken.</p>
<p style="margin:0;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#737373;font-weight:600">Love your style, Love your closet, Love Yourself.</p>
</td></tr></table></td></tr></table></body></html>`;
  return { subject, text, html };
}
