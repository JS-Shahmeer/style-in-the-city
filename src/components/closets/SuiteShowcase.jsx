"use client";

import React from "react";
import { Image } from "@/components/ui/image";
import CtaLink from "@/components/site/CtaLink";
import SectionLabel from "@/components/site/SectionLabel";
import Reveal from "@/components/site/Reveal";
import { closetSuites, SUITE_DISCLAIMER } from "@/lib/suites";
import { BOOK_PATH, images, pricing } from "@/lib/siteConfig";

/**
 * The three named closet organization suites. Pricing is quoted by project
 * size, so no dollar figures are attached to the suites themselves.
 */
export default function SuiteShowcase() {
  return (
    <section id="suites" className="bg-espresso text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <Reveal className="max-w-3xl">
          <SectionLabel tone="dark">Closet Organization Suites</SectionLabel>
          <h2 className="display-xl mt-8 text-ivory">
            Three Suites. One Better Organized Closet.
          </h2>
          <p className="mt-7 text-[1.02rem] leading-relaxed text-ivory/75">
            From a thoughtfully organized smaller closet to a more extensive wardrobe transformation,
            we'll find the right approach for your space.
          </p>
          <p className="mt-5 text-[1rem] leading-relaxed text-ivory/60">
            {pricing.closetOrganization.note}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {closetSuites.map((suite, index) => (
            <Reveal key={suite.slug} delay={index * 0.08}>
              <article id={suite.slug} className="flex h-full flex-col">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={images[suite.image]}
                    alt={suite.alt}
                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-out hover:grayscale-0"
                  />
                </div>

                <div className="mt-6 flex items-baseline justify-between gap-4 border-t border-ivory/20 pt-5">
                  <span className="eyebrow text-ivory/55">Style inspiration: {suite.inspiration}</span>
                  <span className="eyebrow text-ivory/35">{suite.size}</span>
                </div>

                <h3 className="display-md mt-5 text-ivory">{suite.name}</h3>
                <p className="mt-5 text-[0.96rem] leading-relaxed text-ivory/70">{suite.copy}</p>

                <p className="eyebrow mt-7 text-ivory/50">{pricing.closetOrganization.display}</p>

                <div className="mt-auto pt-7">
                  <CtaLink
                    to={`${BOOK_PATH}?service=closet-organization`}
                    variant="textLinkDark"
                    event="book_cta_click"
                    eventProps={{ location: `suite_${suite.slug}` }}
                  >
                    Request A Quote
                  </CtaLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col gap-6 border-t border-ivory/20 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-[0.98rem] leading-relaxed text-ivory/70">
            Not sure which suite fits your closet? Tell us about your space and we'll recommend the
            right approach — and quote it honestly.
          </p>
          <CtaLink
            to={`${BOOK_PATH}?service=closet-organization`}
            variant="onDark"
            event="book_cta_click"
            eventProps={{ location: "suites_section" }}
          >
            Find Your Closet Suite
          </CtaLink>
        </Reveal>

        <p className="mt-8 max-w-2xl text-[0.8rem] leading-relaxed text-ivory/45">
          {SUITE_DISCLAIMER}
        </p>
      </div>
    </section>
  );
}
