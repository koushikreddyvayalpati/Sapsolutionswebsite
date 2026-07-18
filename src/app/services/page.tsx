import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import Nav from "@/components/Nav";
import { PowerOnAssessment, ServiceDetails } from "@/components/ServiceDetails";

export const metadata: Metadata = {
  title: "SAP Services for Utilities | UtilityNexus.ai",
  description:
    "ECC to S/4HANA upgrades, SAP AMS resources, implementation governance, SAP BTP and AI agents, and the free POWERON SAP IS-U health assessment.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main id="main" className="services-page">
        <section className="page-hero light-hero services-hero">
          <div className="services-hero-copy">
            <span className="stag">UtilityNexus.ai Services</span>
            <h1>Focused SAP services for utilities and regulated operations.</h1>
            <p>
              Move from ECC to S/4HANA, strengthen application support, govern implementation
              delivery, shape BTP and AI-agent adoption or uncover SAP IS-U risks with POWERON.
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
          </div>
          <figure className="services-hero-visual">
            <Image
              src="/sap-s4hana-upgrade-planning.png"
              fill
              priority
              sizes="100vw"
              alt="SAP consultants and enterprise leaders reviewing an S/4HANA transformation roadmap"
            />
            <figcaption>
              <span>SAP services for regulated operations</span>
              <span>Upgrade · support · govern · BTP + AI · assess</span>
            </figcaption>
          </figure>
        </section>
        <ServiceDetails />
        <PowerOnAssessment />
      </main>
      <Footer />
    </>
  );
}
