import { useState } from "react";
import methodImg from "../../imports/image-12.webp";
import { Fingerprint, GitBranch, Lightbulb } from "lucide-react";

const whatItems = [
  {
    icon: Fingerprint,
    phase: "Built Around Your Context",
    title: "Not a Generic Framework",
    body: "This is not a generic consulting framework applied across industries. Every engagement is built around the unique context, risk profile, and professional standards of your specific organisation.",
  },
  {
    icon: GitBranch,
    phase: "A Structured Strategic Pause",
    title: "The Decision Gate",
    body: "Before committing to tools, training, or vendors, leadership teams need to pass through a Decision Gate: a structured strategic pause to evaluate where AI genuinely strengthens the business, where it introduces risk, and what sequence of decisions makes sense.",
  },
  {
    icon: Lightbulb,
    phase: "The Outcome",
    title: "Clarity, Not Just Adoption",
    body: "The goal is not simply AI adoption. It is helping firms operate with greater clarity, sharper processes, and the confidence that comes from decisions made on solid foundations.",
  },
];

function AccordionItem({ item, isOpen, onToggle }: {
  item: typeof whatItems[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = item.icon;
  return (
    <div style={{ borderBottom: "1px solid var(--g200, #e5e5e5)" }}>
      <button
        onClick={onToggle}
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
            color: isOpen ? "var(--red)" : "var(--g400)",
            transition: "color 0.25s",
          }}
        >
          <Icon size={18} strokeWidth={1.75} />
        </span>
        <div>
          <div style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--g400)", marginBottom: ".2rem" }}>
            {item.phase}
          </div>
          <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--black)", lineHeight: 1.3 }}>
            {item.title}
          </div>
        </div>
        <span
          style={{
            fontSize: "1.1rem",
            color: isOpen ? "var(--red)" : "var(--g400, #999)",
            fontWeight: 300,
            lineHeight: 1,
            transition: "transform 0.25s, color 0.2s",
            display: "inline-block",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 0.35s cubic-bezier(.16,1,.3,1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p style={{
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "var(--g600)",
            fontWeight: 300,
            margin: "0 0 1.25rem",
            paddingLeft: "3.5rem",
          }}>
            {item.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export function LyvraMethodology() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="lyvra-s-method" id="method">
      <div className="lyvra-method-inner">
        <div className="rv">
          <p className="lyvra-tag">The Advisory Philosophy</p>
          <h2 className="lyvra-method-hl">
            AI is not a technology decision.<br />It is a leadership decision under uncertainty.
          </h2>
          <p className="lyvra-method-body" style={{ fontWeight: 600, marginBottom: "1.5rem" }}>
            A Fundamental Reframe
          </p>

          <blockquote
            style={{
              borderLeft: "3px solid var(--red)",
              paddingLeft: "1.5rem",
              margin: "0 0 2rem",
              fontStyle: "italic",
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "var(--black)",
            }}
          >
            "Defensible decisions are rarely obvious. They are the strict outcome of disciplined evaluation."
            <footer style={{ marginTop: ".6rem", fontSize: "1rem", fontStyle: "normal", fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--g400)" }}>
              — Fabrice Martignat
            </footer>
          </blockquote>

          <p className="lyvra-method-body">
            Most firms approach AI as a technology problem. They evaluate tools, run pilots, and delegate decisions to IT teams or external vendors. The result is fragmented adoption, misaligned investment, and initiatives that generate more internal confusion than value.
          </p>
          <p className="lyvra-method-body">
            Peter Drucker observed that there is nothing so useless as doing efficiently that which should not be done at all. Firms rushing into AI implementation are optimising a decision they have not yet properly made.
          </p>
          <p className="lyvra-method-body">
            There is a more disciplined approach.
          </p>

          <div className="lyvra-method-separator rv d2">
            <p className="lyvra-method-separator-text">
              <strong>Before committing to tools, training, or vendors, leadership teams need to pass through a Decision Gate.</strong>
            </p>
          </div>
        </div>

        <div className="rv d1">
          <p className="lyvra-tag">A Structured Approach, Not a Generic Framework</p>
          <h3 className="lyvra-method-sub-hl">The AI Decision Gate</h3>
          <p className="lyvra-method-body">
            A structured strategic pause to evaluate where AI genuinely strengthens the business, where it introduces risk, and what sequence of decisions makes sense. This is not a generic consulting framework applied across industries. Every engagement is built around the unique context, risk profile, and professional standards of your specific organisation.
          </p>

          {/* Collapsible accordion */}
          <div style={{ borderTop: "1px solid var(--g200, #e5e5e5)", marginTop: "2rem" }}>
            {whatItems.map((item, i) => (
              <AccordionItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

          {/* Image below accordion */}
          <div style={{ marginTop: "2rem", overflow: "hidden" }}>
            <img
              src={methodImg}
              alt=""
              style={{
                width: "60%",
                display: "block",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
