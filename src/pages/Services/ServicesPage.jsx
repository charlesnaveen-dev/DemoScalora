import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import SeoHead from '../../components/SeoHead/SeoHead';
import MagneticButton from '../../components/MagneticButton/MagneticButton';
import { pillars, servicesData } from '../../data/siteData';
import { useGsapReveal } from '../../utils/motion';
import './ServicesPage.css';

export default function ServicesPage() {
  const pageRef = useRef(null);
  const [activePillar, setActivePillar] = useState(pillars[0]?.key || 'BUILD');

  useGsapReveal(pageRef);

  // Sync sticky jumpbar active pillar with scroll position
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const sectionEls = pillars
      .map((pillar) => ({
        key: pillar.key,
        el: document.getElementById(`pillar-${pillar.key.toLowerCase()}`),
      }))
      .filter((item) => item.el);

    if (sectionEls.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const matched = sectionEls.find((s) => s.el === visible[0].target);
          if (matched) setActivePillar(matched.key);
        }
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.35] }
    );

    sectionEls.forEach((item) => observer.observe(item.el));
    return () => observer.disconnect();
  }, []);

  const handleJumpClick = (pillarKey) => {
    setActivePillar(pillarKey);
  };

  return (
    <div ref={pageRef} className="services-page">
      <SeoHead route="/services" />

      {/* Editorial Hero */}
      <section className="services-hero">
        <div className="container services-hero__grid">
          <div data-reveal>
            <span className="eyebrow">CAPABILITIES / BUILD · AUTOMATE · GROW</span>
            <h1 className="display-hero services-hero__title">
              Six capabilities. One unified studio.
            </h1>
          </div>
          <div className="services-hero__aside" data-reveal>
            <p className="lead-text">
              Every website, application, and automated workflow we ship is engineered to
              work together—eliminating the seams between design, software, and
              operations.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Pillar Jump-Bar */}
      <nav className="services-jumpbar" aria-label="Service pillars">
        <div className="container services-jumpbar__inner">
          <span className="services-jumpbar__label">Jump to pillar</span>
          <ul className="services-jumpbar__list">
            {pillars.map((pillar) => {
              const isActive = activePillar === pillar.key;
              return (
                <li key={pillar.key}>
                  <a
                    href={`#pillar-${pillar.key.toLowerCase()}`}
                    className={`services-jumpbar__link services-jumpbar__link--${pillar.accent} ${
                      isActive ? 'is-active' : ''
                    }`}
                    onClick={() => handleJumpClick(pillar.key)}
                  >
                    <span className="tabular-num services-jumpbar__num">
                      {pillar.number}
                    </span>
                    <span>{pillar.key}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Pillars & Alternating 60/40 Service Blocks */}
      <div className="services-pillars">
        {pillars.map((pillar) => {
          const pillarServices = servicesData.filter(
            (service) => service.pillar === pillar.key
          );

          return (
            <section
              key={pillar.key}
              id={`pillar-${pillar.key.toLowerCase()}`}
              className={`services-pillar services-pillar--${pillar.accent}`}
              aria-labelledby={`pillar-heading-${pillar.key.toLowerCase()}`}
            >
              <div className="container">
                <header className="services-pillar__header" data-reveal>
                  <div className="services-pillar__meta">
                    <span className="tabular-num services-pillar__index">
                      PILLAR {pillar.number}
                    </span>
                    <span className="services-pillar__tag">{pillar.key}</span>
                  </div>
                  <div className="services-pillar__intro">
                    <h2
                      id={`pillar-heading-${pillar.key.toLowerCase()}`}
                      className="display-h1 services-pillar__title"
                    >
                      {pillar.title}
                    </h2>
                    <p className="lead-text services-pillar__summary">
                      {pillar.summary}
                    </p>
                  </div>
                </header>

                <div className="services-pillar__list">
                  {pillarServices.map((service, idx) => {
                    const isReversed = idx % 2 === 1;
                    return (
                      <article
                        key={service.id}
                        className={`service-block ${
                          isReversed ? 'service-block--reversed' : ''
                        }`}
                        data-reveal
                      >
                        <div className="service-block__main">
                          <div className="service-block__eyebrow-row">
                            <span className="tabular-num service-block__num">
                              {service.number}
                            </span>
                            <span className="eyebrow">{service.hero.eyebrow}</span>
                          </div>

                          <h3 className="display-h2 service-block__title">
                            {service.title}
                          </h3>
                          <p className="lead-text service-block__summary">
                            {service.shortSummary}
                          </p>
                          <p className="service-block__desc">
                            {service.hero.subheadline}
                          </p>

                          <div className="service-block__actions">
                            <MagneticButton
                              as={Link}
                              to={`/services/${service.slug}`}
                              className="btn btn--dark"
                            >
                              Explore {service.title}
                              <ArrowRight size={16} aria-hidden="true" />
                            </MagneticButton>
                          </div>
                        </div>

                        <aside
                          className="service-block__deliverables"
                          aria-label={`${service.title} deliverables`}
                        >
                          <div className="service-block__deliv-head">
                            <span className="eyebrow eyebrow--amber">
                              KEY DELIVERABLES
                            </span>
                            <span className="tabular-num service-block__deliv-count">
                              {String(service.deliverables.length).padStart(2, '0')} ITEMS
                            </span>
                          </div>
                          <ul className="service-block__deliv-list">
                            {service.deliverables.slice(0, 4).map((item) => (
                              <li key={item} className="service-block__deliv-item">
                                <Check
                                  size={16}
                                  className="service-block__deliv-icon"
                                  aria-hidden="true"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <Link
                            to={`/services/${service.slug}`}
                            className="service-block__text-link"
                          >
                            View full specification, process &amp; FAQ
                            <ArrowRight size={15} aria-hidden="true" />
                          </Link>
                        </aside>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom Enquiry Band */}
      <section className="services-cta">
        <div className="container services-cta__inner" data-reveal>
          <div>
            <span className="eyebrow eyebrow--on-dark">NOT SURE WHERE TO START?</span>
            <h2 className="display-h2 services-cta__title">
              Tell us the bottleneck. We&apos;ll recommend the right scope.
            </h2>
          </div>
          <div className="services-cta__actions">
            <MagneticButton as={Link} to="/contact" className="btn btn--primary">
              Start a Project
              <ArrowRight size={17} aria-hidden="true" />
            </MagneticButton>
            <MagneticButton as={Link} to="/work" className="btn btn--outline-dark">
              View Concept Work
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
