"use client";

import { useEffect } from "react";

/**
 * Titles, descriptions, canonical URLs and social tags are rendered on the
 * server through each route's `metadata` export (see src/lib/seo.js).
 * This hook only adds optional per-page structured data (JSON-LD).
 */
export default function usePageMeta({ structuredData } = {}) {
  const data = structuredData ? JSON.stringify(structuredData) : null;

  useEffect(() => {
    const scriptId = "page-structured-data";
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();

    if (data) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      script.text = data;
      document.head.appendChild(script);
    }
  }, [data]);
}
