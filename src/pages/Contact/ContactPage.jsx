import { useCallback, useEffect, useRef, useState } from 'react';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from 'lucide-react';
import SeoHead from '../../components/SeoHead/SeoHead';
import { servicesData, siteConfig } from '../../data/siteData';
import './ContactPage.css';

const BUDGET_OPTIONS = [
  'Under $5k',
  '$5k–$15k',
  '$15k–$35k',
  '$35k+',
  'Not sure yet',
];

const INITIAL_VALUES = {
  name: '',
  email: '',
  company: '',
  service: '',
  budget: '',
  description: '',
};

/**
 * Extracts readable label text from a form control's label element,
 * excluding decorative/required markers.
 */
function getSpokenLabel(control) {
  const label = control.labels?.[0];
  if (!label) return '';
  const clone = label.cloneNode(true);
  clone.querySelectorAll('[aria-hidden="true"]').forEach((el) => el.remove());
  return clone.textContent.replace(/\s+/g, ' ').trim();
}

/**
 * Extracts readable error text from the control's associated error element.
 */
function getSpokenError(control) {
  const errorId = control.dataset?.error;
  if (!errorId) return '';
  const errorEl = document.getElementById(errorId);
  if (!errorEl) return '';
  const clone = errorEl.cloneNode(true);
  clone.querySelectorAll('[aria-hidden="true"]').forEach((el) => el.remove());
  clone
    .querySelectorAll('[role="img"][aria-label]')
    .forEach((el) => el.replaceWith(`${el.getAttribute('aria-label')}: `));
  return clone.textContent.replace(/\s+/g, ' ').trim();
}

/**
 * Lists the error element ID in aria-describedby only while invalid,
 * preserving any existing hint IDs.
 */
function linkErrorToControl(control, shown) {
  const errorId = control.dataset?.error;
  if (!errorId) return;
  const ids = (control.getAttribute('aria-describedby') || '')
    .split(/\s+/)
    .filter((id) => id && id !== errorId);
  if (shown) ids.push(errorId);
  if (ids.length) {
    control.setAttribute('aria-describedby', ids.join(' '));
  } else {
    control.removeAttribute('aria-describedby');
  }
}

