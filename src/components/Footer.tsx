import Link from "next/link";
import { FOOTER_COLS, SITE } from "@/data/site";
import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="ft-top">
        <div className="ft-brand">
          <div className="ft-logo">
            <span className="ftlm">
              <LogoMark />
            </span>
            {SITE.name}
          </div>
          <p>{SITE.tagline}</p>
          <a className="ft-email" href="mailto:hello@utilitynexus.ai">
            hello@utilitynexus.ai
          </a>
        </div>
        {FOOTER_COLS.map((col) => (
          <div className="ft-col" key={col.title}>
            <h5>{col.title}</h5>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="ft-bot">
        <span>
          © {new Date().getFullYear()} {SITE.name}. Independent SAP services consultancy.
        </span>
        <div className="ft-bgs">
          <span className="ftbg">SAP IS-U</span>
          <span className="ftbg">ECC to S/4HANA</span>
          <span className="ftbg">BTP + AI</span>
          <span className="ftbg">POWERON</span>
        </div>
      </div>
    </footer>
  );
}
