import Faq from "@/views/Faq";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions — Style In The City Studio",
  description:
    "Answers about closet organization and personal styling sessions: what's included, donation decisions, session formats, pricing and how to book.",
  path: "/faq",
});

export default function Page() {
  return <Faq />;
}
