import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import HexGrid from "@/components/solutions/HexGrid";
import MigrationTimeline from "@/components/solutions/MigrationTimeline";
import SideDots from "@/components/solutions/SideDots";
import "./solutions.css";

export const metadata: Metadata = {
  title: "SAP Solutions | SAP Global ServiceTech",
  description:
    "Nine SAP solution areas, expertly delivered — S/4HANA implementation, ERP consulting, analytics, managed services, integration, migration, cloud, BTP and Agentic AI.",
};

const DOTS = [
  { id: "s1", label: "S/4HANA" },
  { id: "s2", label: "ERP Consulting" },
  { id: "s3", label: "Analytics & BI" },
  { id: "s4", label: "Managed Services" },
  { id: "s5", label: "Integration" },
  { id: "s6", label: "Migration" },
  { id: "s7", label: "Cloud Solutions" },
  { id: "s8", label: "SAP BTP" },
  { id: "s9", label: "Agentic AI ✦" },
];

function Proof({ children }: { children: React.ReactNode }) {
  return (
    <p className="proof">
      <Icon name="check" size={13} strokeWidth={2.5} />
      <span>{children}</span>
    </p>
  );
}

function Pills({ items, hi = 2 }: { items: string[]; hi?: number }) {
  return (
    <div className="pills">
      {items.map((p, i) => (
        <span key={p} className={`pill${i < hi ? " hi" : ""}`}>
          {p}
        </span>
      ))}
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <Nav />
      <SideDots targets={DOTS} />
      <main id="main" className="solutions-page">
        {/* PAGE HERO */}
        <header className="pg-hero">
          <div className="hero-dots" />
          <div className="solution-hero-inner">
            <div className="solution-hero-copy">
              <div className="pg-badge">
                <span className="pg-dot" />
                Enterprise SAP Solutions
              </div>
              <h1>
                Choose the right SAP path.
                <br />
                De-risk delivery from day one.
              </h1>
              <p>
                Implementation, migration, BTP, managed services and agentic AI in one enterprise
                portfolio, built for CIOs who need measurable business outcomes.
              </p>
              <div className="solution-hero-actions">
                <Link href="/#contact" className="sol-primary-cta">
                  Book Solution Assessment <Icon name="arrow" size={14} strokeWidth={2.5} />
                </Link>
                <Link href="/case-studies" className="sol-secondary-cta">
                  See Proof
                </Link>
              </div>
              <div className="solution-hero-metrics" aria-label="SAP delivery metrics">
                <span>
                  <strong>500+</strong>
                  SAP projects delivered
                </span>
                <span>
                  <strong>98%</strong>
                  client satisfaction
                </span>
                <span>
                  <strong>15m</strong>
                  P1 response SLA
                </span>
              </div>
              <nav className="sol-pills" aria-label="Jump to a solution">
                {DOTS.map((d) => (
                  <a key={d.id} href={`#${d.id}`} className="sol-pill">
                    {d.label}
                  </a>
                ))}
              </nav>
            </div>
            <figure className="solution-hero-photo">
              <Image
                src="/solutions-hero.png"
                width={1672}
                height={941}
                alt="Enterprise SAP consultants reviewing a transformation roadmap in a modern office"
                priority
                sizes="(max-width: 960px) 92vw, 44vw"
              />
              <figcaption>Transformation roadmap workshop</figcaption>
            </figure>
          </div>
        </header>

        <section className="solution-value-strip" aria-label="How SAP Global helps buyers decide">
          <figure className="solution-value-photo">
            <Image
              src="/solutions-assessment.png"
              width={1672}
              height={941}
              alt="SAP consultants assessing and prioritizing transformation roadmap options"
              sizes="(max-width: 960px) 92vw, 32vw"
            />
          </figure>
          <div className="solution-value-steps">
            <div>
              <span>01</span>
              <strong>Assess</strong>
              <p>Map your SAP landscape, risk, dependencies and business case.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Prioritize</strong>
              <p>Choose the highest-impact path across S/4HANA, BTP, cloud and AI.</p>
            </div>
            <div>
              <span>03</span>
              <strong>Design</strong>
              <p>Turn the selected path into architecture, governance and delivery milestones.</p>
            </div>
          </div>
        </section>

        <div className="sol-stack">

        {/* 01 — S/4HANA */}
        <section className="sol" id="s1">
          <Reveal variant="left" className="stxt">
            <span className="snum">01 · Core ERP Platform</span>
            <h2>
              SAP S/4HANA
              <br />
              Implementation
            </h2>
            <p className="slead">
              Modernize your enterprise core with the world&rsquo;s most powerful ERP. We deliver
              greenfield, brownfield and selective data transition implementations — designed for
              complex, multi-entity, global enterprises that cannot afford disruption.
            </p>
            <Pills
              items={[
                "Greenfield",
                "Brownfield",
                "Finance & Controlling",
                "Supply Chain",
                "Manufacturing",
                "Procurement",
                "SAP Activate",
              ]}
            />
            <div className="stat-row">
              <div>
                <div className="sv">150+</div>
                <div className="sl">S/4HANA Projects</div>
              </div>
              <div>
                <div className="sv">40%</div>
                <div className="sl">Avg. Cost Reduction</div>
              </div>
              <div>
                <div className="sv">98%</div>
                <div className="sl">On-time Delivery</div>
              </div>
            </div>
            <Proof>
              Delivered for <strong>Shell, TotalEnergies and SABIC</strong> — 150+ S/4HANA
              programmes across 12 regulated industries, references available on request.
            </Proof>
            <Link href="/#contact" className="cta-link">
              Explore S/4HANA →
            </Link>
          </Reveal>
          <Reveal variant="right" className="svis" aria-hidden="true">
            <div className="hana-wrap">
              <figure className="hana-photo-system">
                <Image
                  src="/enterprise-sap-hero.png"
                  width={1672}
                  height={941}
                  alt="SAP S/4HANA transformation team reviewing enterprise dashboards"
                  sizes="(max-width: 960px) 90vw, 42vw"
                />
                <figcaption>S/4HANA transformation cockpit</figcaption>
              </figure>
              <div className="hana-layer-card core">
                <span>01 · Assess</span>
                <strong>Map the business case</strong>
                <p>Fit-gap, clean-core roadmap, timeline and risk plan before build starts.</p>
              </div>
              <div className="hana-layer-card data">
                <span>02 · Migrate</span>
                <strong>Move without disruption</strong>
                <p>Greenfield, brownfield or selective transition with governed data cutover.</p>
              </div>
              <div className="hana-layer-card ux">
                <span>03 · Go live</span>
                <strong>Control adoption and value</strong>
                <p>Fiori workflows, hypercare and KPI dashboards for measurable outcomes.</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 02 — ERP CONSULTING */}
        <section className="sol alt" id="s2">
          <Reveal variant="left" className="svis lft" aria-hidden="true">
            <div className="erp-vis">
              <svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="bpgrid" width="28" height="28" patternUnits="userSpaceOnUse">
                    <path d="M28 0L0 0 0 28" fill="none" stroke="rgba(47,109,246,0.08)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="420" height="320" fill="url(#bpgrid)" rx="14" />
                <rect x="155" y="16" width="110" height="44" rx="8" fill="rgba(47,109,246,0.10)" stroke="#2f6df6" strokeWidth="1.5" />
                <text x="210" y="35" textAnchor="middle" fontSize="10" fontWeight="700" fill="#2f6df6">STRATEGY</text>
                <text x="210" y="50" textAnchor="middle" fontSize="9" fill="#3D5472">Assessment &amp; Design</text>
                <rect x="30" y="106" width="96" height="44" rx="8" fill="rgba(47,109,246,0.05)" stroke="#7D96B4" strokeWidth="1.5" />
                <text x="78" y="126" textAnchor="middle" fontSize="9" fontWeight="700" fill="#071226">PROCESS</text>
                <text x="78" y="141" textAnchor="middle" fontSize="8" fill="#3D5472">Redesign</text>
                <rect x="158" y="106" width="104" height="44" rx="8" fill="rgba(47,109,246,0.08)" stroke="#2f6df6" strokeWidth="1.5" />
                <text x="210" y="126" textAnchor="middle" fontSize="9" fontWeight="700" fill="#2f6df6">ROADMAP</text>
                <text x="210" y="141" textAnchor="middle" fontSize="8" fill="#3D5472">5-Year Plan</text>
                <rect x="294" y="106" width="96" height="44" rx="8" fill="rgba(47,109,246,0.05)" stroke="#7D96B4" strokeWidth="1.5" />
                <text x="342" y="126" textAnchor="middle" fontSize="9" fontWeight="700" fill="#071226">CHANGE</text>
                <text x="342" y="141" textAnchor="middle" fontSize="8" fill="#3D5472">Management</text>
                <rect x="30" y="210" width="96" height="44" rx="8" fill="rgba(47,109,246,0.05)" stroke="#7D96B4" strokeWidth="1.5" />
                <text x="78" y="230" textAnchor="middle" fontSize="9" fontWeight="700" fill="#071226">BUILD</text>
                <text x="78" y="245" textAnchor="middle" fontSize="8" fill="#3D5472">&amp; Configure</text>
                <rect x="158" y="210" width="104" height="44" rx="8" fill="rgba(47,109,246,0.08)" stroke="#2f6df6" strokeWidth="1.5" />
                <text x="210" y="230" textAnchor="middle" fontSize="9" fontWeight="700" fill="#2f6df6">TEST</text>
                <text x="210" y="245" textAnchor="middle" fontSize="8" fill="#3D5472">&amp; Validate</text>
                <rect x="294" y="210" width="96" height="44" rx="8" fill="rgba(47,109,246,0.06)" stroke="#2f6df6" strokeWidth="1.5" />
                <text x="342" y="230" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1748b7">GO-LIVE</text>
                <text x="342" y="245" textAnchor="middle" fontSize="8" fill="#3D5472">&amp; Optimise</text>
                <line x1="210" y1="60" x2="78" y2="106" stroke="rgba(47,109,246,.35)" className="fp" />
                <line x1="210" y1="60" x2="210" y2="106" stroke="rgba(47,109,246,.45)" className="fp" style={{ animationDelay: ".5s" }} />
                <line x1="210" y1="60" x2="342" y2="106" stroke="rgba(47,109,246,.35)" className="fp" style={{ animationDelay: "1s" }} />
                <line x1="78" y1="150" x2="78" y2="210" stroke="rgba(47,109,246,.3)" className="fp" style={{ animationDelay: ".3s" }} />
                <line x1="210" y1="150" x2="210" y2="210" stroke="rgba(47,109,246,.45)" className="fp" style={{ animationDelay: ".8s" }} />
                <line x1="342" y1="150" x2="342" y2="210" stroke="rgba(15,98,254,.35)" className="fp" style={{ animationDelay: "1.3s" }} />
                <circle r="4" fill="#2f6df6">
                  <animateMotion dur="2.8s" repeatCount="indefinite" path="M210,60 L210,106" />
                </circle>
                <circle r="4" fill="#2f6df6">
                  <animateMotion dur="3.2s" repeatCount="indefinite" begin="0.8s" path="M210,150 L210,210" />
                </circle>
                <circle r="4" fill="#1748b7">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="1.6s" path="M78,60 L78,106" />
                </circle>
              </svg>
            </div>
          </Reveal>
          <Reveal variant="right" className="stxt">
            <span className="snum">02 · Advisory</span>
            <h2>
              SAP ERP
              <br />
              Consulting
            </h2>
            <p className="slead">
              Strategic SAP advisory that goes beyond configuration. We re-engineer business
              processes, build multi-year technology roadmaps and drive organizational change
              programs that make SAP investments generate lasting competitive advantage.
            </p>
            <Pills
              items={[
                "Blueprint & Design",
                "Process Optimization",
                "Change Management",
                "ROI Planning",
                "Governance",
                "TCO Reduction",
              ]}
            />
            <div className="quote-box">
              <p>
                &ldquo;We reduced total cost of ownership by 38% in year one. Their process
                blueprint was a masterclass in SAP design thinking.&rdquo;
              </p>
              <cite>— CIO, Global Manufacturing Leader</cite>
            </div>
            <Link href="/#contact" className="cta-link">
              View ERP Consulting →
            </Link>
          </Reveal>
        </section>

        {/* 03 — ANALYTICS */}
        <section className="sol alt2" id="s3">
          <Reveal variant="left" className="stxt">
            <span className="snum">03 · Intelligence</span>
            <h2>
              SAP Analytics
              <br />
              &amp; Business Intelligence
            </h2>
            <p className="slead">
              Transform raw enterprise data into real-time competitive intelligence. We deploy SAP
              Analytics Cloud, BW/4HANA and embedded analytics — giving executives, planners and
              operations teams instant, trusted insight across every business dimension.
            </p>
            <Pills
              items={[
                "SAP Analytics Cloud",
                "BW/4HANA",
                "Predictive Analytics",
                "Financial Planning & Analysis",
                "Live Data Connect",
                "Data Storytelling",
              ]}
            />
            <div className="kpi-duo">
              <div>
                <div className="kd-l">Real-Time Query Speed</div>
                <div className="kd-v">Sub-0.3s</div>
              </div>
              <div>
                <div className="kd-l">Supported Data Sources</div>
                <div className="kd-v">500+</div>
              </div>
            </div>
            <Proof>
              In production at <strong>Schneider Electric and ENGIE</strong> — 3M+ data points
              visualised daily across live client dashboards.
            </Proof>
            <Link href="/#contact" className="cta-link">
              Explore Analytics →
            </Link>
          </Reveal>
          <Reveal variant="right" className="svis" aria-hidden="true">
            <div className="chart-card">
              <div className="cc-hdr2">
                <span className="cc-ttl2">Enterprise Performance Dashboard</span>
                <span className="cc-live">
                  <span className="live-dot" />
                  Live
                </span>
              </div>
              <div className="bars">
                {Array.from({ length: 7 }, (_, i) => (
                  <div key={i} className="bar" />
                ))}
              </div>
              <div className="bar-lbls">
                <span>Q1</span>
                <span>Q2</span>
                <span>Q3</span>
                <span>Q4</span>
                <span>Q1</span>
                <span>Q2↑</span>
                <span>Q3</span>
              </div>
              <div className="cc-kpis">
                <div className="ckpi">
                  <div className="ckpiv">$2.4B</div>
                  <div className="ckpil">Revenue Tracked</div>
                </div>
                <div className="ckpi">
                  <div className="ckpiv">98%</div>
                  <div className="ckpil">Data Accuracy</div>
                </div>
                <div className="ckpi">
                  <div className="ckpiv">0.3s</div>
                  <div className="ckpil">Avg. Query</div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 04 — MANAGED SERVICES */}
        <section className="sol" id="s4">
          <Reveal variant="left" className="svis lft" aria-hidden="true">
            <div className="ms-wrap">
              <div className="ring" />
              <div className="ring" />
              <div className="ring" />
              <div className="ms-core">
                <div className="ms-pct">99.9%</div>
                <div className="ms-lbl">
                  System Uptime
                  <br />
                  Guaranteed
                </div>
              </div>
              <span className="blip b1" />
              <span className="blip b2" />
              <span className="blip b3" />
            </div>
          </Reveal>
          <Reveal variant="right" className="stxt">
            <span className="snum">04 · Operations</span>
            <h2>
              SAP Support &amp;
              <br />
              Managed Services
            </h2>
            <p className="slead">
              24/7 enterprise SAP application management that keeps your systems performing at
              their peak. Proactive monitoring, rapid incident response, patching and continuous
              improvement — all underpinned by watertight SLAs and engineers who know your
              landscape intimately.
            </p>
            <Pills
              items={[
                "24/7 Monitoring",
                "SLA-Backed",
                "Incident Management",
                "Basis Administration",
                "Security & Compliance",
                "Continuous Improvement",
              ]}
            />
            <div className="mrow">
              <div className="mrow-item">
                <span>Average Incident Response</span>
                <span className="mrow-val green">&lt; 15 minutes</span>
              </div>
              <div className="mrow-item">
                <span>Critical P1 Resolution</span>
                <span className="mrow-val">&lt; 4 hours</span>
              </div>
              <div className="mrow-item">
                <span>Monthly Reporting Cadence</span>
                <span className="mrow-val green">Automated</span>
              </div>
            </div>
            <Proof>
              SLA performance <strong>independently audited</strong> — ISO 27001 certified
              operations, monthly reports your auditors can rely on.
            </Proof>
            <Link href="/#contact" className="cta-link">
              See Managed Services →
            </Link>
          </Reveal>
        </section>

        {/* 05 — INTEGRATION */}
        <section className="sol alt" id="s5">
          <Reveal variant="left" className="stxt" style={{ flexBasis: "40%" }}>
            <span className="snum">05 · Connectivity</span>
            <h2>
              SAP
              <br />
              Integration Suite
            </h2>
            <p className="slead">
              Connect your entire enterprise ecosystem with zero friction. We architect API-led
              integration of SAP with Salesforce, Oracle, IoT platforms and custom systems — using
              SAP Integration Suite, iFlows and event-driven architecture that handles millions of
              messages daily.
            </p>
            <Pills
              items={[
                "SAP Integration Suite",
                "API Management",
                "Event Mesh",
                "EDI / B2B",
                "Real-time Sync",
                "iFlow Design",
              ]}
            />
            <Proof>
              <strong>847 live integration flows</strong> monitored 24/7 across 30+ countries —
              99.98% measured delivery over the last 12 months.
            </Proof>
            <Link href="/#contact" className="cta-link">
              Explore Integration →
            </Link>
          </Reveal>
          <Reveal variant="right" className="svis" aria-hidden="true">
            <div className="int-vis">
              <div className="int-lbl-hdr">Live Integration Flows</div>
              <div className="int-row">
                <div className="ibox">
                  Salesforce
                  <br />
                  CRM
                </div>
                <div className="iline">
                  <span className="idot" />
                </div>
                <div className="ibox center">
                  SAP Integration
                  <br />
                  Suite
                </div>
                <div className="iline">
                  <span className="idot" style={{ animationDelay: ".7s" }} />
                </div>
                <div className="ibox">
                  S/4HANA
                  <br />
                  Core
                </div>
              </div>
              <div className="int-row">
                <div className="ibox">
                  IoT
                  <br />
                  Sensors
                </div>
                <div className="iline">
                  <span className="idot rev2" />
                </div>
                <div className="ibox center">
                  Event
                  <br />
                  Mesh
                </div>
                <div className="iline">
                  <span className="idot rev2" style={{ animationDelay: ".5s" }} />
                </div>
                <div className="ibox">
                  SAP PM
                  <br />
                  Module
                </div>
              </div>
              <div className="int-row">
                <div className="ibox">
                  Oracle
                  <br />
                  EBS
                </div>
                <div className="iline">
                  <span className="idot" style={{ animationDelay: "1s" }} />
                </div>
                <div className="ibox center">
                  API
                  <br />
                  Gateway
                </div>
                <div className="iline">
                  <span className="idot" style={{ animationDelay: "1.4s" }} />
                </div>
                <div className="ibox">
                  SAP BW
                  <br />
                  Analytics
                </div>
              </div>
              <div className="int-meta">
                <div className="im">
                  <span className="imdot" style={{ background: "var(--blue-d)" }} />
                  847 active flows
                </div>
                <div className="im">
                  <span className="imdot" style={{ background: "var(--blue)" }} />
                  2.3M msgs / day
                </div>
                <div className="im">
                  <span className="imdot" style={{ background: "var(--navy)" }} />
                  99.98% delivery
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 06 — MIGRATION */}
        <section className="sol alt2" id="s6">
          <Reveal variant="left" className="svis lft">
            <MigrationTimeline />
          </Reveal>
          <Reveal variant="right" className="stxt">
            <span className="snum">06 · Transition</span>
            <h2>
              SAP Migration
              <br />
              &amp; Upgrades
            </h2>
            <p className="slead">
              Move from SAP ECC to S/4HANA with complete confidence. Our battle-tested methodology
              uses automated tooling, parallel landscape testing and a phased cutover approach —
              eliminating risk while keeping your enterprise running throughout the transition.
            </p>
            <Pills
              items={[
                "ECC → S/4HANA",
                "SAP Activate",
                "System Conversion",
                "Data Migration",
                "Custom Code Remediation",
                "SAP DMO",
              ]}
            />
            <div className="outcome-box green">
              <div className="ob-ttl">Average migration outcomes across our clients</div>
              <div className="ob-row">
                <div>
                  <div className="ob-v">30%</div>
                  <div className="ob-l">Custom Code Cut</div>
                </div>
                <div>
                  <div className="ob-v">Zero</div>
                  <div className="ob-l">Data Loss Incidents</div>
                </div>
                <div>
                  <div className="ob-v">99%</div>
                  <div className="ob-l">Interface Success</div>
                </div>
              </div>
            </div>
            <Proof>
              <strong>Zero data-loss record</strong> across 80+ ECC-to-S/4HANA conversions —
              verified in every post-go-live audit.
            </Proof>
            <Link href="/#contact" className="cta-link">
              Plan Your Migration →
            </Link>
          </Reveal>
        </section>

        {/* 07 — CLOUD */}
        <section className="sol" id="s7">
          <Reveal variant="left" className="stxt">
            <span className="snum">07 · Cloud</span>
            <h2>
              SAP Cloud
              <br />
              Solutions
            </h2>
            <p className="slead">
              Whether it&rsquo;s RISE with S/4HANA, private cloud on Azure or AWS, or a strategic
              hybrid landscape — we design and deliver the cloud operating model that perfectly
              fits your enterprise&rsquo;s regulatory, performance and cost requirements.
            </p>
            <Pills
              items={[
                "RISE with SAP",
                "Private Cloud",
                "Azure / AWS / GCP",
                "Hybrid Architecture",
                "Cloud Security",
                "FinOps",
              ]}
            />
            <div className="mrow">
              <div className="mrow-item">
                <span>Infrastructure Cost Reduction</span>
                <span className="mrow-val">Up to 45%</span>
              </div>
              <div className="mrow-item">
                <span>Deployment vs On-Premise</span>
                <span className="mrow-val">60% Faster</span>
              </div>
              <div className="mrow-item">
                <span>Guaranteed Uptime SLA</span>
                <span className="mrow-val green">99.95%</span>
              </div>
            </div>
            <Proof>
              Certified <strong>RISE with SAP delivery partner</strong> — landscapes run on Azure,
              AWS and GCP under client-owned security baselines.
            </Proof>
            <Link href="/#contact" className="cta-link">
              Explore Cloud Options →
            </Link>
          </Reveal>
          <Reveal variant="right" className="svis" aria-hidden="true">
            <div className="cloud-vis">
              <div className="cloud-hdr">SAP Cloud Architecture Layers</div>
              <div className="clayer l1">
                <div className="cl-ico b">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                </div>
                <div className="cl-info">
                  <h5>Application Layer</h5>
                  <p>S/4HANA · Fiori · Analytics Cloud</p>
                </div>
              </div>
              <div className="clayer l2">
                <div className="cl-ico t">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <div className="cl-info">
                  <h5>Platform Layer (BTP)</h5>
                  <p>Integration · Extension · AI Core</p>
                </div>
              </div>
              <div className="clayer l3">
                <div className="cl-ico g">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                  </svg>
                </div>
                <div className="cl-info">
                  <h5>Infrastructure Layer</h5>
                  <p>Azure · AWS · GCP · Private DC</p>
                </div>
              </div>
              <div className="cloud-opts">
                <div className="copt b">
                  RISE
                  <br />
                  <strong>Public</strong>
                </div>
                <div className="copt t">
                  Managed
                  <br />
                  <strong>Private</strong>
                </div>
                <div className="copt g">
                  Custom
                  <br />
                  <strong>Hybrid</strong>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 08 — SAP BTP */}
        <section className="sol alt" id="s8">
          <Reveal variant="left" className="svis lft">
            <HexGrid />
          </Reveal>
          <Reveal variant="right" className="stxt">
            <span className="snum">08 · Platform</span>
            <h2>
              SAP Business
              <br />
              Technology Platform
            </h2>
            <p className="slead">
              SAP BTP is the innovation engine of the intelligent enterprise. We use BTP to extend
              SAP applications, build custom apps, automate workflows, integrate ecosystems and lay
              the foundation for AI-powered operations — all on one unified, governed platform.
            </p>
            <Pills
              items={[
                "SAP BTP Build",
                "Workflow Management",
                "HANA Cloud",
                "AI Core & Joule",
                "Event-Driven Architecture",
                "Low-Code / No-Code",
              ]}
            />
            <div className="outcome-box blue">
              <div className="ob-ttl">BTP adoption results across our client base</div>
              <div className="ob-row">
                <div>
                  <div className="ob-v">65%</div>
                  <div className="ob-l">Faster App Dev</div>
                </div>
                <div>
                  <div className="ob-v">80%</div>
                  <div className="ob-l">Process Automation</div>
                </div>
                <div>
                  <div className="ob-v">3×</div>
                  <div className="ob-l">Innovation Speed</div>
                </div>
              </div>
            </div>
            <Proof>
              <strong>65+ BTP applications shipped to production</strong> — every build handed
              over with documentation, tests and governance in place.
            </Proof>
            <Link href="/#contact" className="cta-link">
              Explore SAP BTP →
            </Link>
          </Reveal>
        </section>

        {/* 09 — AGENTIC AI */}
        <section className="sol alt2 agentic-standard" id="s9">
          <Reveal variant="left" className="stxt">
            <span className="snum">09 · Autonomous Operations</span>
            <h2>
              SAP with
              <br />
              Agentic AI
            </h2>
            <p className="slead">
              Autonomous AI agents embedded in SAP workflows to execute multi-step tasks, make
              decisions inside approved guardrails and self-heal operations with auditable human
              oversight.
            </p>
            <Pills
              items={[
                "Zero-Touch Procurement",
                "Predictive Maintenance",
                "AI Financial Close",
                "Self-Healing Systems",
                "SAP Joule Agents",
                "SAP AI Core",
              ]}
            />
            <Proof>
              Every agent runs inside <strong>approval guardrails with full audit trails</strong>{" "}
              — your governance, risk and compliance teams stay in control.
            </Proof>
            <Link href="/#contact" className="cta-link">
              Start an AI Pilot →
            </Link>
          </Reveal>
          <Reveal variant="right" className="svis">
            <div className="ai-stats standard">
              <div className="ai-stat">
                <div className="aisv">78%</div>
                <div className="aisl">SAP processes fully automated</div>
              </div>
              <div className="ai-stat">
                <div className="aisv">3×</div>
                <div className="aisl">ROI achieved within 12 months</div>
              </div>
              <div className="ai-stat">
                <div className="aisv">100%</div>
                <div className="aisl">Agent decisions logged &amp; auditable</div>
              </div>
              <div className="ai-stat">
                <div className="aisv">Human</div>
                <div className="aisl">Oversight built into every workflow</div>
              </div>
            </div>
          </Reveal>
        </section>
        </div>

        {/* ENGAGEMENT CTA */}
        <section className="eng-band" aria-label="Start an engagement">
          <Reveal>
            <h2>Not sure where to start?</h2>
            <p>
              Book a free SAP landscape assessment. A senior consultant — not a salesperson —
              reviews your estate and responds within one business day with concrete next steps.
            </p>
            <div className="eng-ctas">
              <Link href="/#contact" className="eng-btn-p">
                Book a Free Assessment
                <Icon name="arrow" size={14} strokeWidth={2.5} />
              </Link>
              <Link href="/case-studies" className="eng-btn-s">
                Read Client Case Studies
              </Link>
            </div>
            <div className="eng-guarantees">
              <span className="eng-g">
                <Icon name="check" size={13} strokeWidth={2.5} /> NDA-protected from first call
              </span>
              <span className="eng-g">
                <Icon name="check" size={13} strokeWidth={2.5} /> No obligation, no licence
                pressure
              </span>
              <span className="eng-g">
                <Icon name="check" size={13} strokeWidth={2.5} /> SAP-certified senior consultants
                only
              </span>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
