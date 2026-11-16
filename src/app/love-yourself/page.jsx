import LoveYourself from "@/views/LoveYourself";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Love Yourself — Wellness & Beauty | Style In The City Studio",
  description:
    "Feeling good goes beyond what you wear. Featuring Egalle Cosmetics Hair Care and Trilivy Metabolic Wellness: healthy hair sessions, metabolic reviews, and hair care and wellness parties.",
  path: "/love-yourself",
});

export default function Page() {
  return <LoveYourself />;
}
