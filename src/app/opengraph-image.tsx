import { ImageResponse } from "next/og";
import { siteTitle } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = siteTitle;

// Reuses the site's own established palette/type treatment (see
// HeroSection's h1 + intro columns) rather than inventing new branding —
// same black background, same off-white/mint pairing.
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#010101",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            color: "#f2fff6",
            letterSpacing: "-2px",
            lineHeight: 1.1,
          }}
        >
          Dragan Ekaterina
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 40,
            fontWeight: 500,
            color: "#a0f6bb",
          }}
        >
          Product Designer
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 26,
            fontWeight: 400,
            color: "rgba(242,255,246,0.7)",
          }}
        >
          Product Design · Full-cycle · Mobile App · Дизайн-системы
        </div>
      </div>
    ),
    { ...size }
  );
}
