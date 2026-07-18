import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import HashTargetScroll from "@/components/HashTargetScroll";
import Icon from "@/components/Icon";
import Nav from "@/components/Nav";
import { SERVICES } from "@/data/site";
import "./solutions.css";

export const metadata: Metadata = {
  title: "SAP Solutions for Utilities | UtilityNexus.ai",
  description:
    "Choose between ECC to S/4HANA upgrades, SAP AMS, implementation governance, SAP BTP and AI agents, and the POWERON SAP utilities health assessment.",
};

const SOLUTION_IDS: Record<string, string> = {
  "sap-upgrades": "s6",
  "sap-ams": "s4",
  "implementation-governance": "s1",
  "btp-ai-agents": "btp-ai",
  poweron: "poweron",
};

const BUYER_GUIDE = [
  {
    title: "A transition is approaching",
    service: "ECC to S/4HANA upgrade",
    detail: "Use when readiness, remediation, testing and cutover need one controlled roadmap.",
  },
  {
    title: "Operations need stronger support",
    service: "SAP AMS and skilled resources",
    detail: "Use when incidents, enhancements or knowledge gaps exceed the current support model.",
  },
  {
    title: "Delivery is losing control",
    service: "Implementation governance",
    detail: "Use when scope, budget, decisions, vendors or quality gates need independent oversight.",
  },
  {
    title: "AI needs a governed path",
    service: "SAP BTP, Joule and agentic AI",
    detail: "Use when automation ideas need SAP data access, BTP architecture and business controls.",
  },
  {
    title: "SAP IS-U risk is unclear",
    service: "POWERON health assessment",
    detail: "Use when meter-to-cash issues, workarounds and upgrade dependencies need prioritization.",
  },
] as const;

export default function SolutionsPage() {
  return (
    <>
      <Nav />
      <HashTargetScroll />
      <main id="main" className="buyer-solutions-page">
        <header className="buyer-solutions-hero">
          <div className="buyer-hero-copy">
            <span>SAP services for utilities</span>
            <h1>Start with the business constraint, not a technology catalogue.</h1>
            <p>
              Five focused ways to reduce SAP delivery and operational risk. Choose the situation
              closest to yours, then review the scope and expected output.
            </p>
            <Link href="#solution-guide" className="buyer-hero-link">
              Find the right service
              <Icon name="arrow" size={14} strokeWidth={2.5} />
            </Link>
          </div>
          <figure className="buyer-hero-visual">
            <Image
              src="/sap-utilities-solution-selection.png"
              fill
              priority
              sizes="100vw"
              alt="Utilities executives and SAP consultants reviewing operational risk and service priorities"
            />
            <figcaption>
              <span>Decision-led SAP services</span>
              <span>Assess · prioritize · deliver</span>
            </figcaption>
          </figure>
        </header>

        <section className="buyer-guide" id="solution-guide" aria-labelledby="buyer-guide-title">
          <div className="buyer-section-heading">
            <span>Decision guide</span>
            <h2 id="buyer-guide-title">Which situation describes your SAP landscape?</h2>
          </div>
          <div className="buyer-guide-layout">
            <div className="buyer-guide-grid">
              {BUYER_GUIDE.map((item, index) => (
                <a href={`#${SOLUTION_IDS[SERVICES[index].slug]}`} key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <strong>{item.service}</strong>
                    <p>{item.detail}</p>
                  </div>
                  <Icon name="arrow" size={15} strokeWidth={2.4} />
                </a>
              ))}
            </div>
            <figure className="buyer-guide-visual">
              <Image
                src="/sap-delivery-outcomes-review.png"
                fill
                sizes="(max-width: 900px) 90vw, 46vw"
                alt="Utility executives and SAP consultants reviewing controlled delivery outcomes"
              />
              <figcaption>
                <span>Delivery control</span>
                <span>Choose the conversation by risk, scope and continuity.</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="buyer-service-list" aria-label="UtilityNexus.ai SAP services">
          {SERVICES.map((service, index) => (
            <article
              className="buyer-service"
              id={SOLUTION_IDS[service.slug]}
              key={service.slug}
            >
              <figure>
                <Image
                  src={service.image}
                  width={1672}
                  height={941}
                  alt={`${service.title} planning and delivery`}
                  sizes="(max-width: 900px) 90vw, 46vw"
                />
                <figcaption>{String(index + 1).padStart(2, "0")}</figcaption>
              </figure>
              <div className="buyer-service-copy">
                <span>{service.isNew ? "Free initial assessment" : "Focused SAP service"}</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <div className="buyer-outcome">
                  <small>Expected output</small>
                  <strong>{service.outcome}</strong>
                </div>
                <ul>
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable}>
                      <Icon name="check" size={15} strokeWidth={2.5} />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
                <Link href={service.slug === "poweron" ? "/services#poweron" : "/#contact"}>
                  {service.slug === "poweron" ? "Review POWERON scope" : "Discuss this service"}
                  <Icon name="arrow" size={14} strokeWidth={2.5} />
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="buyer-contact-band">
          <div>
            <span>Not sure where to begin?</span>
            <h2>Describe the current constraint and the decision you need to make.</h2>
            <p>We will use that context to identify the most relevant service conversation.</p>
          </div>
          <Link href="/#contact">
            Contact UtilityNexus.ai
            <Icon name="arrow" size={14} strokeWidth={2.5} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
