export const SITE = {
  name: "SAP Global",
  tagline:
    "Enterprise SAP solutions, consulting and managed services for the world's most demanding organisations. SAP Gold Partner.",
};

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
];

export const HERO_TRUST = ["SAP Gold Partner", "ISO 27001 Certified", "30+ Countries"];

export const TRUST_BADGES = [
  { icon: "shield", label: "SAP Gold Partner" },
  { icon: "lock", label: "ISO 27001 Certified" },
  { icon: "pulse", label: "SAP Activate Certified" },
  { icon: "globe", label: "30+ Countries Delivered" },
  { icon: "check", label: "GDPR Compliant" },
] as const;

export const CLIENTS = [
  "Shell",
  "ExxonMobil",
  "Siemens",
  "ABB Group",
  "TotalEnergies",
  "BP Energy",
  "Chevron",
  "SABIC",
  "Petrobras",
  "Halliburton",
  "Schneider Electric",
  "ENGIE",
];

export interface Service {
  slug: string;
  title: string;
  description: string;
  chips: string[];
  isNew?: boolean;
}

export const SERVICES: Service[] = [
  {
    slug: "s1",
    title: "SAP S/4HANA Implementation",
    description:
      "Full-cycle greenfield and brownfield S/4HANA deployments for complex, multi-entity global enterprises.",
    chips: ["Greenfield", "Brownfield", "Finance", "Supply Chain", "SAP Activate"],
  },
  {
    slug: "s2",
    title: "SAP ERP Consulting",
    description:
      "Strategic advisory and process re-engineering — aligning technology roadmaps with long-term business objectives.",
    chips: ["Blueprint", "Process Optimization", "TCO Reduction", "Governance"],
  },
  {
    slug: "s3",
    title: "SAP Analytics & Business Intelligence",
    description:
      "Real-time enterprise intelligence with SAP Analytics Cloud and BW/4HANA — data-driven decisions at every level.",
    chips: ["SAP Analytics Cloud", "BW/4HANA", "Predictive", "FP&A"],
  },
  {
    slug: "s4",
    title: "SAP Support & Managed Services",
    description:
      "24/7 enterprise application management with <15-min incident response and bulletproof SLAs.",
    chips: ["24/7 Monitoring", "SLA-Backed", "Basis Admin", "Security"],
  },
  {
    slug: "s5",
    title: "SAP Integration",
    description:
      "API-led connectivity linking SAP to Salesforce, Oracle, IoT platforms and custom systems — 99.98% delivery reliability.",
    chips: ["SAP Integration Suite", "API Management", "Event Mesh", "EDI/B2B"],
  },
  {
    slug: "s6",
    title: "SAP Migration & Upgrades",
    description:
      "ECC to S/4HANA migration with zero data loss — automated tooling and phased cutover for complex landscapes.",
    chips: ["ECC → S/4HANA", "System Conversion", "SAP DMO", "Data Migration"],
  },
  {
    slug: "s7",
    title: "SAP Cloud Solutions",
    description:
      "RISE with SAP, private cloud and hybrid architectures on Azure, AWS and GCP — optimised for compliance, performance and cost.",
    chips: ["RISE with SAP", "Private Cloud", "Azure / AWS / GCP", "FinOps"],
  },
  {
    slug: "s8",
    title: "SAP BTP (Business Technology Platform)",
    description:
      "Extend, integrate and innovate on BTP — custom apps, workflow automation and HANA Cloud at enterprise scale.",
    chips: ["BTP Build", "HANA Cloud", "Workflow", "Low-Code"],
  },
  {
    slug: "s9",
    title: "SAP with Agentic AI",
    description:
      "Autonomous AI agents embedded in SAP — zero-touch procurement, predictive maintenance and self-healing operations on SAP AI Core.",
    chips: ["Zero-Touch Procurement", "SAP Joule", "AI Core", "Self-Healing Ops"],
    isNew: true,
  },
];

