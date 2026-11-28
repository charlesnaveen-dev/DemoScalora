import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { homeContent } from '../../data/siteData';
import { prefersReducedMotion } from '../../utils/motion';
import './StudioExploration.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Studio Study B — Monograph Reading Cadence.
 * Replaces the generic 4/8 split with a serene single-measure monograph:
 * heading with a subtle orange underscore, two rhythmic narrative beats
 * (The friction vs. The unified studio response), and a typographic colophon.
 */
export default function StudioConceptB({ previewMode = 'responsive' }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.from('[data-studio-b-reveal]', {
        y: 16,
        opacity: 0.2,
        duration: 0.72,
        stagger: 0.1,
        ease: 'power3.out',
        immediateRender: false,
        clearProps: 'all',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
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
      className={`studio-exp studio-exp--warm${
        isMobilePreview ? ' studio-exp--preview-mobile' : ''
      }`}
      aria-labelledby="studio-b-heading"
    >
      <div className="studio-exp__container">
        <div className="studio-b__measure">
          <header className="studio-b__header" data-studio-b-reveal>
            <span className="studio-b__eyebrow">{homeContent.intro.eyebrow}</span>
            <h2 id="studio-b-heading" className="studio-b__heading">
              Digital systems built to work in the{' '}
              <span className="studio-b__accent-word">real world.</span>
            </h2>
          </header>

          <div className="studio-b__beats">
            <div data-studio-b-reveal>
              <span className="studio-b__beat-label">The common bottleneck</span>
              <p className="studio-b__tension">
                Most businesses outgrow their tools long before they outgrow their ambition.
                Disconnected spreadsheets, slow websites, and rigid off-the-shelf software
                quietly drain time every day.
              </p>
            </div>

            <div data-studio-b-reveal>
              <span className="studio-b__beat-label">How SCALAROW responds</span>
              <p className="studio-b__response">
                SCALAROW brings design, software engineering, and automation under one roof so
                your digital foundation supports where you are going next.
              </p>
            </div>
          </div>

          <div className="studio-b__colophon" data-studio-b-reveal>
            {homeContent.intro.highlights.map((item, idx) => (
              <span key={item.label} className="studio-b__colophon-item">
                {idx > 0 && <span className="studio-b__colophon-dot" aria-hidden="true" />}
                <span className="studio-b__colophon-key">{item.label}:</span>
                <span>{item.value}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
