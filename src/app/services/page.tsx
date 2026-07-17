import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import Nav from "@/components/Nav";
import { PowerOnAssessment, ServiceDetails } from "@/components/ServiceDetails";

export const metadata: Metadata = {
  title: "SAP Services for Utilities | UtilityNexus.ai",
  description:
    "ECC to S/4HANA upgrades, SAP AMS resources, implementation governance and the free POWERON SAP IS-U health assessment.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main id="main" className="services-page">
        <section className="page-hero light-hero services-hero">
          <span className="stag">UtilityNexus.ai Services</span>
          <h1>Focused SAP services for utilities and regulated operations.</h1>
          <p>
            Move from ECC to S/4HANA, strengthen application support, govern implementation
            delivery or uncover SAP IS-U risks with POWERON.
          </p>
          <div className="services-hero-actions">
            <Link href="#poweron" className="hbtn-p">
              Get the Free POWERON Health Check
              <Icon name="arrow" size={14} strokeWidth={2.5} />
            </Link>
            <Link href="/#contact" className="hbtn-s">
              Talk to a Specialist
            </Link>
          </div>
          <nav className="service-jump" aria-label="Jump to a service">
            <Link href="#sap-upgrades">ECC to S/4HANA</Link>
            <Link href="#sap-ams">SAP AMS</Link>
            <Link href="#implementation-governance">Project Governance</Link>
            <Link href="#poweron">POWERON Health Check</Link>
          </nav>
        </section>
        <ServiceDetails />
        <PowerOnAssessment />
      </main>
      <Footer />
    </>
  );
}
