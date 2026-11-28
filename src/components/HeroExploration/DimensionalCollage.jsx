import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { prefersReducedMotion } from '../../utils/motion';
import './DimensionalCollage.css';

/**
 * Concept B — Dimensional Collage.
 * Layered paper-like and solid geometric planes rendered with native CSS 3D transforms,
 * GSAP staggered depth reveal, and restrained pointer parallax.
 */
export default function DimensionalCollage({ forceMobile = false }) {
  const stageRef = useRef(null);
  const layersRef = useRef([]);

  useEffect(() => {
    const stageEl = stageRef.current;
    if (!stageEl) return undefined;

    const reduced = prefersReducedMotion();

    // GSAP staggered depth reveal for collage layers
    let ctx;
    if (!reduced) {
      ctx = gsap.context(() => {
        gsap.from(layersRef.current.filter(Boolean), {
          y: 18,
          scale: 0.96,
          duration: 0.72,
          stagger: 0.075,
          ease: 'power3.out',
          clearProps: 'y,scale',
        });
      }, stageEl);
    }

    // Restrained pointer parallax only on fine-pointer non-mobile devices
    const canHover =
      typeof window !== 'undefined' &&
      !forceMobile &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (!canHover || reduced) {
      return () => ctx?.revert();
    }

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = null;

    const animate = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      stageEl.style.setProperty('--px', currentX.toFixed(4));
      stageEl.style.setProperty('--py', currentY.toFixed(4));

      if (Math.abs(targetX - currentX) > 0.002 || Math.abs(targetY - currentY) > 0.002) {
        rafId = requestAnimationFrame(animate);
      } else {
        rafId = null;
      }
    };

    const schedule = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const handlePointerMove = (event) => {
      if (event.pointerType === 'touch') return;
      const rect = stageEl.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      targetX = Math.max(-1, Math.min(1, nx));
      targetY = Math.max(-1, Math.min(1, ny));
      schedule();
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
      schedule();
    };

    stageEl.addEventListener('pointermove', handlePointerMove);
    stageEl.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      ctx?.revert();
      stageEl.removeEventListener('pointermove', handlePointerMove);
      stageEl.removeEventListener('pointerleave', handlePointerLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [forceMobile]);

  const setLayerRef = (index) => (el) => {
    layersRef.current[index] = el;
  };

  return (
    <div ref={stageRef} className="collage-stage" aria-hidden="true">
      <div className="collage-assembly">
        <div ref={setLayerRef(0)} className="collage-layer collage-layer--stone" />
        <div ref={setLayerRef(1)} className="collage-layer collage-layer--charcoal" />
        <div ref={setLayerRef(2)} className="collage-layer collage-layer--folded">
          <div className="collage-folded-sheet" />
        </div>
        <div ref={setLayerRef(3)} className="collage-layer collage-layer--rule" />
        <div ref={setLayerRef(4)} className="collage-layer collage-layer--teal" />
        <div ref={setLayerRef(5)} className="collage-layer collage-layer--orange" />
      </div>
    </div>
  );
}
