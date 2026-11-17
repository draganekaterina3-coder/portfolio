"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dict, links, sectionHref, homeHref, type Lang } from "@/lib/i18n";

const CONTACT_HREF = links.telegram;

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/*
  Quick way to reach the contact CTA from anywhere on the page.

  - <=768px: a floating "Связаться" pill at the bottom of the screen, shown
    after the first screen.
  - >=769px: a slim dark bar that slides in from the top when scrolling UP
    (so it never covers content while reading) — nav links + the same CTA.

  Both hide while the footer (#contact) is on screen, since it has the real
  button. The first screen of every page is untouched: nothing shows until
  the visitor has scrolled.
*/
export default function FloatingContact({ lang }: { lang: Lang }) {
  const t = dict[lang];
  // The footer is a different DOM node on every page, so the watcher below is
  // set up again whenever the route changes. (It used to attach once, to the
  // first page's footer, and after a client-side navigation it watched a node
  // that no longer existed, so the button stayed on top of the new footer.)
  const pathname = usePathname();
  const [pillVisible, setPillVisible] = useState(false);
  const [barVisible, setBarVisible] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let contactInView = false;
    let raf = 0;

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const goingUp = y < lastY;
      if (Math.abs(y - lastY) > 4) {
        setBarVisible(y > 400 && goingUp && !contactInView);
        lastY = y;
      }
      setPillVisible(y > 600 && !contactInView);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const contact = document.getElementById("contact");
    // The bottom margin hides the button a little before the footer slides
    // into view, so the two are never on screen together.
    const observer = contact
      ? new IntersectionObserver(
          ([entry]) => {
            contactInView = entry.isIntersecting;
            if (contactInView) setBarVisible(false);
            update();
          },
          { rootMargin: "0px 0px 120px 0px" },
        )
      : null;
    if (contact && observer) observer.observe(contact);

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return (
    <>
      <a
        href={CONTACT_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className={`float-pill${pillVisible ? " float-pill--show" : ""}`}
        tabIndex={pillVisible ? 0 : -1}
        aria-hidden={!pillVisible}
      >
        <span>{t.float.pill}</span>
        <ArrowIcon />
      </a>

      <header
        className={`float-bar${barVisible ? " float-bar--show" : ""}`}
        aria-hidden={!barVisible}
      >
        <div className="container-1280 responsive-px float-bar__inner">
          <nav className="float-bar__nav">
            <Link href={homeHref(lang)} tabIndex={barVisible ? 0 : -1}>{t.nav.home}</Link>
            <Link href={sectionHref(lang, "works")} tabIndex={barVisible ? 0 : -1}>{t.nav.works}</Link>
            <Link href={sectionHref(lang, "about")} tabIndex={barVisible ? 0 : -1}>{t.nav.about}</Link>
          </nav>
          <a
            href={CONTACT_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="float-bar__cta"
            tabIndex={barVisible ? 0 : -1}
          >
            <span>{t.float.cta}</span>
            <ArrowIcon />
          </a>
        </div>
      </header>
    </>
  );
}
