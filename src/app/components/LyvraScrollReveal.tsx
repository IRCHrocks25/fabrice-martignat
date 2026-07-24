import { useEffect } from "react";

export function LyvraScrollReveal() {
  useEffect(() => {
    // Immediately reveal any .rv element already visible in the viewport
    const revealNow = () => {
      document.querySelectorAll<Element>(".rv:not(.in)").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 160) {
          el.classList.add("in");
        }
      });
    };

    // IntersectionObserver for elements not yet in view
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "160px 0px 160px 0px" }
    );

    const observeAll = () => {
      revealNow();
      document.querySelectorAll<Element>(".rv:not(.in)").forEach((el) => {
        io.observe(el);
      });
    };

    // Initial sweep
    observeAll();

    // MutationObserver: catches dynamically added .rv elements
    const mo = new MutationObserver(() => {
      observeAll();
    });

    mo.observe(document.body, { childList: true, subtree: true });

    // Also reveal on scroll in case anything slips through
    const onScroll = () => revealNow();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Safety-net sweeps
    const t1 = setTimeout(observeAll, 100);
    const t2 = setTimeout(observeAll, 500);
    const t3 = setTimeout(observeAll, 1500);
    const t4 = setTimeout(observeAll, 3000);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return null;
}
