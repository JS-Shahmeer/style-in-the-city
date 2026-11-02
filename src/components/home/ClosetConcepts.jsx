"use client";

import React from "react";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import CtaLink from "@/components/site/CtaLink";
import ClosetConceptCard from "@/components/closets/ClosetConceptCard";
import { closetConcepts } from "@/lib/closets";

/** The closet showcase: six styling closets, each with its own photograph. */
export default function ClosetConcepts() {
  return (
    <section id="closets" className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <Reveal className="max-w-3xl">
          <SectionLabel>The Styling Closets</SectionLabel>
          <h2 className="display-lg mt-8 text-espresso">
            Six Closets. One For Every Part Of Your Life.
          </h2>
          <p className="mt-7 text-[1.02rem] leading-relaxed text-espresso/70">
            Styling inspiration rather than storage projects: six closets we build with clients, each
            one starting with what you already own. Every look below is planned in a Style Debut
            session.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-12">
          {closetConcepts.map((concept, index) => (
            <Reveal key={concept.slug} delay={(index % 2) * 0.06} className={concept.span}>
              <ClosetConceptCard concept={concept} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex flex-col gap-6 border-t border-espresso/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-[0.98rem] leading-relaxed text-espresso/70">
            Two halves of one studio: the closets you wear, and the closet itself. If your wardrobe
            needs the space itself sorted out first, that's our closet organization work — three
            suites, always quoted by the size of your project.
          </p>
          <CtaLink to="/closet-organization" variant="textLink">
            See The Three Closet Suites
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
