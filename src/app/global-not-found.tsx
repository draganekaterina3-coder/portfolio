import "./globals.css";
import type { Metadata } from "next";
import NotFoundScreen from "@/components/NotFoundScreen";
import { inter } from "@/lib/fonts";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "404 — Dragan Ekaterina",
  robots: { index: false },
};

// 404 for any address that doesn't exist (see experimental.globalNotFound in
// next.config.ts). It has no layout around it, so it carries its own
// <html>; the content (and its RU/EN switch) is in NotFoundScreen.
export default function GlobalNotFound() {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@500&display=swap"
        />
      </head>
      <body>
        <NotFoundScreen />
      </body>
    </html>
  );
}
