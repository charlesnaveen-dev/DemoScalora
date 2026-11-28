import { BreakBadge, DiagramCanvas, DiagramNode, DiagramPill } from './DiagramPrimitives';

/* ==========================================================================
   WEB DEVELOPMENT — 4 Problems + Resolved
   ========================================================================== */

export function WebDiagram0() {
  // Visitors leave when homepage fails to explain what you offer
  return (
    <DiagramCanvas label="Visitor journey blocked by unclear homepage messaging">
      {(uid) => (
        <>
          <DiagramNode x={18} y={118} w={92} h={58} title="Visitor" subtitle="Arrives ready" />

          {/* Wireframe cluttered homepage hero block in middle */}
          <g data-diagram-node>
            <rect
              x={160}
              y={52}
              width={168}
              height={166}
              rx="10"
              fill="#151B24"
              stroke="#FF9F1C"
              strokeWidth="1.5"
            />
            <text
              x={244}
              y={74}
              textAnchor="middle"
              fill="#FFBF69"
              fontSize="11.5"
              fontWeight="700"
              className="sd-diagram__label"
            >
              YOUR HOMEPAGE
            </text>
            {/* Crowded 5-bar nav simulation */}
            <rect x={174} y={84} width="24" height="5" rx="2.5" fill="rgba(255,255,255,0.28)" />
            <rect x={204} y={84} width="24" height="5" rx="2.5" fill="rgba(255,255,255,0.28)" />
            <rect x={234} y={84} width="24" height="5" rx="2.5" fill="rgba(255,255,255,0.28)" />
            <rect x={264} y={84} width="24" height="5" rx="2.5" fill="rgba(255,255,255,0.28)" />
            <rect x={294} y={84} width="20" height="5" rx="2.5" fill="rgba(255,255,255,0.28)" />

            {/* Blurred vague headline lines */}
            <rect
              x={176}
              y={108}
              width="136"
              height="34"
              rx="6"
              fill="rgba(255, 159, 28, 0.1)"
              stroke="rgba(255, 159, 28, 0.35)"
            />
            <text
              x={244}
              y={129}
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="11.5"
              fontWeight="600"
              className="sd-diagram__label"
            >
              “Solutions &amp; Synergy”
            </text>
            <rect x={184} y={154} width="120" height="6" rx="3" fill="rgba(255,255,255,0.18)" />
            <rect x={198} y={168} width="92" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
            <text
              x={244}
              y={198}
              textAnchor="middle"
              fill="#FF9F1C"
              fontSize="11.5"
              fontWeight="700"
              className="sd-diagram__label"
            >
              Offer unclear
            </text>
          </g>

          <DiagramNode
            x={380}
            y={182}
            w={102}
            h={54}
            title="Understands"
            subtitle="Goal unreached"
            tone="dim"
            dashed
          />

          <DiagramNode
            x={380}
            y={42}
            w={102}
            h={54}
            title="Closes Tab"
            subtitle="Leaves in seconds"
            tone="amber"
          />

          {/* Visitor -> Homepage */}
          <path
            d="M 110 147 L 154 147"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            pathLength="100"
            strokeDasharray="100"
            markerEnd={`url(#${uid}-arrow-muted)`}
            data-diagram-draw
          />

          {/* Blocked connection to Understood */}
          <path
            d="M 328 192 L 376 205"
            fill="none"
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="1.75"
            strokeDasharray="4 4"
            data-diagram-dash
          />

          {/* Exit arc */}
          <path
            d="M 328 124 C 356 120, 354 76, 376 70"
            fill="none"
            stroke="#FF9F1C"
            strokeWidth="2.2"
            pathLength="100"
            strokeDasharray="100"
            markerEnd={`url(#${uid}-arrow-amber)`}
            data-diagram-draw
          />

          <BreakBadge cx={332} cy={147} symbol="?" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function WebDiagram1() {
  // Desktop -> Tablet -> Mobile showing content breaking on phones
  return (
    <DiagramCanvas label="Desktop, tablet, and phone viewports showing layout overflowing on mobile">
      {(uid) => (
        <>
          {/* Desktop */}
          <g data-diagram-node>
            <rect
              x={20}
              y={54}
              width="148"
              height="112"
              rx="9"
              fill="#151B24"
              stroke="#2EC4B6"
              strokeWidth="1.5"
            />
            <text x={32} y={76} fill="#CBF3F0" fontSize="11.5" fontWeight="700" className="sd-diagram__label">
              DESKTOP
            </text>
            <rect x={32} y={88} width="124" height="10" rx="3" fill="rgba(255,255,255,0.22)" />
            <rect x={32} y={106} width="96" height="8" rx="3" fill="rgba(255,255,255,0.14)" />
            <rect x={32} y={128} width="64" height="20" rx="5" fill="#2EC4B6" fillOpacity="0.25" stroke="#2EC4B6" />
            <text x={64} y={142} textAnchor="middle" fill="#CBF3F0" fontSize="10.5" fontWeight="700" className="sd-diagram__label">
              Fits clean
            </text>
          </g>

          {/* Tablet */}
          <g data-diagram-node>
            <rect
              x={204}
              y={66}
              width="104"
              height="126"
              rx="9"
              fill="#151B24"
              stroke="rgba(255, 191, 105, 0.55)"
              strokeWidth="1.5"
            />
            <text x={216} y={88} fill="#FFBF69" fontSize="11.5" fontWeight="700" className="sd-diagram__label">
              TABLET
            </text>
            <rect x={216} y={100} width="80" height="10" rx="3" fill="rgba(255,255,255,0.22)" />
            <rect x={216} y={118} width="80" height="8" rx="3" fill="rgba(255,255,255,0.14)" />
            <rect x={216} y={142} width="76" height="22" rx="5" fill="rgba(255,191,105,0.16)" stroke="#FFBF69" />
            <text x={254} y={157} textAnchor="middle" fill="#FFBF69" fontSize="10.5" fontWeight="700" className="sd-diagram__label">
              Squeezed
            </text>
          </g>

          {/* Phone with clipped overflow */}
          <g data-diagram-node>
            <rect
              x={354}
              y={44}
              width="98"
              height="182"
              rx="15"
              fill="#12161E"
              stroke="#FF9F1C"
              strokeWidth="1.8"
            />
            <rect x={386} y={54} width="34" height="4" rx="2" fill="rgba(255,255,255,0.25)" />
            <text x={368} y={78} fill="#FFBF69" fontSize="11.5" fontWeight="700" className="sd-diagram__label">
              PHONE
            </text>

            {/* Misaligned overflowing blocks shifting outward past phone right edge */}
            <g data-diagram-shift="14">
              <rect x={366} y={92} width="108" height="18" rx="4" fill="#FFFFFF" fillOpacity="0.88" />
              <rect x={366} y={118} width="114" height="14" rx="4" fill="rgba(255, 159, 28, 0.28)" stroke="#FF9F1C" />
              <rect x={366} y={142} width="96" height="28" rx="6" fill="#FF9F1C" />
              <text x={410} y={160} textAnchor="middle" fill="#0E1116" fontSize="11" fontWeight="700" className="sd-diagram__label">
                Book Call...
              </text>
            </g>

            {/* Clip warning zone line */}
            <line
              x1={452}
              y1={84}
              x2={452}
              y2={182}
              stroke="#FF9F1C"
              strokeWidth="2"
              strokeDasharray="4 3"
              data-diagram-dash
            />
          </g>

          {/* Flow connectors across devices */}
          <path
            d="M 168 118 L 198 118"
            fill="none"
            stroke="#FFBF69"
            strokeWidth="2"
            pathLength="100"
            strokeDasharray="100"
            markerEnd={`url(#${uid}-arrow-gold)`}
            data-diagram-draw
          />
          <path
            d="M 308 128 L 348 128"
            fill="none"
            stroke="#FF9F1C"
            strokeWidth="2"
            pathLength="100"
            strokeDasharray="100"
            markerEnd={`url(#${uid}-arrow-amber)`}
            data-diagram-draw
          />

          <DiagramPill x={324} y={246} w={156} text="Clipped off phone edge" tone="amber" />
          <DiagramPill x={20} y={246} w={148} text="Responsive mismatch" tone="white" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function WebDiagram2() {
  // Visitor-to-contact journey interrupted by hidden contact & excessive form wall
  return (
    <DiagramCanvas label="Enquiry journey blocked by buried details and multi-field obstacle">
      {(uid) => (
        <>
          <DiagramNode x={18} y={118} w={96} h={58} title="Interested" subtitle="Ready to ask" tone="teal" />
          <DiagramNode x={144} y={118} w={86} h={58} title="Site Menu" subtitle="Where next?" />

          {/* Barrier obstacles */}
          <g data-diagram-node>
            <rect x={262} y={54} width="106" height="44" rx="8" fill="#151B24" stroke="rgba(255,255,255,0.2)" />
            <text x={315} y={80} textAnchor="middle" fill="rgba(255,255,255,0.72)" fontSize="11.5" fontWeight="600" className="sd-diagram__label">
              Hidden Contact
            </text>

            <rect x={262} y={114} width="106" height="58" rx="8" fill="rgba(255, 159, 28, 0.14)" stroke="#FF9F1C" strokeWidth="1.5" />
            <text x={315} y={138} textAnchor="middle" fill="#FFBF69" fontSize="12" fontWeight="700" className="sd-diagram__label">
              9-Field Form
            </text>
            <text x={315} y={156} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10.5" className="sd-diagram__sub">
              Too much friction
            </text>

            <rect x={262} y={188} width="106" height="44" rx="8" fill="#151B24" stroke="rgba(255,255,255,0.2)" />
            <text x={315} y={214} textAnchor="middle" fill="rgba(255,255,255,0.72)" fontSize="11.5" fontWeight="600" className="sd-diagram__label">
              No Phone / Email
            </text>
          </g>

          <DiagramNode x={402} y={118} w={82} h={58} title="Enquiry" subtitle="Unreached" tone="dim" dashed />
          <DiagramNode x={144} y={226} w={106} h={46} title="Gives Up" subtitle="Exits early" tone="amber" />

          <path
            d="M 114 147 L 138 147"
            fill="none"
            stroke="#2EC4B6"
            strokeWidth="2"
            pathLength="100"
            strokeDasharray="100"
            markerEnd={`url(#${uid}-arrow-teal)`}
            data-diagram-draw
          />
          <path
            d="M 230 147 L 256 147"
            fill="none"
            stroke="#FF9F1C"
            strokeWidth="2"
            pathLength="100"
            strokeDasharray="100"
            markerEnd={`url(#${uid}-arrow-amber)`}
            data-diagram-draw
          />
          {/* Dotted unreachable gap to Enquiry */}
          <path
            d="M 368 147 L 398 147"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.75"
            strokeDasharray="4 4"
            data-diagram-dash
          />
          {/* Drop-off return arc */}
          <path
            d="M 294 176 C 288 214, 272 246, 255 248"
            fill="none"
            stroke="#FF9F1C"
            strokeWidth="2.1"
            pathLength="100"
            strokeDasharray="100"
            markerEnd={`url(#${uid}-arrow-amber)`}
            data-diagram-draw
          />
          <BreakBadge cx={383} cy={147} symbol="✕" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function WebDiagram3() {
  // Animated loading timeline showing delayed content & visitor abandoning experience
  return (
    <DiagramCanvas label="Loading timeline showing heavy scripts delaying render until visitor abandons">
      {(uid) => (
        <>
          {/* Timeline baseline */}
          <g data-diagram-node>
            <line x1={32} y1={56} x2={468} y2={56} stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
            <text x={32} y={40} fill="rgba(255,255,255,0.7)" fontSize="11.5" fontWeight="700" className="sd-diagram__label">
              0s Request
            </text>
            <text x={228} y={40} textAnchor="middle" fill="#FFBF69" fontSize="11.5" fontWeight="700" className="sd-diagram__label">
              2.0s Patience Limit
            </text>
            <text x={468} y={40} textAnchor="end" fill="#FF9F1C" fontSize="11.5" fontWeight="700" className="sd-diagram__label">
              4.2s Ready
            </text>
            <line x1={228} y1={48} x2={228} y2={252} stroke="#FF9F1C" strokeWidth="1.5" strokeDasharray="5 4" />
          </g>

          {/* Animated active timeline sweep */}
          <path
            d="M 32 56 L 368 56"
            fill="none"
            stroke="#FF9F1C"
            strokeWidth="3.5"
            pathLength="100"
            strokeDasharray="100"
            data-diagram-draw
          />

          {/* Staggered waterfall bars */}
          <g data-diagram-node>
            <text x={32} y={98} fill="rgba(255,255,255,0.75)" fontSize="11.5" fontWeight="600" className="sd-diagram__sub">
              Blank Wait
            </text>
            <rect x={118} y={84} width="128" height="18" rx="4" fill="rgba(255,255,255,0.14)" />

            <text x={32} y={136} fill="rgba(255,255,255,0.75)" fontSize="11.5" fontWeight="600" className="sd-diagram__sub">
              Heavy Images
            </text>
            <rect x={168} y={122} width="224" height="18" rx="4" fill="rgba(255,159,28,0.22)" stroke="#FF9F1C" />

            <text x={32} y={174} fill="rgba(255,255,255,0.75)" fontSize="11.5" fontWeight="600" className="sd-diagram__sub">
              Page Jumps
            </text>
            <rect x={242} y={160} width="174" height="18" rx="4" fill="rgba(255,191,105,0.22)" stroke="#FFBF69" />
          </g>

          {/* Visitor abandonment curve downward after 2s */}
          <path
            d="M 228 206 C 248 214, 254 242, 294 252"
            fill="none"
            stroke="#FF9F1C"
            strokeWidth="2.2"
            pathLength="100"
            strokeDasharray="100"
            markerEnd={`url(#${uid}-arrow-amber)`}
            data-diagram-draw
          />
          <DiagramPill x={298} y={238} w={162} text="Visitor leaves at 2.6s" tone="amber" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function WebResolvedDiagram() {
  return (
    <DiagramCanvas label="Fast clear website connecting visitor straight to enquiry across desktop and mobile" accent="teal">
      {(uid) => (
        <>
          <DiagramNode x={18} y={120} w={88} h={56} title="Visitor" subtitle="Reads in 1s" tone="teal" />
          <DiagramNode x={164} y={56} w={156} h={74} title="Clear Hero" subtitle="Fits Desktop & Mobile" tone="teal" />
          <DiagramNode x={164} y={164} w={156} h={74} title="Instant Speed" subtitle="Zero layout shift" tone="amber" />
          <DiagramNode x={382} y={120} w={100} h={56} title="Enquiry" subtitle="Sent cleanly" tone="teal" />

          <path d="M 106 140 L 158 96" fill="none" stroke="#2EC4B6" strokeWidth="2.1" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <path d="M 106 156 L 158 198" fill="none" stroke="#FF9F1C" strokeWidth="2.1" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />
          <path d="M 320 96 L 376 138" fill="none" stroke="#2EC4B6" strokeWidth="2.1" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <path d="M 320 198 L 376 158" fill="none" stroke="#2EC4B6" strokeWidth="2.1" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />

          <BreakBadge cx={382} cy={88} symbol="✓" tone="teal" />
        </>
      )}
    </DiagramCanvas>
  );
}

/* ==========================================================================
   APPLICATION DEVELOPMENT — 4 Problems + Resolved
   ========================================================================== */

export function AppDiagram0() {
  // Confusing multi-step portal navigation pushing users back to email/calls
  return (
    <DiagramCanvas label="Multi-hop navigation staircase causing user to abandon portal and call support">
      {(uid) => (
        <>
          <DiagramNode x={20} y={48} w={84} h={50} title="Customer" subtitle="Needs invoice" tone="teal" />

          {/* Staircase of buried screens */}
          <DiagramNode x={136} y={48} w={92} h={42} title="1. Account" />
          <DiagramNode x={246} y={84} w={92} h={42} title="2. Billing" />
          <DiagramNode x={136} y={134} w={92} h={42} title="3. Archive" />
          <DiagramNode x={246} y={172} w={106} h={46} title="4. Ticket" tone="amber" />

          <DiagramNode x={392} y={48} w={90} h={50} title="Invoice" subtitle="Expected 1-tap" tone="dim" dashed />
          <DiagramNode x={378} y={224} w={104} h={52} title="Phones Staff" subtitle="Drops portal" tone="amber" />

          <path d="M 104 70 L 130 70" fill="none" stroke="#FFFFFF" strokeWidth="2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-muted)`} data-diagram-draw />
          <path d="M 228 74 L 244 98" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.8" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-muted)`} data-diagram-draw />
          <path d="M 246 116 L 232 146" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.8" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-muted)`} data-diagram-draw />
          <path d="M 228 164 L 244 190" fill="none" stroke="#FF9F1C" strokeWidth="2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />
          <path d="M 352 204 C 378 206, 392 212, 412 220" fill="none" stroke="#FF9F1C" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />

          <path d="M 232 68 L 386 68" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeDasharray="4 4" data-diagram-dash />
          <BreakBadge cx={312} cy={68} symbol="✕" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function AppDiagram1() {
  // Desktop table compressed onto phone making tap targets tiny and clipped
  return (
    <DiagramCanvas label="Wide desktop grid forced into narrow phone screen creating awkward tap targets">
      {(uid) => (
        <>
          <g data-diagram-node>
            <rect x={22} y={70} width="166" height="132" rx="10" fill="#151B24" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
            <text x={105} y={94} textAnchor="middle" fill="#CBF3F0" fontSize="11.5" fontWeight="700" className="sd-diagram__label">
              WIDE DESKTOP TABLE
            </text>
            <rect x={36} y={108} width="32" height="18" rx="3" fill="rgba(255,255,255,0.16)" />
            <rect x={72} y={108} width="32" height="18" rx="3" fill="rgba(255,255,255,0.16)" />
            <rect x={108} y={108} width="32" height="18" rx="3" fill="rgba(255,255,255,0.16)" />
            <rect x={144} y={108} width="32" height="18" rx="3" fill="rgba(255,255,255,0.16)" />
            <rect x={36} y={136} width="140" height="14" rx="3" fill="rgba(255,255,255,0.1)" />
            <rect x={36} y={158} width="140" height="14" rx="3" fill="rgba(255,255,255,0.1)" />
          </g>

          {/* Converging squeeze funnels */}
          <path d="M 194 82 L 284 114" fill="none" stroke="#FFBF69" strokeWidth="2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-gold)`} data-diagram-draw />
          <path d="M 194 190 L 284 158" fill="none" stroke="#FF9F1C" strokeWidth="2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />

          {/* Phone outline with cramped controls */}
          <g data-diagram-node>
            <rect x={294} y={46} width="112" height="198" rx="16" fill="#12161E" stroke="#FF9F1C" strokeWidth="1.8" />
            <text x={350} y={76} textAnchor="middle" fill="#FFBF69" fontSize="11" fontWeight="700" className="sd-diagram__label">
              SHRUNK APP
            </text>
            <rect x={306} y={94} width="20" height="12" rx="2" fill="rgba(255,255,255,0.22)" />
            <rect x={329} y={94} width="20" height="12" rx="2" fill="rgba(255,255,255,0.22)" />
            <rect x={352} y={94} width="20" height="12" rx="2" fill="rgba(255,255,255,0.22)" />
            <rect x={375} y={94} width="22" height="12" rx="2" fill="#FF9F1C" />

            {/* Tap thumb circle missing tiny button */}
            <circle cx={386} cy={128} r="18" fill="rgba(255,159,28,0.16)" stroke="#FF9F1C" strokeDasharray="3 3" data-diagram-state />
            <circle cx={386} cy={128} r="4" fill="#FF9F1C" data-diagram-state />
            <text x={350} y={176} textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="11" fontWeight="600" className="sd-diagram__sub">
              Too small to tap
            </text>
            <text x={350} y={208} textAnchor="middle" fill="#FF9F1C" fontSize="11" fontWeight="700" className="sd-diagram__label">
              ← Scroll →
            </text>
          </g>

          <DiagramPill x={24} y={248} w={174} text="4 columns squeezed" tone="white" />
          <DiagramPill x={290} y={258} w={144} text="Mis-taps on mobile" tone="amber" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function AppDiagram2() {
  // Entered details lost on patchy signal mid-submission
  return (
    <DiagramCanvas label="Form save request interrupted by connection drop wiping local entries">
      {(uid) => (
        <>
          {/* Field checklist box */}
          <g data-diagram-node>
            <rect x={22} y={62} width="154" height="162" rx="10" fill="#151B24" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
            <text x={38} y={88} fill="#CBF3F0" fontSize="11.5" fontWeight="700" className="sd-diagram__label">
              FIELD CHECKLIST
            </text>
            <rect x={38} y={102} width="122" height="24" rx="5" fill="rgba(46,196,182,0.15)" stroke="#2EC4B6" />
            <text x={48} y={118} fill="#CBF3F0" fontSize="11" fontWeight="600" className="sd-diagram__sub">
              ✓ Job Details
            </text>
            <rect x={38} y={136} width="122" height="24" rx="5" fill="rgba(46,196,182,0.15)" stroke="#2EC4B6" />
            <text x={48} y={152} fill="#CBF3F0" fontSize="11" fontWeight="600" className="sd-diagram__sub">
              ✓ Site Notes
            </text>
            <rect x={38} y={172} width="122" height="34" rx="6" fill="rgba(255,159,28,0.18)" stroke="#FF9F1C" data-diagram-state />
            <text x={99} y={193} textAnchor="middle" fill="#FFBF69" fontSize="11" fontWeight="700" className="sd-diagram__label">
              Data Wiped ✕
            </text>
          </g>

          <DiagramNode x={352} y={84} w={124} h={64} title="Server Save" subtitle="Never reached" tone="dim" dashed />

          {/* Broken arc */}
          <path d="M 176 116 L 246 116" fill="none" stroke="#2EC4B6" strokeWidth="2.2" pathLength="100" strokeDasharray="100" data-diagram-draw />
          <path d="M 278 116 L 346 116" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeDasharray="5 5" data-diagram-dash />

          {/* Error reset loop back */}
          <path d="M 262 132 C 262 212, 214 234, 176 198" fill="none" stroke="#FF9F1C" strokeWidth="2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />

          <BreakBadge cx={262} cy={116} symbol="!" />
          <DiagramPill x={200} y={56} w={128} text="Patchy signal" tone="amber" />
          <DiagramPill x={286} y={226} w={184} text="Progress lost mid-visit" tone="amber" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function AppDiagram3() {
  // Web and mobile apps showing conflicting statuses
  return (
    <DiagramCanvas label="Shared client order splitting into conflicting statuses on web and mobile">
      {(uid) => (
        <>
          <DiagramNode x={22} y={114} w={118} h={66} title="Order #2049" subtitle="Live transaction" tone="neutral" />

          <DiagramNode x={288} y={46} w={188} h={68} title="Office Web Portal" subtitle="Status: Approved" tone="teal" />
          <DiagramNode x={288} y={178} w={188} h={68} title="Mobile App" subtitle="Status: Waiting Review" tone="amber" />

          <path d="M 140 130 C 194 128, 224 84, 282 82" fill="none" stroke="#2EC4B6" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <path d="M 140 162 C 194 166, 224 210, 282 212" fill="none" stroke="#FF9F1C" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />

          {/* Broken vertical sync line between the two apps */}
          <line x1={382} y1={116} x2={382} y2={176} stroke="#FF9F1C" strokeWidth="2" strokeDasharray="4 4" data-diagram-dash />
          <BreakBadge cx={382} cy={146} symbol="≠" />

          <DiagramPill x={18} y={240} w={196} text="Manual phone check needed" tone="white" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function AppResolvedDiagram() {
  return (
    <DiagramCanvas label="Offline-safe mobile app synced smoothly with web portal via one shared state" accent="teal">
      {(uid) => (
        <>
          <DiagramNode x={24} y={114} w={122} h={66} title="Local Queue" subtitle="Saves without signal" tone="teal" />
          <DiagramNode x={198} y={114} w={106} h={66} title="Sync API" subtitle="One source" tone="amber" />
          <DiagramNode x={356} y={46} w={124} h={62} title="Web Portal" subtitle="#2049 Approved" tone="teal" />
          <DiagramNode x={356} y={182} w={124} h={62} title="Mobile App" subtitle="#2049 Approved" tone="teal" />

          <path d="M 146 147 L 192 147" fill="none" stroke="#2EC4B6" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <path d="M 304 134 L 350 86" fill="none" stroke="#2EC4B6" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <path d="M 304 160 L 350 206" fill="none" stroke="#2EC4B6" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <line x1={418} y1={110} x2={418} y2={180} stroke="#2EC4B6" strokeWidth="2" data-diagram-draw pathLength="100" strokeDasharray="100" />
          <BreakBadge cx={418} cy={145} symbol="✓" tone="teal" />
        </>
      )}
    </DiagramCanvas>
  );
}
