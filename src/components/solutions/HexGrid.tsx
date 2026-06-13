"use client";

import { useEffect, useState, type ReactNode } from "react";

const sw = { fill: "none", stroke: "currentColor", strokeWidth: 2 } as const;

const HEXES: { label: ReactNode; icon: ReactNode }[][] = [
  [
    {
      label: (
        <>
          Build &amp;
          <br />
          Extend
        </>
      ),
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" {...sw}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      label: "Integrate",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" {...sw}>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
    },
    {
      label: "Automate",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" {...sw}>
          <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
  ],
  [
    {
      label: (
        <>
          HANA
          <br />
          Cloud
        </>
      ),
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" {...sw}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
    },
    {
      label: (
        <>
          AI Core
          <br />+ Joule
        </>
      ),
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" {...sw}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
        </svg>
      ),
    },
  ],
  [
    {
      label: "Security",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" {...sw}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      label: (
        <>
          DevOps
          <br />
          CI/CD
        </>
      ),
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" {...sw}>
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path d="M6 21V9a9 9 0 0 0 9 9" />
        </svg>
      ),
    },
    {
      label: "Analytics",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" {...sw}>
          <rect x="3" y="11" width="4" height="6" rx="1" />
          <rect x="10" y="7" width="4" height="10" rx="1" />
          <rect x="17" y="3" width="4" height="14" rx="1" />
        </svg>
      ),
    },
  ],
];

const TOTAL = HEXES.flat().length;
const ROW_STARTS = HEXES.map((_, rowIndex) =>
  HEXES.slice(0, rowIndex).reduce((total, row) => total + row.length, 0),
);

export default function HexGrid() {
  const [lit, setLit] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setLit((v) => (v + 1) % TOTAL), 520);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <div className="hex-hdr">BTP Capability Map — hover to explore</div>
      <div className="hex-grid">
        {HEXES.map((row, r) => (
          <div key={r} className={`hex-row${r === 1 ? " off" : ""}`}>
            {row.map((h, c) => {
              const isLit = ROW_STARTS[r] + c === lit;
              return (
                <div key={c} className={`hex${isLit ? " lit" : ""}`}>
                  <div className="hex-bg" />
                  <div className="hex-inner">
                    {h.icon}
                    <span>{h.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
