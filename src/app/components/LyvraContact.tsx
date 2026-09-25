import bgImg from "../../imports/Frame_3.webp";

export function LyvraContact() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(5rem,10vw,10rem) var(--pad)",
        background: "var(--white)",
      }}
    >
      {/* Background image */}
      <img
        src={bgImg}
        alt=""
        aria-hidden="true"
        className="lyvra-contact-bg"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center right",
          display: "block",
        }}
      />

      {/* Content — left aligned */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "680px",
          margin: "0 auto 0 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
        }}
      >
        <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(2rem,3.5vw,3.2rem)", lineHeight: 1.1, letterSpacing: "-.025em", margin: "0 0 1.5rem", color: "var(--black)" }}>
          <span className="lyvra-contact-hl-line" style={{ display: "block", whiteSpace: "nowrap" }}>The AI Decision Gate is open.</span>
          <span style={{ color: "var(--red)" }}>The first step is a conversation.</span>
        </h2>

        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--g600)", fontWeight: 300, maxWidth: "55ch", margin: "0 0 2.5rem" }}>
          If you are ready to move from pressure to clarity, build stronger foundations for your firm, and make a defensible AI decision your leadership team can act on with confidence, the first step is a conversation.
        </p>

        <a
          href="https://calendly.com/fabrice-fabricemartignat"
          target="_blank"
          rel="noopener noreferrer"
          className="lyvra-contact-cta-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: ".6rem",
            fontSize: "1rem",
            fontWeight: 700,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            textDecoration: "none",
            padding: "1rem 2.2rem",
            background: "var(--black)",
            color: "#fff",
            border: "2px solid var(--black)",
            transition: "background .25s, border-color .25s, transform .3s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "var(--red)"; e.currentTarget.style.borderColor = "var(--red)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "var(--black)"; e.currentTarget.style.borderColor = "var(--black)"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          Book a 30-minute exploratory call →
        </a>
      </div>
    </section>
  );
}
