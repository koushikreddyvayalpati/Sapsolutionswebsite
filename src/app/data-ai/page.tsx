import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import EditorialHero from "@/components/EditorialHero";
import Icon from "@/components/Icon";
import "../editorial.css";

export const metadata: Metadata = {
  title: "Data & AI for Utilities | UtilityNexus.ai",
  description: "Utility data strategy, analytics, generative AI, predictive analytics and AI governance grounded in practical operational value.",
};

const capabilities = ["Data Strategy", "Data Platforms", "Analytics", "Generative AI", "AI Agents", "Predictive Analytics", "Intelligent Automation", "AI Governance"];

const applications = [
  {
    eyebrow: "Generative AI",
    title: "AI-powered customer service assistant",
    body: "Enable customer service teams to answer questions about bills, outages, service requests and utility programs using a generative AI assistant connected to approved enterprise knowledge and customer information.",
    image: "/sap-btp-ai-agents-advisory.png",
    alt: "Utility specialists exploring AI-assisted customer service workflows",
  },
  {
    eyebrow: "Analytics",
    title: "Unified utility data and analytics platform",
    body: "Bring together customer, billing, meter, asset and operational data so business leaders can use trusted dashboards to understand revenue, consumption, customer behavior and operational performance.",
    image: "/sap-delivery-outcomes-review.png",
    alt: "Leaders reviewing utility analytics and operational dashboards",
  },
  {
    eyebrow: "Predictive analytics",
    title: "Prioritize maintenance before failures occur",
    body: "Analyze historical maintenance, asset condition and operational data to identify equipment at higher risk of failure and help utilities prioritize work before service is disrupted.",
    image: "/sap-managed-ops.png",
    alt: "Utility operations team reviewing asset maintenance priorities",
  },
] as const;

export default function DataAiPage() {
  return (
    <>
      <Nav />
      <main id="main" className="editorial-page">
        <EditorialHero eyebrow="Data & AI" title="Turn utility data into intelligence." description="We connect customer, meter, asset and operational data to trusted analytics and practical AI. The result is clearer decisions, better service and more productive teams." image="/data-ai-hero.png" alt="Utility data specialists studying operational analytics in a control center" caption="Trusted data · practical AI · measurable value" action={{ label: "Explore applications", href: "#applications" }} />
        <section className="editorial-section editorial-capabilities" aria-labelledby="data-capabilities-title">
          <div className="editorial-section-head"><span className="stag">What we do</span><h2 id="data-capabilities-title">A foundation for the intelligent utility.</h2><p>We connect data strategy, platforms and governance to use cases with a clear business purpose.</p></div>
          <ul className="editorial-tags editorial-tags-large">{capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section className="editorial-section editorial-applications" id="applications" aria-labelledby="applications-title">
          <div className="editorial-section-head"><span className="stag">Practical applications</span><h2 id="applications-title">Where data and AI can help.</h2></div>
          <div className="editorial-card-grid">{applications.map((item) => <article className="editorial-card" key={item.title}><div className="editorial-card-photo"><Image src={item.image} fill sizes="(max-width: 900px) 100vw, 30vw" alt={item.alt} /></div><div className="editorial-card-body"><span className="stag">{item.eyebrow}</span><h3>{item.title}</h3><p>{item.body}</p></div></article>)}</div>
        </section>
        <section className="editorial-band" aria-labelledby="governance-title"><div><span className="stag">AI strategy & governance</span><h2 id="governance-title">Move from experimentation to responsible adoption.</h2><p>We help utilities identify high-value AI opportunities while establishing governance for data privacy, security, responsible AI, model oversight and regulatory requirements.</p></div><Link href="/#contact">Discuss your data and AI priorities <Icon name="arrow" size={15} strokeWidth={2.5} /></Link></section>
      </main>
      <Footer />
    </>
  );
}
