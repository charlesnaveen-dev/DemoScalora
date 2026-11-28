/**
 * Bespoke Section 01 (Hero), Section 02 (What We Build), and Section 03 (Business Problem Scrollytelling)
 * content for all six individual SCALAROW service pages.
 *
 * Strictly uses verified capabilities and relatable everyday business problems without
 * technical jargon, exaggerated marketing claims, or invented metrics.
 */

export const SERVICE_DETAIL_CONTENT = {
  'web-development': {
    pillarSlug: 'build',
    pillarLabel: 'Build',
    heroVisualVariant: 'web-grid',
    hero: {
      headlineLines: ['Fast, custom websites', 'built for clarity', 'and conversion'],
      description:
        'We design and engineer brand websites, landing pages, and storefronts that load cleanly, rank properly, and stay easy for your team to update.',
    },
    whatWeBuild: {
      eyebrow: '01 / WHAT WE BUILD',
      heading: 'Web experiences built around your business',
      description:
        'Every build pairs considered visual craft with semantic markup, responsive behaviour, and publishing workflows your team controls.',
      items: [
        {
          id: 'business-websites',
          number: '01',
          title: 'Business Websites',
          description:
            'Brand-led company sites structured to explain what you do clearly and guide qualified visitors toward enquiries.',
          visualKey: 'web-business',
          tone: 'teal',
        },
        {
          id: 'landing-pages',
          number: '02',
          title: 'Landing Pages',
          description:
            'Focused service and campaign pages built around clear messaging hierarchy and low-friction enquiry paths.',
          visualKey: 'web-landing',
          tone: 'orange',
        },
        {
          id: 'ecommerce-storefronts',
          number: '03',
          title: 'E-commerce Storefronts',
          description:
            'Custom online stores with fast product discovery, clear pricing tiers, and streamlined checkout flows.',
          visualKey: 'web-ecommerce',
          tone: 'dark',
        },
        {
          id: 'responsive-development',
          number: '04',
          title: 'Responsive Development',
          description:
            'Fluid layouts tested across desktop, tablet, and mobile viewports so navigation and readability hold up everywhere.',
          visualKey: 'web-responsive',
          tone: 'teal',
        },
        {
          id: 'performance-optimisation',
          number: '05',
          title: 'Performance Optimisation',
          description:
            'Lean frontend bundles, image pipelines, and clean script loading engineered for crisp Core Web Vitals.',
          visualKey: 'web-performance',
          tone: 'orange',
        },
        {
          id: 'website-maintenance',
          number: '06',
          title: 'Website Maintenance',
          description:
            'Ongoing dependency care, accessibility reviews, uptime checks, and modular additions as your business evolves.',
          visualKey: 'web-maintenance',
          tone: 'dark',
        },
      ],
    },
    problemStory: {
      eyebrow: '02 / WHERE WEBSITES FALL SHORT',
      openingStatement:
        'Most business websites look fine on launch day—then quietly lose potential customers every week.',
      closingEyebrow: 'THE SCALAROW STANDARD',
      closingStatement:
        'A clear, fast website helps visitors grasp what you offer in seconds and makes getting in touch effortless.',
      closingSubtext:
        'Designed for desktop and mobile readability, simple navigation, and confident everyday enquiries.',
      visualType: 'web',
      problems: [
        {
          id: 'first-impressions',
          number: '01',
          tag: 'FIRST IMPRESSIONS',
          statement: 'Visitors leave when your homepage fails to explain what you offer.',
          highlight: 'fails to explain what you offer',
          impact:
            'If someone lands on your site and cannot quickly see what you do or how you help, they close the tab and move on.',
          visualCaption: 'Vague headline and crowded menu leave visitors unsure where to click',
        },
        {
          id: 'mobile-experience',
          number: '02',
          tag: 'MOBILE EXPERIENCE',
          statement: 'A website that breaks on phones turns ready customers away.',
          highlight: 'breaks on phones',
          impact:
            'Most people check your business from their phone first. Clipped buttons, overlapping text, and awkward scrolling cost enquiries before you know they visited.',
          visualCaption: 'Desktop layout crowding and clipping content on smaller screens',
        },
        {
          id: 'customer-enquiries',
          number: '03',
          tag: 'CUSTOMER ENQUIRIES',
          statement: 'Interested visitors give up when contacting you feels hidden.',
          highlight: 'contacting you feels hidden',
          impact:
            'Buried phone or email details and overly demanding contact forms stop keen prospects right when they are ready to reach out.',
          visualCaption: 'Unclear enquiry path and excessive form fields stalling contact',
        },
        {
          id: 'website-performance',
          number: '04',
          tag: 'WEBSITE SPEED',
          statement: 'Slow-loading pages cost trust before a customer reads a line.',
          highlight: 'cost trust',
          impact:
            'Waiting for heavy pages, blank image slots, and jumping banners to settle makes a capable business feel outdated.',
          visualCaption: 'Delayed page loading and shifting blocks interrupting first impressions',
        },
      ],
    },
  },

  'application-development': {
    pillarSlug: 'build',
    pillarLabel: 'Build',
    heroVisualVariant: 'app-frames',
    hero: {
      headlineLines: ['Web and mobile apps', 'shaped around how', 'people work'],
      description:
        'We design and build iOS, Android, and browser applications with intuitive interfaces, dependable APIs, and clear user permissions.',
    },
    whatWeBuild: {
      eyebrow: '01 / WHAT WE BUILD',
      heading: 'Applications built for daily real-world use',
      description:
        'From customer portals and SaaS products to mobile apps, we unify product design, frontend engineering, and backend data architecture.',
      items: [
        {
          id: 'ios-applications',
          number: '01',
          title: 'iOS Applications',
          description:
            'Smooth iPhone and iPad experiences tuned for native gestures, device ergonomics, and reliable App Store releases.',
          visualKey: 'app-ios',
          tone: 'teal',
        },
        {
          id: 'android-applications',
          number: '02',
          title: 'Android Applications',
          description:
            'Responsive Android apps tested across device profiles and screen densities for dependable field and customer use.',
          visualKey: 'app-android',
          tone: 'orange',
        },
        {
          id: 'cross-platform-apps',
          number: '03',
          title: 'Cross-Platform Apps',
          description:
            'Shared React Native codebases shipping unified features to iOS and Android without maintaining duplicate logic.',
          visualKey: 'app-cross',
          tone: 'dark',
        },
        {
          id: 'ui-ux-design',
          number: '04',
          title: 'Product UI/UX',
          description:
            'Clear user flows, interactive prototypes, and state-complete interfaces covering loading, empty, and error paths.',
          visualKey: 'app-uiux',
          tone: 'teal',
        },
        {
          id: 'api-integration',
          number: '05',
          title: 'API Integration',
          description:
            'Typed REST and GraphQL layers connecting authentication, payments, notifications, and live operational records.',
          visualKey: 'app-api',
          tone: 'orange',
        },
        {
          id: 'app-maintenance',
          number: '06',
          title: 'App Maintenance',
          description:
            'OS compatibility updates, stability monitoring, automated flow testing, and disciplined post-launch iteration.',
          visualKey: 'app-care',
          tone: 'dark',
        },
      ],
    },
    problemStory: {
      eyebrow: '02 / WHERE APPS LOSE USERS',
      openingStatement:
        'Customers and staff only stick with an app or portal when it makes their day noticeably easier.',
      closingEyebrow: 'THE SCALAROW STANDARD',
      closingStatement:
        'Clean interfaces, dependable saving, and consistent behaviour across web and phone keep people moving confidently.',
      closingSubtext:
        'Built around real daily tasks so customers self-serve easily and teams spend less time troubleshooting.',
      visualType: 'app',
      problems: [
        {
          id: 'clunky-portals',
          number: '01',
          tag: 'PORTAL FRUSTRATION',
          statement: 'Customers abandon portals when simple actions take too many steps.',
          highlight: 'take too many steps',
          impact:
            'If checking an order, downloading an invoice, or updating details feels confusing, clients go straight back to phoning and emailing your staff.',
          visualCaption: 'Deep nested menus pushing self-service users back to phone support',
        },
        {
          id: 'mobile-usability',
          number: '02',
          tag: 'MOBILE USABILITY',
          statement: 'Apps squeezed from desktop screens are awkward to tap on the move.',
          highlight: 'awkward to tap on the move',
          impact:
            'Tiny controls, sideways-scrolling tables, and hidden buttons frustrate customers and field workers trying to finish tasks on a phone.',
          visualCaption: 'Desktop table layout overflowing inside a handheld phone screen',
        },
        {
          id: 'lost-progress',
          number: '03',
          tag: 'WEAK SIGNAL',
          statement: 'Losing entered details on patchy signal breaks user trust.',
          highlight: 'breaks user trust',
          impact:
            'When a form freezes or wipes progress during a brief signal drop, people stop relying on the app for important daily updates.',
          visualCaption: 'Connection warning wiping unsaved checklist progress mid-entry',
        },
        {
          id: 'mismatched-devices',
          number: '04',
          tag: 'OUT OF SYNC',
          statement: 'When phone and web apps disagree, nobody trusts the numbers.',
          highlight: 'nobody trusts the numbers',
          impact:
            'Seeing one status on mobile and another in the office portal forces customers and staff to double-check everything manually.',
          visualCaption: 'Web portal and mobile app displaying conflicting account statuses',
        },
      ],
    },
  },

  'software-development': {
    pillarSlug: 'build',
    pillarLabel: 'Build',
    heroVisualVariant: 'software-lattice',
    hero: {
      headlineLines: ['Custom software for', 'operations standard', 'tools cannot fit'],
      description:
        'We engineer bespoke internal platforms, management systems, and API integrations shaped around your exact business rules and data.',
    },
    whatWeBuild: {
      eyebrow: '01 / WHAT WE BUILD',
      heading: 'Dependable systems tailored to your operations',
      description:
        'When off-the-shelf SaaS forces manual workarounds, we build unified software structured around how your teams actually operate.',
      items: [
        {
          id: 'custom-software',
          number: '01',
          title: 'Custom Software',
          description:
            'Bespoke platforms and backend engines encoding your exact pricing logic, approvals, and operational workflows.',
          visualKey: 'sw-custom',
          tone: 'teal',
        },
        {
          id: 'management-systems',
          number: '02',
          title: 'Business Management Systems',
          description:
            'Centralised tools coordinating scheduling, stock, job tracking, and multi-department operations under one roof.',
          visualKey: 'sw-bms',
          tone: 'orange',
        },
        {
          id: 'crm-platforms',
          number: '03',
          title: 'CRM Platforms',
          description:
            'Tailored client, account, and pipeline platforms built around your actual sales and delivery lifecycle.',
          visualKey: 'sw-crm',
          tone: 'dark',
        },
        {
          id: 'dashboards',
          number: '04',
          title: 'Operational Dashboards',
          description:
            'Real-time visibility across queues, bottlenecks, and departmental status without manual CSV exports.',
          visualKey: 'sw-dash',
          tone: 'teal',
        },
        {
          id: 'database-solutions',
          number: '05',
          title: 'Database Solutions',
          description:
            'Clean relational schemas, structured migrations from legacy files, indexing, and automated backup strategies.',
          visualKey: 'sw-db',
          tone: 'orange',
        },
        {
          id: 'system-integration',
          number: '06',
          title: 'System Integration',
          description:
            'Resilient API and webhook bridges linking ERP, billing, logistics, and cloud software cleanly.',
          visualKey: 'sw-integration',
          tone: 'dark',
        },
      ],
    },
    problemStory: {
      eyebrow: '02 / WHERE SYSTEMS HOLD TEAMS BACK',
      openingStatement:
        'Growing businesses rarely run short on effort—they get slowed down by scattered files and rigid tools.',
      closingEyebrow: 'THE SCALAROW STANDARD',
      closingStatement:
        'Custom software brings quoting, scheduling, approvals, and records into one dependable system built for your team.',
      closingSubtext:
        'Clear permissions, accurate numbers across departments, and zero spreadsheet guesswork.',
      visualType: 'software',
      problems: [
        {
          id: 'spreadsheet-mistakes',
          number: '01',
          tag: 'SPREADSHEET RISK',
          statement: 'Running core operations on shared spreadsheets invites costly mistakes.',
          highlight: 'invites costly mistakes',
          impact:
            'One accidental edit, conflicting file copy, or broken formula can throw off quoting, stock, or delivery schedules without anyone noticing.',
          visualCaption: 'Conflicting spreadsheet copies with broken formulas and manual edits',
        },
        {
          id: 'rigid-software',
          number: '02',
          tag: 'GENERIC BLOAT',
          statement: 'Off-the-shelf software makes teams work around screens they never use.',
          highlight: 'work around screens',
          impact:
            'Paying for oversized suites while staff still manage special pricing or approvals in side notes wastes both budget and time.',
          visualCaption: 'Cluttered generic software burying the core daily workflow',
        },
        {
          id: 'disconnected-tools',
          number: '03',
          tag: 'DISCONNECTED TEAMS',
          statement: 'Separate department tools leave teams re-typing the same records.',
          highlight: 're-typing the same records',
          impact:
            'When sales, operations, and accounts cannot see the same live information, hours disappear into exporting files and chasing figures.',
          visualCaption: 'Sales, jobs, and billing screens showing mismatched numbers',
        },
        {
          id: 'missing-visibility',
          number: '04',
          tag: 'CLEAR OVERSIGHT',
          statement: 'Without one live overview, problems only surface after delays happen.',
          highlight: 'surface after delays happen',
          impact:
            'When approvals and job statuses sit buried in email threads and folders, getting a straight answer requires chasing three people.',
          visualCaption: 'Approval status stuck across scattered email threads',
        },
      ],
    },
  },

  'business-automation': {
    pillarSlug: 'automate',
    pillarLabel: 'Automate',
    heroVisualVariant: 'automation-relay',
    hero: {
      headlineLines: ['Connected workflows', 'that run operations', 'without manual work'],
      description:
        'We connect your CRM, inbox, forms, and billing tools into reliable automated pipelines with retry guardrails and full visibility.',
    },
    whatWeBuild: {
      eyebrow: '01 / WHAT WE BUILD',
      heading: 'Practical automation built not to break quietly',
      description:
        'We pair workflow platforms like n8n or Make with custom TypeScript and Python middleware wherever reliability and control demand it.',
      items: [
        {
          id: 'workflow-automation',
          number: '01',
          title: 'Workflow Automation',
          description:
            'Multi-step background pipelines linking web forms, Slack or Teams, internal trackers, and cloud storage cleanly.',
          visualKey: 'auto-workflow',
          tone: 'teal',
        },
        {
          id: 'crm-automation',
          number: '02',
          title: 'CRM Automation',
          description:
            'Automated deal creation, stage transitions, task assignment, and lifecycle updates without manual CRM upkeep.',
          visualKey: 'auto-crm',
          tone: 'orange',
        },
        {
          id: 'lead-management',
          number: '03',
          title: 'Lead Management',
          description:
            'Instant enquiry validation, enrichment, deduplication, and service-based routing to the right team member.',
          visualKey: 'auto-leads',
          tone: 'dark',
        },
        {
          id: 'email-automation',
          number: '04',
          title: 'Email Automation',
          description:
            'Event-driven client onboarding messages, internal status digests, and structured operational notifications.',
          visualKey: 'auto-email',
          tone: 'teal',
        },
        {
          id: 'data-synchronisation',
          number: '05',
          title: 'Data Synchronisation',
          description:
            'Reliable one-way and two-way syncing between CRM, billing, accounting, and project delivery workspaces.',
          visualKey: 'auto-sync',
          tone: 'orange',
        },
        {
          id: 'process-automation',
          number: '06',
          title: 'Process Automation',
          description:
            'Automated proposal-to-invoice drafting, folder provisioning, and approval handoffs across finance and ops.',
          visualKey: 'auto-process',
          tone: 'dark',
        },
      ],
    },
    problemStory: {
      eyebrow: '02 / WHERE TIME QUIETLY DISAPPEARS',
      openingStatement:
        'Repetitive manual admin rarely feels like an emergency—yet it drains the best hours of every week.',
      closingEyebrow: 'THE SCALAROW STANDARD',
      closingStatement:
        'Reliable automation keeps your tools updated automatically and alerts your team right away if anything needs attention.',
      closingSubtext:
        'Faster replies, consistent client onboarding, and hours freed for meaningful work.',
      visualType: 'automation',
      problems: [
        {
          id: 'manual-copying',
          number: '01',
          tag: 'REPETITIVE ADMIN',
          statement: 'Your staff waste hours copying identical details across four apps.',
          highlight: 'copying identical details',
          impact:
            'Typing new enquiries by hand from email into spreadsheets, CRM, and billing slows turnaround and introduces easy-to-miss typos.',
          visualCaption: 'Customer details manually copied across inbox, sheet, CRM, and invoice',
        },
        {
          id: 'missed-followups',
          number: '02',
          tag: 'LEAD FOLLOW-UP',
          statement: 'Fresh enquiries cool down when nobody picks them up in time.',
          highlight: 'nobody picks them up',
          impact:
            'Without instant routing and follow-up reminders, good prospects wait unread in a shared inbox while competitors respond first.',
          visualCaption: 'Shared inbox showing unassigned customer enquiries sitting unread',
        },
        {
          id: 'uneven-onboarding',
          number: '03',
          tag: 'CLIENT ONBOARDING',
          statement: 'Important client steps get missed when handoffs rely on memory.',
          highlight: 'rely on memory',
          impact:
            'Forgetting a welcome email, project folder, or deposit invoice leaves new customers waiting right after they agree to work with you.',
          visualCaption: 'Post-sale onboarding checklist showing missed welcome and billing steps',
        },
        {
          id: 'silent-breaks',
          number: '04',
          tag: 'SILENT FAILURES',
          statement: 'Patchwork automations fail quietly without warning your team.',
          highlight: 'fail quietly',
          impact:
            'A minor hiccup between two connected apps can drop incoming leads or orders for days before anyone realises something broke.',
          visualCaption: 'Failed background sync dropping customer orders with zero alert',
        },
      ],
    },
  },

  'ai-solutions': {
    pillarSlug: 'automate',
    pillarLabel: 'Automate',
    heroVisualVariant: 'ai-prism',
    hero: {
      headlineLines: ['Practical AI systems', 'grounded in your', 'verified business data'],
      description:
        'We build focused AI agents, voice assistants, and document pipelines with strict schema guardrails, citations, and human review.',
    },
    whatWeBuild: {
      eyebrow: '01 / WHAT WE BUILD',
      heading: 'Focused AI built with real operational guardrails',
      description:
        'Never novelty wrappers—we build practical AI tools anchored in your documents, structured validation, and access controls.',
      items: [
        {
          id: 'ai-agents',
          number: '01',
          title: 'AI Agents',
          description:
            'Bounded workflow agents that triage incoming requests, verify context, and execute approved tool actions safely.',
          visualKey: 'ai-agents',
          tone: 'teal',
        },
        {
          id: 'voice-ai',
          number: '02',
          title: 'Voice AI',
          description:
            'Responsive voice workflows handling appointment triage, caller intake qualification, and structured call summaries.',
          visualKey: 'ai-voice',
          tone: 'orange',
        },
        {
          id: 'ai-assistants',
          number: '03',
          title: 'AI Assistants',
          description:
            'Private RAG workspaces enabling staff to query SOPs, vendor policies, and technical manuals with source citations.',
          visualKey: 'ai-assistants',
          tone: 'dark',
        },
        {
          id: 'intelligent-chatbots',
          number: '04',
          title: 'Intelligent Chatbots',
          description:
            'Grounded customer-facing assistants that answer verified product questions and hand off cleanly to human teams.',
          visualKey: 'ai-chatbots',
          tone: 'teal',
        },
        {
          id: 'ai-integration',
          number: '05',
          title: 'AI Integration',
          description:
            'Document parsing, email classification, and structured JSON extraction embedded directly into your existing stack.',
          visualKey: 'ai-integration',
          tone: 'orange',
        },
        {
          id: 'custom-ai-solutions',
          number: '06',
          title: 'Custom AI Solutions',
          description:
            'Tailored retrieval pipelines, evaluation harnesses, cost guardrails, and human-in-the-loop approval interfaces.',
          visualKey: 'ai-custom',
          tone: 'dark',
        },
      ],
    },
    problemStory: {
      eyebrow: '02 / WHERE TEAMS GET BOGGED DOWN',
      openingStatement:
        'Your team should not spend every week repeating basic answers or reading long attachments by hand.',
      closingEyebrow: 'THE SCALAROW STANDARD',
      closingStatement:
        'Practical AI answers strictly from your approved business facts, sorts routine intake cleanly, and leaves your team in charge.',
      closingSubtext:
        'Verified source links on every reply, private data handling, and human review where judgement counts.',
      visualType: 'ai',
      problems: [
        {
          id: 'repetitive-enquiries',
          number: '01',
          tag: 'CUSTOMER SUPPORT',
          statement: 'Routine questions consume hours your team needs for real client care.',
          highlight: 'consume hours',
          impact:
            'Answering the same questions about pricing, hours, or document steps slows down response times for complex enquiries that genuinely need people.',
          visualCaption: 'Support queue filled with repeated everyday questions burying urgent tickets',
        },
        {
          id: 'buried-answers',
          number: '02',
          tag: 'COMPANY KNOWLEDGE',
          statement: 'Staff lose time searching folders, PDFs, and old messages for rules.',
          highlight: 'searching folders, PDFs',
          impact:
            'When guides and pricing rules live across scattered files, team members interrupt colleagues just to confirm simple policy details.',
          visualCaption: 'Shared folder search turning up conflicting document versions',
        },
        {
          id: 'document-backlogs',
          number: '03',
          tag: 'DOCUMENT INTAKE',
          statement: 'Pulling details from incoming forms and vendor PDFs creates backlogs.',
          highlight: 'creates backlogs',
          impact:
            'Reading long emails and attachments line by line to type key figures into your system slows quoting and customer onboarding.',
          visualCaption: 'Incoming PDF quotes waiting for manual line-by-line entry',
        },
        {
          id: 'unchecked-ai',
          number: '04',
          tag: 'ACCURACY & TRUST',
          statement: 'Generic chatbots make confident guesses outside your real policies.',
          highlight: 'make confident guesses',
          impact:
            'Unchecked AI tools that invent timelines or terms create avoidable risk when placed in front of paying customers.',
          visualCaption: 'Generic chat response stating an unverified return policy',
        },
      ],
    },
  },

  'digital-growth': {
    pillarSlug: 'grow',
    pillarLabel: 'Grow',
    heroVisualVariant: 'growth-axis',
    hero: {
      headlineLines: ['Search visibility', 'and site performance', 'built to compound'],
      description:
        'We resolve technical SEO blockers, speed up slow pages, clean up analytics, and refine user paths so existing traffic turns into pipeline.',
    },
    whatWeBuild: {
      eyebrow: '01 / WHAT WE BUILD',
      heading: 'Engineering-led growth foundations that compound',
      description:
        'Rather than temporary tricks, we fix the technical architecture, page speed, measurement, and conversion clarity underneath your funnel.',
      items: [
        {
          id: 'technical-seo',
          number: '01',
          title: 'Technical SEO',
          description:
            'Clean crawl architecture, XML sitemaps, canonical tags, redirect hygiene, and structured JSON-LD schema.',
          visualKey: 'grow-techseo',
          tone: 'teal',
        },
        {
          id: 'onpage-seo',
          number: '02',
          title: 'On-Page SEO',
          description:
            'Semantic heading structure, clear internal linking, clean metadata, and search-aligned service page architecture.',
          visualKey: 'grow-onpage',
          tone: 'orange',
        },
        {
          id: 'search-visibility',
          number: '03',
          title: 'Search Visibility',
          description:
            'Dedicated landing architecture built around real commercial buyer intent without duplicate or thin pages.',
          visualKey: 'grow-visibility',
          tone: 'dark',
        },
        {
          id: 'performance-optimisation-growth',
          number: '04',
          title: 'Performance Optimisation',
          description:
            'Core Web Vitals engineering across LCP, INP, and CLS—trimming render-blocking scripts, fonts, and heavy media.',
          visualKey: 'grow-perf',
          tone: 'teal',
        },
        {
          id: 'conversion-optimisation',
          number: '05',
          title: 'Conversion Optimisation',
          description:
            'Clearer value hierarchy, purposeful call-to-action placement, and low-friction enquiry forms shaped by real user behaviour.',
          visualKey: 'grow-cro',
          tone: 'orange',
        },
        {
          id: 'analytics',
          number: '06',
          title: 'Analytics & Attribution',
          description:
            'Trustworthy conversion event tracking and clean reporting grounded in real actions rather than vanity impressions.',
          visualKey: 'grow-analytics',
          tone: 'dark',
        },
      ],
    },
    problemStory: {
      eyebrow: '02 / WHY TRAFFIC DOESN’T CONVERT',
      openingStatement:
        'Even strong businesses stay invisible—or lose hard-earned visits—when search clarity and page flow fall behind.',
      closingEyebrow: 'THE SCALAROW STANDARD',
      closingStatement:
        'Clear search structure, fast pages, honest tracking, and focused landing paths turn existing demand into steady enquiries.',
      closingSubtext:
        'Measured by qualified search visibility and real enquiries rather than vanity clicks.',
      visualType: 'growth',
      problems: [
        {
          id: 'low-visibility',
          number: '01',
          tag: 'SEARCH VISIBILITY',
          statement: 'Buyers search for what you do and find competitors first.',
          highlight: 'find competitors first',
          impact:
            'Unclear page titles, missing service pages, and messy site structure stop search engines from matching your business to high-intent searches.',
          visualCaption: 'Search results placing competitors above an unclear site listing',
        },
        {
          id: 'bouncing-visits',
          number: '02',
          tag: 'FIRST-CLICK DROP-OFF',
          statement: 'Slow, cluttered landing pages waste clicks before visitors read.',
          highlight: 'waste clicks',
          impact:
            'Spending time or budget to bring visitors in achieves little when sluggish pages and popups push people right back out.',
          visualCaption: 'Ad and search visitors exiting a slow, popup-blocked landing page',
        },
        {
          id: 'unclear-tracking',
          number: '03',
          tag: 'MEASUREMENT GAPS',
          statement: 'Missing tracking leaves you guessing which pages bring real leads.',
          highlight: 'guessing which pages',
          impact:
            'When form submissions go unrecorded, businesses keep investing in channels that deliver traffic without genuine customer enquiries.',
          visualCaption: 'Analytics dashboard showing visits with unconfigured conversion goals',
        },
        {
          id: 'weak-conversion',
          number: '04',
          tag: 'ENQUIRY PATH',
          statement: 'Pages attract attention—then leave visitors unsure how to start.',
          highlight: 'unsure how to start',
          impact:
            'Vague calls to action and awkward enquiry steps let interested buyers drift away instead of booking a conversation.',
          visualCaption: 'Service page trailing off without a clear, reassuring next step',
        },
      ],
    },
  },
};
