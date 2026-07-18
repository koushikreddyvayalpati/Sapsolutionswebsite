"use client";

import { useEffect } from "react";

export default function HashTargetScroll() {
  useEffect(() => {
    function scrollToTarget() {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      target.scrollIntoView({ block: "start" });
      root.style.scrollBehavior = previousBehavior;
    }

    const frame = requestAnimationFrame(scrollToTarget);
    const settleTimer = window.setTimeout(scrollToTarget, 350);
    window.addEventListener("hashchange", scrollToTarget);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settleTimer);
      window.removeEventListener("hashchange", scrollToTarget);
    };
  }, []);

  return null;
}
