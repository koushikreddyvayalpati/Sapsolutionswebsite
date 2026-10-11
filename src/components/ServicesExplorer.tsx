"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

const categories = [
  {
    title: "SAP & Enterprise Transformation",
    headline: "Modernize the core of your utility.",
    body: "We help utilities transform enterprise platforms and business processes while maximizing the value of their SAP investments. Our capabilities span transformation strategy, implementation, modernization, integration and application support.",
    capabilities: ["SAP S/4HANA", "SAP Utilities", "Customer & Billing", "SAP EAM", "SAP BTP", "Integration", "Data Migration", "Testing", "Application Management"],
    image: "/sap-s4hana-upgrade-planning.png",
  },
  {
    title: "Customer & Billing Transformation",
    headline: "Create connected, intelligent customer experiences.",
    body: "Modern utility customers expect simplicity, transparency and personalized digital experiences. We help utilities modernize customer information, billing and engagement platforms while connecting customer journeys across channels and enterprise systems.",
    capabilities: ["CIS Transformation", "Billing", "Customer Service", "Digital Self-Service", "CRM", "Meter-to-Cash", "Customer Analytics", "AI-enabled Customer Operations"],
    image: "/sap-utilities-health-assessment.png",
  },
  {
    title: "Asset & Work Management",
    headline: "Connect assets, people and operations.",
    body: "We help utilities improve the way critical infrastructure is managed throughout its lifecycle, from planning and maintenance to field execution and performance optimization.",
    capabilities: ["Enterprise Asset Management", "Work Management", "Mobile Workforce", "Field Service", "GIS Integration", "Predictive Maintenance", "Asset Analytics"],
    image: "/sap-managed-ops.png",
  },
  {
    title: "Cloud & Integration",
    headline: "Build a connected utility technology ecosystem.",
    body: "Utility technology landscapes are increasingly distributed across enterprise applications, cloud platforms and specialized operational systems. We help organizations modernize architecture and securely connect applications, data and business processes across the enterprise.",
    capabilities: ["Cloud Strategy", "Application Modernization", "SAP BTP", "APIs", "Enterprise Integration", "Integration Architecture", "Platform Modernization"],
    image: "/sap-cloud-team.png",
  },
  {
    title: "Digital Utility Transformation",
    headline: "From transformation strategy to execution.",
    body: "Technology transformation succeeds when business strategy, processes, people and platforms move together. We work with utility organizations to define transformation roadmaps, modernize operating models and execute complex technology programs.",
    capabilities: ["Digital Strategy", "Technology Roadmaps", "Business Process Transformation", "Enterprise Architecture", "Program Management", "Change Management", "Transformation Governance"],
    image: "/sap-programme-governance-review.png",
  },
  {
    title: "Managed Services",
    headline: "Optimize today. Prepare for tomorrow.",
    body: "Transformation doesn't end at go-live. We help utilities operate, enhance and continuously improve critical enterprise applications and technology platforms.",
    capabilities: ["Application Management", "Production Support", "Enhancements", "Release Management", "Performance Optimization", "Integration Support", "Continuous Improvement"],
    image: "/sap-ams-operations-support.png",
  },
] as const;

export default function ServicesExplorer() {
  const [active, setActive] = useState(0);
  const service = categories[active];

  return (
    <section className="editorial-section service-explorer" id="capabilities" aria-labelledby="service-explorer-title">
      <div className="editorial-section-head">
        <span className="stag">Our services</span>
        <h2 id="service-explorer-title">Expertise across the utility enterprise.</h2>
        <p>Select a service to explore how we can help.</p>
      </div>
      <div className="service-explorer-grid">
        <div className="service-explorer-list" aria-label="Service categories">
          {categories.map((category, index) => (
            <button key={category.title} type="button" className={active === index ? "active" : ""} onClick={() => setActive(index)} aria-pressed={active === index}>
              <span className="service-explorer-number">{String(index + 1).padStart(2, "0")}</span>
              <span>{category.title}</span>
              <Icon name="arrow" size={15} strokeWidth={2.5} />
            </button>
          ))}
        </div>
        <article className="service-explorer-detail" aria-live="polite">
          <div className="service-explorer-photo">
            <Image src={service.image} fill sizes="(max-width: 900px) 100vw, 56vw" alt={`${service.title} work in a utility setting`} />
          </div>
          <div className="service-explorer-content">
            <span className="editorial-index">{String(active + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}</span>
            <h3>{service.headline}</h3>
            <p>{service.body}</p>
            <h4>Key capabilities</h4>
            <ul className="editorial-tags">
              {service.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
            </ul>
            <Link href="/#contact" className="editorial-text-link">Discuss this service <Icon name="arrow" size={14} strokeWidth={2.5} /></Link>
          </div>
        </article>
      </div>
    </section>
  );
}
