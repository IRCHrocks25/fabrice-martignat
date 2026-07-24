import { useEffect, useRef, useState } from "react";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

function useCountUp(target: number, duration = 1600, active = false) {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return value;
}

const stats = [
  {
    target: 42, prefix: "", suffix: "%", display: null,
    body: <><strong>42% of companies abandoned most of their AI initiatives in 2025,</strong> up from just 17% the year before. The average organisation scrapped 46% of AI proof-of-concepts before they ever reached production.</>,
    source: "S&P Global Market Intelligence, 2025",
    url: "https://www.spglobal.com/marketintelligence/en/",
  },
  {
    target: 6, prefix: "", suffix: "%", display: null,
    body: <><strong>Only 6% of organisations qualify as AI high performers,</strong> generating structural, measurable business value from their investments. Meanwhile, 51% have already experienced at least one negative consequence from adoption.</>,
    source: "McKinsey State of AI, 2025",
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
  },
  {
    target: 3, prefix: "~", suffix: "×", display: null,
    body: <>Firms that redesign how work flows before selecting technology are <strong>nearly 3x more likely to generate measurable returns.</strong> The majority of organisations skip this step entirely, layering AI on top of existing processes and seeing no material impact.</>,
    source: "McKinsey State of AI, 2025",
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
  },
  {
    target: 0, prefix: "", suffix: "", display: "—",
    body: <>The pattern across every major study is the same. <strong>Adoption is not the challenge.</strong> The absence of a clear, structured decision before committing is what separates firms that create value from those that accumulate cost.</>,
    source: "McKinsey State of AI, 2025",
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
  },
];

function StatBlock({ stat, delay, inView }: { stat: typeof stats[0]; delay: number; inView: boolean }) {
  const count = useCountUp(stat.target, 1400, inView);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [inView, delay]);

  const displayValue = stat.display ?? `${stat.prefix}${count}${stat.suffix}`;

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(2rem)",
        transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}ms`,
      }}
    >
      <div
        className="lyvra-sb-n"
        style={{
          transition: `opacity 0.5s ease ${delay + 200}ms`,
          opacity: visible ? 1 : 0,
        }}
      >
        {displayValue}
      </div>
      <p className="lyvra-sb-body">{stat.body}</p>
      <a
        href={stat.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          marginTop: "0.75rem",
          fontSize: "1rem",
          fontWeight: 500,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: "var(--g400, #888)",
          textDecoration: "none",
          opacity: 0.7,
          transition: "opacity 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
      >
        Resource: {stat.source} ↗
      </a>
    </div>
  );
}

export function LyvraStatistics() {
  const { ref, inView } = useInView();

  return (
    <section className="lyvra-s-stats" id="stats">
      <div className="lyvra-stats-inner">
        <div className="lyvra-stats-header rv">
          <p className="lyvra-tag">Executive Market Insight</p>
          <h2 className="lyvra-stats-hl">
            The data does not support <span>rushing.</span>
          </h2>
          <p style={{ fontSize: "1rem", fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--g400)", marginTop: ".5rem", marginBottom: "0" }}>
            What the Research Confirms
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--g600)", fontWeight: 300, maxWidth: "60ch", marginTop: "1rem" }}>
            The pressure to act on AI is real. So is the risk of acting without a plan.
          </p>
        </div>
        <div className="lyvra-stats-grid" ref={ref}>
          {stats.map((s, i) => (
            <StatBlock key={i} stat={s} delay={i * 120} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
