import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./fonts.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  // 500 matters even though nothing uses Inter at 500 directly: General
  // Sans has no Cyrillic glyphs, so every "General Sans Medium" (500)
  // heading/button falls back to Inter for its Cyrillic characters. Without
  // a real 500 file here, the browser snapped Cyrillic to a different
  // weight than the Latin text in the same string (e.g. "Перейти в App
  // Store" — Store in true General Sans 500, Перейти в fauxbold-ish Inter).
  weight: ["400", "500", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dragan Ekaterina — Product Designer",
  description: "Portfolio of Ekaterina Dragan, Product Designer",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
