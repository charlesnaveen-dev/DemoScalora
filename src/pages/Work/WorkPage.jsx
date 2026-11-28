import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SeoHead from '../../components/SeoHead/SeoHead';
import MagneticButton from '../../components/MagneticButton/MagneticButton';
import { useGsapReveal } from '../../utils/motion';
import WorkBrowserFrame from './WorkBrowserFrame';
import {
  workClosingContent,
  workHeroContent,
  workProjects,
} from './workData';
import './WorkPage.css';

function ProjectMetaBlock({ project }) {
  return (
    <>
      <div className="work-project__eyebrow-row">
        <span className="work-project__number tabular-num">{project.number}</span>
        <span className="work-project__slash" aria-hidden="true">
          /
        </span>
        <span className="work-project__category">{project.category}</span>
      </div>

      <h2 id={`project-${project.id}-title`} className="work-project__title">
        {project.title}
      </h2>

      <p className="work-project__desc">{project.description}</p>

      <div className="work-project__meta-footer">
        <div className="work-project__services-block">
          <span className="work-project__meta-label">Services</span>
          <ul className="work-project__services" aria-label={`Services provided for ${project.title}`}>
            {project.services.map((service) => (
              <li key={service} className="work-service-item">
                {service}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="work-live-link"
          aria-label={`Visit Live Website for ${project.title} (opens in a new tab)`}
        >
          <span>Visit Live Website</span>
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </>
  );
}

function LeadProjectSection({ project }) {
  return (
    <article
      className={`work-project work-project--lead work-project--accent-${project.accent}`}
      aria-labelledby={`project-${project.id}-title`}
    >
      <div className="container">
        <header className="work-lead-header" data-reveal="true">
          <div className="work-lead-header__identity">
            <div className="work-project__eyebrow-row">
              <span className="work-project__number tabular-num">{project.number}</span>
              <span className="work-project__slash" aria-hidden="true">
                /
              </span>
              <span className="work-project__category">{project.category}</span>
            </div>
            <h2 id={`project-${project.id}-title`} className="work-project__title">
              {project.title}
            </h2>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="work-live-link"
              aria-label={`Visit Live Website for ${project.title} (opens in a new tab)`}
            >
              <span>Visit Live Website</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="work-lead-header__narrative">
            <p className="work-project__desc">{project.description}</p>
            <div className="work-project__services-block">
              <span className="work-project__meta-label">Services</span>
              <ul
                className="work-project__services"
                aria-label={`Services provided for ${project.title}`}
              >
                {project.services.map((service) => (
                  <li key={service} className="work-service-item">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </header>

        <div className="work-lead-stage" data-reveal="true">
          <WorkBrowserFrame shot={project.primaryShot} variant="primary" priority />
        </div>

        <div className="work-gallery work-gallery--paired" data-reveal-group="true">
          {project.supportingShots.map((shot) => (
            <WorkBrowserFrame
              key={shot.id}
              shot={shot}
              variant="supporting"
              revealItem
            />
          ))}
        </div>
      </div>
    </article>
  );
}

function SplitProjectSection({ project }) {
  return (
    <article
      className={`work-project work-project--split work-project--accent-${project.accent}`}
      aria-labelledby={`project-${project.id}-title`}
    >
      <div className="container">
        <div className="work-split-stage">
          <div className="work-split-stage__visual" data-reveal="true">
            <WorkBrowserFrame shot={project.primaryShot} variant="primary" />
          </div>

          <div className="work-split-stage__details" data-reveal="true">
            <ProjectMetaBlock project={project} />
          </div>
        </div>

        <div className="work-gallery work-gallery--staggered" data-reveal-group="true">
          {project.supportingShots.map((shot, idx) => (
            <WorkBrowserFrame
              key={shot.id}
              shot={shot}
              variant="supporting"
              className={idx === 1 ? 'work-browser--offset' : ''}
              revealItem
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function WorkPage() {
  const pageRef = useRef(null);

  useGsapReveal(pageRef);

  const [firstProject, secondProject] = workProjects;

  return (
    <div ref={pageRef} className="work-page">
      <SeoHead route="/work" />

      <section className="work-hero" aria-labelledby="work-hero-title">
        <div className="container">
          <div className="work-hero__meta">
            <span className="work-hero__label">
              <span className="work-hero__dot" aria-hidden="true" />
              <span>{workHeroContent.label}</span>
            </span>
            <span className="work-hero__count tabular-num">
              {workHeroContent.countLabel}
            </span>
          </div>

          <div className="work-hero__body">
            <h1 id="work-hero-title" className="work-hero__title">
              {workHeroContent.title}
            </h1>
            <p className="lead-text work-hero__lead">{workHeroContent.description}</p>
          </div>
        </div>
      </section>

      <section className="work-showcase" aria-label="Selected client projects">
        {firstProject && <LeadProjectSection project={firstProject} />}
        {secondProject && <SplitProjectSection project={secondProject} />}
      </section>

      <section className="work-cta" aria-labelledby="work-cta-title">
        <div className="container work-cta__inner" data-reveal="true">
          <div className="work-cta__copy">
            <span className="eyebrow eyebrow--on-dark">{workClosingContent.eyebrow}</span>
            <h2 id="work-cta-title" className="display-h2">
              {workClosingContent.title}
            </h2>
            <p className="work-cta__lead">{workClosingContent.description}</p>
          </div>

          <div className="work-cta__actions">
            <MagneticButton
              as={Link}
              to={workClosingContent.ctaHref}
              className="btn btn--primary"
            >
              <span>{workClosingContent.ctaLabel}</span>
              <ArrowRight size={17} aria-hidden="true" />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
