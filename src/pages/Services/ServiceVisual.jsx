import { useId } from 'react';

/**
 * Compact architectural studio previews (184x104 viewBox) for the six
 * Scalarow services. Built with clean geometric UI abstraction and brand
 * tokens (#FAFAF8, #15171A, #FF9F1C, #2EC4B6) so every preview reads crisply
 * at compact card scale without illegible micro-text.
 */

function WebEditorialPreview() {
  const uid = useId().replace(/:/g, '');
  const bgId = `${uid}-web-bg`;

  return (
    <svg
      viewBox="0 0 184 104"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="svc-preview__svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={bgId} x1="0" y1="0" x2="184" y2="104" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5F2EA" />
          <stop offset="100%" stopColor="#ECE7DA" />
        </linearGradient>
      </defs>

      <rect width="184" height="104" fill={`url(#${bgId})`} />

      {/* Subtle architectural grid lines */}
      <g stroke="#15171A" strokeOpacity="0.06" strokeWidth="1">
        <line x1="20" y1="0" x2="20" y2="104" />
        <line x1="164" y1="0" x2="164" y2="104" />
        <line x1="0" y1="18" x2="184" y2="18" />
      </g>

      {/* Desktop browser plane */}
      <rect
        x="16"
        y="14"
        width="120"
        height="76"
        rx="7"
        fill="#FFFFFF"
        stroke="#15171A"
        strokeOpacity="0.14"
      />
      <line x1="16" y1="27" x2="136" y2="27" stroke="#15171A" strokeOpacity="0.08" />
      <circle cx="24" cy="20.5" r="2" fill="#15171A" fillOpacity="0.22" />
      <circle cx="31" cy="20.5" r="2" fill="#15171A" fillOpacity="0.14" />
      <circle cx="38" cy="20.5" r="2" fill="#FF9F1C" />

      {/* Editorial layout blocks inside browser */}
      <rect x="26" y="36" width="24" height="5" rx="2.5" fill="#2EC4B6" fillOpacity="0.5" />
      <rect x="26" y="46" width="52" height="7" rx="2" fill="#15171A" />
      <rect x="26" y="57" width="42" height="5" rx="2" fill="#15171A" fillOpacity="0.22" />
      <rect x="26" y="69" width="32" height="11" rx="5.5" fill="#FF9F1C" />
      <rect x="86" y="36" width="38" height="44" rx="5" fill="#F4F2EC" stroke="#15171A" strokeOpacity="0.08" />
      <circle cx="105" cy="54" r="9" fill="#2EC4B6" fillOpacity="0.85" />
      <rect x="95" y="68" width="20" height="4" rx="2" fill="#15171A" fillOpacity="0.24" />

      {/* Overlapping mobile viewport slate */}
      <rect x="122" y="28" width="46" height="64" rx="8" fill="#15171A" />
      <rect x="126" y="33" width="38" height="54" rx="5" fill="#FFFFFF" />
      <rect x="139" y="36" width="12" height="2" rx="1" fill="#15171A" fillOpacity="0.2" />
      <rect x="131" y="43" width="28" height="7" rx="2" fill="#15171A" />
      <rect x="131" y="54" width="28" height="16" rx="3.5" fill="#E6F7F4" stroke="#2EC4B6" strokeOpacity="0.45" />
      <rect x="131" y="75" width="28" height="7" rx="3.5" fill="#FF9F1C" />
    </svg>
  );
}

