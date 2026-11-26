import { useState } from 'react';
import {
  Monitor,
  Smartphone,
  ArrowRight,
  Database,
  Webhook,
  ShieldCheck,
  Zap,
  GitBranch,
  CheckCircle2,
  FileText,
  Search,
  Gauge,
} from 'lucide-react';

function handleTabListKeyDown(event, items, currentIndex, onSelect) {
  let nextIndex = null;
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    nextIndex = (currentIndex + 1) % items.length;
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    nextIndex = (currentIndex - 1 + items.length) % items.length;
  } else if (event.key === 'Home') {
    nextIndex = 0;
  } else if (event.key === 'End') {
    nextIndex = items.length - 1;
  }
  if (nextIndex === null) return;
  event.preventDefault();
  onSelect(items[nextIndex].id);
  const tabButtons = event.currentTarget.parentElement?.querySelectorAll('[role="tab"]');
  tabButtons?.[nextIndex]?.focus();
}

function ViewportBlueprintVisual() {
  const [viewport, setViewport] = useState('desktop');

  return (
    <div className="hero-vis hero-vis--blueprint">
      <div className="hero-vis__toolbar">
        <span className="hero-vis__label">VIEWPORT PREVIEW</span>
        <div className="hero-vis__toggle" role="group" aria-label="Viewport size toggle">
          <button
            type="button"
            className={`hero-vis__toggle-btn ${viewport === 'desktop' ? 'is-active' : ''}`}
            aria-pressed={viewport === 'desktop'}
            onClick={() => setViewport('desktop')}
          >
            <Monitor size={14} aria-hidden="true" />
            <span>Desktop</span>
          </button>
          <button
            type="button"
            className={`hero-vis__toggle-btn ${viewport === 'mobile' ? 'is-active' : ''}`}
            aria-pressed={viewport === 'mobile'}
            onClick={() => setViewport('mobile')}
          >
            <Smartphone size={14} aria-hidden="true" />
            <span>Mobile</span>
          </button>
        </div>
      </div>

      <div className={`blueprint-frame blueprint-frame--${viewport}`}>
        <div className="blueprint-frame__chrome">
          <span className="blueprint-dot" />
          <span className="blueprint-dot" />
          <span className="blueprint-dot" />
          <span className="blueprint-url">
            {viewport === 'desktop' ? '1440px · Semantic Grid' : '390px · Touch First'}
          </span>
        </div>
        <div className="blueprint-frame__body">
          <div className="blueprint-block blueprint-block--nav" />
          <div className="blueprint-grid">
            <div className="blueprint-block blueprint-block--hero" />
            <div className="blueprint-block blueprint-block--card" />
            <div className="blueprint-block blueprint-block--card" />
          </div>
        </div>
      </div>

      <div className="hero-vis__metrics">
        <div>
          <span className="hero-vis__metric-key">LCP Target</span>
          <strong className="tabular-num hero-vis__metric-val">&lt; 1.2s</strong>
        </div>
        <div>
          <span className="hero-vis__metric-key">CLS</span>
          <strong className="tabular-num hero-vis__metric-val">0.00</strong>
        </div>
        <div>
          <span className="hero-vis__metric-key">Markup</span>
          <strong className="hero-vis__metric-val">WCAG AA</strong>
        </div>
      </div>
    </div>
  );
}

const FLOW_STAGES = [
  {
    id: 'auth',
    step: '01',
    title: 'Auth & Role',
    detail: 'Session validation, granular permissions, and clean onboarding state.',
  },
  {
    id: 'workspace',
    step: '02',
    title: 'Core Workspace',
    detail: 'Optimistic UI updates with clear loading, empty, and error states.',
  },
  {
    id: 'sync',
    step: '03',
    title: 'Offline / Sync',
    detail: 'Local persistence queue that reconciles safely when connectivity returns.',
  },
  {
    id: 'api',
    step: '04',
    title: 'Live API',
    detail: 'Typed REST/GraphQL endpoints with automated end-to-end verification.',
  },
];

function FlowNodeVisual() {
  const [activeId, setActiveId] = useState(FLOW_STAGES[0].id);
  const activeStage = FLOW_STAGES.find((s) => s.id === activeId) || FLOW_STAGES[0];

  return (
    <div className="hero-vis hero-vis--flow">
      <div className="hero-vis__toolbar">
        <span className="hero-vis__label">USER-JOURNEY ARCHITECTURE</span>
        <span className="tabular-num hero-vis__badge">4 STAGES</span>
      </div>

      <div className="flow-nodes" role="tablist" aria-label="Application flow stages">
        {FLOW_STAGES.map((stage, idx) => {
          const isSelected = stage.id === activeStage.id;
          return (
            <div key={stage.id} className="flow-nodes__item">
              <button
                type="button"
                role="tab"
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                className={`flow-node-btn ${isSelected ? 'is-active' : ''}`}
                onClick={() => setActiveId(stage.id)}
                onKeyDown={(e) => handleTabListKeyDown(e, FLOW_STAGES, idx, setActiveId)}
              >
                <span className="tabular-num flow-node-btn__step">{stage.step}</span>
                <span className="flow-node-btn__title">{stage.title}</span>
              </button>
              {idx < FLOW_STAGES.length - 1 && (
                <ArrowRight size={14} className="flow-nodes__arrow" aria-hidden="true" />
              )}
            </div>
          );
        })}
      </div>

      <div className="hero-vis__readout" role="tabpanel">
        <span className="tabular-num hero-vis__readout-step">
          STAGE {activeStage.step} — {activeStage.title.toUpperCase()}
        </span>
        <p className="hero-vis__readout-text">{activeStage.detail}</p>
      </div>
    </div>
  );
}

