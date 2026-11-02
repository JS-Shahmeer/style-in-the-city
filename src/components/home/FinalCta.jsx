"use client";

import React from "react";
import { Image } from "@/components/ui/image";
import CtaLink from "@/components/site/CtaLink";
import SectionLabel from "@/components/site/SectionLabel";
import { BOOK_PATH, business, images, pricing } from "@/lib/siteConfig";

export default function FinalCta() {
  return (
    <section className="bg-espresso text-ivory">
      <div className="mx-auto grid max-w-[1600px] items-stretch lg:grid-cols-12">
        <div className="px-5 py-24 lg:col-span-7 lg:px-10 lg:py-32">
          <SectionLabel tone="dark">Your Next Step</SectionLabel>
          <h2 className="display-hero mt-8 max-w-[16ch] text-ivory">
            Your Next Chapter Starts In Your Closet.
          </h2>
          <p className="mt-10 max-w-xl text-[1.05rem] leading-relaxed text-ivory/75">
            Ready for a fresh start? Let's make getting dressed feel easier.
          </p>
          <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-ivory/55">
            Whether you're ready for a full closet reset or simply want a fresh perspective on your
            style, we're here to help you take the first step.
          </p>
          <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-ivory/55">
            Style Debut is {pricing.styleDebut.price} for three hours, additional styling time is{" "}
            {pricing.additionalSessions.display}, and closet organization is quoted by the size of
            your project.
          </p>
          <div className="mt-11 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <CtaLink
              to={`${BOOK_PATH}?service=style-debut`}
              variant="onDark"
              event="book_cta_click"
              eventProps={{ location: "home_final" }}
            >
              Book A Style Session
            </CtaLink>
            <CtaLink to="/closet-organization" variant="onDarkOutline">
              Explore Closet Organization
            </CtaLink>
          </div>
          <p className="eyebrow mt-16 text-ivory/55">{business.tagline}</p>
        </div>

        <div className="lg:col-span-5">
          <Image
            src={images.closingPortrait}
            alt="A smiling client in a black leather vest and denim, a feathery white piece draped over her shoulder, beside a lamp-lit mirror in the studio"
            className="h-64 w-full object-cover grayscale sm:h-80 lg:h-full"
          />
        </div>
      </div>
    </section>
  );
}
