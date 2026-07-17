export const SITE = {
  name: "UtilityNexus.ai",
  tagline:
    "SAP delivery and utilities expertise for upgrades, application support, project governance and operational health.",
};

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
];

export const HERO_TRUST = ["ECC to S/4HANA", "SAP AMS", "Utilities & SAP IS-U"];

export const TRUST_BADGES = [
  { icon: "pulse", label: "ECC to S/4HANA Upgrades" },
  { icon: "team", label: "Skilled SAP AMS Resources" },
  { icon: "shield", label: "Implementation Governance" },
  { icon: "bolt", label: "SAP IS-U Expertise" },
  { icon: "check", label: "Free POWERON Health Check" },
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
  href: string;
  image: string;
  outcome: string;
  deliverables: string[];
  isNew?: boolean;
}

export const SERVICES: Service[] = [
  {
    slug: "sap-upgrades",
    title: "SAP ECC to S/4HANA Upgrades",
    description:
      "Plan and execute a controlled move from SAP ECC to S/4HANA with clear readiness, data, custom-code and cutover decisions.",
    chips: ["Readiness", "System Conversion", "Data Migration", "Cutover"],
    href: "/solutions#s6",
    image: "/sap-cloud-team.png",
    outcome: "A phased upgrade roadmap that protects business continuity and makes risk visible early.",
    deliverables: [
      "ECC landscape and S/4HANA readiness assessment",
      "Custom-code, integration and data remediation plan",
      "Conversion, testing, cutover and hypercare governance",
    ],
  },
  {
    slug: "sap-ams",
    title: "SAP AMS & Skilled Resources",
    description:
      "Keep SAP stable and responsive with experienced functional, technical and utilities specialists who fit your operating model.",
    chips: ["Production Support", "Enhancements", "Flexible Staffing", "SAP IS-U"],
    href: "/solutions#s4",
    image: "/sap-managed-ops.png",
    outcome: "The right SAP expertise when it is needed, without carrying an oversized permanent support team.",
    deliverables: [
      "Incident, problem and service-request support",
      "Functional and technical resources matched to demand",
      "Minor enhancements, monitoring and knowledge retention",
    ],
  },
  {
    slug: "implementation-governance",
    title: "SAP Implementation Governance",
    description:
      "Independent project governance that keeps SAP implementation scope, decisions, delivery quality, schedule and budget under control.",
    chips: ["PMO", "Scope Control", "Budget", "Quality Gates"],
    href: "/solutions#s1",
    image: "/enterprise-sap-hero.png",
    outcome: "A transparent delivery model with accountable decisions and fewer late surprises.",
    deliverables: [
      "Programme governance, stage gates and decision rights",
      "Scope, budget, schedule, risk and dependency oversight",
      "Vendor coordination, quality assurance and executive reporting",
    ],
  },
  {
    slug: "poweron",
    title: "SAP Utilities Health Assessment",
    description:
      "Find stability, process and upgrade risks across SAP IS-U and meter-to-cash before they become production issues.",
    chips: ["Free Health Check", "SAP IS-U", "Meter to Cash", "Risk Roadmap"],
    href: "/services#poweron",
    image: "/case-utilities.png",
    outcome: "A prioritized, practical improvement roadmap built around utilities operations and SAP best practices.",
    deliverables: [
      "SAP IS-U configuration and meter-to-cash review",
      "Workflow, program, report and enhancement assessment",
      "Risk register, quick wins and upgrade-readiness roadmap",
    ],
    isNew: true,
  },
];

export const POWERON = {
  name: "POWERON",
  eyebrow: "Free SAP Utilities Health Check",
  title: "See what is putting your SAP IS-U landscape at risk.",
  description:
    "POWERON is UtilityNexus.ai's structured health assessment for utilities. It reviews the decisions, workarounds and processing errors that accumulate after go-live, then turns the findings into a prioritized stabilization and modernization plan.",
  areas: [
    "Meter-to-cash process integrity",
    "Billing, invoicing and exception handling",
    "Interfaces, custom programs and reports",
    "Workflows, enhancements and operational controls",
    "Knowledge gaps and support dependencies",
    "Upgrade readiness and remediation priorities",
  ],
} as const;

export const WHY_POINTS = [
  {
    icon: "shield",
    title: "Utilities-First SAP Expertise",
    body: "Deep SAP IS-U and meter-to-cash knowledge connects system decisions to the operational realities of utility service, billing and customer care.",
  },
  {
    icon: "check",
    title: "Practical Delivery Methods",
    body: "Time-tested assessment, governance and support practices keep teams focused on the issues that affect stability, cost and delivery confidence.",
  },
  {
    icon: "team",
    title: "Lean, Skilled Teams",
    body: "Experienced functional and technical specialists are aligned to the work required, reducing unnecessary consulting layers and preserving knowledge.",
  },
  {
    icon: "pulse",
    title: "From Assessment to Operations",
    body: "One partner can assess the landscape, govern implementation, execute upgrades and support the system after go-live.",
  },
] as const;

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
      "UtilityNexus.ai delivered our S/4HANA transformation on time and on budget — something we were told was impossible. Their SAP depth is genuinely unmatched.",
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
    q: "What makes UtilityNexus.ai different from other SAP partners?",
    a: "We combine utilities process knowledge with practical SAP delivery. Our focus is the work that protects outcomes: upgrades, application support, implementation governance and health assessment.",
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
  { icon: "mail", label: "Email", value: "hello@utilitynexus.ai" },
  { icon: "globe", label: "Website", value: "utilitynexus.ai" },
  { icon: "bolt", label: "Utilities Focus", value: "SAP IS-U · Meter to Cash · S/4HANA" },
] as const;

export const FOOTER_COLS = [
  {
    title: "Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "ECC to S/4HANA", href: "/solutions#s6" },
      { label: "SAP AMS", href: "/solutions#s4" },
      { label: "Implementation Governance", href: "/solutions#s1" },
      { label: "Free POWERON Health Check", href: "/services#poweron" },
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
