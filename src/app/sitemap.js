import { SITE_URL } from "@/lib/seo";

const ROUTES = [
  { path: "/", priority: 1.0 },
  { path: "/personal-styling", priority: 0.9 },
  { path: "/closet-organization", priority: 0.9 },
  { path: "/love-yourself", priority: 0.7 },
  { path: "/our-purpose", priority: 0.6 },
  { path: "/book-a-session", priority: 0.9 },
  { path: "/faq", priority: 0.6 },
  { path: "/contact", priority: 0.7 },
  { path: "/privacy-policy", priority: 0.2 },
  { path: "/terms-of-service", priority: 0.2 },
];

export default function sitemap() {
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
