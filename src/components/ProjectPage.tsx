import Image from "next/image";
import Link from "next/link";
import type { FigureImage, Project, ProjectBlock } from "@/lib/projects";
import ProjectNav from "./ProjectNav";
import ContactSection from "./ContactSection";
import ScrollReveal from "./ScrollReveal";
import { nb } from "@/lib/typography";

const ArrowUpRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path
      d="M4 20.5L20 4.5M20 17.7174V4.5H6.78261"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRight = () => (
  <svg width="24.3137" height="24" viewBox="0 0 24.3137 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path
      d="M0.686292 12.5H23.3137M13.9676 21.8461L23.3137 12.5L13.9676 3.15389"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

function FigureFrame({ image, sizes }: { image: FigureImage; sizes: string }) {
  const { crop, screen } = image;
  return (
    <div className="pp-figure__frame">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        style={
          crop
            ? { position: "absolute", maxWidth: "none", ...crop }
            : { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }
        }
      />
      {screen && (
        <div className="pp-phone">
          {/* Animated GIF — next/image would flatten it to a still. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={screen.src} alt={screen.alt} loading="lazy" decoding="async" />
        </div>
      )}
    </div>
  );
}

// Text rows that sit right next to a figure get 40px of extra air on that side
// (Figma: every description block touching an image carries pt/pb 40 on top of
// the 70px gap between blocks).
function Block({
  block,
  padTop,
  padBottom,
}: {
  block: ProjectBlock;
  padTop: boolean;
  padBottom: boolean;
}) {
  const rowClass = `pp-row${padTop ? " pp-row--pt" : ""}${padBottom ? " pp-row--pb" : ""}`;
  switch (block.kind) {
    case "text":
      return (
        <section className={rowClass}>
          <h2 className="pp-row__title">{nb(block.title)}</h2>
          <div className="pp-row__body">
            {block.paragraphs.map((p, i) => (
              <p key={i} style={p.strong ? { fontWeight: 600 } : undefined}>
                {nb(p.text)}
              </p>
            ))}
          </div>
        </section>
      );
    case "steps":
      return (
        <section className={rowClass}>
          <h2 className="pp-row__title">{nb(block.title)}</h2>
          <div className="pp-row__body">
            {block.intro && (
              <div className="pp-intro-text">
                {block.intro.map((p, i) => (
                  <p key={i} style={p.strong ? { fontWeight: 600 } : undefined}>
                    {nb(p.text)}
                  </p>
                ))}
              </div>
            )}
            <ol className="pp-steps">
              {block.steps.map((s) => (
                <li key={s.title}>
                  <h3>{nb(s.title)}</h3>
                  <p>{nb(s.text)}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      );
    case "figure":
      return (
        <figure className="pp-figure">
          <FigureFrame image={block.image} sizes="(max-width: 1279px) 100vw, 1180px" />
          <figcaption className="pp-caption">{nb(block.caption)}</figcaption>
        </figure>
      );
    case "figure-pair":
      return (
        <div className="pp-figure-pair">
          {block.items.map((item) => (
            <figure key={item.caption} className="pp-figure pp-figure--half">
              <FigureFrame image={item.image} sizes="(max-width: 768px) 100vw, (max-width: 1279px) 50vw, 580px" />
              <figcaption className="pp-caption">{nb(item.caption)}</figcaption>
            </figure>
          ))}
        </div>
      );
  }
}

const isMedia = (b?: ProjectBlock) => b?.kind === "figure" || b?.kind === "figure-pair";

export default function ProjectPage({ project }: { project: Project }) {
  return (
    <>
      <header>
        <ProjectNav />
      </header>
      <main style={{ backgroundColor: "#010101" }}>
        <div className="container-1280 responsive-px pp-intro">
          <div className="pp-intro__row">
            <div className="pp-title-col">
              {/* Long titles ("Travel eSIM App (…)") get a smaller size so they don't wrap to 5 lines. */}
              <h1 className={project.title.length > 14 ? "pp-title pp-title--long" : "pp-title"}>
                {nb(project.title)}
              </h1>
              {project.subtitle && <p className="pp-subtitle">{nb(project.subtitle)}</p>}
            </div>
            <dl className="pp-meta">
              {project.meta.map((m) => (
                <div key={m.label} className="pp-meta__item">
                  <dt>{nb(m.label)}</dt>
                  <dd>
                    {m.value && nb(m.value)}
                    {m.links && (
                      <span className="pp-meta__links">
                        {m.links.map((l) => (
                          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                            {l.label}
                            <ArrowUpRight />
                          </a>
                        ))}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="container-1280 responsive-px pp-metrics-wrap">
          <ul className="pp-metrics">
            {project.metrics.map((m) => (
              <li key={m.value} className="pp-metric">
                <span className="pp-metric__value">{m.value}</span>
                <span className="pp-metric__label">{nb(m.label)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="container-1280 responsive-px pp-body">
          {project.blocks.map((block, i) => (
            <ScrollReveal key={i}>
              <Block
                block={block}
                padTop={isMedia(project.blocks[i - 1])}
                padBottom={isMedia(project.blocks[i + 1])}
              />
            </ScrollReveal>
          ))}
        </div>

        <div className="container-1280 responsive-px pp-next">
          <Link href={project.nextHref}>
            {nb("Следующий проект")}
            <ArrowRight />
          </Link>
        </div>
      </main>
      <ContactSection />
    </>
  );
}
