"use client";

import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "@/lib/router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Wordmark from "@/components/site/Wordmark";
import { BOOK_PATH, NAV_LINKS, NAV_SECONDARY } from "@/lib/siteConfig";
import { trackEvent } from "@/lib/analytics";

const NAV_LINK_CLASS =
  "border-b-2 pb-1 font-body text-[0.66rem] font-semibold uppercase tracking-[0.1em] transition-colors duration-300 xl:text-[0.72rem] xl:tracking-[0.12em]";

const MOBILE_LINKS = [NAV_SECONDARY[0], ...NAV_LINKS, NAV_SECONDARY[1]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-espresso/10 bg-ivory">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-5 py-3.5 lg:px-10 lg:py-4">
        <Wordmark />

        <nav aria-label="Main" className="hidden items-center gap-4 lg:flex xl:gap-7">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  NAV_LINK_CLASS,
                  isActive
                    ? "border-espresso text-espresso"
                    : "border-transparent text-espresso/55 hover:text-espresso"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to={BOOK_PATH}
            onClick={() => trackEvent("book_cta_click", { location: "header" })}
            className="whitespace-nowrap border border-espresso bg-espresso px-4 py-2.5 font-body text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-ivory transition-colors duration-300 hover:bg-ivory hover:text-espresso xl:px-5 xl:py-3 xl:text-[0.72rem]"
          >
            Book A Session
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="p-2 text-espresso lg:hidden"
        >
          <Menu className="h-6 w-6" strokeWidth={1.5} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ivory lg:hidden">
          <div className="flex items-center justify-between border-b border-espresso/10 px-5 py-3.5">
            <Wordmark withTagline={false} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 text-espresso"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-1 flex-col overflow-y-auto px-5 pt-5">
            {MOBILE_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "border-b border-espresso/10 py-4 font-heading text-[1.45rem] font-extrabold uppercase leading-none tracking-[-0.02em]",
                    isActive ? "text-espresso" : "text-espresso/70"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to={BOOK_PATH}
              onClick={() => trackEvent("book_cta_click", { location: "mobile_menu" })}
              className="mt-8 border border-espresso bg-espresso px-6 py-4 text-center font-body text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-ivory"
            >
              Book A Session
            </Link>
            <p className="eyebrow pb-10 pt-8 text-center text-[0.55rem] text-espresso/40">
              Love Your Style · Love Your Closet · Love Yourself
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
