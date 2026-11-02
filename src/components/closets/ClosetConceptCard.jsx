"use client";

import React from "react";
import { Image } from "@/components/ui/image";
import CtaLink from "@/components/site/CtaLink";
import { cn } from "@/lib/utils";
import { BOOK_PATH, images } from "@/lib/siteConfig";

/** One of the six styling closets: photograph, description, details and CTA. */
export default function ClosetConceptCard({ concept }) {
  return (
    <article id={concept.slug} className="group h-full">
      <div className={cn("overflow-hidden", concept.ratio)}>
        <Image
          src={images[concept.image]}
          alt={concept.alt}
          className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
        />
      </div>

      <div className="mt-6 flex items-baseline justify-between gap-4 border-t border-espresso/15 pt-5">
        <span className="eyebrow text-espresso/50">{concept.kicker}</span>
        <span className="eyebrow text-espresso/35">{concept.number}</span>
      </div>

      <h3 className="display-md mt-5 text-espresso">{concept.name}</h3>
      <p className="mt-5 text-[0.98rem] leading-relaxed text-espresso/70">{concept.blurb}</p>

      <ul className="mt-7 space-y-2.5">
        {concept.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-[0.9rem] leading-relaxed text-espresso/60">
            <span aria-hidden="true" className="text-espresso/30">
              —
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {concept.note && (
        <p className="mt-6 border-l border-espresso/20 pl-4 text-[0.8rem] leading-relaxed text-espresso/50">
          {concept.note}
        </p>
      )}

      <div className="mt-7">
        <CtaLink
          to={`${BOOK_PATH}?service=${concept.service}`}
          variant="textLink"
          event="book_cta_click"
          eventProps={{ location: `closet_concept_${concept.slug}` }}
        >
          {concept.cta}
        </CtaLink>
      </div>
    </article>
  );
}
