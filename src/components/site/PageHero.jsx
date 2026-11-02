"use client";

import React from "react";
import { Image } from "@/components/ui/image";
import CtaLink from "@/components/site/CtaLink";
import SectionLabel from "@/components/site/SectionLabel";
import { BOOK_PATH } from "@/lib/siteConfig";

/**
 * The opening section shared by every inner page: an editorial image beside an
 * oversized headline and the page's primary action.
 */
export default function PageHero({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
  primaryLabel = "Book Your Session",
  primaryTo = BOOK_PATH,
  primaryEvent,
  primaryEventProps,
  secondaryLabel,
  secondaryTo,
  secondaryHref,
  note,
  tone = "light",
}) {
  const dark = tone === "dark";

  return (
    <section className={dark ? "overflow-hidden bg-espresso text-ivory" : "overflow-hidden bg-ivory"}>
      <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 pb-16 pt-12 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:pb-20 lg:pt-16">
        <div className="lg:col-span-6">
          <SectionLabel tone={dark ? "dark" : "light"}>{eyebrow}</SectionLabel>
          <h1 className={`display-xl mt-8 ${dark ? "text-ivory" : "text-espresso"}`}>{title}</h1>
          <p
            className={`mt-8 max-w-xl text-[1.05rem] leading-relaxed ${
              dark ? "text-ivory/70" : "text-espresso/70"
            }`}
          >
            {copy}
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <CtaLink
              to={primaryTo}
              variant={dark ? "onDark" : "primary"}
              event={primaryEvent}
              eventProps={primaryEventProps}
            >
              {primaryLabel}
            </CtaLink>
            {secondaryLabel && (
              <CtaLink
                to={secondaryTo}
                href={secondaryHref}
                variant={dark ? "textLinkDark" : "textLink"}
              >
                {secondaryLabel}
              </CtaLink>
            )}
          </div>
          {note && <div className="mt-12">{note}</div>}
        </div>

        <div className="lg:col-span-6">
          <div className="aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-[4/5] lg:w-[calc(100%+2.5rem)]">
            <Image src={image} alt={imageAlt} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
