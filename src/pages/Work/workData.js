import hutomateHomeWebp from '../../assets/work/hutomate-home.webp';
import hutomateHomeJpg from '../../assets/work/hutomate-home.jpg';
import hutomateAgentsWebp from '../../assets/work/hutomate-agents.webp';
import hutomateAgentsJpg from '../../assets/work/hutomate-agents.jpg';
import hutomateCapabilitiesWebp from '../../assets/work/hutomate-capabilities.webp';
import hutomateCapabilitiesJpg from '../../assets/work/hutomate-capabilities.jpg';

import bexleyHomeWebp from '../../assets/work/bexley-home.webp';
import bexleyHomeJpg from '../../assets/work/bexley-home.jpg';
import bexleyDistributionWebp from '../../assets/work/bexley-distribution.webp';
import bexleyDistributionJpg from '../../assets/work/bexley-distribution.jpg';
import bexleyProductsWebp from '../../assets/work/bexley-products.webp';
import bexleyProductsJpg from '../../assets/work/bexley-products.jpg';

export const workHeroContent = {
  label: 'SELECTED WORK / 2026',
  title: "A few things we've built.",
  description:
    "Every project begins with a different challenge. Explore a selection of digital experiences we've designed and developed to help businesses move forward.",
  countLabel: '02 SELECTED PROJECTS',
};

export const workProjects = [
  {
    id: 'hutomate',
    number: '01',
    layout: 'lead',
    accent: 'orange',
    category: 'AI & AUTOMATION',
    title: 'Hutomate',
    description:
      'An intelligent digital experience for an AI and automation-focused brand, presenting its capabilities in AI agents, workflow automation, Voice AI and custom AI solutions.',
    services: ['Website Design', 'Web Development', 'Brand Experience'],
    liveUrl: 'https://hutomate.com',
    domain: 'hutomate.com',
    primaryShot: {
      webp: hutomateHomeWebp,
      fallback: hutomateHomeJpg,
      width: 1024,
      height: 578,
      urlLabel: 'hutomate.com',
      pageLabel: 'Homepage',
      alt: 'Hutomate homepage featuring the AI-Powered. Business-Engineered. hero and automation platform integrations.',
    },
    supportingShots: [
      {
        id: 'hutomate-agents',
        webp: hutomateAgentsWebp,
        fallback: hutomateAgentsJpg,
        width: 1024,
        height: 578,
        urlLabel: 'hutomate.com/ai-agents',
        pageLabel: 'AI Agents',
        caption: '01.1 — AI Agents Page · Autonomous workflows & human-in-the-loop systems',
        alt: 'Hutomate AI Agents page showcasing autonomous software agents and human-in-the-loop business workflows.',
      },
      {
        id: 'hutomate-capabilities',
        webp: hutomateCapabilitiesWebp,
        fallback: hutomateCapabilitiesJpg,
        width: 1024,
        height: 578,
        urlLabel: 'hutomate.com/capabilities',
        pageLabel: 'Capabilities',
        caption: '01.2 — Capabilities Page · AI Agents, Workflow Automation, Voice AI & Custom Solutions',
        alt: 'Hutomate Capabilities overview displaying four structured service pillars: AI Agents, Workflow Automation, Voice AI, and Custom AI Solutions.',
      },
    ],
  },
  {
    id: 'bexley-lifescience',
    number: '02',
    layout: 'split',
    accent: 'teal',
    category: 'HEALTHCARE & PHARMACEUTICALS',
    title: 'Bexley LifeScience',
    description:
      'A professional digital presence for a pharmaceutical distribution business, designed to communicate its product portfolio, distribution capabilities and healthcare-focused operations.',
    services: ['Website Design', 'Web Development'],
    liveUrl: 'https://bexleylifescience.com',
    domain: 'bexleylifescience.com',
    primaryShot: {
      webp: bexleyHomeWebp,
      fallback: bexleyHomeJpg,
      width: 1024,
      height: 578,
      urlLabel: 'bexleylifescience.com',
      pageLabel: 'Homepage',
      alt: 'Bexley LifeScience homepage presenting reliable pharmaceutical distribution across Tamil Nadu.',
    },
    supportingShots: [
      {
        id: 'bexley-distribution',
        webp: bexleyDistributionWebp,
        fallback: bexleyDistributionJpg,
        width: 1024,
        height: 578,
        urlLabel: 'bexleylifescience.com/distribution',
        pageLabel: 'Distribution',
        caption: '02.1 — Distribution Page · Centralized Chennai logistics & statewide healthcare coverage',
        alt: 'Bexley LifeScience Distribution page detailing statewide supply logistics from Chennai across Tamil Nadu.',
      },
      {
        id: 'bexley-products',
        webp: bexleyProductsWebp,
        fallback: bexleyProductsJpg,
        width: 1024,
        height: 578,
        urlLabel: 'bexleylifescience.com/products',
        pageLabel: 'Our Products',
        caption: '02.2 — Products Page · Structured therapeutic formulation catalog for clinical buyers',
        alt: 'Bexley LifeScience Products portfolio displaying certified cardiology formulations.',
      },
    ],
  },
];

export const workClosingContent = {
  eyebrow: 'NEXT STEP',
  title: 'Have something worth building?',
  description: "Let's turn your next idea into something meaningful.",
  ctaLabel: 'Start a Project',
  ctaHref: '/contact',
};
