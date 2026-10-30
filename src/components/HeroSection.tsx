import MobileMenu from "./MobileMenu";
import { nb } from "@/lib/typography";

export default function HeroSection() {
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
        {/* Navbar: height 26px */}
        <nav
          className="hero-nav"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "26px",
            fontSize: "20px",
            lineHeight: "1.3",
            color: "#f2fff6",
          }}
        >
          {/* Left group: gap=327px between items (measured from left edge to left edge) */}
          <div className="hero-nav-group" style={{ display: "flex", gap: "327px" }}>
            <a href="#home">Home</a>
            <a href="#works">Works</a>
            <a href="#about">About</a>
          </div>
          <a href="#contact" className="hero-nav-contact">
            Contact
          </a>
          {/* Fullscreen menu — only rendered visually at <=480px */}
          <MobileMenu />
        </nav>

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

      {/*
        Intro block: 206px total
        - paddingTop: 70px (content starts at y=70 within this block)
        - content: 96px
        - paddingBottom: 40px (206 - 70 - 96 = 40)
      */}
      <div
        className="container-1280 responsive-px hero-intro-block"
        style={{
          padding: "70px 50px 40px",
          backgroundColor: "#010101",
        }}
      >
        {/*
          3 columns: space-between gives equal gaps.
          Widths: 382 + 203 + 268 = 853px. Remaining: 1180-853=327px → 2 gaps × 163.5px.
          Results in col2 at x=545.5 and col3 at x=912 — exactly matching Figma.
        */}
        <div
          className="hero-intro-row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "96px",
          }}
        >
          {/* Column 1: Специализация — width=382px */}
          <div
            className="hero-intro-col"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              width: "382px",
            }}
          >
            <span style={{ color: "rgba(242,255,246,0.7)" }}>
              Специализация
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span>{nb("Product Design · Full-cycle · Mobile App")}</span>
              <span>Дизайн-системы · UX Research</span>
            </div>
          </div>

          {/* Column 2: Опыт — width=203px, starts at x=545.5 */}
          <div
            className="hero-intro-col"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              width: "203px",
            }}
          >
            <span style={{ color: "rgba(242,255,246,0.7)" }}>Опыт</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span>{nb("5 лет Product Design")}</span>
              <span>{nb("2 года Менторства")}</span>
            </div>
          </div>

          {/* Column 3: Публикации — width=268px, starts at x=912 */}
          <div
            className="hero-intro-col"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              width: "268px",
            }}
          >
            <span style={{ color: "rgba(242,255,246,0.7)" }}>Публикации</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div className="hero-pub-link" style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <a
                  href="https://secrets.tbank.ru/blogi-kompanij/kakoj-kompanii-nuzhna-dizajn-sistema/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-pub-anchor"
                  style={{ color: "#a0f6bb", position: "relative" }}
                >
                  Статья в T-Bank Secrets
                </a>
                {/* External link icon: 24×24px */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ flexShrink: 0 }}
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="#a0f6bb"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="hero-pub-link" style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <a
                  href="https://www.youtube.com/watch?v=mH8yUnlu5-w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-pub-anchor"
                  style={{ color: "#a0f6bb", position: "relative" }}
                >
                  Доклад на YouTube
                </a>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ flexShrink: 0 }}
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="#a0f6bb"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
