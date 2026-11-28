import { BreakBadge, DiagramCanvas, DiagramNode, DiagramPill } from './DiagramPrimitives';

/* ==========================================================================
   SOFTWARE DEVELOPMENT — 4 Problems + Resolved
   ========================================================================== */

export function SoftwareDiagram0() {
  // Running core operations on shared spreadsheets invites costly mistakes
  return (
    <DiagramCanvas label="Master spreadsheet fracturing into conflicting edits and broken formula errors">
      {(uid) => (
        <>
          <DiagramNode x={20} y={114} w={118} h={64} title="Master Sheet" subtitle="Quotes & Stock" tone="teal" />

          {/* Split conflicting file copies */}
          <DiagramNode x={200} y={40} w={132} h={52} title="Copy_v3_FINAL" subtitle="John edited Price" />
          <DiagramNode x={200} y={120} w={132} h={52} title="Operations_Tue" subtitle="#REF! Formula error" tone="amber" />
          <DiagramNode x={200} y={200} w={132} h={52} title="Old_Local_File" subtitle="Outdated numbers" tone="dim" />

          <DiagramNode x={378} y={114} w={104} h={64} title="Quote Sent" subtitle="Wrong figures" tone="amber" />

          <path d="M 138 132 L 194 72" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-muted)`} data-diagram-draw />
          <path d="M 138 146 L 194 146" fill="none" stroke="#FF9F1C" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />
          <path d="M 138 160 L 194 220" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.8" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-muted)`} data-diagram-draw />

          <path d="M 332 146 L 372 146" fill="none" stroke="#FF9F1C" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />
          <BreakBadge cx={352} cy={146} symbol="!" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function SoftwareDiagram1() {
  // Off-the-shelf software makes teams work around screens they never use
  return (
    <DiagramCanvas label="Oversized generic software ring crowding out core daily work and forcing side notes">
      {(uid) => (
        <>
          {/* Outer suite boundary */}
          <g data-diagram-node>
            <rect x={24} y={34} width="320" height="232" rx="14" fill="#121720" stroke="rgba(255,255,255,0.22)" strokeDasharray="6 4" />
            <text x={42} y={58} fill="rgba(255,255,255,0.55)" fontSize="11" fontWeight="700" className="sd-diagram__label">
              GENERIC SUITE BOUNDARY
            </text>
          </g>

          {/* Unused clutter blocks crowding around */}
          <DiagramNode x={40} y={76} w={86} h={40} title="Wiki" tone="dim" />
          <DiagramNode x={140} y={76} w={86} h={40} title="HR Portal" tone="dim" />
          <DiagramNode x={240} y={76} w={86} h={40} title="Surveys" tone="dim" />
          <DiagramNode x={40} y={204} w={86} h={40} title="Assets" tone="dim" />
          <DiagramNode x={240} y={204} w={86} h={40} title="Forum" tone="dim" />

          {/* Tiny squeezed needed task in center */}
          <DiagramNode x={128} y={136} w={112} h={52} title="Your Core Job" subtitle="Pricing squeezed" tone="amber" />

          {/* Outside workaround */}
          <DiagramNode x={374} y={128} w={108} h={68} title="Side Notes" subtitle="Manual workarounds" tone="amber" />

          <path d="M 240 162 L 368 162" fill="none" stroke="#FF9F1C" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />
          <DiagramPill x={136} y={210} w={94} text="Unused tabs" tone="white" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function SoftwareDiagram2() {
  // Separate department tools leave teams re-typing the same records
  return (
    <DiagramCanvas label="Disconnected sales, jobs, and accounts islands requiring slow manual re-typing">
      {(uid) => (
        <>
          <DiagramNode x={20} y={126} w={118} h={74} title="Sales CRM" subtitle="Quote: $6,400" tone="teal" />
          <DiagramNode x={190} y={126} w={118} h={74} title="Job Sheet" subtitle="Quote: $5,900" tone="amber" />
          <DiagramNode x={360} y={126} w={120} h={74} title="Accounts" subtitle="Pending re-entry" tone="dim" dashed />

          {/* Broken direct horizontal bridges */}
          <line x1={142} y1={163} x2={186} y2={163} stroke="#FF9F1C" strokeWidth="2" strokeDasharray="4 4" data-diagram-dash />
          <line x1={312} y1={163} x2={356} y2={163} stroke="#FF9F1C" strokeWidth="2" strokeDasharray="4 4" data-diagram-dash />

          {/* Slow overhead manual re-typing arcs */}
          <path d="M 79 124 C 94 56, 234 56, 249 120" fill="none" stroke="#FFBF69" strokeWidth="2.1" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-gold)`} data-diagram-draw />
          <path d="M 255 124 C 272 56, 404 56, 420 120" fill="none" stroke="#FF9F1C" strokeWidth="2.1" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />

          <DiagramPill x={110} y={42} w={106} text="Manual re-type" tone="white" />
          <DiagramPill x={286} y={42} w={106} text="Manual re-type" tone="amber" />
          <BreakBadge cx={164} cy={163} symbol="✕" />
          <BreakBadge cx={334} cy={163} symbol="≠" />
          <DiagramPill x={148} y={230} w={204} text="Mismatched numbers across tools" tone="amber" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function SoftwareDiagram3() {
  // Without one live overview, problems only surface after delays happen
  return (
    <DiagramCanvas label="Buried approvals inside silos leaving top live overview blind until late delay notice">
      {(uid) => (
        <>
          {/* Empty live overview radar at top */}
          <g data-diagram-node>
            <rect x={140} y={32} width="220" height="58" rx="10" fill="#131822" stroke="rgba(255,255,255,0.22)" strokeDasharray="5 4" />
            <text x={250} y={56} textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="12" fontWeight="700" className="sd-diagram__label">
              LIVE OVERVIEW
            </text>
            <text x={250} y={76} textAnchor="middle" fill="rgba(255,255,255,0.42)" fontSize="11" className="sd-diagram__sub">
              No live visibility across jobs
            </text>
          </g>

          {/* Horizontal veil line */}
          <line x1={24} y1={116} x2={476} y2={116} stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" strokeDasharray="4 4" />

          {/* Buried silos below */}
          <DiagramNode x={26} y={142} w={120} h={62} title="Email Threads" subtitle="Buried approvals" tone="dim" />
          <DiagramNode x={188} y={142} w={120} h={62} title="Local Folders" subtitle="Missing status" tone="dim" />
          <DiagramNode x={354} y={142} w={126} h={62} title="Late Escalation" subtitle="Notice after delay" tone="amber" />

          <path d="M 146 173 L 184 173" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.8" strokeDasharray="4 4" data-diagram-dash />
          <path d="M 308 173 L 348 173" fill="none" stroke="#FF9F1C" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />

          {/* Delayed surface signal from last node up */}
          <path d="M 417 140 L 366 64" fill="none" stroke="#FF9F1C" strokeWidth="2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />
          <DiagramPill x={156} y={232} w={188} text="Surfaces only after delay" tone="amber" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function SoftwareResolvedDiagram() {
  return (
    <DiagramCanvas label="Unified custom software core linking quoting, scheduling, approvals, and billing live" accent="teal">
      {(uid) => (
        <>
          <DiagramNode x={188} y={114} w={124} h={72} title="Core System" subtitle="Single Source of Truth" tone="teal" />

          <DiagramNode x={22} y={40} w={108} h={52} title="Quoting" subtitle="Custom pricing" />
          <DiagramNode x={22} y={208} w={108} h={52} title="Scheduling" subtitle="Live calendar" />
          <DiagramNode x={370} y={40} w={108} h={52} title="Approvals" subtitle="Instant roles" />
          <DiagramNode x={370} y={208} w={108} h={52} title="Billing" subtitle="Synced ledger" tone="amber" />

          <path d="M 130 74 L 184 132" fill="none" stroke="#2EC4B6" strokeWidth="2.1" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <path d="M 130 226 L 184 168" fill="none" stroke="#2EC4B6" strokeWidth="2.1" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <path d="M 312 132 L 364 74" fill="none" stroke="#2EC4B6" strokeWidth="2.1" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <path d="M 312 168 L 364 226" fill="none" stroke="#FF9F1C" strokeWidth="2.1" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />
          <BreakBadge cx={250} cy={46} symbol="✓" tone="teal" />
        </>
      )}
    </DiagramCanvas>
  );
}

/* ==========================================================================
   BUSINESS AUTOMATION — 4 Problems + Resolved
   ========================================================================== */

export function AutomationDiagram0() {
  // Staff waste hours copying identical details across four apps
  return (
    <DiagramCanvas label="Four sequential apps requiring manual copy-paste relays at every gap">
      {(uid) => (
        <>
          <DiagramNode x={16} y={136} w={92} h={58} title="1. Inbox" subtitle="Client arrives" tone="teal" />
          <DiagramNode x={138} y={136} w={92} h={58} title="2. Sheet" subtitle="+12m copy" />
          <DiagramNode x={260} y={136} w={92} h={58} title="3. CRM" subtitle="+10m entry" tone="amber" />
          <DiagramNode x={382} y={136} w={102} h={58} title="4. Invoice" subtitle="Typo risk" tone="amber" />

          {/* Manual copy-paste overhead hops */}
          <path d="M 62 132 C 80 76, 166 76, 184 130" fill="none" stroke="#FFBF69" strokeWidth="2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-gold)`} data-diagram-draw />
          <path d="M 184 132 C 202 76, 288 76, 306 130" fill="none" stroke="#FF9F1C" strokeWidth="2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />
          <path d="M 306 132 C 324 76, 415 76, 433 130" fill="none" stroke="#FF9F1C" strokeWidth="2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />

          <DiagramPill x={78} y={52} w={92} text="Ctrl+C / V" tone="white" />
          <DiagramPill x={200} y={52} w={92} text="Ctrl+C / V" tone="white" />
          <DiagramPill x={324} y={52} w={92} text="Ctrl+C / V" tone="amber" />

          <line x1={112} y1={165} x2={134} y2={165} stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1={234} y1={165} x2={256} y2={165} stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1={356} y1={165} x2={378} y2={165} stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeDasharray="3 3" />

          <DiagramPill x={148} y={228} w={204} text="Slow manual relay & typos" tone="amber" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function AutomationDiagram1() {
  // Fresh enquiries cool down when nobody picks them up in time
  return (
    <DiagramCanvas label="Enquiry interest cooling over hours waiting in an unassigned inbox while competitors respond">
      {(uid) => (
        <>
          <DiagramNode x={20} y={66} w={110} h={58} title="New Lead" subtitle="High intent now" tone="amber" />

          {/* Cooling inbox track */}
          <g data-diagram-node>
            <rect x={170} y={66} width="308" height="58" rx="10" fill="#141923" stroke="rgba(255,255,255,0.22)" />
            <text x={186} y={90} fill="#FFBF69" fontSize="11.5" fontWeight="700" className="sd-diagram__label">
              UNASSIGNED SHARED INBOX
            </text>
            {/* Heat decay bar */}
            <rect x={186} y={102} width="276" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
            <rect
              x={186}
              y={102}
              width="276"
              height="8"
              rx="4"
              fill="#FF9F1C"
              fillOpacity="0.85"
              data-diagram-scale-x
            />
          </g>

          <g data-diagram-node>
            <text x={196} y={148} fill="#FF9F1C" fontSize="11.5" fontWeight="700" className="sd-diagram__label">
              5 min (Warm)
            </text>
            <text x={324} y={148} textAnchor="middle" fill="rgba(255,255,255,0.58)" fontSize="11.5" className="sd-diagram__sub">
              4 hrs (Quiet)
            </text>
            <text x={456} y={148} textAnchor="end" fill="rgba(255,255,255,0.4)" fontSize="11.5" className="sd-diagram__sub">
              24 hrs (Cold)
            </text>
          </g>

          {/* Fast competitor response stealing bottom path */}
          <DiagramNode x={170} y={196} w={138} h={56} title="Instant Competitor" subtitle="Auto reply in 2m" tone="teal" />
          <DiagramNode x={356} y={196} w={122} h={56} title="Lead Wins" subtitle="Books elsewhere" tone="dim" />

          <path d="M 130 95 L 164 95" fill="none" stroke="#FF9F1C" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />
          <path d="M 75 126 C 75 204, 114 224, 164 224" fill="none" stroke="#2EC4B6" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <path d="M 308 224 L 350 224" fill="none" stroke="#2EC4B6" strokeWidth="2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
        </>
      )}
    </DiagramCanvas>
  );
}

export function AutomationDiagram2() {
  // Important client steps get missed when handoffs rely on memory
  return (
    <DiagramCanvas label="Client onboarding sequence skipping welcome email and invoice between contract and kickoff">
      {(uid) => (
        <>
          <DiagramNode x={22} y={114} w={94} h={58} title="1. Signed" subtitle="Deal closed" tone="teal" />
          <DiagramNode x={148} y={114} w={98} h={58} title="2. Welcome" subtitle="Forgotten" tone="amber" dashed />
          <DiagramNode x={278} y={114} w={98} h={58} title="3. Deposit" subtitle="Missed" tone="amber" dashed />
          <DiagramNode x={402} y={114} w={80} h={58} title="4. Start" subtitle="Stalled" tone="dim" dashed />

          {/* Memory gap detour skipping middle steps */}
          <path d="M 69 112 C 122 44, 344 44, 422 108" fill="none" stroke="rgba(255,191,105,0.55)" strokeWidth="2" strokeDasharray="5 5" data-diagram-dash />
          <path d="M 116 143 L 142 143" fill="none" stroke="#FF9F1C" strokeWidth="2" pathLength="100" strokeDasharray="100" data-diagram-draw />

          <BreakBadge cx={197} cy={190} symbol="✕" />
          <BreakBadge cx={327} cy={190} symbol="✕" />

          <DiagramPill x={156} y={42} w={188} text="Relying on manual memory" tone="white" />
          <DiagramPill x={136} y={232} w={228} text="Client waiting after signing" tone="amber" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function AutomationDiagram3() {
  // Patchwork automations fail quietly without warning your team
  return (
    <DiagramCanvas label="Background sync pipe snapping silently dropping leads while alert bell stays off">
      {(uid) => (
        <>
          <DiagramNode x={20} y={116} w={104} h={58} title="Web Form" subtitle="Lead submitted" tone="teal" />
          <DiagramNode x={170} y={116} w={106} h={58} title="Zap / Script" subtitle="Timeout break" tone="amber" />
          <DiagramNode x={366} y={116} w={114} h={58} title="CRM Deal" subtitle="Never arrived" tone="dim" dashed />

          {/* Dropped payloads falling into black hole tray below */}
          <DiagramNode x={170} y={214} w={142} h={52} title="3 Days Lost" subtitle="Orders quietly dropped" tone="amber" />

          {/* Silent alert monitor at top right */}
          <DiagramNode x={356} y={32} w={124} h={50} title="Team Alert: OFF" subtitle="Zero notification" tone="dim" />

          <path d="M 124 145 L 164 145" fill="none" stroke="#2EC4B6" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <path d="M 276 145 L 360 145" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeDasharray="4 4" data-diagram-dash />
          <path d="M 223 174 L 223 208" fill="none" stroke="#FF9F1C" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />

          <BreakBadge cx={318} cy={145} symbol="✕" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function AutomationResolvedDiagram() {
  return (
    <DiagramCanvas label="Connected guarded automation routing verified leads across CRM, onboarding, billing, and alerts" accent="teal">
      {(uid) => (
        <>
          <DiagramNode x={20} y={116} w={110} h={62} title="Verified Trigger" subtitle="Valid input" tone="teal" />
          <DiagramNode x={176} y={116} w={106} h={62} title="Relay Engine" subtitle="Auto retries" tone="amber" />

          <DiagramNode x={346} y={40} w={132} h={48} title="CRM + Owner" subtitle="Assigned in 2s" tone="teal" />
          <DiagramNode x={346} y={122} w={132} h={48} title="Onboarding" subtitle="Email + Folder" tone="teal" />
          <DiagramNode x={346} y={204} w={132} h={48} title="Live Alerts" subtitle="Team notified" tone="teal" />

          <path d="M 130 147 L 170 147" fill="none" stroke="#2EC4B6" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <path d="M 282 132 L 340 70" fill="none" stroke="#2EC4B6" strokeWidth="2.1" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <path d="M 282 147 L 340 147" fill="none" stroke="#2EC4B6" strokeWidth="2.1" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <path d="M 282 162 L 340 222" fill="none" stroke="#FF9F1C" strokeWidth="2.1" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />
          <BreakBadge cx={176} cy={92} symbol="✓" tone="teal" />
        </>
      )}
    </DiagramCanvas>
  );
}
