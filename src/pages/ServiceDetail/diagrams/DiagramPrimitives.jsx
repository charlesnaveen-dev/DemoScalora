import { useId } from 'react';

/**
 * Shared SVG primitives & Tropical Sunrise defs for Section 03 animated diagrams.
 * Uses React useId() for marker and pattern IDs so desktop + inline mobile instances
 * never share colliding SVG definition IDs in the DOM.
 */
export function DiagramCanvas({ label, children, accent = 'amber' }) {
  const rawId = useId();
  const uid = rawId.replace(/:/g, '');

  return (
    <svg
      viewBox="0 0 500 300"
      className={`sd-diagram__svg sd-diagram__svg--${accent}`}
      role="img"
      aria-label={label}
      data-diagram-uid={uid}
    >
      <defs>
        <pattern
          id={`${uid}-grid`}
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.5" cy="1.5" r="1" fill="rgba(255, 255, 255, 0.085)" />
        </pattern>

        <marker
          id={`${uid}-arrow-amber`}
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 1 1.5 L 8.5 5 L 1 8.5 z" fill="#FF9F1C" />
        </marker>

        <marker
          id={`${uid}-arrow-gold`}
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 1 1.5 L 8.5 5 L 1 8.5 z" fill="#FFBF69" />
        </marker>

        <marker
          id={`${uid}-arrow-teal`}
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 1 1.5 L 8.5 5 L 1 8.5 z" fill="#2EC4B6" />
        </marker>

        <marker
          id={`${uid}-arrow-muted`}
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5.5"
          markerHeight="5.5"
          orient="auto-start-reverse"
        >
          <path d="M 1 1.5 L 8.5 5 L 1 8.5 z" fill="rgba(255, 255, 255, 0.48)" />
        </marker>
      </defs>

      <rect width="500" height="300" fill={`url(#${uid}-grid)`} rx="10" />
      {typeof children === 'function' ? children(uid) : children}
    </svg>
  );
}

export function DiagramNode({
  x,
  y,
  w,
  h,
  title,
  subtitle,
  tone = 'neutral',
  rx = 10,
  dashed = false,
}) {
  const styles = {
    neutral: {
      fill: '#151B24',
      stroke: 'rgba(255, 255, 255, 0.22)',
      titleFill: '#FFFFFF',
      subFill: 'rgba(255, 255, 255, 0.62)',
    },
    amber: {
      fill: 'rgba(255, 159, 28, 0.14)',
      stroke: '#FF9F1C',
      titleFill: '#FFBF69',
      subFill: 'rgba(255, 255, 255, 0.78)',
    },
    teal: {
      fill: 'rgba(46, 196, 182, 0.13)',
      stroke: '#2EC4B6',
      titleFill: '#CBF3F0',
      subFill: 'rgba(203, 243, 240, 0.78)',
    },
    dim: {
      fill: '#12161E',
      stroke: 'rgba(255, 255, 255, 0.14)',
      titleFill: 'rgba(255, 255, 255, 0.5)',
      subFill: 'rgba(255, 255, 255, 0.36)',
    },
  }[tone];

  const cx = x + w / 2;
  const cy = y + h / 2;

  return (
    <g data-diagram-node>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={rx}
        fill={styles.fill}
        stroke={styles.stroke}
        strokeWidth="1.5"
        strokeDasharray={dashed ? '5 4' : undefined}
      />
      <text
        x={cx}
        y={subtitle ? cy - 6 : cy + 5}
        textAnchor="middle"
        fill={styles.titleFill}
        fontSize="13.5"
        fontWeight="700"
        className="sd-diagram__label"
      >
        {title}
      </text>
      {subtitle && (
        <text
          x={cx}
          y={cy + 13}
          textAnchor="middle"
          fill={styles.subFill}
          fontSize="11.5"
          fontWeight="500"
          className="sd-diagram__sub"
        >
          {subtitle}
        </text>
      )}
    </g>
  );
}

export function DiagramPill({ x, y, w = 120, h = 28, text, tone = 'amber', isState = true }) {
  const cfg = {
    amber: {
      fill: 'rgba(255, 159, 28, 0.18)',
      stroke: '#FF9F1C',
      text: '#FFBF69',
    },
    teal: {
      fill: 'rgba(46, 196, 182, 0.18)',
      stroke: '#2EC4B6',
      text: '#CBF3F0',
    },
    white: {
      fill: '#1A212C',
      stroke: 'rgba(255, 255, 255, 0.3)',
      text: '#FFFFFF',
    },
  }[tone];

  return (
    <g data-diagram-state={isState ? 'true' : undefined}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={h / 2}
        fill={cfg.fill}
        stroke={cfg.stroke}
        strokeWidth="1.35"
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + 4.5}
        textAnchor="middle"
        fill={cfg.text}
        fontSize="11.5"
        fontWeight="700"
        className="sd-diagram__label"
      >
        {text}
      </text>
    </g>
  );
}

export function BreakBadge({ cx, cy, symbol = '✕', tone = 'amber' }) {
  const fill = tone === 'teal' ? '#2EC4B6' : '#FF9F1C';
  return (
    <g data-diagram-state>
      <circle cx={cx} cy={cy} r="13" fill="#0E1116" stroke={fill} strokeWidth="2" />
      <text
        x={cx}
        y={cy + 4.5}
        textAnchor="middle"
        fill={fill}
        fontSize="13"
        fontWeight="700"
        className="sd-diagram__label"
      >
        {symbol}
      </text>
    </g>
  );
}
