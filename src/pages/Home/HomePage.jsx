import { lazy, Suspense, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  MessageCircle,
} from 'lucide-react';
import SeoHead from '../../components/SeoHead/SeoHead';
import MagneticButton from '../../components/MagneticButton/MagneticButton';
import {
  conceptProjects,
  homeContent,
  pillars,
  servicesData,
  siteConfig,
} from '../../data/siteData';
import { prefersReducedMotion, useGsapReveal } from '../../utils/motion';
import './HomePage.css';

const HeroLattice3D = lazy(() =>
  import('../../components/HeroCanvas/HeroLattice3D')
);

const PILLAR_ACCENT_MAP = {
  BUILD: 'orange',
  AUTOMATE: 'teal',
  GROW: 'dark',
};

export default function HomePage() {
  const pageRef = useRef(null);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  useGsapReveal(pageRef);

  const activeService = servicesData[activeServiceIndex] || servicesData[0];

  const handleScrollDown = () => {
    const target = document.getElementById('agency-intro');
    if (target) {
      target.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      });
    }
  };

  return (
    <div ref={pageRef} className="home-page">
      <SeoHead route="/" />

      {/* Section 1: Hero */}
      <section className="home-hero" aria-labelledby="home-hero-heading">
        <div className="container home-hero__grid">
          <div className="home-hero__content">
            <span className="eyebrow">{homeContent.hero.eyebrow}</span>
            <h1 id="home-hero-heading" className="display-hero home-hero__title">
              {homeContent.hero.headline}
            </h1>
            <p className="lead-text home-hero__sub">
              {homeContent.hero.subheadline}
            </p>
            <div className="home-hero__actions">
              <MagneticButton
                as={Link}
                to={homeContent.hero.primaryCta.href}
                className="btn btn--primary"
              >
                <span>{homeContent.hero.primaryCta.label}</span>
                <ArrowRight size={17} aria-hidden="true" />
              </MagneticButton>
              <MagneticButton
                as={Link}
                to={homeContent.hero.secondaryCta.href}
                className="btn btn--outline"
              >
                <span>{homeContent.hero.secondaryCta.label}</span>
              </MagneticButton>
            </div>

            <button
              type="button"
              className="home-hero__scroll-cue"
              onClick={handleScrollDown}
              aria-label="Scroll to agency introduction"
            >
              <span className="home-hero__scroll-track" aria-hidden="true">
                <ArrowDown size={14} className="home-hero__scroll-arrow" />
              </span>
              <span className="home-hero__scroll-label">Scroll to explore</span>
            </button>
          </div>

          <div className="home-hero__visual">
            <Suspense
              fallback={
                <div
                  className="home-hero__lattice-fallback"
                  aria-hidden="true"
                />
              }
            >
              <HeroLattice3D className="home-hero__lattice" />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Section 2: Intro (01 / THE AGENCY) */}
      <section
        id="agency-intro"
        className="home-intro"
        aria-labelledby="home-intro-heading"
      >
        <div className="container">
          <div className="home-intro__grid" data-reveal>
            <div className="home-intro__left">
              <span className="eyebrow">{homeContent.intro.eyebrow}</span>
              <h2 id="home-intro-heading" className="display-h2 home-intro__heading">
                {homeContent.intro.headline}
              </h2>
            </div>

            <div className="home-intro__right">
              <p className="lead-text home-intro__body">
                Most businesses outgrow their tools long before they outgrow
                their ambition. Disconnected spreadsheets, slow websites, and
                rigid off-the-shelf software quietly drain time every day.{' '}
                <mark className="home-intro__highlight">
                  SCALAROW brings design, software engineering, and automation
                  under one roof
                </mark>{' '}
                so your digital foundation supports where you are going next.
              </p>

              <div
                className="home-intro__highlights"
                data-reveal-group
              >
                {homeContent.intro.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="home-intro__stat"
                    data-reveal-item
                  >
                    <span className="home-intro__stat-label">{item.label}</span>
                    <span className="home-intro__stat-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What We Do — BUILD / AUTOMATE / GROW */}
      <section
        className="home-pillars"
        aria-labelledby="home-pillars-heading"
      >
        <div className="container">
          <div className="home-pillars__header" data-reveal>
            <span className="eyebrow">02 / WHAT WE DO</span>
            <h2 id="home-pillars-heading" className="display-h2">
              Three pillars. One unified studio.
            </h2>
          </div>

          <div className="home-pillars__grid" data-reveal-group>
            {pillars.map((pillar) => (
              <article
                key={pillar.key}
                className={`home-pillar home-pillar--${pillar.accent}`}
                data-reveal-item
              >
                <div className="home-pillar__top">
                  <span className="tabular-num home-pillar__num">
                    {pillar.number}
                  </span>
                  <span className="home-pillar__key">{pillar.key}</span>
                </div>

                <h3 className="display-h3 home-pillar__title">
                  {pillar.title}
                </h3>
                <p className="home-pillar__summary">{pillar.summary}</p>

                <ul className="home-pillar__services">
                  {pillar.services.map((service) => (
                    <li key={service.href}>
                      <Link to={service.href} className="home-pillar__link">
                        <span>{service.label}</span>
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Featured Services (Interactive Swiss-Editorial List) */}
      <section
        className="home-services"
        aria-labelledby="home-services-heading"
      >
        <div className="container">
          <div className="home-services__header" data-reveal>
            <div>
              <span className="eyebrow">03 / CAPABILITIES</span>
              <h2 id="home-services-heading" className="display-h2">
                Engineered services, built to fit.
              </h2>
            </div>
            <Link to="/services" className="btn btn--outline">
              <span>Explore All Services</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="home-services__layout">
            <ul
              className="home-services__list"
              aria-label="Featured capabilities"
            >
              {servicesData.map((service, index) => {
                const isActive = index === activeServiceIndex;
                return (
                  <li key={service.id} className="home-services__row">
                    <button
                      type="button"
                      className={`home-services__trigger${
                        isActive ? ' is-active' : ''
                      }`}
                      aria-pressed={isActive}
                      onMouseEnter={() => setActiveServiceIndex(index)}
                      onFocus={() => setActiveServiceIndex(index)}
                      onClick={() => setActiveServiceIndex(index)}
                    >
                      <span className="tabular-num home-services__num">
                        {service.number}
                      </span>
                      <span className="home-services__title">
                        {service.title}
                      </span>
                      <span
                        className={`home-services__pillar-tag home-services__pillar-tag--${
                          PILLAR_ACCENT_MAP[service.pillar] || 'dark'
                        }`}
                      >
                        {service.pillar}
                      </span>
                      <ArrowRight
                        size={18}
                        aria-hidden="true"
                        className="home-services__arrow"
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            <aside
              className="home-services__preview"
              aria-live="polite"
              aria-label="Selected service details"
            >
              <div className="home-services__preview-meta">
                <span className="eyebrow">
                  {activeService.number} · {activeService.pillar}
                </span>
              </div>
              <h3 className="display-h3 home-services__preview-title">
                {activeService.title}
              </h3>
              <p className="home-services__preview-summary">
                {activeService.shortSummary}
              </p>

              <div className="home-services__deliverables">
                <span className="home-services__deliverables-label">
                  Key Deliverables
                </span>
                <ul className="home-services__deliverables-list">
                  {activeService.deliverables.slice(0, 4).map((item) => (
                    <li key={item}>
                      <Check size={15} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={`/services/${activeService.slug}`}
                className="btn btn--dark home-services__preview-cta"
              >
                <span>View {activeService.title}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* Section 5: Selected Work (#0E1116 Dark Contrast Band) */}
      <section className="home-work" aria-labelledby="home-work-heading">
        <div className="container">
          <div className="home-work__header" data-reveal>
            <div>
              <span className="eyebrow eyebrow--on-dark">
                04 / SELECTED WORK
              </span>
              <h2 id="home-work-heading" className="display-h2">
                Architecture in practice.
              </h2>
            </div>
            <Link to="/work" className="btn btn--outline-dark">
              <span>All Concept Projects</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="home-work__list" data-reveal-group>
            {conceptProjects.map((project, index) => {
              const isReversed = index % 2 === 1;
              return (
                <article
                  key={project.slug}
                  className={`home-work__item${
                    isReversed ? ' is-reversed' : ''
                  }`}
                  data-reveal-item
                >
                  <div className="home-work__meta-col">
                    <div className="home-work__badges">
                      <span className="home-work__concept-badge">
                        {project.label}
                      </span>
                      <span
                        className={`home-work__pillar-badge home-work__pillar-badge--${project.accent}`}
                      >
                        {project.pillar}
                      </span>
                    </div>
                    <span className="tabular-num home-work__index">
                      0{index + 1}
                    </span>
                    <ul className="home-work__stack" aria-label="Tech stack">
                      {project.techStack.map((tech) => (
                        <li key={tech} className="home-work__tech">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="home-work__content-col">
                    <h3 className="display-h3 home-work__title">
                      {project.title}
                    </h3>
                    <p className="home-work__summary">{project.summary}</p>
                    <Link
                      to={`/work/${project.slug}`}
                      className="home-work__link"
                    >
                      <span>Read Architecture Case Study</span>
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 6: Our Approach (Sticky Left + Scrolling Right Timeline) */}
      <section
        className="home-approach"
        aria-labelledby="home-approach-heading"
      >
        <div className="container home-approach__grid">
          <div className="home-approach__sticky" data-reveal>
            <span className="eyebrow">{homeContent.approach.eyebrow}</span>
            <h2
              id="home-approach-heading"
              className="display-h2 home-approach__heading"
            >
              {homeContent.approach.headline}
            </h2>
            <p className="lead-text home-approach__sub">
              {homeContent.approach.subheadline}
            </p>
          </div>

          <ol className="home-approach__timeline" data-reveal-group>
            {homeContent.approach.steps.map((item) => (
              <li
                key={item.step}
                className="home-approach__step"
                data-reveal-item
              >
                <span className="tabular-num home-approach__step-num">
                  {item.step}
                </span>
                <div className="home-approach__step-body">
                  <h3 className="display-h3 home-approach__step-title">
                    {item.title}
                  </h3>
                  <p className="home-approach__step-desc">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 7: Why Work With Us (#E9FAF8 Soft Aqua Split) */}
      <section className="home-why" aria-labelledby="home-why-heading">
        <div className="container home-why__grid">
          <div className="home-why__left" data-reveal>
            <span className="eyebrow">{homeContent.whyWorkWithUs.eyebrow}</span>
            <h2 id="home-why-heading" className="display-h2 home-why__heading">
              {homeContent.whyWorkWithUs.headline}
            </h2>
            <blockquote className="home-why__quote">
              “{homeContent.whyWorkWithUs.quote}”
            </blockquote>
          </div>

          <div className="home-why__matrix" data-reveal-group>
            {homeContent.whyWorkWithUs.points.map((point, index) => (
              <article
                key={point.title}
                className="home-why__cell"
                data-reveal-item
              >
                <span className="tabular-num home-why__cell-num">
                  0{index + 1}
                </span>
                <h3 className="home-why__cell-title">{point.title}</h3>
                <p className="home-why__cell-desc">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Project Enquiry CTA (#FF9F1C Full-Width Banner) */}
      <section className="home-cta" aria-labelledby="home-cta-heading">
        <div className="container home-cta__inner" data-reveal>
          <span className="home-cta__eyebrow">
            {homeContent.enquiryCta.eyebrow}
          </span>
          <h2 id="home-cta-heading" className="display-h1 home-cta__heading">
            {homeContent.enquiryCta.headline}
          </h2>
          <p className="home-cta__body">{homeContent.enquiryCta.body}</p>

          <div className="home-cta__actions">
            <MagneticButton
              as={Link}
              to={homeContent.enquiryCta.primaryCta.href}
              className="btn btn--dark"
            >
              <span>{homeContent.enquiryCta.primaryCta.label}</span>
              <ArrowRight size={17} aria-hidden="true" />
            </MagneticButton>
            <MagneticButton
              as="a"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline home-cta__whatsapp"
            >
              <MessageCircle size={17} aria-hidden="true" />
              <span>{siteConfig.whatsappDisplay}</span>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
