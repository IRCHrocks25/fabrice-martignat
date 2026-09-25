import { useState } from "react";
import painImage from "figma:asset/d3d6adcf8ec5d05dbf554db5386c905f074e8be5.webp";

const pains = [
  {
    name: '"Vendors are ready with solutions."',
    problem: "Solutions to problems you have not yet properly defined, built on timelines that serve their pipeline, not your business.",
    success: { label: "What This Means:", text: "The pressure is external. The risk is entirely yours. Vendors benefit from your urgency. They do not carry the consequences of a wrong decision for your firm." },
  },
  {
    name: '"Your clients are asking questions."',
    problem: "And your answer needs to be considered, not reactive. Because in professional services, how you respond to uncertainty is part of the service.",
    success: { label: "What This Means:", text: "Your competitors appear to be moving. But appearance and strategy are not the same thing. Most are experimenting without a plan." },
  },
  {
    name: '"The industry press is full of urgency."',
    problem: "Urgency that does not distinguish between a fintech startup and a boutique wealth management firm with 20 years of client trust at stake.",
    success: { label: "What This Means:", text: "The AI conversation is being driven by people who benefit from your urgency. Vendors. Consultants. Industry press. None of them carry the consequences of a wrong decision for your firm. You do." },
  },
];

export function LyvraPainPoints() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? -1 : i);
  };

  return (
    <section className="lyvra-s-pain" id="pain">
      <div className="lyvra-pain-left">
        <h2 className="lyvra-pain-hl rv">Everyone is telling you to move faster.<br />That is precisely the problem.</h2>
        <p className="lyvra-pain-intro rv d1">
          The AI conversation is being driven by people who benefit from your urgency. Vendors. Consultants. Industry press. None of them carry the consequences of a wrong decision for your firm.
        </p>
        <p style={{ fontSize: ".95rem", lineHeight: 1.75, color: "var(--g600)", fontWeight: 300, marginBottom: "1rem" }} className="rv d1">
          You do. The pressure is external. The risk is entirely yours.
        </p>
        <p className="lyvra-pain-subtitle rv d2">The Pressure Is Real. So Is the Risk.</p>
        <p style={{ fontSize: ".9rem", lineHeight: 1.75, color: "var(--g600)", fontWeight: 300, marginBottom: "1.5rem" }} className="rv d2">
          Your competitors appear to be moving. But appearance and strategy are not the same thing. Most are experimenting without a plan.
        </p>

        <div className="lyvra-pain-list">
          {pains.map((pain, i) => {
            const isOpen = openIdx === i;
            return (
              <div className={`lyvra-pain-item${isOpen ? " open" : ""} rv`} key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="lyvra-pain-row" onClick={() => toggle(i)}>
                  <span className="lyvra-pi-num">✖</span>
                  <span className="lyvra-pi-name">{pain.name}</span>
                  <span className="lyvra-pi-icon">{isOpen ? "×" : "+"}</span>
                </div>
                {isOpen && (
                  <div className="lyvra-pain-expand">
                    <p className="lyvra-pe-problem">{pain.problem}</p>
                    <div className="lyvra-pe-success">
                      <span className="lyvra-pe-tick">✔</span>
                      <div>
                        <strong>{pain.success.label}</strong> {pain.success.text}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing paragraphs from copy */}
        <div className="rv d3" style={{ marginTop: "2rem", borderTop: "1px solid var(--g200, #e5e5e5)", paddingTop: "1.5rem" }}>
          <p style={{ fontSize: ".9rem", lineHeight: 1.8, color: "var(--g600)", fontWeight: 300, marginBottom: ".75rem" }}>
            Rushing into AI without clarity risks more than wasted budget. It risks the professional standards, client relationships, and institutional credibility that define your firm.
          </p>
          <p style={{ fontSize: ".9rem", lineHeight: 1.8, color: "var(--g600)", fontWeight: 300, marginBottom: ".75rem" }}>
            But waiting carries its own cost. Margins erode. Competitors consolidate advantages. The window for deliberate action narrows.
          </p>
          <p style={{ fontSize: ".95rem", lineHeight: 1.7, color: "var(--black)", fontWeight: 700, marginBottom: "1.5rem" }}>
            The real danger is not moving too slowly. The real danger is moving without clarity.
          </p>
        </div>

        <a href="https://calendly.com/fabrice-fabricemartignat" target="_blank" rel="noopener noreferrer" className="lyvra-pain-cta rv d4">
          Begin the AI Decision Gate
        </a>
      </div>

      <div className="lyvra-pain-right">
        <img src={painImage} alt="Professional services leader at work" className="lyvra-pain-img-photo" />
      </div>
    </section>
  );
}
