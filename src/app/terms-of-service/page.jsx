import Terms from "@/views/Terms";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service — Style In The City Studio",
  description:
    "The terms that apply when you book or request a closet organization or personal styling session with Style In The City Studio.",
  path: "/terms-of-service",
});

export default function Page() {
  return <Terms />;
}
