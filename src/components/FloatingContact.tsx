"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONTACT_HREF = "https://t.me/ekt_dr";

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
export default function FloatingContact() {
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
    const observer = contact
      ? new IntersectionObserver(([entry]) => {
          contactInView = entry.isIntersecting;
          if (contactInView) setBarVisible(false);
          update();
        })
      : null;
    if (contact && observer) observer.observe(contact);

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

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
        <span>Связаться</span>
        <ArrowIcon />
      </a>

      <header
        className={`float-bar${barVisible ? " float-bar--show" : ""}`}
        aria-hidden={!barVisible}
      >
        <div className="container-1280 responsive-px float-bar__inner">
          <nav className="float-bar__nav">
            <Link href="/" tabIndex={barVisible ? 0 : -1}>Home</Link>
            <Link href="/#works" tabIndex={barVisible ? 0 : -1}>Works</Link>
            <Link href="/#about" tabIndex={barVisible ? 0 : -1}>About</Link>
          </nav>
          <a
            href={CONTACT_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="float-bar__cta"
            tabIndex={barVisible ? 0 : -1}
          >
            <span>Связаться со мной</span>
            <ArrowIcon />
          </a>
        </div>
      </header>
    </>
  );
}
