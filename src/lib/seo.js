// Canonical site URL used for metadata, sitemap and structured data.
// Set NEXT_PUBLIC_SITE_URL per environment (e.g. the Vercel preview URL).
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://styleinthecitystudio.com"
).replace(/\/$/, "");

export const SITE_NAME = "Style In The City Studio";

/** Builds a Next.js metadata object for a page. */
export function pageMetadata({ title, description, path = "/" }) {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
