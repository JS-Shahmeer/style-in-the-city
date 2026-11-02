"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { announcement } from "@/lib/siteConfig";

const STORAGE_KEY = "sitc-announcement-dismissed";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  // Read the stored choice after hydration so server and client markup match.
  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(STORAGE_KEY) === "1") setDismissed(true);
    } catch {
      /* storage unavailable */
    }
  }, []);

  if (!announcement.enabled || dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <div className="relative bg-espresso text-ivory">
      <p className="eyebrow mx-auto max-w-2xl px-12 py-3 text-center text-[0.65rem] leading-relaxed text-ivory/90 sm:text-[0.72rem]">
        {announcement.message}
      </p>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-ivory/50 transition-colors hover:text-ivory"
      >
        <X className="h-3.5 w-3.5" strokeWidth={1.5} />
      </button>
    </div>
  );
}
