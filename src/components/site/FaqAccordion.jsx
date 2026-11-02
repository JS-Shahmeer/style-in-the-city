"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export default function FaqAccordion({ items, tone = "light" }) {
  const [openIndex, setOpenIndex] = useState(null);
  const dark = tone === "dark";

  return (
    <div className={cn("divide-y", dark ? "divide-ivory/15" : "divide-espresso/15")}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `faq-button-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => {
                  setOpenIndex(isOpen ? null : index);
                  if (!isOpen) trackEvent("faq_opened", { question: item.question });
                }}
                className="flex w-full items-start justify-between gap-6 py-7 text-left"
              >
                <span
                  className={cn(
                    "font-heading text-[1.15rem] font-bold leading-snug tracking-[-0.015em] sm:text-[1.4rem]",
                    dark ? "text-ivory" : "text-espresso"
                  )}
                >
                  {item.question}
                </span>
                {isOpen ? (
                  <Minus
                    className={cn("mt-1.5 h-5 w-5 shrink-0", dark ? "text-ivory" : "text-espresso")}
                    strokeWidth={1.6}
                  />
                ) : (
                  <Plus
                    className={cn(
                      "mt-1.5 h-5 w-5 shrink-0",
                      dark ? "text-ivory/60" : "text-espresso/45"
                    )}
                    strokeWidth={1.6}
                  />
                )}
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-all duration-500 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p
                  className={cn(
                    "max-w-2xl pb-9 pr-6 text-[1rem] leading-relaxed",
                    dark ? "text-ivory/70" : "text-espresso/70"
                  )}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
