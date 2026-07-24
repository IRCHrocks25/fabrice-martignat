const items = [
  "Microsoft", "Tele2", "Sun Microsystems", "Fortune 500",
  "VC-Backed Companies", "KTH Royal Institute", "Stockholm University",
  "90-Day AI Roadmap", "Sweden / Nordics",
];

export function LyvraMarquee() {
  const doubled = [...items, ...items];
  return (
    <div className="lyvra-mq">
      <div className="lyvra-mq-track">
        {doubled.map((item, i) => (
          <span className="lyvra-mq-item" key={i}>
            {item} <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
