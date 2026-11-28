import { lazy, Suspense, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { homeContent } from '../../data/siteData';
import { prefersReducedMotion } from '../../utils/motion';
import './HeroShared.css';

const ParametricStructure3D = lazy(() => import('./ParametricStructure3D'));

export default function HeroConceptA({ previewMode = 'responsive' }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl || prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('[data-hero-a-eyebrow]', {
        y: 10,
        duration: 0.5,
        clearProps: 'transform',
      })
        .from(
          '[data-hero-a-line]',
          {
            y: 18,
            duration: 0.65,
            stagger: 0.08,
            clearProps: 'transform',
          },
          '-=0.32'
        )
        .from(
          '[data-hero-a-sub]',
          {
            y: 12,
            duration: 0.55,
            clearProps: 'transform',
          },
          '-=0.38'
        )
        .from(
          '[data-hero-a-actions]',
          {
            y: 10,
            duration: 0.5,
            clearProps: 'transform',
          },
          '-=0.35'
        );
    }, heroEl);

    return () => ctx.revert();
  }, []);

  const isMobilePreview = previewMode === 'mobile';

  return (
    <section
      ref={heroRef}
      className={`hero-exp hero-exp--subtle-tone${
        isMobilePreview ? ' hero-exp--preview-mobile' : ''
      }`}
      aria-labelledby="hero-concept-a-heading"
    >
      <div className="hero-exp__container hero-exp__grid">
        <div className="hero-exp__content">
          <span className="hero-exp__eyebrow" data-hero-a-eyebrow>
            <span className="hero-exp__eyebrow-mark" aria-hidden="true" />
            <span>{homeContent.hero.eyebrow}</span>
          </span>

          <h1 id="hero-concept-a-heading" className="hero-exp__title">
            <span className="hero-exp__line" data-hero-a-line>
              Building
            </span>
            <span className="hero-exp__line" data-hero-a-line>
              What&apos;s Next<span className="hero-exp__period">.</span>
            </span>
          </h1>

          <p className="hero-exp__sub" data-hero-a-sub>
            {homeContent.hero.subheadline}
          </p>

          <div className="hero-exp__actions" data-hero-a-actions>
            <Link to={homeContent.hero.primaryCta.href} className="hero-exp__cta-primary">
              <span>{homeContent.hero.primaryCta.label}</span>
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link to={homeContent.hero.secondaryCta.href} className="hero-exp__cta-secondary">
              <span>{homeContent.hero.secondaryCta.label}</span>
            </Link>
          </div>
        </div>

        <div className="hero-exp__visual">
          <Suspense fallback={null}>
            <ParametricStructure3D forceMobileFallback={isMobilePreview} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
