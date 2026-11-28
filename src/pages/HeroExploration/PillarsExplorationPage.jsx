import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Monitor, RotateCcw, Smartphone } from 'lucide-react';
import SeoHead from '../../components/SeoHead/SeoHead';
import PillarsStudyA from '../../components/PillarsExploration/PillarsStudyA';
import PillarsStudyB from '../../components/PillarsExploration/PillarsStudyB';
import PillarsStudyC from '../../components/PillarsExploration/PillarsStudyC';
import './HeroExplorationPage.css';

const PILLARS_COMPARISON = [
  {
    criterion: 'Reference Translation',
    studyA:
      'Directly adapts the reference’s tilted, overlapping tonal planes onto an open #FAFAF8 studio canvas without outer boxes.',
    studyB:
      'Translates overlapping dimensional planes into a unified stepped horizontal service-row layout on equal three-column tracks.',
    studyC:
      'Combines an editorial left index with a dynamic right overlapping stage that re-composes the planes per selected pillar.',
  },
  {
    criterion: '3 · 2 · 1 Pillar Differentiation',
    studyA:
      'Build cascades 3 angled plates; Automate interlocks 2 diagonal planes; Grow anchors 1 charcoal monolith over stepped echo strata.',
    studyB:
      'All three pillars share identical horizontal service-row dimensions, spacing, and typography—differentiated by 3 / 2 / 1 row count and brand tones.',
    studyC:
      'All Pillars forms a 3 · 2 · 1 constellation; individual tabs expand Build (3-fan), Automate (2-lock), or Grow (focal monolith).',
  },
  {
    criterion: 'Interaction & Motion',
    studyA:
      'Hovering/focusing a pillar gently fans its angled depth layers and updates a quiet bottom spec readout; each plane navigates directly.',
    studyB:
      'Hovering or inspecting a pillar highlights its leading row while each horizontal slab lifts cleanly with its right-aligned circular arrow.',
    studyC:
      'Tablist selection (mouse or arrow keys) shifts focus between unified overview and dedicated pillar layer compositions.',
  },
  {
    criterion: 'Trade-offs',
    studyA:
      'Strongest kinetic editorial character and closest to the reference’s angled overlap; relies on disciplined tilt angles (-4° to +3.5°) for readability.',
    studyB:
      'Highest structural consistency and scannability across Build, Automate, and Grow; retains individual brand palette distinction without mismatched card shapes.',
    studyC:
      'Most interactive and compact vertically; asks visitors to engage the left selector to isolate individual pillar assemblies.',
  },
];

export default function PillarsExplorationPage() {
  const [viewportMode, setViewportMode] = useState('desktop');
  const [animKey, setAnimKey] = useState(0);

  const previewMode = viewportMode === 'mobile' ? 'mobile' : 'responsive';

  return (
    <div className="hero-exploration-page">
      <SeoHead route="/exploration/pillars" />

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
            <span className="eyebrow">TASK 3 · THREE PILLARS EXPLORATION</span>
            <h1 className="display-h2 exp-toolbar__title">
              Overlapping Dimensional Panels for Build · Automate · Grow
            </h1>
            <p className="exp-toolbar__note">
              Three distinct interpretations of layered dimensional planes tailored to SCALAROW&apos;s
              warm white foundation, charcoal typography, orange and muted teal accents, and
              3 · 2 · 1 service architecture. Live homepage sections remain untouched for review.
            </p>
          </div>

          <div className="exp-toolbar__controls" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="exp-replay-btn"
              onClick={() => setAnimKey((k) => k + 1)}
            >
              <RotateCcw size={14} aria-hidden="true" />
              <span>Replay entrance</span>
            </button>
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
      <section className="exp-showcase" aria-labelledby="pillars-study-a-title">
        <div className="container exp-showcase__head">
          <div>
            <span className="eyebrow">STUDY A · KINETIC TILTED CASCADE</span>
            <h2 id="pillars-study-a-title" className="display-h3">
              Open Canvas Angled Clusters (3 · 2 · 1 Overlapping Planes)
            </h2>
            <p className="exp-showcase__desc">
              Closest evolution of the reference’s angled overlap language: unboxed tilted panels
              with alternating white, stone, muted teal, and charcoal surfaces, edge-anchored
              geometric reliefs, and an interactive bottom capability readout.
            </p>
          </div>
        </div>

        <div
          className={`exp-frame ${
            viewportMode === 'mobile' ? 'exp-frame--mobile' : 'exp-frame--desktop'
          }`}
        >
          <PillarsStudyA key={`pa-${animKey}-${previewMode}`} previewMode={previewMode} />
        </div>
      </section>

      {/* Study B */}
      <section className="exp-showcase" aria-labelledby="pillars-study-b-title">
        <div className="container exp-showcase__head">
          <div>
            <span className="eyebrow eyebrow--amber">STUDY B · UNIFIED SERVICE-ROW SYSTEM</span>
            <h2 id="pillars-study-b-title" className="display-h3">
              Consistent Horizontal Service Rows Across Build · Automate · Grow
            </h2>
            <p className="exp-showcase__desc">
              Applies Build’s stepped horizontal service-row structure uniformly across all three
              pillars (3 rows for Build, 2 for Automate, 1 for Grow) while preserving each
              pillar’s distinct accent palette and motif.
            </p>
          </div>
        </div>

        <div
          className={`exp-frame ${
            viewportMode === 'mobile' ? 'exp-frame--mobile' : 'exp-frame--desktop'
          }`}
        >
          <PillarsStudyB key={`pb-${animKey}-${previewMode}`} previewMode={previewMode} />
        </div>
      </section>

      {/* Study C */}
      <section className="exp-showcase" aria-labelledby="pillars-study-c-title">
        <div className="container exp-showcase__head">
          <div>
            <span className="eyebrow">STUDY C · INTERACTIVE LAYER STAGE</span>
            <h2 id="pillars-study-c-title" className="display-h3">
              Editorial Pillar Index + Live Reconfiguring Dimensional Deck
            </h2>
            <p className="exp-showcase__desc">
              A focused editorial selector lets visitors view all six services in one ascending
              constellation or isolate Build, Automate, or Grow to inspect its dedicated layered
              geometry.
            </p>
          </div>
        </div>

        <div
          className={`exp-frame ${
            viewportMode === 'mobile' ? 'exp-frame--mobile' : 'exp-frame--desktop'
          }`}
        >
          <PillarsStudyC key={`pc-${animKey}-${previewMode}`} previewMode={previewMode} />
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="exp-comparison" aria-labelledby="pillars-compare-title">
        <div className="container">
          <div className="exp-comparison__head">
            <span className="eyebrow">PILLARS EXPLORATIONS COMPARED</span>
            <h2 id="pillars-compare-title" className="display-h2">
              Visual decisions &amp; trade-offs
            </h2>
          </div>

          <div className="exp-table-wrap">
            <table className="exp-table exp-table--4col">
              <thead>
                <tr>
                  <th scope="col">Dimension</th>
                  <th scope="col">Study A — Kinetic Tilted Cascade</th>
                  <th scope="col">Study B — Unified Service-Row System</th>
                  <th scope="col">Study C — Interactive Layer Stage</th>
                </tr>
              </thead>
              <tbody>
                {PILLARS_COMPARISON.map((row) => (
                  <tr key={row.criterion}>
                    <th scope="row">{row.criterion}</th>
                    <td>{row.studyA}</td>
                    <td>{row.studyB}</td>
                    <td>{row.studyC}</td>
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
