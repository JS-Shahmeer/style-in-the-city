"use client";

import React from "react";
import CtaLink from "@/components/site/CtaLink";
import SectionLabel from "@/components/site/SectionLabel";
import Reveal from "@/components/site/Reveal";
import StorefrontWindow from "@/components/home/StorefrontWindow";
import { experiences } from "@/lib/experiences";
import { BOOK_PATH } from "@/lib/siteConfig";

/** The three studio doors: Love Your Style, Love Your Closet, Love Yourself. */
export default function Storefronts() {
  return (
    <section id="storefronts" className="scroll-mt-24 bg-espresso text-ivory">
      <div className="mx-auto max-w-[1600px] px-5 py-20 lg:px-10 lg:py-28">
        <Reveal className="max-w-3xl">
          <SectionLabel tone="dark">Enter The Studio</SectionLabel>
          <h2 className="display-xl mt-8 text-ivory">Three Doors. One Studio.</h2>
          <p className="mt-7 text-[1.02rem] leading-relaxed text-ivory/70">
            Your style, your closet and how you feel about yourself are connected. Step into the door
            that sounds most like you today — every one of them leads somewhere real.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          {experiences.map((experience, index) => (
            <Reveal key={experience.slug} delay={index * 0.08}>
              <StorefrontWindow experience={experience} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col gap-6 border-t border-ivory/20 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-[0.98rem] leading-relaxed text-ivory/65">
            Not sure which door to open first? Most clients begin with a Style Debut — three hours,
            one-to-one, built around the wardrobe you already own.
          </p>
          <CtaLink
            to={`${BOOK_PATH}?service=style-debut`}
            variant="onDark"
            event="book_cta_click"
            eventProps={{ location: "storefronts" }}
          >
            Book A Style Session
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
