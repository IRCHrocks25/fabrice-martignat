import { useState, useEffect, useRef } from "react";
import { Compass, Shield, Lock, Wind } from "lucide-react";

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

const outcomes = [
  {
    icon: Compass,
    title: "Strategic clarity",
    body: "A justified sequence of what should happen first, protecting your firm from misallocated investment and costly operational missteps before they occur.",
  },
  {
    icon: Shield,
    title: "A defensible leadership position",
    body: "An informed, well-reasoned AI decision you can confidently explain to your partners, your team, and your clients.",
  },
  {
    icon: Lock,
    title: "Protected professional standards",
    body: "Your client relationships, compliance posture, and firm reputation preserved throughout the process and beyond.",
  },
  {
    icon: Wind,
    title: "Relief from the pressure",
    body: "No more reacting to vendor noise, competitor urgency, or industry hype. You move forward with discipline and confidence.",
  },
];

function OutcomeRow({ item }: { item: typeof outcomes[0] }) {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;
  return (
    <div style={{ borderBottom: "1px solid var(--g200, #e5e5e5)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "2.5rem 1fr 1.5rem",
          alignItems: "center",
          gap: "1rem",
          padding: "1.1rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            color: open ? "var(--red)" : "var(--g400)",
            transition: "color 0.25s",
          }}
        >
          <Icon size={18} strokeWidth={1.75} />
        </span>
        <span style={{ fontSize: "1rem", fontWeight: 600, color: "var(--black)", lineHeight: 1.3 }}>
          {item.title}
        </span>
        <span
          style={{
            fontSize: "1.1rem",
            color: open ? "var(--red)" : "var(--g400, #999)",
            fontWeight: 300,
            lineHeight: 1,
            transition: "transform 0.25s, color 0.2s",
            display: "inline-block",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.35s cubic-bezier(.16,1,.3,1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--g600)", fontWeight: 300, margin: "0 0 1.25rem", paddingLeft: "3.5rem" }}>
            {item.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export function LyvraOutcomes() {
  const left  = useReveal(0);
  const right = useReveal(0.1);

  return (
    <section style={{ background: "var(--white)" }} id="outcomes">
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem 2.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "start",
        }}
      >

        {/* Left column — heading + quote */}
        <div ref={left.ref} style={{ ...left.style, position: "sticky", top: "6rem" }}>
          <p style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--red)", margin: "0 0 1.25rem" }}>
            Defensible Leadership Outcomes
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.5rem)", fontWeight: 800, lineHeight: 1.1, color: "var(--black)", margin: "0 0 2.5rem", letterSpacing: "-.02em" }}>
            You leave with a decision your firm can act on. Not a report it has to interpret.
          </h2>
          <p style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--g400)", margin: "0 0 1rem" }}>
            The Decision, Not the Report
          </p>
          <blockquote
            style={{
              borderLeft: "2px solid var(--red)",
              paddingLeft: "1.25rem",
              margin: 0,
              fontStyle: "italic",
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "var(--black)",
            }}
          >
            "Moving slowly is a risk to your margins. Moving without clarity is a risk to your credibility."
            <footer style={{ marginTop: ".5rem", fontSize: "1rem", fontStyle: "normal", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--g400)" }}>
              — Fabrice Martignat
            </footer>
          </blockquote>
        </div>

        {/* Right column — all 4 collapsible rows + footer + CTA */}
        <div ref={right.ref} style={right.style}>
          <div style={{ borderTop: "1px solid var(--g200, #e5e5e5)" }}>
            {outcomes.map((item) => (
              <OutcomeRow key={item.title} item={item} />
            ))}
          </div>

          <div
            style={{
              marginTop: "2rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--g200, #e5e5e5)",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--g600)", fontWeight: 300, margin: 0 }}>
              For most firms, the AI Decision Gate pays for itself if it prevents just one mis-timed AI project, and structured AI projects fail at a rate that makes that outcome more likely than not.
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: ".5rem",
                background: "var(--black)",
                color: "var(--white)",
                padding: ".85rem 1.75rem",
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                textDecoration: "none",
                alignSelf: "flex-start",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--red)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--black)")}
            >
              Begin the AI Decision Gate →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