function AppPortalPreview() {
  const uid = useId().replace(/:/g, '');
  const bgId = `${uid}-app-bg`;

  return (
    <svg
      viewBox="0 0 184 104"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="svc-preview__svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={bgId} x1="0" y1="0" x2="184" y2="104" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E9F4F1" />
          <stop offset="100%" stopColor="#DCECE8" />
        </linearGradient>
      </defs>

      <rect width="184" height="104" fill={`url(#${bgId})`} />

      {/* Web workspace card */}
      <rect
        x="16"
        y="14"
        width="108"
        height="76"
        rx="7"
        fill="#FFFFFF"
        stroke="#15171A"
        strokeOpacity="0.12"
      />
      <rect x="24" y="22" width="34" height="5" rx="2.5" fill="#15171A" />
      <rect x="92" y="21" width="24" height="7" rx="3.5" fill="#CBF3F0" />

      {/* Workflow list items */}
      <rect x="24" y="35" width="92" height="14" rx="4" fill="#FAF9F5" stroke="#15171A" strokeOpacity="0.08" />
      <circle cx="32" cy="42" r="3" fill="#2EC4B6" />
      <rect x="40" y="40" width="44" height="4" rx="2" fill="#15171A" fillOpacity="0.72" />
      <rect x="96" y="39" width="14" height="6" rx="3" fill="#2EC4B6" fillOpacity="0.3" />

      <rect x="24" y="53" width="92" height="14" rx="4" fill="#FAF9F5" stroke="#15171A" strokeOpacity="0.08" />
      <circle cx="32" cy="60" r="3" fill="#FF9F1C" />
      <rect x="40" y="58" width="38" height="4" rx="2" fill="#15171A" fillOpacity="0.72" />
      <rect x="96" y="57" width="14" height="6" rx="3" fill="#FF9F1C" fillOpacity="0.4" />

      <rect x="24" y="71" width="92" height="12" rx="4" fill="#FAF9F5" stroke="#15171A" strokeOpacity="0.08" />
      <circle cx="32" cy="77" r="2.5" fill="#15171A" fillOpacity="0.35" />
      <rect x="40" y="75" width="48" height="4" rx="2" fill="#15171A" fillOpacity="0.3" />

      {/* Mobile app companion */}
      <rect x="118" y="20" width="50" height="74" rx="9" fill="#15171A" />
      <rect x="123" y="25" width="40" height="64" rx="6" fill="#FFFFFF" />
      <rect x="127" y="30" width="32" height="18" rx="4" fill="#15171A" />
      <rect x="131" y="35" width="16" height="3.5" rx="1.75" fill="#2EC4B6" />
      <rect x="131" y="41" width="22" height="3" rx="1.5" fill="#FFFFFF" fillOpacity="0.55" />
      <rect x="127" y="52" width="32" height="13" rx="3.5" fill="#E9FAF8" stroke="#2EC4B6" strokeOpacity="0.45" />
      <rect x="127" y="69" width="32" height="13" rx="6.5" fill="#FF9F1C" />
    </svg>
  );
}

function SoftwareSystemPreview() {
  const uid = useId().replace(/:/g, '');
  const bgId = `${uid}-sw-bg`;

  return (
    <svg
      viewBox="0 0 184 104"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="svc-preview__svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={bgId} x1="0" y1="0" x2="184" y2="104" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#191E26" />
          <stop offset="100%" stopColor="#101318" />
        </linearGradient>
      </defs>

      <rect width="184" height="104" fill={`url(#${bgId})`} />

      {/* Technical coordinate grid */}
      <g stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="1">
        <line x1="46" y1="0" x2="46" y2="104" />
        <line x1="92" y1="0" x2="92" y2="104" />
        <line x1="138" y1="0" x2="138" y2="104" />
        <line x1="0" y1="52" x2="184" y2="52" />
      </g>

      {/* Routing connectors */}
      <path d="M56 26 H74 V52 H90" stroke="#2EC4B6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M56 52 H90" stroke="#FF9F1C" strokeWidth="2" strokeLinecap="round" />
      <path d="M56 78 H74 V52" stroke="#CBF3F0" strokeOpacity="0.55" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="74" cy="52" r="3" fill="#FF9F1C" />

      {/* Left input system nodes */}
      <rect x="16" y="18" width="40" height="16" rx="4" fill="#232934" stroke="#FFFFFF" strokeOpacity="0.16" />
      <circle cx="24" cy="26" r="2.5" fill="#2EC4B6" />
      <rect x="31" y="24" width="18" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.6" />

      <rect x="16" y="44" width="40" height="16" rx="4" fill="#232934" stroke="#FF9F1C" strokeOpacity="0.65" />
      <circle cx="24" cy="52" r="2.5" fill="#FF9F1C" />
      <rect x="31" y="50" width="18" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.85" />

      <rect x="16" y="70" width="40" height="16" rx="4" fill="#232934" stroke="#FFFFFF" strokeOpacity="0.16" />
      <circle cx="24" cy="78" r="2.5" fill="#CBF3F0" />
      <rect x="31" y="76" width="18" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.6" />

      {/* Unified core engine block */}
      <rect x="90" y="18" width="78" height="68" rx="8" fill="#1E242F" stroke="#2EC4B6" strokeOpacity="0.55" strokeWidth="1.25" />
      <rect x="98" y="26" width="30" height="7" rx="3.5" fill="#FF9F1C" />
      <rect x="98" y="40" width="62" height="12" rx="3" fill="#13171F" stroke="#FFFFFF" strokeOpacity="0.1" />
      <rect x="104" y="44.5" width="38" height="3" rx="1.5" fill="#FFFFFF" fillOpacity="0.7" />
      <rect x="98" y="56" width="62" height="12" rx="3" fill="#13171F" stroke="#FFFFFF" strokeOpacity="0.1" />
      <rect x="104" y="60.5" width="44" height="3" rx="1.5" fill="#2EC4B6" />
      <rect x="98" y="72" width="62" height="7" rx="3" fill="#2EC4B6" fillOpacity="0.18" />
    </svg>
  );
}

