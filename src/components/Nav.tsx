"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Icon from "./Icon";
import LogoMark from "./LogoMark";
import { NAV_LINKS, SITE } from "@/data/site";

function isActiveRoute(pathname: string, href: string) {
  const normalize = (value: string) => value === "/" ? value : value.replace(/\/$/, "");
  return href.startsWith("/") && normalize(pathname) === normalize(href);
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <nav className="nav" aria-label="Main navigation">
        <Link href="/" className="logo">
          <span className="lmark" aria-hidden="true">
            <LogoMark />
          </span>
          <span className="logo-copy">
            <strong>{SITE.name}</strong>
            <small>Utilities + SAP</small>
          </span>
        </Link>
        <ul className="nl">
          {NAV_LINKS.map((l) => {
            const active = isActiveRoute(pathname, l.href);
            return (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className={active ? "act" : undefined}
                  aria-current={active ? "page" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="nr">
          <Link href="/#contact" className="btn-p">
            Get Consultation
            <Icon name="arrow" size={14} strokeWidth={2.4} />
          </Link>
          <button
            className="nav-burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={18} />
          </button>
        </div>
      </nav>
      <nav
        id="mobile-menu"
        className={`nav-mobile${open ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((l) => {
          const active = isActiveRoute(pathname, l.href);
          return (
            <Link
              key={l.label}
              href={l.href}
              className={active ? "act" : undefined}
              aria-current={active ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          );
        })}
        <Link className="nav-mobile-cta" href="/#contact" onClick={() => setOpen(false)}>
          Get Consultation
          <Icon name="arrow" size={14} strokeWidth={2.4} />
        </Link>
      </nav>
    </>
  );
}
