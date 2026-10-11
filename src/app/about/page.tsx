import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import EditorialHero from "@/components/EditorialHero";
import Icon from "@/components/Icon";
import "../editorial.css";

export const metadata: Metadata = {
  title: "About UtilityNexus.ai | Powering the Intelligent Utility",
  description: "Meet UtilityNexus, a technology consulting company helping utilities modernize through industry expertise, enterprise technology, data and AI.",
};

const differences = [
  { title: "Utilities focused", body: "Utilities are at the center of what we do. We understand the business processes, technology landscapes and operational challenges facing electric, gas and water utilities." },
  { title: "Business + technology", body: "We connect business objectives with technology strategy, architecture and execution so transformation addresses real operational needs." },
  { title: "SAP & enterprise expertise", body: "We help utilities modernize complex enterprise environments, from SAP transformation and integration to data, cloud and intelligent automation." },
  { title: "AI with purpose", body: "We focus on practical AI opportunities that can improve customer experience, employee productivity, decision-making and utility operations." },
  { title: "Built for partnership", body: "We believe successful consulting relationships are built on expertise, transparency, collaboration and measurable outcomes." },
] as const;

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main" className="editorial-page">
        <EditorialHero eyebrow="About UtilityNexus" title="Powering the intelligent utility." description="Utility expertise. Technology excellence. Intelligent transformation. We are a technology consulting company focused on helping utilities modernize, transform and operate smarter." image="/about-hero.png" alt="Utility technology consultants collaborating with energy infrastructure in view" caption="Utility expertise · technology excellence" action={{ label: "What makes us different", href: "#difference" }} />
        <section className="editorial-section about-intro" aria-labelledby="about-intro-title"><div><span className="stag">Who we are</span><h2 id="about-intro-title">Industry understanding meets technology delivery.</h2></div><div><p>We bring together deep utility industry knowledge with expertise across SAP, enterprise applications, cloud, data, integration and artificial intelligence. Our focus is on solving real business and operational challenges.</p><p>From customer and billing transformation to asset management, field operations, enterprise modernization and AI-enabled solutions, we help utilities connect people, processes, data and technology to create lasting business value.</p></div></section>
        <section className="about-mission" aria-labelledby="about-mission-title"><span className="stag">Our mission</span><h2 id="about-mission-title">Help utilities become more connected, intelligent and resilient through practical, business-focused technology solutions.</h2></section>
        <section className="editorial-section about-difference-section" id="difference" aria-labelledby="difference-title">
          <div className="editorial-section-head">
            <span className="stag">What makes us different</span>
            <h2 id="difference-title">Built around the realities of utility work.</h2>
          </div>
          <div className="about-difference-grid">
            {differences.map((item, index) => (
              <article className={index === 0 ? "about-difference-feature" : undefined} key={item.title}>
                {index === 0 && (
                  <div className="about-feature-media" aria-hidden="true">
                    <Image src="/sap-utilities-transformation-hero.png" alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
                  </div>
                )}
                <div className="about-difference-copy">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="editorial-band" aria-labelledby="vision-title"><div><span className="stag">Our vision</span><h2 id="vision-title">A trusted technology partner for a more digital, connected and intelligent utility future.</h2></div><Link href="/#contact">Start a conversation <Icon name="arrow" size={15} strokeWidth={2.5} /></Link></section>
      </main>
      <Footer />
    </>
  );
}
