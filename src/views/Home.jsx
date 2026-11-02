"use client";

import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import HeroSection from "@/components/home/HeroSection";
import Storefronts from "@/components/home/Storefronts";
import PhilosophyBand from "@/components/home/PhilosophyBand";
import StyleDebut from "@/components/home/StyleDebut";
import ClosetConcepts from "@/components/home/ClosetConcepts";
import SuiteShowcase from "@/components/closets/SuiteShowcase";
import LoveYourselfPreview from "@/components/home/LoveYourselfPreview";
import BrandPromise from "@/components/home/BrandPromise";
import Testimonials from "@/components/home/Testimonials";
import FinalCta from "@/components/home/FinalCta";
import { business, hasValue } from "@/lib/siteConfig";
import { SITE_URL } from "@/lib/seo";

export default function Home() {
  usePageMeta({
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: business.name,
      description: business.supportLine,
      slogan: business.tagline,
      url: SITE_URL,
      serviceType: [
        "Personal styling",
        "Closet organization",
        "Wardrobe organization",
        "Occasion and travel styling",
        "Seasonal wardrobe styling",
      ],
      areaServed: hasValue(business.serviceArea) ? business.serviceArea : undefined,
      telephone: hasValue(business.phone) ? business.phone : undefined,
      email: hasValue(business.email) ? business.email : undefined,
    },
  });

  return (
    <>
      <HeroSection />
      <Storefronts />
      <PhilosophyBand />
      <StyleDebut />
      <ClosetConcepts />
      <SuiteShowcase />
      <LoveYourselfPreview />
      <BrandPromise />
      <Testimonials />
      <FinalCta />
    </>
  );
}
