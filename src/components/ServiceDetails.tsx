import Image from "next/image";
import Link from "next/link";
import { POWERON, SERVICES } from "@/data/site";
import Icon from "./Icon";
import Reveal from "./Reveal";

const DELIVERY_SERVICES = SERVICES.filter((service) => service.slug !== "poweron");

export function ServiceDetails() {
  return (
    <section className="service-details" aria-labelledby="service-details-title">
      <div className="service-details-head">
        <div className="service-details-copy">
          <span className="stag">Core Services</span>
          <h2 id="service-details-title">Choose by SAP priority.</h2>
          <p>
            Select the situation closest to your current SAP delivery problem, then review the
            scope, outputs and next step.
          </p>
        </div>
        <nav className="service-jump service-details-jump" aria-label="Jump to a service">
          {DELIVERY_SERVICES.map((service) => (
            <Link href={`#${service.slug}`} key={service.slug}>
              {service.slug === "sap-upgrades"
                ? "ECC to S/4HANA"
                : service.slug === "btp-ai-agents"
                  ? "BTP + AI Agents"
                  : service.title}
            </Link>
          ))}
          <Link href="#poweron">POWERON Health Check</Link>
        </nav>
      </div>

      <div className="service-detail-list">
        {DELIVERY_SERVICES.map((service, index) => (
          <Reveal as="article" className="service-detail" id={service.slug} key={service.slug}>
            <div className="service-detail-media">
              <Image
                src={service.image}
                width={1672}
                height={941}
                alt={`${service.title} planning and delivery`}
                sizes="(max-width: 860px) 92vw, 40vw"
              />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="service-detail-copy">
              <p className="service-detail-label">UtilityNexus.ai service</p>
              <h3>{service.title}</h3>
              <p className="service-detail-description">{service.description}</p>
              <ul className="service-deliverables">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable}>
                    <Icon name="check" size={15} strokeWidth={2.5} />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
              <div className="service-outcome">
                <span>What this gives you</span>
                <p>{service.outcome}</p>
              </div>
              <Link href={service.href} className="service-detail-link">
                View related SAP solution
                <Icon name="arrow" size={14} strokeWidth={2.5} />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function PowerOnAssessment() {
  return (
    <section className="poweron" id="poweron" aria-labelledby="poweron-title">
      <Reveal variant="left" className="poweron-copy">
        <span className="poweron-kicker">{POWERON.eyebrow}</span>
        <p className="poweron-name">{POWERON.name}</p>
        <h2 id="poweron-title">{POWERON.title}</h2>
        <p className="poweron-description">{POWERON.description}</p>
        <ul className="poweron-areas" aria-label="POWERON assessment areas">
          {POWERON.areas.map((area) => (
            <li key={area}>
              <Icon name="check" size={15} strokeWidth={2.5} />
              <span>{area}</span>
            </li>
          ))}
        </ul>
        <div className="poweron-actions">
          <Link href="/#contact" className="hbtn-p">
            Request the Free Health Check
            <Icon name="arrow" size={14} strokeWidth={2.5} />
          </Link>
          <span>No generic scorecard. You receive prioritized findings and next actions.</span>
        </div>
      </Reveal>

      <Reveal variant="right" className="poweron-visual">
        <Image
          src="/sap-utilities-health-assessment.png"
          width={1672}
          height={941}
          alt="Utilities operations team reviewing SAP IS-U meter-to-cash performance"
          sizes="(max-width: 860px) 92vw, 42vw"
        />
        <div className="poweron-panel">
          <span>Assessment output</span>
          <strong>Stabilize now. Modernize with confidence.</strong>
          <div>
            <p>01</p>
            <span>Risks ranked by business impact</span>
          </div>
          <div>
            <p>02</p>
            <span>Quick wins separated from structural change</span>
          </div>
          <div>
            <p>03</p>
            <span>Practical roadmap for support and upgrades</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
