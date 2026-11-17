"use client";

import { useEffect, useState } from "react";

type MenuLink = { href: string; label: string; external?: boolean };

/*
  Fullscreen mobile navigation — active only <=600px (see .hamburger-btn
  in globals.css). Desktop/tablet nav is untouched and stays visible
  above that breakpoint.
*/
// Links are passed in by the page (home or case page, RU or EN) so the same
// menu points at the right sections and language.
export default function MobileMenu({
  links,
  openLabel,
  closeLabel,
}: {
  links: MenuLink[];
  openLabel: string;
  closeLabel: string;
}) {
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
        aria-label={open ? closeLabel : openLabel}
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
              key={link.href + link.label}
              href={link.href}
              {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
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