const ARCH_NODES = [
  {
    id: 'sources',
    label: 'ERP / CRM / Billing',
    accent: 'teal',
    icon: Database,
    spec: 'Normalized ingestion from legacy exports, REST endpoints, and webhooks.',
  },
  {
    id: 'bridge',
    label: 'API & Validation Bridge',
    accent: 'orange',
    icon: Webhook,
    spec: 'Strict schema checks, idempotency keys, and rate-limit safe queuing.',
  },
  {
    id: 'core',
    label: 'Core Business Engine',
    accent: 'teal',
    icon: ShieldCheck,
    spec: 'Custom pricing rules, role-based approvals, and immutable audit trails.',
  },
];

function DarkArchitectureVisual() {
  const [selectedNode, setSelectedNode] = useState(ARCH_NODES[1].id);
  const current = ARCH_NODES.find((n) => n.id === selectedNode) || ARCH_NODES[0];

  return (
    <div className="hero-vis hero-vis--dark">
      <div className="hero-vis__toolbar hero-vis__toolbar--dark">
        <span className="hero-vis__label hero-vis__label--dark">
          SYSTEM-BRIDGE SCHEMATIC
        </span>
        <span className="hero-vis__status-dot">ACTIVE TOPOLOGY</span>
      </div>

      <div className="arch-diagram" role="tablist" aria-label="System bridge nodes">
        {ARCH_NODES.map((node, idx) => {
          const Icon = node.icon;
          const isSelected = node.id === current.id;
          return (
            <button
              key={node.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              tabIndex={isSelected ? 0 : -1}
              className={`arch-node arch-node--${node.accent} ${
                isSelected ? 'is-active' : ''
              }`}
              onClick={() => setSelectedNode(node.id)}
              onKeyDown={(e) => handleTabListKeyDown(e, ARCH_NODES, idx, setSelectedNode)}
            >
              <Icon size={18} aria-hidden="true" />
              <span>{node.label}</span>
            </button>
          );
        })}
      </div>

      <div className="arch-spec" role="tabpanel">
        <span className="arch-spec__label">{current.label}</span>
        <p className="arch-spec__text">{current.spec}</p>
      </div>
    </div>
  );
}

const PIPELINE_STEPS = [
  {
    id: 'trigger',
    label: 'Trigger',
    icon: Zap,
    title: 'Form / Webhook Event',
    detail: 'Validates incoming payload, attaches idempotency key, and logs receipt.',
  },
  {
    id: 'transform',
    label: 'Transform',
    icon: GitBranch,
    title: 'Normalize & Enrich',
    detail: 'Maps fields cleanly, applies business routing rules, and handles edge cases.',
  },
  {
    id: 'sync',
    label: 'Sync',
    icon: CheckCircle2,
    title: 'CRM + Billing + Alerts',
    detail: 'Updates downstream tools with automatic retry queues on transient errors.',
  },
];

function PipelineFlowVisual() {
  const [activeStep, setActiveStep] = useState(PIPELINE_STEPS[0].id);
  const current =
    PIPELINE_STEPS.find((s) => s.id === activeStep) || PIPELINE_STEPS[0];

  return (
    <div className="hero-vis hero-vis--pipeline">
      <div className="hero-vis__toolbar">
        <span className="hero-vis__label">AUTOMATION PIPELINE</span>
        <span className="hero-vis__badge">RETRY GUARDED</span>
      </div>

      <div className="pipeline-track" role="tablist" aria-label="Automation pipeline stages">
        {PIPELINE_STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isSelected = step.id === current.id;
          return (
            <div key={step.id} className="pipeline-track__unit">
              <button
                type="button"
                role="tab"
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                className={`pipeline-node ${isSelected ? 'is-active' : ''}`}
                onClick={() => setActiveStep(step.id)}
                onKeyDown={(e) => handleTabListKeyDown(e, PIPELINE_STEPS, idx, setActiveStep)}
              >
                <Icon size={16} aria-hidden="true" />
                <span>{step.label}</span>
              </button>
              {idx < PIPELINE_STEPS.length - 1 && (
                <span className="pipeline-connector" aria-hidden="true" />
              )}
            </div>
          );
        })}
      </div>

      <div className="hero-vis__readout" role="tabpanel">
        <span className="hero-vis__readout-step">{current.title}</span>
        <p className="hero-vis__readout-text">{current.detail}</p>
      </div>
    </div>
  );
}