function AutomationRelayPreview() {
  const uid = useId().replace(/:/g, '');
  const dotId = `${uid}-auto-dots`;

  return (
    <svg
      viewBox="0 0 184 104"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="svc-preview__svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id={dotId} x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.9" fill="#0B6E65" fillOpacity="0.22" />
        </pattern>
      </defs>

      <rect width="184" height="104" fill="#EAF6F4" />
      <rect width="184" height="104" fill={`url(#${dotId})`} />

      {/* Flow routing tracks */}
      <path d="M64 52 H84" stroke="#0B6E65" strokeWidth="1.75" />
      <path d="M84 24 V80" stroke="#0B6E65" strokeWidth="1.75" />
      <path d="M84 24 H98" stroke="#0B6E65" strokeWidth="1.75" />
      <path d="M84 52 H98" stroke="#FF9F1C" strokeWidth="2" />
      <path d="M84 80 H98" stroke="#0B6E65" strokeWidth="1.75" />
      <circle cx="84" cy="52" r="3.5" fill="#FF9F1C" stroke="#FFFFFF" strokeWidth="1.25" />

      {/* Trigger source node */}
      <rect x="16" y="34" width="48" height="36" rx="7" fill="#15171A" />
      <rect x="23" y="42" width="18" height="6" rx="3" fill="#FF9F1C" />
      <rect x="23" y="53" width="32" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.85" />
      <rect x="23" y="60" width="24" height="3.5" rx="1.75" fill="#8ADFD0" />

      {/* Downstream action cards */}
      <rect x="98" y="14" width="70" height="20" rx="5" fill="#FFFFFF" stroke="#0B6E65" strokeOpacity="0.24" />
      <circle cx="109" cy="24" r="4.5" fill="#E9FAF8" stroke="#2EC4B6" strokeWidth="1.2" />
      <rect x="119" y="21" width="38" height="4" rx="2" fill="#15171A" fillOpacity="0.8" />

      <rect x="98" y="42" width="70" height="20" rx="5" fill="#FFFFFF" stroke="#FF9F1C" strokeOpacity="0.65" strokeWidth="1.25" />
      <circle cx="109" cy="52" r="4.5" fill="#FFF3DE" stroke="#FF9F1C" strokeWidth="1.2" />
      <rect x="119" y="49" width="40" height="4" rx="2" fill="#15171A" fillOpacity="0.85" />

      <rect x="98" y="70" width="70" height="20" rx="5" fill="#FFFFFF" stroke="#0B6E65" strokeOpacity="0.24" />
      <circle cx="109" cy="80" r="4.5" fill="#E9FAF8" stroke="#2EC4B6" strokeWidth="1.2" />
      <rect x="119" y="77" width="34" height="4" rx="2" fill="#15171A" fillOpacity="0.8" />
    </svg>
  );
}

