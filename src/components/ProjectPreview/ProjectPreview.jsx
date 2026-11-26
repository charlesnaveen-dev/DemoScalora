import './ProjectPreview.css';

function NorthstarSchematic() {
  return (
    <svg
      viewBox="0 0 420 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="project-preview__svg"
      aria-hidden="true"
    >
      <rect width="420" height="220" rx="10" fill="#F7FAFA" />
      {/* Storefront header bar */}
      <rect x="20" y="18" width="380" height="26" rx="5" fill="#FFFFFF" stroke="#D5DCE4" />
      <circle cx="34" cy="31" r="4" fill="#FF9F1C" />
      <rect x="46" y="28" width="54" height="6" rx="3" fill="#0E1116" />
      <rect x="306" y="25" width="42" height="12" rx="6" fill="#CBF3F0" />
      <rect x="354" y="25" width="36" height="12" rx="6" fill="#0E1116" />

      {/* Dual mode split: Retail vs Trade */}
      <rect x="20" y="56" width="182" height="144" rx="8" fill="#FFFFFF" stroke="#D5DCE4" />
      <rect x="34" y="70" width="58" height="14" rx="7" fill="#FF9F1C" fillOpacity="0.22" />
      <rect x="42" y="75" width="42" height="4" rx="2" fill="#A85500" />
      <rect x="34" y="96" width="154" height="48" rx="5" fill="#E9FAF8" />
      <rect x="34" y="156" width="72" height="10" rx="3" fill="#0E1116" />
      <rect x="34" y="174" width="120" height="6" rx="3" fill="#8C96A5" />

      <rect x="218" y="56" width="182" height="144" rx="8" fill="#0E1116" />
      <rect x="232" y="70" width="66" height="14" rx="7" fill="#2EC4B6" fillOpacity="0.22" />
      <rect x="240" y="75" width="50" height="4" rx="2" fill="#CBF3F0" />
      {/* Quick-order table rows */}
      <rect x="232" y="96" width="154" height="20" rx="4" fill="#171B22" stroke="#2D3542" />
      <rect x="240" y="104" width="48" height="4" rx="2" fill="#FFFFFF" />
      <rect x="342" y="103" width="34" height="6" rx="3" fill="#FF9F1C" />

      <rect x="232" y="124" width="154" height="20" rx="4" fill="#171B22" stroke="#2D3542" />
      <rect x="240" y="132" width="56" height="4" rx="2" fill="#FFFFFF" />
      <rect x="342" y="131" width="34" height="6" rx="3" fill="#2EC4B6" />

      <rect x="232" y="152" width="154" height="20" rx="4" fill="#171B22" stroke="#2D3542" />
      <rect x="240" y="160" width="42" height="4" rx="2" fill="#FFFFFF" />
      <rect x="342" y="159" width="34" height="6" rx="3" fill="#CBF3F0" />
    </svg>
  );
}

function FieldPulseSchematic() {
  return (
    <svg
      viewBox="0 0 420 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="project-preview__svg"
      aria-hidden="true"
    >
      <rect width="420" height="220" rx="10" fill="#E9FAF8" />
      {/* Mobile offline client */}
      <rect x="28" y="24" width="118" height="172" rx="14" fill="#0E1116" />
      <rect x="38" y="40" width="98" height="140" rx="8" fill="#FFFFFF" />
      <rect x="48" y="52" width="52" height="10" rx="5" fill="#CBF3F0" />
      <rect x="48" y="72" width="78" height="14" rx="3" fill="#F7FAFA" stroke="#D5DCE4" />
      <circle cx="57" cy="79" r="3" fill="#2EC4B6" />
      <rect x="48" y="94" width="78" height="14" rx="3" fill="#F7FAFA" stroke="#D5DCE4" />
      <circle cx="57" cy="101" r="3" fill="#2EC4B6" />
      <rect x="48" y="116" width="78" height="14" rx="3" fill="#F7FAFA" stroke="#D5DCE4" />
      <circle cx="57" cy="123" r="3" fill="#FF9F1C" />
      <rect x="48" y="144" width="78" height="22" rx="6" fill="#0E1116" />

      {/* Sync bridge */}
      <path d="M158 110H222" stroke="#2EC4B6" strokeWidth="2.5" strokeDasharray="5 5" />
      <circle cx="190" cy="110" r="14" fill="#FFFFFF" stroke="#2EC4B6" strokeWidth="2" />
      <path d="M185 110L189 114L196 106" stroke="#0B6E65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Web dispatch dashboard */}
      <rect x="234" y="34" width="160" height="152" rx="10" fill="#FFFFFF" stroke="#C4D4D2" />
      <rect x="248" y="48" width="132" height="18" rx="4" fill="#F7FAFA" />
      <circle cx="258" cy="57" r="3.5" fill="#2EC4B6" />
      <rect x="268" y="54" width="60" height="6" rx="3" fill="#0E1116" />
      <rect x="248" y="76" width="62" height="44" rx="6" fill="#E9FAF8" stroke="#2EC4B6" />
      <rect x="318" y="76" width="62" height="44" rx="6" fill="#FFF4E5" stroke="#FFBF69" />
      <rect x="248" y="130" width="132" height="42" rx="6" fill="#F7FAFA" stroke="#D5DCE4" />
    </svg>
  );
}

