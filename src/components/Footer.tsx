import Link from "next/link";
import { FOOTER_COLS, SITE } from "@/data/site";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    path: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "Twitter/X",
    href: "https://x.com",
    path: (
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    path: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="ft-top">
        <div className="ft-brand">
          <div className="ft-logo">
            <span className="ftlm">UN</span>
            {SITE.name}
          </div>
          <p>{SITE.tagline}</p>
          <div className="ft-soc">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                className="fsoc"
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  {s.path}
                </svg>
              </a>
            ))}
          </div>
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
        <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
        <div className="ft-bgs">
          <span className="ftbg">SAP IS-U</span>
          <span className="ftbg">ECC to S/4HANA</span>
          <span className="ftbg">POWERON</span>
        </div>
      </div>
    </footer>
  );
}
