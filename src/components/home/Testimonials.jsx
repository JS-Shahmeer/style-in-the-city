"use client";

import React from "react";
import { Quote } from "lucide-react";
import CtaLink from "@/components/site/CtaLink";
import SectionLabel from "@/components/site/SectionLabel";
import Reveal from "@/components/site/Reveal";
import { BOOK_PATH } from "@/lib/siteConfig";

export default function Testimonials() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-10 lg:py-28">
        <Reveal>
          <SectionLabel className="justify-center">Client Stories</SectionLabel>
          <h2 className="display-lg mt-8 text-espresso">
            Real Women. Real Wardrobe Wins.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-[1.02rem] leading-relaxed text-espresso/70">
            Every story on this page will be a real one, shared with permission. As clients tell us
            what changed for them, we'll publish their words here — their name, their experience,
            and the service they chose.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-2xl border border-espresso/15 bg-ivory px-8 py-12 sm:px-14">
            <Quote className="mx-auto h-7 w-7 text-blush" strokeWidth={1.2} aria-hidden="true" />
            <p className="display-sm mt-7 text-espresso">
              The best way to know how this feels is to begin your own session.
            </p>
            <p className="mt-5 text-[0.92rem] leading-relaxed text-espresso/60">
              We'd rather show you nothing than something invented, so this space stays open until
              real clients fill it.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CtaLink
                to={`${BOOK_PATH}?service=style-debut`}
                event="book_cta_click"
                eventProps={{ location: "home_testimonials" }}
              >
                Book A Style Session
              </CtaLink>
              <CtaLink to="/contact" variant="textLink">
                Share your experience
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
