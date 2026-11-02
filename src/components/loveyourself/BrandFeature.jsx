"use client";

import React from "react";
import { Image } from "@/components/ui/image";
import CtaLink from "@/components/site/CtaLink";
import { cn } from "@/lib/utils";

/**
 * One featured business inside Love Yourself. Brands link out only once an
 * official destination is confirmed; until then the action asks the studio
 * directly, so no visitor ever meets a dead or invented link.
 */
export default function BrandFeature({ brand, index }) {
  const flipped = index % 2 === 1;

  return (
    <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
      <div className={cn("lg:col-span-5", flipped && "lg:order-2")}>
        {brand.image ? (
          <div className="aspect-[4/5] w-full overflow-hidden">
            <Image
              src={brand.image}
              alt={brand.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="flex aspect-[4/5] w-full flex-col justify-between bg-espresso p-8 text-ivory sm:p-10">
            <span className="eyebrow text-ivory/45">{brand.discipline}</span>
            <span className="display-md text-ivory">{brand.name}</span>
            <span className="eyebrow text-[0.58rem] leading-relaxed text-ivory/40">
              Official brand mark to be supplied
            </span>
          </div>
        )}
      </div>

      <div className={cn("lg:col-span-7", flipped && "lg:order-1")}>
        <p className="eyebrow text-espresso/45">{brand.discipline}</p>
        <h2 className="display-lg mt-5 text-espresso">{brand.name}</h2>
        <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-espresso/70">{brand.copy}</p>
        <p className="mt-5 max-w-xl text-[0.92rem] leading-relaxed text-espresso/55">{brand.detail}</p>

        <div className="mt-9">
          {brand.url ? (
            <CtaLink href={brand.url} target="_blank" rel="noreferrer noopener">
              {brand.cta}
              <span className="sr-only"> (opens in a new tab)</span>
            </CtaLink>
          ) : (
            <CtaLink to="/contact" variant="primary">
              {brand.pendingCta}
            </CtaLink>
          )}
        </div>

        <p className="mt-6 max-w-xl text-[0.72rem] uppercase tracking-[0.14em] text-espresso/40">
          {brand.url
            ? "Opens the brand's own website"
            : "Official destination to follow — ask us and we'll introduce you"}
        </p>
      </div>
    </article>
  );
}
