"use client";

import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import PageHero from "@/components/site/PageHero";
import BrandFeature from "@/components/loveyourself/BrandFeature";
import CtaBand from "@/components/site/CtaBand";
import SectionLabel from "@/components/site/SectionLabel";
import Reveal from "@/components/site/Reveal";
import { BOOK_PATH, business, images, loveYourself } from "@/lib/siteConfig";

export default function LoveYourself() {
  usePageMeta({
    title: "Love Yourself — Wellness & Beauty | Style In The City Studio",
    description:
      "Feeling good goes beyond what you wear. Explore Trilivy Health Coach and Egalie Cosmetics, the wellness and beauty businesses featured by Style In The City Studio.",
    path: "/love-yourself",
  });

  return (
    <>
      <PageHero
        eyebrow="Love Yourself"
        title="Love Yourself, From The Inside Out."
        copy={loveYourself.intro}
        image={images.brandStory}
        imageAlt="Two stylists and a client laughing together in the studio after a session"
        primaryLabel="Ask About These Brands"
        primaryTo="/contact"
        primaryEvent="love_yourself_contact"
        secondaryLabel="Book a styling session"
        secondaryTo={`${BOOK_PATH}?service=style-debut`}
        note={
          <p className="max-w-2xl border-l border-espresso/25 pl-5 text-[0.84rem] leading-relaxed text-espresso/55">
            {business.philosophy}
          </p>
        }
      />

      <section className="border-t border-espresso/10 bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
          <Reveal className="max-w-3xl">
            <SectionLabel>Two Destinations</SectionLabel>
            <h2 className="display-lg mt-8 text-espresso">
              The people we send you to when the work continues inside.
            </h2>
            <p className="mt-7 text-[1.02rem] leading-relaxed text-espresso/70">
              We keep the studio's booking to styling and closet organization, and introduce the
              wellness and beauty side of the philosophy here instead — so you always know whose
              service you're booking.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl space-y-20 px-5 py-20 lg:px-10 lg:py-24 lg:space-y-28">
          {loveYourself.brands.map((brand, index) => (
            <Reveal key={brand.slug}>
              <BrandFeature brand={brand} index={index} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-espresso text-ivory">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-10 lg:py-24">
          <p className="eyebrow text-ivory/45">How It Fits Together</p>
          <p className="display-lg mt-8 text-ivory">
            Love your style. Love your closet. Love yourself.
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-[0.98rem] leading-relaxed text-ivory/60">
            {loveYourself.relationshipNote}
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="Your Next Step"
        title="Start with your style, or start with you."
        copy="Book a Style Debut, ask us about closet organization, or simply ask which of these businesses is right for you — we'll point you honestly."
        primaryLabel="Book A Style Session"
        primaryTo={`${BOOK_PATH}?service=style-debut`}
        primaryEvent="book_cta_click"
        secondaryLabel="Ask A Question"
        secondaryTo="/contact"
      />
    </>
  );
}