export const WHY_POINTS = [
  {
    icon: "shield",
    title: "Enterprise-Proven Methodology",
    body: "SAP Activate and ASAP-certified delivery frameworks tested across 200+ enterprise deployments in the world's most regulated industries.",
  },
  {
    icon: "pulse",
    title: "AI-First SAP Innovation",
    body: "Pioneering Agentic AI within SAP — autonomous agents, predictive analytics and self-healing operations at enterprise scale.",
  },
  {
    icon: "globe",
    title: "Global Delivery, Local Expertise",
    body: "30+ countries served with deep vertical expertise in Oil & Gas, Utilities and Energy — the industries that power the global economy.",
  },
  {
    icon: "team",
    title: "Dedicated Client Success Teams",
    body: "Assigned architects, project managers and support engineers from discovery through go-live and beyond.",
  },
] as const;

export const WHY_METRICS = [
  { label: "Implementation Excellence", value: 98 },
  { label: "On-Time Go-Live Rate", value: 96 },
  { label: "Client Retention Rate", value: 94 },
  { label: "Avg. Cost Optimisation", value: 38 },
];

export const WHY_KPIS = [
  { value: "200+", label: "Active Clients" },
  { value: "50+", label: "SAP Experts" },
  { value: "15+", label: "Years Focus" },
  { value: "30+", label: "Countries" },
];

export const INDUSTRIES = [
  {
    icon: "factory",
    title: "Oil & Gas",
    body: "Upstream, midstream and downstream SAP — from IS-Oil to field operations automation for energy majors.",
  },
  {
    icon: "bolt",
    title: "Utilities & Energy",
    body: "IS-U metering, billing, grid management and regulatory SAP compliance for utilities across Europe and MENA.",
  },
  {
    icon: "building",
    title: "Manufacturing",
    body: "PP/DS, plant maintenance and supply chain optimisation for discrete and process manufacturers.",
  },
  {
    icon: "globe",
    title: "All Industries",
    body: "Finance, healthcare, retail, logistics and public sector — SAP expertise wherever complexity demands the best.",
  },
] as const;

export const STATS = [
  { count: 200, suffix: "+", label: "Enterprise Clients", sub: "Active worldwide" },
  { count: 500, suffix: "+", label: "SAP Projects", sub: "Successfully delivered" },
  { count: 98, suffix: "%", label: "Client Satisfaction", sub: "Measured annually" },
  { count: 15, suffix: "+", label: "Years SAP Focus", sub: "Pure-SAP practice" },
];

