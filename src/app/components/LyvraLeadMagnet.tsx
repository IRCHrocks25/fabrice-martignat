import { useState } from "react";
import bgImage from "../../imports/87ab624129e346abd0216453d067ced0_LE_upscale_prime.jpg";

const whatYouGet = [
  {
    num: "01",
    title: "Five Critical Questions",
    desc: "Challenge the assumptions behind your current AI strategy before you commit the budget.",
  },
  {
    num: "02",
    title: "A Decision Framework",
    desc: "Know where to commit, where to hold back, and what must come first.",
  },
  {
    num: "03",
    title: "Executive Briefing",
    desc: "Built specifically for founders and managing partners of professional services firms.",
  },
];

export function LyvraLeadMagnet() {
  const [form, setForm] = useState({ name: "", email: "", size: "" });

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Placeholder submit
  };

  return (
    <section
      className="lyvra-s-lead"
      id="lead"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="lyvra-lead-inner">

        <div className="lyvra-lead-topbar rv">
          <div>
            <h2 className="lyvra-lead-hl">
              Before You Commit<br /><span>the Budget.</span>
            </h2>
          </div>
          <p className="lyvra-lead-problem-tagline">Before you allocate your 2026 AI budget, ask these five questions.</p>
        </div>

        {/* Body paragraphs from copy */}
        <div className="rv" style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.8)", fontWeight: 300, marginBottom: ".75rem", maxWidth: "70ch" }}>
            Most professional services firms are making AI investment decisions without a structured basis for evaluating them. This executive briefing challenges the assumptions behind your current AI strategy and gives you a clear framework for deciding where to commit, where to hold back, and what must come first.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.65)", fontWeight: 300, maxWidth: "65ch" }}>
            This is not a generic checklist. It is a focused thought-leadership resource built specifically for founders and managing partners of professional services firms.
          </p>
        </div>

        <div className="lyvra-lead-cols">
          {/* LEFT: what you get */}
          <div className="lyvra-lead-left">
            <div className="lyvra-lead-what rv d2">
              <div className="lyvra-lw-header">
                <span className="lyvra-lw-eyebrow lyvra-lw-eyebrow--white">What You Get</span>
                <span className="lyvra-lw-free-badge">Free</span>
              </div>
              <div className="lyvra-lw-cards">
                {whatYouGet.map((item) => (
                  <div className="lyvra-lw-card" key={item.num}>
                    <div className="lyvra-lw-card-num">{item.num}</div>
                    <div className="lyvra-lw-card-body">
                      <div className="lyvra-lw-card-title">{item.title}</div>
                      <div className="lyvra-lw-card-desc">{item.desc}</div>
                    </div>
                    <div className="lyvra-lw-card-check">✓</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="lyvra-lead-right">
            <div className="lyvra-lead-form rv">
              <div className="lyvra-lf-tag">Free Download — No Credit Card Required</div>
              <div className="lyvra-lf-title">Download the 2026 AI Readiness Briefing</div>
              <div className="lyvra-lf-fields">
                <div className="lyvra-lf-field">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="lyvra-lf-field">
                  <label>Work Email</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="lyvra-lf-field">
                  <label>Firm Size</label>
                  <select
                    value={form.size}
                    onChange={(e) => setForm({ ...form, size: e.target.value })}
                  >
                    <option value="">Select firm size...</option>
                    <option>15–30 employees</option>
                    <option>31–75 employees</option>
                    <option>76–150 employees</option>
                    <option>150+ employees</option>
                  </select>
                </div>
              </div>
              <button className="lyvra-lf-btn" onClick={handleSubmit}>
                Download the Free Executive Briefing
              </button>
              <p className="lyvra-lf-note">
                Built for professional services firms. No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
