export const siteConfig = {
  brand: 'SCALAROW',
  email: 'hello@scalarow.com',
  whatsappNumber: '15550192834',
  whatsappDisplay: 'Chat on WhatsApp',
  whatsappUrl:
    'https://wa.me/15550192834?text=Hi%20SCALAROW%2C%20I%27d%20like%20to%20discuss%20a%20project.',
  location: 'Remote-first Studio · Global Delivery',
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'X / Twitter', href: 'https://x.com' },
  ],
};

export const seoRoutes = {
  '/': {
    title: 'SCALAROW — Web, Software, Automation & AI Solutions Agency',
    description:
      'SCALAROW designs and engineers high-performing websites, custom applications, business automation, AI workflows, and digital growth systems.',
  },
  '/about': {
    title: 'About SCALAROW — How We Think, Build & Solve',
    description:
      "Learn about SCALAROW's engineering-first philosophy, mission, and practical approach to building reliable software, automation, and digital systems.",
  },
  '/services': {
    title: 'Services — BUILD, AUTOMATE, GROW | SCALAROW',
    description:
      "Explore SCALAROW's six core capabilities across BUILD (Web, App, Software), AUTOMATE (Business Automation, AI), and GROW (Digital Growth & Optimization).",
  },
  '/services/web-development': {
    title: 'Web Development Services — Fast, Accessible Websites | SCALAROW',
    description:
      'Custom marketing sites, web platforms, and headless storefronts engineered for speed, accessibility, and clean search architecture.',
  },
  '/services/application-development': {
    title: 'Application Development — Web & Mobile Apps | SCALAROW',
    description:
      'Customer portals, SaaS products, and cross-platform mobile applications designed for real-world usability and reliable scale.',
  },
  '/services/software-development': {
    title: 'Custom Software Development — Internal Tools & APIs | SCALAROW',
    description:
      'Bespoke backend systems, internal operations tools, and API integrations tailored to how your business actually operates.',
  },
  '/services/business-automation': {
    title: 'Business Automation — Workflow & Ops Systems | SCALAROW',
    description:
      'Eliminate manual data entry and disconnected tools with reliable workflow automation, CRM syncing, and operational pipelines.',
  },
  '/services/ai-solutions': {
    title: 'AI Solutions — Practical AI Workflows & Assistants | SCALAROW',
    description:
      'Practical AI integrations for document processing, internal knowledge retrieval, and workflow triage—built with clear guardrails.',
  },
  '/services/digital-growth': {
    title: 'Digital Growth & Optimization — SEO, Speed & CRO | SCALAROW',
    description:
      'Technical SEO, Core Web Vitals optimization, analytics architecture, and conversion improvements grounded in real user behavior.',
  },
  '/work': {
    title: 'Selected Work — Client Portfolio | SCALAROW',
    description:
      'Explore selected digital experiences designed and engineered by SCALAROW, including Hutomate and Bexley LifeScience.',
  },
  '/contact': {
    title: 'Contact SCALAROW — Start a Project or Discovery Call',
    description:
      'Tell us what you are building or trying to streamline. Reach SCALAROW by project form or WhatsApp for a direct, practical conversation.',
  },
  '/exploration/pillars': {
    title: 'Three Pillars Exploration — Build, Automate & Grow | SCALAROW',
    description:
      'Visual and interaction studies exploring overlapping dimensional panels for SCALAROW’s Build, Automate, and Grow pillars.',
  },
};

export const pillars = [
  {
    key: 'BUILD',
    number: '01',
    title: 'Build',
    accent: 'orange',
    summary:
      'Fast, maintainable websites, user-friendly applications, and custom software engineered around your exact workflows.',
    services: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Application Development', href: '/services/application-development' },
      { label: 'Software Development', href: '/services/software-development' },
    ],
  },
  {
    key: 'AUTOMATE',
    number: '02',
    title: 'Automate',
    accent: 'teal',
    summary:
      'Reliable workflow automation and grounded AI tools that eliminate repetitive manual work and connect your stack.',
    services: [
      { label: 'Business Automation', href: '/services/business-automation' },
      { label: 'AI Solutions', href: '/services/ai-solutions' },
    ],
  },
  {
    key: 'GROW',
    number: '03',
    title: 'Grow',
    accent: 'dark',
    summary:
      'Technical SEO, performance optimization, and conversion improvements that turn traffic into qualified opportunities.',
    services: [
      { label: 'Digital Growth & Optimization', href: '/services/digital-growth' },
    ],
  },
];

