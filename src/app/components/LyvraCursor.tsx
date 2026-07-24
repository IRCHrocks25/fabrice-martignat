import { useEffect, useRef } from "react";

export function LyvraCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", onMove);

    return () => {
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div id="lyvra-cd" ref={cursorRef}>
      {/* Top-left vertical red bar */}
      <div style={{ position: "absolute", background: "red", width: "11.738px", height: "23.48px", left: 0, top: 0 }} />
      {/* Bottom-right horizontal red bar */}
      <div style={{ position: "absolute", left: "11.74px", top: "23.48px", width: "23.475px", height: "11.738px", background: "red" }} />
    </div>
  );
}
