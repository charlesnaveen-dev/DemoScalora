import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '../../utils/motion';
import './StudioExploration.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Studio Study A — Stepped Editorial Triad.
 * Uses stepped typographic alignment inspired by SCALAROW's logo geometry,
 * zero cards/boxes, a scroll-triggered rule & highlight sweep, and a connected
 * editorial narrative layout without secondary interactive tabs.
 */
export default function StudioConceptA({ previewMode = 'responsive', id }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.from('[data-studio-a-rule]', {
        scaleX: 0,
        duration: 0.9,
        ease: 'power3.out',
        immediateRender: false,
        clearProps: 'transform',
        scrollTrigger: {
          trigger: el,
          start: 'top 82%',
          once: true,
        },
      });

      gsap.from('[data-studio-a-line]', {
        y: 16,
        opacity: 0.2,
        duration: 0.72,
        stagger: 0.09,
        ease: 'power3.out',
        immediateRender: false,
        clearProps: 'all',
        scrollTrigger: {
          trigger: '[data-studio-a-heading]',
          start: 'top 84%',
          once: true,
        },
      });

      gsap.from('[data-studio-a-body]', {
        y: 14,
        opacity: 0.2,
        duration: 0.7,
        ease: 'power3.out',
        immediateRender: false,
        clearProps: 'all',
        scrollTrigger: {
          trigger: '[data-studio-a-body]',
          start: 'top 86%',
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
      className={`studio-exp${isMobilePreview ? ' studio-exp--preview-mobile' : ''}`}
      aria-labelledby="studio-a-heading"
    >
      <div className="studio-exp__container">
        <div className="studio-a__topbar">
          <span className="studio-a__eyebrow">
            <span className="studio-a__triad-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>01 / THE STUDIO</span>
          </span>
          <span className="studio-a__index-tag">Design + Engineering Unified</span>
          <span className="studio-a__rule" data-studio-a-rule aria-hidden="true" />
        </div>

        <div className="studio-a__composition">
          <h2 id="studio-a-heading" className="studio-a__heading" data-studio-a-heading>
            <span className="studio-a__line studio-a__line--step-1" data-studio-a-line>
              Digital systems
            </span>
            <span className="studio-a__line studio-a__line--step-2" data-studio-a-line>
              built to work
            </span>
            <span className="studio-a__line studio-a__line--step-3" data-studio-a-line>
              in the real world.
            </span>
          </h2>

          <div className="studio-a__narrative-wrap" data-studio-a-body>
            <p className="studio-a__body">
              Most businesses outgrow their tools long before they outgrow their ambition.
              Disconnected spreadsheets, slow websites, and rigid off-the-shelf software quietly
              drain time every day.{' '}
              <span className="studio-a__phrase">
                SCALAROW brings design, software engineering, and automation under one roof
              </span>{' '}
              so your digital foundation supports where you are going next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
