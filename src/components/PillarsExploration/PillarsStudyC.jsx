import { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { prefersReducedMotion } from '../../utils/motion';
import { PanelReliefMotif } from './PillarsStudyA';
import './PillarsExploration.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STAGE_TABS = [
  {
    id: 'ALL',
    num: '00',
    label: 'All Pillars',
    summary: 'All six services arranged across an ascending 3 · 2 · 1 layered horizon.',
  },
  {
    id: 'BUILD',
    num: '01',
    label: 'Build',
    summary: 'Websites, applications, and custom software engineered around your workflows.',
  },
  {
    id: 'AUTOMATE',
    num: '02',
    label: 'Automate',
    summary: 'Reliable business automation and citation-grounded AI pipelines.',
  },
  {
    id: 'GROW',
    num: '03',
    label: 'Grow',
    summary: 'Technical SEO, Core Web Vitals speed, and measurable conversion clarity.',
  },
];

const STAGE_CARDS = [
  {
    id: 'web-development',
    pillar: 'BUILD',
    num: '01',
    line1: 'Web',
    line2: 'Development',
    note: 'Fast, accessible marketing & commerce sites',
    href: '/services/web-development',
    tone: 'white',
    motif: 'web-planes',
  },
  {
    id: 'application-development',
    pillar: 'BUILD',
    num: '02',
    line1: 'Application',
    line2: 'Development',
    note: 'Customer portals, SaaS & cross-platform mobile',
    href: '/services/application-development',
    tone: 'stone',
    motif: 'app-stack',
  },
  {
    id: 'software-development',
    pillar: 'BUILD',
    num: '03',
    line1: 'Software',
    line2: 'Development',
    note: 'Custom backends, internal tools & integrations',
    href: '/services/software-development',
    tone: 'charcoal',
    motif: 'software-lattice',
  },
  {
    id: 'business-automation',
    pillar: 'AUTOMATE',
    num: '04',
    line1: 'Business',
    line2: 'Automation',
    note: 'Event-driven CRM, billing & ops workflows',
    href: '/services/business-automation',
    tone: 'teal',
    motif: 'pipeline-relay',
  },
  {
    id: 'ai-solutions',
    pillar: 'AUTOMATE',
    num: '05',
    line1: 'AI',
    line2: 'Solutions',
    note: 'Grounded RAG knowledge search & doc parsing',
    href: '/services/ai-solutions',
    tone: 'white-teal',
    motif: 'ai-prism',
  },
  {
    id: 'digital-growth',
    pillar: 'GROW',
    num: '06',
    line1: 'Digital Growth',
    line2: '& Optimisation',
    note: 'Technical SEO, Core Web Vitals & conversion architecture',
    href: '/services/digital-growth',
    tone: 'charcoal-orange',
    motif: 'growth-steps',
  },
];

/**
 * Study C — Interactive Layer Stage.
 * Pairs a focused editorial selector on the left with a reconfiguring overlapping
 * dimensional composition on the right. Switching tabs re-composes the layered geometry
 * cleanly for the selected pillar (All 3-2-1 panorama, Build fan, Automate lock, Grow monolith).
 */
