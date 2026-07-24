import { useEffect, useRef, useState } from "react";
import { AlertTriangle, Clock } from "lucide-react";
import closingBg from "../../imports/image-11.png";

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); io.disconnect(); }
      },
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

const pressureItems = [
  {
    index: "01",
    label: "Vendors",
    body: "Vendors are ready with solutions. Solutions to problems you have not yet properly defined, built on timelines that serve their pipeline, not your business.",
  },
  {
    index: "02",
    label: "Your clients",
    body: "Your clients are asking questions. And your answer needs to be considered, not reactive. Because in professional services, how you respond to uncertainty is part of the service.",
  },
  {
    index: "03",
    label: "The industry press",
    body: "The industry press is full of urgency. Urgency that does not distinguish between a fintech startup and a boutique wealth management firm with 20 years of client trust at stake.",
  },
];

type TensionCardProps = {
  Icon: React.ElementType;
  label: string;
  body: string;
  hoverScheme: "red" | "dark";
};

function TensionCard({ Icon, label, body, hoverScheme }: TensionCardProps) {
  const [hovered, setHovered] = useState(false);

  const bg = hovered
    ? hoverScheme === "red" ? "var(--red)" : "var(--black)"
    : "var(--white)";
  const border = hovered
    ? hoverScheme === "red" ? "var(--red)" : "var(--black)"
    : "var(--g200, #e5e5e5)";
  const iconColor = hovered ? "#fff" : hoverScheme === "red" ? "var(--red)" : "var(--black)";
  const labelColor = hovered ? "#fff" : "var(--black)";
  const bodyColor = hovered ? "rgba(255,255,255,0.78)" : "var(--g600)";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: bg,
        border: `1px solid ${border}`,
        padding: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        transition: "background 0.35s cubic-bezier(.16,1,.3,1), border-color 0.35s",
        cursor: "default",
      }}
    >
      {/* Icon circle */}
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          border: `1.5px solid ${hovered ? "rgba(255,255,255,0.3)" : "var(--g200, #e5e5e5)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "border-color 0.35s",
          flexShrink: 0,
        }}
      >
        <Icon size={26} color={iconColor} strokeWidth={1.5} style={{ transition: "color 0.35s" }} />
      </div>

      <div>
        <p style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: labelColor, margin: "0 0 1rem", transition: "color 0.35s" }}>
          {label}
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.8, color: bodyColor, fontWeight: 300, margin: 0, transition: "color 0.35s" }}>
          {body}
        </p>
      </div>
    </div>
  );
}

function ClosingParallax({ revealRef, revealStyle }: { revealRef: React.RefObject<HTMLDivElement>; revealStyle: React.CSSProperties }) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current || !revealRef.current) return;
      const rect = revealRef.current.getBoundingClientRect();
      const offset = (window.innerHeight / 2 - rect.top - rect.height / 2) * 0.15;
      bgRef.current.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [revealRef]);

  return (
    <div
      ref={revealRef}
      style={{
        ...revealStyle,
        position: "relative",
        overflow: "hidden",
        padding: "8rem 2.5rem",
        textAlign: "center",
      }}
    >
      {/* Parallax bg layer — oversized so movement doesn't reveal edges */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          top: "-20%",
          left: 0,
          right: 0,
          height: "140%",
          backgroundImage: `url(${closingBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
        }}
      />
      <div style={{ position: "absolute", inset: 0, background: "rgba(5,5,15,0.68)" }} />
      <p
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "clamp(1.25rem, 2.5vw, 1.9rem)",
          fontWeight: 800,
          lineHeight: 1.25,
          color: "var(--white)",
          letterSpacing: "-.01em",
        }}
      >
        The real danger is not moving too slowly. The real danger is moving without clarity.
      </p>
    </div>
  );
}

