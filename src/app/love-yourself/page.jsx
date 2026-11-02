import LoveYourself from "@/views/LoveYourself";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Love Yourself — Wellness & Beauty | Style In The City Studio",
  description:
    "Feeling good goes beyond what you wear. Explore Trilivy Health Coach and Egalie Cosmetics, the wellness and beauty businesses featured by Style In The City Studio.",
  path: "/love-yourself",
});

export default function Page() {
  return <LoveYourself />;
}
