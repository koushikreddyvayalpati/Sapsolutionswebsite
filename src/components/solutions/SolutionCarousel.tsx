"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import Icon from "@/components/Icon";

export default function SolutionCarousel({ children }: { children: ReactNode }) {
  const total = Children.count(children);
  const railRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(total);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const update = () => {
      const panels = rail.querySelectorAll(".sol").length || total;
      const nextIndex = rail.clientWidth ? Math.round(rail.scrollLeft / rail.clientWidth) : 0;
      setCount(panels);
      setIndex(Math.min(Math.max(nextIndex, 0), Math.max(panels - 1, 0)));
    };

    update();
    rail.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      rail.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [total]);

  function scrollToPanel(nextIndex: number) {
    const rail = railRef.current;
    if (!rail) return;
    const clamped = Math.min(Math.max(nextIndex, 0), Math.max(count - 1, 0));
    rail.scrollTo({ left: clamped * rail.clientWidth, behavior: "smooth" });
    setIndex(clamped);
  }

  return (
    <div className="solution-carousel">
      <div className="solution-carousel-controls" aria-label="Solution carousel controls">
        <button
          type="button"
          className="carousel-btn prev"
          aria-label="Previous solution"
          disabled={index === 0}
          onClick={() => scrollToPanel(index - 1)}
        >
          <Icon name="arrow" size={16} strokeWidth={2.5} />
        </button>
        <div className="carousel-status" aria-live="polite">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>/</span>
          <span>{String(count || total || 1).padStart(2, "0")}</span>
        </div>
        <button
          type="button"
          className="carousel-btn next"
          aria-label="Next solution"
          disabled={index >= count - 1}
          onClick={() => scrollToPanel(index + 1)}
        >
          <Icon name="arrow" size={16} strokeWidth={2.5} />
        </button>
      </div>
      <div
        ref={railRef}
        className="solution-detail-rail"
        role="region"
        tabIndex={0}
        aria-label="Detailed SAP solution sections — use left and right arrow keys to browse"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            scrollToPanel(index + 1);
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            scrollToPanel(index - 1);
          }
        }}
      >
        {children}
      </div>
    </div>
  );
}
