import SiteNav from "./SiteNav";
import { nb } from "@/lib/typography";
import { dict, links, homeHref, otherLang, type Lang } from "@/lib/i18n";

const ArrowIcon = ({ color }: { color: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/*
  First screen. The name stays the hero; under it, in order of what a
  recruiter needs in the first ten seconds:
    1. what I do (one sentence)
    2. am I available (status) and how to reach me (two buttons)
  The numbers live on the project cards, not here, so nothing is said twice.
*/
export default function HeroSection({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const { hero } = t;

  return (
    <section id="home" style={{ backgroundColor: "#010101" }}>
      {/*
        Nav + Title block: 243px total
        - paddingTop: 20px (nav starts at y=20)
        - nav: 26px (20px font × 1.3 line-height)
        - gap: 20px (title frame starts at y=66, nav ends at y=46)
        - title container: 157px
        - paddingBottom: 20px (243 - 20 - 26 - 20 - 157 = 20)
      */}
      <div
        className="container-1280 responsive-px"
        style={{
          padding: "20px 50px 20px",
          backgroundColor: "#010101",
        }}
      >
        <SiteNav lang={lang} switchHref={homeHref(otherLang(lang))} />

        {/* Title container: marginTop=20px, height=157px */}
        <div
          className="hero-title-row"
          style={{
            marginTop: "20px",
            height: "157px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/*
            "Dragan Ekaterina" as HTML text.
            Original SVG vectors in Figma span 1177.98×155.89px at 1280px viewport.
            Content width = 1180px (1280 - 2×50px padding).
            General Sans Medium (500) at 169px fills ~1178px at 1280px viewport.
            Below 1280px, .hero-title switches to a clamp() that reaches
            exactly 169px at the 1280 breakpoint (see globals.css) — desktop
            value is unchanged, smaller viewports scale down fluidly and may
            wrap to two lines.
          */}
          <h1
            className="hero-title"
            style={{
              fontFamily: "'General Sans', sans-serif",
              fontWeight: 500,
              fontSize: "169px",
              lineHeight: 1.2,
              letterSpacing: "-8.45px",
              color: "#f2fff6",
              whiteSpace: "nowrap",
            }}
          >
            Dragan Ekaterina
          </h1>
        </div>
      </div>

      <div
        className="container-1280 responsive-px hero-intro-block"
        style={{ padding: "56px 50px 40px", backgroundColor: "#010101" }}
      >
        <div className="hero-intro-grid">
          <div className="hero-lead-col">
            <p className="hero-lead">{nb(hero.lead)}</p>

            <span className="hero-status">
              <i aria-hidden="true" />
              {hero.status}
            </span>

            <div className="hero-cta">
              <a
                href={links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta__primary"
              >
                <span>{hero.primary}</span>
                <ArrowIcon color="#010101" />
              </a>
              <a
                href={hero.secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta__secondary"
              >
                <span>{hero.secondary.label}</span>
                <ArrowIcon color="#f2fff6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
