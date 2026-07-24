import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteUrl, siteTitle, siteDescription } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  // 500 matters even though nothing uses Inter at 500 directly: General
  // Sans has no Cyrillic glyphs, so every "General Sans Medium" (500)
  // heading/button falls back to Inter for its Cyrillic characters. Without
  // a real 500 file here, the browser snapped Cyrillic to a different
  // weight than the Latin text in the same string (e.g. "Перейти в App
  // Store" — Store in true General Sans 500, Перейти в fauxbold-ish Inter).
  // No 900 — nothing in the codebase requests that weight.
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  robots: { index: true, follow: true },
  icons: {
    // favicon.ico is picked up automatically from src/app/favicon.ico.
    // SVG listed first — browsers that support "any" scale it crisply at
    // every size and skip the PNGs entirely; the PNGs stay as the fallback
    // for everything else (older browsers, PWA install prompts, etc).
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: siteTitle,
    // Image itself comes from app/opengraph-image.tsx — Next.js picks it
    // up and generates the og:image tags automatically, no need to list
    // it here.
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    // Same auto-pickup as openGraph — reuses opengraph-image.tsx since no
    // separate twitter-image file exists.
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        {/* General Sans (Fontshare) — not on next/font/google, so it's
            loaded as a real <link> (discovered by the browser during HTML
            parsing) instead of a CSS @import (only discovered once the CSS
            engine reaches it, later in the critical path). preconnect opens
            the connection to api.fontshare.com in parallel with everything
            else instead of waiting for the stylesheet request to start it. */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
