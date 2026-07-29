import { Linkedin, Phone, Mail, Globe, ArrowUpRight } from "lucide-react";
import logoImg from "../../imports/Group_3-1.png";

const navLinks = [
  { label: "Expertise", href: "#cred" },
  { label: "Research", href: "#stats" },
  { label: "AI Decision Gate", href: "#service" },
  { label: "About", href: "#about" },
  { label: "Executive Briefing", href: "#lead" },
];

const contactLinks = [
  { icon: Globe, label: "fabricemartignat.com", href: "https://fabricemartignat.com" },
  { icon: Phone, label: "+44 752 508 8672", href: "tel:+447525088672" },
  { icon: Mail, label: "fabrice@fabricemartignat.com", href: "mailto:fabrice@fabricemartignat.com" },
];

export function LyvraFooter() {
  return (
    <footer style={{ background: "var(--black)", color: "var(--white)" }}>

      {/* ── Main footer body ── */}
      <div
        className="lyvra-footer-grid"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem 2.5rem 3.5rem",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Col 1 — Brand */}
        <div>
          <img
            src={logoImg}
            alt="Fabrice Martignat"
            style={{ height: "18px", width: "auto", display: "block", marginBottom: "1.5rem", filter: "brightness(0) invert(1)" }}
          />
          <p style={{ fontSize: "0.8rem", lineHeight: 1.75, color: "rgba(255,255,255,0.5)", fontWeight: 300, maxWidth: "38ch", margin: "0 0 2rem" }}>
            Helping professional services leaders make clear, defensible decisions about AI before committing time, money, or credibility.
          </p>
          {/* Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: ".65rem" }}>
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: ".6rem", fontSize: "1rem", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color .2s", fontWeight: 300 }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--white)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                <Icon size={13} strokeWidth={1.8} />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Navigation */}
        <div>
          <p style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.25rem" }}>
            Navigation
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: ".7rem" }}>
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", fontWeight: 400, transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--white)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Col 3 — CTA */}
        <div>
          <p style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.25rem" }}>
            Get Started
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(255,255,255,0.5)", fontWeight: 300, margin: "0 0 1.5rem" }}>
            Ready to move from pressure to clarity?
          </p>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: ".5rem",
              fontSize: ".85rem",
              fontWeight: 700,
              letterSpacing: ".05em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "var(--white)",
              padding: ".8rem 1.2rem",
              border: "1px solid rgba(255,255,255,0.25)",
              transition: "border-color .2s, background .2s",
              marginBottom: "1rem",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--red)"; e.currentTarget.style.background = "var(--red)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.background = "transparent"; }}
          >
            Book a 30-min Call <ArrowUpRight size={14} />
          </a>
          <div style={{ marginTop: "1.5rem" }}>
            <a
              href="https://www.linkedin.com/in/fabrice-martignat"
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "border-color .2s, color .2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--red)"; e.currentTarget.style.color = "var(--white)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
              aria-label="LinkedIn"
            >
              <Linkedin size={15} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="lyvra-footer-bottom"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1.5rem 2.5rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.3)", fontWeight: 300, margin: 0 }}>
          © 2026 Fabrice Martignat. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <a href="#" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color .2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--white)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
          >Privacy Policy</a>
          <a href="#" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color .2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--white)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
          >Terms and Conditions</a>
          <a
            href="https://www.katek-ai.com/"
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: "1rem", fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color .2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--white)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
          >
            Created by Katek AI
          </a>
        </div>
      </div>

    </footer>
  );
}
