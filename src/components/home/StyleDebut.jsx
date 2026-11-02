"use client";

import { Image } from "@/components/ui/image";
import CtaLink from "@/components/site/CtaLink";
import SectionLabel from "@/components/site/SectionLabel";
import Reveal from "@/components/site/Reveal";
import { BOOK_PATH, images, pricing } from "@/lib/siteConfig";

const GOALS = [
  "Understanding your personal style",
  "Reviewing the wardrobe pieces you already own",
  "Creating outfit combinations you'll actually wear",
  "Preparing for an upcoming event",
  "Planning outfits for a vacation",
  "Identifying your styling priorities and wardrobe gaps",
];

/**
 * The Style Debut: the studio's standard three-hour styling session, priced
 * clearly and connected straight to the booking enquiry.
 */
export default function StyleDebut() {
  return (
    <section id="style-debut" className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <Image
                src={images.styleDebut}
                alt="A stylist helping a client try on a cream feathered jacket in front of a mirror"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-7">
            <SectionLabel>Style Debut</SectionLabel>
            <h2 className="display-lg mt-8 text-espresso">
              Your Style. Your Life. Your Starting Point.
            </h2>
            <p className="mt-7 text-[1.02rem] leading-relaxed text-espresso/70">
              Start with a personalized three-hour styling session designed around you. Whether you're
              refreshing your everyday look, preparing for a special occasion, or getting ready for a
              vacation, we'll focus on your style, your wardrobe, and what you want to achieve.
            </p>

            <div className="mt-10 inline-flex items-baseline gap-4 border border-espresso px-7 py-5">
              <span className="font-heading text-[2rem] font-extrabold leading-none tracking-tight text-espresso sm:text-[2.4rem]">
                {pricing.styleDebut.price}
              </span>
              <span className="eyebrow text-espresso/60">{pricing.styleDebut.duration} Style Session</span>
            </div>

            <p className="mt-6 max-w-2xl text-[0.9rem] leading-relaxed text-espresso/55">
              Three hours is the standard session. If your needs require less time or a different
              session length, pricing will be adjusted accordingly — additional styling time is{" "}
              {pricing.additionalSessions.rate} an hour.
            </p>

            <div className="mt-12">
              <p className="eyebrow text-espresso/50">What we can work on together</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {GOALS.map((goal) => (
                  <li key={goal} className="flex gap-3 text-[0.92rem] leading-relaxed text-espresso/70">
                    <span aria-hidden="true" className="text-espresso/30">
                      —
                    </span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-2xl text-[0.85rem] leading-relaxed text-espresso/50">
                These are the goals clients usually bring to a Style Debut, not a checklist we promise
                to complete in three hours — we'll agree the focus together.
              </p>
            </div>

            <div className="mt-11 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CtaLink
                to={`${BOOK_PATH}?service=style-debut`}
                event="book_cta_click"
                eventProps={{ location: "style_debut_section" }}
              >
                Book Your Style Debut
              </CtaLink>
              <CtaLink to="/personal-styling" variant="textLink">
                See how a session flows
              </CtaLink>
            </div>

            <p className="mt-7 text-[0.88rem] leading-relaxed text-espresso/55">
              Sessions can happen in your home — we'll arrange the details with you when you book.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
