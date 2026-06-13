import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import Reveal from "./Reveal";
import {
  CASE_STUDIES,
  CLIENTS,
  INDUSTRIES,
  SERVICES,
  TEAM,
  TESTIMONIALS,
  TRUST_BADGES,
  WHY_KPIS,
  WHY_POINTS,
} from "@/data/site";

const SERVICE_IMAGES = [
  "/enterprise-sap-hero.png",
  "/solutions-assessment.png",
  "/case-utilities.png",
  "/sap-managed-ops.png",
  "/solutions-hero.png",
  "/case-energy.png",
  "/sap-cloud-team.png",
  "/case-utilities.png",
  "/case-ai-manufacturing.png",
];

/* ── Trust band ── */
export function TrustBand() {
  return (
    <div className="trust" role="list" aria-label="Certifications and credentials">
      {TRUST_BADGES.map((b) => (
        <div className="tb" role="listitem" key={b.label}>
          <Icon name={b.icon} size={13} />
          {b.label}
        </div>
      ))}
    </div>
  );
}

/* ── Client marquee ── */
export function Marquee() {
  return (
    <div className="mq-sec">
      <p className="mq-lbl">Trusted by world-class enterprises globally</p>
      <div className="mq-track">
        <div className="mq-inner">
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <span key={`${c}-${i}`} aria-hidden={i >= CLIENTS.length}>
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Section header ── */
export function SectionHeader({
  tag,
  title,
  sub,
}: {
  tag: string;
  title: string;
  sub?: string;
}) {
  return (
    <Reveal className="shdr">
      <span className="stag">{tag}</span>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </Reveal>
  );
}

/* ── Services ── */
export function Services({
  title = "Browse SAP Services",
  sub = "Swipe through focused service cards. Each one opens the matching solution detail without forcing a long page scan.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="sec" id="services">
      <SectionHeader
        tag="Our Services"
        title={title}
        sub={sub}
      />
      <Reveal className="svc-wrap">
        <div className="svc-rail" aria-label="Horizontally scrollable SAP service cards">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              href={`/solutions#${s.slug}`}
              className={`svc-card${s.isNew ? " svc-ai" : ""}`}
            >
              <span className="svc-img">
                <Image
                  src={SERVICE_IMAGES[i % SERVICE_IMAGES.length]}
                  width={1672}
                  height={941}
                  alt={`${s.title} delivery preview`}
                  sizes="(max-width: 900px) 82vw, 340px"
                />
              </span>
              <span className="svc-card-top">
                <span className="svc-n">{String(i + 1).padStart(2, "0")}</span>
                {s.isNew && <span className="ai-new">New</span>}
              </span>
              <span className="svc-mid">
                <h4>{s.title}</h4>
                <p>{s.description}</p>
              </span>
              <span className="svc-chips">
                {s.chips.slice(0, 4).map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </span>
              <span className="svc-arr" aria-hidden="true">
                <Icon name="arrow" size={14} strokeWidth={2.5} />
              </span>
            </Link>
          ))}
        </div>
        <div className="rail-actions">
          <Link href="/services" className="text-link">
            View service page <Icon name="arrow" size={13} strokeWidth={2.5} />
          </Link>
          <span>Scroll sideways to compare services</span>
        </div>
      </Reveal>
    </section>
  );
}

