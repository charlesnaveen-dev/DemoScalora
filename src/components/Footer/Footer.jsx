import { Link } from 'react-router-dom';
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import { pillars, siteConfig } from '../../data/siteData';
import { scrollToTop } from '../../utils/motion';
import './Footer.css';

function FooterMark() {
  return (
    <svg
      className="footer-brand__mark"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        width="32"
        height="32"
        rx="7"
        fill="#171B22"
        stroke="rgba(255,255,255,0.16)"
      />
      <rect x="6" y="19" width="8" height="7" rx="1.5" fill="#2EC4B6" />
      <rect x="12" y="12.5" width="8" height="7" rx="1.5" fill="#CBF3F0" />
      <rect x="18" y="6" width="8" height="7" rx="1.5" fill="#FF9F1C" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const handleBackToTop = () => {
    scrollToTop(false);
  };

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__status-bar">
          <span className="site-footer__studio-tag">
            Creative Technology Studio
          </span>
          <span className="site-footer__availability">
            <span className="site-footer__availability-dot" aria-hidden="true" />
            <span>Open for new studio projects</span>
          </span>
        </div>

        <div className="site-footer__top">
          <div className="site-footer__brand-col">
            <Link to="/" className="footer-brand">
              <FooterMark />
              <span className="footer-brand__wordmark">{siteConfig.brand}</span>
            </Link>
            <p className="site-footer__intro">
              Creative thinking, digital design, software engineering, and practical automation
              unified for ambitious businesses.
            </p>
            <div className="site-footer__contact-list">
              <a
                href={`mailto:${siteConfig.email}`}
                className="site-footer__contact-item"
              >
                <Mail size={16} aria-hidden="true" />
                <span>{siteConfig.email}</span>
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__contact-item"
              >
                <MessageCircle size={16} aria-hidden="true" />
                <span>{siteConfig.whatsappDisplay}</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <p className="site-footer__contact-item site-footer__contact-item--static">
                <MapPin size={16} aria-hidden="true" />
                <span>{siteConfig.location}</span>
              </p>
            </div>
          </div>

          <div className="site-footer__cols">
            <div className="site-footer__col">
              <h2 className="site-footer__heading">Navigation</h2>
              <ul className="site-footer__links">
                {NAV_LINKS.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="site-footer__link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer__col site-footer__col--services">
              <h2 className="site-footer__heading">Services</h2>
              <div className="site-footer__pillars">
                {pillars.map((pillar) => (
                  <div key={pillar.key} className="site-footer__pillar">
                    <span className="site-footer__pillar-title">
                      {pillar.number} · {pillar.key}
                    </span>
                    <ul className="site-footer__links">
                      {pillar.services.map((service) => (
                        <li key={service.href}>
                          <Link
                            to={service.href}
                            className="site-footer__link"
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="site-footer__col">
              <h2 className="site-footer__heading">Connect</h2>
              <ul className="site-footer__links">
                {siteConfig.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="site-footer__link site-footer__link--external"
                    >
                      <span>{social.label}</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © 2026 {siteConfig.brand}. Creative Technology Studio. All rights reserved.
          </p>

          <button
            type="button"
            className="site-footer__top-btn"
            onClick={handleBackToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="site-footer__wordmark-wrap" aria-hidden="true">
        <div className="container">
          <span className="site-footer__oversized-wordmark">
            {siteConfig.brand}
          </span>
        </div>
      </div>
    </footer>
  );
}
