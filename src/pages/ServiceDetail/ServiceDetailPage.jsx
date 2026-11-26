import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  AlertCircle,
} from 'lucide-react';
import SeoHead from '../../components/SeoHead/SeoHead';
import MagneticButton from '../../components/MagneticButton/MagneticButton';
import ServiceHeroVisual from './ServiceHeroVisual';
import { conceptProjects, servicesData } from '../../data/siteData';
import { useGsapReveal } from '../../utils/motion';
import './ServiceDetailPage.css';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const pageRef = useRef(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const service = servicesData.find((item) => item.slug === slug);

  useEffect(() => {
    setOpenFaqIndex(0);
  }, [slug]);

  useGsapReveal(pageRef);

  if (!service) {
    return (
      <div className="service-not-found">
        <SeoHead route="/services" title="Service Not Found | SCALAROW" />
        <div className="container service-not-found__inner">
          <span className="eyebrow eyebrow--amber">404 / SERVICE NOT FOUND</span>
          <h1 className="display-h1 service-not-found__title">
            We couldn&apos;t find that service page.
          </h1>
          <p className="lead-text service-not-found__desc">
            Explore all six SCALAROW capabilities across Build, Automate, and Grow.
          </p>
          <div className="service-not-found__actions">
            <MagneticButton as={Link} to="/services" className="btn btn--primary">
              <ArrowLeft size={16} aria-hidden="true" />
              Back to All Services
            </MagneticButton>
          </div>
        </div>
      </div>
    );
  }

  const isDarkHero = service.layoutVariant === 'dark-architecture';
  const relatedProjects = conceptProjects.filter((project) =>
    service.conceptProjectSlugs?.includes(project.slug)
  );

  const toggleFaq = (idx) => {
    setOpenFaqIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <div ref={pageRef} key={service.slug} className="service-detail-page">
      <SeoHead route={`/services/${service.slug}`} />

      {/* 1. Bespoke Hero per layoutVariant */}
      <section
        className={`sd-hero sd-hero--${service.layoutVariant} ${
          isDarkHero ? 'sd-hero--dark' : ''
        }`}
      >
        <div className="container">
          <Link
            to="/services"
            className={`sd-back-link ${isDarkHero ? 'sd-back-link--dark' : ''}`}
          >
            <ArrowLeft size={15} aria-hidden="true" />
            <span>All Services</span>
          </Link>

          <div className="sd-hero__grid">
            <div className="sd-hero__content" data-reveal>
              <span
                className={`eyebrow ${isDarkHero ? 'eyebrow--on-dark' : ''}`}
              >
                {service.hero.eyebrow}
              </span>
              <h1 className="display-h1 sd-hero__title">
                {service.hero.headline}
              </h1>
              <p
                className={`lead-text sd-hero__sub ${
                  isDarkHero ? 'sd-hero__sub--dark' : ''
                }`}
              >
                {service.hero.subheadline}
              </p>

              <div className="sd-hero__actions">
                <MagneticButton as={Link} to="/contact" className="btn btn--primary">
                  Discuss This Service
                  <ArrowRight size={16} aria-hidden="true" />
                </MagneticButton>
                <a
                  href="#service-deliverables"
                  className={`btn ${isDarkHero ? 'btn--outline-dark' : 'btn--outline'}`}
                >
                  View Deliverables
                </a>
              </div>
            </div>

            <div className="sd-hero__visual" data-reveal>
              <ServiceHeroVisual variant={service.layoutVariant} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Clear Explanation */}
      <section className="sd-explanation">
        <div className="container sd-explanation__grid" data-reveal>
          <div>
            <span className="eyebrow">01 / OVERVIEW</span>
            <h2 className="display-h2 sd-explanation__heading">
              Why {service.title} matters
            </h2>
          </div>
          <p className="lead-text sd-explanation__body">{service.explanation}</p>
        </div>
      </section>

      {/* 3. Problems We Solve */}
      <section className="sd-problems">
        <div className="container">
          <div className="sd-section-head" data-reveal>
            <span className="eyebrow eyebrow--amber">02 / FRICTION POINTS</span>
            <h2 className="display-h2 sd-section-head__title">
              Problems we solve
            </h2>
          </div>

          <div className="sd-problems__grid" data-reveal-group>
            {service.problemsSolved.map((problem, idx) => (
              <article
                key={problem}
                className="sd-problems__card"
                data-reveal-item
              >
                <div className="sd-problems__top">
                  <span className="tabular-num sd-problems__num">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <AlertCircle
                    size={18}
                    className="sd-problems__icon"
                    aria-hidden="true"
                  />
                </div>
                <p className="sd-problems__text">{problem}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What We Provide (Deliverables) & Key Features */}
      <section id="service-deliverables" className="sd-scope">
        <div className="container sd-scope__grid" data-reveal-group>
          <div className="sd-scope__panel" data-reveal-item>
            <span className="eyebrow">03 / WHAT WE PROVIDE</span>
            <h2 className="display-h2 sd-scope__title">Deliverables</h2>
            <ul className="sd-checklist">
              {service.deliverables.map((item) => (
                <li key={item} className="sd-checklist__item">
                  <Check
                    size={17}
                    className="sd-checklist__icon"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sd-scope__panel sd-scope__panel--features" data-reveal-item>
            <span className="eyebrow eyebrow--amber">04 / CAPABILITIES</span>
            <h2 className="display-h2 sd-scope__title">
              Key features &amp; standards
            </h2>
            <ul className="sd-checklist">
              {service.features.map((feature) => (
                <li key={feature} className="sd-checklist__item">
                  <Check
                    size={17}
                    className="sd-checklist__icon sd-checklist__icon--amber"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. 4-Step Process */}
      <section className="sd-process">
        <div className="container">
          <div className="sd-section-head" data-reveal>
            <span className="eyebrow">05 / HOW WE DELIVER</span>
            <h2 className="display-h2 sd-section-head__title">
              A clear 4-step process
            </h2>
          </div>

          <div className="sd-process__grid" data-reveal-group>
            {service.process.map((item) => (
              <article key={item.step} className="sd-process__step" data-reveal-item>
                <span className="tabular-num sd-process__num">{item.step}</span>
                <h3 className="display-h3 sd-process__title">{item.title}</h3>
                <p className="sd-process__desc">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Relevant Concept Projects */}
      {relatedProjects.length > 0 && (
        <section className="sd-projects">
          <div className="container">
            <div className="sd-section-head" data-reveal>
              <span className="eyebrow eyebrow--amber">06 / ARCHITECTURE SHOWCASE</span>
              <h2 className="display-h2 sd-section-head__title">
                Relevant concept projects
              </h2>
            </div>

            <div className="sd-projects__grid" data-reveal-group>
              {relatedProjects.map((project) => (
                <article
                  key={project.slug}
                  className="sd-project-card"
                  data-reveal-item
                >
                  <div className="sd-project-card__meta">
                    <span className="sd-project-card__badge">{project.label}</span>
                    <span className="eyebrow">{project.pillar}</span>
                  </div>
                  <h3 className="display-h3 sd-project-card__title">
                    {project.title}
                  </h3>
                  <p className="sd-project-card__summary">{project.summary}</p>
                  <div className="sd-project-card__stack">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="sd-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/work/${project.slug}`}
                    className="sd-project-card__link"
                  >
                    Inspect Architecture
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Accessible FAQ Accordion (<button aria-expanded>) */}
      <section className="sd-faq" aria-labelledby="sd-faq-heading">
        <div className="container sd-faq__grid">
          <div className="sd-faq__intro" data-reveal>
            <span className="eyebrow">07 / FAQ</span>
            <h2 id="sd-faq-heading" className="display-h2 sd-section-head__title">
              Common questions
            </h2>
            <p className="sd-faq__sub">
              Straight answers on scope, ownership, and how we work together.
            </p>
          </div>

          <div className="sd-faq__list" data-reveal>
            {service.faq.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              const btnId = `faq-btn-${service.slug}-${idx}`;
              const panelId = `faq-panel-${service.slug}-${idx}`;

              return (
                <div
                  key={item.question}
                  className={`sd-faq__item ${isOpen ? 'is-open' : ''}`}
                >
                  <h3 className="sd-faq__q-wrap">
                    <button
                      type="button"
                      id={btnId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="sd-faq__trigger"
                      onClick={() => toggleFaq(idx)}
                    >
                      <span className="sd-faq__question">{item.question}</span>
                      <ChevronDown
                        size={18}
                        className="sd-faq__chevron"
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    hidden={!isOpen}
                    className="sd-faq__panel"
                  >
                    <p className="sd-faq__answer">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Project Enquiry CTA */}
      <section className="sd-cta">
        <div className="container sd-cta__inner" data-reveal>
          <div>
            <span className="eyebrow eyebrow--on-dark">READY TO BUILD</span>
            <h2 className="display-h2 sd-cta__title">
              Let&apos;s scope your {service.title} project.
            </h2>
          </div>
          <div className="sd-cta__actions">
            <MagneticButton as={Link} to="/contact" className="btn btn--primary">
              Start an Enquiry
              <ArrowRight size={17} aria-hidden="true" />
            </MagneticButton>
            <MagneticButton as={Link} to="/services" className="btn btn--outline-dark">
              Explore Other Services
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
