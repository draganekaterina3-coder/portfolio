"use client";

import { useEffect, useState } from "react";

type MenuLink = { href: string; label: string };

const defaultLinks: MenuLink[] = [
  { href: "#home", label: "Home" },
  { href: "#works", label: "Works" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

/*
  Fullscreen mobile navigation — active only <=480px (see .hamburger-btn
  in globals.css). Desktop/tablet nav is untouched and stays visible
  above that breakpoint.
*/
// `links` lets inner pages point at "/#works" etc. instead of same-page anchors.
export default function MobileMenu({ links = defaultLinks }: { links?: MenuLink[] }) {
  const [open, setOpen] = useState(false);

  // Lock page scroll while the overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="hamburger-btn"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`hamburger-icon${open ? " hamburger-icon--open" : ""}`}>
          <span />
          <span />
          <span />
        </span>
      </button>

      <div
        className={`mobile-menu-overlay${open ? " mobile-menu-overlay--open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="mobile-menu-nav">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-menu-link"
              style={{ transitionDelay: open ? `${0.08 * i + 0.1}s` : "0s" }}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
