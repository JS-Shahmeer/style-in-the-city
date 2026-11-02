"use client";

import React from "react";
import { Image } from "@/components/ui/image";
import CtaLink from "@/components/site/CtaLink";
import SectionLabel from "@/components/site/SectionLabel";
import { BOOK_PATH, business, images } from "@/lib/siteConfig";

/**
 * The studio's front door: the new brand name, the three-part tagline, and one
 * clear invitation to explore the three storefronts below.
 */
export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-ivory">
      <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 pb-16 pt-12 lg:min-h-[calc(100svh-9rem)] lg:grid-cols-12 lg:gap-14 lg:px-10 lg:pb-20 lg:pt-16">
        <div className="lg:col-span-6">
          <SectionLabel>Personal Styling · Closet Organization · Wellness & Beauty</SectionLabel>

          <h1 className="display-hero mt-8 text-espresso">Style In The City Studio</h1>

          <p className="display-md mt-7 leading-[1.12] text-espresso/85">
            <span className="block">Love Your Style.</span>
            <span className="block">Love Your Closet.</span>
            <span className="block">Love Yourself.</span>
          </p>

          <p className="mt-8 max-w-lg text-[1.02rem] leading-relaxed text-espresso/70">
            Your style is more than what you wear. It's how you express yourself, how you feel in your
            space, and how you show up every day. Discover a more personal approach to style, closet
            organization, beauty, and feeling good from the inside out.
          </p>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <CtaLink href="#storefronts" event="explore_studio_click">
              Explore The Studio
            </CtaLink>
            <CtaLink
              to={`${BOOK_PATH}?service=style-debut`}
              variant="textLink"
              event="book_cta_click"
              eventProps={{ location: "hero" }}
            >
              Book A Style Session
            </CtaLink>
          </div>

          <p className="eyebrow mt-12 border-t border-espresso/15 pt-6 text-espresso/60">
            {business.philosophy}
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="aspect-[4/5] w-full overflow-hidden lg:w-[calc(100%+2.5rem)]">
            <Image
              src={images.heroHome}
              alt="A stylist holding a ruffled white blouse on a pearl-trimmed hanger beside racks of black and white clothing in a bright studio"
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <p className="mt-4 text-[0.75rem] uppercase tracking-[0.16em] text-espresso/50">
            Three doors: your style, your closet, and you.
          </p>
        </div>
      </div>
    </section>
  );
}