export default function PillarsStudyC({ previewMode = 'responsive' }) {
  const sectionRef = useRef(null);
  const headingId = useId();
  const [activeTab, setActiveTab] = useState('ALL');
  const tabRefs = useRef([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.from('[data-pc-plane]', {
        y: 18,
        opacity: 0.2,
        duration: 0.56,
        stagger: 0.055,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });
    }, el);

    return () => ctx.revert();
  }, [activeTab, previewMode]);

  const handleTabKeyDown = (event, idx) => {
    let nextIdx = null;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      nextIdx = (idx + 1) % STAGE_TABS.length;
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      nextIdx = (idx - 1 + STAGE_TABS.length) % STAGE_TABS.length;
    } else if (event.key === 'Home') {
      nextIdx = 0;
    } else if (event.key === 'End') {
      nextIdx = STAGE_TABS.length - 1;
    }
    if (nextIdx === null) return;
    event.preventDefault();
    setActiveTab(STAGE_TABS[nextIdx].id);
    tabRefs.current[nextIdx]?.focus();
  };

  const currentTab = STAGE_TABS.find((t) => t.id === activeTab) || STAGE_TABS[0];
  const visibleCards =
    activeTab === 'ALL'
      ? STAGE_CARDS
      : STAGE_CARDS.filter((card) => card.pillar === activeTab);

  const isMobilePreview = previewMode === 'mobile';

  return (
    <section
      ref={sectionRef}
      className={`pillars-exp pillars-exp--c${
        isMobilePreview ? ' pillars-exp--preview-mobile' : ''
      }`}
      aria-labelledby={headingId}
    >
      <div className="pillars-exp__container">
        <div className="pc-layout">
          <div className="pc-sidebar">
            <span className="pillars-exp__eyebrow">
              <span className="pillars-exp__eyebrow-dot" aria-hidden="true" />
              <span>02 / WHAT WE DO</span>
            </span>

            <h2 id={headingId} className="pillars-exp__heading">
              Three pillars. One unified studio.
            </h2>

            <div className="pc-tabs" role="tablist" aria-label="Filter capabilities by pillar">
              {STAGE_TABS.map((tab, idx) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    ref={(el) => {
                      tabRefs.current[idx] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`pc-tab-${tab.id.toLowerCase()}`}
                    aria-selected={isSelected}
                    tabIndex={isSelected ? 0 : -1}
                    className={`pc-tab${isSelected ? ' is-active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                    onMouseEnter={() => setActiveTab(tab.id)}
                    onKeyDown={(e) => handleTabKeyDown(e, idx)}
                  >
                    <span className="pc-tab__num">{tab.num}</span>
                    <span className="pc-tab__label">{tab.label}</span>
                    <ArrowRight size={15} className="pc-tab__arrow" aria-hidden="true" />
                  </button>
                );
              })}
            </div>

            <div className="pc-summary-box" aria-live="polite">
              <span className="pc-summary-box__kicker">{currentTab.label.toUpperCase()}</span>
              <p className="pc-summary-box__text">{currentTab.summary}</p>
            </div>

            <Link to="/services" className="pc-all-link">
              <span>Explore full capabilities page</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div
            className={`pc-stage pc-stage--mode-${activeTab.toLowerCase()}`}
            data-pc-stage
            role="tabpanel"
            aria-labelledby={`pc-tab-${activeTab.toLowerCase()}`}
          >
            <div className="pc-stage__backdrop-grid" aria-hidden="true" />

            {activeTab === 'GROW' && (
              <>
                <div className="pc-grow-echo pc-grow-echo--back" aria-hidden="true" />
                <div className="pc-grow-echo pc-grow-echo--mid" aria-hidden="true" />
              </>
            )}

            <div className={`pc-stage__deck pc-stage__deck--${activeTab.toLowerCase()}`}>
              {visibleCards.map((card, index) => (
                <Link
                  key={card.id}
                  to={card.href}
                  data-pc-plane
                  className={`pc-plane pc-plane--${card.tone} pc-plane--slot-${index + 1}`}
                >
                  <div className="pc-plane__head">
                    <span className="pc-plane__meta">
                      {card.num} · {card.pillar}
                    </span>
                    <span className="pc-plane__arrow" aria-hidden="true">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>

                  <div className="pc-plane__motif" aria-hidden="true">
                    <PanelReliefMotif motif={card.motif} />
                  </div>

                  <div className="pc-plane__foot">
                    <strong className="pc-plane__title">
                      <span>{card.line1}</span>{' '}
                      <span className="pc-plane__title-light">{card.line2}</span>
                    </strong>
                    <span className="pc-plane__note">{card.note}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