function AiGroundedPreview() {
  const uid = useId().replace(/:/g, '');
  const bgId = `${uid}-ai-bg`;

  return (
    <svg
      viewBox="0 0 184 104"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="svc-preview__svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={bgId} x1="0" y1="0" x2="184" y2="104" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#132322" />
          <stop offset="100%" stopColor="#0D1618" />
        </linearGradient>
      </defs>

      <rect width="184" height="104" fill={`url(#${bgId})`} />

      {/* Grounded source documents */}
      <rect x="18" y="13" width="44" height="19" rx="4" fill="#1A2E2D" stroke="#FFFFFF" strokeOpacity="0.18" />
      <rect x="24" y="19" width="24" height="3" rx="1.5" fill="#CBF3F0" />
      <rect x="24" y="25" width="16" height="2.5" rx="1.25" fill="#FFFFFF" fillOpacity="0.4" />

      <rect x="70" y="13" width="44" height="19" rx="4" fill="#1A2E2D" stroke="#FF9F1C" strokeOpacity="0.65" />
      <rect x="76" y="19" width="26" height="3" rx="1.5" fill="#FFBF69" />
      <rect x="76" y="25" width="18" height="2.5" rx="1.25" fill="#FFFFFF" fillOpacity="0.4" />

      <rect x="122" y="13" width="44" height="19" rx="4" fill="#1A2E2D" stroke="#FFFFFF" strokeOpacity="0.18" />
      <rect x="128" y="19" width="22" height="3" rx="1.5" fill="#CBF3F0" />
      <rect x="128" y="25" width="16" height="2.5" rx="1.25" fill="#FFFFFF" fillOpacity="0.4" />

      {/* Retrieval convergence lines */}
      <path d="M40 32 V40 H92 V46" stroke="#2EC4B6" strokeWidth="1.5" strokeOpacity="0.7" />
      <path d="M92 32 V46" stroke="#FF9F1C" strokeWidth="1.75" />
      <path d="M144 32 V40 H92" stroke="#2EC4B6" strokeWidth="1.5" strokeOpacity="0.7" />

      {/* Grounded response surface */}
      <rect x="18" y="46" width="148" height="45" rx="7" fill="#FFFFFF" />
      <rect x="26" y="53" width="132" height="11" rx="3.5" fill="#15171A" />
      <circle cx="33" cy="58.5" r="2.2" fill="#FF9F1C" />
      <rect x="39" y="57" width="68" height="3" rx="1.5" fill="#FFFFFF" fillOpacity="0.85" />

      <rect x="26" y="69" width="88" height="4" rx="2" fill="#15171A" fillOpacity="0.75" />
      <rect x="26" y="76" width="64" height="3.5" rx="1.75" fill="#15171A" fillOpacity="0.28" />

      {/* Citation anchor pills */}
      <rect x="120" y="70" width="38" height="11" rx="5.5" fill="#FFF3DE" stroke="#FF9F1C" />
      <rect x="126" y="74" width="26" height="3" rx="1.5" fill="#A85500" />
    </svg>
  );
}

function GrowthMomentumPreview() {
  const uid = useId().replace(/:/g, '');
  const bgId = `${uid}-grow-bg`;

  return (
    <svg
      viewBox="0 0 184 104"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="svc-preview__svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={bgId} x1="0" y1="0" x2="184" y2="104" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#181C24" />
          <stop offset="100%" stopColor="#0E1116" />
        </linearGradient>
      </defs>

      <rect width="184" height="104" fill={`url(#${bgId})`} />

      {/* Subtle architectural axis lines */}
      <g stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="1">
        <line x1="0" y1="34" x2="184" y2="34" />
        <line x1="0" y1="68" x2="184" y2="68" />
        <line x1="62" y1="0" x2="62" y2="104" />
        <line x1="122" y1="0" x2="122" y2="104" />
      </g>

      {/* Momentum curve */}
      <path
        d="M28 60 C68 54 102 36 144 18"
        stroke="#2EC4B6"
        strokeWidth="1.75"
        strokeDasharray="3.5 3.5"
        strokeLinecap="round"
      />
      <circle cx="144" cy="18" r="4" fill="#FF9F1C" stroke="#FFFFFF" strokeWidth="1.5" />

      {/* Stepped Compounding Columns: Speed -> Search -> Conversion */}
      <rect x="20" y="64" width="42" height="28" rx="5" fill="#1F2632" stroke="#2EC4B6" strokeOpacity="0.5" />
      <rect x="27" y="72" width="22" height="4" rx="2" fill="#2EC4B6" />
      <rect x="27" y="80" width="28" height="3.5" rx="1.75" fill="#FFFFFF" fillOpacity="0.35" />

      <rect x="71" y="46" width="42" height="46" rx="5" fill="#232B38" stroke="#CBF3F0" strokeOpacity="0.4" />
      <rect x="78" y="54" width="20" height="4" rx="2" fill="#CBF3F0" />
      <rect x="78" y="63" width="28" height="10" rx="2.5" fill="#141820" />
      <rect x="78" y="78" width="22" height="3.5" rx="1.75" fill="#FFFFFF" fillOpacity="0.45" />

      <rect x="122" y="28" width="42" height="64" rx="5" fill="#FF9F1C" />
      <rect x="129" y="37" width="22" height="5" rx="2.5" fill="#15171A" />
      <rect x="129" y="47" width="28" height="22" rx="3" fill="#15171A" fillOpacity="0.12" />
      <rect x="129" y="75" width="28" height="9" rx="4.5" fill="#15171A" />
    </svg>
  );
}

export default function ServiceVisual({ variant }) {
  switch (variant) {
    case 'web-editorial':
      return <WebEditorialPreview />;
    case 'app-portal':
      return <AppPortalPreview />;
    case 'software-system':
      return <SoftwareSystemPreview />;
    case 'automation-relay':
      return <AutomationRelayPreview />;
    case 'ai-grounded':
      return <AiGroundedPreview />;
    case 'growth-momentum':
      return <GrowthMomentumPreview />;
    default:
      return <WebEditorialPreview />;
  }
}
