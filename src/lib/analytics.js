import { analyticsConfig } from "@/lib/siteConfig";

let initialised = false;

function addScript(id, src, async) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = async !== false;
  script.src = src;
  document.head.appendChild(script);
}

/**
 * Loads Google Tag Manager and / or Google Analytics 4 when an ID has been
 * configured (NEXT_PUBLIC_GTM_ID / NEXT_PUBLIC_GA4_ID). With no IDs set,
 * nothing is loaded at all.
 */
export function initAnalytics() {
  if (initialised || typeof document === "undefined") return;
  initialised = true;

  const { gtmId, ga4Id } = analyticsConfig;

  if (gtmId) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    addScript("gtm-loader", `https://www.googletagmanager.com/gtm.js?id=${gtmId}`);
  }

  if (ga4Id) {
    window.dataLayer = window.dataLayer || [];
    addScript("ga4-loader", `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`);
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer.push(arguments);
      };
    window.gtag("js", new Date());
    window.gtag("config", ga4Id);
  }
}

/** Records a meaningful interaction for GA/GTM. */
export function trackEvent(eventName, properties = {}) {
  if (typeof window === "undefined") return;
  try {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: eventName, ...properties });
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, properties);
    }
  } catch {
    // Analytics must never interrupt the visitor's journey.
  }
}
