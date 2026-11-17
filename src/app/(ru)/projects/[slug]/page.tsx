import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectPage from "@/components/ProjectPage";
import { getProject, projects } from "@/lib/projects";
import { dict } from "@/lib/i18n";

type Props = { params: Promise<{ slug: string }> };

// Only slugs in lib/projects.ts exist; anything else is a 404 at build time
// rather than an on-demand render.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug, "ru");
  if (!project) return {};

  const title = `${project.title} — Dragan Ekaterina`;
  return {
    title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
      languages: {
        ru: `/projects/${project.slug}`,
        en: `/en/projects/${project.slug}`,
        "x-default": `/projects/${project.slug}`,
      },
    },
    openGraph: {
      title,
      description: project.description,
      type: "article",
      locale: dict.ru.locale,
      url: `/projects/${project.slug}`,
    },
    twitter: { card: "summary_large_image", title, description: project.description },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug, "ru");
  if (!project) notFound();
  return <ProjectPage project={project} lang="ru" />;
}
