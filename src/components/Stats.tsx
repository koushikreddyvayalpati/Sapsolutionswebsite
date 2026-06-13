"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/data/site";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(frame);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(Math.floor(eased * target));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stc-n">
      {value}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="sec dark" id="stats" aria-label="Company statistics">
      <div className="stats-grid">
        {STATS.map((s) => (
          <div className="stc" key={s.label}>
            <CountUp target={s.count} suffix={s.suffix} />
            <div className="stc-l">{s.label}</div>
            <div className="stc-s">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
