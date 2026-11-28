import { useEffect, useId, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { processBlueprintContent } from '../homeSectionsData';
import { prefersReducedMotion } from '../../../utils/motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function ProcessArchitectureSvg({ activeIndex }) {
  const uid = useId().replace(/:/g, '');
  const step = processBlueprintContent.steps[activeIndex] || processBlueprintContent.steps[0];
  const nodePositions = [
    { x: 64, y: 76, label: '01 Frame', sub: 'Scope & intent' },
    { x: 244, y: 76, label: '02 Architect', sub: 'UI + data' },
    { x: 244, y: 204, label: '03 Engineer', sub: 'Web, app, ops' },
    { x: 64, y: 204, label: '04 Evolve', sub: 'Optimise' },
  ];

  // Segment stroke progression paths matching 0 -> 1 -> 2 -> 3 -> 0 loop
  const segments = [
    'M 122 76 L 194 76',
    'M 248 106 L 248 174',
    'M 194 204 L 122 204',
    'M 68 174 L 68 106',
  ];

  return (
    <div className="home-process__blueprint">
      <div className="home-process__blueprint-head">
        <span className="home-process__blueprint-eyebrow">
          STAGE {step.num} · LIVE BLUEPRINT
        </span>
        <span className="home-process__blueprint-artifact">{step.artifact}</span>
      </div>

      <svg
        viewBox="0 0 380 280"
        className="home-process__svg"
        role="img"
        aria-label={`Studio workflow diagram highlighting step ${step.num}: ${step.title}`}
      >
        <defs>
          <pattern id={`${uid}-grid`} width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="0.9" fill="rgba(14, 17, 22, 0.12)" />
          </pattern>
        </defs>

        <rect width="380" height="280" rx="12" fill="#F7FAFA" />
        <rect width="380" height="280" rx="12" fill={`url(#${uid}-grid)`} />

        {/* Base subtle track connecting the closed loop */}
        {segments.map((d, idx) => {
          const isReached = idx < activeIndex || (activeIndex === 3 && idx === 3);
          return (
            <path
              key={d}
              d={d}
              fill="none"
              stroke={isReached ? '#2EC4B6' : 'rgba(14, 17, 22, 0.16)'}
              strokeWidth={isReached ? '2.5' : '1.75'}
              strokeDasharray={isReached ? undefined : '4 4'}
              data-process-segment={idx}
            />
          );
        })}

        {/* Four stage nodes */}
        {nodePositions.map((node, idx) => {
          const isCurrent = idx === activeIndex;
          const isCompleted = idx < activeIndex;
          const strokeColor = isCurrent
            ? '#FF9F1C'
            : isCompleted
              ? '#2EC4B6'
              : 'rgba(14, 17, 22, 0.22)';
          const fillColor = isCurrent
            ? '#0E1116'
            : isCompleted
              ? '#E9FAF8'
              : '#FFFFFF';
          const textColor = isCurrent ? '#FFFFFF' : '#15171A';
          const subColor = isCurrent
            ? '#FFBF69'
            : isCompleted
              ? '#0B6E65'
              : '#555E6D';

          return (
            <g key={node.label}>
              <rect
                x={node.x - 48}
                y={node.y - 28}
                width="104"
                height="56"
                rx="10"
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth={isCurrent ? '2.2' : '1.5'}
              />
              <text
                x={node.x + 4}
                y={node.y - 4}
                textAnchor="middle"
                fill={textColor}
                fontSize="12"
                fontWeight="700"
                className="home-process__svg-title"
              >
                {node.label}
              </text>
              <text
                x={node.x + 4}
                y={node.y + 14}
                textAnchor="middle"
                fill={subColor}
                fontSize="10.5"
                fontWeight="600"
                className="home-process__svg-sub"
              >
                {node.sub}
              </text>
            </g>
          );
        })}

        {/* Outcome annotation block on right side of SVG */}
        <g>
          <rect
            x="308"
            y="84"
            width="60"
            height="112"
            rx="8"
            fill="#FFFFFF"
            stroke="rgba(14,17,22,0.12)"
          />
          <text
            x="338"
            y="112"
            textAnchor="middle"
            fill="#0B6E65"
            fontSize="9.5"
            fontWeight="700"
            className="home-process__svg-title"
          >
            OUTPUT
          </text>
          <circle cx="338" cy="140" r="14" fill="#0E1116" />
          <text
            x="338"
            y="144"
            textAnchor="middle"
            fill="#FFBF69"
            fontSize="11"
            fontWeight="700"
            className="home-process__svg-title"
          >
            {step.num}
          </text>
          <text
            x="338"
            y="174"
            textAnchor="middle"
            fill="#4A5260"
            fontSize="9.5"
            fontWeight="600"
            className="home-process__svg-sub"
          >
            {step.nodeTitle}
          </text>
        </g>
      </svg>

      <div className="home-process__blueprint-footer">
        <span className="home-process__blueprint-focus-label">Stage focus</span>
        <span className="home-process__blueprint-focus">{step.focus}</span>
      </div>
    </div>
  );
}

export default function ProcessBlueprintSection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const headingId = useId();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      const stepEls = gsap.utils.toArray('[data-process-step]', el);
      stepEls.forEach((stepEl, idx) => {
        ScrollTrigger.create({
          trigger: stepEl,
          start: 'top 58%',
          end: 'bottom 42%',
          onEnter: () => setActiveIndex(idx),
          onEnterBack: () => setActiveIndex(idx),
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="home-process"
      aria-labelledby={headingId}
    >
      <div className="container">
        <header className="home-process__header" data-reveal>
          <span className="home-eyebrow">
            <span className="home-eyebrow__dot" aria-hidden="true" />
            <span>{processBlueprintContent.eyebrow}</span>
          </span>
          <h2 id={headingId} className="home-process__heading">
            {processBlueprintContent.heading}
          </h2>
          <p className="home-process__subtext">{processBlueprintContent.subtext}</p>
        </header>

        <div className="home-process__layout">
          <div className="home-process__sticky">
            <ProcessArchitectureSvg activeIndex={activeIndex} />
          </div>

          <ol className="home-process__list">
            {processBlueprintContent.steps.map((step, idx) => {
              const isActive = idx === activeIndex;
              return (
                <li
                  key={step.id}
                  data-process-step
                  className={`home-process__row${isActive ? ' is-active' : ''}`}
                >
                  <button
                    type="button"
                    className="home-process__row-btn"
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <span className="tabular-num home-process__num">{step.num}</span>
                    <div className="home-process__row-body">
                      <h3 className="home-process__row-title">{step.title}</h3>
                      <p className="home-process__row-desc">{step.summary}</p>
                      <span className="home-process__row-cue">{step.artifact}</span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
