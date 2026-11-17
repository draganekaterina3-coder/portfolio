import type { Metadata } from "next";
import "../globals.css";
import SiteShell from "@/components/SiteShell";
import { siteUrl } from "@/lib/site-config";
import { dict } from "@/lib/i18n";

const t = dict.en;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: t.htmlTitle,
  description: t.htmlDescription,
  alternates: {
    canonical: "/en",
    languages: { ru: "/", en: "/en", "x-default": "/" },
  },
  robots: { index: true, follow: true },
  icons: {
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
    url: "/en",
    siteName: t.htmlTitle,
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
  return <SiteShell lang="en">{children}</SiteShell>;
}