/* ── Visual proof ── */
export function VisualProof() {
  return (
    <section className="visual-proof" aria-labelledby="visual-proof-title">
      <div className="vp-copy">
        <span className="stag">Delivery Proof</span>
        <h2 id="visual-proof-title">Real SAP delivery teams, not generic consulting decks.</h2>
        <p>
          We combine architecture, migration execution and managed operations in one delivery
          motion, so stakeholders see progress, risk and value in the same operating rhythm.
        </p>
        <div className="vp-points">
          <span>Landscape assessment</span>
          <span>Migration governance</span>
          <span>24/7 operations</span>
        </div>
      </div>
      <div className="vp-images">
        <figure className="vp-img primary">
          <Image
            src="/sap-cloud-team.png"
            width={1672}
            height={941}
            alt="SAP consultants reviewing cloud migration architecture in a modern office"
            sizes="(max-width: 900px) 92vw, 48vw"
          />
          <figcaption>SAP migration planning</figcaption>
        </figure>
        <figure className="vp-img secondary">
          <Image
            src="/sap-managed-ops.png"
            width={1672}
            height={941}
            alt="Enterprise support team monitoring SAP managed services and analytics"
            sizes="(max-width: 900px) 72vw, 24vw"
          />
          <figcaption>Managed operations</figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ── Why Us ── */
export function WhyUs({ metrics }: { metrics: { label: string; value: number }[] }) {
  return (
    <section className="sec alt" id="why-us">
      <SectionHeader
        tag="Why Choose Us"
        title="Built exclusively for enterprise SAP"
        sub="SAP is all we do. That singular focus makes us the most capable SAP partner your enterprise will work with."
      />
      <div className="why-grid">
        <Reveal variant="left" className="why-pts">
          <figure className="why-photo">
            <Image
              src="/solutions-assessment.png"
              width={1672}
              height={941}
              alt="SAP consultants prioritizing enterprise transformation roadmap in a workshop"
              sizes="(max-width: 900px) 92vw, 42vw"
            />
            <figcaption>Senior SAP architects on every engagement</figcaption>
          </figure>
          <div className="why-list">
            {WHY_POINTS.map((p) => (
              <div className="wpt" key={p.title}>
                <span className="wpt-ico">
                  <Icon name={p.icon} size={17} />
                </span>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal variant="right" className="why-panel">
          <p className="wp-ttl">SAP Delivery Performance</p>
          {metrics.map((m) => (
            <div className="wp-m" key={m.label}>
              <div className="wp-mh">
                <span>{m.label}</span>
                <span className="wp-pct">{m.value}%</span>
              </div>
              <div
                className="wp-track"
                role="progressbar"
                aria-valuenow={m.value}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={m.label}
              >
                <div className="wp-fill" style={{ "--w": `${m.value}%` } as React.CSSProperties} />
              </div>
            </div>
          ))}
          <div className="wp-kpis">
            {WHY_KPIS.map((k) => (
              <div className="wpk" key={k.label}>
                <div className="wpkv">{k.value}</div>
                <div className="wpkl">{k.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Industries ── */
export function Industries() {
  return (
    <section className="sec" id="industries">
      <SectionHeader
        tag="Industries We Serve"
        title="Deep Vertical Expertise"
        sub="Specialised SAP solutions for the industries that power the global economy."
      />
      <div className="ind-grid">
        {INDUSTRIES.map((ind) => (
          <Reveal key={ind.title} className="ind-c">
            <span className="ind-ico">
              <Icon name={ind.icon} size={22} strokeWidth={1.8} />
            </span>
            <h4>{ind.title}</h4>
            <p>{ind.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Case studies ── */
export function CaseStudies() {
  return (
    <section className="sec alt" id="cases">
      <SectionHeader
        tag="Case Studies"
        title="Proven Results at Enterprise Scale"
        sub="Real transformations delivered for the world's most demanding organisations."
      />
      <div className="cc-grid">
        {CASE_STUDIES.map((cs) => (
          <Reveal key={cs.title} as="article" className="cc-c">
            <div className={`cc-hd ${cs.theme}`}>
              <Image
                src={cs.image}
                width={1672}
                height={941}
                alt={`${cs.title} delivery environment`}
                sizes="(max-width: 900px) 92vw, 32vw"
              />
              <span className="cc-tag">{cs.tag}</span>
            </div>
            <div className="cc-bd">
              <h3>{cs.title}</h3>
              <p>{cs.body}</p>
              <div className="cc-mets">
                {cs.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="ccm-v">{m.value}</div>
                    <div className="ccm-l">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Testimonials ── */
export function Testimonials() {
  return (
    <section className="sec" id="testi">
      <SectionHeader
        tag="Client Testimonials"
        title="What Enterprise Leaders Say"
        sub="Trusted by CIOs, CTOs and business leaders across the globe."
      />
      <div className="tst-grid">
        {TESTIMONIALS.map((t) => (
          <Reveal key={t.name} as="figure" className="tst-c">
            <div className="stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="tst-a">
              <span className="tst-av" aria-hidden="true">
                {t.initials}
              </span>
              <span>
                <span className="tst-n" style={{ display: "block" }}>
                  {t.name}
                </span>
                <span className="tst-r">{t.role}</span>
              </span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Team ── */
export function Team() {
  return (
    <section className="sec alt" id="team">
      <SectionHeader
        tag="Our Team"
        title="SAP Excellence, Human-Led"
        sub="50+ certified SAP consultants, architects and AI engineers behind every transformation."
      />
      <div className="tm-grid">
        {TEAM.map((m) => (
          <Reveal key={m.name} className="tm-c">
            <div className={`tm-bg ${m.theme}`} aria-hidden="true">
              {m.initials}
            </div>
            <div className="tm-inf">
              <h4>{m.name}</h4>
              <p>{m.role}</p>
              <div className="tm-tags">
                {m.tags.map((t) => (
                  <span key={t} className="ttag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
