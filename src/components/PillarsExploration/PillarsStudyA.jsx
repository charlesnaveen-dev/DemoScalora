import { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { prefersReducedMotion } from '../../utils/motion';
import './PillarsExploration.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PILLAR_STUDIES_DATA = [
  {
    key: 'BUILD',
    number: '01',
    title: 'Build',
    tagline: 'Foundational digital products engineered from first principles.',
    accent: 'orange',
    services: [
      {
        slug: 'web-development',
        href: '/services/web-development',
        line1: 'Web',
        line2: 'Development',
        role: 'Fast, search-ready websites & platforms',
        tone: 'white',
        motif: 'web-planes',
      },
      {
        slug: 'application-development',
        href: '/services/application-development',
        line1: 'Application',
        line2: 'Development',
        role: 'Web & mobile apps built for real workflows',
        tone: 'stone',
        motif: 'app-stack',
      },
      {
        slug: 'software-development',
        href: '/services/software-development',
        line1: 'Software',
        line2: 'Development',
        role: 'Bespoke internal platforms & API bridges',
        tone: 'charcoal',
        motif: 'software-lattice',
      },
    ],
  },
  {
    key: 'AUTOMATE',
    number: '02',
    title: 'Automate',
    tagline: 'Connected operations and grounded intelligence that remove friction.',
    accent: 'teal',
    services: [
      {
        slug: 'business-automation',
        href: '/services/business-automation',
        line1: 'Business',
        line2: 'Automation',
        role: 'Resilient multi-step CRM & ops pipelines',
        tone: 'teal',
        motif: 'pipeline-relay',
      },
      {
        slug: 'ai-solutions',
        href: '/services/ai-solutions',
        line1: 'AI',
        line2: 'Solutions',
        role: 'Citation-grounded assistants & doc triage',
        tone: 'white-teal',
        motif: 'ai-prism',
      },
    ],
  },
  {
    key: 'GROW',
    number: '03',
    title: 'Grow',
    tagline: 'Compounding speed, visibility, and conversion architecture.',
    accent: 'amber',
    services: [
      {
        slug: 'digital-growth',
        href: '/services/digital-growth',
        line1: 'Digital Growth',
        line2: '& Optimisation',
        role: 'Technical SEO, Core Web Vitals & CRO',
        tone: 'charcoal-orange',
        motif: 'growth-steps',
      },
    ],
  },
];

