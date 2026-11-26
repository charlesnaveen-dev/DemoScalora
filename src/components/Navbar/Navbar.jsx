import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { pillars } from '../../data/siteData';
import MagneticButton from '../MagneticButton/MagneticButton';
import './Navbar.css';

function ScalarowMark() {
  return (
    <svg
      className="navbar-mark"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="7" fill="#0E1116" />
      <rect x="6" y="19" width="8" height="7" rx="1.5" fill="#2EC4B6" />
      <rect x="12" y="12.5" width="8" height="7" rx="1.5" fill="#CBF3F0" />
      <rect x="18" y="6" width="8" height="7" rx="1.5" fill="#FF9F1C" />
    </svg>
  );
}

const PILLAR_ACCENT_CLASS = {
  orange: 'navbar-pillar-badge--orange',
  teal: 'navbar-pillar-badge--teal',
  dark: 'navbar-pillar-badge--dark',
};

export default function Navbar() {
  const location = useLocation();
  const servicesMenuId = useId();
  const mobileServicesId = useId();
  const mobileDrawerId = 'mobile-nav-drawer';

  const [servicesOpen, setServicesOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const hoverPreviewRef = useRef(false);
  const dropdownRef = useRef(null);
  const servicesTriggerRef = useRef(null);
  const drawerRef = useRef(null);
  const drawerSheetRef = useRef(null);
  const mobileToggleRef = useRef(null);

  const isServicesActive = location.pathname.startsWith('/services');

  const closeServicesDropdown = useCallback((restoreFocus = false) => {
    setServicesOpen(false);
    hoverPreviewRef.current = false;
    if (restoreFocus) {
      servicesTriggerRef.current?.focus();
    }
  }, []);

  const closeDrawer = useCallback(() => {
    const dialog = drawerRef.current;
    if (dialog?.open) {
      dialog.close();
    }
    setDrawerOpen(false);
    setMobileServicesOpen(false);
    mobileToggleRef.current?.focus();
  }, []);

  const openDrawer = useCallback(() => {
    const dialog = drawerRef.current;
    if (!dialog) return;
    if (!dialog.open) {
      dialog.showModal();
    }
    setDrawerOpen(true);
    setMobileServicesOpen(location.pathname.startsWith('/services'));
  }, [location.pathname]);

  // Close menus on route navigation
  useEffect(() => {
    setServicesOpen(false);
    hoverPreviewRef.current = false;
    if (drawerRef.current?.open) {
      drawerRef.current.close();
    }
    setDrawerOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Track subtle scroll elevation
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile drawer if viewport expands to desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 960px)');
    const handleChange = (e) => {
      if (e.matches && drawerRef.current?.open) {
        drawerRef.current.close();
        setDrawerOpen(false);
      }
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  // Outside click & Escape handling for desktop Services dropdown
  useEffect(() => {
    if (!servicesOpen) return undefined;

    const handlePointerDown = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        closeServicesDropdown(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeServicesDropdown(true);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [servicesOpen, closeServicesDropdown]);

  // Desktop hover preview handlers
  const canHoverPreview = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover)').matches &&
    window.matchMedia('(min-width: 960px)').matches;

  const handleDropdownPointerEnter = (event) => {
    if (event.pointerType === 'touch' || !canHoverPreview()) return;
    if (!servicesOpen) {
      hoverPreviewRef.current = true;
      setServicesOpen(true);
    }
  };

  const handleDropdownPointerLeave = (event) => {
    if (event.pointerType === 'touch' || !canHoverPreview()) return;
    if (hoverPreviewRef.current) {
      hoverPreviewRef.current = false;
      setServicesOpen(false);
    }
  };

  const handleDropdownBlur = (event) => {
    const nextFocused = event.relatedTarget;
    if (nextFocused && !dropdownRef.current?.contains(nextFocused)) {
      closeServicesDropdown(false);
    }
  };

  const handleServicesTriggerClick = () => {
    if (servicesOpen && hoverPreviewRef.current) {
      // Clicking while hover-previewing pins the menu open
      hoverPreviewRef.current = false;
      return;
    }
    hoverPreviewRef.current = false;
    setServicesOpen((prev) => !prev);
  };

  const handleDrawerCancel = (event) => {
    event.preventDefault();
    closeDrawer();
  };

  const handleDrawerBackdropClick = (event) => {
    if (
      drawerSheetRef.current &&
      !drawerSheetRef.current.contains(event.target)
    ) {
      closeDrawer();
    }
  };

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <Link to="/" className="navbar-brand">
          <ScalarowMark />
          <span className="navbar-wordmark">SCALAROW</span>
        </Link>

        <nav className="navbar-desktop" aria-label="Primary navigation">
          <ul className="navbar-list">
            <li>
              <NavLink to="/" end className="navbar-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="navbar-link">
                About
              </NavLink>
            </li>
            <li
              ref={dropdownRef}
              className="navbar-dropdown"
              onPointerEnter={handleDropdownPointerEnter}
              onPointerLeave={handleDropdownPointerLeave}
              onBlur={handleDropdownBlur}
            >
              <button
                ref={servicesTriggerRef}
                type="button"
                className={`navbar-link navbar-dropdown__trigger${
                  isServicesActive ? ' is-active-parent' : ''
                }`}
                aria-expanded={servicesOpen}
                aria-controls={servicesMenuId}
                onClick={handleServicesTriggerClick}
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                  className={`navbar-chevron${servicesOpen ? ' is-open' : ''}`}
                />
              </button>

              {servicesOpen && (
                <div
                  id={servicesMenuId}
                  className="navbar-dropdown__panel"
                >
                  <div className="navbar-dropdown__header">
                    <div>
                      <span className="eyebrow">CAPABILITIES</span>
                      <p className="navbar-dropdown__subtitle">
                        Three pillars engineered to work together.
                      </p>
                    </div>
                    <NavLink
                      to="/services"
                      end
                      className="navbar-dropdown__all"
                    >
                      <span>All Services</span>
                      <ArrowRight size={15} aria-hidden="true" />
                    </NavLink>
                  </div>

                  <div className="navbar-dropdown__grid">
                    {pillars.map((pillar) => (
                      <div key={pillar.key} className="navbar-pillar-group">
                        <div className="navbar-pillar-group__head">
                          <span
                            className={`navbar-pillar-badge ${
                              PILLAR_ACCENT_CLASS[pillar.accent] || ''
                            }`}
                          >
                            {pillar.number}
                          </span>
                          <span className="navbar-pillar-group__title">
                            {pillar.key}
                          </span>
                        </div>
                        <ul className="navbar-pillar-group__list">
                          {pillar.services.map((service) => (
                            <li key={service.href}>
                              <NavLink
                                to={service.href}
                                className="navbar-dropdown__item"
                              >
                                {service.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li>
              <NavLink to="/work" className="navbar-link">
                Work
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="navbar-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="navbar-actions">
          <MagneticButton
            as={Link}
            to="/contact"
            className="btn btn--primary navbar-cta"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight size={16} aria-hidden="true" />
          </MagneticButton>

          <button
            ref={mobileToggleRef}
            type="button"
            className="navbar-mobile-toggle"
            aria-expanded={drawerOpen}
            aria-controls={mobileDrawerId}
            aria-label="Open navigation menu"
            onClick={drawerOpen ? closeDrawer : openDrawer}
          >
            {drawerOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <dialog
        id={mobileDrawerId}
        ref={drawerRef}
        className="mobile-drawer"
        aria-label="Mobile navigation"
        onCancel={handleDrawerCancel}
        onClick={handleDrawerBackdropClick}
      >
        <div ref={drawerSheetRef} className="mobile-drawer__sheet">
          <div className="mobile-drawer__header">
            <Link to="/" className="navbar-brand" onClick={closeDrawer}>
              <ScalarowMark />
              <span className="navbar-wordmark">SCALAROW</span>
            </Link>
            <button
              type="button"
              className="mobile-drawer__close"
              aria-label="Close navigation menu"
              onClick={closeDrawer}
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>

          <nav className="mobile-drawer__nav" aria-label="Mobile navigation links">
            <ul className="mobile-drawer__list">
              <li>
                <NavLink to="/" end className="mobile-drawer__link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="mobile-drawer__link">
                  About
                </NavLink>
              </li>
              <li className="mobile-drawer__group">
                <button
                  type="button"
                  className={`mobile-drawer__link mobile-drawer__accordion-btn${
                    isServicesActive ? ' is-active-parent' : ''
                  }`}
                  aria-expanded={mobileServicesOpen}
                  aria-controls={mobileServicesId}
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={`navbar-chevron${
                      mobileServicesOpen ? ' is-open' : ''
                    }`}
                  />
                </button>

                <div
                  id={mobileServicesId}
                  className="mobile-drawer__submenu"
                  hidden={!mobileServicesOpen}
                >
                  <NavLink
                    to="/services"
                    end
                    className="mobile-drawer__all-services"
                  >
                    <span>All Services</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </NavLink>

                  <div className="mobile-drawer__pillars">
                    {pillars.map((pillar) => (
                      <div key={pillar.key} className="mobile-drawer__pillar">
                        <span className="mobile-drawer__pillar-label">
                          {pillar.number} · {pillar.key}
                        </span>
                        <ul className="mobile-drawer__pillar-list">
                          {pillar.services.map((service) => (
                            <li key={service.href}>
                              <NavLink
                                to={service.href}
                                className="mobile-drawer__sublink"
                              >
                                {service.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <NavLink to="/work" className="mobile-drawer__link">
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="mobile-drawer__link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="mobile-drawer__footer">
            <Link to="/contact" className="btn btn--primary mobile-drawer__cta">
              <span>Let&apos;s Talk</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </dialog>
    </header>
  );
}
