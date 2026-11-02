"use client";

import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import LegalLayout from "@/components/site/LegalLayout";

export default function Privacy() {
  usePageMeta({
    title: "Privacy Policy — Style In The City Studio",
    description:
      "How Style In The City Studio collects, uses and protects the information you share when you request a session or contact us.",
    path: "/privacy-policy",
  });

  return (
    <LegalLayout
      title="Privacy Policy"
      intro="We only ask for what we need to reply to you and arrange your session. This policy explains what that means in practice."
      updated="to be confirmed on publication"
      sections={[
        {
          heading: "1. Information we collect",
          body: [
            "We collect the information you choose to give us through the booking and contact forms on this site, and any details you send us afterwards by email or phone.",
          ],
          items: [
            "Your name and email address",
            "Your phone number, if you choose to provide it",
            "The service you're interested in, your preferred timing, and your preferred session format",
            "The description of your wardrobe or styling goals that you write for us",
            "Your consent choices, including whether you'd like to hear from us in future",
          ],
        },
        {
          heading: "2. How we use your information",
          body: [
            "We use your details to respond to your request, quote for the service you've asked about, arrange and deliver your session, and keep a record of our conversation. If you've opted in, we may occasionally send you styling tips or business news — you can opt out of those at any time.",
            "We do not sell your information, and we don't use it to build advertising profiles about you.",
          ],
        },
        {
          heading: "3. Where your information is stored",
          body: [
            "Submitted enquiries are sent over an encrypted connection to the studio's business email inbox and are only accessible to the people who respond to client enquiries. The website itself does not keep a copy of your submission, and members of the public cannot read it.",
          ],
        },
        {
          heading: "4. How long we keep it",
          body: [
            "We keep enquiry and booking records only as long as we need them to serve you and to meet our record-keeping obligations. Retention periods will be confirmed with the business before publication; if you'd like your details removed sooner, just ask.",
          ],
        },
        {
          heading: "5. Analytics",
          body: [
            "This site can use Google Analytics 4 and Google Tag Manager to understand which pages are useful. Those tools are only loaded when measurement IDs have been configured by the business. Where they are enabled, they record aggregated, non-identifying information such as pages viewed and buttons clicked — never the contents of your enquiry.",
          ],
        },
        {
          heading: "6. Your choices and rights",
          body: ["You are always in control of your information. You can ask us to:"],
          items: [
            "Tell you what we hold about you",
            "Correct anything that's inaccurate",
            "Delete your details, where we're not required to keep them",
            "Stop sending you marketing messages",
          ],
        },
        {
          heading: "7. Children",
          body: [
            "Our services are intended for adults. We do not knowingly collect information from children.",
          ],
        },
        {
          heading: "8. Changes to this policy",
          body: [
            "If this policy changes, we'll update this page. Where a change significantly affects how we handle your information, we'll make that clear here rather than quietly editing the small print.",
          ],
        },
        {
          heading: "9. Getting in touch",
          body: [
            "To ask a question about your information, or to make any of the requests above, contact us through the contact page and we'll respond personally.",
          ],
        },
      ]}
    />
  );
}
