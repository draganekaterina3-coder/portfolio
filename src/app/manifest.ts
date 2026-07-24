import type { MetadataRoute } from "next";
import { siteTitle, siteDescription } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteTitle,
    short_name: "Dragan Ekaterina",
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#010101",
    theme_color: "#010101",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
