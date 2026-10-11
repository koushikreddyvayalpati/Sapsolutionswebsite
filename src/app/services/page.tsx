import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import EditorialHero from "@/components/EditorialHero";
import ServicesExplorer from "@/components/ServicesExplorer";
import { PowerOnAssessment } from "@/components/ServiceDetails";
import "../editorial.css";

export const metadata: Metadata = {
  title: "Utility Technology Services | UtilityNexus.ai",
  description:
    "Explore utility-focused SAP transformation, customer and billing, asset and work management, cloud integration, digital transformation and managed services.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main id="main" className="editorial-page services-page">
        <EditorialHero
          eyebrow="Services"
          title="Transforming utilities with technology and expertise."
          description="From strategy and implementation to integration and support, we help utilities modernize SAP, cloud, data, AI and enterprise systems with industry knowledge and practical delivery."
          image="/services-transformation-hero.png"
          alt="Utility consultants and operations leaders reviewing a transformation roadmap"
          caption="Strategy · implementation · integration · operations"
          action={{ label: "Explore our services", href: "#capabilities" }}
        />
        <ServicesExplorer />
        <PowerOnAssessment />
      </main>
      <Footer />
    </>
  );
}
