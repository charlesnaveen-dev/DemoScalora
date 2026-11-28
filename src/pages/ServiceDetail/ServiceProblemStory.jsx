import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';
import ServiceProblemVisual from './ServiceProblemVisual';
import { prefersReducedMotion, scrollToTarget, scrollToTop } from '../../utils/motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function renderHighlightedStatement(statement, highlight) {
  if (!highlight || !statement.includes(highlight)) {
    return statement;
  }
  const idx = statement.indexOf(highlight);
  const before = statement.slice(0, idx);
  const after = statement.slice(idx + highlight.length);

  // Prevent trailing punctuation (e.g., ".") from orphaning onto its own line
  const punctMatch = after.match(/^([.,!?;:]+)(.*)$/);
  if (punctMatch) {
    const punct = punctMatch[1];
    const restAfter = punctMatch[2];
    const lastSpaceIdx = highlight.lastIndexOf(' ');
    const leadHighlight = lastSpaceIdx >= 0 ? highlight.slice(0, lastSpaceIdx + 1) : '';
    const tailWord = lastSpaceIdx >= 0 ? highlight.slice(lastSpaceIdx + 1) : highlight;

    return (
      <>
        {before}
        <span className="sd-story__highlight" data-story-underline>
          {leadHighlight}
          <span className="sd-story__punct-lock">
            {tailWord}
            <span className="sd-story__punct">{punct}</span>
          </span>
        </span>
        {restAfter}
      </>
    );
  }

  return (
    <>
      {before}
      <span className="sd-story__highlight" data-story-underline>
        {highlight}
      </span>
      {after}
    </>
  );
}

/**
 * Section 03 — Business Problem Scrollytelling.
 *
 * Pure CSS media queries control desktop vs mobile stage geometry from the very first paint,
 * preventing ScrollTrigger pin-spacer mis-measurement or black-screen gaps across route changes.
 */