const RAG_QUERIES = [
  {
    id: 'sla',
    query: 'What is our standard vendor onboarding SLA?',
    answer:
      'Approved vendors must complete compliance verification within 3 business days before receiving a production PO.',
    citations: ['SOP-OPS-04.pdf · p. 6', 'Vendor-Policy-v2.md · Sec 3.1'],
  },
  {
    id: 'refund',
    query: 'When does a refund require finance sign-off?',
    answer:
      'Credits above $2,500 or outside the 30-day window require dual approval from Operations Lead and Finance.',
    citations: ['Billing-Runbook.pdf · p. 12', 'Approval-Matrix.xlsx · Row 18'],
  },
];

function CitationMatrixVisual() {
  const [queryId, setQueryId] = useState(RAG_QUERIES[0].id);
  const current = RAG_QUERIES.find((q) => q.id === queryId) || RAG_QUERIES[0];

  return (
    <div className="hero-vis hero-vis--citation">
      <div className="hero-vis__toolbar">
        <span className="hero-vis__label">GROUNDED RAG PREVIEW</span>
        <span className="hero-vis__badge">ZERO RETENTION</span>
      </div>

      <div className="citation-queries" role="tablist" aria-label="Sample AI queries">
        {RAG_QUERIES.map((item, idx) => {
          const isSelected = item.id === current.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              tabIndex={isSelected ? 0 : -1}
              className={`citation-query-btn ${isSelected ? 'is-active' : ''}`}
              onClick={() => setQueryId(item.id)}
              onKeyDown={(e) => handleTabListKeyDown(e, RAG_QUERIES, idx, setQueryId)}
            >
              <Search size={14} aria-hidden="true" />
              <span>{item.query}</span>
            </button>
          );
        })}
      </div>

      <div className="citation-answer" role="tabpanel">
        <p className="citation-answer__text">{current.answer}</p>
        <div className="citation-answer__sources">
          {current.citations.map((cite) => (
            <span key={cite} className="citation-pill">
              <FileText size={12} aria-hidden="true" />
              <span>{cite}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const AUDIT_STATES = {
  before: {
    label: 'Baseline Audit',
    lcp: '4.1s',
    inp: '310ms',
    cls: '0.24',
    clarity: 'Multi-step friction · Unclear CTA',
  },
  after: {
    label: 'Post-Optimization',
    lcp: '1.1s',
    inp: '65ms',
    cls: '0.00',
    clarity: 'Single-step enquiry · Schema verified',
  },
};

function AuditEditorialVisual() {
  const [mode, setMode] = useState('after');
  const data = AUDIT_STATES[mode];

  return (
    <div className="hero-vis hero-vis--audit">
      <div className="hero-vis__toolbar">
        <span className="hero-vis__label">CWV &amp; FUNNEL AUDIT</span>
        <div className="hero-vis__toggle" role="group" aria-label="Audit state comparison">
          <button
            type="button"
            className={`hero-vis__toggle-btn ${mode === 'before' ? 'is-active' : ''}`}
            aria-pressed={mode === 'before'}
            onClick={() => setMode('before')}
          >
            Before
          </button>
          <button
            type="button"
            className={`hero-vis__toggle-btn ${mode === 'after' ? 'is-active' : ''}`}
            aria-pressed={mode === 'after'}
            onClick={() => setMode('after')}
          >
            After
          </button>
        </div>
      </div>

      <div className={`audit-strip audit-strip--${mode}`}>
        <div className="audit-metric">
          <span className="audit-metric__label">LCP</span>
          <strong className="tabular-num audit-metric__val">{data.lcp}</strong>
        </div>
        <div className="audit-metric">
          <span className="audit-metric__label">INP</span>
          <strong className="tabular-num audit-metric__val">{data.inp}</strong>
        </div>
        <div className="audit-metric">
          <span className="audit-metric__label">CLS</span>
          <strong className="tabular-num audit-metric__val">{data.cls}</strong>
        </div>
      </div>

      <div className="hero-vis__readout">
        <span className="hero-vis__readout-step">
          <Gauge size={14} aria-hidden="true" style={{ display: 'inline', marginRight: 6 }} />
          {data.label}
        </span>
        <p className="hero-vis__readout-text">{data.clarity}</p>
      </div>
    </div>
  );
}

export default function ServiceHeroVisual({ variant }) {
  switch (variant) {
    case 'viewport-blueprint':
      return <ViewportBlueprintVisual />;
    case 'flow-node':
      return <FlowNodeVisual />;
    case 'dark-architecture':
      return <DarkArchitectureVisual />;
    case 'pipeline-flow':
      return <PipelineFlowVisual />;
    case 'citation-matrix':
      return <CitationMatrixVisual />;
    case 'audit-editorial':
      return <AuditEditorialVisual />;
    default:
      return <ViewportBlueprintVisual />;
  }
}
