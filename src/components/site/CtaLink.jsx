"use client";

import React from "react";
import { Link } from "@/lib/router";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

const BASE =
  "group inline-flex items-center justify-center gap-3 border font-body text-[0.8125rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-300";

const VARIANTS = {
  primary: "border-espresso bg-espresso px-8 py-4 text-ivory hover:bg-ivory hover:text-espresso",
  outline:
    "border-espresso bg-transparent px-8 py-4 text-espresso hover:bg-espresso hover:text-ivory",
  onDark: "border-ivory bg-ivory px-8 py-4 text-espresso hover:bg-transparent hover:text-ivory",
  onDarkOutline:
    "border-ivory/40 bg-transparent px-8 py-4 text-ivory hover:border-ivory hover:bg-ivory hover:text-espresso",
  textLink:
    "border-transparent px-0 py-1 text-espresso underline decoration-espresso/30 decoration-1 underline-offset-[6px] hover:decoration-espresso",
  textLinkDark:
    "border-transparent px-0 py-1 text-ivory/85 underline decoration-ivory/35 decoration-1 underline-offset-[6px] hover:text-ivory hover:decoration-ivory",
};

/**
 * One consistent action element for every call to action on the site —
 * internal routes render as links, external destinations as anchors.
 */
export default function CtaLink({
  to,
  href,
  variant = "primary",
  event,
  eventProps,
  className,
  children,
  ...rest
}) {
  const classes = cn(BASE, VARIANTS[variant] || VARIANTS.primary, className);
  const handleClick = () => {
    if (event) trackEvent(event, eventProps);
  };

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
    return (
      <a
        href={href}
        onClick={handleClick}
        className={classes}
        {...(external ? { rel: "noreferrer noopener" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} onClick={handleClick} className={classes} {...rest}>
      {children}
    </Link>
  );
}
