import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Cpu, Layers, CheckCircle2 } from 'lucide-react';
import SeoHead from '../../components/SeoHead/SeoHead';
import MagneticButton from '../../components/MagneticButton/MagneticButton';
import { aboutContent, homeContent, siteConfig } from '../../data/siteData';
import { useGsapReveal } from '../../utils/motion';
import './AboutPage.css';

const APPROACH_ICONS = [Compass, Cpu, Layers];

export default function AboutPage() {
  const pageRef = useRef(null);
  const [activeValueId, setActiveValueId] = useState(
    aboutContent.values.items[0]?.id || 'clarity'
  );

  useGsapReveal(pageRef);

  const valueItems = aboutContent.values.items;
  const activeValue =
    valueItems.find((item) => item.id === activeValueId) || valueItems[0];
  const activeIndex = valueItems.findIndex((item) => item.id === activeValue.id);

  const handleValueKeyDown = (event, index) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      const next = valueItems[(index + 1) % valueItems.length];
      setActiveValueId(next.id);
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const prev = valueItems[(index - 1 + valueItems.length) % valueItems.length];
      setActiveValueId(prev.id);
    } else if (event.key === 'Home') {
      event.preventDefault();
      setActiveValueId(valueItems[0].id);
    } else if (event.key === 'End') {
      event.preventDefault();
      setActiveValueId(valueItems[valueItems.length - 1].id);
    }
  };

  return (
    <div ref={pageRef} className="about-page">
      <SeoHead route="/about" />

      {/* 1. Asymmetric Editorial Manifesto Hero */}
      <section className="about-hero">
        <div className="container about-hero__grid">
          <div className="about-hero__main" data-reveal>
            <span className="eyebrow">{aboutContent.hero.eyebrow}</span>
            <h1 className="display-hero about-hero__title">
              {aboutContent.hero.headline}
            </h1>
            <p className="lead-text about-hero__sub">
              {aboutContent.hero.subheadline}
            </p>
          </div>

          <aside className="about-hero__aside" data-reveal aria-label="Studio overview">
            <div className="about-hero__card">
              <span className="eyebrow eyebrow--amber">OPERATING MODEL</span>
              <p className="about-hero__location">{siteConfig.location}</p>
              <dl className="about-hero__facts">
                {homeContent.intro.highlights.map((item) => (
                  <div key={item.label} className="about-hero__fact-row">
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* 2. Agency Intro & Philosophy Editorial Split */}
      <section className="about-split">
        <div className="container about-split__grid" data-reveal-group>
          <div className="about-split__col" data-reveal-item>
            <span className="eyebrow">01 / CONTEXT</span>
            <h2 className="display-h2 about-split__heading">
              {aboutContent.intro.headline}
            </h2>
            <p className="about-split__body">{aboutContent.intro.body}</p>
          </div>

          <div className="about-split__col about-split__col--philosophy" data-reveal-item>
            <span className="eyebrow eyebrow--amber">
              {aboutContent.philosophy.eyebrow}
            </span>
            <h2 className="display-h2 about-split__heading">
              {aboutContent.philosophy.headline}
            </h2>
            <p className="about-split__body">{aboutContent.philosophy.body}</p>
          </div>
        </div>
      </section>

      {/* 3. 50/50 Full-Bleed Mission (#CBF3F0) & Vision (#FFFFFF with #0E1116 top border) */}
      <section className="about-mv" aria-label="Mission and Vision">
        <div className="about-mv__grid">
          <div className="about-mv__panel about-mv__panel--mission" data-reveal>
            <div className="about-mv__inner">
              <span className="eyebrow">02 / {aboutContent.missionVision.mission.label}</span>
              <p className="about-mv__statement">
                {aboutContent.missionVision.mission.text}
              </p>
            </div>
          </div>

          <div className="about-mv__panel about-mv__panel--vision" data-reveal>
            <div className="about-mv__inner">
              <span className="eyebrow eyebrow--amber">
                03 / {aboutContent.missionVision.vision.label}
              </span>
              <p className="about-mv__statement">
                {aboutContent.missionVision.vision.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How We Approach Digital Challenges (3-column architectural grid) */}
      <section className="about-challenges">
        <div className="container">
          <div className="about-section-header" data-reveal>
            <span className="eyebrow">{aboutContent.approachToChallenges.eyebrow}</span>
            <h2 className="display-h2 about-section-header__title">
              {aboutContent.approachToChallenges.headline}
            </h2>
          </div>

          <div className="about-challenges__grid" data-reveal-group>
            {aboutContent.approachToChallenges.points.map((point, index) => {
              const Icon = APPROACH_ICONS[index] || Compass;
              const num = String(index + 1).padStart(2, '0');
              return (
                <article
                  key={point.title}
                  className="about-challenges__card"
                  data-reveal-item
                >
                  <div className="about-challenges__card-top">
                    <span className="tabular-num about-challenges__num">{num}</span>
                    <span className="about-challenges__icon" aria-hidden="true">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                  </div>
                  <h3 className="display-h3 about-challenges__card-title">
                    {point.title}
                  </h3>
                  <p className="about-challenges__card-desc">{point.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Interactive Values Matrix */}
      <section className="about-values">
        <div className="container">
          <div className="about-section-header" data-reveal>
            <span className="eyebrow eyebrow--amber">{aboutContent.values.eyebrow}</span>
            <h2 className="display-h2 about-section-header__title">
              {aboutContent.values.headline}
            </h2>
          </div>

          <div className="about-values__matrix" data-reveal>
            <div
              className="about-values__list"
              role="tablist"
              aria-label="SCALAROW Core Values"
              aria-orientation="vertical"
            >
              {valueItems.map((item, idx) => {
                const isSelected = item.id === activeValue.id;
                const num = String(idx + 1).padStart(2, '0');
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    id={`value-tab-${item.id}`}
                    aria-selected={isSelected}
                    aria-controls={`value-panel-${item.id}`}
                    tabIndex={isSelected ? 0 : -1}
                    className={`about-values__tab ${isSelected ? 'is-active' : ''}`}
                    onClick={() => setActiveValueId(item.id)}
                    onKeyDown={(e) => handleValueKeyDown(e, idx)}
                  >
                    <span className="tabular-num about-values__tab-num">{num}</span>
                    <span className="about-values__tab-title">{item.title}</span>
                    <ArrowRight
                      size={16}
                      className="about-values__tab-arrow"
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>

            <div
              className="about-values__readout"
              role="tabpanel"
              id={`value-panel-${activeValue.id}`}
              aria-labelledby={`value-tab-${activeValue.id}`}
              tabIndex={0}
            >
              <div className="about-values__readout-meta">
                <span className="tabular-num about-values__readout-badge">
                  PRINCIPLE {String(activeIndex + 1).padStart(2, '0')} /{' '}
                  {String(valueItems.length).padStart(2, '0')}
                </span>
                <CheckCircle2 size={18} className="about-values__readout-icon" aria-hidden="true" />
              </div>
              <h3 className="display-h2 about-values__readout-title">
                {activeValue.title}
              </h3>
              <p className="lead-text about-values__readout-desc">
                {activeValue.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Studio Note in Narrow Editorial Measure + CTA */}
      <section className="about-note">
        <div className="container">
          <div className="about-note__measure" data-reveal>
            <span className="eyebrow">{aboutContent.studioNote.eyebrow}</span>
            <h2 className="display-h2 about-note__headline">
              {aboutContent.studioNote.headline}
            </h2>
            <p className="lead-text about-note__body">{aboutContent.studioNote.body}</p>

            <div className="about-note__actions">
              <MagneticButton as={Link} to="/contact" className="btn btn--primary">
                Start a Conversation
                <ArrowRight size={17} aria-hidden="true" />
              </MagneticButton>
              <MagneticButton as={Link} to="/work" className="btn btn--outline">
                Explore Concept Work
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
