import { useId } from 'react';
import { differentiationContent } from '../homeSectionsData';

export default function WhyScalarowSection() {
  const headingId = useId();

  return (
    <section className="home-why-studio" aria-labelledby={headingId}>
      <div className="container">
        <div className="home-why-studio__top" data-reveal>
          <div className="home-why-studio__heading-col">
            <span className="home-eyebrow">
              <span className="home-eyebrow__dot home-eyebrow__dot--teal" aria-hidden="true" />
              <span>{differentiationContent.eyebrow}</span>
            </span>
            <h2 id={headingId} className="home-why-studio__heading">
              {differentiationContent.heading}
            </h2>
          </div>

          <p className="home-why-studio__thesis">{differentiationContent.thesis}</p>
        </div>

        <ol className="home-why-studio__ledger" data-reveal-group>
          {differentiationContent.principles.map((item) => (
            <li key={item.num} className="home-why-studio__row" data-reveal-item>
              <div className="home-why-studio__row-meta">
                <span className="tabular-num home-why-studio__row-num">{item.num}</span>
                <span className="home-why-studio__row-tag">{item.tag}</span>
              </div>
              <h3 className="home-why-studio__row-title">{item.title}</h3>
              <p className="home-why-studio__row-detail">{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