function LedgerFlowSchematic() {
  return (
    <svg
      viewBox="0 0 420 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="project-preview__svg"
      aria-hidden="true"
    >
      <rect width="420" height="220" rx="10" fill="#0E1116" />
      {/* Pipeline nodes */}
      <rect x="24" y="74" width="96" height="72" rx="8" fill="#171B22" stroke="#2EC4B6" strokeWidth="1.5" />
      <rect x="36" y="88" width="44" height="8" rx="4" fill="#2EC4B6" />
      <rect x="36" y="106" width="72" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.85" />
      <rect x="36" y="118" width="54" height="6" rx="3" fill="#A9B4C2" fillOpacity="0.6" />

      <path d="M120 110H158" stroke="#FF9F1C" strokeWidth="2.5" />

      <rect x="158" y="64" width="104" height="92" rx="8" fill="#171B22" stroke="#FF9F1C" strokeWidth="1.5" />
      <rect x="172" y="80" width="52" height="8" rx="4" fill="#FF9F1C" />
      <rect x="172" y="100" width="76" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.85" />
      <rect x="172" y="114" width="66" height="6" rx="3" fill="#A9B4C2" fillOpacity="0.6" />
      <rect x="172" y="130" width="44" height="12" rx="6" fill="#CBF3F0" fillOpacity="0.16" />

      <path d="M262 110H300" stroke="#2EC4B6" strokeWidth="2.5" />

      <g>
        <rect x="300" y="42" width="96" height="40" rx="7" fill="#171B22" stroke="rgba(255,255,255,0.22)" />
        <circle cx="316" cy="62" r="5" fill="#2EC4B6" />
        <rect x="328" y="59" width="54" height="6" rx="3" fill="#FFFFFF" />

        <rect x="300" y="90" width="96" height="40" rx="7" fill="#171B22" stroke="rgba(255,255,255,0.22)" />
        <circle cx="316" cy="110" r="5" fill="#FF9F1C" />
        <rect x="328" y="107" width="54" height="6" rx="3" fill="#FFFFFF" />

        <rect x="300" y="138" width="96" height="40" rx="7" fill="#171B22" stroke="rgba(255,255,255,0.22)" />
        <circle cx="316" cy="158" r="5" fill="#CBF3F0" />
        <rect x="328" y="155" width="54" height="6" rx="3" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

function DocuMindSchematic() {
  return (
    <svg
      viewBox="0 0 420 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="project-preview__svg"
      aria-hidden="true"
    >
      <rect width="420" height="220" rx="10" fill="#F7FAFA" />
      {/* Source documents */}
      <rect x="24" y="34" width="110" height="42" rx="6" fill="#FFFFFF" stroke="#D5DCE4" />
      <rect x="36" y="46" width="46" height="6" rx="3" fill="#0E1116" />
      <rect x="36" y="58" width="76" height="5" rx="2.5" fill="#8C96A5" />

      <rect x="24" y="88" width="110" height="42" rx="6" fill="#FFFFFF" stroke="#D5DCE4" />
      <rect x="36" y="100" width="52" height="6" rx="3" fill="#0E1116" />
      <rect x="36" y="112" width="76" height="5" rx="2.5" fill="#8C96A5" />

      <rect x="24" y="142" width="110" height="42" rx="6" fill="#FFFFFF" stroke="#D5DCE4" />
      <rect x="36" y="154" width="42" height="6" rx="3" fill="#0E1116" />
      <rect x="36" y="166" width="76" height="5" rx="2.5" fill="#8C96A5" />

      {/* Retrieval lines */}
      <path d="M134 55C162 55 160 110 186 110" stroke="#2EC4B6" strokeWidth="2" />
      <path d="M134 109H186" stroke="#FF9F1C" strokeWidth="2" />
      <path d="M134 163C162 163 160 110 186 110" stroke="#2EC4B6" strokeWidth="2" />

      {/* Grounded Answer Card */}
      <rect x="186" y="34" width="210" height="150" rx="10" fill="#FFFFFF" stroke="#0E1116" strokeWidth="1.5" />
      <rect x="202" y="50" width="178" height="22" rx="5" fill="#0E1116" />
      <rect x="212" y="58" width="110" height="6" rx="3" fill="#FFFFFF" />
      <rect x="202" y="84" width="178" height="54" rx="6" fill="#E9FAF8" />
      <rect x="212" y="96" width="154" height="6" rx="3" fill="#0E1116" />
      <rect x="212" y="108" width="138" height="6" rx="3" fill="#3A414E" />
      <rect x="212" y="120" width="96" height="6" rx="3" fill="#3A414E" />
      {/* Citation pills */}
      <rect x="202" y="148" width="76" height="18" rx="9" fill="#FFF4E5" stroke="#FF9F1C" />
      <rect x="286" y="148" width="76" height="18" rx="9" fill="#CBF3F0" stroke="#2EC4B6" />
    </svg>
  );
}

function MeridianSchematic() {
  return (
    <svg
      viewBox="0 0 420 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="project-preview__svg"
      aria-hidden="true"
    >
      <rect width="420" height="220" rx="10" fill="#E9FAF8" />
      {/* CWV & Funnel bars */}
      <rect x="24" y="28" width="372" height="164" rx="10" fill="#FFFFFF" stroke="#C4D4D2" />
      <rect x="44" y="48" width="96" height="46" rx="6" fill="#FCE8E6" />
      <rect x="54" y="60" width="36" height="6" rx="3" fill="#C5221F" />
      <rect x="54" y="74" width="60" height="10" rx="3" fill="#0E1116" />

      <path d="M150 71H174" stroke="#0E1116" strokeWidth="2" />

      <rect x="184" y="48" width="192" height="46" rx="6" fill="#CBF3F0" />
      <rect x="196" y="60" width="68" height="6" rx="3" fill="#0B6E65" />
      <rect x="196" y="74" width="132" height="10" rx="3" fill="#0E1116" />

      {/* Conversion funnel steps */}
      <rect x="44" y="112" width="332" height="18" rx="4" fill="#F7FAFA" />
      <rect x="44" y="112" width="290" height="18" rx="4" fill="#2EC4B6" fillOpacity="0.32" />
      <rect x="44" y="138" width="332" height="18" rx="4" fill="#F7FAFA" />
      <rect x="44" y="138" width="220" height="18" rx="4" fill="#FF9F1C" fillOpacity="0.45" />
      <rect x="44" y="164" width="332" height="14" rx="4" fill="#F7FAFA" />
      <rect x="44" y="164" width="156" height="14" rx="4" fill="#0E1116" />
    </svg>
  );
}

const SCHEMATICS = {
  'northstar-commerce-platform': NorthstarSchematic,
  'fieldpulse-operations-app': FieldPulseSchematic,
  'ledgerflow-ops-automation': LedgerFlowSchematic,
  'documind-knowledge-assistant': DocuMindSchematic,
  'meridian-search-conversion': MeridianSchematic,
};

export default function ProjectPreview({ slug, title, className = '' }) {
  const Schematic = SCHEMATICS[slug] || NorthstarSchematic;

  return (
    <div className={`project-preview ${className}`.trim()} aria-label={`${title} architecture diagram`}>
      <Schematic />
    </div>
  );
}
