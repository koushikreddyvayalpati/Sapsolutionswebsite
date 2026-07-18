import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import Reveal from "./Reveal";
import ServiceShowcase from "./ServiceShowcase";
import {
  CASE_STUDIES,
  INDUSTRIES,
  TRUST_BADGES,
  WHY_POINTS,
} from "@/data/site";

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
  title = "Five ways to make SAP delivery more controlled.",
  sub = "Upgrade, support, governance, BTP + AI and utilities health assessment presented around decisions, risk and operational continuity.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="sec" id="services">
      <SectionHeader
        tag="Services"
        title={title}
        sub={sub}
      />
      <Reveal className="service-showcase-wrap">
        <ServiceShowcase />
      </Reveal>
    </section>
  );
}

/* ── Visual proof ── */
export function VisualProof() {
  return (
    <section className="visual-proof" aria-labelledby="visual-proof-title">
      <div className="vp-copy">
        <span className="stag">Free POWERON Health Check</span>
        <h2 id="visual-proof-title">
          Find <span className="no-wrap">SAP IS-U</span> risk before it reaches customers.
        </h2>
        <p>
          POWERON reviews meter-to-cash, billing, interfaces, custom code and support dependencies.
          You receive a prioritized view of stability risks, quick wins and upgrade-readiness work.
        </p>
        <div className="vp-points">
          <span>Meter-to-cash integrity</span>
          <span>Processing and custom-code risk</span>
          <span>Upgrade readiness</span>
        </div>
        <Link href="/services#poweron" className="vp-link">
          Request the free health check
          <Icon name="arrow" size={14} strokeWidth={2.5} />
        </Link>
      </div>
      <div className="vp-images">
        <figure className="vp-img primary">
          <Image
            src="/sap-utilities-health-assessment.png"
            width={1672}
            height={941}
            alt="Utilities operations team reviewing SAP system health and service performance"
            sizes="(max-width: 900px) 92vw, 48vw"
          />
          <figcaption>SAP IS-U operational health review</figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ── Why Us ── */
const ENGAGEMENT_STEPS = [
  {
    number: "01",
    title: "Understand the landscape",
    body: "Start with the current SAP architecture, operating process, delivery constraints and business risk.",
  },
  {
    number: "02",
    title: "Prioritize what matters",
    body: "Separate urgent stability issues, quick wins and structural changes into a clear sequence.",
  },
  {
    number: "03",
    title: "Deliver with control",
    body: "Use visible scope, decisions, ownership and outcomes from assessment through support.",
  },
] as const;

export function WhyUs() {
  return (
    <section className="sec alt" id="why-us">
      <SectionHeader
        tag="Delivery"
        title="Utilities context, with SAP discipline."
        sub="A specialist team for the work that protects continuity: assessment, governance, transformation and application support."
      />
      <div className="why-grid">
        <Reveal variant="left" className="why-pts">
          <figure className="why-photo">
            <Image
              src="/sap-utilities-transformation-hero.png"
              width={1672}
              height={941}
              alt="SAP consultants prioritizing enterprise transformation roadmap in a workshop"
              sizes="(max-width: 900px) 92vw, 42vw"
            />
            <figcaption>Utilities and SAP specialists working as one team</figcaption>
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
          <p className="wp-ttl">How We Engage</p>
          <div className="engagement-steps">
            {ENGAGEMENT_STEPS.map((step) => (
              <div className="engagement-step" key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="engagement-scope" aria-label="UtilityNexus.ai service lifecycle">
            <span>Assess</span>
            <span>Govern</span>
            <span>Upgrade</span>
            <span>Support</span>
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
export function CaseStudies({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section className="sec alt" id="cases">
      {showHeader && (
        <SectionHeader
          tag="Engagement Patterns"
          title="What the work looks like in practice"
          sub="Representative delivery patterns showing the scope, decisions and outputs of each engagement. These are not attributed client case studies."
        />
      )}
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
