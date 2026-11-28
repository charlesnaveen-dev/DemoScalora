import { BreakBadge, DiagramCanvas, DiagramNode, DiagramPill } from './DiagramPrimitives';

/* ==========================================================================
   AI SOLUTIONS — 4 Problems + Resolved
   ========================================================================== */

export function AiDiagram0() {
  // Routine questions consume hours your team needs for real client care
  return (
    <DiagramCanvas label="Repeated FAQ requests queuing ahead and blocking complex client enquiries">
      {(uid) => (
        <>
          {/* Incoming stacked repetitive bubbles */}
          <DiagramNode x={20} y={40} w={122} h={42} title="“Opening hours?”" />
          <DiagramNode x={20} y={96} w={122} h={42} title="“Standard price?”" />
          <DiagramNode x={20} y={152} w={122} h={42} title="“Upload link?”" />
          <DiagramNode x={20} y={208} w={122} h={46} title="Urgent Client" subtitle="Needs senior help" tone="amber" />

          {/* Funnel bottleneck */}
          <DiagramNode x={222} y={114} w={116} h={66} title="Support Queue" subtitle="Answered by hand" tone="amber" />
          <DiagramNode x={386} y={114} w={96} h={66} title="Deep Care" subtitle="Delayed response" tone="dim" dashed />

          <path d="M 142 62 L 216 130" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-muted)`} data-diagram-draw />
          <path d="M 142 118 L 216 142" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-muted)`} data-diagram-draw />
          <path d="M 142 173 L 216 154" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-muted)`} data-diagram-draw />
          <path d="M 142 230 L 216 168" fill="none" stroke="#FF9F1C" strokeWidth="2.4" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />

          <path d="M 338 147 L 380 147" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="2" strokeDasharray="4 4" data-diagram-dash />
          <BreakBadge cx={360} cy={147} symbol="!" />
          <DiagramPill x={242} y={232} w={218} text="Urgent tickets stuck behind FAQs" tone="amber" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function AiDiagram1() {
  // Staff lose time searching folders, PDFs, and old messages for rules
  return (
    <DiagramCanvas label="Staff search scattering across folders, outdated PDFs, and old chats without a verified rule">
      {(uid) => (
        <>
          <DiagramNode x={24} y={116} w={116} h={64} title="Staff Query" subtitle="“Refund policy?”" tone="teal" />

          <DiagramNode x={232} y={34} w={122} h={46} title="Policy_v1_OLD.pdf" tone="dim" />
          <DiagramNode x={232} y={98} w={122} h={46} title="Old Slack Chat" tone="dim" />
          <DiagramNode x={232} y={162} w={122} h={46} title="Shared_Draft.doc" tone="amber" />
          <DiagramNode x={232} y={224} w={122} h={46} title="Interrupt Manager" tone="amber" />

          <DiagramNode x={392} y={116} w={92} h={64} title="Conflict" subtitle="Which rule?" tone="amber" />

          <path d="M 140 134 L 226 60" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-muted)`} data-diagram-draw />
          <path d="M 140 144 L 226 122" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-muted)`} data-diagram-draw />
          <path d="M 140 156 L 226 184" fill="none" stroke="#FFBF69" strokeWidth="1.9" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-gold)`} data-diagram-draw />
          <path d="M 140 168 L 226 244" fill="none" stroke="#FF9F1C" strokeWidth="2.1" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />

          <path d="M 354 182 L 390 156" fill="none" stroke="#FF9F1C" strokeWidth="2" strokeDasharray="4 4" data-diagram-dash />
          <BreakBadge cx={392} cy={92} symbol="?" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function AiDiagram2() {
  // Pulling details from incoming forms and vendor PDFs creates backlogs
  return (
    <DiagramCanvas label="Incoming PDFs and attachments piling up ahead of manual line-by-line entry">
      {(uid) => (
        <>
          {/* Incoming doc pile */}
          <DiagramNode x={18} y={54} w={126} h={48} title="Vendor_Quote.pdf" subtitle="18 line items" />
          <DiagramNode x={18} y={118} w={126} h={48} title="Email Attachment" subtitle="Unstructured text" tone="amber" />
          <DiagramNode x={18} y={182} w={126} h={48} title="Intake PDF" subtitle="Scanned tables" />

          <DiagramNode x={200} y={114} w={118} h={64} title="Manual Typing" subtitle="Line-by-line lag" tone="amber" />

          {/* Clean structured DB waiting on right */}
          <g data-diagram-node>
            <rect x={368} y={84} width="114" height="126" rx="10" fill="#141923" stroke="rgba(255,255,255,0.22)" />
            <text x={425} y={108} textAnchor="middle" fill="#CBF3F0" fontSize="11.5" fontWeight="700" className="sd-diagram__label">
              SYSTEM FIELDS
            </text>
            <rect x={382} y={122} width="86" height="16" rx="3" fill="rgba(46,196,182,0.18)" stroke="#2EC4B6" />
            <rect x={382} y={146} width="86" height="16" rx="3" fill="rgba(255,255,255,0.08)" />
            <rect x={382} y={170} width="86" height="16" rx="3" fill="rgba(255,255,255,0.08)" />
          </g>

          <path d="M 144 82 L 194 130" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.9" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-muted)`} data-diagram-draw />
          <path d="M 144 142 L 194 146" fill="none" stroke="#FF9F1C" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />
          <path d="M 144 206 L 194 162" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.9" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-muted)`} data-diagram-draw />

          <path d="M 318 146 L 362 146" fill="none" stroke="#FFBF69" strokeWidth="1.8" strokeDasharray="4 4" data-diagram-dash />
          <DiagramPill x={176} y={236} w={216} text="Quoting stalls in intake queue" tone="amber" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function AiDiagram3() {
  // Generic chatbots make confident guesses outside your real policies
  return (
    <DiagramCanvas label="Generic chatbot disconnected from real company rules making an unverified guess">
      {(uid) => (
        <>
          <DiagramNode x={20} y={66} w={116} h={60} title="Customer Asks" subtitle="“Late refund?”" tone="teal" />
          <DiagramNode x={188} y={66} w={122} h={60} title="Generic Bot" subtitle="Unchecked guess" tone="amber" />
          <DiagramNode x={358} y={66} w={124} h={60} title="Confident Error" subtitle="Wrong promise" tone="amber" />

          {/* Wall separating rules below */}
          <line x1={140} y1={164} x2={360} y2={164} stroke="#FF9F1C" strokeWidth="1.8" strokeDasharray="5 4" data-diagram-dash />

          <DiagramNode x={174} y={196} w={152} h={58} title="Your Real Policies" subtitle="Not connected" tone="dim" dashed />

          <path d="M 136 96 L 182 96" fill="none" stroke="#2EC4B6" strokeWidth="2.1" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <path d="M 310 96 L 352 96" fill="none" stroke="#FF9F1C" strokeWidth="2.3" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />
          <BreakBadge cx={250} cy={164} symbol="✕" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function AiResolvedDiagram() {
  return (
    <DiagramCanvas label="Grounded AI workspace citing verified business documents with clean human review routing" accent="teal">
      {(uid) => (
        <>
          <DiagramNode x={20} y={62} w={106} h={58} title="Enquiry" subtitle="Natural request" tone="teal" />
          <DiagramNode x={182} y={62} w={124} h={58} title="Grounded AI" subtitle="Schema Guarded" tone="teal" />
          <DiagramNode x={182} y={188} w={124} h={58} title="Approved Docs" subtitle="Cited source facts" tone="amber" />

          <DiagramNode x={364} y={42} w={116} h={54} title="Verified Reply" subtitle="Includes source" tone="teal" />
          <DiagramNode x={364} y={168} w={116} h={54} title="Human Review" subtitle="Edge-case handoff" tone="amber" />

          <path d="M 126 91 L 176 91" fill="none" stroke="#2EC4B6" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <path d="M 244 184 L 244 126" fill="none" stroke="#FF9F1C" strokeWidth="2.1" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />
          <path d="M 306 82 L 358 70" fill="none" stroke="#2EC4B6" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <path d="M 306 106 L 358 190" fill="none" stroke="#FFBF69" strokeWidth="2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-gold)`} data-diagram-draw />
          <BreakBadge cx={322} cy={46} symbol="✓" tone="teal" />
        </>
      )}
    </DiagramCanvas>
  );
}

/* ==========================================================================
   DIGITAL GROWTH — 4 Problems + Resolved
   ========================================================================== */

export function GrowthDiagram0() {
  // Buyers search for what you do and find competitors first
  return (
    <DiagramCanvas label="Buyer search intent flowing to top-ranked competitors above visibility cutoff leaving your site buried">
      {(uid) => (
        <>
          <DiagramNode x={18} y={114} w={104} h={64} title="Buyer Search" subtitle="Ready to buy" tone="teal" />

          {/* Ranked ladder on right */}
          <DiagramNode x={236} y={32} w={240} h={48} title="#1 Competitor" subtitle="Clicks captured first" tone="teal" />
          <DiagramNode x={236} y={96} w={240} h={48} title="#2 Competitor" subtitle="Captures rest of traffic" />

          {/* Visibility cutoff */}
          <line x1={212} y1={164} x2={480} y2={164} stroke="#FF9F1C" strokeWidth="1.6" strokeDasharray="5 4" data-diagram-dash />
          <text x={356} y={182} textAnchor="middle" fill="#FFBF69" fontSize="11" fontWeight="700" className="sd-diagram__label">
            VISIBILITY CUTOFF (UNSEEN BELOW)
          </text>

          <DiagramNode x={236} y={200} w={240} h={54} title="Your Business" subtitle="Unclear title · Missing service pages" tone="amber" dashed />

          <path d="M 122 132 L 230 58" fill="none" stroke="#2EC4B6" strokeWidth="2.4" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <path d="M 122 146 L 230 120" fill="none" stroke="#FFFFFF" strokeWidth="2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-muted)`} data-diagram-draw />
          <path d="M 122 162 L 230 224" fill="none" stroke="rgba(255,159,28,0.35)" strokeWidth="1.8" strokeDasharray="4 4" data-diagram-dash />
        </>
      )}
    </DiagramCanvas>
  );
}

export function GrowthDiagram1() {
  // Slow, cluttered landing pages waste clicks before visitors read
  return (
    <DiagramCanvas label="Incoming paid and search traffic bouncing off slow landing page barrier before seeing offer">
      {(uid) => (
        <>
          <DiagramNode x={20} y={84} w={102} h={58} title="Paid / Search" subtitle="Visitor clicks in" tone="teal" />
          <DiagramNode x={198} y={62} w={122} h={104} title="Slow + Popups" subtitle="Page hangs & shifts" tone="amber" />
          <DiagramNode x={374} y={84} w={106} h={58} title="Your Offer" subtitle="Never read" tone="dim" dashed />

          <DiagramNode x={194} y={214} w={132} h={52} title="Instant Bounce" subtitle="Budget wasted" tone="amber" />

          {/* Entry hit + bounce back reflection */}
          <path d="M 122 106 L 192 106" fill="none" stroke="#2EC4B6" strokeWidth="2.3" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <path d="M 196 142 C 148 166, 148 228, 188 238" fill="none" stroke="#FF9F1C" strokeWidth="2.4" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />
          <path d="M 320 112 L 368 112" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.8" strokeDasharray="4 4" data-diagram-dash />
          <BreakBadge cx={344} cy={112} symbol="✕" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function GrowthDiagram2() {
  // Missing tracking leaves you guessing which pages bring real leads
  return (
    <DiagramCanvas label="Search, ad, and social traffic passing into a tracking blindspot leaving attribution unclear">
      {(uid) => (
        <>
          <DiagramNode x={20} y={44} w={96} h={46} title="Search" />
          <DiagramNode x={20} y={118} w={96} h={46} title="Ad Clicks" />
          <DiagramNode x={20} y={192} w={96} h={46} title="Social" />

          {/* Opaque blindspot */}
          <g data-diagram-node>
            <rect x={176} y={76} width="144" height="128" rx="12" fill="#12161F" stroke="#FF9F1C" strokeWidth="1.75" strokeDasharray="6 4" />
            <text x={248} y={132} textAnchor="middle" fill="#FFBF69" fontSize="13" fontWeight="700" className="sd-diagram__label">
              MISSING
            </text>
            <text x={248} y={152} textAnchor="middle" fill="#FFBF69" fontSize="13" fontWeight="700" className="sd-diagram__label">
              TRACKING
            </text>
            <text x={248} y={176} textAnchor="middle" fill="rgba(255,255,255,0.62)" fontSize="11" className="sd-diagram__sub">
              Form goals off
            </text>
          </g>

          <DiagramNode x={378} y={108} w={104} h={64} title="Real Leads?" subtitle="Guessing spend" tone="amber" />

          <path d="M 116 68 L 170 116" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-muted)`} data-diagram-draw />
          <path d="M 116 141 L 170 141" fill="none" stroke="#FFBF69" strokeWidth="2.1" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-gold)`} data-diagram-draw />
          <path d="M 116 215 L 170 166" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-muted)`} data-diagram-draw />
          <path d="M 320 141 L 372 141" fill="none" stroke="#FF9F1C" strokeWidth="2" strokeDasharray="4 4" data-diagram-dash />
          <BreakBadge cx={348} cy={141} symbol="?" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function GrowthDiagram3() {
  // Pages attract attention—then leave visitors unsure how to start
  return (
    <DiagramCanvas label="Visitor engagement building across service page then trailing off before next step">
      {(uid) => (
        <>
          <DiagramNode x={20} y={118} w={96} h={58} title="Reads Page" subtitle="High interest" tone="teal" />
          <DiagramNode x={164} y={118} w={116} h={58} title="Unclear Links" subtitle="Blog · More Info" tone="amber" />
          <DiagramNode x={376} y={118} w={104} h={58} title="Book a Call" subtitle="Next step missing" tone="dim" dashed />

          <path d="M 116 147 L 158 147" fill="none" stroke="#2EC4B6" strokeWidth="2.4" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <path d="M 280 147 L 370 147" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeDasharray="4 4" data-diagram-dash />

          {/* Drifting away downward */}
          <path d="M 222 176 C 234 218, 286 238, 344 244" fill="none" stroke="#FF9F1C" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />

          <BreakBadge cx={326} cy={147} symbol="✕" />
          <DiagramPill x={346} y={230} w={132} text="Drifts elsewhere" tone="amber" />
        </>
      )}
    </DiagramCanvas>
  );
}

export function GrowthResolvedDiagram() {
  return (
    <DiagramCanvas label="Compounding growth pipeline connecting clear search ranking, fast pages, tracked enquiries, and attribution" accent="teal">
      {(uid) => (
        <>
          <DiagramNode x={18} y={96} w={92} h={56} title="Search" subtitle="Top visibility" tone="teal" />
          <DiagramNode x={140} y={96} w={96} h={56} title="Fast Page" subtitle="Clear offer" tone="teal" />
          <DiagramNode x={266} y={96} w={96} h={56} title="Clear CTA" subtitle="Simple form" tone="amber" />
          <DiagramNode x={392} y={96} w={92} h={56} title="Tracked" subtitle="Real leads" tone="teal" />

          <path d="M 110 124 L 134 124" fill="none" stroke="#2EC4B6" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <path d="M 236 124 L 260 124" fill="none" stroke="#FF9F1C" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-amber)`} data-diagram-draw />
          <path d="M 362 124 L 386 124" fill="none" stroke="#2EC4B6" strokeWidth="2.2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />

          {/* Attribution feedback loop underneath */}
          <path d="M 438 156 C 438 228, 64 228, 64 158" fill="none" stroke="#2EC4B6" strokeWidth="2" pathLength="100" strokeDasharray="100" markerEnd={`url(#${uid}-arrow-teal)`} data-diagram-draw />
          <DiagramPill x={156} y={208} w={188} text="Verified compounding loop" tone="teal" />
        </>
      )}
    </DiagramCanvas>
  );
}
