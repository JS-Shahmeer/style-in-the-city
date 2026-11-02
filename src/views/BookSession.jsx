"use client";

import React, { useEffect, useState } from "react";
import { CalendarDays, Heart, ShieldCheck } from "lucide-react";
import usePageMeta from "@/hooks/usePageMeta";
import InquiryForm from "@/components/forms/InquiryForm";
import SectionLabel from "@/components/site/SectionLabel";
import PendingNote from "@/components/site/PendingNote";
import CtaLink from "@/components/site/CtaLink";
import CheckList from "@/components/site/CheckList";
import Reveal from "@/components/site/Reveal";
import FaqAccordion from "@/components/site/FaqAccordion";
import { cn } from "@/lib/utils";
import { serviceOptions } from "@/lib/inquiryOptions";
import { allFaqs } from "@/lib/faqs";
import { trackEvent } from "@/lib/analytics";
import { business, hasValue } from "@/lib/siteConfig";

const PATHS = [
  {
    value: "booking",
    label: "Book a Session",
    blurb: "Choose the service you'd like and tell us the timing that suits you.",
  },
  {
    value: "consultation",
    label: "Request a Consultation",
    blurb: "Not sure which service fits? Ask and we'll point you in the right direction.",
  },
];

const ASSURANCES = [
  {
    icon: CalendarDays,
    title: "A request, then a real conversation",
    copy: "We don't hold a self-service calendar here. Your request comes to us, and we reply personally to confirm the date, the format and the quote.",
  },
  {
    icon: ShieldCheck,
    title: "You stay in control",
    copy: "Every keep-or-donate decision is yours. Nothing leaves your home without your agreement.",
  },
  {
    icon: Heart,
    title: "No judgement, ever",
    copy: "However your closet looks today, it's a perfectly good place to start. That's the whole point.",
  },
];

export default function BookSession() {
  // The ?service= preselection is read after hydration so the page can be
  // pre-rendered statically.
  const [initialService, setInitialService] = useState("");

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("service") || "";
    if (serviceOptions.some((option) => option.value === requested)) {
      setInitialService(requested);
    }
  }, []);

  const [mode, setMode] = useState("booking");

  usePageMeta({
    title: "Book a Session — Style In The City Studio",
    description:
      "Book a closet organization or personal styling session, or request a consultation if you're not sure where to start. We reply personally to confirm every appointment.",
    path: "/book-a-session",
  });

  return (
    <>
      <section className="border-b border-espresso/10 bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-20">
          <Reveal className="max-w-3xl">
            <SectionLabel>Book A Session</SectionLabel>
            <h1 className="display-xl mt-8 text-espresso">
              Let's get you started.
            </h1>
            <p className="mt-7 text-[1.02rem] leading-relaxed text-espresso/70">
              Two simple ways in: book the service you already know you need, or ask for guidance and
              we'll help you choose. Either way, a person reads your message and replies.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 lg:grid-cols-12 lg:gap-20 lg:px-10 lg:py-20">
          <div className="lg:col-span-7">
            <div
              role="tablist"
              aria-label="How would you like to begin?"
              className="flex flex-col border border-espresso/15 sm:flex-row"
            >
              {PATHS.map((path) => (
                <button
                  key={path.value}
                  role="tab"
                  type="button"
                  id={`tab-${path.value}`}
                  aria-selected={mode === path.value}
                  aria-controls="inquiry-panel"
                  onClick={() => {
                    setMode(path.value);
                    trackEvent("booking_path_selected", { path: path.value });
                  }}
                  className={cn(
                    "eyebrow flex-1 px-6 py-5 text-left text-[0.62rem] transition-colors duration-300 sm:text-center",
                    mode === path.value
                      ? "bg-espresso text-ivory"
                      : "text-espresso/60 hover:text-espresso"
                  )}
                >
                  {path.label}
                </button>
              ))}
            </div>

            <p className="mt-5 text-[0.9rem] text-espresso/60">
              {PATHS.find((path) => path.value === mode)?.blurb}
            </p>

            <div
              role="tabpanel"
              id="inquiry-panel"
              aria-labelledby={`tab-${mode}`}
              className="mt-10"
            >
              <InquiryForm key={initialService} mode={mode} initialService={initialService} />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="space-y-8">
              {ASSURANCES.map((item) => (
                <div key={item.title} className="border-t border-espresso/15 pt-6">
                  <item.icon className="h-5 w-5 text-blush" strokeWidth={1.3} aria-hidden="true" />
                  <h2 className="display-sm mt-5 text-espresso">{item.title}</h2>
                  <p className="mt-3 text-[0.93rem] leading-relaxed text-espresso/65">
                    {item.copy}
                  </p>
                </div>
              ))}

              <div className="border border-espresso/15 bg-cream/40 p-8">
                <SectionLabel>Reassurance</SectionLabel>
                <div className="mt-5">
                  <CheckList
                    items={[
                      "No payment is taken on this site",
                      "No obligation once you've sent a request",
                      "Your details are used only to reply to you",
                    ]}
                  />
                </div>
                <PendingNote className="mt-6">
                  {hasValue(business.email) || hasValue(business.phone)
                    ? "Prefer to call or email? Our direct details are on the contact page."
                    : "Prefer a different route? The contact page is always open, and we'll reply the same way we would to a booking request."}
                </PendingNote>
                <div className="mt-6">
                  <CtaLink to="/contact" variant="textLink">
                    Go to the contact page
                  </CtaLink>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-espresso/10 bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-10 lg:py-20">
          <SectionLabel>Before You Send It</SectionLabel>
          <h2 className="display-lg mt-8 text-espresso">
            The questions that usually come up
          </h2>
          <div className="mt-10">
            <FaqAccordion items={allFaqs.slice(7, 12)} />
          </div>
          <div className="mt-10">
            <CtaLink to="/faq" variant="textLink">
              Read every question
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
