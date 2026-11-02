"use client";

import React from "react";
import { Link } from "@/lib/router";
import { cn } from "@/lib/utils";

/**
 * The studio wordmark: the brand name set tight, "Studio" held in wide letters
 * between hairlines, and the three-part tagline beneath.
 */
export default function Wordmark({ tone = "light", withTagline = true, className }) {
  const dark = tone === "dark";

  return (
    <Link
      to="/"
      aria-label="Style In The City Studio — home"
      className={cn("group block leading-none", className)}
    >
      <span
        className={cn(
          "block font-heading text-[1.08rem] font-extrabold uppercase leading-none tracking-[-0.02em] sm:text-[1.22rem]",
          dark ? "text-ivory" : "text-espresso"
        )}
      >
        Style In The City
      </span>

      <span className="mt-1.5 flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            "h-px w-5 transition-all duration-500 group-hover:w-8 motion-reduce:transition-none",
            dark ? "bg-ivory/40" : "bg-espresso/35"
          )}
        />
        <span
          className={cn(
            "font-body text-[0.58rem] font-semibold uppercase tracking-[0.34em]",
            dark ? "text-ivory/70" : "text-espresso/60"
          )}
        >
          Studio
        </span>
      </span>

      {withTagline && (
        <span
          className={cn(
            "eyebrow mt-2.5 hidden text-[0.5rem] tracking-[0.15em] xl:block",
            dark ? "text-ivory/45" : "text-espresso/40"
          )}
        >
          Love Your Style · Love Your Closet · Love Yourself
        </span>
      )}
    </Link>
  );
}
