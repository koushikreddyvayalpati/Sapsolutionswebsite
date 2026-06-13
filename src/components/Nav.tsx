"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Icon from "./Icon";
import { NAV_LINKS, SITE } from "@/data/site";

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
            <span>SG</span>
          </span>
          <span className="logo-copy">
            <strong>{SITE.name}</strong>
            <small>Enterprise SAP Partner</small>
          </span>
        </Link>
        <ul className="nl">
          {NAV_LINKS.map((l) => {
            const active = l.href.startsWith("/") && pathname === l.href;
            return (
              <li key={l.label}>
                <Link href={l.href} className={active ? "act" : undefined}>
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="nr">
          <Link href="/case-studies" className="btn-o">
            Case Studies
          </Link>
          <Link href="/#contact" className="btn-p">
            Get Consultation
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
      <div id="mobile-menu" className={`nav-mobile${open ? " open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <Link key={l.label} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="/#contact" onClick={() => setOpen(false)}>
          Get Consultation
        </Link>
      </div>
    </>
  );
}
