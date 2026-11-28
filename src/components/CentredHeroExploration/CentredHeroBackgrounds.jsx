import { useEffect, useId, useRef } from 'react';
import gsap from 'gsap';
import { prefersReducedMotion } from '../../utils/motion';

/**
 * Treatment 1: Scalar Triad Architecture
 * Derived directly from SCALAROW's 3-step ascending diagonal logo geometry.
 * Forms progressively on mount and shifts subtly by depth layer.
 */
function ScalarTriadBg() {
  const svgRef = useRef(null);

  useEffect(() => {
    const el = svgRef.current;
    if (!el || prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      const blocks = el.querySelectorAll('[data-triad-block]');
      const lines = el.querySelectorAll('[data-triad-line]');

      gsap.from(blocks, {
        scale: 0.94,
        opacity: 0.15,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        transformOrigin: 'center',
        clearProps: 'transform,opacity',
      });

      lines.forEach((line, idx) => {
        const len = typeof line.getTotalLength === 'function' ? line.getTotalLength() : 1200;
        gsap.fromTo(
          line,
          { strokeDasharray: len, strokeDashoffset: len },
          {
            strokeDashoffset: 0,
            duration: 1.25,
            delay: 0.08 * idx,
            ease: 'power2.out',
            clearProps: 'strokeDasharray,strokeDashoffset',
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1440 720"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="bg-triad-svg"
      aria-hidden="true"
    >
      {/* Subtle architectural coordinate guide lines */}
      <g stroke="rgba(21, 23, 26, 0.075)" strokeWidth="1">
        <line data-triad-line x1="120" y1="0" x2="120" y2="720" />
        <line data-triad-line x1="1320" y1="0" x2="1320" y2="720" />
        <line data-triad-line x1="0" y1="540" x2="1440" y2="180" />
        <line data-triad-line x1="0" y1="620" x2="1440" y2="260" />
      </g>

      {/* Step 1 (Lower-Left): Muted Teal Scalar Module */}
      <g className="bg-triad__parallax-far">
        <rect
          data-triad-block
          x="64"
          y="404"
          width="330"
          height="248"
          rx="18"
          fill="#8ADFD0"
          fillOpacity="0.22"
          stroke="#4F8B82"
          strokeOpacity="0.24"
          strokeWidth="1.25"
        />
        <rect
          data-triad-block
          x="132"
          y="464"
          width="176"
          height="128"
          rx="12"
          fill="#2EC4B6"
          fillOpacity="0.1"
        />
      </g>

      {/* Step 2 (Center-Spanning Subtle Framing Module) */}
      <g className="bg-triad__parallax-mid">
        <rect
          data-triad-block
          x="456"
          y="168"
          width="528"
          height="384"
          rx="24"
          fill="none"
          stroke="#15171A"
          strokeOpacity="0.07"
          strokeWidth="1.25"
          strokeDasharray="6 8"
        />
      </g>

      {/* Step 3 (Upper-Right): Warm Stone + Restrained Orange Datum Edge */}
      <g className="bg-triad__parallax-near">
        <rect
          data-triad-block
          x="1046"
          y="68"
          width="330"
          height="248"
          rx="18"
          fill="#EDEAE1"
          fillOpacity="0.72"
          stroke="rgba(21, 23, 26, 0.1)"
          strokeWidth="1.25"
        />
        <rect
          data-triad-block
          x="1010"
          y="122"
          width="124"
          height="92"
          rx="12"
          fill="#FF9F1C"
          fillOpacity="0.18"
          stroke="#FF9F1C"
          strokeOpacity="0.45"
          strokeWidth="1.25"
        />
        <path
          data-triad-line
          d="M 1010 214 L 1134 214 L 1134 122"
          stroke="#FF9F1C"
          strokeOpacity="0.65"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

/**
 * Treatment 2: Parametric Horizon Field
 * Wide architectural rib curves sweeping edge-to-edge around the centered composition,
 * evolving from Concept A into a full-width spatial backdrop.
 */
function ParametricHorizonBg() {
  const svgRef = useRef(null);
  const gradPrefix = useId().replace(/:/g, '');

  useEffect(() => {
    const el = svgRef.current;
    if (!el || prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      const paths = el.querySelectorAll('[data-horizon-curve]');
      paths.forEach((path, i) => {
        const len = typeof path.getTotalLength === 'function' ? path.getTotalLength() : 1600;
        gsap.fromTo(
          path,
          { strokeDasharray: len, strokeDashoffset: len },
          {
            strokeDashoffset: 0,
            duration: 1.35,
            delay: i * 0.03,
            ease: 'power2.out',
            clearProps: 'strokeDasharray,strokeDashoffset',
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const charcoalCrispId = `${gradPrefix}-charcoal-crisp`;
  const charcoalSoftId = `${gradPrefix}-charcoal-soft`;
  const tealId = `${gradPrefix}-teal`;
  const orangePrimaryId = `${gradPrefix}-orange-primary`;
  const orangeSoftId = `${gradPrefix}-orange-soft`;

  const curves = Array.from({ length: 22 }, (_, i) => {
    const t = i / 21;
    // Balanced left-to-right distribution across full hero height and outer edges
    const yStart = 615 - t * 440;
    const yEnd = 115 + t * 480;
    const cy1 = 90 + Math.sin(t * Math.PI * 1.1) * 215;
    const cy2 = 625 - Math.cos(t * Math.PI * 0.88) * 210;

    let stroke = `url(#${i % 2 === 0 ? charcoalCrispId : charcoalSoftId})`;
    let strokeWidth = i % 2 === 0 ? 1.4 : 1.05;

    if (i === 15) {
      stroke = `url(#${orangePrimaryId})`;
      strokeWidth = 2.25;
    } else if (i === 14) {
      stroke = `url(#${orangeSoftId})`;
      strokeWidth = 1.45;
    } else if (i >= 7 && i <= 11) {
      stroke = `url(#${tealId})`;
      strokeWidth = i === 9 ? 1.85 : 1.5;
    }

    return {
      id: i,
      d: `M -60 ${yStart.toFixed(1)} C 420 ${cy1.toFixed(1)}, 1020 ${cy2.toFixed(1)}, 1500 ${yEnd.toFixed(1)}`,
      stroke,
      strokeWidth,
    };
  });

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1440 720"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="bg-horizon-svg"
      aria-hidden="true"
    >
      <defs>
        {/* Stronger definition on left + outer right, softer breathing clarity in center */}
        <linearGradient
          id={charcoalCrispId}
          x1="-60"
          y1="0"
          x2="1500"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#15171A" stopOpacity="0.28" />
          <stop offset="22%" stopColor="#15171A" stopOpacity="0.22" />
          <stop offset="50%" stopColor="#15171A" stopOpacity="0.13" />
          <stop offset="78%" stopColor="#15171A" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#15171A" stopOpacity="0.34" />
        </linearGradient>

        <linearGradient
          id={charcoalSoftId}
          x1="-60"
          y1="0"
          x2="1500"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#15171A" stopOpacity="0.19" />
          <stop offset="24%" stopColor="#15171A" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#15171A" stopOpacity="0.09" />
          <stop offset="76%" stopColor="#15171A" stopOpacity="0.17" />
          <stop offset="100%" stopColor="#15171A" stopOpacity="0.23" />
        </linearGradient>

        <linearGradient
          id={tealId}
          x1="-60"
          y1="0"
          x2="1500"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#26877D" stopOpacity="0.48" />
          <stop offset="24%" stopColor="#2A9D90" stopOpacity="0.40" />
          <stop offset="50%" stopColor="#2A9D90" stopOpacity="0.24" />
          <stop offset="78%" stopColor="#2A9D90" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#1D7A70" stopOpacity="0.56" />
        </linearGradient>

        <linearGradient
          id={orangePrimaryId}
          x1="-60"
          y1="0"
          x2="1500"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#F28E1C" stopOpacity="0.78" />
          <stop offset="25%" stopColor="#F28E1C" stopOpacity="0.68" />
          <stop offset="50%" stopColor="#F28E1C" stopOpacity="0.44" />
          <stop offset="78%" stopColor="#F28E1C" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#E67E0D" stopOpacity="0.86" />
        </linearGradient>

        <linearGradient
          id={orangeSoftId}
          x1="-60"
          y1="0"
          x2="1500"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FF9F1C" stopOpacity="0.45" />
          <stop offset="25%" stopColor="#FF9F1C" stopOpacity="0.36" />
          <stop offset="50%" stopColor="#FF9F1C" stopOpacity="0.2" />
          <stop offset="78%" stopColor="#FF9F1C" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FF9F1C" stopOpacity="0.52" />
        </linearGradient>
      </defs>

      <g className="bg-horizon__breathe">
        {curves.map((curve) => (
          <path
            key={curve.id}
            data-horizon-curve
            d={curve.d}
            stroke={curve.stroke}
            strokeWidth={curve.strokeWidth}
            strokeLinecap="round"
          />
        ))}
      </g>
    </svg>
  );
}

/**
 * Treatment 3: Layered Paper Horizon
 * Architectural folded sheets framing the left and right edges with subtle Z-depth,
 * evolving from Concept B to support a calm central editorial focal zone.
 */
function PaperHorizonBg() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      const sheets = el.querySelectorAll('[data-paper-sheet]');
      gsap.from(sheets, {
        y: 22,
        opacity: 0.2,
        duration: 0.85,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'y,opacity',
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-planes" aria-hidden="true">
      <div data-paper-sheet className="bg-planes__sheet bg-planes__sheet--left-stone" />
      <div data-paper-sheet className="bg-planes__sheet bg-planes__sheet--left-teal" />
      <div data-paper-sheet className="bg-planes__sheet bg-planes__sheet--right-fold" />
      <div data-paper-sheet className="bg-planes__sheet bg-planes__sheet--right-charcoal" />
      <div data-paper-sheet className="bg-planes__sheet bg-planes__sheet--right-orange" />
    </div>
  );
}

export default function CentredHeroBackground({ variant = 'triad' }) {
  switch (variant) {
    case 'horizon':
      return <ParametricHorizonBg />;
    case 'planes':
      return <PaperHorizonBg />;
    case 'triad':
    default:
      return <ScalarTriadBg />;
  }
}
