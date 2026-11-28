import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import MagneticButton from '../../../components/MagneticButton/MagneticButton';
import { siteConfig } from '../../../data/siteData';
import { homeClosingContent } from '../homeSectionsData';

export default function HomeClosingSection() {
  const headingId = useId();
  const [selectedTopicId, setSelectedTopicId] = useState(
    homeClosingContent.focusTopics[0].id
  );

  const activeTopic =
    homeClosingContent.focusTopics.find((t) => t.id === selectedTopicId) ||
    homeClosingContent.focusTopics[0];

  return (
    <section className="home-closing" aria-labelledby={headingId}>
      <div className="container">
        <div className="home-closing__grid" data-reveal>
          <div className="home-closing__main">
            <span className="home-eyebrow home-eyebrow--on-dark">
              <span className="home-eyebrow__dot" aria-hidden="true" />
              <span>{homeClosingContent.eyebrow}</span>
            </span>

            <h2 id={headingId} className="home-closing__headline">
              {homeClosingContent.headline}
            </h2>

            <p className="home-closing__subtext">{homeClosingContent.subtext}</p>

            <div className="home-closing__composer">
              <span className="home-closing__composer-label">Focus Area</span>
              <div
                className="home-closing__topics"
                role="group"
                aria-label="Choose a starting topic"
              >
                {homeClosingContent.focusTopics.map((topic) => {
                  const isSelected = topic.id === selectedTopicId;
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      className={`home-closing__topic${isSelected ? ' is-selected' : ''}`}
                      aria-pressed={isSelected}
                      onClick={() => setSelectedTopicId(topic.id)}
                    >
                      {topic.label}
                    </button>
                  );
                })}
              </div>

              <p className="home-closing__prompt" aria-live="polite">
                {activeTopic.prompt}
              </p>
            </div>
          </div>

          <aside className="home-closing__action-panel">
            <div className="home-closing__primary-wrap">
              <MagneticButton
                as={Link}
                to={homeClosingContent.ctaHref}
                className="btn btn--primary home-closing__cta-btn"
              >
                <span>{homeClosingContent.ctaLabel}</span>
                <ArrowRight size={17} aria-hidden="true" />
              </MagneticButton>
            </div>

            <div className="home-closing__channels">
              <span className="home-closing__channels-label">Direct Channels</span>
              <a href={`mailto:${siteConfig.email}`} className="home-closing__channel">
                <Mail size={16} aria-hidden="true" />
                <span>{siteConfig.email}</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="home-closing__channel"
              >
                <MessageCircle size={16} aria-hidden="true" />
                <span>{siteConfig.whatsappDisplay}</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
