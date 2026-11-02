"use client";

import React from "react";
import CtaLink from "@/components/site/CtaLink";
import SectionLabel from "@/components/site/SectionLabel";
import Reveal from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

/** The repeated closing action band used across the inner pages. */
export default function CtaBand({
  eyebrow,
  title,
  copy,
  primaryLabel,
  primaryTo,
  primaryEvent,
  secondaryLabel,
  secondaryTo,
  className,
}) {
  return (
    <section className={cn("bg-cream", className)}>
      <div className="mx-auto max-w-4xl px-5 py-24 text-center lg:px-10 lg:py-32">
        <Reveal>
          {eyebrow && <SectionLabel className="justify-center">{eyebrow}</SectionLabel>}
          <h2 className="display-lg mt-8 text-espresso">{title}</h2>
          {copy && (
            <p className="mx-auto mt-8 max-w-2xl text-[1.05rem] leading-relaxed text-espresso/70">
              {copy}
            </p>
          )}
          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaLink to={primaryTo} event={primaryEvent} eventProps={{ location: "cta_band" }}>
              {primaryLabel}
            </CtaLink>
            {secondaryLabel && (
              <CtaLink to={secondaryTo} variant="outline">
                {secondaryLabel}
              </CtaLink>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