export const CASE_STUDIES = [
  {
    theme: "h-a",
    image: "/case-energy.png",
    tag: "Oil & Gas · S/4HANA",
    title: "Global Energy S/4HANA Transformation",
    body: "Migrated a Fortune 500 oil & gas company's SAP ECC to S/4HANA across 12 countries — zero data loss, on time and on budget.",
    metrics: [
      { value: "40%", label: "Faster Close" },
      { value: "$12M", label: "Annual Savings" },
      { value: "18mo", label: "Go-Live" },
    ],
  },
  {
    theme: "h-b",
    image: "/case-utilities.png",
    tag: "Utilities · BTP Integration",
    title: "Smart Grid SAP BTP Platform",
    body: "Unified BTP integration layer connecting SCADA, 3M+ IoT meters and SAP IS-U for a leading European utility — 99.9% uptime.",
    metrics: [
      { value: "99.9%", label: "Uptime" },
      { value: "60%", label: "Faster Processing" },
      { value: "3M+", label: "Meters" },
    ],
  },
  {
    theme: "h-c",
    image: "/case-ai-manufacturing.png",
    tag: "Manufacturing · Agentic AI",
    title: "Agentic AI SAP Operations Centre",
    body: "Autonomous AI agents in SAP PM and MM — self-healing workflows, predictive maintenance and zero-touch procurement at scale.",
    metrics: [
      { value: "3×", label: "ROI in 12mo" },
      { value: "78%", label: "Automation" },
      { value: "Real-time", label: "AI Decisions" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "SAP Global ServiceTech delivered our S/4HANA transformation on time and on budget — something we were told was impossible. Their SAP depth is genuinely unmatched.",
    initials: "RK",
    name: "Rajiv Kumar",
    role: "CIO, Global Energy Corp",
  },
  {
    quote:
      "The BTP platform processes over 3 million meter reads daily without a single failure. 99.9% uptime — these people understand enterprise-grade reliability.",
    initials: "SM",
    name: "Sarah Mitchell",
    role: "SVP Technology, Utility Innovations Ltd",
  },
  {
    quote:
      "Their Agentic AI project was transformational. Autonomous agents now handle our procurement and plant maintenance — we've freed an entire team for strategic work.",
    initials: "MH",
    name: "Marcus Hendricks",
    role: "COO, Precision Manufacturing Group",
  },
];

export const TEAM = [
  { theme: "t1", initials: "AK", name: "Ahmed Al-Kasem", role: "Chief SAP Architect", tags: ["S/4HANA", "BTP", "Oil & Gas"] },
  { theme: "t2", initials: "PV", name: "Priya Venkatesh", role: "Head of AI & Innovation", tags: ["Agentic AI", "ML", "SAP AI"] },
  { theme: "t3", initials: "JS", name: "James Sterling", role: "SAP Delivery Director", tags: ["ERP", "Migration", "Cloud"] },
  { theme: "t4", initials: "LM", name: "Laura Marchetti", role: "Analytics & BI Lead", tags: ["Analytics", "BW/4HANA", "SAC"] },
];

export const FAQS = [
  {
    q: "What makes SAP Global ServiceTech different from other SAP partners?",
    a: "We combine 15+ years of pure-SAP focus with frontier Agentic AI and BTP. SAP is all we do — there's no generic IT practice diluting our expertise or delivery quality.",
  },
  {
    q: "How long does an SAP S/4HANA implementation take?",
    a: "A focused line-of-business implementation takes 6–9 months. Full enterprise-wide transformations range from 12–24 months. We use SAP Activate with phased go-lives to reduce risk and deliver value earlier.",
  },
  {
    q: "Do you support cloud, on-premise and hybrid SAP?",
    a: "Yes — RISE with S/4HANA Cloud, private cloud on Azure / AWS / GCP, hybrid landscapes and on-premise. We select the right model based on your regulatory, performance and cost requirements.",
  },
  {
    q: "What is SAP with Agentic AI?",
    a: "Autonomous AI agents operating inside SAP workflows — executing multi-step tasks, making decisions within guardrails and adapting without human intervention. Built on SAP AI Core and Joule for zero-touch operations.",
  },
  {
    q: "Which industries do you specialise in?",
    a: "Oil & Gas, Utilities & Energy and manufacturing are our deepest verticals — with certified IS-U and IS-Oil specialists. Our core capabilities also serve finance, healthcare, retail and public sector globally.",
  },
];

export const CONTACT_INFO = [
  { icon: "phone", label: "Phone", value: "+1 (800) SAP-GLOBAL" },
  { icon: "mail", label: "Email", value: "enterprise@sapglobalservicetech.com" },
  { icon: "pin", label: "Offices", value: "Dubai · London · Houston · Singapore" },
] as const;

export const FOOTER_COLS = [
  {
    title: "Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "S/4HANA Implementation", href: "/solutions#s1" },
      { label: "Analytics & BI", href: "/solutions#s3" },
      { label: "SAP BTP", href: "/solutions#s8" },
      { label: "Agentic AI", href: "/solutions#s9" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Oil & Gas", href: "/services" },
      { label: "Utilities & Energy", href: "/services" },
      { label: "Manufacturing", href: "/services" },
      { label: "Finance", href: "/services" },
      { label: "Public Sector", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why Us", href: "/#why-us" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Solutions", href: "/solutions" },
      { label: "Blog", href: "#" },
    ],
  },
];
