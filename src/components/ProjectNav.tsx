import Link from "next/link";
import MobileMenu from "./MobileMenu";

// Same nav as the home hero (same classes, so the shared responsive rules in
// globals.css apply), but pointing back at the home page sections.
const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/#works", label: "Works" },
  { href: "/#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function ProjectNav() {
  return (
    <div className="container-1280 responsive-px" style={{ padding: "20px 50px" }}>
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
          <Link href="/">Home</Link>
          <Link href="/#works">Works</Link>
          <Link href="/#about">About</Link>
        </div>
        <a href="#contact" className="hero-nav-contact">
          Contact
        </a>
        <MobileMenu links={menuLinks} />
      </nav>
    </div>
  );
}
