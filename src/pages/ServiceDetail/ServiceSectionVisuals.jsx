import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { prefersReducedMotion } from '../../utils/motion';

/**
 * Subtle perimeter architectural backdrop for Section 01 Hero.
 * Complements the centred editorial composition without adding noise behind text.
 */
export function ServiceHeroBackdrop({ variant = 'web-grid' }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const el = svgRef.current;
    if (!el || prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      const strokes = el.querySelectorAll('[data-hero-stroke]');
      strokes.forEach((node, idx) => {
        const len = typeof node.getTotalLength === 'function' ? node.getTotalLength() : 900;
        gsap.fromTo(
          node,
          { strokeDasharray: len, strokeDashoffset: len },
          {
            strokeDashoffset: 0,
            duration: 1.2,
            delay: 0.08 * idx,
            ease: 'power2.out',
            clearProps: 'strokeDasharray,strokeDashoffset',
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, [variant]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1440 780"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="sd-hero-backdrop__svg"
      aria-hidden="true"
    >
      {/* Quiet outer-margin architectural datum lines shared across services */}
      <g stroke="#15171A" strokeOpacity="0.06" strokeWidth="1">
        <line data-hero-stroke x1="96" y1="0" x2="96" y2="780" />
        <line data-hero-stroke x1="1344" y1="0" x2="1344" y2="780" />
      </g>

      {variant === 'web-grid' && (
        <g>
          <rect
            data-hero-stroke
            x="48"
            y="84"
            width="230"
            height="148"
            rx="10"
            stroke="#15171A"
            strokeOpacity="0.08"
          />
          <line x1="48" y1="112" x2="278" y2="112" stroke="#15171A" strokeOpacity="0.06" />
          <circle cx="64" cy="98" r="2.5" fill="#2EC4B6" fillOpacity="0.45" />
          <circle cx="74" cy="98" r="2.5" fill="#FF9F1C" fillOpacity="0.55" />

          <rect
            data-hero-stroke
            x="1162"
            y="534"
            width="230"
            height="154"
            rx="10"
            stroke="#2EC4B6"
            strokeOpacity="0.22"
          />
          <rect x="1186" y="562" width="84" height="8" rx="4" fill="#2EC4B6" fillOpacity="0.16" />
          <rect x="1186" y="582" width="170" height="4" rx="2" fill="#15171A" fillOpacity="0.08" />
          <rect x="1186" y="612" width="64" height="18" rx="9" fill="#FF9F1C" fillOpacity="0.22" />
        </g>
      )}

      {variant === 'app-frames' && (
        <g>
          <rect
            data-hero-stroke
            x="64"
            y="476"
            width="136"
            height="220"
            rx="20"
            stroke="#15171A"
            strokeOpacity="0.09"
          />
          <rect x="84" y="504" width="96" height="44" rx="8" fill="#CBF3F0" fillOpacity="0.35" />
          <rect
            data-hero-stroke
            x="1194"
            y="92"
            width="184"
            height="136"
            rx="14"
            stroke="#2EC4B6"
            strokeOpacity="0.22"
          />
          <circle cx="1220" cy="122" r="6" fill="#FF9F1C" fillOpacity="0.45" />
          <line x1="1238" y1="122" x2="1348" y2="122" stroke="#15171A" strokeOpacity="0.1" strokeWidth="2" />
        </g>
      )}

      {variant === 'software-lattice' && (
        <g>
          <path
            data-hero-stroke
            d="M42 150 H176 V232 H260"
            stroke="#2EC4B6"
            strokeOpacity="0.24"
            strokeWidth="1.25"
          />
          <circle cx="176" cy="232" r="4" fill="#FF9F1C" fillOpacity="0.6" />
          <rect x="38" y="128" width="52" height="44" rx="6" stroke="#15171A" strokeOpacity="0.09" />
          <path
            data-hero-stroke
            d="M1180 612 H1274 V520 H1392"
            stroke="#15171A"
            strokeOpacity="0.1"
            strokeWidth="1.25"
          />
          <rect x="1296" y="486" width="82" height="66" rx="8" stroke="#FF9F1C" strokeOpacity="0.28" />
        </g>
      )}

      {variant === 'automation-relay' && (
        <g>
          <path
            data-hero-stroke
            d="M0 200 H190 C220 200 220 264 250 264 H320"
            stroke="#2EC4B6"
            strokeOpacity="0.24"
            strokeWidth="1.4"
          />
          <circle cx="190" cy="200" r="4" fill="#2EC4B6" fillOpacity="0.55" />
          <circle cx="250" cy="264" r="4.5" fill="#FF9F1C" fillOpacity="0.65" />
          <path
            data-hero-stroke
            d="M1120 560 H1210 C1242 560 1242 504 1274 504 H1440"
            stroke="#FF9F1C"
            strokeOpacity="0.28"
            strokeWidth="1.4"
          />
          <circle cx="1210" cy="560" r="4" fill="#15171A" fillOpacity="0.18" />
        </g>
      )}

      {variant === 'ai-prism' && (
        <g>
          <polygon
            data-hero-stroke
            points="160,118 228,158 228,236 160,276 92,236 92,158"
            stroke="#2EC4B6"
            strokeOpacity="0.22"
            strokeWidth="1.25"
          />
          <circle cx="160" cy="197" r="5" fill="#FF9F1C" fillOpacity="0.55" />
          <polygon
            data-hero-stroke
            points="1276,494 1344,534 1344,612 1276,652 1208,612 1208,534"
            stroke="#15171A"
            strokeOpacity="0.09"
            strokeWidth="1.25"
          />
          <line data-hero-stroke x1="1208" y1="534" x2="1276" y2="573" stroke="#2EC4B6" strokeOpacity="0.24" />
        </g>
      )}

      {variant === 'growth-axis' && (
        <g>
          <path
            data-hero-stroke
            d="M44 640 L124 600 L196 556 L268 492"
            stroke="#2EC4B6"
            strokeOpacity="0.28"
            strokeWidth="1.5"
          />
          <circle cx="268" cy="492" r="4.5" fill="#FF9F1C" fillOpacity="0.68" />
          <rect x="64" y="618" width="24" height="48" rx="3" fill="#2EC4B6" fillOpacity="0.1" />
          <rect x="104" y="592" width="24" height="74" rx="3" fill="#CBF3F0" fillOpacity="0.35" />
          <rect x="144" y="562" width="24" height="104" rx="3" fill="#FF9F1C" fillOpacity="0.14" />

          <path
            data-hero-stroke
            d="M1176 226 H1372"
            stroke="#15171A"
            strokeOpacity="0.09"
            strokeDasharray="4 5"
          />
          <circle cx="1328" cy="176" r="24" stroke="#FF9F1C" strokeOpacity="0.24" />
        </g>
      )}
    </svg>
  );
}

/**
 * Compact 64x46 architectural micro-illustrations for each card in Section 02 (What We Build).
 * Built strictly within SCALAROW's Tropical Sunrise palette (#FF9F1C, #FFBF69, #FFFFFF, #CBF3F0, #2EC4B6)
 * and charcoal ink (#15171A) so every capability communicates visually without generic icon repetition.
 */
export function CapabilityVisual({ visualKey, tone = 'teal' }) {
  const isDark = tone === 'dark';
  const strokeMain = isDark ? '#FFFFFF' : '#15171A';
  const inkSoft = isDark ? 'rgba(255,255,255,0.28)' : 'rgba(21,23,26,0.18)';
  const cardSurface = isDark ? '#202631' : '#FFFFFF';

  switch (visualKey) {
    /* --- Web Development --- */
    case 'web-business':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="6" y="6" width="52" height="34" rx="5" fill={cardSurface} stroke={strokeMain} strokeOpacity="0.22" />
          <line x1="6" y1="14" x2="58" y2="14" stroke={strokeMain} strokeOpacity="0.14" />
          <circle cx="12" cy="10" r="1.4" fill="#2EC4B6" />
          <circle cx="17" cy="10" r="1.4" fill="#FF9F1C" />
          <rect x="12" y="19" width="22" height="4" rx="2" fill={strokeMain} />
          <rect x="12" y="26" width="16" height="3" rx="1.5" fill={inkSoft} />
          <rect x="12" y="32" width="14" height="4" rx="2" fill="#FF9F1C" />
          <rect x="38" y="19" width="14" height="16" rx="3" fill="#CBF3F0" stroke="#2EC4B6" strokeOpacity="0.6" />
        </svg>
      );

    case 'web-landing':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="12" y="5" width="40" height="36" rx="5" fill={cardSurface} stroke={strokeMain} strokeOpacity="0.22" />
          <rect x="20" y="11" width="24" height="3.5" rx="1.75" fill="#2EC4B6" />
          <rect x="18" y="18" width="28" height="5" rx="2" fill={strokeMain} />
          <rect x="21" y="26" width="22" height="3" rx="1.5" fill={inkSoft} />
          <rect x="20" y="32" width="24" height="6" rx="3" fill="#FF9F1C" />
        </svg>
      );

    case 'web-ecommerce':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="7" y="8" width="20" height="30" rx="4" fill={cardSurface} stroke="rgba(255,255,255,0.22)" />
          <rect x="10" y="12" width="14" height="11" rx="2.5" fill="#CBF3F0" />
          <rect x="10" y="26" width="10" height="2.5" rx="1.25" fill="#FFFFFF" />
          <rect x="10" y="31" width="14" height="3.5" rx="1.75" fill="#2EC4B6" />

          <rect x="31" y="8" width="26" height="30" rx="4" fill={cardSurface} stroke="#FF9F1C" strokeOpacity="0.7" />
          <rect x="35" y="13" width="18" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.85" />
          <rect x="35" y="20" width="14" height="3" rx="1.5" fill="#A9B4C2" />
          <rect x="35" y="28" width="18" height="6" rx="3" fill="#FF9F1C" />
        </svg>
      );

    case 'web-responsive':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="6" y="7" width="38" height="28" rx="4" fill={cardSurface} stroke={strokeMain} strokeOpacity="0.22" />
          <rect x="11" y="13" width="28" height="7" rx="2" fill="#CBF3F0" />
          <rect x="11" y="23" width="12" height="7" rx="2" fill={inkSoft} />
          <rect x="27" y="23" width="12" height="7" rx="2" fill="#FFBF69" fillOpacity="0.55" />
          <rect x="39" y="13" width="19" height="27" rx="4" fill="#15171A" />
          <rect x="42" y="17" width="13" height="19" rx="2" fill="#FFFFFF" />
          <rect x="44" y="20" width="9" height="5" rx="1.5" fill="#2EC4B6" />
          <rect x="44" y="28" width="9" height="5" rx="1.5" fill="#FF9F1C" />
        </svg>
      );

    case 'web-performance':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <path d="M14 33 A18 18 0 0 1 50 33" stroke={inkSoft} strokeWidth="4" strokeLinecap="round" />
          <path d="M14 33 A18 18 0 0 1 46 21" stroke="#2EC4B6" strokeWidth="4" strokeLinecap="round" />
          <line x1="32" y1="33" x2="43" y2="21" stroke="#FF9F1C" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="32" cy="33" r="3" fill={strokeMain} />
          <rect x="20" y="38" width="24" height="3" rx="1.5" fill="#2EC4B6" fillOpacity="0.6" />
        </svg>
      );

    case 'web-maintenance':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="10" y="8" width="44" height="30" rx="5" fill={cardSurface} stroke="rgba(255,255,255,0.22)" />
          <path
            d="M16 25 H23 L27 17 L33 30 L38 21 L42 25 H48"
            stroke="#2EC4B6"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="48" cy="15" r="3" fill="#FF9F1C" />
        </svg>
      );

    /* --- Application Development --- */
    case 'app-ios':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="20" y="5" width="24" height="36" rx="5" fill={cardSurface} stroke={strokeMain} strokeOpacity="0.25" />
          <rect x="28" y="8" width="8" height="2" rx="1" fill={inkSoft} />
          <rect x="24" y="14" width="16" height="9" rx="2.5" fill="#CBF3F0" />
          <rect x="24" y="26" width="16" height="4" rx="2" fill="#FF9F1C" />
          <rect x="27" y="36" width="10" height="1.8" rx="0.9" fill={strokeMain} fillOpacity="0.5" />
        </svg>
      );

    case 'app-android':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="14" y="8" width="20" height="31" rx="4" fill={cardSurface} stroke={strokeMain} strokeOpacity="0.22" />
          <rect x="17" y="13" width="14" height="8" rx="2" fill="#2EC4B6" fillOpacity="0.3" />
          <rect x="17" y="24" width="14" height="3" rx="1.5" fill={inkSoft} />
          <rect x="30" y="11" width="20" height="30" rx="4" fill={cardSurface} stroke="#FF9F1C" strokeOpacity="0.65" />
          <rect x="34" y="16" width="12" height="10" rx="2.5" fill="#FFBF69" fillOpacity="0.5" />
          <circle cx="44" cy="34" r="3" fill="#2EC4B6" />
        </svg>
      );

    case 'app-cross':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="8" y="11" width="16" height="24" rx="3.5" fill={cardSurface} stroke="#2EC4B6" strokeOpacity="0.65" />
          <rect x="40" y="11" width="16" height="24" rx="3.5" fill={cardSurface} stroke="#FF9F1C" strokeOpacity="0.7" />
          <rect x="25" y="16" width="14" height="14" rx="3.5" fill="#FF9F1C" />
          <path d="M24 23 H25 M39 23 H40" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      );

    case 'app-uiux':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="8" y="8" width="22" height="14" rx="3" fill={cardSurface} stroke="#2EC4B6" />
          <rect x="34" y="8" width="22" height="14" rx="3" fill={cardSurface} stroke={strokeMain} strokeOpacity="0.22" />
          <rect x="8" y="25" width="48" height="13" rx="3.5" fill={cardSurface} stroke={strokeMain} strokeOpacity="0.22" />
          <circle cx="15" cy="31.5" r="2.5" fill="#FF9F1C" />
          <rect x="22" y="30" width="20" height="3" rx="1.5" fill={strokeMain} fillOpacity="0.7" />
        </svg>
      );

    case 'app-api':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <circle cx="14" cy="23" r="6" fill={cardSurface} stroke={strokeMain} strokeOpacity="0.28" />
          <circle cx="50" cy="14" r="5" fill="#CBF3F0" stroke="#2EC4B6" />
          <circle cx="50" cy="32" r="5" fill="#FFF2DE" stroke="#FF9F1C" />
          <path d="M20 23 H32 V14 H45 M32 23 V32 H45" stroke={strokeMain} strokeOpacity="0.55" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="32" cy="23" r="2.5" fill="#FF9F1C" />
        </svg>
      );

    case 'app-care':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <path d="M32 7 L49 13 V24 C49 32 41 37 32 40 C23 37 15 32 15 24 V13 L32 7 Z" fill={cardSurface} stroke="#2EC4B6" strokeWidth="1.5" />
          <path d="M25 23 L30 28 L39 18" stroke="#FF9F1C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    /* --- Software Development --- */
    case 'sw-custom':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="9" y="8" width="20" height="13" rx="3" fill="#CBF3F0" stroke="#2EC4B6" />
          <rect x="35" y="8" width="20" height="13" rx="3" fill={cardSurface} stroke={strokeMain} strokeOpacity="0.24" />
          <rect x="20" y="25" width="24" height="13" rx="3" fill="#FF9F1C" />
          <path d="M19 21 V23 H32 V25 M45 21 V23 H32" stroke={strokeMain} strokeOpacity="0.4" strokeWidth="1.4" />
        </svg>
      );

    case 'sw-bms':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="8" y="8" width="48" height="30" rx="5" fill={cardSurface} stroke={strokeMain} strokeOpacity="0.2" />
          <rect x="13" y="13" width="12" height="20" rx="2.5" fill="#15171A" />
          <rect x="29" y="13" width="22" height="8" rx="2" fill="#CBF3F0" />
          <rect x="29" y="24" width="10" height="9" rx="2" fill="#FFBF69" />
          <rect x="41" y="24" width="10" height="9" rx="2" fill="#2EC4B6" fillOpacity="0.45" />
        </svg>
      );

    case 'sw-crm':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="8" y="9" width="14" height="28" rx="3" fill={cardSurface} stroke="rgba(255,255,255,0.22)" />
          <rect x="25" y="9" width="14" height="28" rx="3" fill={cardSurface} stroke="#2EC4B6" strokeOpacity="0.65" />
          <rect x="42" y="9" width="14" height="28" rx="3" fill={cardSurface} stroke="#FF9F1C" strokeOpacity="0.75" />
          <rect x="11" y="13" width="8" height="5" rx="1.5" fill="#FFFFFF" fillOpacity="0.5" />
          <rect x="28" y="13" width="8" height="5" rx="1.5" fill="#2EC4B6" />
          <rect x="28" y="21" width="8" height="5" rx="1.5" fill="#CBF3F0" fillOpacity="0.6" />
          <rect x="45" y="13" width="8" height="5" rx="1.5" fill="#FF9F1C" />
        </svg>
      );

    case 'sw-dash':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="8" y="8" width="48" height="30" rx="4.5" fill={cardSurface} stroke={strokeMain} strokeOpacity="0.2" />
          <rect x="14" y="24" width="7" height="9" rx="1.5" fill="#2EC4B6" />
          <rect x="24" y="19" width="7" height="14" rx="1.5" fill="#CBF3F0" stroke="#2EC4B6" strokeOpacity="0.4" />
          <rect x="34" y="15" width="7" height="18" rx="1.5" fill="#FFBF69" />
          <rect x="44" y="12" width="7" height="21" rx="1.5" fill="#FF9F1C" />
        </svg>
      );

    case 'sw-db':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <ellipse cx="32" cy="13" rx="18" ry="5" fill="#CBF3F0" stroke="#2EC4B6" />
          <path d="M14 13 V33 C14 35.8 22 38 32 38 C42 38 50 35.8 50 33 V13" fill={cardSurface} stroke={strokeMain} strokeOpacity="0.28" />
          <path d="M14 23 C14 25.8 22 28 32 28 C42 28 50 25.8 50 23" stroke="#FF9F1C" strokeWidth="1.5" />
          <ellipse cx="32" cy="13" rx="18" ry="5" fill="#CBF3F0" stroke="#2EC4B6" />
        </svg>
      );

    case 'sw-integration':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="8" y="10" width="16" height="10" rx="2.5" fill={cardSurface} stroke="rgba(255,255,255,0.28)" />
          <rect x="8" y="26" width="16" height="10" rx="2.5" fill={cardSurface} stroke="rgba(255,255,255,0.28)" />
          <rect x="40" y="16" width="16" height="14" rx="3" fill="#2EC4B6" />
          <path d="M24 15 H32 V23 H40 M24 31 H32 V23" stroke="#FF9F1C" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="32" cy="23" r="2.8" fill="#FFFFFF" />
        </svg>
      );

    /* --- Business Automation --- */
    case 'auto-workflow':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="8" y="17" width="12" height="12" rx="3" fill="#15171A" />
          <rect x="26" y="17" width="12" height="12" rx="3" fill="#2EC4B6" />
          <rect x="44" y="17" width="12" height="12" rx="3" fill="#FF9F1C" />
          <path d="M20 23 H26 M38 23 H44" stroke={strokeMain} strokeWidth="1.8" />
        </svg>
      );

    case 'auto-crm':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="9" y="10" width="46" height="11" rx="3" fill={cardSurface} stroke={strokeMain} strokeOpacity="0.2" />
          <circle cx="16" cy="15.5" r="2.5" fill="#FF9F1C" />
          <rect x="22" y="14" width="22" height="3" rx="1.5" fill={strokeMain} fillOpacity="0.65" />
          <rect x="9" y="25" width="46" height="11" rx="3" fill="#CBF3F0" stroke="#2EC4B6" />
          <circle cx="16" cy="30.5" r="2.5" fill="#0B6E65" />
          <rect x="22" y="29" width="26" height="3" rx="1.5" fill="#15171A" />
        </svg>
      );

    case 'auto-leads':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <path d="M12 10 H52 L38 24 V35 L26 38 V24 L12 10 Z" fill={cardSurface} stroke="#2EC4B6" strokeWidth="1.5" />
          <circle cx="32" cy="17" r="3" fill="#FF9F1C" />
        </svg>
      );

    case 'auto-email':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="10" y="11" width="44" height="24" rx="4" fill={cardSurface} stroke={strokeMain} strokeOpacity="0.22" />
          <path d="M12 13 L32 25 L52 13" stroke="#2EC4B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="48" cy="14" r="4" fill="#FF9F1C" />
        </svg>
      );

    case 'auto-sync':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <path d="M18 19 C20 12 29 9 37 12 L42 15" stroke="#2EC4B6" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M46 27 C44 34 35 37 27 34 L22 31" stroke="#FF9F1C" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="43" cy="15" r="2.5" fill="#2EC4B6" />
          <circle cx="21" cy="31" r="2.5" fill="#FF9F1C" />
        </svg>
      );

    case 'auto-process':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="10" y="8" width="18" height="12" rx="3" fill={cardSurface} stroke="rgba(255,255,255,0.28)" />
          <rect x="36" y="8" width="18" height="12" rx="3" fill="#2EC4B6" />
          <rect x="36" y="26" width="18" height="12" rx="3" fill="#FF9F1C" />
          <path d="M28 14 H36 M19 20 V32 H36" stroke="#CBF3F0" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    /* --- AI Solutions --- */
    case 'ai-agents':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="22" y="13" width="20" height="20" rx="5" fill="#15171A" />
          <circle cx="32" cy="23" r="4" fill="#FF9F1C" />
          <path d="M10 23 H22 M42 23 H54 M32 6 V13 M32 33 V40" stroke="#2EC4B6" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'ai-voice':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="12" y="19" width="4" height="8" rx="2" fill="#2EC4B6" />
          <rect x="20" y="13" width="4" height="20" rx="2" fill={strokeMain} />
          <rect x="28" y="9" width="4" height="28" rx="2" fill="#FF9F1C" />
          <rect x="36" y="15" width="4" height="16" rx="2" fill={strokeMain} />
          <rect x="44" y="11" width="4" height="24" rx="2" fill="#2EC4B6" />
          <rect x="52" y="19" width="4" height="8" rx="2" fill="#FFBF69" />
        </svg>
      );

    case 'ai-assistants':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="10" y="8" width="18" height="12" rx="2.5" fill={cardSurface} stroke="#2EC4B6" strokeOpacity="0.7" />
          <rect x="36" y="8" width="18" height="12" rx="2.5" fill={cardSurface} stroke="#FF9F1C" strokeOpacity="0.75" />
          <path d="M19 20 V24 H32 V27 M45 20 V24 H32" stroke="#CBF3F0" strokeWidth="1.5" />
          <rect x="14" y="27" width="36" height="11" rx="3" fill="#FFFFFF" />
          <rect x="19" y="31" width="18" height="3" rx="1.5" fill="#15171A" />
          <rect x="41" y="30" width="5" height="5" rx="2.5" fill="#FF9F1C" />
        </svg>
      );

    case 'ai-chatbots':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="8" y="9" width="32" height="13" rx="4" fill={cardSurface} stroke={strokeMain} strokeOpacity="0.22" />
          <rect x="14" y="14" width="18" height="3" rx="1.5" fill={inkSoft} />
          <rect x="24" y="25" width="32" height="13" rx="4" fill="#CBF3F0" stroke="#2EC4B6" />
          <rect x="30" y="30" width="14" height="3" rx="1.5" fill="#15171A" />
          <circle cx="49" cy="31.5" r="2.5" fill="#FF9F1C" />
        </svg>
      );

    case 'ai-integration':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="9" y="9" width="18" height="28" rx="3" fill={cardSurface} stroke={strokeMain} strokeOpacity="0.22" />
          <rect x="13" y="14" width="10" height="3" rx="1.5" fill={inkSoft} />
          <rect x="13" y="20" width="10" height="3" rx="1.5" fill={inkSoft} />
          <rect x="13" y="26" width="8" height="3" rx="1.5" fill="#FF9F1C" />
          <path d="M27 23 H36" stroke="#2EC4B6" strokeWidth="2" />
          <rect x="36" y="11" width="19" height="24" rx="3" fill="#15171A" />
          <rect x="40" y="16" width="11" height="3" rx="1.5" fill="#2EC4B6" />
          <rect x="40" y="22" width="11" height="3" rx="1.5" fill="#FF9F1C" />
          <rect x="40" y="28" width="8" height="3" rx="1.5" fill="#FFFFFF" fillOpacity="0.7" />
        </svg>
      );

    case 'ai-custom':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <polygon points="32,7 50,17 50,31 32,39 14,31 14,17" fill={cardSurface} stroke="#2EC4B6" strokeWidth="1.5" />
          <polygon points="32,12 44,19 32,26 20,19" fill="#CBF3F0" fillOpacity="0.45" />
          <circle cx="32" cy="24" r="3.5" fill="#FF9F1C" />
        </svg>
      );

    /* --- Digital Growth --- */
    case 'grow-techseo':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="25" y="7" width="14" height="8" rx="2" fill="#15171A" />
          <path d="M32 15 V22 M16 22 H48 M16 22 V28 M32 22 V28 M48 22 V28" stroke="#2EC4B6" strokeWidth="1.6" />
          <rect x="10" y="28" width="12" height="9" rx="2" fill={cardSurface} stroke={strokeMain} strokeOpacity="0.24" />
          <rect x="26" y="28" width="12" height="9" rx="2" fill="#CBF3F0" stroke="#2EC4B6" />
          <rect x="42" y="28" width="12" height="9" rx="2" fill="#FF9F1C" />
        </svg>
      );

    case 'grow-onpage':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="12" y="7" width="40" height="32" rx="4" fill={cardSurface} stroke={strokeMain} strokeOpacity="0.2" />
          <rect x="18" y="13" width="22" height="5" rx="2" fill={strokeMain} />
          <rect x="18" y="22" width="28" height="3" rx="1.5" fill="#2EC4B6" />
          <rect x="18" y="28" width="20" height="3" rx="1.5" fill={inkSoft} />
          <circle cx="45" cy="15.5" r="3" fill="#FF9F1C" />
        </svg>
      );

    case 'grow-visibility':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <circle cx="28" cy="21" r="11" fill={cardSurface} stroke="#2EC4B6" strokeWidth="2" />
          <line x1="36" y1="29" x2="47" y2="38" stroke="#FF9F1C" strokeWidth="3" strokeLinecap="round" />
          <circle cx="28" cy="21" r="4" fill="#FF9F1C" />
        </svg>
      );

    case 'grow-perf':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="10" y="11" width="44" height="6" rx="3" fill="#CBF3F0" />
          <rect x="10" y="11" width="38" height="6" rx="3" fill="#2EC4B6" />
          <rect x="10" y="21" width="44" height="6" rx="3" fill={inkSoft} />
          <rect x="10" y="21" width="30" height="6" rx="3" fill="#FF9F1C" />
          <rect x="10" y="31" width="44" height="6" rx="3" fill={inkSoft} />
          <rect x="10" y="31" width="42" height="6" rx="3" fill={strokeMain} />
        </svg>
      );

    case 'grow-cro':
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <path d="M12 10 H52 L44 21 H20 L12 10 Z" fill="#CBF3F0" stroke="#2EC4B6" />
          <path d="M20 24 H44 L38 35 H26 L20 24 Z" fill="#FF9F1C" />
        </svg>
      );

    case 'grow-analytics':
    default:
      return (
        <svg viewBox="0 0 64 46" fill="none" className="sd-cap-svg" aria-hidden="true">
          <rect x="8" y="8" width="48" height="30" rx="4.5" fill={cardSurface} stroke="rgba(255,255,255,0.2)" />
          <path
            d="M14 30 L24 24 L34 26 L48 14"
            stroke="#2EC4B6"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="48" cy="14" r="3" fill="#FF9F1C" />
          <circle cx="24" cy="24" r="2" fill="#FFFFFF" />
        </svg>
      );
  }
}
