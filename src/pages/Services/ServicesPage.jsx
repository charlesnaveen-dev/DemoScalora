import { useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import SeoHead from '../../components/SeoHead/SeoHead';
import MagneticButton from '../../components/MagneticButton/MagneticButton';
import ServiceVisual from './ServiceVisual';
import {
  SERVICES_BOTTOM_CTA,
  SERVICES_HERO,
  SERVICES_PILLARS,
} from './servicesContent';
import { prefersReducedMotion, scrollToTarget } from '../../utils/motion';
import './ServicesPage.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STACK_STEP_PX = 50;

function PillarEditorialIntro({ pillar }) {
  const headingId = `pillar-heading-${pillar.key.toLowerCase()}`;

  if (pillar.key === 'BUILD') {
    return (
      <header className="pillar-intro pillar-intro--build">
        <div className="container">
          <div className="pillar-intro__topbar">
            <span className="pillar-intro__eyebrow">
              <span className="tabular-num pillar-intro__num">{pillar.number}</span>
              <span className="pillar-intro__slash" aria-hidden="true">/</span>
              <span>PILLAR</span>
            </span>

            <ul
              role="list"
              className="pillar-intro__keywords"
              aria-label="Build disciplines"
            >
              {pillar.keywords.map((kw, idx) => (
                <li key={kw} className="pillar-intro__keyword">
                  {idx > 0 && <span className="pillar-intro__sep" aria-hidden="true">/</span>}
                  <span>{kw}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="build-intro__canvas">
            {/* Subtle architectural blueprint motif */}
            <div className="build-intro__blueprint" aria-hidden="true">
              <span className="build-intro__plane build-intro__plane--1" />
              <span className="build-intro__plane build-intro__plane--2" />
              <span className="build-intro__plane build-intro__plane--3" />
            </div>

            <div className="build-intro__word-row">
              <h2 id={headingId} className="pillar-intro__monument build-intro__word">
                {pillar.displayWord}
                <span className="build-intro__reg" aria-hidden="true" />
              </h2>
            </div>

            <div className="build-intro__statement-wrap">
              <p className="pillar-intro__statement build-intro__statement">
                {pillar.supportingMessage}
              </p>
              <span className="build-intro__datum" aria-hidden="true" />
            </div>
          </div>
        </div>
      </header>
    );
  }

  if (pillar.key === 'AUTOMATE') {
    return (
      <header className="pillar-intro pillar-intro--automate">
        <div className="container">
          <div className="automate-intro__canvas">
            <div className="automate-intro__top-grid">
              <div className="automate-intro__trace-col" aria-hidden="true">
                <svg
                  viewBox="0 0 320 76"
                  fill="none"
                  className="automate-intro__svg"
                >
                  <line x1="0" y1="22" x2="260" y2="22" stroke="#0B6E65" strokeOpacity="0.24" strokeWidth="1.25" />
                  <path d="M0 54 H136 L160 22 H316" stroke="#2EC4B6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="160" cy="22" r="4.5" fill="#FF9F1C" />
                  <circle cx="260" cy="22" r="3" fill="#0B6E65" />
                </svg>
              </div>

              <div className="automate-intro__copy-col">
                <div className="automate-intro__meta-row">
                  <span className="pillar-intro__eyebrow">
                    <span className="tabular-num pillar-intro__num">{pillar.number}</span>
                    <span className="pillar-intro__slash" aria-hidden="true">/</span>
                    <span>PILLAR</span>
                  </span>
                  <ul
                    role="list"
                    className="pillar-intro__keywords"
                    aria-label="Automate disciplines"
                  >
                    {pillar.keywords.map((kw, idx) => (
                      <li key={kw} className="pillar-intro__keyword">
                        {idx > 0 && <span className="pillar-intro__sep" aria-hidden="true">/</span>}
                        <span>{kw}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="pillar-intro__statement automate-intro__statement">
                  {pillar.supportingMessage}
                </p>
              </div>
            </div>

            <div className="automate-intro__word-row">
              <h2 id={headingId} className="pillar-intro__monument automate-intro__word">
                {pillar.displayWord}
              </h2>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="pillar-intro pillar-intro--grow">
      <div className="container">
        <div className="grow-intro__canvas">
          <div className="grow-intro__top-rail">
            <span className="pillar-intro__eyebrow">
              <span className="tabular-num pillar-intro__num">{pillar.number}</span>
              <span className="pillar-intro__slash" aria-hidden="true">/</span>
              <span>PILLAR</span>
            </span>

            <ul
              role="list"
              className="pillar-intro__keywords"
              aria-label="Grow disciplines"
            >
              {pillar.keywords.map((kw, idx) => (
                <li key={kw} className="pillar-intro__keyword">
                  {idx > 0 && <span className="pillar-intro__sep" aria-hidden="true">/</span>}
                  <span>{kw}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grow-intro__composition">
            <div className="grow-intro__steps" aria-hidden="true">
              <span className="grow-intro__step grow-intro__step--1" />
              <span className="grow-intro__step grow-intro__step--2" />
              <span className="grow-intro__step grow-intro__step--3" />
            </div>

            <h2 id={headingId} className="pillar-intro__monument grow-intro__word">
              {pillar.displayWord}
            </h2>
          </div>

          <div className="grow-intro__footer">
            <span className="grow-intro__axis" aria-hidden="true" />
            <p className="pillar-intro__statement grow-intro__statement">
              {pillar.supportingMessage}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function ServicesPage() {
  const pageRef = useRef(null);
  const triggerMapRef = useRef({});

  // Initial hash navigation (e.g. /services#pillar-automate) below the fixed navbar
  useEffect(() => {
    if (typeof window === 'undefined' || !window.location.hash) return undefined;
    const hashId = window.location.hash.slice(1);
    const target = document.getElementById(hashId);
    if (!target) return undefined;

    const timer = window.setTimeout(() => {
      const header = document.querySelector('.site-header');
      const headerH = header ? header.getBoundingClientRect().height : 76;
      scrollToTarget(target, { offset: -(Math.round(headerH) + 12), immediate: true });
    }, 80);

    return () => window.clearTimeout(timer);
  }, []);

  // Pinned Stacked-Card ScrollTrigger Choreography (Desktop only; clean vertical flow on mobile/reduced-motion)
  useEffect(() => {
    const rootEl = pageRef.current;
    if (!rootEl || typeof window === 'undefined') return undefined;

    triggerMapRef.current = {};

    const mm = gsap.matchMedia();

    mm.add(
      '(min-width: 900px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)',
      () => {
        const stages = Array.from(rootEl.querySelectorAll('[data-pillar-stage]'));

        stages.forEach((stage) => {
          const pillarKey = stage.getAttribute('data-pillar-stage');
          const deck = stage.querySelector('[data-pillar-deck]');
          const cards = Array.from(stage.querySelectorAll('[data-pillar-card]'));
          if (!deck || cards.length === 0) return;

          const headerEl = document.querySelector('.site-header');
          const headerH = headerEl ? Math.round(headerEl.getBoundingClientRect().height) : 76;

          const getCardTravel = () => {
            const deckH = deck.offsetHeight || cards[0]?.offsetHeight || 420;
            return Math.round(deckH + 40);
          };

          if (cards.length > 1) {
            // Position cards 1..N-1 cleanly below the first card before pinning starts
            const initialTravel = getCardTravel();
            cards.forEach((card, idx) => {
              gsap.set(card, {
                y: idx === 0 ? 0 : initialTravel,
                scale: 1,
                zIndex: idx + 1,
                transformOrigin: 'center top',
              });
              const veil = card.querySelector('.pillar-card__veil');
              if (veil) gsap.set(veil, { opacity: 0 });
            });

            const totalSteps = cards.length - 1;
            const tl = gsap.timeline({
              defaults: { ease: 'power2.inOut', duration: 1 },
              scrollTrigger: {
                trigger: stage,
                start: () => `top ${headerH}px`,
                end: () => `+=${Math.round(window.innerHeight * (0.78 * totalSteps + 0.28))}`,
                pin: true,
                pinSpacing: true,
                scrub: 0.55,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            // Build sequential stacking beats: Card 1 settles -> Card 2 stacks over 1 -> Card 3 stacks over 2
            for (let i = 1; i < cards.length; i += 1) {
              const stepPos = (i - 1) * 1.05;
              const incomingCard = cards[i];

              // Incoming card slides up smoothly into its stacked index slot
              tl.fromTo(
                incomingCard,
                { y: () => getCardTravel() },
                { y: i * STACK_STEP_PX, ease: 'power2.out', duration: 1 },
                stepPos
              );

              // Previously settled cards gently recede for physical layering depth
              for (let prev = 0; prev < i; prev += 1) {
                const depthBehind = i - prev;
                const targetScale = Math.max(0.925, 1 - depthBehind * 0.028);
                const targetY = prev * STACK_STEP_PX - depthBehind * 3;
                const targetVeilOpacity = Math.min(0.85, depthBehind * 0.42);

                tl.to(
                  cards[prev],
                  {
                    scale: targetScale,
                    y: targetY,
                    duration: 1,
                    ease: 'power2.out',
                  },
                  stepPos
                );

                const prevVeil = cards[prev].querySelector('.pillar-card__veil');
                if (prevVeil) {
                  tl.to(
                    prevVeil,
                    { opacity: targetVeilOpacity, duration: 1, ease: 'none' },
                    stepPos
                  );
                }
              }
            }

            // Brief resting beat on final card before pin releases smoothly into next pillar
            tl.to({}, { duration: 0.22 });

            triggerMapRef.current[pillarKey] = {
              st: tl.scrollTrigger,
              count: cards.length,
            };
          } else {
            // Single flagship card (GROW): brief pinned architectural settle with layered strata plates
            const growCard = cards[0];
            const echoBack = stage.querySelector('.pillar-grow-echo--back');
            const echoMid = stage.querySelector('.pillar-grow-echo--mid');

            gsap.set(growCard, { y: 24, scale: 0.975, transformOrigin: 'center top' });
            if (echoBack) gsap.set(echoBack, { y: 40, x: 0, opacity: 0.4 });
            if (echoMid) gsap.set(echoMid, { y: 32, x: 0, opacity: 0.55 });

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: stage,
                start: () => `top ${headerH}px`,
                end: () => `+=${Math.round(window.innerHeight * 0.45)}`,
                pin: true,
                pinSpacing: true,
                scrub: 0.45,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            tl.to(growCard, { y: 0, scale: 1, duration: 0.7, ease: 'power2.out' }, 0);
            if (echoMid) {
              tl.to(echoMid, { y: 8, x: -10, opacity: 1, duration: 0.7, ease: 'power2.out' }, 0);
            }
            if (echoBack) {
              tl.to(echoBack, { y: 16, x: 12, opacity: 1, duration: 0.7, ease: 'power2.out' }, 0);
            }
            tl.to({}, { duration: 0.2 });

            triggerMapRef.current[pillarKey] = {
              st: tl.scrollTrigger,
              count: 1,
            };
          }
        });

        // Subtle entry reveal for editorial intro statements without hiding titles
        const introStatements = gsap.utils.toArray('.pillar-intro__statement', rootEl);
        introStatements.forEach((el) => {
          gsap.from(el, {
            y: 16,
            opacity: 0.15,
            duration: 0.65,
            ease: 'power3.out',
            immediateRender: false,
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              once: true,
            },
          });
        });

        const handleFontsReady = () => {
          ScrollTrigger.refresh();
        };

        if (document.fonts?.ready) {
          document.fonts.ready.then(handleFontsReady).catch(() => {});
        }
      }
    );

    return () => {
      mm.revert();
      triggerMapRef.current = {};
    };
  }, []);

  // Keyboard accessibility (WCAG 2.4.11 Focus Not Obscured):
  // Scrub scroll position so any keyboard-focused stacked card rises into active unobstructed view.
  const handleCardFocus = useCallback((pillarKey, cardIndex) => {
    if (typeof window === 'undefined' || prefersReducedMotion()) return;
    const entry = triggerMapRef.current[pillarKey];
    if (!entry?.st || entry.count <= 1) return;

    const { st, count } = entry;
    const totalBeats = (count - 1) * 1.05 + 0.22;
    const targetProgress = cardIndex === 0 ? 0.02 : Math.min(0.95, (cardIndex * 1.05) / totalBeats);
    const destinationY = st.start + (st.end - st.start) * targetProgress;

    if (Math.abs(window.scrollY - destinationY) > 40) {
      scrollToTarget(destinationY, { immediate: false });
    }
  }, []);

  return (
    <div ref={pageRef} className="services-page">
      <SeoHead route="/services" />

      {/* 1. Approved Services Hero (Preserved Unchanged) */}
      <section className="services-hero" aria-labelledby="services-hero-heading">
        <div className="container services-hero__container">
          <div className="services-hero__stack">
            <span className="services-hero__eyebrow">
              <span className="services-hero__mark" aria-hidden="true">
                <span />
                <span />
              </span>
              <span>{SERVICES_HERO.eyebrow}</span>
            </span>

            <h1 id="services-hero-heading" className="services-hero__title">
              <span className="services-hero__line">{SERVICES_HERO.lines[0]}</span>
              <span className="services-hero__line">{SERVICES_HERO.lines[1]}</span>
              <span className="services-hero__line">
                {SERVICES_HERO.lines[2]}
                <span className="services-hero__period">.</span>
              </span>
            </h1>

            <p className="services-hero__desc">{SERVICES_HERO.description}</p>
          </div>
        </div>
      </section>

      {/* 2. Three Art-Directed Pillar Experiences: Editorial Intro -> Pinned Stack -> Release */}
      <div className="services-pillars">
        {SERVICES_PILLARS.map((pillar) => {
          const pillarSlug = pillar.key.toLowerCase();
          const isGrow = pillar.key === 'GROW';

          return (
            <section
              key={pillar.key}
              id={`pillar-${pillarSlug}`}
              className={`services-pillar services-pillar--${pillarSlug}`}
              aria-labelledby={`pillar-heading-${pillarSlug}`}
            >
              {/* Individually Art-Directed Editorial Introduction */}
              <PillarEditorialIntro pillar={pillar} />

              {/* Pinned Stacked-Card Choreography Stage */}
              <div
                className={`pillar-stage pillar-stage--${pillarSlug}`}
                data-pillar-stage={pillar.key}
              >
                <div className="container pillar-stage__container">
                  <div
                    className={`pillar-deck ${
                      isGrow ? 'pillar-deck--single' : 'pillar-deck--stacked'
                    }`}
                    data-pillar-deck
                    style={{
                      '--stack-count': pillar.services.length,
                      '--stack-step': `${STACK_STEP_PX}px`,
                    }}
                  >
                    {isGrow && (
                      <>
                        <div
                          className="pillar-grow-echo pillar-grow-echo--back"
                          aria-hidden="true"
                        />
                        <div
                          className="pillar-grow-echo pillar-grow-echo--mid"
                          aria-hidden="true"
                        />
                      </>
                    )}

                    {pillar.services.map((service, idx) => (
                      <div
                        key={service.id}
                        id={`service-${service.slug}`}
                        className={`pillar-card-slot pillar-card-slot--${service.surface}`}
                        data-pillar-card
                      >
                        <Link
                          to={`/services/${service.slug}`}
                          className={`pillar-card-link pillar-card-link--${service.surface} pillar-card-link--${pillar.accent}`}
                          onFocus={() => handleCardFocus(pillar.key, idx)}
                        >
                          <article className="pillar-card">
                            <div className="pillar-card__veil" aria-hidden="true" />

                            {/* 48px Persistent Top Peek Bar across Stacked Layers */}
                            <div className="pillar-card__head">
                              <div className="pillar-card__head-left">
                                <span className="tabular-num pillar-card__num">
                                  {service.number}
                                </span>
                                <h3 className="pillar-card__title">{service.title}</h3>
                              </div>
                              <div className="pillar-card__head-meta">
                                <span className="tabular-num pillar-card__order">
                                  {service.pillarOrder}
                                </span>
                                <span className="pillar-card__tag">{service.pillar}</span>
                              </div>
                            </div>

                            {/* Balanced Architectural Interior */}
                            <div className="pillar-card__body">
                              <div className="pillar-card__copy">
                                <p className="pillar-card__headline">
                                  {service.headline}
                                </p>
                                <p className="pillar-card__desc">
                                  {service.description}
                                </p>

                                <span className="pillar-card__explore">
                                  <span>Explore {service.title}</span>
                                  <span className="pillar-card__arrow" aria-hidden="true">
                                    <ArrowRight size={15} strokeWidth={2} />
                                  </span>
                                </span>
                              </div>

                              <div className="pillar-card__visual" aria-hidden="true">
                                <ServiceVisual variant={service.visualVariant} />
                              </div>
                            </div>
                          </article>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 3. Existing Bottom Enquiry CTA (Preserved) */}
      <section className="services-cta" aria-labelledby="services-cta-heading">
        <div className="container services-cta__inner">
          <div className="services-cta__copy">
            <span className="eyebrow eyebrow--on-dark">
              {SERVICES_BOTTOM_CTA.eyebrow}
            </span>
            <h2 id="services-cta-heading" className="display-h2 services-cta__title">
              {SERVICES_BOTTOM_CTA.title}
            </h2>
            <p className="services-cta__desc">{SERVICES_BOTTOM_CTA.description}</p>
          </div>
          <div className="services-cta__actions">
            <MagneticButton
              as={Link}
              to={SERVICES_BOTTOM_CTA.primaryCta.href}
              className="btn btn--primary"
            >
              <span>{SERVICES_BOTTOM_CTA.primaryCta.label}</span>
              <ArrowRight size={17} aria-hidden="true" />
            </MagneticButton>
            <MagneticButton
              as={Link}
              to={SERVICES_BOTTOM_CTA.secondaryCta.href}
              className="btn btn--outline-dark"
            >
              <span>{SERVICES_BOTTOM_CTA.secondaryCta.label}</span>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
