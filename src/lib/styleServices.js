import { pricing } from "@/lib/siteConfig";

// The Style door: three ways to book, plus the Style Party.
export const styleServices = [
  {
    number: "01",
    slug: "style-debut",
    name: "New You — Style Debut",
    price: pricing.styleDebut.price,
    unit: "3-hour session",
    copy:
      "A three-hour full wardrobe review and mini closet edit, designed around you. Whether you're refreshing your everyday look, preparing for a special occasion or getting ready for a vacation, we focus on your style, your wardrobe and what you want to achieve.",
    service: "style-debut",
    cta: "Book Your Style Debut",
  },
  {
    number: "02",
    slug: "denim-district-fit",
    name: "Perfect Denim District Fit",
    price: pricing.denimFit.fee,
    unit: "booking fee · in studio",
    copy:
      "Find your perfect fit, featuring styles from Flying Monkey, Hidden and Vervet. Bring in up to four pairs of your current denim to review fits. The booking fee goes toward your denim purchase.",
    service: "denim-fit",
    cta: "Book A Denim Fit",
  },
  {
    number: "03",
    slug: "style-session",
    name: "Style Session",
    price: `${pricing.styleSession.studio} / ${pricing.styleSession.home}`,
    unit: "per hour · studio / at home",
    copy:
      "Get vacation ready, or ready for a special occasion or formal event — prom, homecoming, a wedding. $99 an hour in studio, or $109 an hour at home.",
    service: "style-session",
    cta: "Book A Style Session",
  },
];

export const styleParty = {
  name: "Style Party",
  tagline: "Girlfriends, style, and fun!",
  copy:
    "Book a Style Party in studio or at home. Call for pricing — a $99 minimum booking fee goes toward appetizers and sips.",
  price: pricing.styleParty.fee,
  service: "style-party",
};
