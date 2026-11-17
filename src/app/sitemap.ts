import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  // Every page exists in both languages; each entry points at its twin so
  // search engines show the right one to the right reader.
  const pair = (ru: string, en: string) => ({
    url: `${siteUrl}${ru}`,
    alternates: { languages: { ru: `${siteUrl}${ru}`, en: `${siteUrl}${en}` } },
  });
  const page = (path: string, twin: string, priority: number) => [
    { ...pair(path, twin), lastModified: new Date(), changeFrequency: "monthly" as const, priority },
  ];
  return [
    ...page("/", "/en", 1),
    ...page("/en", "/", 1),
    ...projects.flatMap((p) => [
      ...page(`/projects/${p.slug}`, `/en/projects/${p.slug}`, 0.8),
      ...page(`/en/projects/${p.slug}`, `/projects/${p.slug}`, 0.8),
    ]),
  ];
}
