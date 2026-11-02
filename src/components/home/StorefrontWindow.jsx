"use client";

import React from "react";
import { Link } from "@/lib/router";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { trackEvent } from "@/lib/analytics";

/**
 * One storefront: an arched studio window above a caption plate. The whole
 * window and plate are a single link, so the entire storefront is clickable,
 * keyboard focusable and readable as one destination.
 */
export default function StorefrontWindow({ experience }) {
  return (
    <Link
      to={experience.to}
      onClick={() => trackEvent("storefront_click", { storefront: experience.slug })}
      aria-label={`${experience.name} — ${experience.cta}`}
      className="group flex h-full flex-col rounded-t-[8rem] transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory focus-visible:ring-offset-4 focus-visible:ring-offset-espresso sm:rounded-t-[10rem]"
    >
      <div className="relative overflow-hidden rounded-t-[8rem] border border-ivory/25 sm:rounded-t-[10rem]">
        <div className="aspect-[3/4] w-full">
          <Image
            src={experience.image}
            alt={experience.alt}
            className="h-full w-full object-cover grayscale transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>

        {/* Window light: lifts the photograph as the visitor approaches. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/10 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-ivory/0 transition-colors duration-500 group-hover:bg-ivory/10"
        />

        <span className="eyebrow absolute left-7 top-9 text-ivory/70">{experience.number}</span>

        <span className="absolute inset-x-7 bottom-7 flex items-center justify-between gap-4 text-ivory">
          <span className="font-body text-[0.66rem] font-semibold uppercase tracking-[0.2em]">
            {experience.kicker}
          </span>
          <ArrowUpRight
            aria-hidden="true"
            className="h-5 w-5 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none"
            strokeWidth={1.4}
          />
        </span>
      </div>

      <div className="flex flex-1 flex-col border border-t-0 border-ivory/25 px-6 pb-8 pt-7 sm:px-7">
        <h3 className="display-md text-ivory">{experience.name}</h3>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-ivory/65">{experience.copy}</p>
        <span className="mt-7 inline-flex items-center gap-3 self-start font-body text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ivory">
          {experience.cta}
          <span
            aria-hidden="true"
            className="h-px w-8 bg-ivory/50 transition-all duration-500 ease-out group-hover:w-14 motion-reduce:transition-none"
          />
        </span>
      </div>
    </Link>
  );
}
