import { useEffect, useRef, useState } from "react";
import img0 from "../../imports/image.webp";
import img1 from "../../imports/image-1.webp";
import img2 from "../../imports/image-2.webp";

const slides = [img0, img1, img2];

const credentials = [
  { target: 20, suffix: "+", label: "Years", desc: "High-stakes financial decision-making in investment and private banking" },
  { target: 5,  prefix: "Top ", suffix: "", label: "Global Performer", desc: "Ranked among the top 5 professionals within a global team of 500+" },
  { target: 500, suffix: "+", label: "Professionals", desc: "Named Top Global Performer in a worldwide team of 500+ senior professionals" },
  { target: 4,  suffix: "", label: "Professional Credentials", desc: "CFA Charterholder, CAIA, CeMAP, DipWSET — rigour across finance and advisory" },
];

function useCountUp(target: number, duration = 1600, delay = 0) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const step = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, duration, delay]);

  return value;
}

function StatItem({ item, index }: { item: typeof credentials[0]; index: number }) {
  const count = useCountUp(item.target, 1800, 300 + index * 150);
  return (
    <div className="lyvra-hero-stat-item" style={{ borderLeft: index > 0 ? "1px solid rgba(255,255,255,0.2)" : "none" }}>
      <div style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "var(--white)", lineHeight: 1, letterSpacing: "-.02em", marginBottom: ".3rem" }}>
        {item.prefix ?? ""}{count}{item.suffix}
      </div>
      <div style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--white)", marginBottom: ".4rem" }}>
        {item.label}
      </div>
      <div style={{ fontSize: "1rem", lineHeight: 1.55, color: "var(--white)", fontWeight: 300 }}>
        {item.desc}
      </div>
    </div>
  );
}

export function LyvraHero() {
  const [current, setCurrent] = useState(0);
  const paralaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (paralaxRef.current) {
        paralaxRef.current.style.transform = `translateY(${window.scrollY * 0.22}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="lyvra-hero" style={{ height: "auto", minHeight: "100svh" }}>
      {/* Crossfade image layers */}
      <div ref={paralaxRef} style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {slides.map((src, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: current === i ? 1 : 0,
              transition: "opacity 1.4s cubic-bezier(.4,0,.2,1)",
            }}
          />
        ))}
        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(13,13,13,0.77)" }} />
      </div>

      <div className="lyvra-hero-content" style={{ justifyContent: "flex-end", paddingBottom: "4rem", gap: 0 }}>
        {/* Heading */}
        <h1 className="lyvra-hero-hl" style={{ marginBottom: "1.5rem", textAlign: "center", width: "100%" }}>
          <span>Clarity before AI commitment<span style={{ color: "var(--red)" }}>.</span></span><br />
          <span className="lyvra-hero-hl-sub" style={{ margin: "0 auto" }}>Helping professional services leaders make clear, defensible decisions about AI before committing time, money, or credibility.</span>
        </h1>

        {/* Body */}
        <p className="lyvra-hero-sub" style={{ fontSize: "1.15rem", maxWidth: "72ch", marginTop: 0, color: "var(--white)" }}>
          Built for founder-led and managing-partner-led professional services firms, including accounting, wealth management, mortgage broking, and advisory practices, with 15+ employees and £3M+ in annual revenue.
        </p>

        {/* CTAs */}
        <div className="lyvra-hero-ctas">
          <a href="https://calendly.com/fabrice-fabricemartignat" target="_blank" rel="noopener noreferrer" className="lyvra-btn-primary">
            Book a 30-minute exploratory call
          </a>
          <a href="https://fabricemartignat.com/5-ai-questions" target="_blank" rel="noopener noreferrer" className="lyvra-btn-secondary" style={{ color: "var(--white)", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "2px", textDecoration: "none", fontSize: "1rem" }}>
            Download the 2026 AI Readiness Briefing
          </a>
        </div>

        {/* Stats row — no fill, below CTAs */}
        <div className="lyvra-hero-stats-row">
          {credentials.map((item, i) => (
            <StatItem key={i} item={item} index={i} />
          ))}
        </div>

        {/* Slide indicators */}
        <div style={{ display: "flex", gap: ".5rem", marginTop: "1.5rem" }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: current === i ? "2rem" : ".5rem",
                height: ".5rem",
                background: current === i ? "var(--white)" : "rgba(255,255,255,0.4)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.4s cubic-bezier(.4,0,.2,1), background 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
