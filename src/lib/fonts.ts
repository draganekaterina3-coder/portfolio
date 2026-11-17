import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  // 500 matters even though nothing uses Inter at 500 directly: General
  // Sans has no Cyrillic glyphs, so every "General Sans Medium" (500)
  // heading/button falls back to Inter for its Cyrillic characters. Without
  // a real 500 file here, the browser snapped Cyrillic to a different
  // weight than the Latin text in the same string (e.g. "Перейти в App
  // Store" — Store in true General Sans 500, Перейти в fauxbold-ish Inter).
  // 600: semibold step titles / pull-quote on the project pages.
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});
