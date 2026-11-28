export default function WorkBrowserFrame({
  shot,
  variant = 'primary',
  priority = false,
  className = '',
  revealItem = false,
}) {
  return (
    <figure
      className={`work-browser work-browser--${variant} ${className}`.trim()}
      data-reveal-item={revealItem ? 'true' : undefined}
    >
      <div className="work-browser__frame">
        <div className="work-browser__bar" aria-hidden="true">
          <div className="work-browser__controls">
            <span className="work-browser__dot" />
            <span className="work-browser__dot" />
            <span className="work-browser__dot" />
          </div>
          <span className="work-browser__address">{shot.urlLabel}</span>
          <span className="work-browser__tag">{shot.pageLabel}</span>
        </div>

        <div className="work-browser__viewport">
          <picture className="work-browser__picture">
            <source srcSet={shot.webp} type="image/webp" />
            <img
              src={shot.fallback}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              loading={priority ? 'eager' : 'lazy'}
              fetchPriority={priority ? 'high' : undefined}
              decoding={priority ? 'sync' : 'async'}
              className="work-browser__img"
            />
          </picture>
        </div>
      </div>

      {shot.caption && (
        <figcaption className="work-browser__caption">{shot.caption}</figcaption>
      )}
    </figure>
  );
}
