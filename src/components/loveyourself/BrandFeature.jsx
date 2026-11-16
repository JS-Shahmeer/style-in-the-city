"use client";

import React from "react";
import { Image } from "@/components/ui/image";
import CtaLink from "@/components/site/CtaLink";
import { cn } from "@/lib/utils";
import { BOOK_PATH } from "@/lib/siteConfig";

/** One featured business inside Love Yourself, with its bookable offers. */
export default function BrandFeature({ brand, index }) {
  const flipped = index % 2 === 1;

  return (
    <article id={brand.slug} className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
      <div className={cn("lg:col-span-5", flipped && "lg:order-2")}>
        {brand.image ? (
          <div className="aspect-[4/5] w-full overflow-hidden">
            <Image src={brand.image} alt={brand.imageAlt} className="h-full w-full object-cover" />
          </div>
        ) : (
          <div className="flex aspect-[4/5] w-full flex-col justify-between bg-espresso p-8 text-ivory sm:p-10">
            <span className="eyebrow text-ivory/45">{brand.discipline}</span>
            <span className="display-md text-ivory">{brand.name}</span>
            <span className="eyebrow text-[0.58rem] leading-relaxed text-ivory/40">
              {brand.tagline || "Official brand mark to be supplied"}
            </span>
          </div>
        )}
      </div>

      <div className={cn("lg:col-span-7", flipped && "lg:order-1")}>
        <p className="eyebrow text-espresso/45">{brand.discipline}</p>
        <h2 className="display-lg mt-5 text-espresso">{brand.name}</h2>
        {brand.tagline && <p className="display-sm mt-5 text-espresso/60">{brand.tagline}</p>}
        <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-espresso/70">{brand.copy}</p>

        <ol className="mt-9 divide-y divide-espresso/15 border-y border-espresso/15">
          {brand.offers.map((offer, offerIndex) => (
            <li key={offer.name} className="py-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="display-sm text-espresso">
                  <span className="mr-3 text-espresso/30">{String(offerIndex + 1).padStart(2, "0")}</span>
                  {offer.name}
                </h3>
                <span className="eyebrow text-espresso/60">{offer.price}</span>
              </div>
              <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-espresso/65">{offer.copy}</p>
              <div className="mt-4">
                <CtaLink
                  to={`${BOOK_PATH}?service=${offer.service}`}
                  variant="textLink"
                  event="book_cta_click"
                  eventProps={{ location: `love_yourself_${offer.service}` }}
                >
                  Book Now
                </CtaLink>
              </div>
            </li>
          ))}
        </ol>

        {brand.url && (
          <p className="mt-6 text-[0.8rem] uppercase tracking-[0.14em] text-espresso/45">
            <a
              href={brand.url}
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-4 hover:text-espresso"
            >
              Visit {brand.shortName}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        )}
      </div>
    </article>
  );
}
