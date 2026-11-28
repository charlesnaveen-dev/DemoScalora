export const SERVICES_HERO = {
  eyebrow: 'BUILD · AUTOMATE · GROW',
  lines: ['Digital experiences.', 'Smarter systems.', 'Meaningful growth'],
  description:
    'Websites, software and practical automation built around the way your business works.',
};

export const SERVICES_PILLARS = [
  {
    key: 'BUILD',
    number: '01',
    displayWord: 'BUILD',
    accent: 'orange',
    supportingMessage:
      'From an ambitious idea to something people can actually use.',
    keywords: ['WEB', 'APPLICATIONS', 'SOFTWARE'],
    services: [
      {
        id: 'web-development',
        slug: 'web-development',
        number: '01',
        pillar: 'BUILD',
        pillarOrder: '01 / 03',
        surface: 'white',
        title: 'Web Development',
        visualVariant: 'web-editorial',
        headline: 'Websites engineered for speed, clarity, and conversion.',
        description:
          'Fast, responsive websites and content platforms engineered for clarity, search visibility, and effortless team updates.',
      },
      {
        id: 'application-development',
        slug: 'application-development',
        number: '02',
        pillar: 'BUILD',
        pillarOrder: '02 / 03',
        surface: 'stone',
        title: 'Application Development',
        visualVariant: 'app-portal',
        headline: 'Client portals and apps shaped around real workflows.',
        description:
          'Customer portals, SaaS products, and mobile apps built around real user workflows, permissions, and reliable scale.',
      },
      {
        id: 'software-development',
        slug: 'software-development',
        number: '03',
        pillar: 'BUILD',
        pillarOrder: '03 / 03',
        surface: 'charcoal',
        title: 'Software Development',
        visualVariant: 'software-system',
        headline: 'Bespoke systems when standard tools fall short.',
        description:
          'Custom internal tools, operational dashboards, and API bridges that replace brittle spreadsheets with one dependable system.',
      },
    ],
  },
  {
    key: 'AUTOMATE',
    number: '02',
    displayWord: 'AUTOMATE',
    accent: 'teal',
    supportingMessage:
      'Less repetitive work. More intelligent ways to move forward.',
    keywords: ['WORKFLOWS', 'AI AGENTS', 'INTEGRATION'],
    services: [
      {
        id: 'business-automation',
        slug: 'business-automation',
        number: '01',
        pillar: 'AUTOMATE',
        pillarOrder: '01 / 02',
        surface: 'white',
        title: 'Workflow Automation',
        visualVariant: 'automation-relay',
        headline: 'Connected operations running reliably in the background.',
        description:
          'Automated pipelines syncing forms, CRM, inbox, and billing—with retry queues and alerts so nothing fails silently.',
      },
      {
        id: 'ai-solutions',
        slug: 'ai-solutions',
        number: '02',
        pillar: 'AUTOMATE',
        pillarOrder: '02 / 02',
        surface: 'aqua',
        title: 'AI Agents',
        visualVariant: 'ai-grounded',
        headline: 'Practical AI grounded in your verified company data.',
        description:
          'Custom AI agents that triage requests, extract document data, and answer grounded in your company knowledge.',
      },
    ],
  },
  {
    key: 'GROW',
    number: '03',
    displayWord: 'GROW',
    accent: 'dark',
    supportingMessage:
      'Make your digital presence work harder and reach further.',
    keywords: ['VISIBILITY', 'DISCOVERY', 'PERFORMANCE'],
    services: [
      {
        id: 'digital-growth',
        slug: 'digital-growth',
        number: '01',
        pillar: 'GROW',
        pillarOrder: '01 / 01',
        surface: 'feature',
        title: 'SEO & Website Optimisation',
        visualVariant: 'growth-momentum',
        headline: 'Turn existing visibility into consistent pipeline.',
        description:
          'Technical SEO architecture, Core Web Vitals speed tuning, clean tracking, and sharper page paths built to convert.',
      },
    ],
  },
];

export const SERVICES_BOTTOM_CTA = {
  eyebrow: 'START A CONVERSATION',
  title: 'Not sure which piece you need first?',
  description:
    'Tell us what is slowing your website or team down. We will recommend the simplest scope that solves it.',
  primaryCta: { label: 'Start a Project', href: '/contact' },
  secondaryCta: { label: 'View Concept Work', href: '/work' },
};
