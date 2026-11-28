import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Monitor, Smartphone } from 'lucide-react';
import SeoHead from '../../components/SeoHead/SeoHead';
import StudioConceptA from '../../components/StudioExploration/StudioConceptA';
import StudioConceptB from '../../components/StudioExploration/StudioConceptB';
import './HeroExplorationPage.css';

const STUDIO_COMPARISON = [
  {
    criterion: 'Visual Rhythm & Typography',
    studyA:
      'Stepped three-line headline alignment inspired by Scalarow’s ascending mark; pairs heading indentation directly with the narrative axis.',
    studyB:
      'Balanced monograph layout splitting the problem statement and Scalarow’s response into two distinct reading beats.',
  },
  {
    criterion: 'Interactive Restraint',
    studyA:
      'Pure editorial typography-led reading experience with zero tabs, cards, or interactive clutter.',
    studyB:
      'Pure reading experience with zero interactive widgets; closes with an understated typographic colophon strip.',
  },
  {
    criterion: 'Animation Character',
    studyA:
      'Scroll-triggered top hairline draw, stepped line settle, and subtle teal phrase highlight.',
    studyB:
      'Gentle scroll-triggered staggered vertical entrance across header, tension beat, response beat, and colophon.',
  },
  {
    criterion: 'Trade-off',
    studyA:
      'Relies on horizontal indentation on desktop (collapsing cleanly to left-aligned on mobile), which feels more expressive and asymmetric.',
    studyB:
      'Feels calmest and easiest to scan on narrow screens, though slightly more restrained and symmetrical than Study A.',
  },
];

export default function StudioExplorationPage() {
  const [viewportMode, setViewportMode] = useState('desktop');

  return (
    <div className="hero-exploration-page">
      <SeoHead
        route="/exploration/studio"
        title="Task 2: Studio Section Redesign Explorations | SCALAROW"
        description="Two editorial Studio section compositions preserving simple copy with refined typography and scroll choreography."
      />

      <nav className="exp-subnav" aria-label="Design exploration sections">
        <div className="container exp-subnav__inner">
          <div className="exp-subnav__links">
            <NavLink to="/exploration/centred-hero" className="exp-subnav__link">
              Task 1 · Centred Hero
            </NavLink>
            <NavLink to="/exploration/studio" className="exp-subnav__link">
              Task 2 · Studio Section
            </NavLink>
            <NavLink to="/exploration/pillars" className="exp-subnav__link">
              Task 3 · Three Pillars
            </NavLink>
            <NavLink to="/exploration/hero" className="exp-subnav__link">
              Earlier Split Heroes (A / B)
            </NavLink>
          </div>
          <Link to="/" className="exp-subnav__home">
            View Live Homepage
          </Link>
        </div>
      </nav>

      {/* Toolbar */}
      <section className="exp-toolbar">
        <div className="container exp-toolbar__inner">
          <div>
            <span className="eyebrow">TASK 2 · STUDIO SECTION REDESIGN</span>
            <h1 className="display-h2 exp-toolbar__title">
              Editorial Studio Introductions (Without Cards or Box Clutter)
            </h1>
            <p className="exp-toolbar__note">
              Both compositions preserve SCALAROW&apos;s exact Studio narrative while replacing the
              conventional 4/8 split with purposeful typography, whitespace, and subtle motion.
            </p>
          </div>

          <div className="exp-toolbar__controls">
            <div className="exp-viewport-toggle" role="group" aria-label="Preview viewport size">
              <button
                type="button"
                className={`exp-viewport-btn${viewportMode === 'desktop' ? ' is-active' : ''}`}
                aria-pressed={viewportMode === 'desktop'}
                onClick={() => setViewportMode('desktop')}
              >
                <Monitor size={15} aria-hidden="true" />
                <span>Desktop</span>
              </button>
              <button
                type="button"
                className={`exp-viewport-btn${viewportMode === 'mobile' ? ' is-active' : ''}`}
                aria-pressed={viewportMode === 'mobile'}
                onClick={() => setViewportMode('mobile')}
              >
                <Smartphone size={15} aria-hidden="true" />
                <span>Mobile (390px)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Study A */}
      <section className="exp-showcase" aria-labelledby="studio-study-a-title">
        <div className="container exp-showcase__head">
          <div>
            <span className="eyebrow">STUDY A · ASYMMETRIC STEPPED COMPOSITION</span>
            <h2 id="studio-study-a-title" className="display-h3">
              Stepped Editorial Triad
            </h2>
          </div>
        </div>

        <div
          className={`exp-frame ${
            viewportMode === 'mobile' ? 'exp-frame--mobile' : 'exp-frame--desktop'
          }`}
        >
          <StudioConceptA previewMode={viewportMode === 'mobile' ? 'mobile' : 'responsive'} />
        </div>
      </section>

      {/* Study B */}
      <section className="exp-showcase" aria-labelledby="studio-study-b-title">
        <div className="container exp-showcase__head">
          <div>
            <span className="eyebrow eyebrow--amber">STUDY B · MONOGRAPH NARRATIVE SPLIT</span>
            <h2 id="studio-study-b-title" className="display-h3">
              Monograph Reading Cadence + Typographic Colophon
            </h2>
          </div>
        </div>

        <div
          className={`exp-frame ${
            viewportMode === 'mobile' ? 'exp-frame--mobile' : 'exp-frame--desktop'
          }`}
        >
          <StudioConceptB previewMode={viewportMode === 'mobile' ? 'mobile' : 'responsive'} />
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="exp-comparison" aria-labelledby="studio-compare-title">
        <div className="container">
          <div className="exp-comparison__head">
            <span className="eyebrow">STUDIO EXPLORATIONS COMPARED</span>
            <h2 id="studio-compare-title" className="display-h2">
              Visual decisions &amp; trade-offs
            </h2>
          </div>

          <div className="exp-table-wrap">
            <table className="exp-table">
              <thead>
                <tr>
                  <th scope="col">Dimension</th>
                  <th scope="col">Study A — Stepped Editorial Triad</th>
                  <th scope="col">Study B — Monograph Cadence</th>
                </tr>
              </thead>
              <tbody>
                {STUDIO_COMPARISON.map((row) => (
                  <tr key={row.criterion}>
                    <th scope="row">{row.criterion}</th>
                    <td>{row.studyA}</td>
                    <td>{row.studyB}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
