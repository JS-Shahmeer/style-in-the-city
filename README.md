# Style In The City Studio

Marketing site for **Style In The City Studio** (Lisa Hild), built with Next.js (App Router) and Tailwind CSS. The UI is a faithful port of the original Base44 design.

## Getting started

```bash
npm install
cp .env.example .env.local   # adjust values
npm run dev                  # http://localhost:3000
```

## Project layout

| Path | What lives there |
| --- | --- |
| `src/app/` | Routes, metadata, `sitemap.xml`, `robots.txt`, 404 page |
| `src/views/` | Page bodies (one per route) |
| `src/components/site/` | Shared layout pieces: navbar, footer, CTAs, hero, FAQ accordion… |
| `src/components/home/`, `closets/`, `loveyourself/`, `forms/` | Section components |
| `src/lib/siteConfig.js` | **Business details, pricing, images and nav — edit content here** |
| `src/lib/faqs.js`, `closets.js`, `suites.js`, `experiences.js` | Page content data |
| `src/lib/router.jsx` | Tiny `react-router` compatibility layer over Next.js navigation |

## Pages

`/`, `/personal-styling`, `/closet-organization`, `/love-yourself`, `/our-purpose`, `/book-a-session`, `/faq`, `/contact`, `/privacy-policy`, `/terms-of-service`.
Old Base44 links `/love-your-style` and `/love-your-closet` redirect permanently.

## Forms

The booking and contact forms post to `/api/inquiry`, which emails the inquiry over SMTP (Hostinger mail). That endpoint arrives with the SMTP module.

## Deployment

The build is host-agnostic.

**Vercel (preview / testing):** import the repo, framework preset “Next.js”, add the environment variables from `.env.example`. No other config needed.

**Hostinger (production):** use a plan with Node.js app support (or a VPS).

```bash
npm ci
npm run build
# next.config.mjs uses output: "standalone"
cp -r public .next/standalone/ && cp -r .next/static .next/standalone/.next/
node .next/standalone/server.js     # honours PORT and HOSTNAME
```

Point `styleinthecitystudio.com` at the app and set the same environment variables in the Hostinger panel.
