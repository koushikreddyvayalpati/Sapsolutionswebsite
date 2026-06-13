"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type HTMLAttributes,
  type Ref,
  type ReactNode,
} from "react";

type Variant = "up" | "left" | "right";

const VARIANT_CLASS: Record<Variant, string> = {
  up: "sr",
  left: "sr-l",
  right: "sr-r",
};

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: Variant;
  children: ReactNode;
}

/** Reveals the element (adds `.up`) once it enters the viewport, via IntersectionObserver. */
export default function Reveal({
  as = "div",
  variant = "up",
  className,
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
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
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = [VARIANT_CLASS[variant], shown && "up", className].filter(Boolean).join(" ");
  const props = { className: cls, ...rest };

  if (as === "article") {
    return (
      <article ref={ref as Ref<HTMLElement>} {...props}>
        {children}
      </article>
    );
  }
  if (as === "figure") {
    return (
      <figure ref={ref as Ref<HTMLElement>} {...props}>
        {children}
      </figure>
    );
  }
  if (as === "form") {
    return (
      <form ref={ref as Ref<HTMLFormElement>} {...props}>
        {children}
      </form>
    );
  }
  if (as === "section") {
    return (
      <section ref={ref as Ref<HTMLElement>} {...props}>
        {children}
      </section>
    );
  }

  if (as !== "div") {
    const Tag = as;
    return (
      <Tag className={cls} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <div ref={ref as Ref<HTMLDivElement>} {...props}>
      {children}
    </div>
  );
}
