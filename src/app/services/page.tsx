import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Services } from "@/components/Sections";

export const metadata: Metadata = {
  title: "SAP Services | SAP Global",
  description:
    "Browse SAP Global services across S/4HANA, BTP, analytics, managed services, integration, migration, cloud and agentic AI.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main id="main" className="services-lean">
        <section className="page-hero light-hero">
          <span className="stag">Services</span>
          <h1>Pick the SAP service you need.</h1>
          <p>
            A lean catalog of the work we deliver. Open a card for the full solution detail.
          </p>
        </section>
        <Services
          title="Core SAP capabilities"
          sub="Select a service to view the delivery model, outcomes and proof."
        />
      </main>
      <Footer />
    </>
  );
}
