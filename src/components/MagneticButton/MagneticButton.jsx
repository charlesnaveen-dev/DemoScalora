import { useCallback, useEffect, useRef } from 'react';

const MAX_OFFSET_PX = 10;

/**
 * Reusable interactive wrapper/control that applies a subtle magnetic cursor
 * pull on fine-pointer hover devices when reduced motion is not preferred.
 * Accepts `as` (e.g. 'button', 'a', Link) and forwards all props cleanly.
 */
export default function MagneticButton({
  as: Component = 'button',
  strength = 0.26,
  className = '',
  style,
  children,
  onPointerMove,
  onPointerLeave,
  onBlur,
  ref: externalRef,
  ...rest
}) {
  const internalRef = useRef(null);
  const rafRef = useRef(null);
  const enabledRef = useRef(false);

  const setRefs = useCallback(
    (node) => {
      internalRef.current = node;
      if (typeof externalRef === 'function') {
        externalRef(node);
      } else if (externalRef && typeof externalRef === 'object') {
        externalRef.current = node;
      }
    },
    [externalRef]
  );

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateCapability = () => {
      enabledRef.current = hoverQuery.matches && !motionQuery.matches;
      if (!enabledRef.current && internalRef.current) {
        internalRef.current.style.transform = '';
      }
    };

    updateCapability();
    hoverQuery.addEventListener('change', updateCapability);
    motionQuery.addEventListener('change', updateCapability);

    return () => {
      hoverQuery.removeEventListener('change', updateCapability);
      motionQuery.removeEventListener('change', updateCapability);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const resetPosition = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    const el = internalRef.current;
    if (!el) return;
    el.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
    el.style.transform = 'translate3d(0px, 0px, 0px)';
  }, []);

  const handlePointerMove = (event) => {
    onPointerMove?.(event);
    if (!enabledRef.current || event.pointerType === 'touch') return;

    const el = internalRef.current;
    if (!el) return;

    const { clientX, clientY } = event;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const rawX = (clientX - (rect.left + rect.width / 2)) * strength;
      const rawY = (clientY - (rect.top + rect.height / 2)) * strength;
      const x = Math.max(-MAX_OFFSET_PX, Math.min(MAX_OFFSET_PX, rawX));
      const y = Math.max(-MAX_OFFSET_PX, Math.min(MAX_OFFSET_PX, rawY));

      el.style.transition = 'transform 0.12s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
    });
  };

  const handlePointerLeave = (event) => {
    onPointerLeave?.(event);
    if (enabledRef.current) {
      resetPosition();
    }
  };

  const handleBlur = (event) => {
    onBlur?.(event);
    if (enabledRef.current) {
      resetPosition();
    }
  };

  return (
    <Component
      ref={setRefs}
      className={className}
      style={style}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onBlur={handleBlur}
      {...rest}
    >
      {children}
    </Component>
  );
}
