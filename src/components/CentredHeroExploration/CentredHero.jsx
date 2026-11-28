import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import CentredHeroBackground from './CentredHeroBackgrounds';
import { homeContent } from '../../data/siteData';
import { prefersReducedMotion } from '../../utils/motion';
import './CentredHero.css';

export default function CentredHero({
  bgVariant = 'triad',
  previewMode = 'responsive',
}) {
  const sectionRef = useRef(null);

  // Subtle text entrance that preserves immediate readability
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('[data-ch-eyebrow]', {
        y: 10,
        duration: 0.5,
        clearProps: 'transform',
      })
        .from(
          '[data-ch-line]',
          {
            y: 16,
            duration: 0.65,
            stagger: 0.08,
            clearProps: 'transform',
          },
          '-=0.3'
        )
        .from(
          '[data-ch-sub]',
          {
            y: 12,
            duration: 0.55,
            clearProps: 'transform',
          },
          '-=0.35'
        )
        .from(
          '[data-ch-actions]',
          {
            y: 10,
            duration: 0.5,
            clearProps: 'transform',
          },
          '-=0.35'
        );
    }, el);

    return () => ctx.revert();
  }, [bgVariant]);

  // Restrained pointer parallax for background depth
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || previewMode === 'mobile' || prefersReducedMotion()) return undefined;

    const finePointer =
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (!finePointer) return undefined;

    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let rafId = null;

    const step = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      el.style.setProperty('--ch-px', cx.toFixed(4));
      el.style.setProperty('--ch-py', cy.toFixed(4));

      if (Math.abs(tx - cx) > 0.002 || Math.abs(ty - cy) > 0.002) {
        rafId = requestAnimationFrame(step);
      } else {
        rafId = null;
      }
    };

    const schedule = () => {
      if (!rafId) rafId = requestAnimationFrame(step);
    };

    const onPointerMove = (e) => {
      if (e.pointerType === 'touch') return;
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      tx = Math.max(-1, Math.min(1, ((e.clientX - rect.left) / rect.width) * 2 - 1));
      ty = Math.max(-1, Math.min(1, ((e.clientY - rect.top) / rect.height) * 2 - 1));
      schedule();
    };

    const onPointerLeave = () => {
      tx = 0;
      ty = 0;
      schedule();
    };

    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerleave', onPointerLeave);

    return () => {
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerleave', onPointerLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [previewMode]);

  const isMobilePreview = previewMode === 'mobile';

  return (
    <section
      ref={sectionRef}
      className={`centred-hero${
        isMobilePreview ? ' centred-hero--preview-mobile' : ''
      }`}
      aria-labelledby={`centred-hero-heading-${bgVariant}`}
    >
      <div className="centred-hero__bg">
        <CentredHeroBackground key={bgVariant} variant={bgVariant} />
      </div>

      <div className="centred-hero__calm-veil" aria-hidden="true" />

      <div className="centred-hero__container">
        <div className="centred-hero__stack">
          <span className="centred-hero__eyebrow" data-ch-eyebrow>
            <span className="centred-hero__eyebrow-mark" aria-hidden="true" />
            <span>{homeContent.hero.eyebrow}</span>
          </span>

          <h1 id={`centred-hero-heading-${bgVariant}`} className="centred-hero__title">
            <span className="centred-hero__line" data-ch-line>
              Building
            </span>
            <span className="centred-hero__line" data-ch-line>
              What&apos;s Next<span className="centred-hero__period">.</span>
            </span>
          </h1>

          <p className="centred-hero__sub" data-ch-sub>
            {homeContent.hero.subheadline}
          </p>

          <div className="centred-hero__actions" data-ch-actions>
            <Link
              to={homeContent.hero.primaryCta.href}
              className="centred-hero__cta-primary"
            >
              <span>{homeContent.hero.primaryCta.label}</span>
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link
              to={homeContent.hero.secondaryCta.href}
              className="centred-hero__cta-secondary"
            >
              <span>{homeContent.hero.secondaryCta.label}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
