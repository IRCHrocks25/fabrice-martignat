import { useEffect, useRef, useState } from "react";
import peterImg from "../../imports/Frame_2.webp";

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

export function LyvraAbout() {
  const introLeft  = useReveal(0);
  const introRight = useReveal(0.12);
  const founder0   = useReveal(0);
  const cta        = useReveal(0);

  return (
    <section className="lyvra-s-about" id="about">
      <div className="lyvra-about-inner">

        {/* intro grid */}
        <div className="lyvra-about-intro">
          <div ref={introLeft.ref} style={introLeft.style}>
            <p className="lyvra-tag">The Strategist and Craftsman</p>
            <h2 className="lyvra-about-hl">
              The Advisor
              <br />
              Behind the
              <br />
              <span>Method.</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--g400)",
              }}
            >
              After two decades at the top of his field, he chose what came next.
            </p>
          </div>

          <div ref={introRight.ref} style={introRight.style}>
            <p className="lyvra-about-intro-body">
              Fabrice Martignat spent more than two decades at the centre of high-stakes financial decision-making, navigating environments where complexity was constant, accountability was non-negotiable, and clarity was the only currency that mattered.
            </p>
            <p className="lyvra-about-intro-body">
              At the peak of a decorated career, he made a deliberate choice. He identified what he wanted to build, negotiated his exit on his own terms, and moved toward it with the same{" "}
              <strong>structured thinking he now brings to every client engagement.</strong> This was his next chapter. Entirely by design.
            </p>
          </div>
        </div>

      </div>


<div className="lyvra-about-inner">

        {/* founder card */}
        <div className="lyvra-founders-grid">
          <div
            ref={founder0.ref}
            style={founder0.style}
            className="lyvra-founder-card"
          >
            <div className="lyvra-fc-inner">
              <div className="lyvra-fc-photo">
                <img src={peterImg} alt="Fabrice Martignat" className="lyvra-fc-photo-img" />
              </div>
              <div className="lyvra-fc-content">
                <div className="lyvra-fc-tag">AI Decision Advisor for Professional Services Firms</div>
                <div className="lyvra-fc-name">Fabrice Martignat</div>
                <div className="lyvra-fc-role">Investment Banking · Private Banking · CFA · CAIA · CeMAP · DipWSET</div>
                <div className="lyvra-fc-divider" />
                <p className="lyvra-fc-body">
                  His new chapter is focused on what he has always done best: helping organisations make better decisions under uncertainty. Now that means helping professional services firms harness AI with discipline, implement operational excellence, and build the kind of clarity that allows leaders to move forward with genuine confidence rather than reactive decision-making.
                  <br /><br />
                  Today, Fabrice divides his time between his native France and the UK, bringing the same deliberate, unhurried approach to his advisory practice that he brings to everything else in his life.
                  <br /><br />
                  Outside of his professional work, Fabrice appreciates the finer things in life. He is a dedicated cycling enthusiast who finds clarity and harmony in long hours on the road. He holds the DipWSET wine diploma, with a particular appreciation for the crisp minerality of Sancerre and the honest precision of Burgundy, especially Pommard. He admires wines that cannot hide behind blends. They must express their character with integrity.
                  <br /><br />
                  When Fabrice commits to something, he gives 120%. To his clients, to his cycling, to his craft. No exceptions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div ref={cta.ref} style={cta.style} className="lyvra-about-cta-strip">
          <p className="lyvra-acs-text">
            The AI Decision Gate is open.{" "}
            <span>The first step is a conversation.</span>
          </p>
          <a href="https://fabricemartignat.com/5-ai-questions" target="_blank" rel="noopener noreferrer" className="lyvra-acs-btn">
            Download the Executive Briefing →
          </a>
        </div>

      </div>
    </section>
  );
}
