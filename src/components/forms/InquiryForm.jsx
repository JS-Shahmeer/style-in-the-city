"use client";

import React, { useRef, useState } from "react";
import { AlertCircle } from "lucide-react";
import {
  CheckboxField,
  SelectField,
  TextAreaField,
  TextField,
} from "@/components/forms/Field";
import {
  closetScopeOptions,
  emptyInquiry,
  formatOptions,
  serviceOptions,
  validateInquiry,
} from "@/lib/inquiryOptions";
import { trackEvent } from "@/lib/analytics";
import { submitInquiry } from "@/lib/submitInquiry";
import { BOOK_PATH } from "@/lib/siteConfig";

const COPY = {
  booking: {
    submit: "Send My Booking Request",
    note: "We'll reply personally to confirm your date and answer anything that's still open. Nothing is booked, and nothing is charged, until we've spoken.",
  },
  consultation: {
    submit: "Request My Consultation",
    note: "Tell us as little or as much as you like. We'll come back with honest guidance on where to start — no obligation to book anything.",
  },
  contact: {
    submit: "Send My Message",
    note: "Your message comes straight to us and we'll reply personally.",
  },
};

const submitClass =
  "eyebrow w-full border border-espresso bg-espresso px-9 py-4 text-[0.8125rem] text-ivory transition-colors duration-300 hover:bg-ivory hover:text-espresso disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto";

