"use client";

import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import PageHero from "@/components/site/PageHero";
import CheckList from "@/components/site/CheckList";
import CtaBand from "@/components/site/CtaBand";
import SectionLabel from "@/components/site/SectionLabel";
import PendingNote from "@/components/site/PendingNote";
import Reveal from "@/components/site/Reveal";
import { Image } from "@/components/ui/image";
import { BOOK_PATH, images } from "@/lib/siteConfig";

const BELIEFS = [
  "Feeling good in your clothes shouldn't depend on your budget, your size, or your age.",
  "No one should feel judged for the state of their closet — everyone's starts somewhere.",
  "A wardrobe is a working tool, not a museum. It should fit the life you're living now.",
  "Clothing that still has life in it deserves a next wear, somewhere.",
  "Practical help beats fashionable advice, every single time.",
];

export default function OurPurpose() {
  usePageMeta({
    title: "Our Purpose — Style In The City Studio",
    description:
      "Style is personal, purpose makes it meaningful. How Style In The City Studio helps women feel confident in their clothes, and gives unwanted clothing a thoughtful next chapter.",
    path: "/our-purpose",
  });

  return (
    <>
      <PageHero
        eyebrow="About & Our Purpose"
        title="Style Is Personal. Purpose Makes It Meaningful."
        copy="Helping women feel comfortable and confident in their clothes — one organized, thoughtfully considered wardrobe at a time."
        image={images.studioTeam}
        imageAlt="Two stylists smiling together in the Style In The City studio"
        primaryLabel="Book Your Session"
        primaryTo={BOOK_PATH}
        primaryEvent="book_cta_click"
        primaryEventProps={{ location: "purpose_hero" }}
        secondaryLabel="Talk to us first"
        secondaryTo="/contact"
        tone="dark"
      />

      <section className="border-t border-espresso/10 bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-24">
          <Reveal className="lg:col-span-7">
            <SectionLabel>Why We Do This</SectionLabel>
            <h2 className="display-lg mt-8 text-espresso">
              Most women don't need more clothes. They need less noise.
            </h2>
            <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-espresso/70">
              <p>
                Getting dressed is one of the few things every woman does every single day — and for
                a lot of us, it's the part of the day that starts with a sigh. A closet that's
                overflowing and still feels unusable isn't a personal failing. It's just a system
                that was never built.
              </p>
              <p>
                So we help women build it. We simplify the everyday decisions, create practical
                organization that holds up after we've gone, and help make thoughtful choices about
                the clothing that no longer serves them.
              </p>
              <p>
                And because clothing that's finished with one person is often just beginning for
                someone else, we look for ways to make sure those pieces don't end up in a bin.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="overflow-hidden">
              <Image
                src={images.clientSweater}
                alt="A client trying on a cream knit sweater during a styling session"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
          <Reveal className="max-w-3xl">
            <SectionLabel>What We Believe</SectionLabel>
            <h2 className="display-lg mt-8 text-espresso">
              The principles behind every session.
            </h2>
          </Reveal>
          <div className="mt-10">
            <CheckList items={BELIEFS} numbered />
          </div>
        </div>
      </section>

      <section className="bg-espresso text-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-24">
          <Reveal className="lg:col-span-6">
            <SectionLabel tone="dark">Giving Clothing A Second Life</SectionLabel>
            <h2 className="display-lg mt-8 text-ivory">
              Less waste. More confidence. More purpose.
            </h2>
            <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-ivory/70">
              <p>
                Every session creates a pile of clothing its owner no longer needs. Handled well,
                that pile is an opportunity — for another woman rebuilding her life, for a
                charity shop's shelves, for less textile waste in the ground.
              </p>
              <p>
                We prepare those pieces carefully and coordinate delivery to an approved nonprofit
                partner where that's available and agreed with you. Which partner, and how the
                hand-over works, is confirmed with you before anything leaves your home.
              </p>
            </div>
            <div className="mt-9 border-t border-ivory/15 pt-7">
              <p className="text-[0.95rem] leading-relaxed text-ivory/60">
                We're building this part of the business deliberately and slowly, because the
                intention only means something if the execution is real.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-6">
            <div className="overflow-hidden">
              <Image
                src={images.clientStyled}
                alt="A client styled in a leather vest, a feathered white shawl and denim"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <SectionLabel>Our Commitments</SectionLabel>
              <h2 className="display-md mt-8 text-espresso">
                How we'd rather work.
              </h2>
              <div className="mt-8">
                <CheckList
                  items={[
                    "Personal service, not a subscription or a sales funnel",
                    "Your decisions, your pace — nothing pushed on you",
                    "Donation handled with dignity, never as a dumping ground",
                    "No invented claims, no fake reviews, no pressure tactics",
                  ]}
                />
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-6">
              <div className="border border-espresso/15 bg-cream/50 p-8 sm:p-10">
                <SectionLabel>A Note From Our Founder</SectionLabel>
                <p className="mt-6 text-[1rem] leading-relaxed text-espresso/70">
                  The story of how Style In The City Studio began belongs to our founder — including the
                  years of experience, the training, and the moment that started it all. We're
                  preparing that introduction with her, and it will be published here with her
                  approved words and photograph rather than a version we've written for her.
                </p>
                <p className="mt-5 text-[1rem] leading-relaxed text-espresso/70">
                  What we can tell you now is the part that matters most: she started this to help
                  women stop feeling defeated by their own wardrobes.
                </p>
                <PendingNote className="mt-8">
                  Founder biography, photograph, and professional background will appear here once
                  approved by the business.
                </PendingNote>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-espresso/10 bg-ivory">
        <div className="mx-auto max-w-4xl px-5 pb-4 pt-20 lg:px-10 lg:pt-24">
          <Reveal className="text-center">
            <SectionLabel className="justify-center">Where We Are Now</SectionLabel>
            <h2 className="display-lg mt-8 text-espresso">
              An honest picture, as it stands.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[1rem] leading-relaxed text-espresso/70">
              This site describes services we offer today and intentions we're actively working
              towards. We don't publish client counts, years in business, charity partners, or impact
              statistics until the business confirms them — so you'll never read something here that
              we can't stand behind.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Your Next Step"
        title="Get to know your next style step."
        copy="However your closet looks today, it's a perfectly good place to start."
        primaryLabel="Book Your Session"
        primaryTo={BOOK_PATH}
        primaryEvent="book_cta_click"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </>
  );
}
