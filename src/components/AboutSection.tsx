import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { nb } from "@/lib/typography";
import { dict, type Lang, type Seg } from "@/lib/i18n";

/*
  About: after all the work and the client logos, just before the footer.

  Left column: portrait (and the conference photo under it).
  Right column: heading with name + role, three facts as numbers, then the
  longer text. Copy for both languages lives in lib/i18n.ts.
*/

const ArrowIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ flexShrink: 0, display: "inline-block", verticalAlign: "middle", marginLeft: 4 }}
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

function Segs({ segs }: { segs: Seg[] }) {
  return (
    <>
      {segs.map((seg, i) => {
        if (typeof seg === "string") return nb(seg);
        if ("b" in seg) {
          return (
            <strong key={i} style={{ fontWeight: 500 }}>
              {nb(seg.b)}
            </strong>
          );
        }
        return (
          <a
            key={i}
            href={seg.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#a0f6bb" }}
          >
            {nb(seg.a)}
            <ArrowIcon />
          </a>
        );
      })}
    </>
  );
}

export default function AboutSection({ lang }: { lang: Lang }) {
  const t = dict[lang].about;

  return (
    <section id="about" className="about-section-pad" style={{ backgroundColor: "#010101", paddingTop: "100px" }}>
      <ScrollReveal>
        <div className="container-1280 responsive-px about2" style={{ padding: "0 50px" }}>
          <div className="about2__photos">
            <div className="about2__photo about2__photo--main">
              <Image
                src="/about/photo-1.png"
                alt={t.photoAlt}
                width={364}
                height={360}
                sizes="260px"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="about2__photo about2__photo--talk">
              <Image
                src="/about/photo-2.png"
                alt={t.talkAlt}
                width={488}
                height={284}
                sizes="260px"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="about2__main">
            <h2 className="about-heading about2__heading">{nb(t.heading)}</h2>

            <ul className="about2__facts">
              {t.facts.map((f) => (
                <li key={f.value}>
                  <b>{nb(f.value)}</b>
                  <span>{nb(f.label)}</span>
                </li>
              ))}
            </ul>

            <div className="about-copy about2__copy">
              {t.paragraphs.map((p, i) => (
                <p key={i}>
                  <Segs segs={p} />
                </p>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