export const servicesData = [
  {
    id: 'web-development',
    slug: 'web-development',
    pillar: 'BUILD',
    number: '01',
    layoutVariant: 'viewport-blueprint',
    title: 'Web Development',
    shortSummary:
      'Fast, accessible, search-ready websites and web platforms built for clarity and conversion.',
    hero: {
      eyebrow: 'BUILD / WEB DEVELOPMENT',
      headline: 'Websites engineered for speed, clarity, and conversion.',
      subheadline:
        'We design and build custom marketing sites, content platforms, and headless storefronts that load fast and represent your brand with precision.',
    },
    explanation:
      'Your website is often the first real interaction someone has with your business. Off-the-shelf templates tend to feel generic, load slowly, and fight against your content as you grow. We build custom, responsive websites with clean semantic markup, modern frontend architecture, and intuitive content management so your team can publish confidently.',
    problemsSolved: [
      'Slow, bloated template websites that lose visitors before the page finishes loading.',
      'Rigid layouts that make publishing new pages or updating copy a developer bottleneck.',
      'Poor mobile responsiveness and accessibility gaps that alienate users.',
      'Disjointed brand presentation that fails to communicate value clearly.',
    ],
    deliverables: [
      'Custom UI design system and reusable component library',
      'Production frontend codebase (React / Next.js / SSR architecture)',
      'Structured headless CMS schema and editorial templates',
      'Technical metadata, Open Graph, and JSON-LD schema foundation',
      'Launch readiness audit across accessibility and Core Web Vitals',
      'Production deployment, tracking setup, and team handover docs',
    ],
    features: [
      'Sub-second navigation with lean asset and font delivery',
      'WCAG-conscious contrast, semantic landmarks, and keyboard focus',
      'Modular page sections for safe, developer-free publishing',
      'Maintainable codebase free from heavy template or plugin bloat',
    ],
    process: [
      {
        step: '01',
        title: 'Structure & Messaging',
        description:
          'We define site architecture, user journeys, and page hierarchy before visual design begins.',
      },
      {
        step: '02',
        title: 'Interface Design',
        description:
          'We craft a cohesive visual system with responsive layouts across desktop, tablet, and mobile.',
      },
      {
        step: '03',
        title: 'Engineering & CMS',
        description:
          'We build the frontend, connect your CMS, and wire up forms, tracking, and SEO metadata.',
      },
      {
        step: '04',
        title: 'QA & Launch',
        description:
          'We audit performance, accessibility, and cross-browser behavior before going live.',
      },
    ],
    conceptProjectSlugs: ['northstar-commerce-platform', 'meridian-search-conversion'],
    faq: [
      {
        question: 'Will our team be able to edit text and images without a developer?',
        answer:
          'Yes. We pair custom frontends with clean headless CMS workflows so your team can update copy, media, and landing pages safely.',
      },
      {
        question: 'How long does a typical website project take?',
        answer:
          'Most custom marketing websites take 4 to 8 weeks depending on page count, integrations, and content readiness.',
      },
      {
        question: 'Do you handle hosting and deployment?',
        answer:
          'We set up modern, reliable hosting on platforms like Vercel, Cloudflare, or your preferred cloud environment and hand over full ownership.',
      },
    ],
  },
  {
    id: 'application-development',
    slug: 'application-development',
    pillar: 'BUILD',
    number: '02',
    layoutVariant: 'flow-node',
    title: 'Application Development',
    shortSummary:
      'Web and mobile applications designed around real user workflows and reliable scale.',
    hero: {
      eyebrow: 'BUILD / APPLICATION DEVELOPMENT',
      headline: 'Applications built for how people actually work.',
      subheadline:
        'From customer portals and SaaS MVPs to cross-platform mobile apps, we engineer interactive products that feel effortless to use.',
    },
    explanation:
      'Building an application means balancing user experience with solid underlying state, authentication, and data flows. Whether you are launching a new digital product or replacing a clunky customer portal, we handle product design, frontend engineering, backend APIs, and deployment as one unified build.',
    problemsSolved: [
      'Customer or partner portals that feel dated, confusing, and hard to use on mobile.',
      'Early product ideas stuck in slide decks without a clear, buildable MVP scope.',
      'Fragile prototypes that break under real user traffic or complex permissions.',
      'Disconnected web and mobile experiences that duplicate effort.',
    ],
    deliverables: [
      'User flow architecture and interactive screen prototypes',
      'Production web portal or shared mobile application codebase',
      'Authentication, session security, and role-based access control',
      'Normalized database schema and typed backend endpoint layer',
      'Automated integration tests covering critical user journeys',
      'CI/CD release pipeline and production error monitoring',
    ],
    features: [
      'Responsive, app-grade interfaces with clear loading and error states',
      'Offline-capable or real-time sync patterns where workflows demand it',
      'Secure session handling and granular user permissions',
      'Modular architecture ready for iterative feature releases',
    ],
    process: [
      {
        step: '01',
        title: 'Product Scoping',
        description:
          'We separate must-have core workflows from nice-to-haves to define a sharp, achievable release.',
      },
      {
        step: '02',
        title: 'UX & Architecture',
        description:
          'We design key screens alongside the data model and API contracts.',
      },
      {
        step: '03',
        title: 'Iterative Build',
        description:
          'We ship working builds in weekly or bi-weekly increments so you can test real flows early.',
      },
      {
        step: '04',
        title: 'Release & Stabilize',
        description:
          'We run end-to-end verification, deploy to production, and support your initial rollout.',
      },
    ],
    conceptProjectSlugs: ['fieldpulse-operations-app'],
    faq: [
      {
        question: 'Can you help us scope an MVP if we only have an early concept?',
        answer:
          'Yes. We routinely run a focused discovery phase to turn rough product ideas into clear user flows, technical architecture, and a realistic build plan.',
      },
      {
        question: 'Do you build both web apps and mobile apps?',
        answer:
          'Yes. We build browser-based SaaS and portal applications as well as cross-platform mobile apps using React Native.',
      },
      {
        question: 'Who owns the source code and intellectual property?',
        answer:
          'You do. Upon completion, all repositories, designs, and infrastructure configurations belong 100% to your organization.',
      },
    ],
  },
  {
    id: 'software-development',
    slug: 'software-development',
    pillar: 'BUILD',
    number: '03',
    layoutVariant: 'dark-architecture',
    title: 'Software Development',
    shortSummary:
      'Custom backend systems, internal operations tools, and API integrations tailored to your business.',
    hero: {
      eyebrow: 'BUILD / SOFTWARE DEVELOPMENT',
      headline: 'Custom software when off-the-shelf tools fall short.',
      subheadline:
        'We engineer internal platforms, data pipelines, and system integrations built around your exact operational rules.',
    },
    explanation:
      'Every growing business eventually hits the limits of generic SaaS tools—forced into awkward workarounds, manual CSV exports, and brittle spreadsheets. Custom software gives you a single, dependable system shaped around your pricing rules, approvals, inventory, or reporting.',
    problemsSolved: [
      'Critical business processes trapped in fragile, multi-tab spreadsheets.',
      'Paying for bloated enterprise software when you only use a fraction of its features.',
      'Legacy systems that cannot communicate with modern cloud tools or partners.',
      'Lack of audit trails, permissions, or reliable reporting across departments.',
    ],
    deliverables: [
      'Technical architecture specification and relational data model',
      'Role-scoped internal interfaces and administrative workspaces',
      'Event-driven middleware and webhook synchronization layer',
      'Data migration scripts, validation rules, and backup schedules',
      'Permission boundaries, action logging, and audit trails',
      'System runbooks and internal engineering handover training',
    ],
    features: [
      'Clean API design for connecting ERP, CRM, billing, and logistics tools',
      'Predictable performance under heavy data processing',
      'Strict validation and error recovery to protect data integrity',
      'Maintainable codebase structured for long-term internal or agency support',
    ],
    process: [
      {
        step: '01',
        title: 'System Audit',
        description:
          'We map your existing tools, data sources, edge cases, and manual workarounds.',
      },
      {
        step: '02',
        title: 'Architecture Design',
        description:
          'We define database schemas, integration boundaries, and security requirements.',
      },
      {
        step: '03',
        title: 'Core Engineering',
        description:
          'We build the backend services, integrations, and internal interfaces with automated tests.',
      },
      {
        step: '04',
        title: 'Migration & Rollout',
        description:
          'We migrate existing data cleanly, train your team, and monitor early production runs.',
      },
    ],
    conceptProjectSlugs: ['fieldpulse-operations-app', 'ledgerflow-ops-automation'],
    faq: [
      {
        question: 'Can custom software integrate with our existing ERP or accounting tools?',
        answer:
          'Yes. As long as your existing tools offer APIs, webhooks, or structured exports, we can build reliable two-way or one-way integrations.',
      },
      {
        question: 'Do we have to replace everything at once?',
        answer:
          'No. We prefer phased rollouts—replacing the highest-friction bottleneck first while keeping the rest of your operations running smoothly.',
      },
      {
        question: 'How do you ensure the software stays maintainable?',
        answer:
          'We use widely adopted languages and frameworks, write clear documentation, and avoid obscure dependencies.',
      },
    ],
  },
  {
    id: 'business-automation',
    slug: 'business-automation',
    pillar: 'AUTOMATE',
    number: '04',
    layoutVariant: 'pipeline-flow',
    title: 'Business Automation',
    shortSummary:
      'Reliable workflow automation that connects your tools and eliminates repetitive manual tasks.',
    hero: {
      eyebrow: 'AUTOMATE / BUSINESS AUTOMATION',
      headline: 'Stop doing manually what software should handle.',
      subheadline:
        'We connect your CRM, forms, billing, and internal tools into dependable workflows that run automatically in the background.',
    },
    explanation:
      'Manual copy-pasting between inboxes, spreadsheets, and CRMs slows teams down and introduces costly human errors. We design resilient automations—using workflow engines, custom webhooks, and APIs—with proper error handling and alerts so processes keep moving even when edge cases happen.',
    problemsSolved: [
      'Hours lost each week copying lead, order, or invoice data between tools.',
      'Slow lead follow-up because enquiries sit unrouted in a shared inbox.',
      'Inconsistent onboarding steps across sales, operations, and finance.',
      'Brittle no-code zaps that silently fail without anyone noticing.',
    ],
    deliverables: [
      'Operational workflow map and bottleneck prioritization',
      'Event-driven orchestrations spanning CRM, inbox, chat, and billing',
      'Idempotent webhook receivers and field transformation middleware',
      'Retry queues, dead-letter recovery, and instant failure alerting',
      'Workflow runbooks documenting triggers, mappings, and fallbacks',
    ],
    features: [
      'Idempotent event keys preventing duplicate records on retries',
      'Strict payload validation before writing to billing or CRM tools',
      'Automated dead-letter alerts so no run fails silently',
      'Modular execution logs for rapid troubleshooting and audits',
    ],
    process: [
      {
        step: '01',
        title: 'Workflow Mapping',
        description:
          'We shadow or document the exact manual steps your team performs today.',
      },
      {
        step: '02',
        title: 'Standardize & Simplify',
        description:
          'We clean up inconsistent inputs and edge cases before automating them.',
      },
      {
        step: '03',
        title: 'Build & Guardrail',
        description:
          'We implement the workflows with retries, validation, and failure alerts.',
      },
      {
        step: '04',
        title: 'Test & Handover',
        description:
          'We test with real edge-case payloads and deliver clear operational documentation.',
      },
    ],
    conceptProjectSlugs: ['ledgerflow-ops-automation'],
    faq: [
      {
        question: 'Do you use no-code tools or custom code for automation?',
        answer:
          'Both. We use platforms like n8n or Make where they fit best, and write custom TypeScript or Python services when workflows need complex logic, higher reliability, or lower per-run costs.',
      },
      {
        question: 'What happens if a third-party API goes down?',
        answer:
          'We build retry queues, dead-letter logging, and instant alerts so failed runs are caught and replayed rather than lost.',
      },
      {
        question: 'How quickly can we see results from automation?',
        answer:
          'Focused workflow automations typically go from audit to live production within 1 to 3 weeks.',
      },
    ],
  },
  {
    id: 'ai-solutions',
    slug: 'ai-solutions',
    pillar: 'AUTOMATE',
    number: '05',
    layoutVariant: 'citation-matrix',
    title: 'AI Solutions',
    shortSummary:
      'Practical AI assistants, document processing, and intelligent triage built with clear guardrails.',
    hero: {
      eyebrow: 'AUTOMATE / AI SOLUTIONS',
      headline: 'Practical AI that earns its place in your workflow.',
      subheadline:
        'We build focused AI tools for document extraction, internal knowledge search, and request triage—grounded in your actual data.',
    },
    explanation:
      'AI is most valuable when it solves a concrete bottleneck, not when it is bolted onto a product as a novelty. We design AI workflows that summarize dense documents, extract structured fields from PDFs and emails, answer internal questions from verified company docs, and route requests—always with human review where stakes require it.',
    problemsSolved: [
      'Teams spending hours searching through scattered SOPs, contracts, and PDFs.',
      'Manual data extraction from unstructured emails, forms, and vendor documents.',
      'High support or intake volume that needs faster categorization and draft responses.',
      'Concerns around data privacy, hallucinations, and uncontrolled AI outputs.',
    ],
    deliverables: [
      'AI feasibility and ROI assessment for your specific use case',
      'Private RAG (Retrieval-Augmented Generation) knowledge assistant',
      'Structured document parsing and classification pipelines',
      'Prompt engineering, evaluation test sets, and output guardrails',
      'Human-in-the-loop review interfaces and usage logging',
    ],
    features: [
      'Source citations on answers so staff can verify every response',
      'Strict schema validation for extracted JSON/structured data',
      'Role-aware access controls so users only retrieve authorized docs',
      "Model-agnostic architecture so you aren't locked into one provider",
    ],
    process: [
      {
        step: '01',
        title: 'Use-Case Qualification',
        description:
          'We identify where AI genuinely outperforms deterministic rules—and where simple code is better.',
      },
      {
        step: '02',
        title: 'Data & Guardrail Design',
        description:
          'We structure your source documents, access rules, and output schemas.',
      },
      {
        step: '03',
        title: 'Build & Evaluate',
        description:
          'We test accuracy against real historical examples before putting anything in front of users.',
      },
      {
        step: '04',
        title: 'Deploy & Monitor',
        description:
          'We ship with cost limits, latency tracking, and feedback loops for continuous refinement.',
      },
    ],
    conceptProjectSlugs: ['documind-knowledge-assistant'],
    faq: [
      {
        question: 'Will our company data be used to train public AI models?',
        answer:
          'No. We configure enterprise API endpoints with zero-data-retention policies or private deployments so your documents remain yours.',
      },
      {
        question: 'How do you prevent AI from making things up?',
        answer:
          'We ground responses strictly in retrieved source documents, enforce structured output schemas, require citations, and build human-review steps for sensitive actions.',
      },
      {
        question: 'Do we need a massive dataset to start?',
        answer:
          'Not at all. Most practical internal assistants and document pipelines work well with existing SOPs, PDFs, and historical tickets.',
      },
    ],
  },
  {
    id: 'digital-growth',
    slug: 'digital-growth',
    pillar: 'GROW',
    number: '06',
    layoutVariant: 'audit-editorial',
    title: 'Digital Growth & Optimization',
    shortSummary:
      'Technical SEO, site performance, analytics, and conversion optimization that compound over time.',
    hero: {
      eyebrow: 'GROW / DIGITAL GROWTH & OPTIMIZATION',
      headline: 'Turn existing traffic and search demand into real pipeline.',
      subheadline:
        'We fix technical SEO blockers, speed up slow pages, clean up analytics, and refine conversion paths based on how visitors actually behave.',
    },
    explanation:
      'Driving traffic to a slow, confusing, or poorly indexed website wastes acquisition budget. We take an engineering-led approach to growth: fixing crawlability and structured data, improving Core Web Vitals, setting up trustworthy event tracking, and sharpening landing pages so more visitors take action.',
    problemsSolved: [
      'Strong products or services buried in search results due to technical SEO issues.',
      'High bounce rates caused by sluggish page loads and mobile layout shifts.',
      'Broken or incomplete analytics that leave you guessing which channels work.',
      'Landing pages that get clicks but fail to generate enquiries or sign-ups.',
    ],
    deliverables: [
      'Comprehensive technical SEO and Core Web Vitals audit',
      'Search architecture, metadata, canonicals, and schema implementation',
      'Clean analytics and conversion event tracking (GA4 / privacy-first alternatives)',
      'Landing page UX and copy refinements for key conversion funnels',
      'Prioritized optimization roadmap based on impact vs. effort',
    ],
    features: [
      'Semantic HTML, structured data (JSON-LD), and clean URL taxonomy',
      'Image, font, and script optimization for faster LCP and INP',
      'Clear, friction-free enquiry and checkout flows',
      'Transparent reporting focused on qualified leads and conversions, not vanity metrics',
    ],
    process: [
      {
        step: '01',
        title: 'Audit & Baseline',
        description:
          'We inspect search indexing, page speed, tracking accuracy, and user drop-off points.',
      },
      {
        step: '02',
        title: 'Fix Foundations',
        description:
          'We resolve technical SEO errors, speed bottlenecks, and broken conversion tracking.',
      },
      {
        step: '03',
        title: 'Optimize Funnels',
        description:
          'We refine page hierarchy, messaging clarity, and form friction on high-intent pages.',
      },
      {
        step: '04',
        title: 'Measure & Iterate',
        description:
          'We review real post-change performance and prioritize the next highest-leverage improvements.',
      },
    ],
    conceptProjectSlugs: ['meridian-search-conversion'],
    faq: [
      {
        question: 'Can you optimize our existing site without a full rebuild?',
        answer:
          "In many cases, yes. We can fix metadata, structured data, asset loading, and landing page layouts directly on your current stack—and we'll tell you honestly if the underlying platform is holding you back.",
      },
      {
        question: 'Do you run paid ad campaigns?',
        answer:
          'Our focus is technical SEO, performance, analytics, and conversion rate optimization—ensuring that every visitor you earn organically or through ads lands on a fast, high-converting experience.',
      },
      {
        question: 'How do you measure success?',
        answer:
          'Through clean conversion tracking, search visibility on target commercial terms, page speed improvements, and enquiry quality.',
      },
    ],
  },
];

