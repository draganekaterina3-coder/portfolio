/*
  Contact section: node 11:264

  Outer section: bg #010101, pt=100px, pb=20px, px=50px
  Card (11:265): bg #f2fff6, borderRadius 16px, flex row justify-end,
    pt=40px, pb=70px, px=30px
    Left block (11:266): flex-1, flex-col, gap=40
      Headline (11:267): General Sans Medium 40px, tracking -2px, lh 1.2, color #010101
      Button (11:268): bg #010101, radius 48px, px=20 py=12, gap=10,
        text General Sans Medium 24px tracking -1.2px color #f2fff6
    Right block (11:272): flex-col, gap=6, justify-end, self-stretch
      Links: General Sans Medium 24px tracking -1.2px color #010101, icon 24×24, gap=8
*/

import ScrollReveal from "./ScrollReveal";

const ButtonArrowIcon = () => (
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
      stroke="#f2fff6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkArrowIcon = () => (
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
      stroke="#010101"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const linkStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontFamily: "var(--font-general-sans)",
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "1.4",
  letterSpacing: "-1.2px",
  color: "#010101",
  whiteSpace: "nowrap",
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="container-1280 responsive-px contact-section-pad"
      style={{
        backgroundColor: "#010101",
        paddingTop: "100px",
        paddingBottom: "20px",
        paddingLeft: "50px",
        paddingRight: "50px",
      }}
    >
      <ScrollReveal>
      <div
        className="contact-card"
        style={{
          backgroundColor: "#f2fff6",
          borderRadius: "16px",
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          paddingTop: "40px",
          paddingBottom: "70px",
          paddingLeft: "30px",
          paddingRight: "30px",
          overflow: "hidden",
        }}
      >
        {/* Left block: headline + button */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            minWidth: 0,
          }}
        >
          <p
            className="contact-headline"
            style={{
              fontFamily: "var(--font-general-sans)",
              fontWeight: 500,
              fontSize: "40px",
              lineHeight: "1.2",
              letterSpacing: "-2px",
              color: "#010101",
              width: "520px",
              maxWidth: "100%",
            }}
          >
            {"Рассматриваю позицию продуктового дизайнера. Открыта к предложениям!"}
          </p>

          <a
            href="mailto:"
            className="contact-button"
            style={{
              backgroundColor: "#010101",
              borderRadius: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              width: "fit-content",
              padding: "12px 20px",
              fontFamily: "var(--font-general-sans)",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "1.4",
              letterSpacing: "-1.2px",
              color: "#f2fff6",
              whiteSpace: "nowrap",
            }}
          >
            <span>Связаться со мной</span>
            <ButtonArrowIcon />
          </a>
        </div>

        {/* Right block: links, bottom-aligned */}
        <div
          className="contact-right"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            justifyContent: "flex-end",
            alignSelf: "stretch",
            flexShrink: 0,
          }}
        >
          <a href="#" style={linkStyle}>
            <span>Headhunter</span>
            <LinkArrowIcon />
          </a>
          <a href="#" style={linkStyle}>
            <span>Behance</span>
            <LinkArrowIcon />
          </a>
          <a href="#" style={linkStyle}>
            <span>LinkedIn</span>
            <LinkArrowIcon />
          </a>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
