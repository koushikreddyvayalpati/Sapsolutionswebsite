"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent, type TouchEvent } from "react";
import { SERVICES } from "@/data/site";
import Icon from "./Icon";

export default function ServiceShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const touchLatest = useRef<{ x: number; y: number } | null>(null);
  const service = SERVICES[activeIndex];

  function setServiceIndex(index: number) {
    setActiveIndex((index + SERVICES.length) % SERVICES.length);
  }

  function moveFocus(index: number) {
    const nextIndex = (index + SERVICES.length) % SERVICES.length;
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  function moveService(index: number) {
    setServiceIndex(index);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      moveFocus(index + 1);
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      moveFocus(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      moveFocus(0);
    } else if (event.key === "End") {
      event.preventDefault();
      moveFocus(SERVICES.length - 1);
    }
  }

  function handleTouchStart(event: TouchEvent<HTMLElement>) {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
    touchLatest.current = { x: touch.clientX, y: touch.clientY };
  }

  function handleTouchMove(event: TouchEvent<HTMLElement>) {
    const touch = event.touches[0];
    touchLatest.current = { x: touch.clientX, y: touch.clientY };
  }

  function handleTouchEnd() {
    if (!touchStart.current || !touchLatest.current) return;

    const deltaX = touchLatest.current.x - touchStart.current.x;
    const deltaY = touchLatest.current.y - touchStart.current.y;
    const isHorizontalSwipe = Math.abs(deltaX) > 54 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25;

    touchStart.current = null;
    touchLatest.current = null;

    if (!isHorizontalSwipe) return;
    moveService(activeIndex + (deltaX < 0 ? 1 : -1));
  }

  return (
    <div className="service-showcase">
      <div className="service-tabs" role="tablist" aria-label="SAP services">
        {SERVICES.map((item, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={item.slug}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={`service-tab-${item.slug}`}
              className={`service-tab${selected ? " is-active" : ""}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`service-panel-${item.slug}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span className="service-tab-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="service-tab-copy">
                <strong>{item.title}</strong>
                <small>{item.chips.slice(0, 2).join(" · ")}</small>
              </span>
              <Icon name="arrow" size={15} strokeWidth={2.3} />
            </button>
          );
        })}
        <Link href="/services" className="service-all-link">
          Compare all services
          <Icon name="arrow" size={14} strokeWidth={2.4} />
        </Link>
      </div>

      <article
        key={service.slug}
        id={`service-panel-${service.slug}`}
        className="service-stage"
        role="tabpanel"
        aria-labelledby={`service-tab-${service.slug}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="service-stage-media">
          <Image
            src={service.image}
            fill
            sizes="(max-width: 900px) 90vw, 42vw"
            alt={`${service.title} specialists working with an enterprise SAP team`}
          />
          <span className="service-stage-index">
            {String(activeIndex + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
          </span>
          {service.isNew && <span className="service-stage-badge">Free assessment</span>}
        </div>

        <div className="service-stage-copy">
          <span className="service-stage-label">Focused SAP service</span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>

          <div className="service-stage-outcome">
            <span>Business outcome</span>
            <strong>{service.outcome}</strong>
          </div>

          <ul className="service-deliverables">
            {service.deliverables.map((deliverable) => (
              <li key={deliverable}>
                <Icon name="check" size={14} strokeWidth={2.5} />
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>

          <div className="service-stage-actions">
            <Link href={service.href} className="service-stage-cta">
              Explore this service
              <Icon name="arrow" size={14} strokeWidth={2.4} />
            </Link>
            <span>{service.chips.slice(0, 3).join(" · ")}</span>
          </div>
        </div>
      </article>

      <div className="service-swipe-controls" aria-label="Browse services">
        <button type="button" onClick={() => moveService(activeIndex - 1)}>
          Previous
        </button>
        <span>
          Swipe to browse · {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(SERVICES.length).padStart(2, "0")}
        </span>
        <button type="button" onClick={() => moveService(activeIndex + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}
