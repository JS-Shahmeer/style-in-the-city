"use client";

import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import CtaBand from "@/components/site/CtaBand";
import CtaLink from "@/components/site/CtaLink";
import SectionLabel from "@/components/site/SectionLabel";
import FaqAccordion from "@/components/site/FaqAccordion";
import PendingNote from "@/components/site/PendingNote";
import Reveal from "@/components/site/Reveal";
import { allFaqs } from "@/lib/faqs";
import { BOOK_PATH } from "@/lib/siteConfig";

export default function Faq() {
  usePageMeta({
    title: "Frequently Asked Questions — Style In The City Studio",
    description:
      "Answers about closet organization and personal styling sessions: what's included, donation decisions, session formats, pricing and how to book.",
    path: "/faq",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: allFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  });

  return (
    <>
      <section className="border-b border-espresso/10 bg-ivory">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-10 lg:py-20">
          <Reveal>
            <SectionLabel>Frequently Asked Questions</SectionLabel>
            <h1 className="display-xl mt-8 text-espresso">
              Everything women ask us before they begin.
            </h1>
            <p className="mt-7 max-w-2xl text-[1.02rem] leading-relaxed text-espresso/70">
              If your question isn't here, ask it directly — we'd rather answer it honestly than have
              you guess.
            </p>
            <PendingNote className="mt-7">
              Where a policy is still to be confirmed by the business, the answer stays general on
              purpose. We'll fill in specifics — session length, deposits, cancellation terms — as
              soon as they're agreed.
            </PendingNote>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-10 lg:py-20">
          <FaqAccordion items={allFaqs} />

          <div className="mt-16 border border-espresso/15 bg-cream/50 px-8 py-12 text-center">
            <h2 className="display-md text-espresso">
              Have a question? Let's talk.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[0.98rem] leading-relaxed text-espresso/70">
              Send it over and we'll answer personally — whether you're ready to book or simply
              curious about how this works.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CtaLink to="/contact" variant="primary">
                Ask Your Question
              </CtaLink>
              <CtaLink to={BOOK_PATH} variant="textLink">
                Book a session instead
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Styling with a purpose. From the inside out."
        title="Your closet can feel different. Let's begin."
        copy="Start with the introductory style session, or tell us what you need and we'll guide you."
        primaryLabel="Book Your Session"
        primaryTo={BOOK_PATH}
        primaryEvent="book_cta_click"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </>
  );
}
