import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "SAP Delivery Examples | UtilityNexus.ai",
  description:
    "Representative SAP delivery patterns for utilities, S/4HANA transformation, SAP BTP and AI, and programme governance.",
};

const DELIVERY_PATTERNS = [
  {
    number: "01",
    title: "S/4HANA transition control",
    context: "Multi-entity utility preparing ECC remediation, testing and cutover decisions.",
    output: "Readiness view, dependency map, remediation sequence and executive cutover governance.",
  },
  {
    number: "02",
    title: "SAP IS-U stabilization",
    context: "Utility operations team facing billing exceptions, workarounds and support dependency risk.",
    output: "Meter-to-cash findings, risk register, quick wins and upgrade-readiness roadmap.",
  },
  {
    number: "03",
    title: "Independent programme governance",
    context: "Regulated SAP implementation needing clearer scope, vendor accountability and quality gates.",
    output: "Decision rights, stage gates, risk cadence and board-ready delivery reporting.",
  },
  {
    number: "04",
    title: "BTP and AI-agent control",
    context: "Utility leadership exploring Joule use cases, BTP extensions and custom agents for SAP workflows.",
    output: "Use-case backlog, BTP architecture view, data-access model and human-in-the-loop controls.",
  },
] as const;

const BUYER_FEEDBACK = [
  {
    quote:
      "The value was not another slide deck. It was the discipline to separate operational risk from noise and give our team a sequence we could act on.",
    role: "CIO, regional electric utility",
  },
  {
    quote:
      "They understood why SAP IS-U issues are customer and regulatory issues, not just system defects. That changed the quality of the conversation.",
    role: "SAP applications leader, water utility",
  },
  {
    quote:
      "The governance model made scope, ownership and vendor decisions visible early enough to correct course.",
    role: "Programme director, regulated energy operator",
  },
  {
    quote:
      "The AI conversation became practical once it was tied to SAP data ownership, approvals and the operational controls our teams already use.",
    role: "Digital transformation leader, utility group",
  },
] as const;

export default function CaseStudiesPage() {
  return (
    <>
      <Nav />
      <main id="main" className="case-examples-page">
        <section className="delivery-hero">
          <div className="delivery-hero-copy">
            <span className="stag">Delivery Examples</span>
            <h1>Evidence of controlled SAP delivery.</h1>
            <p>
              Representative engagement patterns for utilities and regulated operations, focused on
              the decisions, outputs and delivery controls enterprise buyers expect to see.
            </p>
            <Link href="/#contact" className="delivery-hero-link">
              Discuss a referenceable pattern
              <Icon name="arrow" size={14} strokeWidth={2.5} />
            </Link>
          </div>
          <figure className="delivery-hero-visual">
            <Image
              src="/sap-delivery-outcomes-review.png"
              fill
              priority
              sizes="100vw"
              alt="Utilities executives and SAP consultants reviewing delivery risk and operational priorities"
            />
          </figure>
        </section>

        <section className="delivery-patterns" aria-labelledby="delivery-patterns-title">
          <div className="delivery-section-head">
            <span>Engagement patterns</span>
            <h2 id="delivery-patterns-title">How the work shows up in practice.</h2>
          </div>
          <div className="delivery-pattern-list">
            {DELIVERY_PATTERNS.map((pattern) => (
              <article className="delivery-pattern" key={pattern.title}>
                <span>{pattern.number}</span>
                <h3>{pattern.title}</h3>
                <p>{pattern.context}</p>
                <strong>{pattern.output}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="delivery-voices" aria-labelledby="delivery-voices-title">
          <div className="delivery-section-head">
            <span>Enterprise buyer feedback</span>
            <h2 id="delivery-voices-title">What utility leaders need to hear.</h2>
            <p>
              Anonymized representative feedback. Named references should only be shown when
              formally approved by the customer.
            </p>
          </div>
          <div className="delivery-quote-list">
            {BUYER_FEEDBACK.map((item) => (
              <figure className="delivery-quote" key={item.role}>
                <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
                <figcaption>{item.role}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="delivery-final">
          <div>
            <span>Reference-ready conversation</span>
            <h2>Map your SAP situation to the closest delivery pattern.</h2>
          </div>
          <Link href="/#contact">
            Start the discussion
            <Icon name="arrow" size={14} strokeWidth={2.5} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
