import { useEffect, useRef, useState } from "react";
import credImg from "../../imports/image-10.png";

function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold, rootMargin: "0px 0px 80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const stats = [
  { n: "20+", label: "Years" },
  { n: "Top 5", label: "Global Performer" },
  { n: "500+", label: "Professionals" },
];

export function LyvraCredibility() {
  const text  = useReveal();
  const img   = useReveal();

  return (
    <section id="cred" style={{ background: "var(--black)", overflow: "hidden" }}>
      <div
        className="lyvra-cred-split"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "90vh",
        }}
      >

        {/* ── Left — text panel ── */}
        <div
          ref={text.ref}
          style={{
            opacity: text.visible ? 1 : 0,
            transform: text.visible ? "translateX(0)" : "translateX(-2rem)",
            transition: "opacity 0.9s cubic-bezier(.16,1,.3,1), transform 0.9s cubic-bezier(.16,1,.3,1)",
            padding: "clamp(3rem,6vw,7rem) clamp(2rem,5vw,6rem)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Red accent bar */}
          <div style={{ width: "3rem", height: "3px", background: "var(--red)", marginBottom: "2rem" }} />

          <p style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--red)", margin: "0 0 1.25rem" }}>
            Investment-Grade Decision Discipline
          </p>

          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "var(--white)",
              margin: "0 0 2rem",
              letterSpacing: "-.02em",
            }}
          >
            The same discipline that structured multi-million-pound decisions for risk committees now applied to AI.
          </h2>

          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.6)", fontWeight: 300, margin: "0 0 1.5rem" }}>
            For more than 20 years, Fabrice Martignat was one of the most trusted voices in high-stakes financial decision-making, structuring complex, multi-million-pound financing proposals for risk committees in investment and private banking.
          </p>

          <blockquote
            style={{
              borderLeft: "2px solid var(--red)",
              paddingLeft: "1.25rem",
              margin: "0 0 2.5rem",
              fontStyle: "italic",
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            "His role was never to give opinions. It was to build clear, defensible cases that decision-makers could stand behind under scrutiny. That standard of thinking did not stay in banking."
          </blockquote>

          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.6)", fontWeight: 300, margin: "0 0 3rem" }}>
            He brings that same investment-grade discipline to AI adoption, treating every engagement with the rigour of a major financial commitment.
          </p>

          {/* Mini stat row */}
          <div style={{ display: "flex", gap: "0", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }}>
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  paddingRight: "1.5rem",
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  paddingLeft: i > 0 ? "1.5rem" : 0,
                }}
              >
                <div style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, color: "var(--white)", letterSpacing: "-.02em", lineHeight: 1 }}>
                  {s.n}
                </div>
                <div style={{ fontSize: "1rem", fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--red)", marginTop: ".35rem" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right — image panel, edge to edge ── */}
        <div
          ref={img.ref}
          style={{
            opacity: img.visible ? 1 : 0,
            transform: img.visible ? "translateX(0)" : "translateX(2rem)",
            transition: "opacity 0.9s cubic-bezier(.16,1,.3,1) 0.1s, transform 0.9s cubic-bezier(.16,1,.3,1) 0.1s",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={credImg}
            alt="Investment-grade decision discipline"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
          {/* Subtle left-edge blend into black */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, var(--black) 0%, transparent 30%)" }} />
        </div>

      </div>
    </section>
  );
}
