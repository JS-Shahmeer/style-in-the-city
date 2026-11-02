"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";
import usePageMeta from "@/hooks/usePageMeta";
import InquiryForm from "@/components/forms/InquiryForm";
import SectionLabel from "@/components/site/SectionLabel";
import PendingNote from "@/components/site/PendingNote";
import CtaLink from "@/components/site/CtaLink";
import CheckList from "@/components/site/CheckList";
import Reveal from "@/components/site/Reveal";
import { trackEvent } from "@/lib/analytics";
import { BOOK_PATH, business, hasValue, socialLinks } from "@/lib/siteConfig";

export default function Contact() {
  usePageMeta({
    title: "Contact — Style In The City Studio",
    description:
      "Get in touch about closet organization or personal styling. Send a message and we'll reply personally.",
    path: "/contact",
  });

  const social = socialLinks();

  return (
    <>
      <section className="border-b border-espresso/10 bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-20">
          <Reveal className="max-w-3xl">
            <SectionLabel>Contact</SectionLabel>
            <h1 className="display-xl mt-8 text-espresso">
              Say hello — we'll answer personally.
            </h1>
            <p className="mt-7 text-[1.02rem] leading-relaxed text-espresso/70">
              Whether you have a question, aren't sure which service fits, or would like to talk
              something through before booking, this reaches us directly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 lg:grid-cols-12 lg:gap-20 lg:px-10 lg:py-20">
          <div className="lg:col-span-7">
            <h2 className="display-md text-espresso">
              Send us a message
            </h2>
            <div className="mt-8">
              <InquiryForm mode="contact" />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="border border-espresso/15 bg-cream/40 p-8">
              <SectionLabel>Direct Details</SectionLabel>
              <ul className="mt-6 space-y-4 text-[0.98rem] text-espresso/75">
                {hasValue(business.email) && (
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-blush" strokeWidth={1.4} aria-hidden="true" />
                    <a
                      href={`mailto:${business.email}`}
                      onClick={() => trackEvent("contact_email_click", { location: "contact_page" })}
                      className="underline underline-offset-4 hover:text-espresso"
                    >
                      {business.email}
                    </a>
                  </li>
                )}
                {hasValue(business.phone) && (
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-blush" strokeWidth={1.4} aria-hidden="true" />
                    <a
                      href={`tel:${business.phone.replace(/\s/g, "")}`}
                      onClick={() => trackEvent("contact_phone_click", { location: "contact_page" })}
                      className="underline underline-offset-4 hover:text-espresso"
                    >
                      {business.phone}
                    </a>
                  </li>
                )}
                {!hasValue(business.email) && !hasValue(business.phone) && (
                  <li className="text-espresso/60">
                    Direct phone and email details are being finalised. Until they're published, the
                    form beside this panel reaches us directly.
                  </li>
                )}
                {hasValue(business.serviceArea) && <li>{business.serviceArea}</li>}
                {hasValue(business.hours) && <li>{business.hours}</li>}
              </ul>
              <PendingNote className="mt-6">
                Opening hours and appointment availability are confirmed personally when you book —
                we'll always agree the timing with you before your session.
              </PendingNote>

              {social.length > 0 && (
                <div className="mt-8 border-t border-espresso/15 pt-6">
                  <p className="eyebrow text-[0.58rem] text-espresso/45">Follow along</p>
                  <ul className="mt-4 flex flex-wrap gap-5">
                    {social.map(([name, url]) => (
                      <li key={name}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-[0.95rem] text-espresso/70 underline underline-offset-4 hover:text-espresso"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-8 border border-espresso/15 p-8">
              <SectionLabel>When You Get In Touch</SectionLabel>
              <div className="mt-5">
                <CheckList
                  items={[
                    "A real person reads every message — no autoresponders.",
                    "We'll answer questions honestly, including when something isn't right for you.",
                    "Nothing is booked, and nothing is charged, until you're ready.",
                  ]}
                />
              </div>
              <div className="mt-8">
                <CtaLink to={BOOK_PATH} variant="primary">
                  Book A Session Instead
                </CtaLink>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
