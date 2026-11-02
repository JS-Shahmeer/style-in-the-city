"use client";

import React from "react";
import { cn } from "@/lib/utils";

/** A quietly ruled list used for frustrations, scope and inclusions. */
export default function CheckList({ items, tone = "light", columns = 1, numbered = false }) {
  const dark = tone === "dark";

  return (
    <ul
      className={cn(
        "divide-y",
        dark ? "divide-ivory/15" : "divide-espresso/10",
        columns === 2 && "sm:grid sm:grid-cols-2 sm:gap-x-12 sm:divide-y-0"
      )}
    >
      {items.map((item, index) => (
        <li
          key={item}
          className={cn(
            "flex items-start gap-5 py-5",
            columns === 2 && (dark ? "sm:border-t sm:border-ivory/15" : "sm:border-t sm:border-espresso/10")
          )}
        >
          <span
            className={cn(
              "eyebrow mt-1 shrink-0 text-[0.6rem]",
              dark ? "text-ivory/60" : "text-espresso/50"
            )}
          >
            {numbered ? String(index + 1).padStart(2, "0") : "—"}
          </span>
          <span
            className={cn(
              "text-[0.98rem] leading-relaxed",
              dark ? "text-ivory/75" : "text-espresso/75"
            )}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
