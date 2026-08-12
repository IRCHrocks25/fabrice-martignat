import { useState, useEffect, useRef, useCallback } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import svcImg0 from "../../imports/Fabrice-mini-photoshoot-18.jpeg";
import svcImg1 from "../../imports/image-8.png";
import svcImg2 from "../../imports/image-9.png";
import svcImg3 from "../../imports/image-10.png";

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0, rootMargin: "0px 0px 60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(2rem)",
    transition: `opacity 0.85s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.85s cubic-bezier(.16,1,.3,1) ${delay}s`,
  };
  return { ref, style };
}

const phases = [
  {
    phase: "Phase 1: Assess",
    title: "Establish Reality",
    body: "We begin with your business, not the technology. Through structured leadership interviews and targeted analysis, we clarify your current decision pressures, technology environment, data governance, cybersecurity exposure, team capabilities, and compliance considerations.",
    objective: "The objective: define your starting point before any discussion of AI opportunity.",
    gets: ["Decision pressures", "Data governance", "Cybersecurity exposure", "Team capabilities"],
    img: svcImg0,
    imgAlt: "Leadership team in structured discussion",
  },
  {
    phase: "Phase 2: Define",
    title: "Frame the Decision",
    body: "Where could AI genuinely create value for your firm? Where does it introduce operational, regulatory, or reputational risk? This phase evaluates strategic exposure and potential rather than tools or workflows, producing a balanced view of opportunity versus risk that leadership can act on.",
    objective: "",
    gets: ["Strategic exposure", "Risk evaluation", "Opportunity mapping", "Leadership insight"],
    img: svcImg1,
    imgAlt: "Performance analytics and data visualisation",
  },
  {
    phase: "Phase 3: Design",
    title: "Make the Decision",
    body: "Findings from the assessment are synthesised into a clear strategic position. Your leadership team will know whether your firm is ready to adopt AI now, whether specific conditions must be addressed first, and where AI could create the most meaningful business value.",
    objective: "The outcome is a defensible leadership decision, not a shortlist of tools.",
    gets: ["Clear strategic position", "Readiness decision", "Priority areas", "Defensible direction"],
    img: svcImg2,
    imgAlt: "Executive reviewing strategic documents",
  },
  {
    phase: "Phase 4: Prioritise",
    title: "Define the Sequence",
    body: "The strategic direction becomes a structured, prioritised roadmap. What happens in the next 30 days. What follows at 90. What requires preparation before it can begin. What should wait entirely. You leave with a clear, justified sequence of next steps.",
    objective: "You leave with a clear, justified sequence of next steps.",
    gets: ["30-day actions", "90-day roadmap", "Structured sequence", "Clear next steps"],
    img: svcImg3,
    imgAlt: "Boardroom table representing structured planning",
  },
];

const outcomes = [
  { label: "Proceed", desc: "Your firm is ready. Defined priorities and conditions are in place." },
  { label: "Prepare", desc: "Specific gaps must be addressed before AI adoption begins." },
  { label: "Pause", desc: "Acting now creates more risk than value. Here is what to do instead." },
];

const deliverables = [
  "Executive summary",
  "Key findings by area",
  "Strategic opportunities and risks assessment",
  "Clear AI readiness decision",
  "Prioritised roadmap covering 30 to 180 days",
  "Leadership workshop to present and discuss conclusions",
];

