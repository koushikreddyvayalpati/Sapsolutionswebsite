import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import {
  Services,
  VisualProof,
  WhyUs,
} from "@/components/Sections";
import "./home.css";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="home-page">
        <Hero />
        <Services />
        <VisualProof />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
