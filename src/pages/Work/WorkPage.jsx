import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
import SeoHead from '../../components/SeoHead/SeoHead';
import ProjectPreview from '../../components/ProjectPreview/ProjectPreview';
import { conceptProjects } from '../../data/siteData';
import { useGsapReveal } from '../../utils/motion';
import './WorkPage.css';

const FILTER_OPTIONS = ['All', 'BUILD', 'AUTOMATE', 'GROW'];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const pageRef = useRef(null);

  useGsapReveal(pageRef);

  const countsByPillar = useMemo(() => {
    const counts = { All: conceptProjects.length, BUILD: 0, AUTOMATE: 0, GROW: 0 };
    conceptProjects.forEach((project) => {
      if (counts[project.pillar] !== undefined) {
        counts[project.pillar] += 1;
      }
    });
    return counts;
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return conceptProjects;
    return conceptProjects.filter((project) => project.pillar === activeFilter);
  }, [activeFilter]);

  return (
    <div ref={pageRef} className="work-page">
      <SeoHead route="/work" />

      <section className="work-hero" aria-labelledby="work-hero-title">
        <div className="container work-hero__inner">
          <span className="eyebrow">WORK &amp; ARCHITECTURE SHOWCASE</span>
          <h1 id="work-hero-title" className="display-h1">
            Concept architectures built to show how we think.
          </h1>
          <p className="lead-text work-hero__lead">
            Each case study below is a SCALAROW concept project—designed to demonstrate our
            technical architecture, user-flow thinking, and engineering standards across web,
            software, automation, AI, and growth.
          </p>
          <p className="work-hero__note">
            <Layers size={16} aria-hidden="true" />
            <span>
              Transparent showcase: all items below are Concept Projects, not fabricated client
              metrics.
            </span>
          </p>
        </div>
      </section>

      <section className="work-filter-section" aria-label="Filter concept projects by capability">
        <div className="container work-filter-bar">
          <div className="work-filter-group" role="group" aria-label="Project capability filter">
            {FILTER_OPTIONS.map((option) => {
              const isSelected = activeFilter === option;
              return (
                <button
                  key={option}
                  type="button"
                  className="work-filter-btn"
                  aria-pressed={isSelected}
                  onClick={() => setActiveFilter(option)}
                >
                  <span>{option}</span>
                  <span className="work-filter-btn__count">({countsByPillar[option]})</span>
                </button>
              );
            })}
          </div>
          <p className="work-filter-meta" aria-live="polite">
            Showing {filteredProjects.length} of {conceptProjects.length} concept{' '}
            {conceptProjects.length === 1 ? 'project' : 'projects'}
          </p>
        </div>
      </section>

      <section className="work-grid-section" aria-label="Concept projects">
        <div className="container">
          <div
            className="work-grid"
            data-reveal-group={activeFilter === 'All' ? 'true' : undefined}
          >
            {filteredProjects.map((project, index) => {
              const accentClass =
                project.accent === 'teal'
                  ? 'work-card--accent-teal'
                  : project.accent === 'aqua'
                    ? 'work-card--accent-aqua'
                    : '';
              const staggerClass =
                filteredProjects.length > 1 ? 'work-card--staggered' : '';

              return (
                <article
                  key={project.slug}
                  className={`work-card ${accentClass} ${staggerClass}`.trim()}
                  data-reveal-item={activeFilter === 'All' ? 'true' : undefined}
                >
                  <div className="work-card__top">
                    <div className="work-card__badges">
                      <span className="work-badge-concept">{project.label}</span>
                      <span className="work-badge-pillar">{project.pillar}</span>
                    </div>
                    <span className="work-card__index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <ProjectPreview
                    slug={project.slug}
                    title={project.title}
                    className="work-card__preview"
                  />

                  <div className="work-card__body">
                    <h2 className="work-card__title">{project.title}</h2>
                    <p className="work-card__summary">{project.summary}</p>
                    <ul className="work-card__stack" aria-label="Technology stack">
                      {project.techStack.map((tech) => (
                        <li key={tech} className="work-tech-pill">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="work-card__footer">
                    <Link
                      to={`/work/${project.slug}`}
                      className="work-card__link"
                      aria-label={`View architecture for ${project.title}`}
                    >
                      <span>View Concept Architecture</span>
                      <ArrowRight size={17} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="work-cta" aria-labelledby="work-cta-title">
        <div className="container work-cta__inner" data-reveal="true">
          <div className="work-cta__copy">
            <span className="eyebrow eyebrow--on-dark">START A REAL BUILD</span>
            <h2 id="work-cta-title" className="display-h2">
              Have a real-world system or bottleneck to solve?
            </h2>
            <p className="work-cta__lead">
              Tell us what you are building or trying to streamline. We will reply with a clear,
              practical perspective on scope and architecture.
            </p>
          </div>
          <div className="work-cta__actions">
            <Link to="/contact" className="btn btn--primary">
              <span>Start a Project</span>
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link to="/services" className="btn btn--outline-dark">
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