export function LyvraServices() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [displayed, setDisplayed] = useState(0);

  const header    = useReveal(0);
  const carousel  = useReveal(0.08);
  const belowFold = useReveal(0.04);

  const goTo = useCallback((idx: number, dir: "next" | "prev") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setDisplayed(idx);
      setActive(idx);
      setAnimating(false);
    }, 80);
  }, [animating]);

  const handlePrev = () => {
    const next = (active - 1 + phases.length) % phases.length;
    goTo(next, "prev");
  };

  const handleNext = () => {
    const next = (active + 1) % phases.length;
    goTo(next, "next");
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, animating]);

  const slide = phases[displayed];

  const slideStyle: React.CSSProperties = {
    opacity: animating ? 0 : 1,
    transform: animating
      ? `translateX(${direction === "next" ? "2rem" : "-2rem"})`
      : "translateX(0)",
    transition: "opacity 0.08s ease, transform 0.08s ease",
  };

  return (
    <section style={{ background: "var(--black)", overflow: "hidden" }} id="service">

      {/* ── Section header ── */}
      <div
        ref={header.ref}
        className="lyvra-svc-header-grid"
        style={{
          ...header.style,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5.5rem 2.5rem 3rem",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "end",
          gap: "2rem",
        }}
      >
        <div>
          <p style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--red)", margin: "0 0 1.25rem" }}>
            The Architecture of Clarity
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, lineHeight: 1.1, color: "var(--white)", margin: "0 0 1rem", letterSpacing: "-.02em", whiteSpace: "nowrap" }}>
            The AI Decision Gate.
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", fontWeight: 300, maxWidth: "60ch", margin: 0 }}>
            A structured 30-day diagnostic that moves your firm from pressure and uncertainty to a justified, actionable direction through four structured phases.
          </p>
        </div>
        <a
          href="https://calendly.com/fabrice-fabricemartignat"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            letterSpacing: ".08em",
            textTransform: "uppercase",
            color: "var(--white)",
            textDecoration: "none",
            borderBottom: "1px solid rgba(255,255,255,0.3)",
            paddingBottom: "3px",
            whiteSpace: "nowrap",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--red)")}
          onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")}
        >
          Begin the AI Decision Gate ↗
        </a>
      </div>

      {/* ── Carousel ── */}
      <div
        ref={carousel.ref}
        style={{
          ...carousel.style,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2.5rem",
        }}
      >
        {/* Progress bars */}
        <div style={{ display: "flex", gap: ".5rem", marginBottom: "1.5rem" }}>
          {phases.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > active ? "next" : "prev")}
              style={{
                flex: 1,
                height: "2px",
                background: i === active ? "var(--red)" : "rgba(255,255,255,0.15)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "background 0.3s",
              }}
              aria-label={`Go to phase ${i + 1}`}
            />
          ))}
        </div>

        {/* Card */}
        <div
          className="lyvra-svc-carousel-card"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: "520px",
            border: "1px solid rgba(255,255,255,0.08)",
            overflow: "hidden",
            ...slideStyle,
          }}
        >
          {/* Left: image */}
          <div style={{ position: "relative", overflow: "hidden", minHeight: "380px" }}>
            <ImageWithFallback
              src={slide.img}
              alt={slide.imgAlt}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                filter: "brightness(0.75)",
              }}
            />
            {/* Phase label overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "2rem",
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
              }}
            >
              <span style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--red)" }}>
                {slide.phase}
              </span>
            </div>
          </div>

          {/* Right: content */}
          <div
            style={{
              padding: "3rem",
              background: "rgba(255,255,255,0.03)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 800,
                  color: "var(--white)",
                  margin: "0 0 1.25rem",
                  lineHeight: 1.15,
                  letterSpacing: "-.01em",
                }}
              >
                {slide.title}
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "rgba(255,255,255,0.65)", fontWeight: 300, margin: 0 }}>
                {slide.body}
              </p>
              {slide.objective && (
                <p style={{ fontSize: "1rem", fontStyle: "italic", color: "rgba(255,255,255,0.5)", margin: "1.25rem 0 0", lineHeight: 1.7 }}>
                  {slide.objective}
                </p>
              )}
            </div>

            {/* Focus areas */}
            <div>
              <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "1.25rem" }} />
              <p style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 .75rem" }}>
                Focus Areas
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
                {slide.gets.map((g, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.6)",
                      padding: ".3rem .75rem",
                      border: "1px solid rgba(255,255,255,0.12)",
                      letterSpacing: ".04em",
                    }}
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 0 0" }}>
          <span style={{ fontSize: "1rem", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
            {String(active + 1).padStart(2, "0")} / {String(phases.length).padStart(2, "0")}
          </span>
          <div style={{ display: "flex", gap: ".75rem" }}>
            {[{ label: "←", fn: handlePrev }, { label: "→", fn: handleNext }].map(({ label, fn }) => (
              <button
                key={label}
                onClick={fn}
                style={{
                  width: "44px",
                  height: "44px",
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "transparent",
                  color: "var(--white)",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--red)"; e.currentTarget.style.background = "rgba(255,0,0,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.background = "transparent"; }}
                aria-label={label === "←" ? "Previous phase" : "Next phase"}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Outcomes + Deliverables ── */}
      <div
        ref={belowFold.ref}
        className="lyvra-svc-below-grid"
        style={{
          ...belowFold.style,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 2.5rem 5.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          marginTop: "3rem",
        }}
      >
        {/* Three outcomes */}
        <div>
          <p style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--white)", margin: "0 0 1.5rem" }}>
            The three possible outcomes
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {outcomes.map((o, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "1.5rem",
                  padding: "1.25rem 1.5rem",
                  background: "var(--black)",
                  alignItems: "start",
                }}
              >
                <span style={{ fontSize: "1rem", fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--red)", paddingTop: ".15rem" }}>
                  {o.label}
                </span>
                <span style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--white)", fontWeight: 300 }}>
                  {o.desc}
                </span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--white)", fontWeight: 300, margin: "1.25rem 0 0" }}>
            Each outcome leads to immediate, structured next steps. You will not be handed a report and left to figure out the rest.
          </p>
        </div>

        {/* Deliverables */}
        <div>
          <p style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--white)", margin: "0 0 1.5rem" }}>
            Deliverables
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {deliverables.map((d, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "1rem 1.5rem",
                  background: "var(--black)",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: "var(--white)",
                  fontWeight: 300,
                }}
              >
                <span style={{ color: "var(--red)", fontWeight: 700, flexShrink: 0, fontSize: "1rem", marginTop: ".2em" }}>→</span>
                {d}
              </li>
            ))}
          </ul>
          <a
            href="https://calendly.com/fabrice-fabricemartignat"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: ".5rem",
              background: "var(--red)",
              color: "var(--white)",
              padding: ".9rem 2rem",
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = ".85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Begin the AI Decision Gate →
          </a>
        </div>
      </div>

    </section>
  );
}
