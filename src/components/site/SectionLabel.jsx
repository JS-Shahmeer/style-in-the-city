"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function SectionLabel({ children, tone = "light", className }) {
  const dark = tone === "dark";
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-3",
        dark ? "text-ivory/60" : "text-espresso/55",
        className
      )}
    >
      <span
        className={cn("h-px w-8", dark ? "bg-ivory/40" : "bg-espresso/30")}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
