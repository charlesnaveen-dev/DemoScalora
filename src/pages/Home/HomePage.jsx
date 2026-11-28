import { useRef } from 'react';
import SeoHead from '../../components/SeoHead/SeoHead';
import CentredHero from '../../components/CentredHeroExploration/CentredHero';
import PillarsStudyB from '../../components/PillarsExploration/PillarsStudyB';
import { useGsapReveal } from '../../utils/motion';
import StudioIntroSection from './sections/StudioIntroSection';
import SelectedWorkSection from './sections/SelectedWorkSection';
import ProcessBlueprintSection from './sections/ProcessBlueprintSection';
import WhyScalarowSection from './sections/WhyScalarowSection';
import HomeClosingSection from './sections/HomeClosingSection';
import './HomePage.css';

export default function HomePage() {
  const pageRef = useRef(null);

  useGsapReveal(pageRef);

  return (
    <div ref={pageRef} className="home-page">
      <SeoHead route="/" />

      {/* LOCKED SECTION 01 — Centred Editorial Hero (Parametric Horizon) */}
      <CentredHero bgVariant="horizon" />

      {/* SECTION A — Studio Introduction & Philosophy (Who We Are) */}
      <StudioIntroSection />

      {/* LOCKED SECTION 02 — What We Do: Unified Service-Row System */}
      <PillarsStudyB id="what-we-do" />

      {/* SECTION B — Selected Work Showcase (What We Have Built) */}
      <SelectedWorkSection />

      {/* SECTION C — Our Approach & Process Blueprint (How We Work) */}
      <ProcessBlueprintSection />

      {/* SECTION D — Why Scalarow Editorial Ledger (Differentiation) */}
      <WhyScalarowSection />

      {/* SECTION E — Contact & Final Conversation Bridge */}
      <HomeClosingSection />
    </div>
  );
}
