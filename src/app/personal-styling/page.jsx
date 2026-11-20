import PersonalStyling from "@/views/PersonalStyling";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Love Your Style — Personal Styling | Style In The City Studio",
  description:
    "Personal styling that starts with you: a three-hour Style Debut for $299, a Perfect Denim District Fit, Style Sessions from $99 an hour, and Style Parties with your girlfriends.",
  path: "/personal-styling",
});

export default function Page() {
  return <PersonalStyling />;
}
