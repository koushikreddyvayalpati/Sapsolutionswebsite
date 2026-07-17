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
            Utilities-focused SAP delivery partner
          </p>
          <h1>
            Make SAP work better for
            <span className="h1-accent"> utilities.</span>
          </h1>
          <p className="hero-sub">
            Upgrade ECC to S/4HANA, strengthen application support, govern implementation scope
            and uncover SAP IS-U risks before they affect customers or operations.
          </p>
          <div className="hero-btns">
            <Link href="/services#poweron" className="hbtn-p">
              Get a Free POWERON Health Check
              <Icon name="arrow" size={14} strokeWidth={2.5} />
            </Link>
            <Link href="/services" className="hbtn-s">
              Explore Services
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
            <div className="db-v">4</div>
            <div className="db-l">Focused SAP services</div>
          </div>
          <div className="hero-glass-note">
            <span className="dash-dot" />
            SAP IS-U health and delivery governance
          </div>
        </div>
      </div>
    </section>
  );
}