export default function ServiceProblemStory({ serviceSlug, problemStory }) {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const stRef = useRef(null);
  const [activeBeat, setActiveBeat] = useState(0);
  const [entryPulse, setEntryPulse] = useState(0);
  const [isDesktopStage, setIsDesktopStage] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia(
      '(min-width: 960px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)'
    ).matches;
  });

  const headingId = useId();
  const problems = problemStory.problems || [];
  const totalBeats = problems.length + 1;

  useEffect(() => {
    setActiveBeat(0);
    setEntryPulse(0);
  }, [serviceSlug]);

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    const stageEl = stageRef.current;
    if (!sectionEl || !stageEl || typeof window === 'undefined') return undefined;

    // Ensure non-hash service route transitions start cleanly at top before ScrollTrigger measures positions
    if (!window.location.hash) {
      scrollToTop(true);
    }

    const mm = gsap.matchMedia();

    mm.add(
      '(min-width: 960px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)',
      () => {
        setIsDesktopStage(true);

        const beatNodes = Array.from(stageEl.querySelectorAll('[data-story-beat]'));
        const visualLayers = Array.from(
          stageEl.querySelectorAll('.sd-story__visual-col [data-visual-beat]')
        );
        const progressFill = stageEl.querySelector('[data-story-progress-fill]');
        const headerEl = document.querySelector('.site-header');
        const headerH = headerEl ? Math.round(headerEl.getBoundingClientRect().height) : 76;

        beatNodes.forEach((node, idx) => {
          gsap.set(node, {
            autoAlpha: idx === 0 ? 1 : 0,
            y: idx === 0 ? 0 : 18,
          });
          const bar = node.querySelector('[data-story-underline]');
          if (bar) {
            gsap.set(bar, {
              '--hl-progress': idx === 0 ? '100%' : '0%',
            });
          }
        });

        visualLayers.forEach((layer, idx) => {
          gsap.set(layer, {
            autoAlpha: idx === 0 ? 1 : 0,
            y: idx === 0 ? 0 : 10,
          });
        });

        if (progressFill) {
          gsap.set(progressFill, { scaleX: 0, transformOrigin: 'left center' });
        }

        const slotDuration = 1;
        const holdEnd = 1;
        const totalDuration = (totalBeats - 1) * slotDuration + holdEnd;
        const switchOffsets = [0.84, 1.84, 2.84, 3.84];

        const tl = gsap.timeline({
          defaults: { ease: 'power2.inOut' },
          scrollTrigger: {
            trigger: stageEl,
            start: () => `top ${headerH}px`,
            end: () => `+=${Math.round(window.innerHeight * 2.85)}`,
            pin: true,
            pinSpacing: true,
            scrub: 0.35,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            refreshPriority: 1,
            onEnter: () => {
              setEntryPulse((prev) => prev + 1);
            },
            onUpdate: (self) => {
              const p = self.progress;
              let nextIdx = 0;
              if (p >= switchOffsets[3] / totalDuration) nextIdx = 4;
              else if (p >= switchOffsets[2] / totalDuration) nextIdx = 3;
              else if (p >= switchOffsets[1] / totalDuration) nextIdx = 2;
              else if (p >= switchOffsets[0] / totalDuration) nextIdx = 1;
              setActiveBeat((prev) => (prev === nextIdx ? prev : nextIdx));
            },
          },
        });

        stRef.current = tl.scrollTrigger;

        if (progressFill) {
          tl.to(
            progressFill,
            { scaleX: 1, duration: totalDuration, ease: 'none' },
            0
          );
        }

        // Handoff at exact slot boundaries prevents double-headline overlap while keeping stage anchored
        for (let i = 1; i < beatNodes.length; i += 1) {
          const handoffAt = switchOffsets[i - 1] ?? i - 0.16;
          const exitStart = handoffAt - 0.1;
          const prevBeat = beatNodes[i - 1];
          const nextBeat = beatNodes[i];
          const prevLayer = visualLayers[i - 1];
          const nextLayer = visualLayers[i];
          const nextBar = nextBeat?.querySelector('[data-story-underline]');

          if (prevBeat) {
            tl.to(
              prevBeat,
              { autoAlpha: 0, y: -14, duration: 0.1, ease: 'power2.in' },
              exitStart
            );
          }

          if (nextBeat) {
            tl.fromTo(
              nextBeat,
              { autoAlpha: 0, y: 14 },
              { autoAlpha: 1, y: 0, duration: 0.12, ease: 'power3.out' },
              handoffAt
            );
          }

          if (nextBar) {
            tl.fromTo(
              nextBar,
              { '--hl-progress': '0%' },
              { '--hl-progress': '100%', duration: 0.18, ease: 'power2.out' },
              handoffAt + 0.04
            );
          }

          if (prevLayer) {
            tl.to(
              prevLayer,
              { autoAlpha: 0, y: -6, duration: 0.1, ease: 'power2.in' },
              exitStart
            );
          }

          if (nextLayer) {
            tl.fromTo(
              nextLayer,
              { autoAlpha: 0, y: 8 },
              { autoAlpha: 1, y: 0, duration: 0.12, ease: 'power2.out' },
              handoffAt
            );
          }
        }

        tl.to({}, { duration: totalDuration }, 0);

        const refreshLayout = () => {
          ScrollTrigger.sort();
          ScrollTrigger.refresh();
        };

        const rafId = window.requestAnimationFrame(refreshLayout);
        if (document.fonts?.ready) {
          document.fonts.ready.then(refreshLayout).catch(() => {});
        }

        return () => {
          window.cancelAnimationFrame(rafId);
          stRef.current = null;
          setIsDesktopStage(false);
        };
      }
    );

    mm.add(
      '(max-width: 959px) and (prefers-reduced-motion: no-preference), (max-height: 639px) and (prefers-reduced-motion: no-preference)',
      () => {
        setIsDesktopStage(false);
        const cards = gsap.utils.toArray('[data-story-mobile-item]', sectionEl);
        cards.forEach((card) => {
          const draws = card.querySelectorAll('[data-diagram-draw]');
          const nodes = card.querySelectorAll('[data-diagram-node]');
          const states = card.querySelectorAll('[data-diagram-state]');
          const dashes = card.querySelectorAll('[data-diagram-dash]');

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              once: true,
            },
          });

          tl.from(card, {
            y: 16,
            opacity: 0,
            duration: 0.45,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
          });

          if (nodes.length) {
            tl.from(
              nodes,
              {
                opacity: 0,
                scale: 0.96,
                transformOrigin: 'center center',
                duration: 0.35,
                stagger: 0.04,
                ease: 'power2.out',
                clearProps: 'transform,opacity',
              },
              '-=0.22'
            );
          }

          if (draws.length) {
            tl.fromTo(
              draws,
              { strokeDashoffset: 100 },
              {
                strokeDashoffset: 0,
                duration: 0.55,
                stagger: 0.06,
                ease: 'power2.out',
                clearProps: 'strokeDashoffset',
              },
              '-=0.2'
            );
          }

          if (dashes.length) {
            tl.from(
              dashes,
              {
                opacity: 0,
                duration: 0.3,
                clearProps: 'opacity',
              },
              '-=0.35'
            );
          }

          if (states.length) {
            tl.from(
              states,
              {
                opacity: 0,
                y: 4,
                duration: 0.3,
                stagger: 0.05,
                ease: 'power2.out',
                clearProps: 'transform,opacity',
              },
              '-=0.2'
            );
          }
        });

        return () => {};
      }
    );

    return () => {
      mm.revert();
      stRef.current = null;
      ScrollTrigger.refresh();
    };
  }, [serviceSlug, totalBeats]);

  // Synchronized per-slide diagram choreography on Desktop whenever activeBeat changes or stage enters
  useEffect(() => {
    const stageEl = stageRef.current;
    if (!stageEl || !isDesktopStage || prefersReducedMotion()) return undefined;

    const activeSlide = stageEl.querySelector(
      `.sd-story__visual-col [data-visual-beat="${activeBeat}"]`
    );
    if (!activeSlide) return undefined;

    const ctx = gsap.context(() => {
      const nodes = activeSlide.querySelectorAll('[data-diagram-node]');
      const draws = activeSlide.querySelectorAll('[data-diagram-draw]');
      const dashes = activeSlide.querySelectorAll('[data-diagram-dash]');
      const states = activeSlide.querySelectorAll('[data-diagram-state]');
      const shifts = activeSlide.querySelectorAll('[data-diagram-shift]');
      const scaleBars = activeSlide.querySelectorAll('[data-diagram-scale-x]');

      const seq = gsap.timeline({ defaults: { overwrite: 'auto' } });

      if (nodes.length) {
        seq.fromTo(
          nodes,
          { opacity: 0.25, scale: 0.94, transformOrigin: 'center center' },
          {
            opacity: 1,
            scale: 1,
            duration: 0.34,
            stagger: 0.05,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          },
          0
        );
      }

      if (draws.length) {
        seq.fromTo(
          draws,
          { strokeDashoffset: 100 },
          {
            strokeDashoffset: 0,
            duration: 0.56,
            stagger: 0.075,
            ease: 'power2.out',
            clearProps: 'strokeDashoffset',
          },
          0.1
        );
      }

      if (dashes.length) {
        seq.fromTo(
          dashes,
          { opacity: 0 },
          { opacity: 1, duration: 0.35, clearProps: 'opacity' },
          0.26
        );
      }

      if (scaleBars.length) {
        seq.fromTo(
          scaleBars,
          { scaleX: 0.12, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 0.68,
            ease: 'power2.out',
            clearProps: 'transform',
          },
          0.18
        );
      }

      if (shifts.length) {
        shifts.forEach((el) => {
          const shiftX = Number(el.getAttribute('data-diagram-shift')) || 12;
          seq.fromTo(
            el,
            { x: 0 },
            { x: shiftX, duration: 0.55, ease: 'power2.out' },
            0.34
          );
        });
      }

      if (states.length) {
        seq.fromTo(
          states,
          { opacity: 0, scale: 0.88, y: 4, transformOrigin: 'center center' },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.32,
            stagger: 0.06,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          },
          0.42
        );
      }
    }, activeSlide);

    return () => ctx.revert();
  }, [activeBeat, entryPulse, isDesktopStage, serviceSlug]);

  const handleBridgeScroll = useCallback((event) => {
    event.preventDefault();
    const target = document.getElementById('service-deliverables');
    if (!target) return;
    const header = document.querySelector('.site-header');
    const headerH = header ? Math.round(header.getBoundingClientRect().height) : 76;
    scrollToTarget(target, { offset: -(headerH + 16), immediate: false });
  }, []);

  const handleJumpToBeat = useCallback((beatIdx) => {
    const st = stRef.current;
    if (!st || prefersReducedMotion()) return;
    const progressTargets = [0.06, 0.27, 0.47, 0.67, 0.88];
    const targetProgress = progressTargets[beatIdx] ?? 0;
    const destination = st.start + (st.end - st.start) * targetProgress;
    scrollToTarget(destination, { immediate: false });
  }, []);

  const isResolvedBeat = activeBeat === problems.length;
  const currentProblem = problems[Math.min(activeBeat, problems.length - 1)];
  const visualStatus = isResolvedBeat
    ? problemStory.closingEyebrow
    : currentProblem?.tag || 'FRICTION POINT';
  const visualCaption = isResolvedBeat
    ? problemStory.closingSubtext
    : currentProblem?.visualCaption || '';

  return (
    <section
      ref={sectionRef}
      className="sd-story"
      aria-labelledby={headingId}
    >
      <div ref={stageRef} className="sd-story__desktop-stage">
        <div className="container sd-story__container">
          <header className="sd-story__top">
            <div className="sd-story__opening">
              <span className="eyebrow eyebrow--on-dark">{problemStory.eyebrow}</span>
              <h2 id={headingId} className="sd-story__opening-heading">
                {problemStory.openingStatement}
              </h2>
            </div>

            <div className="sd-story__rail-wrap" aria-label="Story progress">
              <div className="sd-story__rail" role="group" aria-label="Jump to problem slide">
                {problems.map((item, idx) => {
                  const isActive = activeBeat === idx;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={`tabular-num sd-story__rail-btn${isActive ? ' is-active' : ''}`}
                      aria-current={isActive ? 'step' : undefined}
                      onClick={() => handleJumpToBeat(idx)}
                    >
                      {item.number}
                    </button>
                  );
                })}
                <button
                  type="button"
                  className={`sd-story__rail-btn sd-story__rail-btn--resolved${
                    isResolvedBeat ? ' is-active' : ''
                  }`}
                  aria-current={isResolvedBeat ? 'step' : undefined}
                  onClick={() => handleJumpToBeat(problems.length)}
                >
                  Resolved
                </button>
              </div>
              <div className="sd-story__progress-track" aria-hidden="true">
                <div className="sd-story__progress-fill" data-story-progress-fill />
              </div>
            </div>
          </header>

          <div className="sd-story__split">
            <div className="sd-story__narrative-slot">
              {problems.map((problem, idx) => {
                const isActive = activeBeat === idx;
                return (
                  <article
                    key={problem.id}
                    data-story-beat={idx}
                    data-story-mobile-item
                    aria-hidden={isDesktopStage && !isActive}
                    className={`sd-story__beat${isActive ? ' is-active' : ''}`}
                  >
                    <div className="sd-story__beat-meta">
                      <span className="tabular-num sd-story__beat-num">{problem.number}</span>
                      <span className="sd-story__beat-tag">{problem.tag}</span>
                    </div>

                    <h3 className="sd-story__statement">
                      {renderHighlightedStatement(problem.statement, problem.highlight)}
                    </h3>

                    <p className="sd-story__impact">{problem.impact}</p>

                    <div className="sd-story__inline-visual">
                      <ServiceProblemVisual
                        visualType={problemStory.visualType}
                        activeBeat={idx}
                        isolateBeat={idx}
                        statusLabel={problem.tag}
                        caption={problem.visualCaption}
                        isResolved={false}
                      />
                    </div>
                  </article>
                );
              })}

              <article
                data-story-beat={problems.length}
                data-story-mobile-item
                aria-hidden={isDesktopStage && !isResolvedBeat}
                className={`sd-story__beat sd-story__beat--resolved${
                  isResolvedBeat ? ' is-active' : ''
                }`}
              >
                <div className="sd-story__beat-meta">
                  <span className="eyebrow eyebrow--on-dark">
                    {problemStory.closingEyebrow}
                  </span>
                </div>

                <h3 className="sd-story__statement sd-story__statement--resolved">
                  {problemStory.closingStatement}
                </h3>

                <p className="sd-story__impact">{problemStory.closingSubtext}</p>

                <div className="sd-story__inline-visual">
                  <ServiceProblemVisual
                    visualType={problemStory.visualType}
                    activeBeat={problems.length}
                    isolateBeat={problems.length}
                    statusLabel={problemStory.closingEyebrow}
                    caption={problemStory.closingSubtext}
                    isResolved
                  />
                </div>

                <a
                  href="#service-deliverables"
                  className="sd-story__bridge-link"
                  tabIndex={isDesktopStage && !isResolvedBeat ? -1 : 0}
                  onClick={handleBridgeScroll}
                >
                  <span>Inspect what we deliver</span>
                  <ArrowDown size={15} aria-hidden="true" />
                </a>
              </article>
            </div>

            <div className="sd-story__visual-col">
              <ServiceProblemVisual
                visualType={problemStory.visualType}
                activeBeat={activeBeat}
                statusLabel={visualStatus}
                caption={visualCaption}
                isResolved={isResolvedBeat}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