export function LyvraPressure() {
  const header   = useReveal(0);
  const intro    = useReveal(0.08);
  const card0    = useReveal(0);
  const card1    = useReveal(0.1);
  const card2    = useReveal(0.2);
  const tension  = useReveal(0.08);
  const closing  = useReveal(0);
  const cards    = [card0, card1, card2];

  return (
    <section style={{ background: "var(--white)", overflow: "hidden" }} id="pressure">

      {/* ── Header strip ── */}
      <div
        ref={header.ref}
        style={{
          ...header.style,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem 2.5rem 0",
        }}
      >
        <p style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--red)", marginBottom: "1.5rem" }}>
          The Cost of Reactive AI
        </p>
        <h2
          style={{
            fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            color: "var(--black)",
            margin: "0 0 3rem",
            letterSpacing: "-.025em",
            maxWidth: "18ch",
          }}
        >
          Everyone is telling you to move faster.{" "}
          <span style={{ color: "var(--red)" }}>That is precisely the problem.</span>
        </h2>
      </div>

      {/* ── Intro text block ── */}
      <div
        ref={intro.ref}
        style={{
          ...intro.style,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2.5rem 4rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "0",
          borderBottom: "1px solid var(--g200, #e5e5e5)",
        }}
      >
        {/* Col 1 — The pressure */}
        <div style={{ padding: "2rem 3rem 2rem 0", borderRight: "1px solid var(--g200, #e5e5e5)" }}>
          <p style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--g400)", margin: "0 0 1rem" }}>
            The Pressure Is Real
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--g600)", fontWeight: 300, margin: 0 }}>
            The AI conversation is being driven by people who benefit from your urgency. Vendors. Consultants. Industry press. None of them carry the consequences of a wrong decision for your firm.
          </p>
        </div>

        {/* Col 2 — You do */}
        <div style={{ padding: "2rem 3rem", borderRight: "1px solid var(--g200, #e5e5e5)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, lineHeight: 1.1, color: "var(--black)", margin: "0 0 .75rem", letterSpacing: "-.02em" }}>
            You do.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--red)", fontWeight: 600, margin: 0, letterSpacing: ".04em", textTransform: "uppercase" }}>
            The pressure is external.<br />The risk is entirely yours.
          </p>
        </div>

        {/* Col 3 — Competitors */}
        <div style={{ padding: "2rem 0 2rem 3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--g400)", margin: "0 0 1rem" }}>
            So Is the Risk
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--g600)", fontWeight: 300, margin: 0 }}>
            Your competitors appear to be moving. But appearance and strategy are not the same thing. Most are experimenting without a plan.
          </p>
        </div>
      </div>

      {/* ── Three pressure cards ── */}
      <div style={{ borderBottom: "1px solid var(--g200, #e5e5e5)" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "3.5rem 2.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
          }}
        >
          {pressureItems.map((item, i) => (
            <div
              ref={cards[i].ref}
              style={{
                ...cards[i].style,
                padding: "2rem 2.5rem 2rem " + (i === 0 ? "0" : "2.5rem"),
                borderRight: i < 2 ? "1px solid var(--g200, #e5e5e5)" : "none",
              }}
              key={i}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--red)" }}>
                  {item.index}
                </span>
                <span style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--g400, #999)" }}>
                  {item.label}
                </span>
              </div>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--g600)", fontWeight: 300, margin: 0 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tension panel — icon boxes ── */}
      <div
        ref={tension.ref}
        style={{
          ...tension.style,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3.5rem 2.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
          borderBottom: "1px solid var(--g200, #e5e5e5)",
        }}
      >
        <TensionCard
          Icon={AlertTriangle}
          label="The risk of rushing"
          body="Rushing into AI without clarity risks more than wasted budget. It risks the professional standards, client relationships, and institutional credibility that define your firm."
          hoverScheme="red"
        />
        <TensionCard
          Icon={Clock}
          label="The cost of waiting"
          body="But waiting carries its own cost. Margins erode. Competitors consolidate advantages. The window for deliberate action narrows."
          hoverScheme="dark"
        />
      </div>

      {/* ── Closing statement with parallax ── */}
      <ClosingParallax revealRef={closing.ref} revealStyle={closing.style} />

    </section>
  );
}
