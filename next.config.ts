import type { NextConfig } from "next";

// Fontshare (General Sans) is the one third-party origin this site talks
// to — everything else is same-origin. Kept as a named constant so the
// CSP and any future config stay in sync if that ever changes.
const FONTSHARE_CSS_ORIGIN = "https://api.fontshare.com";
const FONTSHARE_FONT_ORIGIN = "https://cdn.fontshare.com";

const securityHeaders = [
  // Stops the browser from guessing content types away from what the
  // server declared — mitigates MIME-sniffing based attacks.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Legacy clickjacking protection; frame-ancestors in the CSP below is
  // the modern equivalent but this covers browsers that ignore CSP.
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Sends the full referrer only to same-origin requests; cross-origin
  // requests (e.g. clicking out to Behance/LinkedIn) still get the origin
  // for analytics, not the full path.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Nothing on this site uses any of these — explicitly turn them off
  // rather than leaving the browser default (which is "allow").
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // 'unsafe-inline' here too: Next.js's App Router streams RSC
      // hydration data through inline <script> tags it generates itself
      // (no src attribute) — blocking those with a strict script-src
      // silently breaks hydration (no console error, click handlers just
      // never attach). A nonce-based CSP would avoid the relaxation, but
      // needs per-request Edge Middleware to mint and inject the nonce,
      // which turns this from a static export into a dynamically-rendered
      // app — not a trade worth making for a static portfolio with no
      // user input/untrusted content to inject through in the first place.
      "script-src 'self' 'unsafe-inline'",
      `style-src 'self' 'unsafe-inline' ${FONTSHARE_CSS_ORIGIN}`,
      "img-src 'self' data:",
      `font-src 'self' data: ${FONTSHARE_FONT_ORIGIN}`,
      "connect-src 'self'",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Don't advertise the framework in responses — trivial information
  // disclosure, no functional purpose.
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Case study images/logos/icons in /public aren't content-hashed
        // (unlike _next/static), so this stays well short of immutable —
        // a day-long cache still cuts repeat-visit requests without
        // risking a stale asset if a file ever gets swapped in place.
        source: "/:path*(svg|png|jpg|jpeg|gif|webp|ico)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
