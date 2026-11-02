"use client";

import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import PageHero from "@/components/site/PageHero";
import CheckList from "@/components/site/CheckList";
import ProcessSteps from "@/components/site/ProcessSteps";
import EditorialGallery from "@/components/site/EditorialGallery";
import ServiceAreaPanel from "@/components/site/ServiceAreaPanel";
import CtaBand from "@/components/site/CtaBand";
import CtaLink from "@/components/site/CtaLink";
import SuiteShowcase from "@/components/closets/SuiteShowcase";
import SectionLabel from "@/components/site/SectionLabel";
import PendingNote from "@/components/site/PendingNote";
import FaqAccordion from "@/components/site/FaqAccordion";
import Reveal from "@/components/site/Reveal";
import { Image } from "@/components/ui/image";
import { closetFaqs } from "@/lib/faqs";
import { BOOK_PATH, images } from "@/lib/siteConfig";

const FRUSTRATIONS = [
  "A full closet where you still feel like you have nothing to wear.",
  "The same five pieces on rotation while everything else gathers dust.",
  "\"Someday\" clothes that no longer fit your life — or your size.",
  "Beautiful things you forgot you owned because you can't see them.",
  "No idea what to keep, what to fix, and what to let go of.",
  "The dread of getting dressed on an ordinary morning.",
];

const BENEFITS = [
  {
    title: "A calmer start to the day",
    copy: "When you can see what you own, getting dressed stops being a negotiation and becomes a two-minute decision.",
  },
  {
    title: "More value from what you own",
    copy: "Pieces you'd stopped wearing come back into rotation, so you shop your own closet instead of replacing it.",
  },
  {
    title: "Decisions you won't regret",
    copy: "We sort thoughtfully and at your pace — nothing leaves your home unless you're certain it should.",
  },
];

const SESSION_SHAPE = [
  "We talk through your wardrobe, your routine, and what you'd love to change before we touch a single hanger.",
  "We work side by side — you stay in control of every keep, restyle, or donate decision.",
  "Everything is grouped in a way that matches how you actually get dressed.",
  "Clothing, shoes and accessories each get a place they belong.",
  "We agree what happens next with anything you're ready to let go of.",
  "You finish with a closet you can maintain without us — and a simple plan if you'd like us back.",
];

const SCOPE = [
  "Wardrobe decluttering, done with you",
  "Categorising by type, colour and season",
  "Closet layout and flow optimisation",
  "Folding and hanging systems that hold up",
  "Shoes and accessory organisation",
  "Seasonal wardrobe transitions",
  "Keep, donate and reconsider sorting",
  "Donation preparation and agreed delivery",
];

const GALLERY = [
  {
    src: images.closetHero,
    alt: "A client holding a folded knit garment in her organised closet",
    caption: "Every piece reviewed, one at a time",
    span: "sm:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    src: images.galleryCardigan,
    alt: "Two stylists looking over a knit cardigan during a closet session",
    caption: "Keep, restyle, reconsider — or donate",
    span: "sm:col-span-7",
    ratio: "aspect-[4/3] sm:aspect-[16/11]",
  },
  {
    src: images.galleryDenim,
    alt: "A client inspecting a pair of jeans on a clothing rack",
    caption: "Everything findable again",
    span: "sm:col-span-6",
    ratio: "aspect-[4/3]",
  },
  {
    src: images.galleryPearls,
    alt: "A stylist adding a pearl necklace to finish a client's outfit",
    caption: "Finishing touches, sorted",
    span: "sm:col-span-6",
    ratio: "aspect-[4/3]",
  },
];

