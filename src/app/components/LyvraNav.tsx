import { useEffect, useState } from "react";
import logoImg from "../../imports/Group_3-1.png";

const navLinks = [
  { href: "#cred", label: "Expertise" },
  { href: "#stats", label: "Research" },
  { href: "#service", label: "AI Decision Gate" },
  { href: "#about", label: "About" },
  { href: "#lead", label: "Executive Briefing" },
];

export function LyvraNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`lyvra-nav${scrolled ? " scrolled" : ""}${open ? " menu-open" : ""}`}>
        <a href="#" className="lyvra-nav-logo" onClick={close}>
          <img
            src={logoImg}
            alt="Fabrice Martignat"
            style={{
              height: "14px",
              width: "auto",
              display: "block",
              filter: scrolled || open ? "none" : "brightness(0) invert(1)",
              transition: "filter 0.35s ease",
            }}
          />
        </a>
        <ul className="lyvra-nav-links">
          {navLinks.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
        </ul>
        <a href="#contact" className="lyvra-nav-cta lyvra-nav-cta--desktop">
          Book a 30-min Call
        </a>
        {/* Hamburger */}
        <button
          className="lyvra-nav-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span className={`lyvra-burger-bar${open ? " open" : ""}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`lyvra-mobile-menu${open ? " open" : ""}`} aria-hidden={!open}>
        <ul className="lyvra-mobile-links">
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={close}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="lyvra-mobile-cta" onClick={close}>
          Book a 30-min Call
        </a>
      </div>
      {open && <div className="lyvra-mobile-overlay" onClick={close} />}
    </>
  );
}
