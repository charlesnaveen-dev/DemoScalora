import { Component, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SeoHead from './components/SeoHead/SeoHead';
import { initLenis, scrollToTop } from './utils/motion';

const HomePage = lazy(() => import('./pages/Home/HomePage'));
const AboutPage = lazy(() => import('./pages/About/AboutPage'));
const ServicesPage = lazy(() => import('./pages/Services/ServicesPage'));
const ServiceDetailPage = lazy(() =>
  import('./pages/ServiceDetail/ServiceDetailPage')
);
const WorkPage = lazy(() => import('./pages/Work/WorkPage'));
const ProjectDetailPage = lazy(() =>
  import('./pages/Work/ProjectDetailPage')
);
const ContactPage = lazy(() => import('./pages/Contact/ContactPage'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop(true);
  }, [pathname]);

  return null;
}

function RouteFallback() {
  return (
    <div
      className="container"
      style={{ paddingBlock: '6rem', minHeight: '60vh' }}
      aria-live="polite"
    >
      <span className="eyebrow">LOADING</span>
    </div>
  );
}

function NotFoundPage() {
  return (
    <section
      className="container"
      style={{
        paddingBlock: 'clamp(5rem, 10vw, 9rem)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1.25rem',
      }}
      aria-labelledby="not-found-heading"
    >
      <SeoHead
        route="/404"
        title="Page Not Found | SCALAROW"
        description="The page you requested could not be found on SCALAROW."
      />
      <span className="eyebrow eyebrow--amber">404 / NOT FOUND</span>
      <h1 id="not-found-heading" className="display-h1">
        This route doesn&apos;t exist.
      </h1>
      <p className="lead-text" style={{ maxWidth: '46ch' }}>
        The page may have moved or the URL may be mistyped. Head back to the
        homepage to explore SCALAROW.
      </p>
      <Link to="/" className="btn btn--primary">
        <ArrowLeft size={16} aria-hidden="true" />
        <span>Back to Home</span>
      </Link>
    </section>
  );
}

class RouteErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <section
          className="container"
          style={{
            paddingBlock: 'clamp(5rem, 10vw, 8rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '1.25rem',
          }}
        >
          <span className="eyebrow eyebrow--amber">NAVIGATION NOTICE</span>
          <h1 className="display-h2">Unable to load this view.</h1>
          <p className="lead-text" style={{ maxWidth: '46ch' }}>
            A newer version of this page may be available. Reload to continue.
          </p>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
        </section>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  useEffect(() => {
    const destroyLenis = initLenis();
    return () => {
      destroyLenis?.();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="page-main">
        <RouteErrorBoundary>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/projects" element={<WorkPage />} />
              <Route path="/work/:slug" element={<ProjectDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </RouteErrorBoundary>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
