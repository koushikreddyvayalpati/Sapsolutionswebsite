import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import {
  Services,
  VisualProof,
  WhyUs,
} from "@/components/Sections";
import { WHY_METRICS } from "@/data/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="home-page">
        <Hero />
        <VisualProof />
        <Services />
        <WhyUs metrics={WHY_METRICS} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
