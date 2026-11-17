import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { inter } from "@/lib/fonts";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "404 — Dragan Ekaterina",
  robots: { index: false },
};

// 404 for any address that doesn't exist (see experimental.globalNotFound in
// next.config.ts). Short, in both languages, with a way back.
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
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "20px",
            padding: "0 max(24px, 6vw)",
            backgroundColor: "#010101",
            color: "#f2fff6",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-general-sans)",
              fontWeight: 500,
              fontSize: "clamp(72px, 16vw, 169px)",
              lineHeight: 1,
              letterSpacing: "-0.05em",
            }}
          >
            404
          </h1>
          <p style={{ fontSize: "20px", lineHeight: 1.3 }}>
            Такой страницы нет.
            <br />
            This page does not exist.
          </p>
          <p style={{ display: "flex", gap: "24px", fontSize: "20px" }}>
            <Link href="/" style={{ color: "#a0f6bb" }}>На главную</Link>
            <Link href="/en" style={{ color: "#a0f6bb" }}>Home (EN)</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
