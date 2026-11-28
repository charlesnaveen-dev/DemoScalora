import { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { prefersReducedMotion } from '../../utils/motion';
import { PanelReliefMotif } from './PillarsStudyA';
import './PillarsExploration.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STEPPED_PILLARS = [
  {
    key: 'BUILD',
    number: '01',
    title: 'Build',
    cue: 'Three stepped engineering slabs',
    accent: 'orange',
    services: [
      {
        num: '01',
        label: 'Web Development',
        short: 'Speed & search architecture',
        href: '/services/web-development',
        tone: 'white',
        motif: 'web-planes',
      },
      {
        num: '02',
        label: 'Application Development',
        short: 'Web & mobile product UX',
        href: '/services/application-development',
        tone: 'stone',
        motif: 'app-stack',
      },
      {
        num: '03',
        label: 'Software Development',
        short: 'Core engines & APIs',
        href: '/services/software-development',
        tone: 'charcoal',
        motif: 'software-lattice',
      },
    ],
  },
  {
    key: 'AUTOMATE',
    number: '02',
    title: 'Automate',
    cue: 'Two coupled operational slabs',
    accent: 'teal',
    services: [
      {
        num: '04',
        label: 'Business Automation',
        short: 'CRM, billing & ops sync',
        href: '/services/business-automation',
        tone: 'teal',
        motif: 'pipeline-relay',
      },
      {
        num: '05',
        label: 'AI Solutions',
        short: 'Grounded RAG & document triage',
        href: '/services/ai-solutions',
        tone: 'white-teal',
        motif: 'ai-prism',
      },
    ],
  },
  {
    key: 'GROW',
    number: '03',
    title: 'Grow',
    cue: 'Single compounding growth slab',
    accent: 'dark',
    services: [
      {
        num: '06',
        label: 'Digital Growth & Optimisation',
        short: 'Technical SEO, Core Web Vitals & conversion clarity',
        href: '/services/digital-growth',
        tone: 'charcoal-orange',
        motif: 'growth-steps',
      },
    ],
  },
];

/**
 * Option 2 (Study B) — Unified Stepped Service-Row System.
 * Applies the horizontal service-row architecture from Build consistently across
 * Build (3 rows), Automate (2 rows), and Grow (1 row) with distinct pillar accents.
 */
export default function PillarsStudyB({ previewMode = 'responsive', id }) {
  const sectionRef = useRef(null);
  const headingId = useId();
  const [selectedPillar, setSelectedPillar] = useState('BUILD');

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.from('[data-pb-pillar]', {
        y: 22,
        opacity: 0.18,
        duration: 0.72,
        stagger: 0.11,
        ease: 'power3.out',
        immediateRender: false,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '[data-pb-grid]',
          start: 'top 84%',
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [previewMode]);

  const isMobilePreview = previewMode === 'mobile';

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`pillars-exp pillars-exp--b${
        isMobilePreview ? ' pillars-exp--preview-mobile' : ''
      }`}
      aria-labelledby={headingId}
    >
      <div className="pillars-exp__container">
        <header className="pillars-exp__header">
          <div className="pillars-exp__meta-row">
            <span className="pillars-exp__eyebrow">
              <span className="pillars-exp__eyebrow-dot" aria-hidden="true" />
              <span>02 / WHAT WE DO</span>
            </span>
            <span className="pillars-exp__system-tag">Unified Service-Row System</span>
            <span className="pillars-exp__rule" aria-hidden="true" />
          </div>

          <div className="pillars-exp__title-row">
            <h2 id={headingId} className="pillars-exp__heading">
              Three pillars. One unified studio.
            </h2>
            <p className="pillars-exp__sub">
              One consistent horizontal service-row layout across all three disciplines—three rows
              for Build, two for Automate, and one for Grow, each carrying its own brand tone.
            </p>
          </div>
        </header>

        {/* Unified Horizontal Service-Row Architecture */}
        <div className="pb-grid" data-pb-grid>
          {STEPPED_PILLARS.map((pillar) => {
            const isSelected = selectedPillar === pillar.key;
            return (
              <article
                key={pillar.key}
                data-pb-pillar
                className={`pb-column pb-column--${pillar.key.toLowerCase()}${
                  isSelected ? ' is-selected' : ''
                }`}
                onMouseEnter={() => setSelectedPillar(pillar.key)}
              >
                <div className="pb-column__header">
                  <div className="pb-column__id">
                    <span className={`pb-column__badge pb-column__badge--${pillar.accent}`}>
                      {pillar.number}
                    </span>
                    <h3 className="pb-column__title">{pillar.title}</h3>
                  </div>
                  <button
                    type="button"
                    className="pb-column__focus-btn"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedPillar(pillar.key)}
                  >
                    {isSelected ? 'Active' : 'Inspect'}
                  </button>
                </div>

                <p className="pb-column__cue">{pillar.cue}</p>

                <div className="pb-stage">
                  <div className="pb-build-stack">
                    {pillar.services.map((service, idx) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className={`pb-slab pb-slab--${service.tone} pb-slab--step-${idx + 1}`}
                      >
                        <div className="pb-slab__text">
                          <span className="pb-slab__index">{service.num}</span>
                          <strong className="pb-slab__name">{service.label}</strong>
                          <span className="pb-slab__short">{service.short}</span>
                        </div>
                        <div className="pb-slab__edge" aria-hidden="true">
                          <PanelReliefMotif motif={service.motif} />
                        </div>
                        <span className="pb-slab__go" aria-hidden="true">
                          <ArrowUpRight size={15} />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
