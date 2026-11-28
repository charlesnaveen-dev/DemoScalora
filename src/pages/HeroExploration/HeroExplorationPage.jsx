import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight, Monitor, Smartphone } from 'lucide-react';
import SeoHead from '../../components/SeoHead/SeoHead';
import HeroConceptA from '../../components/HeroExploration/HeroConceptA';
import HeroConceptB from '../../components/HeroExploration/HeroConceptB';
import './HeroExplorationPage.css';

const COMPARISON_ROWS = [
  {
    criterion: 'Creativity & Art Direction',
    versionA:
      'Communicates creativity through an architectural pavilion aesthetic—disciplined repetition and spatial curvature rather than decorative ornamentation.',
    versionB:
      'Communicates creativity through editorial collage craft—tactile folded paper planes, intentional overlap, and sculptural asymmetry.',
  },
  {
    criterion: 'Technical Expertise',
    versionA:
      'High technical signal: real-time WebGL parametric curves, dynamic surface shading, and calibrated physics damping express engineering precision.',
    versionB:
      'Moderate-to-high technical signal: showcases front-end mastery of CSS 3D depth, lighting contrast, and ultra-lean asset architecture without WebGL.',
  },
  {
    criterion: 'Scalarow Positioning Fit',
    versionA:
      'Strong fit if Scalarow leads with systems engineering, custom software architecture, and structured digital infrastructure.',
    versionB:
      'Strong fit if Scalarow leads with bespoke brand design, product craft, and creative-studio visual storytelling.',
  },
  {
    criterion: 'Performance & Maintenance',
    versionA:
      'Depends on Three.js / R3F on desktop (~979 kB chunk, paused off-screen via IntersectionObserver); requires WebGL knowledge to modify geometry.',
    versionB:
      'Zero Three.js dependency, instant 0ms first-paint render on desktop and mobile, minimal battery impact, and easy CSS/HTML maintenance.',
  },
  {
    criterion: 'Visual Balance with Headline',
    versionA:
      'Curved open silhouette frames airily around the General Sans headline, letting the typography command attention with minimal mass.',
    versionB:
      'Solid layered blocks create strong tonal anchoring on the right column, balancing the two-line headline with tangible sculptural weight.',
  },
];

export function HeroStandalonePreview({ concept }) {
  const isA = concept === 'A';
  return (
    <div className="hero-standalone">
      <SeoHead
        route="/exploration/hero"
        title={`Version ${concept}: ${
          isA ? 'Parametric Structure' : 'Dimensional Collage'
        } | SCALAROW`}
        description="Hero redesign exploration preview for SCALAROW."
      />
      <div className="hero-standalone__bar">
        <div className="container hero-standalone__bar-inner">
          <span className="eyebrow">
            EXPLORATION PREVIEW · VERSION {concept} —{' '}
            {isA ? 'PARAMETRIC STRUCTURE' : 'DIMENSIONAL COLLAGE'}
          </span>
          <div className="hero-standalone__links">
            <Link
              to={isA ? '/exploration/hero-b' : '/exploration/hero-a'}
              className="hero-standalone__switch"
            >
              Switch to Version {isA ? 'B' : 'A'}
            </Link>
            <Link to="/exploration/hero" className="hero-standalone__compare">
              Compare Both
            </Link>
          </div>
        </div>
      </div>
      {isA ? <HeroConceptA /> : <HeroConceptB />}
    </div>
  );
}

export default function HeroExplorationPage() {
  const [viewportMode, setViewportMode] = useState('desktop');

  return (
    <div className="hero-exploration-page">
      <SeoHead
        route="/exploration/hero"
        title="SCALAROW — Hero Visual Exploration (Version A vs Version B)"
        description="Side-by-side design exploration comparing Parametric Structure and Dimensional Collage hero alternatives."
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

      {/* Exploration Header Controls */}
      <section className="exp-toolbar">
        <div className="container exp-toolbar__inner">
          <div>
            <span className="eyebrow">DESIGN EXPLORATION · HERO REDESIGN</span>
            <h1 className="display-h2 exp-toolbar__title">
              Two independent hero directions for review.
            </h1>
            <p className="exp-toolbar__note">
              Both versions share identical copy, General Sans / Satoshi typography, warm off-white
              surface (<code>#FAFAF8</code>), and restrained orange accents. Live homepage (<code>/</code>)
              remains unchanged pending your selection.
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
                <span>Desktop Preview</span>
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

      {/* Version A */}
      <section className="exp-showcase" aria-labelledby="exp-a-title">
        <div className="container exp-showcase__head">
          <div>
            <span className="eyebrow">VERSION A · THREE.JS / ARCHITECTURAL</span>
            <h2 id="exp-a-title" className="display-h3">
              Parametric Structure
            </h2>
          </div>
          <Link to="/exploration/hero-a" className="exp-standalone-link">
            <span>Open full-screen preview</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div
          className={`exp-frame ${
            viewportMode === 'mobile' ? 'exp-frame--mobile' : 'exp-frame--desktop'
          }`}
        >
          <HeroConceptA previewMode={viewportMode === 'mobile' ? 'mobile' : 'responsive'} />
        </div>
      </section>

      {/* Version B */}
      <section className="exp-showcase" aria-labelledby="exp-b-title">
        <div className="container exp-showcase__head">
          <div>
            <span className="eyebrow eyebrow--amber">VERSION B · CSS 3D / TACTILE</span>
            <h2 id="exp-b-title" className="display-h3">
              Dimensional Collage
            </h2>
          </div>
          <Link to="/exploration/hero-b" className="exp-standalone-link">
            <span>Open full-screen preview</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div
          className={`exp-frame ${
            viewportMode === 'mobile' ? 'exp-frame--mobile' : 'exp-frame--desktop'
          }`}
        >
          <HeroConceptB previewMode={viewportMode === 'mobile' ? 'mobile' : 'responsive'} />
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="exp-comparison" aria-labelledby="exp-compare-title">
        <div className="container">
          <div className="exp-comparison__head">
            <span className="eyebrow">SIDE-BY-SIDE EVALUATION</span>
            <h2 id="exp-compare-title" className="display-h2">
              Design &amp; engineering comparison
            </h2>
          </div>

          <div className="exp-table-wrap">
            <table className="exp-table">
              <thead>
                <tr>
                  <th scope="col">Criterion</th>
                  <th scope="col">Version A — Parametric Structure</th>
                  <th scope="col">Version B — Dimensional Collage</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.criterion}>
                    <th scope="row">{row.criterion}</th>
                    <td>{row.versionA}</td>
                    <td>{row.versionB}</td>
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
