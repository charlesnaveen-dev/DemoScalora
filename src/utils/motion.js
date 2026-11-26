import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

let activeLenis = null;

/**
 * Returns true when the user has enabled reduced motion at the OS/browser level.
 */
export function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Scrolls to the top of the page, syncing with Lenis when active.
 */
export function scrollToTop(immediate = false) {
  if (typeof window === 'undefined') return;
  if (activeLenis) {
    activeLenis.scrollTo(0, { immediate: immediate || prefersReducedMotion() });
  } else {
    window.scrollTo({
      top: 0,
      behavior: immediate || prefersReducedMotion() ? 'auto' : 'smooth',
    });
  }
}

/**
 * Initializes Lenis smooth scrolling synchronized with GSAP ScrollTrigger.
 * Skips initialization and returns a no-op cleanup if prefers-reduced-motion is active.
 *
 * @param {object} [options] - Optional Lenis configuration overrides.
 * @returns {() => void} Cleanup function to destroy Lenis and detach ticker listeners.
 */
export function initLenis(options = {}) {
  if (typeof window === 'undefined' || prefersReducedMotion()) {
    return () => {};
  }

  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.5,
    ...options,
  });

  activeLenis = lenis;

  const onLenisScroll = () => {
    ScrollTrigger.update();
  };

  lenis.on('scroll', onLenisScroll);

  const tick = (time) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return () => {
    if (activeLenis === lenis) {
      activeLenis = null;
    }
    gsap.ticker.remove(tick);
    lenis.off('scroll', onLenisScroll);
    lenis.destroy();
  };
}

/**
 * Registers GSAP + ScrollTrigger reveal animations within a root element.
 * Guarantees content is never stuck at opacity: 0 before hydration, on JS failure,
 * or when prefers-reduced-motion is active.
 *
 * @param {HTMLElement | null} rootEl - Container element to scope animations.
 * @param {object} [options] - Animation configuration overrides.
 * @returns {() => void} Cleanup function that reverts the GSAP context.
 */
export function registerScrollAnimations(rootEl, options = {}) {
  if (typeof window === 'undefined' || !rootEl) {
    return () => {};
  }

  const {
    selector = '[data-reveal]',
    groupSelector = '[data-reveal-group]',
    itemSelector = '[data-reveal-item]',
    y = 24,
    duration = 0.72,
    stagger = 0.08,
    start = 'top 90%',
  } = options;

  const reduced = prefersReducedMotion();

  const ctx = gsap.context(() => {
    const singleTargets = gsap.utils.toArray(selector, rootEl);
    const groups = gsap.utils.toArray(groupSelector, rootEl);

    if (reduced) {
      // Strictly skip spatial movement and ensure full visibility
      if (singleTargets.length > 0) {
        gsap.set(singleTargets, { clearProps: 'all', opacity: 1 });
      }
      groups.forEach((group) => {
        const items = gsap.utils.toArray(itemSelector, group);
        if (items.length > 0) {
          gsap.set(items, { clearProps: 'all', opacity: 1 });
        }
      });
      return;
    }

    singleTargets.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y,
        duration,
        ease: 'power3.out',
        immediateRender: false,
        clearProps: 'all',
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
      });
    });

    groups.forEach((group) => {
      const items = gsap.utils.toArray(itemSelector, group);
      if (items.length === 0) return;

      gsap.from(items, {
        opacity: 0,
        y,
        duration,
        stagger,
        ease: 'power3.out',
        immediateRender: false,
        clearProps: 'all',
        scrollTrigger: {
          trigger: group,
          start,
          once: true,
        },
      });
    });
  }, rootEl);

  return () => {
    ctx.revert();
  };
}

/**
 * React hook for declarative GSAP + ScrollTrigger reveal animations inside a container ref.
 *
 * @param {React.RefObject<HTMLElement>} containerRef - Ref to the section/page root element.
 * @param {object} [options] - Optional configuration passed to registerScrollAnimations.
 */
export function useGsapReveal(containerRef, options = {}) {
  const {
    selector,
    groupSelector,
    itemSelector,
    y,
    duration,
    stagger,
    start,
  } = options;

  useEffect(() => {
    const rootEl = containerRef?.current;
    if (!rootEl) return undefined;

    return registerScrollAnimations(rootEl, {
      selector,
      groupSelector,
      itemSelector,
      y,
      duration,
      stagger,
      start,
    });
  }, [containerRef, selector, groupSelector, itemSelector, y, duration, stagger, start]);
}