export function PanelReliefMotif({ motif }) {
  switch (motif) {
    case 'web-planes':
      return (
        <svg viewBox="0 0 140 120" fill="none" className="panel-motif" aria-hidden="true">
          <rect
            x="40"
            y="10"
            width="86"
            height="68"
            rx="10"
            fill="#EFECE4"
            stroke="rgba(21,23,26,0.12)"
          />
          <rect
            x="22"
            y="28"
            width="92"
            height="68"
            rx="10"
            fill="#FFFFFF"
            stroke="rgba(21,23,26,0.15)"
          />
          <line x1="34" y1="44" x2="98" y2="44" stroke="rgba(21,23,26,0.14)" strokeWidth="2" />
          <rect x="34" y="54" width="38" height="28" rx="4" fill="#F4F2EC" />
          <rect x="78" y="54" width="24" height="12" rx="3" fill="#FF9F1C" fillOpacity="0.9" />
          <rect x="78" y="70" width="24" height="12" rx="3" fill="#2EC4B6" fillOpacity="0.45" />
        </svg>
      );
    case 'app-stack':
      return (
        <svg viewBox="0 0 140 120" fill="none" className="panel-motif" aria-hidden="true">
          <rect
            x="56"
            y="12"
            width="64"
            height="92"
            rx="14"
            fill="#15171A"
            transform="rotate(8 56 12)"
          />
          <rect
            x="34"
            y="18"
            width="64"
            height="90"
            rx="13"
            fill="#FFFFFF"
            stroke="rgba(21,23,26,0.16)"
          />
          <rect x="44" y="34" width="44" height="20" rx="5" fill="#CBF3F0" />
          <rect x="44" y="61" width="28" height="6" rx="3" fill="#15171A" fillOpacity="0.22" />
          <rect x="44" y="72" width="38" height="6" rx="3" fill="#15171A" fillOpacity="0.12" />
          <circle cx="76" cy="91" r="8" fill="#FF9F1C" />
        </svg>
      );
    case 'software-lattice':
      return (
        <svg viewBox="0 0 140 120" fill="none" className="panel-motif" aria-hidden="true">
          <rect
            x="24"
            y="16"
            width="92"
            height="86"
            rx="12"
            fill="#232832"
            stroke="rgba(255,255,255,0.14)"
          />
          <path
            d="M42 42 H74 V72 H102"
            stroke="#2EC4B6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42 74 H62 V44 H102"
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <rect x="34" y="33" width="16" height="16" rx="4" fill="#FFFFFF" fillOpacity="0.92" />
          <rect x="66" y="50" width="18" height="18" rx="5" fill="#FF9F1C" />
          <rect x="94" y="64" width="16" height="16" rx="4" fill="#8ADFD0" />
        </svg>
      );
    case 'pipeline-relay':
      return (
        <svg viewBox="0 0 140 120" fill="none" className="panel-motif" aria-hidden="true">
          <rect
            x="18"
            y="24"
            width="104"
            height="22"
            rx="11"
            fill="#FFFFFF"
            fillOpacity="0.92"
            stroke="rgba(11,110,101,0.22)"
          />
          <rect x="30" y="54" width="92" height="22" rx="11" fill="#15171A" />
          <rect
            x="18"
            y="84"
            width="86"
            height="20"
            rx="10"
            fill="#FFFFFF"
            fillOpacity="0.72"
            stroke="rgba(11,110,101,0.2)"
          />
          <circle cx="105" cy="35" r="5" fill="#0B6E65" />
          <circle cx="46" cy="65" r="5" fill="#FF9F1C" />
          <circle cx="88" cy="94" r="5" fill="#2EC4B6" />
        </svg>
      );
    case 'ai-prism':
      return (
        <svg viewBox="0 0 140 120" fill="none" className="panel-motif" aria-hidden="true">
          <polygon
            points="78,12 126,40 126,90 78,112 30,90 30,40"
            fill="#F1EFE8"
            stroke="rgba(21,23,26,0.12)"
          />
          <polygon points="78,24 114,45 78,66 42,45" fill="#8ADFD0" fillOpacity="0.72" />
          <polygon points="42,45 78,66 78,104 42,83" fill="#15171A" />
          <polygon points="114,45 114,83 78,104 78,66" fill="#2EC4B6" fillOpacity="0.45" />
          <circle cx="78" cy="66" r="6" fill="#FF9F1C" />
        </svg>
      );
    case 'growth-steps':
    default:
      return (
        <svg viewBox="0 0 140 120" fill="none" className="panel-motif" aria-hidden="true">
          <rect x="24" y="72" width="28" height="32" rx="6" fill="#2EC4B6" />
          <rect x="56" y="48" width="28" height="56" rx="6" fill="#8ADFD0" />
          <rect x="88" y="22" width="32" height="82" rx="6" fill="#FF9F1C" />
          <path
            d="M28 60 L64 36 L104 14"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 5"
          />
        </svg>
      );
  }
}

/**
 * Study A — Kinetic Tilted Cascade (Unboxed Open Canvas).
 * Places overlapping angled dimensional planes directly onto Scalarow's warm #FAFAF8
 * studio ground without outer card enclosures, linked by a continuous horizontal datum.
 */
