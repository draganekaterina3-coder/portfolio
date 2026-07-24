// Single source of truth for the values metadata.ts, manifest.ts, robots.ts,
// sitemap.ts and opengraph-image.tsx all need — avoids the same title/
// description/URL drifting out of sync across files.

// Server-only — every consumer of this constant (metadata.ts, manifest.ts,
// robots.ts, sitemap.ts) runs server-side, so this never needs to reach the
// client bundle. Deliberately NOT prefixed NEXT_PUBLIC_: that prefix tells
// Next.js to inline the value into client JS at build time, which this has
// no reason to do and would just be unused bytes shipped to the browser.
// SITE_URL should be set to the real domain once one exists; VERCEL_URL
// (auto-populated by Vercel on every deploy, no setup needed there) is a
// working fallback until then so metadataBase/canonical/sitemap/robots
// resolve to a real, reachable URL instead of localhost.
export const siteUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const siteTitle = "Dragan Ekaterina — Product Designer";

export const siteDescription =
  "Портфолио Екатерины Драган — продуктового дизайнера с опытом в мобильных приложениях, дизайн-системах и UX research.";
