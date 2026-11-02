"use client";

// Small compatibility layer so the components ported from the Base44
// (react-router) app keep their original API on top of Next.js routing.
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export function Link({ to, href, replace, ...props }) {
  return <NextLink href={to ?? href} replace={replace} {...props} />;
}

function isPathActive(pathname, to, end) {
  const target = typeof to === "string" ? to.split(/[?#]/)[0] : "/";
  if (end || target === "/") return pathname === target;
  return pathname === target || pathname.startsWith(`${target}/`);
}

export function NavLink({ to, end, className, style, children, ...props }) {
  const pathname = usePathname() || "/";
  const isActive = isPathActive(pathname, to, end);
  const state = { isActive, isPending: false };
  return (
    <NextLink
      href={to}
      aria-current={isActive ? "page" : undefined}
      className={typeof className === "function" ? className(state) : className}
      style={typeof style === "function" ? style(state) : style}
      {...props}
    >
      {typeof children === "function" ? children(state) : children}
    </NextLink>
  );
}

export function useLocation() {
  const pathname = usePathname() || "/";
  const isClient = typeof window !== "undefined";
  return {
    pathname,
    search: isClient ? window.location.search : "",
    hash: isClient ? window.location.hash : "",
  };
}

export function useNavigate() {
  const router = useRouter();
  return (to, options = {}) => {
    if (typeof to === "number") return router.back();
    return options.replace ? router.replace(to) : router.push(to);
  };
}

export function Navigate({ to, replace }) {
  const router = useRouter();
  useEffect(() => {
    replace ? router.replace(to) : router.push(to);
  }, [router, to, replace]);
  return null;
}