export default function PillarsStudyA({ previewMode = 'responsive' }) {
  const sectionRef = useRef(null);
  const headingId = useId();
  const [hoveredKey, setHoveredKey] = useState(null);
  const [focusedService, setFocusedService] = useState({
    pillar: 'Build',
    title: 'Web Development',
    role: 'Fast, search-ready websites & platforms',
    href: '/services/web-development',
  });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.from('[data-pa-rule]', {
        scaleX: 0,
        duration: 0.85,
        ease: 'power3.out',
        immediateRender: false,
        clearProps: 'transform',
        scrollTrigger: {
          trigger: el,
          start: 'top 84%',
          once: true,
        },
      });

      gsap.from('[data-pa-cluster]', {
        y: 26,
        opacity: 0.15,
        duration: 0.78,
        stagger: 0.12,
        ease: 'power3.out',
        immediateRender: false,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '[data-pa-grid]',
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
      ref={sectionRef}
      className={`pillars-exp pillars-exp--a${
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
            <span className="pillars-exp__system-tag">
              Build (03) · Automate (02) · Grow (01)
            </span>
            <span className="pillars-exp__rule" data-pa-rule aria-hidden="true" />
          </div>

          <div className="pillars-exp__title-row">
            <h2 id={headingId} className="pillars-exp__heading">
              Three pillars. One unified studio.
            </h2>
            <p className="pillars-exp__sub">
              Six capabilities rendered as overlapping architectural planes directly on the canvas—hover
              or focus a plate to fan its depth layers and inspect its role.
            </p>
          </div>
        </header>

        {/* Open Canvas 3 · 2 · 1 Tilted Clusters linked by shared datum */}
        <div
          className={`pa-grid${hoveredKey ? ` is-focusing-${hoveredKey.toLowerCase()}` : ''}`}
          data-pa-grid
        >
          {PILLAR_STUDIES_DATA.map((pillar) => {
            const isClusterHovered = hoveredKey === pillar.key;
            return (
              <div
                key={pillar.key}
                data-pa-cluster
                className={`pa-cluster pa-cluster--${pillar.key.toLowerCase()}${
                  isClusterHovered ? ' is-active' : ''
                }`}
                onMouseEnter={() => setHoveredKey(pillar.key)}
                onMouseLeave={() => setHoveredKey(null)}
              >
                <div className="pa-cluster__head">
                  <span className={`pa-cluster__num pa-cluster__num--${pillar.accent}`}>
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="pa-cluster__title">{pillar.title}</h3>
                    <p className="pa-cluster__caption">{pillar.tagline}</p>
                  </div>
                </div>

                <div
                  className={`pa-deck pa-deck--${pillar.key.toLowerCase()}`}
                  role="list"
                  aria-label={`${pillar.title} services`}
                >
                  {pillar.key === 'GROW' && (
                    <>
                      <div className="pa-echo-plane pa-echo-plane--back" aria-hidden="true" />
                      <div className="pa-echo-plane pa-echo-plane--mid" aria-hidden="true" />
                    </>
                  )}

                  {pillar.services.map((service, idx) => (
                    <div
                      key={service.slug}
                      role="listitem"
                      className={`pa-panel-slot pa-panel-slot--${idx + 1}`}
                    >
                      <Link
                        to={service.href}
                        className={`pa-panel pa-panel--${service.tone}`}
                        onMouseEnter={() =>
                          setFocusedService({
                            pillar: pillar.title,
                            title: `${service.line1} ${service.line2}`,
                            role: service.role,
                            href: service.href,
                          })
                        }
                        onFocus={() =>
                          setFocusedService({
                            pillar: pillar.title,
                            title: `${service.line1} ${service.line2}`,
                            role: service.role,
                            href: service.href,
                          })
                        }
                      >
                        <div className="pa-panel__visual" aria-hidden="true">
                          <PanelReliefMotif motif={service.motif} />
                        </div>

                        <div className="pa-panel__copy">
                          <span className="pa-panel__label">
                            <strong>{service.line1}</strong>
                            <span>{service.line2}</span>
                          </span>
                          <span className="pa-panel__cta">
                            <span className="pa-panel__arrow" aria-hidden="true">
                              <ArrowUpRight size={14} strokeWidth={2.2} />
                            </span>
                            <span>Explore</span>
                          </span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet Unified Studio Readout Strip */}
        <footer className="pa-readout" aria-live="polite">
          <div className="pa-readout__left">
            <span className="pa-readout__pillar">{focusedService.pillar}</span>
            <strong className="pa-readout__title">{focusedService.title}</strong>
            <span className="pa-readout__sep" aria-hidden="true">
              —
            </span>
            <span className="pa-readout__desc">{focusedService.role}</span>
          </div>
          <Link to={focusedService.href} className="pa-readout__link">
            <span>View capability spec</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </footer>
      </div>
    </section>
  );
}
