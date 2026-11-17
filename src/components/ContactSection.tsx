/*
  Footer / contact section — dark, no card (variant D3 desktop, M2 mobile).

  Headline, then the CTA ("Связаться со мной" →
  Telegram) next to the profile links, then a hairline + copyright.
  Layout and sizes live in globals.css (.footer-*, .contact-button).
*/

import ScrollReveal from "./ScrollReveal";
import { nb } from "@/lib/typography";
import { dict, links, type Lang } from "@/lib/i18n";

const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ContactSection({ lang }: { lang: Lang }) {
  const t = dict[lang].footer;
  const hh = { label: "Headhunter", href: links.hh };
  const behance = { label: "Behance", href: links.behance };
  const linkedin = { label: "LinkedIn", href: links.linkedin };
  // The resume lives where the reader's market is: hh.ru first for Russian
  // visitors, LinkedIn first for English ones.
  const list = lang === "ru" ? [hh, behance, linkedin] : [linkedin, behance, hh];

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
        <h2 className="footer-headline">{nb(t.headline)}</h2>

        <div className="footer-actions">
          <a
            href={links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <span>{t.cta}</span>
            <ArrowIcon />
          </a>

          <div className="footer-links">
            {list.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                <span>{l.label}</span>
                <ArrowIcon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-copy">
          <span>
            © {new Date().getFullYear()} Dragan Ekaterina
            <span className="footer-role"> · {t.role}</span>
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
}
