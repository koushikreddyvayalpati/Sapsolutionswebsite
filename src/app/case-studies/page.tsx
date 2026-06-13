import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { CaseStudies, Testimonials } from "@/components/Sections";

export const metadata: Metadata = {
  title: "SAP Case Studies | SAP Global",
  description:
    "Enterprise SAP transformation case studies and client outcomes across energy, utilities, manufacturing and AI operations.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="page-hero light-hero">
          <span className="stag">Proof</span>
          <h1>Measured SAP outcomes, not marketing claims.</h1>
          <p>
            Review selected SAP transformation examples with delivery context, outcomes and client
            feedback from regulated global environments.
          </p>
        </section>
        <CaseStudies />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
