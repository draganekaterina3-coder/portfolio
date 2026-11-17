import Link from "next/link";
import MobileMenu from "./MobileMenu";
import LangSwitch from "./LangSwitch";
import { dict, homeHref, sectionHref, type Lang } from "@/lib/i18n";

/*
  The top navigation, shared by the home page and the case pages (same
  classes, so the responsive rules in globals.css apply to both).

  Left:  Works · About (case pages: Home · Works · About)
  Right: Contact (scrolls to the footer) · language switch
  (The resume has its own button right under the name on the home page and
  sits in the footer, so it is not repeated here.)
  <=600px: all of it collapses into the fullscreen menu.
*/
export default function SiteNav({
  lang,
  switchHref,
  page = "home",
}: {
  lang: Lang;
  // The same page in the other language.
  switchHref: string;
  // On a case page the nav leads with "Home" (the way back) and keeps "Works"
  // (jumps to the project list); on the home page itself "Home" would point
  // at where you already are, so it is left out.
  page?: "home" | "case";
}) {
  const t = dict[lang];
  const works = { href: sectionHref(lang, "works"), label: t.nav.works };
  const about = { href: sectionHref(lang, "about"), label: t.nav.about };
  const leftLinks =
    page === "case"
      ? [{ href: homeHref(lang), label: t.nav.home }, works, about]
      : [works, about];

  const menuLinks = [
    ...leftLinks,
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
      <div className="hero-nav-group">
        {leftLinks.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </div>
      <div className="hero-nav-contact" style={{ display: "flex", alignItems: "center", gap: "28px" }}>
        <a href="#contact">{t.nav.contact}</a>
        <LangSwitch lang={lang} href={switchHref} />
      </div>
      <MobileMenu links={menuLinks} openLabel={t.menu.open} closeLabel={t.menu.close} />
    </nav>
  );
}
