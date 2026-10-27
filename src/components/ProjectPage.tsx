import Image from "next/image";
import Link from "next/link";
import type { FigureImage, Project, ProjectBlock } from "@/lib/projects";
import ProjectNav from "./ProjectNav";
import ContactSection from "./ContactSection";
import ScrollReveal from "./ScrollReveal";

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

function Block({ block }: { block: ProjectBlock }) {
  switch (block.kind) {
    case "text":
      return (
        <section className="pp-row">
          <h2 className="pp-row__title">{block.title}</h2>
          <div className="pp-row__body">
            {block.paragraphs.map((p, i) => (
              <p key={i} style={p.strong ? { fontWeight: 600 } : undefined}>
                {p.text}
              </p>
            ))}
          </div>
        </section>
      );
    case "steps":
      return (
        <section className="pp-row">
          <h2 className="pp-row__title">{block.title}</h2>
          <div className="pp-row__body">
            {block.intro && (
              <div className="pp-intro-text">
                {block.intro.map((p, i) => (
                  <p key={i} style={p.strong ? { fontWeight: 600 } : undefined}>
                    {p.text}
                  </p>
                ))}
              </div>
            )}
            <ol className="pp-steps">
              {block.steps.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
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
          <figcaption className="pp-caption">{block.caption}</figcaption>
        </figure>
      );
    case "figure-pair":
      return (
        <div className="pp-figure-pair">
          {block.items.map((item) => (
            <figure key={item.caption} className="pp-figure pp-figure--half">
              <FigureFrame image={item.image} sizes="(max-width: 768px) 100vw, (max-width: 1279px) 50vw, 580px" />
              <figcaption className="pp-caption">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      );
  }
}

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
                {project.title}
              </h1>
              {project.subtitle && <p className="pp-subtitle">{project.subtitle}</p>}
            </div>
            <dl className="pp-meta">
              {project.meta.map((m) => (
                <div key={m.label} className="pp-meta__item">
                  <dt>{m.label}</dt>
                  <dd>
                    {m.value}
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
                <span className="pp-metric__label">{m.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="container-1280 responsive-px pp-body">
          {project.blocks.map((block, i) => (
            <ScrollReveal key={i}>
              <Block block={block} />
            </ScrollReveal>
          ))}
        </div>

        <div className="container-1280 responsive-px pp-next">
          <Link href={project.nextHref}>
            Следующий проект
            <ArrowRight />
          </Link>
        </div>
      </main>
      <ContactSection />
    </>
  );
}
