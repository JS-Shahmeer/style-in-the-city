"use client";

import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { business } from "@/lib/siteConfig";

/** The studio's philosophy, given room to breathe between the doors and the services. */
export default function PhilosophyBand() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-10 lg:py-28">
        <Reveal>
          <SectionLabel className="justify-center">Our Philosophy</SectionLabel>
          <h2 className="display-lg mt-8 text-espresso">
            Styling With A Purpose.
            <span className="block text-espresso/40">From The Inside Out.</span>
          </h2>
          <p className="mx-auto mt-9 max-w-2xl text-[1.05rem] leading-relaxed text-espresso/70">
            Style is more than what you wear. It's how you express yourself, how you feel in your
            space, and how you show up every day — so we begin with what you already own, how you
            live, and how you want to feel, then build the looks and the systems that support it.
          </p>
          <p className="eyebrow mt-10 text-espresso/55">{business.tagline}</p>
        </Reveal>
      </div>
    </section>
  );
}