export default function InquiryForm({ mode = "booking", initialService = "" }) {
  const [values, setValues] = useState({ ...emptyInquiry, service: initialService });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const submitted = useRef(false);
  const started = useRef(false);
  const startedAt = useRef(Date.now());
  const honeypot = useRef(null);
  const formRef = useRef(null);

  const update = (name, value) => {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    if (!started.current) {
      started.current = true;
      trackEvent("booking_form_start", { form: mode });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitted.current || status === "submitting") return;

    // Quietly accepts bot submissions without sending anything.
    if (honeypot.current && honeypot.current.value) {
      setStatus("success");
      return;
    }

    const validation = validateInquiry(values, mode);
    setErrors(validation);

    if (Object.keys(validation).length > 0) {
      const firstField = Object.keys(validation)[0];
      const element = formRef.current?.querySelector(`#${firstField}`);
      if (element) element.focus();
      return;
    }

    submitted.current = true;
    setStatus("submitting");

    try {
      await submitInquiry({
        ...values,
        inquiry_type: mode,
        company: honeypot.current?.value || "",
        elapsed_ms: Date.now() - startedAt.current,
      });
      trackEvent("inquiry_submitted", {
        form: mode,
        service: values.service || "not-applicable",
      });
      setStatus("success");
    } catch (error) {
      submitted.current = false;
      setStatus("error");
    }
  };

  if (status === "success") {
    const firstName = values.full_name.trim().split(" ")[0];
    return (
      <div className="border border-espresso/15 bg-cream/50 px-7 py-10 sm:px-12 sm:py-14">
        <p className="eyebrow text-espresso/50">Request received</p>
        <h3 className="display-sm mt-6 text-espresso">
          {firstName ? `Thank you, ${firstName}.` : "Thank you."} Your request is with us.
        </h3>
        <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-espresso/70">
          We'll come back to you personally to talk through the details and confirm timing. Nothing
          is confirmed until we've spoken together.
        </p>

        <div className="mt-9 border-t border-espresso/15 pt-7">
          <p className="eyebrow text-espresso/50">What happens next</p>
          <ol className="mt-5 space-y-3 text-[0.95rem] text-espresso/70">
            <li>1. We read your notes and check the timing you've suggested.</li>
            <li>2. We reply with any questions and a clear quote for your service.</li>
            <li>3. We agree a date, the format, and exactly what to expect on the day.</li>
          </ol>
        </div>

        <button type="button" onClick={() => window.location.reload()} className={`mt-9 ${submitClass}`}>
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-8">
      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 border border-espresso/40 bg-espresso/[0.04] px-5 py-4"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-espresso" strokeWidth={1.5} />
          <p className="text-[0.9rem] leading-relaxed text-espresso/80">
            Something interrupted that send — your details weren't stored. Please try again, or
            reach us through the contact page.
          </p>
        </div>
      )}

      <div className="grid gap-8 sm:grid-cols-2">
        <TextField
          id="full_name"
          label="Full name"
          required
          autoComplete="name"
          value={values.full_name}
          error={errors.full_name}
          onChange={(event) => update("full_name", event.target.value)}
        />
        <TextField
          id="email"
          label="Email address"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          error={errors.email}
          onChange={(event) => update("email", event.target.value)}
        />
      </div>

      <TextField
        id="phone"
        label="Phone number (optional)"
        type="tel"
        autoComplete="tel"
        hint="Only if you'd prefer a call or text."
        value={values.phone}
        error={errors.phone}
        onChange={(event) => update("phone", event.target.value)}
      />

      {mode !== "contact" && (
        <div className="grid gap-8 sm:grid-cols-2">
          <SelectField
            id="service"
            label="Preferred service"
            required
            placeholder="Please choose a service"
            options={serviceOptions}
            value={values.service}
            error={errors.service}
            onChange={(event) => update("service", event.target.value)}
          />
          <SelectField
            id="session_format"
            label="Preferred session format"
            placeholder="No preference"
            options={formatOptions}
            hint="We'll confirm what's available in your area."
            value={values.session_format}
            error={errors.session_format}
            onChange={(event) => update("session_format", event.target.value)}
          />

          {values.service === "closet-organization" && (
            <SelectField
              id="closet_scope"
              label="What are we working on?"
              placeholder="Please choose"
              options={closetScopeOptions}
              value={values.closet_scope}
              error={errors.closet_scope}
              onChange={(event) => update("closet_scope", event.target.value)}
            />
          )}

          {values.service === "style-debut" && (
            <SelectField
              id="occasion_type"
              label="What would you like to focus on?"
              placeholder="Please choose"
              options={[
                { value: "personal-style", label: "Understanding my personal style" },
                { value: "wardrobe-review", label: "Reviewing my existing wardrobe" },
                { value: "outfit-building", label: "Creating outfit combinations" },
                { value: "event", label: "Preparing for an upcoming event" },
                { value: "vacation", label: "Planning outfits for a vacation" },
                { value: "priorities", label: "Identifying priorities and wardrobe gaps" },
              ]}
              value={values.occasion_type}
              error={errors.occasion_type}
              onChange={(event) => update("occasion_type", event.target.value)}
            />
          )}

          <TextField
            id="preferred_date"
            label="Preferred date (if you have one)"
            type="date"
            value={values.preferred_date}
            error={errors.preferred_date}
            onChange={(event) => update("preferred_date", event.target.value)}
          />
          <TextField
            id="availability"
            label="Days or times that usually suit you"
            placeholder="Weekday mornings, for example"
            value={values.availability}
            error={errors.availability}
            onChange={(event) => update("availability", event.target.value)}
          />
        </div>
      )}

      <TextAreaField
        id="goals"
        label={mode === "contact" ? "Your message" : "Tell us about your wardrobe or styling goals"}
        required
        rows={5}
        value={values.goals}
        error={errors.goals}
        onChange={(event) => update("goals", event.target.value)}
      />

      <TextAreaField
        id="notes"
        label="Anything else we should know? (optional)"
        rows={3}
        value={values.notes}
        error={errors.notes}
        onChange={(event) => update("notes", event.target.value)}
      />

      {/* Spam protection — hidden from visitors and assistive technology. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" ref={honeypot} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="space-y-5 border-t border-espresso/10 pt-7">
        <CheckboxField
          id="privacy_consent"
          required
          checked={values.privacy_consent}
          error={errors.privacy_consent}
          onChange={(event) => update("privacy_consent", event.target.checked)}
          label="I've read the privacy policy and I'm happy for my details to be used to respond to this request."
        />
        <CheckboxField
          id="marketing_consent"
          checked={values.marketing_consent}
          onChange={(event) => update("marketing_consent", event.target.checked)}
          label="Optional: keep me updated with styling tips and occasional news. You can opt out at any time."
        />
      </div>

      <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "submitting"} className={submitClass}>
          {status === "submitting" ? "Sending…" : COPY[mode].submit}
        </button>
        <p className="text-[0.82rem] leading-relaxed text-espresso/55">
          {mode === "contact" ? COPY.contact.note : COPY[mode].note}
        </p>
      </div>

      <p className="text-[0.78rem] leading-relaxed text-espresso/45">
        Your details are stored securely and are only used to respond to your request. Read our{" "}
        <a href="/privacy-policy" className="underline underline-offset-4 hover:text-espresso">
          privacy policy
        </a>{" "}
        or choose a different starting point on the{" "}
        <a href={BOOK_PATH} className="underline underline-offset-4 hover:text-espresso">
          booking page
        </a>
        .
      </p>
    </form>
  );
}
