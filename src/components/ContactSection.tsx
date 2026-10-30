/*
  Footer / contact section — dark, no card (variant D3 desktop, M2 mobile).

  Headline, then the CTA ("Связаться со мной" →
  Telegram) next to the profile links, then a hairline + copyright.
  Layout and sizes live in globals.css (.footer-*, .contact-button).
*/

import ScrollReveal from "./ScrollReveal";
import { nb } from "@/lib/typography";

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

const links = [
  {
    label: "Headhunter",
    href: "https://spb.hh.ru/resume/3be0c8a0ff07562ef40039ed1f38766d784658",
  },
  { label: "Behance", href: "https://www.behance.net/221a97bb" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ekaterina-dragan-218448272/" },
];

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
        <h2 className="footer-headline">
          {nb("Открыта к предложениям: рассматриваю позицию продуктового дизайнера")}
        </h2>

        <div className="footer-actions">
          <a
            href="https://t.me/ekt_dr"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <span>Связаться со мной</span>
            <ArrowIcon />
          </a>

          <div className="footer-links">
            {links.map((l) => (
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
            <span className="footer-role"> · Product Designer</span>
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
}
