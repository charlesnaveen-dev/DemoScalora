import {
  WebDiagram0,
  WebDiagram1,
  WebDiagram2,
  WebDiagram3,
  WebResolvedDiagram,
  AppDiagram0,
  AppDiagram1,
  AppDiagram2,
  AppDiagram3,
  AppResolvedDiagram,
} from './diagrams/WebAndAppDiagrams';
import {
  SoftwareDiagram0,
  SoftwareDiagram1,
  SoftwareDiagram2,
  SoftwareDiagram3,
  SoftwareResolvedDiagram,
  AutomationDiagram0,
  AutomationDiagram1,
  AutomationDiagram2,
  AutomationDiagram3,
  AutomationResolvedDiagram,
} from './diagrams/SoftwareAndAutomationDiagrams';
import {
  AiDiagram0,
  AiDiagram1,
  AiDiagram2,
  AiDiagram3,
  AiResolvedDiagram,
  GrowthDiagram0,
  GrowthDiagram1,
  GrowthDiagram2,
  GrowthDiagram3,
  GrowthResolvedDiagram,
} from './diagrams/AiAndGrowthDiagrams';

const SLIDE_DIAGRAMS = {
  web: [WebDiagram0, WebDiagram1, WebDiagram2, WebDiagram3, WebResolvedDiagram],
  app: [AppDiagram0, AppDiagram1, AppDiagram2, AppDiagram3, AppResolvedDiagram],
  software: [
    SoftwareDiagram0,
    SoftwareDiagram1,
    SoftwareDiagram2,
    SoftwareDiagram3,
    SoftwareResolvedDiagram,
  ],
  automation: [
    AutomationDiagram0,
    AutomationDiagram1,
    AutomationDiagram2,
    AutomationDiagram3,
    AutomationResolvedDiagram,
  ],
  ai: [AiDiagram0, AiDiagram1, AiDiagram2, AiDiagram3, AiResolvedDiagram],
  growth: [
    GrowthDiagram0,
    GrowthDiagram1,
    GrowthDiagram2,
    GrowthDiagram3,
    GrowthResolvedDiagram,
  ],
};

export default function ServiceProblemVisual({
  visualType = 'web',
  activeBeat = 0,
  isolateBeat = null,
  statusLabel,
  caption,
  isResolved = false,
}) {
  const diagrams = SLIDE_DIAGRAMS[visualType] || SLIDE_DIAGRAMS.web;
  const visibleDiagrams = isolateBeat !== null ? [diagrams[isolateBeat] || diagrams[0]] : diagrams;

  return (
    <div
      className={`sd-story-visual${isResolved ? ' is-resolved' : ''}${
        isolateBeat !== null ? ' sd-story-visual--inline' : ''
      }`}
      data-active-beat={activeBeat}
    >
      <div className="sd-story-visual__bar">
        <span className="sd-story-visual__badge">
          <span className="sd-story-visual__dot" aria-hidden="true" />
          <span>{statusLabel}</span>
        </span>
        <span className="tabular-num sd-story-visual__step">
          {isResolved ? 'RESOLVED' : `0${activeBeat + 1} / 04`}
        </span>
      </div>

      <div className="sd-story-visual__stage">
        {visibleDiagrams.map((DiagramComponent, idx) => {
          const beatIdx = isolateBeat !== null ? isolateBeat : idx;
          return (
            <div
              key={beatIdx}
              data-visual-beat={isolateBeat === null ? beatIdx : undefined}
              className="sd-story-visual__slide"
            >
              <DiagramComponent />
            </div>
          );
        })}
      </div>

      {caption && <p className="sd-story-visual__caption">{caption}</p>}
    </div>
  );
}
