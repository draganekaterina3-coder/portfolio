// Single source of truth for the values metadata.ts, manifest.ts, robots.ts,
// sitemap.ts and opengraph-image.tsx all need — avoids the same title/
// description/URL drifting out of sync across files.

// Server-only — every consumer of this constant (metadata.ts, manifest.ts,
// robots.ts, sitemap.ts) runs server-side, so this never needs to reach the
// client bundle. Deliberately NOT prefixed NEXT_PUBLIC_: that prefix tells
// Next.js to inline the value into client JS at build time, which this has
// no reason to do and would just be unused bytes shipped to the browser.
//
// Always the main domain: canonical, og:url and the sitemap must point at it
// from every deployment, including preview deployments (VERCEL_URL used to be
// the fallback here, which put the preview domain into canonical and og:url).
// Set SITE_URL to override it, e.g. once a custom domain exists.
export const siteUrl = process.env.SITE_URL ?? "https://draganekaterina.vercel.app";

export const siteTitle = "Dragan Ekaterina — Product Designer";

export const siteDescription =
  "Портфолио Екатерины Драган — продуктового дизайнера с опытом в мобильных приложениях, дизайн-системах и UX research.";
