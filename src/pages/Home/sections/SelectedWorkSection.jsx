import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { workProjects } from '../../Work/workData';
import { studioWorkSectionContent } from '../homeSectionsData';

function InteractiveProjectStage({ project, inverted = false }) {
  const shots = [project.primaryShot, ...project.supportingShots];
  const [selectedShotIndex, setSelectedShotIndex] = useState(0);
  const activeShot = shots[selectedShotIndex] || project.primaryShot;

  return (
    <article
      className={`home-work-case${inverted ? ' is-inverted' : ''}`}
      aria-labelledby={`home-project-${project.id}`}
    >
      <div className="home-work-case__editorial">
        <div className="home-work-case__meta">
          <span className="tabular-num home-work-case__num">{project.number}</span>
          <span className="home-work-case__slash" aria-hidden="true">
            /
          </span>
          <span className="home-work-case__cat">{project.category}</span>
        </div>

        <h3 id={`home-project-${project.id}`} className="home-work-case__title">
          {project.title}
        </h3>

        <p className="home-work-case__desc">{project.description}</p>

        <ul className="home-work-case__services" aria-label={`Services delivered for ${project.title}`}>
          {project.services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>

        <div className="home-work-case__switcher" role="group" aria-label={`${project.title} page previews`}>
          <span className="home-work-case__switcher-label">Preview Screen</span>
          <div className="home-work-case__tabs">
            {shots.map((shot, idx) => {
              const isSelected = idx === selectedShotIndex;
              return (
                <button
                  key={shot.urlLabel}
                  type="button"
                  className={`home-work-case__tab${isSelected ? ' is-selected' : ''}`}
                  aria-pressed={isSelected}
                  onClick={() => setSelectedShotIndex(idx)}
                >
                  {shot.pageLabel}
                </button>
              );
            })}
          </div>
        </div>

        <div className="home-work-case__actions">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="home-work-case__live"
          >
            <span>Visit Live Website</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <Link to="/work" className="home-work-case__case-link">
            <span>View Full Presentation</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="home-work-case__showcase">
        <figure className="home-work-frame">
          <div className="home-work-frame__bar" aria-hidden="true">
            <span className="home-work-frame__dots">
              <span />
              <span />
              <span />
            </span>
            <span className="home-work-frame__url">{activeShot.urlLabel}</span>
            <span className="home-work-frame__page">{activeShot.pageLabel}</span>
          </div>

          <div className="home-work-frame__viewport">
            <picture key={activeShot.urlLabel} className="home-work-frame__picture">
              <source srcSet={activeShot.webp} type="image/webp" />
              <img
                src={activeShot.fallback}
                alt={activeShot.alt}
                width={activeShot.width}
                height={activeShot.height}
                loading="lazy"
                decoding="async"
                className="home-work-frame__img"
              />
            </picture>
          </div>
        </figure>
      </div>
    </article>
  );
}

export default function SelectedWorkSection() {
  const headingId = useId();
  const [hutomate, bexley] = workProjects;

  return (
    <section className="home-selected-work" aria-labelledby={headingId}>
      <div className="container">
        <header className="home-selected-work__header" data-reveal>
          <div className="home-selected-work__title-col">
            <span className="home-eyebrow home-eyebrow--on-dark">
              <span className="home-eyebrow__dot home-eyebrow__dot--teal" aria-hidden="true" />
              <span>{studioWorkSectionContent.eyebrow}</span>
            </span>
            <h2 id={headingId} className="home-selected-work__heading">
              {studioWorkSectionContent.heading}
            </h2>
            <p className="home-selected-work__subtext">
              {studioWorkSectionContent.subtext}
            </p>
          </div>

          <Link to={studioWorkSectionContent.ctaHref} className="btn btn--outline-dark">
            <span>{studioWorkSectionContent.ctaLabel}</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </header>

        <div className="home-selected-work__cases">
          {hutomate && <InteractiveProjectStage project={hutomate} inverted={false} />}
          {bexley && <InteractiveProjectStage project={bexley} inverted />}
        </div>
      </div>
    </section>
  );
}
