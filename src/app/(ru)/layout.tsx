import type { Metadata } from "next";
import "../globals.css";
import SiteShell from "@/components/SiteShell";
import { siteUrl } from "@/lib/site-config";
import { dict } from "@/lib/i18n";

const t = dict.ru;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: t.htmlTitle,
  description: t.htmlDescription,
  alternates: {
    canonical: "/",
    languages: { ru: "/", en: "/en", "x-default": "/" },
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
    title: t.htmlTitle,
    description: t.htmlDescription,
    type: "website",
    locale: t.locale,
    url: "/",
    siteName: t.htmlTitle,
    // Image itself comes from app/opengraph-image.tsx — Next.js picks it
    // up and generates the og:image tags automatically.
  },
  twitter: {
    card: "summary_large_image",
    title: t.htmlTitle,
    description: t.htmlDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell lang="ru">{children}</SiteShell>;
}
