"use client";

import { useEffect, useState } from "react";

interface DotTarget {
  id: string;
  label: string;
}

export default function SideDots({ targets }: { targets: DotTarget[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.5 },
    );
    targets.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [targets]);

  return (
    <div className="sdots" role="navigation" aria-label="Solution sections">
      {targets.map((t) => (
        <button
          key={t.id}
          className={`sdot${active === t.id ? " active" : ""}`}
          data-label={t.label}
          aria-label={`Jump to ${t.label}`}
          onClick={() => document.getElementById(t.id)?.scrollIntoView({ behavior: "smooth" })}
        />
      ))}
    </div>
  );
}
