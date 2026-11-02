"use client";

import React from "react";
import { Link, useLocation } from "@/lib/router";
import { BOOK_PATH } from "@/lib/siteConfig";
import { trackEvent } from "@/lib/analytics";

export default function MobileBookBar() {
  const { pathname } = useLocation();

  if (pathname === BOOK_PATH) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-espresso/10 bg-ivory/95 backdrop-blur-md lg:hidden">
      <div className="px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3">
        <Link
          to={BOOK_PATH}
          onClick={() => trackEvent("book_cta_click", { location: "mobile_bar" })}
          className="eyebrow block border border-espresso bg-espresso px-6 py-4 text-center text-[0.8125rem] text-ivory"
        >
          Book A Session
        </Link>
      </div>
    </div>
  );
}
