"use client";

import React from "react";
import { Image } from "@/components/ui/image";
import CtaLink from "@/components/site/CtaLink";
import SectionLabel from "@/components/site/SectionLabel";
import Reveal from "@/components/site/Reveal";
import { closetSuites, DONATION_NOTE, LARGER_CLOSET_NOTE } from "@/lib/suites";
import { BOOK_PATH, images, pricing } from "@/lib/siteConfig";

/** The three closet organization suites, each priced by closet size. */
export default function SuiteShowcase() {
  return (
    <section id="suites" className="bg-espresso text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <Reveal className="max-w-3xl">
          <SectionLabel tone="dark">Closet Organization · Project Size</SectionLabel>
          <h2 className="display-xl mt-8 text-ivory">
            Three Suites. One Better Organized Closet.
          </h2>
          <p className="mt-7 text-[1.02rem] leading-relaxed text-ivory/75">
            Complete organization and declutter, priced by the size of your closet.
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
                  <span className="eyebrow text-ivory/55">{suite.kind}</span>
                  <span className="eyebrow text-ivory/35">{suite.size}</span>
                </div>

                <h3 className="display-md mt-5 text-ivory">{suite.name}</h3>

                <div className="mt-5 flex items-baseline gap-4">
                  <span className="font-heading text-[2rem] font-extrabold leading-none tracking-tight text-ivory">
                    {suite.price}
                  </span>
                  <span className="eyebrow text-ivory/55">{suite.area}</span>
                </div>

                <p className="mt-5 text-[0.96rem] leading-relaxed text-ivory/70">{suite.copy}</p>
                {suite.duration && (
                  <p className="eyebrow mt-4 text-ivory/50">{suite.duration}</p>
                )}

                <div className="mt-auto pt-7">
                  <CtaLink
                    to={`${BOOK_PATH}?service=${suite.service}`}
                    variant="textLinkDark"
                    event="book_cta_click"
                    eventProps={{ location: `suite_${suite.slug}` }}
                  >
                    Book This Suite
                  </CtaLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 grid gap-8 border-t border-ivory/20 pt-10 md:grid-cols-3">
          <div>
            <p className="eyebrow text-ivory/50">Larger Closets</p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ivory/70">{LARGER_CLOSET_NOTE}</p>
          </div>
          <div>
            <p className="eyebrow text-ivory/50">Donations</p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ivory/70">{DONATION_NOTE}</p>
          </div>
          <div>
            <p className="eyebrow text-ivory/50">After Your Overhaul · {pricing.closetAddOn.display}</p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ivory/70">{pricing.closetAddOn.note}</p>
          </div>
        </Reveal>

        <div className="mt-12">
          <CtaLink
            to={`${BOOK_PATH}?service=closet-organization`}
            variant="onDark"
            event="book_cta_click"
            eventProps={{ location: "suites_section" }}
          >
            Request A Closet Estimate
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
