"use client";

import React from "react";
import { Link } from "@/lib/router";
import CtaBand from "@/components/site/CtaBand";
import SectionLabel from "@/components/site/SectionLabel";
import PendingNote from "@/components/site/PendingNote";
import { business } from "@/lib/siteConfig";

/** Shared frame for the privacy policy and terms of service. */
export default function LegalLayout({ title, intro, updated, sections, children }) {
  return (
    <>
      <section className="border-b border-espresso/10 bg-ivory">
        <div className="mx-auto max-w-3xl px-5 py-16 lg:px-10 lg:py-20">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="display-xl mt-8 text-espresso">
            {title}
          </h1>
          {intro && <p className="mt-6 text-[1.02rem] leading-relaxed text-espresso/70">{intro}</p>}
          {updated && (
            <p className="eyebrow mt-6 text-espresso/45">Last updated {updated}</p>
          )}
          <div className="mt-10 border border-espresso/20 bg-cream/60 px-6 py-5">
            <p className="eyebrow text-espresso/55">Template notice</p>
            <p className="mt-3 text-[0.88rem] leading-relaxed text-espresso/65">
              This document is a starting point. It should be reviewed and finalised by the business
              — and checked against local requirements — before the site is published.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-3xl px-5 py-16 lg:px-10 lg:py-20">
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="display-sm text-espresso">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-[0.98rem] leading-relaxed text-espresso/70">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.items && (
                    <ul className="space-y-3 pt-1">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-4">
                          <span aria-hidden="true" className="text-taupe">
                            —
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {children}

          <div className="mt-14 border-t border-espresso/10 pt-8">
            <p className="text-[0.95rem] leading-relaxed text-espresso/70">
              Questions about this document?{" "}
              <Link to="/contact" className="underline underline-offset-4 hover:text-espresso">
                Contact us
              </Link>{" "}
              and we'll answer personally.
            </p>
            <PendingNote className="mt-5">
              Confirmed business contact details, registered address, and governing jurisdiction will
              be listed here once the business provides them.
              {business.email ? null : " Until then, the contact form reaches us directly."}
            </PendingNote>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Styling with a purpose. From the inside out."
        title="Ready when you are."
        copy="Book a session or send a question — we'll reply personally."
        primaryLabel="Book Your Session"
        primaryTo="/book-a-session"
        primaryEvent="book_cta_click"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </>
  );
}
