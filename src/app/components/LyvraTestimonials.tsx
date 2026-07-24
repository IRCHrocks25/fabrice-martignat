import { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import testimonialsBg from "../../imports/image-13.png";

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

const testimonials = [
  {
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
    paragraphs: [
      <>I worked with Fabrice on several complex situations involving <strong style={{ color: "var(--white)", fontWeight: 600 }}>multi-million-pound client decisions</strong> where careful analysis and structured thinking were essential. His advice was always firmly focused on the client's long-term interests.</>,
      <>Fabrice has a remarkable ability to <strong style={{ color: "var(--white)", fontWeight: 600 }}>break down complicated problems, identify the key risks</strong>, and present them in a way that allows both bankers and clients to <strong style={{ color: "var(--white)", fontWeight: 600 }}>move forward with confidence</strong>.</>,
    ],
    attr: "Alessandro DC.",
    role: "Senior Private Banker",
  },
  {
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
    paragraphs: [
      <>I worked with Fabrice for several years in private banking where he regularly structured and presented <strong style={{ color: "var(--white)", fontWeight: 600 }}>multi-million-pound financing decisions</strong> for clients. He quickly became <strong style={{ color: "var(--white)", fontWeight: 600 }}>one of the most trusted members of the team</strong>.</>,
      <>Fabrice has a rare ability to analyse complex situations, structure the key issues clearly, and present well-reasoned recommendations. His <strong style={{ color: "var(--white)", fontWeight: 600 }}>judgment and analytical discipline consistently brought clarity</strong> to high-stakes decisions for both colleagues and clients.</>,
    ],
    attr: "Ian P.",
    role: "Head of Credit Advisory",
  },
];

export function LyvraTestimonials() {
  const header = useReveal(0);
  const t0 = useReveal(0);
  const t1 = useReveal(0.12);
  const revealCards = [t0, t1];

  return (
    <section className="lyvra-s-cred" id="testimonials" style={{ background: "var(--black)", position: "relative", overflow: "hidden", borderBottom: "none" }}>
      <img
        src={testimonialsBg}
        alt=""
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", opacity: 0.18 }}
      />
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "5rem 2.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div ref={header.ref} style={{ ...header.style, width: "100%", textAlign: "center" }}>
          <h2 className="lyvra-cred-hl" style={{ color: "var(--white)", maxWidth: "680px", margin: "0 auto 1rem", textAlign: "center" }}>
            What senior banking colleagues say about working with Fabrice.
          </h2>
          <p style={{ fontSize: "1rem", fontWeight: 600, letterSpacing: ".06em", color: "rgba(255,255,255,0.45)", marginBottom: "3.5rem", textTransform: "uppercase", textAlign: "center" }}>
            Endorsements of Judgment
          </p>
        </div>

        {/* Testimonial cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", width: "100%" }}>
          {testimonials.map((t, i) => (
            <div
              ref={revealCards[i].ref}
              style={{
                ...revealCards[i].style,
                padding: "2.5rem",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={i}
            >
              {/* Opening quote mark */}
              <div style={{ fontSize: "3rem", lineHeight: 1, color: "var(--red)", marginBottom: "1.25rem", fontFamily: "Georgia, serif" }}>"</div>

              {/* Quote paragraphs */}
              <div style={{ flex: 1 }}>
                {t.paragraphs.map((para, j) => (
                  <p
                    key={j}
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.8,
                      color: "rgba(255,255,255,0.65)",
                      fontWeight: 300,
                      margin: j > 0 ? "1rem 0 0" : "0",
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Author row */}
              <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", alignItems: "center", gap: ".75rem", width: "100%" }}>
                <ImageWithFallback
                  src={t.img}
                  alt={t.attr}
                  style={{ width: "52px", height: "52px", borderRadius: "50%", objectFit: "cover", objectPosition: "top", flexShrink: 0, filter: "grayscale(20%)" }}
                />
                <div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--white)" }}>— {t.attr}</div>
                  <div style={{ fontSize: "1rem", fontWeight: 400, color: "rgba(255,255,255,0.45)", marginTop: ".2rem" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
