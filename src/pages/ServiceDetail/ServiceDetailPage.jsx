import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, Check, ChevronDown } from 'lucide-react';
import SeoHead from '../../components/SeoHead/SeoHead';
import MagneticButton from '../../components/MagneticButton/MagneticButton';
import {
  CapabilityVisual,
  ServiceHeroBackdrop,
} from './ServiceSectionVisuals';
import ServiceProblemStory from './ServiceProblemStory';
import { SERVICE_DETAIL_CONTENT } from './serviceDetailContent';
import { conceptProjects, servicesData } from '../../data/siteData';
import { prefersReducedMotion, scrollToTarget, useGsapReveal } from '../../utils/motion';
import './ServiceDetailPage.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const buildRef = useRef(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const service = servicesData.find((item) => item.slug === slug);
  const detailContent = service ? SERVICE_DETAIL_CONTENT[service.slug] : null;

  useEffect(() => {
    setOpenFaqIndex(0);
  }, [slug]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.location.hash) return undefined;
    const hashId = window.location.hash.slice(1);
    const timer = window.setTimeout(() => {
      ScrollTrigger.refresh();
      const target = document.getElementById(hashId);
      if (!target) return;
      const header = document.querySelector('.site-header');
      const headerH = header ? Math.round(header.getBoundingClientRect().height) : 76;
      scrollToTarget(target, { offset: -(headerH + 16), immediate: false });
    }, 180);

    return () => window.clearTimeout(timer);
  }, [slug]);

  // Subtle mount animation for Section 01 Hero (preserves immediate legibility)
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl || prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('[data-sd-hero-eyebrow]', {
        y: 10,
        duration: 0.48,
        clearProps: 'transform',
      })
        .from(
          '[data-sd-hero-line]',
          {
            y: 16,
            duration: 0.62,
            stagger: 0.08,
            clearProps: 'transform',
          },
          '-=0.28'
        )
        .from(
          '[data-sd-hero-desc]',
          {
            y: 12,
            duration: 0.52,
            clearProps: 'transform',
          },
          '-=0.34'
        );
    }, heroEl);

    return () => ctx.revert();
  }, [slug]);

  // Clean staggered reveal for Section 02 (What We Build) 6-card grid
  useEffect(() => {
    const buildEl = buildRef.current;
    if (!buildEl || prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('[data-sd-build-card]', buildEl);
      if (cards.length === 0) return;

      gsap.from(cards, {
        y: 20,
        opacity: 0,
        duration: 0.65,
        stagger: 0.07,
        ease: 'power3.out',
        immediateRender: false,
        clearProps: 'all',
        scrollTrigger: {
          trigger: buildEl.querySelector('[data-sd-build-grid]') || buildEl,
          start: 'top 90%',
          once: true,
          refreshPriority: 2,
        },
      });
    }, buildEl);

    return () => ctx.revert();
  }, [slug]);

  // Preserve GSAP ScrollTrigger reveal animations for preserved sections 04-08
  useGsapReveal(pageRef);

  if (!service || !detailContent) {
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

  const relatedProjects = conceptProjects.filter((project) =>
    service.conceptProjectSlugs?.includes(project.slug)
  );

  const toggleFaq = (idx) => {
    setOpenFaqIndex((prev) => (prev === idx ? -1 : idx));
  };

  const { hero, whatWeBuild, problemStory } = detailContent;

  return (
    <div ref={pageRef} key={service.slug} className="service-detail-page">
      <SeoHead route={`/services/${service.slug}`} />

      {/* SECTION 01 — CENTRED EDITORIAL HERO (Full Initial Viewport) */}
      <section
        ref={heroRef}
        className="sd-hero"
        aria-labelledby={`sd-hero-heading-${service.slug}`}
      >
        <div className="sd-hero__backdrop" aria-hidden="true">
          <ServiceHeroBackdrop variant={detailContent.heroVisualVariant} />
        </div>
        <div className="sd-hero__veil" aria-hidden="true" />

        <div className="container sd-hero__container">
          <div className="sd-hero__stack">
            <nav
              className="sd-hero__breadcrumb"
              aria-label="Service breadcrumb"
              data-sd-hero-eyebrow
            >
              <span className="sd-hero__mark" aria-hidden="true">
                <span />
                <span />
              </span>
              <ol className="sd-hero__crumbs">
                <li>
                  <Link to="/services" className="sd-hero__crumb-link">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true" className="sd-hero__crumb-sep">
                  /
                </li>
                <li>
                  <Link
                    to={`/services#pillar-${detailContent.pillarSlug}`}
                    className="sd-hero__crumb-link"
                  >
                    {detailContent.pillarLabel}
                  </Link>
                </li>
                <li aria-hidden="true" className="sd-hero__crumb-sep">
                  /
                </li>
                <li aria-current="page" className="sd-hero__crumb-current">
                  {service.title}
                </li>
              </ol>
            </nav>

            <h1 id={`sd-hero-heading-${service.slug}`} className="sd-hero__title">
              {hero.headlineLines.map((line, idx) => {
                const isLast = idx === hero.headlineLines.length - 1;
                return (
                  <span key={line} className="sd-hero__line" data-sd-hero-line>
                    {line}
                    {isLast && (
                      <span className="sd-hero__period" aria-hidden="true">
                        .
                      </span>
                    )}
                  </span>
                );
              })}
            </h1>

            <p className="sd-hero__desc" data-sd-hero-desc>
              {hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 02 — WHAT WE BUILD (6-Card Structured Capability Grid) */}
      <section
        ref={buildRef}
        className="sd-build"
        aria-labelledby={`sd-build-heading-${service.slug}`}
      >
        <div className="container">
          <header className="sd-build__header" data-reveal>
            <span className="eyebrow sd-build__eyebrow">{whatWeBuild.eyebrow}</span>
            <h2 id={`sd-build-heading-${service.slug}`} className="sd-build__heading">
              {whatWeBuild.heading}
            </h2>
            <p className="sd-build__sub">{whatWeBuild.description}</p>
          </header>

          <div className="sd-build__grid" data-sd-build-grid>
            {whatWeBuild.items.map((item) => (
              <article
                key={item.id}
                data-sd-build-card
                className={`sd-build-card sd-build-card--${item.tone}`}
              >
                <div className="sd-build-card__head">
                  <div className={`sd-build-card__visual sd-build-card__visual--${item.tone}`}>
                    <CapabilityVisual visualKey={item.visualKey} tone={item.tone} />
                  </div>
                  <span className="tabular-num sd-build-card__num">{item.number}</span>
                </div>

                <h3 className="sd-build-card__title">{item.title}</h3>
                <p className="sd-build-card__desc">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — BUSINESS PROBLEM SCROLLYTELLING */}
      <ServiceProblemStory serviceSlug={service.slug} problemStory={problemStory} />

      {/* 4. What We Provide (Deliverables) & Key Features (Preserved) */}
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

      {/* 5. 4-Step Process (Preserved) */}
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

      {/* 6. Relevant Concept Projects (Preserved) */}
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

      {/* 7. Accessible FAQ Accordion (Preserved) */}
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

      {/* 8. Project Enquiry CTA (Preserved) */}
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
