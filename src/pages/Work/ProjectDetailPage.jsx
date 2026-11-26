import { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu } from 'lucide-react';
import SeoHead from '../../components/SeoHead/SeoHead';
import ProjectPreview from '../../components/ProjectPreview/ProjectPreview';
import { conceptProjects, servicesData } from '../../data/siteData';
import { useGsapReveal } from '../../utils/motion';
import './ProjectDetailPage.css';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const pageRef = useRef(null);

  useGsapReveal(pageRef);

  const projectIndex = conceptProjects.findIndex((item) => item.slug === slug);
  const project = projectIndex >= 0 ? conceptProjects[projectIndex] : null;

  if (!project) {
    return (
      <div className="project-detail-page project-not-found">
        <SeoHead
          title="Concept Project Not Found | SCALAROW"
          description="The requested concept project could not be found."
        />
        <div className="container">
          <div className="project-not-found__box">
            <span className="eyebrow eyebrow--amber">404 / PROJECT NOT FOUND</span>
            <h1 className="display-h1">We couldn&apos;t find that concept project.</h1>
            <p className="lead-text">
              The architecture case study you requested may have moved or the URL may be
              incomplete.
            </p>
            <div>
              <Link to="/work" className="btn btn--dark">
                <ArrowLeft size={17} aria-hidden="true" />
                <span>Back to All Concept Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const nextProject =
    conceptProjects[(projectIndex + 1) % conceptProjects.length];

  const relatedServices = project.serviceSlugs
    .map((serviceSlug) => servicesData.find((s) => s.slug === serviceSlug))
    .filter(Boolean);

  return (
    <div ref={pageRef} className="project-detail-page">
      <SeoHead
        title={`${project.title} | SCALAROW`}
        description={project.summary}
      />

      <section className="project-hero" aria-labelledby="project-title">
        <div className="container">
          <Link to="/work" className="project-back-link">
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Back to Concept Projects</span>
          </Link>

          <div className="project-hero__badges">
            <span className="project-badge-concept">{project.label}</span>
            <span className="project-badge-pillar">{project.pillar}</span>
          </div>

          <h1 id="project-title" className="display-h1 project-hero__title">
            {project.title}
          </h1>
          <p className="lead-text project-hero__summary">{project.summary}</p>

          <ProjectPreview
            slug={project.slug}
            title={project.title}
            className="project-hero__preview"
          />
        </div>
      </section>

      <section className="project-meta-strip" aria-label="Project metadata">
        <div className="container project-meta-grid">
          <div className="project-meta-item">
            <span className="project-meta-label">Services</span>
            <div className="project-meta-services">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="project-meta-service-link"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="project-meta-item">
            <span className="project-meta-label">Tech Stack</span>
            <ul className="project-meta-stack" aria-label="Technologies used">
              {project.techStack.map((tech) => (
                <li key={tech} className="project-meta-pill">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="project-meta-item">
            <span className="project-meta-label">Status</span>
            <span className="project-meta-status">
              <span className="project-meta-status__dot" aria-hidden="true" />
              <span>Concept Architecture</span>
            </span>
          </div>
        </div>
      </section>

      <section className="project-split-section" aria-label="Challenge and solution">
        <div className="container project-split-grid" data-reveal-group="true">
          <article className="project-split-card" data-reveal-item="true">
            <span className="eyebrow eyebrow--amber">01 / THE CHALLENGE</span>
            <h2 className="display-h3">Operational &amp; technical friction</h2>
            <p className="project-split-card__body">{project.challenge}</p>
          </article>

          <article
            className="project-split-card project-split-card--solution"
            data-reveal-item="true"
          >
            <span className="eyebrow">02 / THE SOLUTION</span>
            <h2 className="display-h3">Designed &amp; engineered response</h2>
            <p className="project-split-card__body">{project.solution}</p>
          </article>
        </div>
      </section>

      <section
        className="project-arch-section"
        aria-labelledby="architecture-heading"
      >
        <div className="container project-arch-grid" data-reveal-group="true">
          <div className="project-arch-block" data-reveal-item="true">
            <span className="eyebrow">
              <Cpu size={14} aria-hidden="true" />
              <span>03 / TECHNICAL ARCHITECTURE</span>
            </span>
            <h2 id="architecture-heading" className="display-h2">
              System design &amp; data flow
            </h2>
            <p className="project-arch-text">{project.architecture}</p>
          </div>

          <aside
            className="project-deliverables-card"
            aria-labelledby="deliverables-heading"
            data-reveal-item="true"
          >
            <span className="eyebrow eyebrow--on-dark">CORE DELIVERABLES</span>
            <h3 id="deliverables-heading" className="display-h3">
              What this build includes
            </h3>
            <ul className="project-deliverables-list">
              {project.deliverables.map((item) => (
                <li key={item} className="project-deliverables-item">
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="project-next-section" aria-label="Next steps">
        <div className="container project-next-grid" data-reveal-group="true">
          <div className="project-next-card" data-reveal-item="true">
            <div>
              <span className="eyebrow">NEXT CONCEPT PROJECT</span>
              <h2 className="display-h3" style={{ marginTop: '0.5rem' }}>
                {nextProject.title}
              </h2>
              <p
                style={{
                  color: 'var(--ink-secondary)',
                  marginTop: '0.6rem',
                  lineHeight: 1.55,
                }}
              >
                {nextProject.summary}
              </p>
            </div>
            <div>
              <Link
                to={`/work/${nextProject.slug}`}
                className="project-next-card__link"
              >
                <span>Explore Next Architecture</span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="project-enquiry-card" data-reveal-item="true">
            <div>
              <span className="eyebrow eyebrow--on-dark">PROJECT ENQUIRY</span>
              <h2 className="display-h3" style={{ marginTop: '0.5rem' }}>
                Need something like this for your team?
              </h2>
              <p
                className="project-enquiry-card__text"
                style={{ marginTop: '0.6rem' }}
              >
                Share your goals and constraints. We will respond with an honest assessment of
                architecture, scope, and timeline.
              </p>
            </div>
            <div>
              <Link to="/contact" className="btn btn--primary">
                <span>Discuss a Project</span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
