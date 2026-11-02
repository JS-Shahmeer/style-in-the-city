"use client";

import React from "react";
import { cn } from "@/lib/utils";

/** Marks a detail that is still to be confirmed by the business. */
export default function PendingNote({ children, tone = "light", className }) {
  return (
    <p
      className={cn(
        "max-w-2xl border-l pl-5 text-[0.84rem] leading-relaxed",
        tone === "dark" ? "border-ivory/25 text-ivory/55" : "border-espresso/25 text-espresso/55",
        className
      )}
    >
      {children}
    </p>
  );
}
