"use client";

import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import LegalLayout from "@/components/site/LegalLayout";

export default function Terms() {
  usePageMeta({
    title: "Terms of Service — Style In The City Studio",
    description:
      "The terms that apply when you book or request a closet organization or personal styling session with Style In The City Studio.",
    path: "/terms-of-service",
  });

  return (
    <LegalLayout
      title="Terms of Service"
      intro="These terms explain how our sessions work, what you can expect from us, and what we ask of you. They're written to be read, not skipped."
      updated="to be confirmed on publication"
      sections={[
        {
          heading: "1. Agreement",
          body: [
            "By submitting a request through this site, or by booking a session with us directly, you agree to these terms. If anything here isn't clear before you book, ask us and we'll explain it.",
          ],
        },
        {
          heading: "2. What we provide",
          body: [
            "We provide personal styling and closet organization services, delivered by arrangement with you. We work with the wardrobe you already own.",
            "We do not install custom cabinetry, carpentry or fitted storage products, and we are not a clothing retailer, resale agent, or clothing subscription service. Where you're interested in something outside our scope, we'll say so plainly.",
          ],
        },
        {
          heading: "3. Quotes and pricing",
          body: [
            "Every closet is a different size and every project a different scope, so we quote individually. Your quote is confirmed before your session is booked, and no payment is taken through this website.",
            "Deposits, payment methods, and any cancellation or rescheduling terms will be confirmed with you in writing before your appointment.",
          ],
        },
        {
          heading: "4. Booking and scheduling",
          body: [
            "Requests submitted through this site are requests, not confirmed appointments. A session is only confirmed once we've spoken with you and agreed the date, time and format.",
            "Where a scheduling or payment provider is connected in future, the terms specific to that provider will be presented to you at the point of booking.",
          ],
        },
        {
          heading: "5. Your decisions and your belongings",
          body: [
            "Every keep, restyle, or donate decision belongs to you. We provide guidance and organisation, not instructions, and nothing is removed from your home without your agreement.",
            "We take care while working in your space. We ask that you tell us about anything fragile, valuable, or requiring special handling before we begin.",
          ],
        },
        {
          heading: "6. Donations",
          body: [
            "Donation is always optional. Where you choose to donate, we prepare those items and coordinate delivery to an approved nonprofit partner where available and agreed with you in advance. We cannot guarantee acceptance or onward use of donated items by any third party.",
          ],
        },
        {
          heading: "7. Photography, reviews and case studies",
          body: [
            "We only publish photographs, testimonials, or case studies with your written permission, and you may withdraw that permission at any time.",
          ],
        },
        {
          heading: "8. Cancellations and changes",
          body: [
            "Plans change — we understand. Cancellation, rescheduling and refund terms will be confirmed in writing with the business before publication, and will be shared with you when your session is arranged.",
          ],
        },
        {
          heading: "9. Limitation of liability",
          body: [
            "We provide our services with reasonable care and skill. To the extent permitted by law, we are not liable for indirect or consequential losses, or for decisions you make about your wardrobe after your session. Nothing in these terms limits any rights you have that cannot be limited by law.",
          ],
        },
        {
          heading: "10. Governing law",
          body: [
            "The jurisdiction governing these terms will be confirmed by the business before publication, along with its registered business details.",
          ],
        },
        {
          heading: "11. Changes to these terms",
          body: [
            "We may update these terms from time to time. The version in place when you book is the version that applies to your session.",
          ],
        },
      ]}
    />
  );
}
