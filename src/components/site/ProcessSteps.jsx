"use client";

import React from "react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    number: "01",
    title: "The Reset",
    short: "Review your wardrobe together.",
    detail:
      "We go through your wardrobe side by side and decide what stays, what goes, and what deserves another look. You hold the final say on every single piece — we're there to make the decisions easier, not to make them for you.",
  },
  {
    number: "02",
    title: "The System",
    short: "Organize around your real routine.",
    detail:
      "Clothing, shoes and accessories are arranged into an intuitive system that fits your space and how you actually get dressed — so the closet stays ordered long after we've left.",
  },
  {
    number: "03",
    title: "The Give-Back",
    short: "Give unwanted pieces a next chapter.",
    detail:
      "Anything you're ready to pass on is prepared for donation, and we coordinate delivery to an approved nonprofit partner where that's available and agreed with you beforehand.",
  },
];

export default function ProcessSteps({ tone = "light", variant = "full" }) {
  const dark = tone === "dark";

  return (
    <div className="grid gap-12 md:grid-cols-3 md:gap-12">
      {STEPS.map((step) => (
        <div key={step.number} className={cn("border-t pt-8", dark ? "border-ivory/20" : "border-espresso/20")}>
          <span className={cn("display-sm block", dark ? "text-ivory/40" : "text-espresso/30")}>
            {step.number}
          </span>
          <h3 className={cn("display-sm mt-6", dark ? "text-ivory" : "text-espresso")}>
            {step.title}
          </h3>
          <p
            className={cn(
              "mt-5 text-[0.98rem] leading-relaxed",
              dark ? "text-ivory/70" : "text-espresso/70"
            )}
          >
            {variant === "full" ? step.detail : step.short}
          </p>
          {variant === "full" && (
            <p
              className={cn(
                "mt-4 text-[0.88rem] font-medium uppercase tracking-[0.12em]",
                dark ? "text-ivory/45" : "text-espresso/50"
              )}
            >
              {step.short}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
