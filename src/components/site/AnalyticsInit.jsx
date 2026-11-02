"use client";

import { useEffect } from "react";
import { initAnalytics } from "@/lib/analytics";

/** Loads GA4 / GTM once on the client when IDs are configured. */
export default function AnalyticsInit() {
  useEffect(() => {
    initAnalytics();
  }, []);
  return null;
}
