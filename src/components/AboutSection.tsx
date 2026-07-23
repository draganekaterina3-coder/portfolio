import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

/*
  About section: node 11:250, y=3631, height=564px

  Left column (11:251): w=520, gap=32
    photo-1 (11:253): 182×180, border 2px rgba(232,247,210,0.12), radius 8px
    heading (11:254): General Sans Medium 40px, tracking -2px, lh 1.2
    photo-2 (11:256): 244×142, border 2px rgba(232,247,210,0.12), radius 8px

  Right column (11:257): w=580, gap=40
    Bio text (11:259): Inter 20px lh 1.3, bold spans + green links,
    arrow icons (11:260, 11:262): 16×16, after each link
*/

const ArrowIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0, display: "inline-block", verticalAlign: "middle" }}
  >
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      stroke="#a0f6bb"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function AboutSection() {
  return (
    <section
      id="about"
      className="about-section-pad"
      style={{
        backgroundColor: "#010101",
        paddingTop: "70px",
      }}
    >
      <ScrollReveal>
      <div
        className="container-1280 responsive-px about-row"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "40px",
          padding: "0 50px",
        }}
      >
        {/* ── Left column: w=520, gap=32 ── */}
        <div
          className="about-left"
          style={{
            width: "520px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {/* photo-1: right-aligned, 182×180 */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div
              style={{
                width: "182px",
                height: "180px",
                border: "2px solid rgba(232,247,210,0.12)",
                borderRadius: "8px",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src="/about/photo-1.png"
                alt="Photo"
                width={364}
                height={360}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* Heading: General Sans Medium 40px, tracking -2px, lh 1.2 */}
          <h2
            className="about-heading"
            style={{
              fontFamily: "var(--font-general-sans)",
              fontWeight: 500,
              fontSize: "40px",
              lineHeight: "1.2",
              letterSpacing: "-2px",
              color: "#f2fff6",
              width: "520px",
            }}
          >
            Системный подход — живой дизайн
          </h2>

          {/* photo-2: bottom-aligned, 244×142 */}
          <div style={{ display: "flex", alignItems: "flex-end", flex: 1 }}>
            <div
              style={{
                width: "244px",
                height: "142px",
                border: "2px solid rgba(232,247,210,0.12)",
                borderRadius: "8px",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src="/about/photo-2.png"
                alt="Photo"
                width={488}
                height={284}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>

        {/* ── Right column: w=580, gap=40 ── */}
        <div
          className="about-right"
          style={{
            width: "580px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "1.3",
              color: "#f2fff6",
              display: "flex",
              flexDirection: "column",
              gap: "26px",
            }}
          >
            <p>
              <strong style={{ fontWeight: 500 }}>
                Работаю в полном цикле разработки:{" "}
              </strong>
              от ux‑исследований и гипотез до запуска и дальнейшего развития
              продукта.
            </p>
            <p>
              {"Специализируюсь на мобильных приложениях, но имею опыт работы и с веб‑сервисами и сложными экосистемами."}
            </p>
            <p>
              Создаю продукты в различных сферах:{" "}
              <strong style={{ fontWeight: 500 }}>
                e‑commerce, финтехе, крипто, телеком и даже суперап
              </strong>{" "}
              для электромобиля.
            </p>
            <p>
              Строю{" "}
              <strong style={{ fontWeight: 500 }}>
                дизайн‑системы с нуля и с легаси
              </strong>
              . Написала статью «Дизайн‑система или UI‑кит: что выбрать
              бизнесу».{" "}
              <a
                href="https://secrets.tbank.ru/blogi-kompanij/kakoj-kompanii-nuzhna-dizajn-sistema/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#a0f6bb" }}
              >
                Почитать на Т‑Бизнес секреты <ArrowIcon />
              </a>
            </p>
            <p>
              {"Была ментором младшего дизайнера в компании, выступила с докладом о своём опыте в Dprofile. "}
              <a
                href="https://www.youtube.com/watch?v=mH8yUnlu5-w"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#a0f6bb" }}
              >
                Посмотреть на YouTube <ArrowIcon />
              </a>
            </p>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
