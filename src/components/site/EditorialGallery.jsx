"use client";

import React from "react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

/** Asymmetric, caption-led image grid reused across service pages. */
export default function EditorialGallery({ items, note, className, tone = "light" }) {
  const dark = tone === "dark";
  return (
    <div className={className}>
      <div className="grid gap-5 sm:grid-cols-12">
        {items.map((item, index) => (
          <Reveal key={item.caption} delay={index * 0.06} className={cn(item.span || "sm:col-span-6")}>
            <figure className="group h-full">
              <div className={cn("overflow-hidden", item.ratio || "aspect-[4/3]")}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </div>
              <figcaption
                className={cn(
                  "mt-3 text-[0.8rem] uppercase tracking-[0.14em]",
                  dark ? "text-ivory/55" : "text-espresso/55"
                )}
              >
                {item.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      {note && (
        <p
          className={cn(
            "mt-10 max-w-2xl text-[0.85rem] leading-relaxed",
            dark ? "text-ivory/50" : "text-espresso/50"
          )}
        >
          {note}
        </p>
      )}
    </div>
  );
}
