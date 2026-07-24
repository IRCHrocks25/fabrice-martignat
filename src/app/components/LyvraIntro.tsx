import { useEffect, useRef, useState } from "react";

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px 80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(2.2rem)",
    transition: `opacity 0.85s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.85s cubic-bezier(.16,1,.3,1) ${delay}s`,
  };

  return { ref, style };
}

export function LyvraIntro() {
  const left  = useReveal(0);
  const right = useReveal(0.1);

  return (
    <section
      style={{
        background: "var(--black)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 2.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Left — main bio lines */}
        <div ref={left.ref} style={left.style}>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.85)",
              fontWeight: 300,
              margin: "0 0 1rem",
            }}
          >
            20+ years structuring complex, multi-million-pound decisions for risk committees in investment and private banking. Ranked Top Global Performer among 500+ professionals worldwide.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.85)",
              fontWeight: 300,
              margin: 0,
            }}
          >
            He left on his own terms to apply that same investment-grade discipline to help professional services firms navigate AI with clarity and confidence.
          </p>
        </div>

        {/* Right — credentials */}
        <div ref={right.ref} style={right.style}>
          <div
            style={{
              borderLeft: "2px solid var(--red)",
              paddingLeft: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                margin: "0 0 1.25rem",
              }}
            >
              Professional Credentials
            </p>
            {[
              "CFA Charterholder",
              "CAIA",
              "CeMAP",
              "DipWSET",
            ].map((c) => (
              <div
                key={c}
                style={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.75)",
                  letterSpacing: ".04em",
                  padding: ".45rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