export const conceptProjects = [
  {
    slug: 'northstar-commerce-platform',
    label: 'Concept Project',
    isConcept: true,
    title: 'Northstar Supply — Modular B2B & D2C Storefront',
    pillar: 'BUILD',
    serviceSlugs: ['web-development'],
    accent: 'orange',
    summary:
      'A concept headless commerce storefront designed for an industrial hardware supplier serving both retail buyers and trade accounts.',
    challenge:
      'Trade buyers and everyday shoppers have different needs: retail customers want fast product discovery and simple checkout, while trade accounts need tiered pricing, spec sheets, and bulk reordering without calling sales.',
    solution:
      'A unified Next.js storefront backed by a headless catalog and CMS, presenting clean product pages for retail alongside an authenticated trade mode with quick-order tables and downloadable technical PDFs.',
    architecture:
      'Edge-cached product listing and detail pages via Incremental Static Regeneration (ISR), paired with dynamic client-side pricing hydration for logged-in trade accounts and a headless CMS for buying guides.',
    techStack: ['Next.js', 'TypeScript', 'Sanity CMS', 'Shopify Storefront API'],
    deliverables: [
      'Responsive storefront UI & component library',
      'Dual retail / trade pricing presentation',
      'Faceted search & specification filtering',
      'Structured product schema (JSON-LD)',
    ],
  },
  {
    slug: 'fieldpulse-operations-app',
    label: 'Concept Project',
    isConcept: true,
    title: 'FieldPulse — Offline-First Inspection & Dispatch App',
    pillar: 'BUILD',
    serviceSlugs: ['application-development', 'software-development'],
    accent: 'teal',
    summary:
      'A concept mobile and web operations platform for field technicians completing site inspections in low-connectivity environments.',
    challenge:
      'Field teams working in basements, warehouses, or remote sites frequently lose mobile signal—causing lost form entries, delayed photo uploads, and manual re-entry back at the office.',
    solution:
      'A cross-platform mobile app with local-first storage that captures checklists, signatures, and compressed photos offline, then syncs automatically to a central web dispatch dashboard once connectivity returns.',
    architecture:
      'React Native mobile client with SQLite local persistence and a background sync queue, communicating with a Node.js/PostgreSQL API that generates PDF inspection reports and triggers client notifications.',
    techStack: ['React Native', 'TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'SQLite'],
    deliverables: [
      'Offline-capable mobile inspection app',
      'Web dispatch & scheduling dashboard',
      'Conflict-safe background sync engine',
      'Automated PDF report generation',
    ],
  },
  {
    slug: 'ledgerflow-ops-automation',
    label: 'Concept Project',
    isConcept: true,
    title: 'LedgerFlow — Automated Intake, CRM & Billing Pipeline',
    pillar: 'AUTOMATE',
    serviceSlugs: ['business-automation', 'software-development'],
    accent: 'aqua',
    summary:
      'A concept operational automation pipeline connecting website enquiries, project setup, and invoicing for a multi-service B2B firm.',
    challenge:
      'New client onboarding required staff to manually copy form submissions into a CRM, create shared project folders, set up billing records, and notify delivery leads—leading to delays and missed details.',
    solution:
      'An event-driven automation workflow triggered upon proposal approval that provisions CRM deals, creates standardized project workspaces, generates draft invoices, and posts structured summaries to internal channels.',
    architecture:
      'Webhook-driven orchestration using n8n and custom TypeScript middleware with idempotency keys, exponential-backoff retries, and Slack alerting for any failed API step.',
    techStack: ['n8n', 'TypeScript', 'REST Webhooks', 'HubSpot API', 'Stripe API'],
    deliverables: [
      'End-to-end lead-to-onboarding workflow',
      'Idempotent webhook middleware',
      'Automated invoice draft & status sync',
      'Error monitoring & retry runbook',
    ],
  },
  {
    slug: 'documind-knowledge-assistant',
    label: 'Concept Project',
    isConcept: true,
    title: 'DocuMind — Private SOP & Document Triage Assistant',
    pillar: 'AUTOMATE',
    serviceSlugs: ['ai-solutions'],
    accent: 'orange',
    summary:
      'A concept internal AI assistant enabling operations staff to query company SOPs, vendor agreements, and technical manuals with source citations.',
    challenge:
      'Important operational answers were buried across hundreds of PDFs and internal docs, forcing new hires to interrupt senior staff for routine policy and troubleshooting questions.',
    solution:
      'A private retrieval-augmented generation (RAG) workspace that indexes approved internal documents, answers natural-language questions with direct page citations, and extracts structured summaries from incoming vendor PDFs.',
    architecture:
      'Document ingestion pipeline with semantic chunking, pgvector embeddings in PostgreSQL, role-based document filtering, and strict citation-grounded prompting with zero-retention LLM APIs.',
    techStack: ['React', 'Python (FastAPI)', 'PostgreSQL + pgvector', 'Enterprise LLM API'],
    deliverables: [
      'Document ingestion & chunking pipeline',
      'Citation-backed internal Q&A interface',
      'Structured PDF field extraction workflow',
      'Evaluation suite for answer accuracy',
    ],
  },
  {
    slug: 'meridian-search-conversion',
    label: 'Concept Project',
    isConcept: true,
    title: 'Meridian Advisory — Technical SEO & Funnel Rebuild',
    pillar: 'GROW',
    serviceSlugs: ['digital-growth', 'web-development'],
    accent: 'teal',
    summary:
      'A concept technical SEO, performance, and conversion overhaul for a B2B consulting firm struggling with slow pages and low enquiry rates.',
    challenge:
      'The existing site suffered from heavy client-side scripts, duplicate service URLs, unclear value propositions, and a multi-page contact form that caused high mobile drop-off.',
    solution:
      'A streamlined information architecture with dedicated high-intent service pages, server-rendered markup, clean schema, and a focused single-step enquiry flow paired with clean event tracking.',
    architecture:
      'Static/SSR page rendering, strict font and image preloading, automated XML sitemaps and canonical tags, and privacy-respecting conversion event tracking.',
    techStack: ['Next.js', 'TypeScript', 'JSON-LD Schema', 'Analytics', 'Cloudflare'],
    deliverables: [
      'Technical SEO & Core Web Vitals remediation',
      'Restructured service & landing page copy',
      'Conversion-focused enquiry flow',
      'Clean analytics & goal attribution setup',
    ],
  },
];

export const homeContent = {
  hero: {
    eyebrow: 'CREATIVE TECHNOLOGY STUDIO',
    headline: "Building What's Next.",
    subheadline:
      'We design and engineer fast websites, custom software, and intelligent automation systems that help growing teams operate without friction.',
    primaryCta: { label: 'Explore Our Work', href: '/work' },
    secondaryCta: { label: "Let's Talk", href: '/contact' },
  },
  intro: {
    eyebrow: '01 / THE STUDIO',
    headline: 'Digital systems built to work in the real world.',
    body: 'Most businesses outgrow their tools long before they outgrow their ambition. Disconnected spreadsheets, slow websites, and rigid off-the-shelf software quietly drain time every day. SCALAROW brings design, software engineering, and automation under one roof so your digital foundation supports where you are going next.',
    highlights: [
      { label: 'Core Focus', value: 'Build · Automate · Grow' },
      { label: 'Delivery', value: 'Design + Engineering Unified' },
      { label: 'Standard', value: 'Accessible & Performance-First' },
    ],
  },
  approach: {
    eyebrow: '05 / OUR APPROACH',
    headline: 'Clear scope. Clean execution.',
    subheadline:
      'How we take digital challenges from ambiguity to dependable production.',
    steps: [
      {
        step: '01',
        title: 'Understand the bottleneck',
        description:
          'We start with your actual operations, users, and constraints—not a preset template.',
      },
      {
        step: '02',
        title: 'Architect for longevity',
        description:
          'We choose proven, maintainable technologies that your team can live with and expand over time.',
      },
      {
        step: '03',
        title: 'Build in visible milestones',
        description:
          'You see working progress early and often, with direct communication and no black-box surprises.',
      },
      {
        step: '04',
        title: 'Launch, measure, refine',
        description:
          'Shipping is the starting line. We verify performance, tracking, and reliability in production.',
      },
    ],
  },
  whyWorkWithUs: {
    eyebrow: '06 / WHY SCALAROW',
    headline: 'Built for clarity, not complexity.',
    quote:
      'Good technology should feel quiet. When your website loads instantly, your app feels intuitive, and your workflows run without supervision, your team can focus on the work that matters.',
    points: [
      {
        title: 'Engineering and design together',
        description:
          'Visual polish and technical architecture are planned side by side, so nothing gets lost between mockup and code.',
      },
      {
        title: 'No unnecessary bloat',
        description:
          "We don't sell oversized retainers or complex tools when a simpler, cleaner solution solves the problem.",
      },
      {
        title: 'Automation-first mindset',
        description:
          'Every website, app, or system we build considers how data flows behind the scenes to save your team time.',
      },
      {
        title: 'Direct, transparent collaboration',
        description:
          'You work directly with the people designing and building your product—clear timelines, honest trade-offs.',
      },
    ],
  },
  enquiryCta: {
    eyebrow: 'READY WHEN YOU ARE',
    headline: 'Have a project, bottleneck, or idea in mind?',
    body: "Tell us what you're trying to build or simplify. We'll respond with a clear, honest perspective on scope, timeline, and next steps.",
    primaryCta: { label: "Let's Talk", href: '/contact' },
    secondaryCta: { label: 'View Concept Projects', href: '/work' },
  },
};

export const aboutContent = {
  hero: {
    eyebrow: 'ABOUT SCALAROW',
    headline: 'Practical engineering for ambitious teams.',
    subheadline:
      'We are a digital solutions studio focused on building software, websites, and automated systems that hold up under real-world use.',
  },
  intro: {
    headline: 'Why SCALAROW exists',
    body: 'Too many digital projects fail in the gap between strategy decks and working software. Businesses end up with websites that look fine but convert poorly, or internal tools patched together from fragile workarounds. SCALAROW bridges that gap by pairing thoughtful interface design with disciplined engineering and practical automation.',
  },
  philosophy: {
    eyebrow: 'OUR PHILOSOPHY',
    headline: 'Simple on the surface. Solid underneath.',
    body: 'Good technology should feel quiet. When a website loads instantly, an application feels intuitive, or an automated workflow runs without supervision, your team gets to focus on the work that actually matters. We favor clear architecture, readable code, and measurable utility over passing trends.',
  },
  missionVision: {
    mission: {
      label: 'Our Mission',
      text: 'To help growing organizations replace digital friction with fast, reliable, and thoughtfully engineered web, software, and automation systems.',
    },
    vision: {
      label: 'Our Vision',
      text: 'A digital landscape where businesses of any size can operate with the technical clarity and speed once reserved for large engineering teams.',
    },
  },
  approachToChallenges: {
    eyebrow: 'PROBLEM SOLVING',
    headline: 'How we approach digital challenges',
    points: [
      {
        title: 'Diagnose before prescribing',
        description:
          'Before writing a line of code, we map where time, leads, or data are actually being lost.',
      },
      {
        title: 'Right-sized technology',
        description:
          'We match the stack to the problem—whether that means a lean marketing site, a custom web app, or targeted workflow automation.',
      },
      {
        title: 'Built for handoff and growth',
        description:
          "We document what we build, keep dependencies clean, and structure systems so future features don't require a rebuild.",
      },
    ],
  },
  values: {
    eyebrow: 'OUR VALUES',
    headline: 'What guides our work',
    items: [
      {
        id: 'clarity',
        title: 'Clarity over jargon',
        description:
          "We explain technical decisions in plain language so you always understand what you're paying for and why.",
      },
      {
        id: 'craft',
        title: 'Craft in the details',
        description:
          'Performance, accessibility, error handling, and clean typography are not extras—they are the baseline.',
      },
      {
        id: 'scoping',
        title: 'Honest scoping',
        description:
          "If a feature doesn't serve your goal, we will tell you—even if it means a smaller initial build.",
      },
      {
        id: 'reliability',
        title: 'Reliability first',
        description:
          'A system is only as good as its uptime, data integrity, and ease of maintenance.',
      },
    ],
  },
  studioNote: {
    eyebrow: 'STUDIO NOTE',
    headline: 'A note from the studio',
    body: 'SCALAROW was built around a straightforward belief: businesses deserve digital partners who care as much about how something works six months after launch as they do on launch day. Whether we are shipping a flagship website, untangling manual operations with automation, or building custom software from scratch, we treat your system as if we had to run it ourselves.',
  },
};
