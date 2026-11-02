"use client";

import React from "react";
import { Image } from "@/components/ui/image";
import SectionLabel from "@/components/site/SectionLabel";
import Reveal from "@/components/site/Reveal";
import { images } from "@/lib/siteConfig";

const BENEFITS = [
  {
    number: "01",
    title: "Less Clutter",
    copy: "Make room for the pieces that serve you — and stop negotiating with the ones that don't.",
  },
  {
    number: "02",
    title: "More Possibilities",
    copy: "Rediscover outfits and combinations you already own, arranged so you can see them.",
  },
  {
    number: "03",
    title: "More Confidence",
    copy: "Get dressed with greater ease and purpose, in a closet that says yes.",
  },
];

export default function BrandPromise() {
  return (
    <section className="bg-espresso text-ivory">
      <div className="mx-auto max-w-[1600px] px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start lg:gap-20">
          <Reveal className="lg:col-span-7">
            <SectionLabel tone="dark">Our Story</SectionLabel>
            <h2 className="display-hero mt-8 max-w-[18ch] text-ivory">
              Styling With A Purpose.
              <span className="block text-ivory/40">From The Inside Out.</span>
            </h2>
            <p className="mt-10 max-w-3xl text-[1.05rem] leading-relaxed text-ivory/75">
              We help women simplify their closets, rediscover what they own, and feel more confident
              in what they wear.
            </p>
            <p className="mt-6 max-w-3xl text-[1.02rem] leading-relaxed text-ivory/55">
              Our styling is contemporary, sophisticated and always wearable — age-appropriate
              without ever feeling dated. It reflects your personality rather than a formula or a
              trend, and it's built around the woman you are right now.
            </p>
            <p className="mt-6 max-w-3xl text-[1.02rem] leading-relaxed text-ivory/55">
              Most women don't need an entirely new wardrobe. They need fresh eyes on their closet, a
              little guidance, and someone genuinely in their corner.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <Image
                src={images.brandStory}
                alt="A stylist and client laughing together after a styling session in the studio"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-10 border-t border-ivory/20 pt-14 sm:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div key={benefit.number}>
              <p className="font-heading text-[0.8rem] font-bold tracking-[0.22em] text-ivory/45">
                {benefit.number}
              </p>
              <h3 className="display-sm mt-6 text-ivory">{benefit.title}</h3>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-ivory/65">{benefit.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