export default function ContactPage() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [submittedData, setSubmittedData] = useState(null);
  const [announcement, setAnnouncement] = useState('');
  const [copied, setCopied] = useState(false);

  const formRef = useRef(null);
  const confirmationHeadingRef = useRef(null);

  const dirtyStateRef = useRef(new WeakMap());
  const flaggedRef = useRef(new WeakSet());
  const announcedRef = useRef(new WeakSet());
  const announceTimerRef = useRef(null);
  const announcedFieldRef = useRef(null);
  const submitFocusScheduledRef = useRef(false);

  const supportsUserInvalid =
    typeof window !== 'undefined' &&
    typeof CSS !== 'undefined' &&
    CSS.supports('selector(:user-invalid)');

  const announceFieldError = useCallback((control) => {
    const errorText = getSpokenError(control);
    if (!errorText) return;
    const label = getSpokenLabel(control);
    const prefix = label ? `${label}: ` : '';

    clearTimeout(announceTimerRef.current);
    setAnnouncement('');
    announcedFieldRef.current = control;

    // Delay announcement slightly so screen readers finish announcing the next focused field
    announceTimerRef.current = setTimeout(() => {
      setAnnouncement(`${prefix}${errorText}`);
    }, 500);
  }, []);

  const syncControlState = useCallback(
    (control, { announce = false, forceFallback = false } = {}) => {
      if (!control?.matches?.('input, select, textarea')) return;

      const isValid = control.validity.valid;

      if (!supportsUserInvalid) {
        const state = dirtyStateRef.current.get(control);
        const shouldShowFallback =
          forceFallback || Boolean(state?.hasInteracted && state?.hasBlurred);

        if (shouldShowFallback) {
          control.classList.toggle('user-invalid-fallback', !isValid);
          control.classList.toggle('user-valid-fallback', isValid);
        }
      }

      const isVisuallyInvalid = supportsUserInvalid
        ? control.matches(':user-invalid')
        : control.classList.contains('user-invalid-fallback');

      if (isVisuallyInvalid) {
        if (announce && !announcedRef.current.has(control)) {
          announceFieldError(control);
          announcedRef.current.add(control);
        }
        control.setAttribute('aria-invalid', 'true');
        linkErrorToControl(control, true);
        flaggedRef.current.add(control);
      } else if (
        flaggedRef.current.has(control) ||
        control.getAttribute('aria-invalid') !== 'true'
      ) {
        control.setAttribute('aria-invalid', 'false');
        linkErrorToControl(control, false);
        flaggedRef.current.delete(control);
        announcedRef.current.delete(control);

        if (announcedFieldRef.current === control) {
          clearTimeout(announceTimerRef.current);
          setAnnouncement('');
        }
      }
    },
    [announceFieldError, supportsUserInvalid]
  );

  // Initialize aria-invalid="false" on form controls when form mounts
  useEffect(() => {
    const formEl = formRef.current;
    if (!formEl || submittedData) return;

    formEl
      .querySelectorAll('input, select, textarea')
      .forEach((el) => syncControlState(el));
  }, [submittedData, syncControlState]);

  useEffect(() => {
    return () => {
      clearTimeout(announceTimerRef.current);
    };
  }, []);

  // Move focus to confirmation heading when summary panel opens
  useEffect(() => {
    if (submittedData && confirmationHeadingRef.current) {
      confirmationHeadingRef.current.focus();
    }
  }, [submittedData]);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    const control = event.target;
    if (!supportsUserInvalid) {
      const state = dirtyStateRef.current.get(control) || {
        hasInteracted: false,
        hasBlurred: false,
      };
      state.hasInteracted = true;
      dirtyStateRef.current.set(control, state);
    }

    if (control.tagName === 'SELECT') {
      syncControlState(control, { announce: true });
    } else if (control.hasAttribute('aria-invalid')) {
      syncControlState(control);
    }
  };

  const handleFieldBlur = (event) => {
    const control = event.target;
    if (!control?.matches?.('input, select, textarea')) return;

    if (!supportsUserInvalid) {
      const state = dirtyStateRef.current.get(control) || {
        hasInteracted: false,
        hasBlurred: false,
      };
      state.hasBlurred = true;
      if (control.value !== '') {
        state.hasInteracted = true;
      }
      dirtyStateRef.current.set(control, state);
    }

    syncControlState(control, { announce: true });
  };

  const handleInvalidCapture = (event) => {
    // Prevent native browser tooltip bubble so our inline error message is shown cleanly
    event.preventDefault();
    const control = event.target;
    if (!control?.matches?.('input, select, textarea')) return;

    if (!supportsUserInvalid) {
      dirtyStateRef.current.set(control, {
        hasInteracted: true,
        hasBlurred: true,
      });
    }

    announcedRef.current.add(control);
    syncControlState(control, { forceFallback: true });

    // Focus the first invalid control once per failed submit attempt
    if (!submitFocusScheduledRef.current && formRef.current) {
      submitFocusScheduledRef.current = true;
      requestAnimationFrame(() => {
        submitFocusScheduledRef.current = false;
        const firstInvalid = formRef.current?.querySelector(':invalid');
        firstInvalid?.focus();
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formEl = formRef.current;
    if (!formEl) return;

    if (!formEl.checkValidity()) {
      const firstInvalid = formEl.querySelector(':invalid');
      firstInvalid?.focus();
      return;
    }

    setSubmittedData({ ...values });
  };

  const handleEditForm = () => {
    setCopied(false);
    setSubmittedData(null);
  };

  const handleResetForm = () => {
    setValues(INITIAL_VALUES);
    setSubmittedData(null);
    setCopied(false);
    setAnnouncement('');
    dirtyStateRef.current = new WeakMap();
    flaggedRef.current = new WeakSet();
    announcedRef.current = new WeakSet();
  };

  const handleCopySummary = async () => {
    if (!submittedData || typeof navigator === 'undefined' || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(buildEnquiryText(submittedData));
      setCopied(true);
      setAnnouncement('Project enquiry summary copied to clipboard.');
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard permission denied; fallback is mailto/WhatsApp links
    }
  };

  const buildEnquiryText = (data) => {
    const lines = [
      `Name: ${data.name}`,
      `Work Email: ${data.email}`,
      data.company ? `Company: ${data.company}` : null,
      `Service Required: ${data.service}`,
      data.budget ? `Project Budget: ${data.budget}` : null,
      '',
      'Project Description:',
      data.description,
    ].filter((line) => line !== null);
    return lines.join('\n');
  };

  const mailtoHref = submittedData
    ? `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        `Project Enquiry — ${submittedData.service} (${submittedData.name})`
      )}&body=${encodeURIComponent(buildEnquiryText(submittedData))}`
    : '';

  const whatsappHref = submittedData
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
        `Hi SCALAROW, here are my project enquiry details:\n\n${buildEnquiryText(
          submittedData
        )}`
      )}`
    : siteConfig.whatsappUrl;

  return (
    <div className="contact-page">
      <SeoHead route="/contact" />

      <div className="contact-split">
        {/* Left 5 Cols: Dark Editorial Panel */}
        <aside className="contact-panel-dark" aria-label="Direct studio contact">
          <div className="contact-panel-dark__top">
            <span className="eyebrow eyebrow--on-dark">CONTACT SCALAROW</span>
            <h1 className="display-h1">Let&apos;s talk about what you&apos;re building.</h1>
            <p className="contact-panel-dark__lead">
              Whether you need a fast custom website, an internal operations tool, or practical
              workflow automation, you will speak directly with the people who design and build
              the system.
            </p>

            <div className="contact-whatsapp-box">
              <h2 className="contact-whatsapp-box__title">Prefer a direct conversation?</h2>
              <p className="contact-whatsapp-box__desc">
                Message us on WhatsApp to share a quick overview, ask a technical question, or
                schedule a focused discovery call.
              </p>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp-btn"
              >
                <MessageCircle size={18} aria-hidden="true" />
                <span>{siteConfig.whatsappDisplay}</span>
              </a>
            </div>
          </div>

          <div className="contact-details-list">
            <div className="contact-detail-item">
              <Mail size={20} className="contact-detail-item__icon" aria-hidden="true" />
              <div>
                <span className="contact-detail-item__label">Direct Email</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="contact-detail-item__value contact-detail-item__link"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="contact-detail-item">
              <MapPin size={20} className="contact-detail-item__icon" aria-hidden="true" />
              <div>
                <span className="contact-detail-item__label">Studio</span>
                <span className="contact-detail-item__value">{siteConfig.location}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Right 7 Cols: Light Enquiry Form / Honest Summary */}
        <section className="contact-panel-light" aria-labelledby="enquiry-heading">
          <div className="contact-form-wrapper">
            {/* Single polite live region for field validation announcements */}
            <div aria-live="polite" className="visually-hidden">
              {announcement}
            </div>

            {!submittedData ? (
              <>
                <div className="contact-form-header">
                  <span className="eyebrow">PROJECT ENQUIRY</span>
                  <h2 id="enquiry-heading" className="display-h2">
                    Tell us about your project
                  </h2>
                  <p className="contact-form-header__sub">
                    Complete the brief below to prepare a structured project summary you can send
                    directly via email or WhatsApp.
                  </p>
                </div>

                <form
                  ref={formRef}
                  className="contact-form"
                  onSubmit={handleSubmit}
                  onInvalidCapture={handleInvalidCapture}
                  onBlurCapture={handleFieldBlur}
                >
                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label htmlFor="contact-name" className="contact-field__label">
                        Name
                        <span className="contact-field__required" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <span id="name-hint" className="contact-field__hint">
                        Your full name or how you&apos;d like us to address you.
                      </span>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        enterKeyHint="next"
                        className="contact-input"
                        value={values.name}
                        onChange={handleFieldChange}
                        aria-describedby="name-hint"
                        data-error="name-error"
                      />
                      <div id="name-error" className="contact-field__error">
                        <AlertCircle size={16} role="img" aria-label="Error" />
                        <span>Please enter your name.</span>
                      </div>
                    </div>

                    <div className="contact-field">
                      <label htmlFor="contact-email" className="contact-field__label">
                        Work Email
                        <span className="contact-field__required" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <span id="email-hint" className="contact-field__hint">
                        Format: you@company.com
                      </span>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        autoCorrect="off"
                        autoCapitalize="none"
                        spellCheck={false}
                        enterKeyHint="next"
                        className="contact-input"
                        value={values.email}
                        onChange={handleFieldChange}
                        aria-describedby="email-hint"
                        data-error="email-error"
                      />
                      <div id="email-error" className="contact-field__error">
                        <AlertCircle size={16} role="img" aria-label="Error" />
                        <span>Enter an email address in the format you@company.com.</span>
                      </div>
                    </div>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-company" className="contact-field__label">
                      Company
                      <span className="contact-field__optional">(Optional)</span>
                    </label>
                    <span id="company-hint" className="contact-field__hint">
                      Your organization or team name, if applicable.
                    </span>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      enterKeyHint="next"
                      className="contact-input"
                      value={values.company}
                      onChange={handleFieldChange}
                      aria-describedby="company-hint"
                    />
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label htmlFor="contact-service" className="contact-field__label">
                        Service Required
                        <span className="contact-field__required" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <span id="service-hint" className="contact-field__hint">
                        Choose the primary area you need help with.
                      </span>
                      <select
                        id="contact-service"
                        name="service"
                        required
                        className="contact-select"
                        value={values.service}
                        onChange={handleFieldChange}
                        aria-describedby="service-hint"
                        data-error="service-error"
                      >
                        <option value="">Select a service…</option>
                        {servicesData.map((service) => (
                          <option key={service.id} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                        <option value="Multiple Services / Not Sure Yet">
                          Multiple Services / Not Sure Yet
                        </option>
                      </select>
                      <div id="service-error" className="contact-field__error">
                        <AlertCircle size={16} role="img" aria-label="Error" />
                        <span>Please select a service area.</span>
                      </div>
                    </div>

                    <div className="contact-field">
                      <label htmlFor="contact-budget" className="contact-field__label">
                        Project Budget
                        <span className="contact-field__optional">(Optional)</span>
                      </label>
                      <span id="budget-hint" className="contact-field__hint">
                        Helps us recommend the right-sized architecture.
                      </span>
                      <select
                        id="contact-budget"
                        name="budget"
                        className="contact-select"
                        value={values.budget}
                        onChange={handleFieldChange}
                        aria-describedby="budget-hint"
                      >
                        <option value="">Select an estimated range…</option>
                        {BUDGET_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="contact-field">
                    <div className="contact-field__label-row">
                      <label htmlFor="contact-description" className="contact-field__label">
                        Project Description
                        <span className="contact-field__required" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <span
                        className={`tabular-num contact-field__counter${
                          values.description.length >= 20 ? ' is-met' : ''
                        }`}
                      >
                        {values.description.length} / 20 min
                      </span>
                    </div>
                    <span id="description-hint" className="contact-field__hint">
                      Minimum 20 characters — share your goals, current bottleneck, or target
                      timeline.
                    </span>
                    <textarea
                      id="contact-description"
                      name="description"
                      required
                      minLength={20}
                      rows={5}
                      enterKeyHint="done"
                      className="contact-textarea"
                      value={values.description}
                      onChange={handleFieldChange}
                      aria-describedby="description-hint"
                      data-error="description-error"
                    />
                    <div id="description-error" className="contact-field__error">
                      <AlertCircle size={16} role="img" aria-label="Error" />
                      <span>
                        Please describe your project in at least 20 characters so we can
                        prepare a useful response.
                      </span>
                    </div>
                  </div>

                  <div className="contact-form__actions">
                    <button type="submit" className="btn btn--primary">
                      <span>Prepare Enquiry</span>
                      <Send size={17} aria-hidden="true" />
                    </button>
                    <span className="contact-form__note">
                      Generates a ready-to-send summary for Email or WhatsApp.
                    </span>
                  </div>
                </form>
              </>
            ) : (
              <div className="contact-confirmation">
                <div className="contact-confirmation__header">
                  <span className="contact-confirmation__badge">
                    <CheckCircle2 size={15} aria-hidden="true" />
                    <span>Enquiry Summary Ready</span>
                  </span>
                  <h2
                    id="enquiry-heading"
                    ref={confirmationHeadingRef}
                    tabIndex={-1}
                    className="display-h2"
                  >
                    Review &amp; send your enquiry
                  </h2>
                  <p className="contact-confirmation__desc">
                    This site runs as a static frontend with no automatic mail server, so nothing
                    has been transmitted yet. Use one of the direct channels below to send your
                    pre-filled brief straight to our studio.
                  </p>
                </div>

                <dl className="contact-summary-list">
                  <div className="contact-summary-item">
                    <dt>Name</dt>
                    <dd>{submittedData.name}</dd>
                  </div>
                  <div className="contact-summary-item">
                    <dt>Work Email</dt>
                    <dd>{submittedData.email}</dd>
                  </div>
                  {submittedData.company && (
                    <div className="contact-summary-item">
                      <dt>Company</dt>
                      <dd>{submittedData.company}</dd>
                    </div>
                  )}
                  <div className="contact-summary-item">
                    <dt>Service Required</dt>
                    <dd>{submittedData.service}</dd>
                  </div>
                  {submittedData.budget && (
                    <div className="contact-summary-item">
                      <dt>Project Budget</dt>
                      <dd>{submittedData.budget}</dd>
                    </div>
                  )}
                  <div className="contact-summary-item">
                    <dt>Project Description</dt>
                    <dd>{submittedData.description}</dd>
                  </div>
                </dl>

                <div className="contact-confirmation__actions">
                  <a href={mailtoHref} className="btn btn--primary">
                    <Mail size={17} aria-hidden="true" />
                    <span>Open Pre-filled Email</span>
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-whatsapp-btn"
                  >
                    <MessageCircle size={17} aria-hidden="true" />
                    <span>Send via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    className="btn btn--outline"
                    onClick={handleCopySummary}
                  >
                    {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
                    <span>{copied ? 'Copied Summary' : 'Copy Summary'}</span>
                  </button>
                </div>

                <div className="contact-confirmation__secondary">
                  <button
                    type="button"
                    className="contact-text-btn"
                    onClick={handleEditForm}
                  >
                    Edit Details
                  </button>
                  <button
                    type="button"
                    className="contact-text-btn"
                    onClick={handleResetForm}
                  >
                    Reset Form
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
