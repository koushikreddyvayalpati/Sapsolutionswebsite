export const SITE = {
  name: "UtilityNexus.ai",
  tagline:
    "SAP delivery and utilities expertise for upgrades, application support, project governance, BTP + AI and operational health.",
};

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Delivery Examples", href: "/case-studies" },
];

export const HERO_TRUST = ["ECC to S/4HANA", "SAP AMS", "BTP + AI", "Utilities & SAP IS-U"];

export const TRUST_BADGES = [
  { icon: "pulse", label: "ECC to S/4HANA Upgrades" },
  { icon: "team", label: "Skilled SAP AMS Resources" },
  { icon: "shield", label: "Implementation Governance" },
  { icon: "pulse", label: "SAP BTP, Joule & Agentic AI" },
  { icon: "bolt", label: "SAP IS-U Expertise" },
  { icon: "check", label: "Free POWERON Health Check" },
] as const;

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
    image: "/sap-s4hana-upgrade-planning.png",
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
    image: "/sap-ams-operations-support.png",
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
    image: "/sap-programme-governance-review.png",
    outcome: "A transparent delivery model with accountable decisions and fewer late surprises.",
    deliverables: [
      "Programme governance, stage gates and decision rights",
      "Scope, budget, schedule, risk and dependency oversight",
      "Vendor coordination, quality assurance and executive reporting",
    ],
  },
  {
    slug: "btp-ai-agents",
    title: "SAP BTP, Joule & Agentic AI",
    description:
      "Design governed SAP BTP extensions, Joule-ready use cases and custom agentic AI workflows that improve utility operations without bypassing SAP controls.",
    chips: ["SAP BTP", "Joule", "AI Agents", "Integration"],
    href: "/solutions#btp-ai",
    image: "/sap-btp-ai-agents-advisory.png",
    outcome:
      "A practical AI roadmap that connects automation ideas to SAP data, process ownership, security and measurable business value.",
    deliverables: [
      "BTP capability and integration architecture review",
      "Joule and custom AI-agent use-case prioritization",
      "Governance model for data access, approvals, auditability and human oversight",
    ],
  },
  {
    slug: "poweron",
    title: "SAP Utilities Health Assessment",
    description:
      "Find stability, process and upgrade risks across SAP IS-U and meter-to-cash before they become production issues.",
    chips: ["Free Health Check", "SAP IS-U", "Meter to Cash", "Risk Roadmap"],
    href: "/services#poweron",
    image: "/sap-utilities-health-assessment.png",
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
  { count: 5, suffix: "", label: "Focused Services", sub: "From AI through operations" },
  { count: 3, suffix: "", label: "Delivery Priorities", sub: "Risk, control and continuity" },
  { count: 1, suffix: "", label: "Utilities Focus", sub: "SAP IS-U and meter to cash" },
];

export const CASE_STUDIES = [
  {
    theme: "h-a",
    image: "/sap-s4hana-upgrade-planning.png",
    tag: "Representative pattern · S/4HANA",
    title: "Multi-entity ECC to S/4HANA transition",
    body: "A representative engagement pattern for organizations that need to assess readiness, govern remediation and control conversion, testing and cutover across business units.",
    metrics: [
      { value: "Assess", label: "Readiness" },
      { value: "Control", label: "Remediation" },
      { value: "Transition", label: "Cutover" },
    ],
  },
  {
    theme: "h-b",
    image: "/sap-utilities-health-assessment.png",
    tag: "Representative pattern · SAP IS-U",
    title: "Utilities landscape health and stabilization",
    body: "A representative POWERON assessment covering meter-to-cash integrity, billing exceptions, interfaces, custom programs, operational controls and support dependencies.",
    metrics: [
      { value: "Review", label: "Operations" },
      { value: "Prioritize", label: "Risk" },
      { value: "Plan", label: "Improvement" },
    ],
  },
  {
    theme: "h-c",
    image: "/sap-programme-governance-review.png",
    tag: "Representative pattern · Governance",
    title: "Independent SAP programme governance",
    body: "A representative governance model for making scope, budget, schedule, architecture, vendor responsibilities and quality decisions visible throughout implementation.",
    metrics: [
      { value: "Define", label: "Decision rights" },
      { value: "Monitor", label: "Delivery risk" },
      { value: "Report", label: "Accountability" },
    ],
  },
  {
    theme: "h-b",
    image: "/sap-btp-ai-agents-advisory.png",
    tag: "Representative pattern · BTP + AI",
    title: "Governed BTP and AI-agent roadmap",
    body: "A representative advisory pattern for utilities that want SAP BTP extensions, Joule-enabled experiences or custom AI agents without creating unmanaged automation risk.",
    metrics: [
      { value: "Map", label: "BTP capabilities" },
      { value: "Prioritize", label: "AI use cases" },
      { value: "Govern", label: "Controls" },
    ],
  },
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
    a: "For utilities, agentic AI should be governed automation around SAP processes. We help identify Joule-ready use cases and custom AI-agent workflows where SAP data access, approvals, auditability and human oversight are clear.",
  },
  {
    q: "Where does SAP BTP fit?",
    a: "SAP BTP is the extension, integration and data foundation for many modern SAP improvements. We use it where utilities need cleaner integrations, side-by-side extensions, analytics or AI-enabled workflows without adding brittle custom code inside the core SAP system.",
  },
  {
    q: "Which industries do you specialise in?",
    a: "Utilities and energy are our primary focus, with particular attention to SAP IS-U, meter-to-cash, S/4HANA transition, application support and programme governance.",
  },
];

export const CONTACT_INFO = [
  { icon: "mail", label: "Email", value: "hello@utilitynexus.ai" },
  { icon: "globe", label: "Website", value: "utilitynexus.ai" },
  { icon: "bolt", label: "Utilities Focus", value: "SAP IS-U · Meter to Cash · S/4HANA · BTP + AI" },
] as const;

export const FOOTER_COLS = [
  {
    title: "Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "ECC to S/4HANA", href: "/solutions#s6" },
      { label: "SAP AMS", href: "/solutions#s4" },
      { label: "Implementation Governance", href: "/solutions#s1" },
      { label: "BTP + AI Agents", href: "/solutions#btp-ai" },
      { label: "Free POWERON Health Check", href: "/services#poweron" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why Us", href: "/#why-us" },
      { label: "Delivery Examples", href: "/case-studies" },
      { label: "Solutions", href: "/solutions" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];
