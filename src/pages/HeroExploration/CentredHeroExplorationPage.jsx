import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Monitor, RotateCcw, Smartphone } from 'lucide-react';
import SeoHead from '../../components/SeoHead/SeoHead';
import CentredHero from '../../components/CentredHeroExploration/CentredHero';
import './HeroExplorationPage.css';

const BACKGROUNDS = [
  {
    id: 'triad',
    label: '01 · Scalar Triad Field',
    tag: 'LOGO GEOMETRY DERIVED',
    title: 'Scalar Triad Architecture',
    summary:
      'Translates SCALAROW’s 3-step ascending mark into subtle structural planes and diagonal coordinate hairlines framing the centered headline.',
    tradeOff:
      'Deepest brand specificity and lightest vector cost; slightly more geometric/structured than organic curved surfaces.',
  },
  {
    id: 'horizon',
    label: '02 · Parametric Horizon',
    tag: 'PARAMETRIC CURVES',
    title: 'Parametric Horizon Field',
    summary:
      'Adapts the curved rib concept into a calm edge-to-edge architectural canopy that draws smoothly on entrance and breathes subtly.',
    tradeOff:
      'Strong sense of technical fluidity and depth without WebGL weight; hairline curves feel softer and less boxy than structural planes.',
  },
  {
    id: 'planes',
    label: '03 · Layered Paper Horizon',
    tag: 'DIMENSIONAL COLLAGE',
    title: 'Layered Paper Horizon',
    summary:
      'Translates the folded paper and stone blocks into gallery-like perimeter planes that part around a calm central reading zone.',
    tradeOff:
      'Warmest, most tactile editorial feel; requires careful edge opacity on small mobile screens so layers frame rather than crowd the headline.',
  },
];

export default function CentredHeroExplorationPage() {
  const [activeBg, setActiveBg] = useState('triad');
  const [viewportMode, setViewportMode] = useState('desktop');
  const [animKey, setAnimKey] = useState(0);

  const selected = BACKGROUNDS.find((item) => item.id === activeBg) || BACKGROUNDS[0];

  return (
    <div className="hero-exploration-page">
      <SeoHead
        route="/exploration/centred-hero"
        title="Task 1: Centred Editorial Hero Explorations | SCALAROW"
        description="Centred editorial hero composition exploring three bespoke SCALAROW background treatments."
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

      {/* Controls */}
      <section className="exp-toolbar">
        <div className="container exp-toolbar__inner">
          <div>
            <span className="eyebrow">TASK 1 · HERO SECTION REDESIGN</span>
            <h1 className="display-h2 exp-toolbar__title">
              Centred Editorial Hero + Three Background Treatments
            </h1>
            <p className="exp-toolbar__note">
              Full-width centred composition keeping the headline as the unmistakable focal point,
              with integrated brand-driven backgrounds behind a calm central reading zone.
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

        {/* Interactive Background Switcher */}
        <div className="container exp-bg-tabs">
          <div className="exp-bg-tabs__row" role="tablist" aria-label="Background treatment">
            {BACKGROUNDS.map((bg) => (
              <button
                key={bg.id}
                type="button"
                role="tab"
                aria-selected={activeBg === bg.id}
                className={`exp-bg-tab${activeBg === bg.id ? ' is-active' : ''}`}
                onClick={() => {
                  setActiveBg(bg.id);
                  setAnimKey((k) => k + 1);
                }}
              >
                {bg.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="exp-replay-btn"
            onClick={() => setAnimKey((k) => k + 1)}
          >
            <RotateCcw size={14} aria-hidden="true" />
            <span>Replay entrance</span>
          </button>
        </div>
      </section>

      {/* Active Interactive Stage */}
      <section className="exp-showcase" aria-labelledby="active-bg-title">
        <div className="container exp-showcase__head">
          <div>
            <span className="eyebrow">{selected.tag}</span>
            <h2 id="active-bg-title" className="display-h3">
              {selected.title}
            </h2>
            <p className="exp-showcase__desc">{selected.summary}</p>
          </div>
        </div>

        <div
          className={`exp-frame ${
            viewportMode === 'mobile' ? 'exp-frame--mobile' : 'exp-frame--desktop'
          }`}
        >
          <CentredHero
            key={`${activeBg}-${animKey}`}
            bgVariant={activeBg}
            previewMode={viewportMode === 'mobile' ? 'mobile' : 'responsive'}
          />
        </div>
      </section>

      {/* Trade-off Comparison */}
      <section className="exp-comparison" aria-labelledby="bg-compare-title">
        <div className="container">
          <div className="exp-comparison__head">
            <span className="eyebrow">BACKGROUND TREATMENTS COMPARED</span>
            <h2 id="bg-compare-title" className="display-h2">
              Visual decisions &amp; trade-offs
            </h2>
          </div>

          <div className="exp-table-wrap">
            <table className="exp-table">
              <thead>
                <tr>
                  <th scope="col">Treatment</th>
                  <th scope="col">Design Rationale</th>
                  <th scope="col">Trade-offs</th>
                </tr>
              </thead>
              <tbody>
                {BACKGROUNDS.map((bg) => (
                  <tr key={bg.id}>
                    <th scope="row">{bg.title}</th>
                    <td>{bg.summary}</td>
                    <td>{bg.tradeOff}</td>
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
