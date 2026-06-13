import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { HERO_TRUST } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="h-glow h-glow1" />
      <div className="h-glow h-glow2" />
      <div className="hero-inner">
        <div className="hero-lft">
          <p className="hero-eyebrow">
            <Icon name="shield" size={11} strokeWidth={2.5} />
            Enterprise SAP transformation partner
          </p>
          <h1>
            SAP modernization for
            <span className="h1-accent"> regulated</span> enterprises.
          </h1>
          <p className="hero-sub">
            We design, implement, migrate and operate SAP landscapes for regulated global teams,
            from S/4HANA and BTP to agentic AI workflows.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="hbtn-p">
              Book an SAP Assessment
              <Icon name="arrow" size={14} strokeWidth={2.5} />
            </a>
            <Link href="/solutions" className="hbtn-s">
              View Solutions
              <Icon name="arrow" size={14} strokeWidth={2.5} />
            </Link>
          </div>
          <div className="hero-trust">
            {HERO_TRUST.map((t, i) => (
              <span key={t} style={{ display: "contents" }}>
                {i > 0 && <span className="ht-sep" />}
                <span className="ht">
                  <Icon name="check" size={12} strokeWidth={2.5} />
                  {t}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="hero-rgt" aria-label="Enterprise SAP consulting team reviewing system dashboards">
          <div className="hero-photo-card">
            <Image
              src="/enterprise-sap-hero.png"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 42vw"
              alt="Enterprise consultants reviewing SAP transformation dashboards in a modern operations room"
            />
          </div>
          <div className="dash-badge">
            <div className="db-v">+38%</div>
            <div className="db-l">Cost reduction delivered</div>
          </div>
          <div className="hero-glass-note">
            <span className="dash-dot" />
            Live migration governance
          </div>
        </div>
      </div>
    </section>
  );
}
