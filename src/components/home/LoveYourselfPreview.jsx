"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/lib/router";
import CtaLink from "@/components/site/CtaLink";
import SectionLabel from "@/components/site/SectionLabel";
import Reveal from "@/components/site/Reveal";
import { loveYourself } from "@/lib/siteConfig";

/** A first look at the two businesses behind the third storefront. */
export default function LoveYourselfPreview() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <Reveal className="max-w-3xl">
          <SectionLabel>Love Yourself</SectionLabel>
          <h2 className="display-lg mt-8 text-espresso">
            Wellness And Beauty, Curated For You.
          </h2>
          <p className="mt-7 text-[1.02rem] leading-relaxed text-espresso/70">
            {loveYourself.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {loveYourself.brands.map((brand, index) => (
            <Reveal key={brand.slug} delay={index * 0.08}>
              <Link
                to="/love-yourself"
                className="group flex h-full flex-col justify-between border border-espresso/15 bg-ivory p-8 transition-colors duration-300 hover:border-espresso/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 sm:p-10"
              >
                <div>
                  <p className="eyebrow text-espresso/45">{brand.discipline}</p>
                  <h3 className="display-md mt-6 text-espresso">{brand.name}</h3>
                  <p className="mt-5 text-[0.96rem] leading-relaxed text-espresso/65">{brand.copy}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-3 font-body text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-espresso">
                  Meet {brand.shortName}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none"
                    strokeWidth={1.5}
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <CtaLink to="/love-yourself" variant="textLink">
            Explore Love Yourself
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
