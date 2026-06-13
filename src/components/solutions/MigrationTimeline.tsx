"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    state: "done",
    title: "Current State Assessment",
    body: "Deep dive into your ECC landscape, custom code, interfaces and data quality.",
    progress: 100,
  },
  {
    state: "done",
    title: "Blueprint & Simplification",
    body: "Custom code reduction, process simplification and conversion approach selection.",
    progress: 100,
  },
  {
    state: "cur",
    title: "Technical Conversion",
    body: "Automated SPDD/SPAU, SUM execution and data migration using SAP DMO tooling.",
    progress: 74,
  },
  {
    state: "",
    title: "Functional Testing & UAT",
    body: "End-to-end business process testing, regression and user acceptance cycles.",
    progress: 22,
  },
  {
    state: "",
    title: "Go-Live & Hypercare",
    body: "Cutover execution, hypercare support and structured knowledge transfer.",
    progress: 0,
  },
];

export default function MigrationTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(frame);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="mig-hdr">ECC → S/4HANA Migration Roadmap</div>
      {STEPS.map((s, i) => (
        <div
          key={s.title}
          className={`mig-step${shown ? " vis" : ""}`}
          style={{ transitionDelay: shown ? `${i * 140}ms` : undefined }}
        >
          <div className={`mstep-num${s.state ? ` ${s.state}` : ""}`}>
            {s.state === "done" ? "✓" : i + 1}
          </div>
          <div className="mstep-cnt">
            <h4>{s.title}</h4>
            <p>{s.body}</p>
            <div
              className="mbar"
              role="progressbar"
              aria-valuenow={s.progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${s.title} progress`}
            >
              <div
                className="mfill"
                style={{ width: shown ? `${s.progress}%` : 0, transitionDelay: "350ms" }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
