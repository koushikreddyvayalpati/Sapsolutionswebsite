"use client";

import { useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { FAQS } from "@/data/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="sec" id="faq">
      <Reveal className="shdr">
        <span className="stag">FAQ</span>
        <h2>Common Questions</h2>
      </Reveal>
      <div className="faq-wrap">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} className={`fq${isOpen ? " open" : ""}`}>
              <button
                className="fqq"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {f.q}
                <Icon name="chevron" size={17} strokeWidth={2.5} className="fq-chev" />
              </button>
              <div id={`faq-panel-${i}`} className="fq-body" role="region">
                {f.a}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
