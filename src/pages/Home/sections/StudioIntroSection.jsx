import { useEffect, useId, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { studioPhilosophyContent } from '../homeSectionsData';
import { prefersReducedMotion } from '../../../utils/motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function PhilosophyConvergenceGraphic() {
  const uid = useId().replace(/:/g, '');

  return (
    <svg
      viewBox="0 0 360 220"
      className="home-intro__diagram"
      role="img"
      aria-label="Diagram showing creative thinking, digital design, and technical engineering converging into a unified business system"
    >
      <defs>
        <pattern id={`${uid}-dots`} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.9" fill="rgba(14, 17, 22, 0.14)" />
        </pattern>
      </defs>

      <rect width="360" height="220" rx="12" fill="#FAFAF8" stroke="rgba(14,17,22,0.1)" />
      <rect width="360" height="220" rx="12" fill={`url(#${uid}-dots)`} />

      {/* Three converging axes leading into core Scalarow node */}
      <path
        d="M 36 52 C 110 52, 134 110, 198 110"
        fill="none"
        stroke="#FF9F1C"
        strokeWidth="2.2"
        pathLength="100"
        strokeDasharray="100"
        data-intro-draw
      />
      <path
        d="M 36 110 L 198 110"
        fill="none"
        stroke="#15171A"
        strokeWidth="2"
        pathLength="100"
        strokeDasharray="100"
        data-intro-draw
      />
      <path
        d="M 36 168 C 110 168, 134 110, 198 110"
        fill="none"
        stroke="#2EC4B6"
        strokeWidth="2.2"
        pathLength="100"
        strokeDasharray="100"
        data-intro-draw
      />

      {/* Output vector into unified digital experience */}
      <path
        d="M 222 110 L 326 110"
        fill="none"
        stroke="#0E1116"
        strokeWidth="2.4"
        pathLength="100"
        strokeDasharray="100"
        data-intro-draw
      />

      {/* Input labels */}
      <g data-intro-node>
        <circle cx="36" cy="52" r="4.5" fill="#FF9F1C" />
        <text x="48" y="46" fontSize="11" fontWeight="700" fill="#A85500" className="home-intro__svg-label">
          CREATIVE DESIGN
        </text>
      </g>

      <g data-intro-node>
        <circle cx="36" cy="110" r="4.5" fill="#15171A" />
        <text x="48" y="102" fontSize="11" fontWeight="700" fill="#15171A" className="home-intro__svg-label">
          ENGINEERING
        </text>
      </g>

      <g data-intro-node>
        <circle cx="36" cy="168" r="4.5" fill="#2EC4B6" />
        <text x="48" y="186" fontSize="11" fontWeight="700" fill="#0B6E65" className="home-intro__svg-label">
          AUTOMATION
        </text>
      </g>

      {/* Convergence prism */}
      <g data-intro-node>
        <rect x="184" y="88" width="44" height="44" rx="10" fill="#0E1116" />
        <rect x="193" y="114" width="9" height="8" rx="1.5" fill="#2EC4B6" />
        <rect x="201" y="106" width="9" height="8" rx="1.5" fill="#CBF3F0" />
        <rect x="209" y="98" width="9" height="8" rx="1.5" fill="#FF9F1C" />
      </g>

      {/* Outcome destination */}
      <g data-intro-node>
        <rect x="252" y="88" width="88" height="44" rx="8" fill="#FFFFFF" stroke="rgba(14,17,22,0.16)" />
        <text x="296" y="108" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#15171A" className="home-intro__svg-label">
          Unified System
        </text>
        <text x="296" y="123" textAnchor="middle" fontSize="10" fontWeight="500" fill="#0B6E65" className="home-intro__svg-sub">
          Built to compound
        </text>
      </g>
    </svg>
  );
}

export default function StudioIntroSection() {
  const sectionRef = useRef(null);
  const headingId = useId();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.from('[data-intro-line]', {
        y: 22,
        opacity: 0.12,
        duration: 0.72,
        stagger: 0.08,
        ease: 'power3.out',
        immediateRender: false,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: el,
          start: 'top 82%',
          once: true,
        },
      });

      gsap.fromTo(
        '[data-intro-draw]',
        { strokeDashoffset: 100 },
        {
          strokeDashoffset: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power2.out',
          immediateRender: false,
          clearProps: 'strokeDashoffset',
          scrollTrigger: {
            trigger: '[data-intro-visual]',
            start: 'top 86%',
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="agency-intro"
      ref={sectionRef}
      className="home-intro"
      aria-labelledby={headingId}
    >
      <div className="container">
        <header className="home-intro__top">
          <span className="home-eyebrow">
            <span className="home-eyebrow__dot" aria-hidden="true" />
            <span>{studioPhilosophyContent.eyebrow}</span>
          </span>
          <span className="home-intro__descriptor">
            {studioPhilosophyContent.descriptor}
          </span>
        </header>

        <h2 id={headingId} className="home-intro__manifesto">
          {studioPhilosophyContent.statementLines.map((line, index) => (
            <span
              key={line}
              className={`home-intro__manifesto-line home-intro__manifesto-line--${index + 1}`}
              data-intro-line
            >
              {line}
            </span>
          ))}
        </h2>

        <div className="home-intro__split">
          <div className="home-intro__visual-col" data-intro-visual>
            <PhilosophyConvergenceGraphic />
          </div>

          <div className="home-intro__copy-col">
            <p className="home-intro__lead">{studioPhilosophyContent.lead}</p>
            <p className="home-intro__narrative">{studioPhilosophyContent.narrative}</p>

            <div className="home-intro__disciplines" aria-label="Studio core focus areas">
              {studioPhilosophyContent.disciplines.map((group) => (
                <div key={group.group} className="home-intro__discipline-row">
                  <span className="home-intro__discipline-title">{group.group}</span>
                  <span className="home-intro__discipline-list">
                    {group.items.join(' · ')}
                  </span>
                </div>
              ))}
            </div>

            <Link to={studioPhilosophyContent.ctaHref} className="home-inline-link">
              <span>{studioPhilosophyContent.ctaLabel}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
