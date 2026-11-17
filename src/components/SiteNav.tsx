import Link from "next/link";
import MobileMenu from "./MobileMenu";
import LangSwitch from "./LangSwitch";
import { dict, links, sectionHref, type Lang } from "@/lib/i18n";

/*
  The top navigation, shared by the home page and the case pages (same
  classes, so the responsive rules in globals.css apply to both).

  Left:  Works · About · Resume (external)
  Right: language switch · Contact (scrolls to the footer)
  <=600px: all of it collapses into the fullscreen menu.
*/
export default function SiteNav({
  lang,
  switchHref,
}: {
  lang: Lang;
  // The same page in the other language.
  switchHref: string;
}) {
  const t = dict[lang];
  const resume = lang === "ru" ? links.hh : links.linkedin;

  const menuLinks = [
    { href: sectionHref(lang, "works"), label: t.nav.works },
    { href: sectionHref(lang, "about"), label: t.nav.about },
    { href: resume, label: t.nav.resume, external: true },
    { href: "#contact", label: t.nav.contact },
    { href: switchHref, label: t.switchTitle },
  ];

  return (
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
      <div className="hero-nav-group" style={{ display: "flex", gap: "327px" }}>
        <Link href={sectionHref(lang, "works")}>{t.nav.works}</Link>
        <Link href={sectionHref(lang, "about")}>{t.nav.about}</Link>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          {t.nav.resume}
        </a>
      </div>
      <div className="hero-nav-contact" style={{ display: "flex", alignItems: "center", gap: "28px" }}>
        <LangSwitch lang={lang} href={switchHref} />
        <a href="#contact">{t.nav.contact}</a>
      </div>
      <MobileMenu links={menuLinks} openLabel={t.menu.open} closeLabel={t.menu.close} />
    </nav>
  );
}
