"use client";

import React from "react";
import CtaLink from "@/components/site/CtaLink";
import SectionLabel from "@/components/site/SectionLabel";
import PendingNote from "@/components/site/PendingNote";
import { BOOK_PATH, business, hasValue } from "@/lib/siteConfig";

const LABEL = "eyebrow text-espresso/50";

/**
 * Service area, appointment format and investment — each element only appears
 * once the business has confirmed the detail, otherwise a clear placeholder is
 * shown instead of an invented fact.
 */
export default function ServiceAreaPanel({ tone = "light" }) {
  const dark = tone === "dark";
  const formats = Array.isArray(business.appointmentFormats) ? business.appointmentFormats : [];
  const startingPrice = business.pricing.closetOrganizationFrom;

  return (
    <div className={dark ? "text-ivory" : "text-espresso"}>
      <SectionLabel tone={dark ? "dark" : "light"}>Where We Work & What It Costs</SectionLabel>
      <h2 className="display-lg mt-8">Clear Answers Before You Commit</h2>

      <div className="mt-14 grid gap-10 sm:grid-cols-3">
        <div className={dark ? "border-t border-ivory/20 pt-7" : "border-t border-espresso/20 pt-7"}>
          <p className={dark ? "eyebrow text-ivory/50" : LABEL}>Service Area</p>
          <p className="mt-5 text-[1rem] leading-relaxed">
            {hasValue(business.serviceArea)
              ? business.serviceArea
              : "We're confirming exactly which areas we serve."}
          </p>
        </div>

        <div className={dark ? "border-t border-ivory/20 pt-7" : "border-t border-espresso/20 pt-7"}>
          <p className={dark ? "eyebrow text-ivory/50" : LABEL}>Session Format</p>
          <p className="mt-5 text-[1rem] leading-relaxed">
            {formats.length > 0
              ? formats.join(" · ")
              : "In your home, virtually, or another arrangement — tell us your preference and we'll confirm what's possible."}
          </p>
        </div>

        <div className={dark ? "border-t border-ivory/20 pt-7" : "border-t border-espresso/20 pt-7"}>
          <p className={dark ? "eyebrow text-ivory/50" : LABEL}>Investment</p>
          <p className="mt-5 text-[1rem] leading-relaxed">
            {hasValue(startingPrice)
              ? `Closet organization from ${startingPrice}.`
              : "Request a personalized quote. Every closet is a different size, so we quote each project individually — with no obligation and nothing to pay before we've spoken."}
          </p>
        </div>
      </div>

      <div className="mt-12">
        <PendingNote tone={tone}>
          Appointment times, deposits and cancellation terms are confirmed personally once we've
          spoken about your project — we'll go through all of it with you before your session.
        </PendingNote>
      </div>

      <div className="mt-12">
        <CtaLink
          to={BOOK_PATH}
          variant={dark ? "onDark" : "primary"}
          event="book_cta_click"
          eventProps={{ location: "service_area_panel" }}
        >
          Request A Personalized Quote
        </CtaLink>
      </div>
    </div>
  );
}