export default function ClosetOrganization() {
  usePageMeta({
    title: "Love Your Closet — Closet Organization | Style In The City Studio",
    description:
      "Professional closet organization that declutters, categorises and gives your wardrobe a system that works for your real life. You keep control of every keep-or-donate decision.",
    path: "/closet-organization",
  });

  return (
    <>
      <PageHero
        eyebrow="Love Your Closet"
        title="A Closet That Works For You."
        copy="Your closet should make getting dressed easier. Let's clear the clutter, organize what you love, and create a space that feels functional, intentional, and completely yours — with three suites to choose from, always quoted by the size of your project."
        image={images.closetSystem}
        imageAlt="A professional organizer reviewing a neatly organized closet system during a client session"
        primaryLabel="Book Your Session"
        primaryTo={`${BOOK_PATH}?service=closet-organization`}
        primaryEvent="book_cta_click"
        primaryEventProps={{ location: "closet_hero" }}
        secondaryLabel="See how it works"
        secondaryHref="#process"
        note={
          <PendingNote>
            Bookings are confirmed personally — send your request and we'll agree the date, format,
            and quote together.
          </PendingNote>
        }
      />

      <section className="border-t border-espresso/10 bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
          <Reveal className="max-w-3xl">
            <SectionLabel>Does This Sound Familiar?</SectionLabel>
            <h2 className="display-lg mt-8 text-espresso">
              A closet can be full and still feel empty.
            </h2>
          </Reveal>
          <div className="mt-10">
            <CheckList items={FRUSTRATIONS} columns={2} />
          </div>
        </div>
      </section>

      <SuiteShowcase />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
          <Reveal className="max-w-3xl">
            <SectionLabel>What Changes</SectionLabel>
            <h2 className="display-lg mt-8 text-espresso">
              Organized outside. Easier inside.
            </h2>
            <p className="mt-6 text-[1.02rem] leading-relaxed text-espresso/70">
              People expect a tidier closet. What they don't expect is how much lighter the whole
              morning feels once it's done.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {BENEFITS.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 0.08}>
                <div className="border-t border-espresso/15 pt-6">
                  <h3 className="display-sm text-espresso">{benefit.title}</h3>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-espresso/65">
                    {benefit.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-espresso text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <Reveal className="max-w-3xl">
            <SectionLabel tone="dark">The Process</SectionLabel>
            <h2 className="display-lg mt-8 text-ivory">
              The Reset. The System. The Give-Back.
            </h2>
            <p className="mt-6 text-[1.02rem] leading-relaxed text-ivory/70">
              Three clear stages, worked through together — never rushed, never decided for you.
            </p>
          </Reveal>

          <div className="mt-16">
            <ProcessSteps tone="dark" variant="full" />
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            <div className="overflow-hidden">
              <Image
                src={images.studioTeam}
                alt="Two stylists smiling together in the Style In The City studio"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <Image
                src={images.clientStyled}
                alt="A client styled in a leather vest, a feathered white shawl and denim"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
          <Reveal className="max-w-3xl">
            <SectionLabel>During Your Session</SectionLabel>
            <h2 className="display-lg mt-8 text-espresso">
              What it actually looks like.
            </h2>
          </Reveal>
          <div className="mt-10 max-w-4xl">
            <CheckList items={SESSION_SHAPE} numbered />
          </div>
          <div className="mt-10">
            <PendingNote>
              Session length is agreed with you once we know the size of your space — we'll give you
              a realistic estimate before the day rather than an arbitrary number.
            </PendingNote>
          </div>
          <Reveal className="mt-14 border-t border-espresso/15 pt-10">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="display-md">
                  Let's start with your closet.
                </h3>
                <p className="mt-3 max-w-xl text-[0.98rem] leading-relaxed text-espresso/70">
                  Send a few details and we'll come back with timing and a personalized quote.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <CtaLink
                  to={`${BOOK_PATH}?service=closet-organization`}
                  event="book_cta_click"
                  eventProps={{ location: "closet_midpage" }}
                >
                  Book Your Session
                </CtaLink>
                <CtaLink to="/contact" variant="textLink">
                  Ask a question
                </CtaLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-espresso/10 bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
          <Reveal className="max-w-3xl">
            <SectionLabel>What We Can Cover</SectionLabel>
            <h2 className="display-lg mt-8 text-espresso">
              Everything in your wardrobe, nothing you don't want.
            </h2>
          </Reveal>
          <div className="mt-10">
            <CheckList items={SCOPE} columns={2} />
          </div>
          <div className="mt-10">
            <PendingNote>
              We organize and arrange the closet you already have. We don't install custom cabinetry,
              carpentry, or storage products unless the business confirms those services — ask and
              we'll tell you honestly what's possible.
            </PendingNote>
          </div>
        </div>
      </section>

      <section className="bg-espresso text-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-24">
          <Reveal className="lg:col-span-5">
            <SectionLabel tone="dark">Donation Decisions</SectionLabel>
            <h2 className="display-lg mt-8 text-ivory">
              Nothing leaves your home without your say-so.
            </h2>
            <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-ivory/70">
              <p>
                You decide what's kept. You also decide what's passed on, and when. If a piece needs
                another week of thinking, it stays.
              </p>
              <p>
                When you are ready, we prepare those items for donation and coordinate delivery to an
                approved nonprofit partner where available and agreed with you in advance.
              </p>
            </div>
            <PendingNote tone="dark" className="mt-8">
              We're developing our nonprofit partnerships and will name them here once they're
              confirmed. Until then we won't claim a relationship that doesn't yet exist.
            </PendingNote>
          </Reveal>
          <div className="lg:col-span-7">
            <EditorialGallery items={GALLERY} tone="dark" />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-24">
          <ServiceAreaPanel />
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-5xl px-5 py-20 lg:px-10 lg:py-24">
          <SectionLabel>Closet Organization FAQs</SectionLabel>
          <h2 className="display-lg mt-8 text-espresso">
            Before you book
          </h2>
          <div className="mt-12">
            <FaqAccordion items={closetFaqs} />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Your Next Step"
        title="Your closet can feel different. Let's begin."
        copy="Tell us about your space and what you'd like to change — we'll take it from there."
        primaryLabel="Book Your Session"
        primaryTo={`${BOOK_PATH}?service=closet-organization`}
        primaryEvent="book_cta_click"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </>
  );
}
