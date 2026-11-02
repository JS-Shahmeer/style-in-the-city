"use client";

import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import PageHero from "@/components/site/PageHero";
import CheckList from "@/components/site/CheckList";
import EditorialGallery from "@/components/site/EditorialGallery";
import CtaBand from "@/components/site/CtaBand";
import SectionLabel from "@/components/site/SectionLabel";
import PendingNote from "@/components/site/PendingNote";
import FaqAccordion from "@/components/site/FaqAccordion";
import CtaLink from "@/components/site/CtaLink";
import Reveal from "@/components/site/Reveal";
import { stylingFaqs } from "@/lib/faqs";
import { BOOK_PATH, images, pricing } from "@/lib/siteConfig";

const GOALS = [
  "Understanding your personal style",
  "Reviewing the wardrobe pieces you already own",
  "Creating outfit combinations you'll actually wear",
  "Preparing for an upcoming event",
  "Planning outfits for a vacation",
  "Identifying your styling priorities and wardrobe gaps",
];

const PROCESS = [
  "We start with a relaxed conversation about how you dress now and how you'd like to feel.",
  "We look at what you already own, piece by piece, without judgement or pressure.",
  "We build outfits you can actually repeat — for work, weekends, and the occasions ahead.",
  "You leave with practical combinations and a short list of next steps, not a shopping list.",
];

const OCCASIONS = [
  "Everyday and elevated casual outfits",
  "Dinner dates and evenings out",
  "Special events and celebrations",
  "Formal occasions",
  "Vacation and travel wardrobes",
  "Bridal and honeymoon styling",
  "Seasonal wardrobe transitions",
  "New combinations from pieces you already own",
];

const GALLERY = [
  {
    src: images.closetEvent,
    alt: "A stylist holding a black and cream striped halter dress above a clothing rail",
    caption: "Occasion looks, planned in advance",
    span: "sm:col-span-7",
    ratio: "aspect-[4/3]",
  },
  {
    src: images.closetGetaway,
    alt: "A client trying on gold sandals while her stylist holds coordinating resort pieces",
    caption: "Travel, bridal and honeymoon wardrobes",
    span: "sm:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    src: images.closetSeasonal,
    alt: "A closet organizer stacking folded sweaters on a rack during a seasonal changeover",
    caption: "Seasonal changeovers, handled",
    span: "sm:col-span-6",
    ratio: "aspect-[4/3]",
  },
  {
    src: images.closetDenim,
    alt: "A black heel worn with rhinestone-cuffed denim beside the Style In The City sign",
    caption: "Denim, styled more than one way",
    span: "sm:col-span-6",
    ratio: "aspect-[4/3]",
  },
];

