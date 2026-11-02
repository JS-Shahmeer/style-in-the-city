"use client";

import React from "react";
import { Link } from "@/lib/router";
import Wordmark from "@/components/site/Wordmark";
import { business, BOOK_PATH, hasValue, socialLinks } from "@/lib/siteConfig";

const exploreLinks = [
  { label: "Love Your Style", to: "/personal-styling" },
  { label: "Love Your Closet", to: "/closet-organization" },
  { label: "Love Yourself", to: "/love-yourself" },
  { label: "Our Purpose", to: "/our-purpose" },
  { label: "Book a Session", to: BOOK_PATH },
];

const helpLinks = [
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const LINK_CLASS = "text-[0.95rem] text-ivory/70 transition-colors hover:text-ivory";

export default function Footer() {
  const social = socialLinks();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto max-w-[1600px] px-5 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Wordmark tone="dark" />
            <p className="mt-7 max-w-md text-[0.95rem] leading-relaxed text-ivory/60">
              {business.supportLine}
            </p>
            <p className="eyebrow mt-7 text-ivory/45">{business.philosophy}</p>
          </div>

          <nav aria-label="Explore" className="lg:col-span-3">
            <p className="eyebrow text-ivory/45">Explore</p>
            <ul className="mt-6 space-y-3.5">
              {exploreLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={LINK_CLASS}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="eyebrow text-ivory/45">Contact</p>
            <ul className="mt-6 space-y-3.5 text-[0.95rem] text-ivory/70">
              {hasValue(business.email) && (
                <li>
                  <a href={`mailto:${business.email}`} className="hover:text-ivory">
                    {business.email}
                  </a>
                </li>
              )}
              {hasValue(business.phone) && (
                <li>
                  <a href={`tel:${business.phone.replace(/\s/g, "")}`} className="hover:text-ivory">
                    {business.phone}
                  </a>
                </li>
              )}
              {hasValue(business.serviceArea) && <li>{business.serviceArea}</li>}
              {helpLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-ivory underline underline-offset-4 hover:text-ivory/70">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {social.length > 0 && (
              <ul className="mt-7 flex flex-wrap gap-6">
                {social.map(([name, url]) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="eyebrow text-ivory/70 hover:text-ivory"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-ivory/15 pt-8 text-[0.8rem] text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Style In The City Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-ivory">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-ivory">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
