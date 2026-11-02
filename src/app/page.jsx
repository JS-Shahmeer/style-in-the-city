import Home from "@/views/Home";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Style In The City Studio — Personal Styling & Closet Organization",
  description:
    "Love your style, love your closet, love yourself. Personal styling, closet organization, and curated wellness and beauty for women who want a wardrobe — and a routine — that works.",
  path: "/",
});

export default function Page() {
  return <Home />;
}
