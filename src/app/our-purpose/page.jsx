import OurPurpose from "@/views/OurPurpose";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Purpose — Style In The City Studio",
  description:
    "Style is personal, purpose makes it meaningful. How Style In The City Studio helps women feel confident in their clothes, and gives unwanted clothing a thoughtful next chapter.",
  path: "/our-purpose",
});

export default function Page() {
  return <OurPurpose />;
}
