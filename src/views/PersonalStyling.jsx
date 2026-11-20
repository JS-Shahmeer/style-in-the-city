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
import { BOOK_PATH, business, hasValue, images, pricing } from "@/lib/siteConfig";
import { styleParty, styleServices } from "@/lib/styleServices";

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
      "Personal styling that starts with you: a three-hour Style Debut for $299, a Perfect Denim District Fit, Style Sessions from $99 an hour, and Style Parties with your girlfriends.",
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
            Style Debut is our three-hour session at {pricing.styleDebut.price}. Style Sessions are{" "}
            {pricing.styleSession.display}.
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
            <SectionLabel>Style Session Door</SectionLabel>
            <h2 className="display-lg mt-8 text-espresso">
              Three ways to book. One style that's yours.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {styleServices.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.06} className="h-full">
                <div id={item.slug} className="flex h-full flex-col border border-espresso/15 bg-ivory p-8 sm:p-10">
                  <p className="eyebrow text-espresso/45">{item.number}</p>
                  <h3 className="display-sm mt-5 text-espresso">{item.name}</h3>
                  <div className="mt-6 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 self-start border border-espresso px-5 py-3">
                    <span className="font-heading text-[1.6rem] font-extrabold leading-none tracking-tight text-espresso">
                      {item.price}
                    </span>
                    <span className="eyebrow text-[0.6rem] text-espresso/60">{item.unit}</span>
                  </div>
                  <p className="mt-6 text-[0.98rem] leading-relaxed text-espresso/70">{item.copy}</p>
                  <div className="mt-auto pt-8">
                    <CtaLink
                      to={`${BOOK_PATH}?service=${item.service}`}
                      variant={index === 0 ? "primary" : "textLink"}
                      event="book_cta_click"
                      eventProps={{ location: `styling_${item.slug}` }}
                    >
                      {item.cta}
                    </CtaLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <div id="style-party" className="grid gap-8 bg-espresso p-8 text-ivory sm:p-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="eyebrow text-ivory/50">{styleParty.tagline}</p>
                <h3 className="display-md mt-5 text-ivory">{styleParty.name}</h3>
                <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-ivory/70">{styleParty.copy}</p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end">
                <CtaLink
                  to={`${BOOK_PATH}?service=${styleParty.service}`}
                  variant="onDark"
                  event="book_cta_click"
                  eventProps={{ location: "styling_style_party" }}
                >
                  Book A Style Party
                </CtaLink>
                {hasValue(business.phone) && (
                  <a
                    href={`tel:${business.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-[0.9rem] text-ivory/70 underline underline-offset-4 hover:text-ivory"
                  >
                    Call {business.phone} for pricing
                  </a>
                )}
              </div>
            </div>
          </Reveal>

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
        copy={`Book a three-hour Style Debut for ${pricing.styleDebut.price}, or a Style Session at ${pricing.styleSession.display}.`}
        primaryLabel="Book Your Style Debut"
        primaryTo={`${BOOK_PATH}?service=style-debut`}
        primaryEvent="book_cta_click"
        secondaryLabel="Ask A Question"
        secondaryTo="/contact"
      />
    </>
  );
}
