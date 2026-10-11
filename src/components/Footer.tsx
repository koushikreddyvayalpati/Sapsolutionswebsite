import Link from "next/link";
import { FOOTER_COLS, SITE } from "@/data/site";
import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="ft-top">
        <div className="ft-brand">
          <Link className="ft-logo" href="/" aria-label="UtilityNexus.ai home">
            <span className="ftlm">
              <LogoMark />
            </span>
            {SITE.name}
          </Link>
          <p>{SITE.tagline}</p>
          <a className="ft-email" href="mailto:hello@utilitynexus.ai">
            hello@utilitynexus.ai
          </a>
        </div>
        {FOOTER_COLS.map((col) => (
          <nav className="ft-col" aria-label={`${col.title} links`} key={col.title}>
            <h2>{col.title}</h2>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="ft-bot">
        <span>
          © {new Date().getFullYear()} {SITE.name}. Independent SAP services consultancy.
        </span>
        <a className="ft-back-top" href="#">Back to top ↑</a>
      </div>
    </footer>
  );
}