export default function PersonalStyling() {
  usePageMeta({
    title: "Love Your Style — Personal Styling | Style In The City Studio",
    description:
      "Personal styling that starts with you: a three-hour Style Debut for $299, plus additional styling sessions at $99 an hour. Built around the clothes you already own.",
    path: "/personal-styling",
  });

  return (
    <>
      <PageHero
        eyebrow="Love Your Style"
        title="Your Style. Your Personality. Your Moment."
        copy="From everyday outfits to special occasions, personal styling helps you discover what works for you, make the most of your wardrobe, and feel confident in how you show up."
        image={images.stylingHero}
        imageAlt="Two stylists and a client smiling together in the boutique during a styling session"
        primaryLabel="Book Your Style Debut"
        primaryTo={`${BOOK_PATH}?service=style-debut`}
        primaryEvent="book_cta_click"
        primaryEventProps={{ location: "styling_hero" }}
        secondaryLabel="Explore closet organization"
        secondaryTo="/closet-organization"
        note={
          <PendingNote>
            Style Debut is our standard three-hour session at {pricing.styleDebut.price}. Additional
            styling time is {pricing.additionalSessions.display}.
          </PendingNote>
        }
      />

      <section className="border-t border-espresso/10 bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
          <Reveal className="max-w-3xl">
            <SectionLabel>Styling, Simplified</SectionLabel>
            <h2 className="display-lg mt-8 text-espresso">
              You don't need new clothes. You need a new way of seeing the ones you have.
            </h2>
            <p className="mt-6 text-[1.02rem] leading-relaxed text-espresso/70">
              Styling isn't about following rules or chasing trends. It's about understanding what
              suits your life right now, and arranging your wardrobe so those pieces are the ones you
              reach for. We begin with what's already hanging in your closet.
            </p>
            <p className="mt-6 text-[1.02rem] leading-relaxed text-espresso/70">
              And it stays current: contemporary, sophisticated and always wearable — age-appropriate
              without ever feeling dated, with room for statement pieces and a little glamour when the
              occasion calls for it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
          <Reveal className="max-w-3xl">
            <SectionLabel>Ways To Work Together</SectionLabel>
            <h2 className="display-lg mt-8 text-espresso">
              Start with a Style Debut. Add time whenever you need it.
            </h2>
          </Reveal>

          <div className="mt-14 space-y-8">
            <Reveal>
              <div className="border border-espresso/15 bg-ivory p-8 sm:p-12">
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-7">
                    <p className="eyebrow text-espresso/50">Start Here</p>
                    <h3 className="display-md mt-5 text-espresso">Style Debut</h3>
                    <div className="mt-6 inline-flex items-baseline gap-4 border border-espresso px-6 py-4">
                      <span className="font-heading text-[1.8rem] font-extrabold leading-none tracking-tight text-espresso">
                        {pricing.styleDebut.price}
                      </span>
                      <span className="eyebrow text-espresso/60">
                        {pricing.styleDebut.duration} session
                      </span>
                    </div>
                    <p className="mt-6 text-[1rem] leading-relaxed text-espresso/70">
                      A personalized three-hour styling session designed around you. Whether you're
                      refreshing your everyday look, preparing for a special occasion, or getting
                      ready for a vacation, we'll focus on your style, your wardrobe, and what you
                      want to achieve. Sessions can happen in your home — we'll arrange the details
                      with you when you book.
                    </p>
                    <div className="mt-8">
                      <CtaLink
                        to={`${BOOK_PATH}?service=style-debut`}
                        event="book_cta_click"
                        eventProps={{ location: "styling_style_debut" }}
                      >
                        Book Your Style Debut
                      </CtaLink>
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="eyebrow text-espresso/45">What we can work on</p>
                    <div className="mt-5">
                      <CheckList items={GOALS} />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="grid gap-10 border border-espresso/15 bg-ivory p-8 sm:p-12 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-7">
                  <p className="eyebrow text-espresso/50">More Support</p>
                  <h3 className="display-md mt-5 text-espresso">Additional Style Sessions</h3>
                  <div className="mt-6 inline-flex items-baseline gap-4 border border-espresso px-6 py-4">
                    <span className="font-heading text-[1.8rem] font-extrabold leading-none tracking-tight text-espresso">
                      {pricing.additionalSessions.rate}
                    </span>
                    <span className="eyebrow text-espresso/60">
                      {pricing.additionalSessions.unit}
                    </span>
                  </div>
                  <p className="mt-6 text-[1rem] leading-relaxed text-espresso/70">
                    Continue working with Lisa on your personal style, wardrobe, or upcoming plans
                    with additional styling sessions at a straightforward hourly rate. No
                    memberships, no bundles — just the time you actually need.
                  </p>
                  <div className="mt-8">
                    <CtaLink
                      to={`${BOOK_PATH}?service=additional-session`}
                      variant="textLink"
                      event="book_cta_click"
                      eventProps={{ location: "styling_additional_sessions" }}
                    >
                      Ask About A Style Session
                    </CtaLink>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <PendingNote>
                    Three hours is the standard Style Debut session. If your needs require less time
                    or a different session length, pricing will be adjusted accordingly.
                  </PendingNote>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-14 border-t border-espresso/15 pt-10">
            <p className="eyebrow text-espresso/50">What Clients Book Styling Time For</p>
            <div className="mt-6">
              <CheckList items={OCCASIONS} columns={2} />
            </div>
            <p className="mt-6 max-w-2xl text-[0.85rem] leading-relaxed text-espresso/50">
              A single occasion or one outfit is reason enough — you never have to commit to more than
              you need. If yours isn't listed here, tell us about it.
            </p>
          </Reveal>

          <div className="mt-10">
            <p className="text-[0.9rem] leading-relaxed text-espresso/60">
              Looking for closet organization instead? That's quoted by the size of your project — see{" "}
              <a href="/closet-organization" className="underline underline-offset-4 hover:text-espresso">
                the three closet suites
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-espresso text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <Reveal className="max-w-3xl">
            <SectionLabel tone="dark">How A Session Flows</SectionLabel>
            <h2 className="display-lg mt-8 text-ivory">
              Unhurried. Uncomplicated. Entirely yours.
            </h2>
          </Reveal>
          <div className="mt-12 max-w-4xl">
            <CheckList items={PROCESS} tone="dark" numbered />
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
          <SectionLabel>Inside The Work</SectionLabel>
          <h2 className="display-lg mt-8 text-espresso">Styling you can see yourself in.</h2>
          <div className="mt-14">
            <EditorialGallery items={GALLERY} />
          </div>
          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-[0.98rem] leading-relaxed text-espresso/70">
              These are four of the six closets we build — everyday style, occasions, travel and
              season changes. The full set lives on our home page.
            </p>
            <CtaLink to="/#closets" variant="textLink">
              See All Six Closets
            </CtaLink>
          </div>
        </div>
      </section>

      <section className="border-t border-espresso/10 bg-ivory">
        <div className="mx-auto max-w-5xl px-5 py-20 lg:px-10 lg:py-24">
          <SectionLabel>Styling Questions</SectionLabel>
          <h2 className="display-lg mt-8 text-espresso">
            What women ask before their first session
          </h2>
          <div className="mt-12">
            <FaqAccordion items={stylingFaqs} />
          </div>
          <div className="mt-10">
            <CtaLink to="/faq" variant="textLink">
              Read every question
            </CtaLink>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Your Next Step"
        title="Let's find your style — starting with what's in your closet."
        copy={`Book a three-hour Style Debut for ${pricing.styleDebut.price}, or ask about additional styling time at ${pricing.additionalSessions.display}.`}
        primaryLabel="Book Your Style Debut"
        primaryTo={`${BOOK_PATH}?service=style-debut`}
        primaryEvent="book_cta_click"
        secondaryLabel="Ask A Question"
        secondaryTo="/contact"
      />
    </>
  );
}
