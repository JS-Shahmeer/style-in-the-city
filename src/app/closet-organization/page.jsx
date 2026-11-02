import ClosetOrganization from "@/views/ClosetOrganization";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Love Your Closet — Closet Organization | Style In The City Studio",
  description:
    "Professional closet organization that declutters, categorises and gives your wardrobe a system that works for your real life. You keep control of every keep-or-donate decision.",
  path: "/closet-organization",
});

export default function Page() {
  return <ClosetOrganization />;
}
