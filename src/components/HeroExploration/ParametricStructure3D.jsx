import { Component, Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';
import './ParametricStructure3D.css';

const PALETTE = {
  offWhite: '#F3F1EA',
  stone: '#E5E2D8',
  mutedTeal: '#78B9AE',
  deepTeal: '#4F8B82',
  orangeAccent: '#F28E1C',
  charcoal: '#23272E',
};

function supportsWebGL() {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl2') || canvas.getContext('webgl'))
    );
  } catch {
    return false;
  }
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

class ParametricErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {}
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

/**
 * Clean architectural SVG fallback for mobile viewports and non-WebGL environments.
 * Represents the same continuous curved parametric rib series without orbital rings or glow.
 */
function ParametricFallbackSVG() {
  const ribs = Array.from({ length: 18 }, (_, i) => {
    const t = i / 17;
    const x1 = 44 + t * 145;
    const y1 = 290 - Math.sin(t * Math.PI) * 38;
    const cx1 = 110 + t * 130;
    const cy1 = 42 + t * 48;
    const cx2 = 240 + t * 85;
    const cy2 = 76 + (1 - t) * 140;
    const x2 = 265 + t * 132;
    const y2 = 248 + Math.sin(t * Math.PI * 1.1) * 44;

    let stroke = '#2A2F37';
    let strokeWidth = '1.8';
    let opacity = '0.28';
    if (i === 11) {
      stroke = '#F28E1C';
      strokeWidth = '3.2';
      opacity = '0.95';
    } else if (i >= 5 && i <= 9) {
      stroke = '#599E93';
      strokeWidth = '2.4';
      opacity = '0.78';
    } else if (i % 2 === 0) {
      stroke = '#7B828E';
      strokeWidth = '2';
      opacity = '0.45';
    }

    return {
      id: i,
      d: `M ${x1.toFixed(1)} ${y1.toFixed(1)} C ${cx1.toFixed(1)} ${cy1.toFixed(1)}, ${cx2.toFixed(1)} ${cy2.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`,
      stroke,
      strokeWidth,
      opacity,
    };
  });

  return (
    <div className="parametric-stage__fallback" aria-hidden="true">
      <svg
        viewBox="0 0 440 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="parametric-stage__svg"
      >
        <ellipse cx="220" cy="306" rx="146" ry="14" fill="#15171A" fillOpacity="0.06" />
        {ribs.map((rib) => (
          <path
            key={rib.id}
            d={rib.d}
            stroke={rib.stroke}
            strokeWidth={rib.strokeWidth}
            strokeOpacity={rib.opacity}
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
}

/**
 * Architectural parametric ribbon pavilion composed of 26 curved structural ribs.
 * Each rib sweeps through a continuous hyperbolic curve with restrained matte materials.
 */
function ParametricRibbonSculpture({ reducedMotion }) {
  const rootRef = useRef(null);
  const ribRefs = useRef([]);
  const unfoldProgressRef = useRef(reducedMotion ? 1 : 0);

  const ribs = useMemo(() => {
    const count = 26;
    const list = [];

    for (let i = 0; i < count; i += 1) {
      const t = i / (count - 1);
      const u = t - 0.5; // -0.5 .. 0.5
      const zOffset = u * 2.45;
      const archLift = Math.cos(u * Math.PI * 0.85) * 1.45 + 0.55;
      const leanX = Math.sin(u * Math.PI * 1.15) * 0.55;
      const spreadX = 1.65 - Math.abs(u) * 0.45;

      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-spreadX, -0.95, zOffset * 0.72),
        new THREE.Vector3(-spreadX * 0.48 + leanX * 0.35, archLift * 0.65, zOffset * 0.92),
        new THREE.Vector3(leanX, archLift, zOffset),
        new THREE.Vector3(spreadX * 0.52 + leanX * 0.4, archLift * 0.52, zOffset * 0.88),
        new THREE.Vector3(spreadX, -0.95, zOffset * 0.68),
      ]);

      const geometry = new THREE.TubeGeometry(curve, 44, i === 17 ? 0.038 : 0.028, 10, false);

      let color = PALETTE.offWhite;
      let roughness = 0.82;
      if (i === 17) {
        // Single restrained orange structural datum rib
        color = PALETTE.orangeAccent;
        roughness = 0.55;
      } else if (i >= 8 && i <= 13) {
        // Muted teal architectural spine ribs
        color = i % 2 === 0 ? PALETTE.mutedTeal : PALETTE.deepTeal;
        roughness = 0.72;
      } else if (i % 3 === 0) {
        color = PALETTE.stone;
      }

      list.push({
        id: i,
        t,
        geometry,
        color,
        roughness,
      });
    }
    return list;
  }, []);

  useEffect(() => {
    return () => {
      ribs.forEach((rib) => rib.geometry.dispose());
    };
  }, [ribs]);

  useFrame((state, rawDelta) => {
    const root = rootRef.current;
    if (!root) return;

    if (reducedMotion) {
      root.rotation.set(0.18, -0.52, 0.04);
      root.scale.setScalar(1);
      return;
    }

    const dt = Math.min(rawDelta, 0.05);
    const time = state.clock.getElapsedTime();

    // Slow, single-pass architectural unfolding entrance
    if (unfoldProgressRef.current < 1) {
      unfoldProgressRef.current = Math.min(1, unfoldProgressRef.current + dt * 0.95);
    }
    const easedUnfold = 1 - Math.pow(1 - unfoldProgressRef.current, 3);

    // Restrained pointer parallax + gentle architectural drift
    const targetRotX = 0.18 + state.pointer.y * 0.08 + Math.sin(time * 0.25) * 0.02;
    const targetRotY = -0.52 + state.pointer.x * 0.14 + Math.cos(time * 0.2) * 0.04;
    const damp = 1 - Math.exp(-3.2 * dt);

    root.rotation.x = THREE.MathUtils.lerp(root.rotation.x, targetRotX, damp);
    root.rotation.y = THREE.MathUtils.lerp(root.rotation.y, targetRotY, damp);
    root.scale.setScalar(0.92 + easedUnfold * 0.08);

    // Subtle parametric wave passing smoothly through the ribs
    ribRefs.current.forEach((mesh, idx) => {
      if (!mesh) return;
      const rib = ribs[idx];
      if (!rib) return;
      const wave = Math.sin(time * 0.55 - rib.t * 3.4) * 0.025;
      const entranceLift = (1 - easedUnfold) * (rib.t - 0.5) * 0.22;
      mesh.rotation.z = wave + entranceLift;
      mesh.position.y = Math.sin(time * 0.45 + rib.t * 2.5) * 0.018;
    });
  });

  return (
    <group ref={rootRef} rotation={[0.18, -0.52, 0.04]} position={[0, -0.05, 0]}>
      {ribs.map((rib, idx) => (
        <mesh
          key={rib.id}
          ref={(el) => {
            ribRefs.current[idx] = el;
          }}
          geometry={rib.geometry}
          castShadow
          receiveShadow
        >
          <meshPhysicalMaterial
            color={rib.color}
            roughness={rib.roughness}
            metalness={0.04}
            clearcoat={0.08}
            clearcoatRoughness={0.65}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ParametricStructure3D({ forceMobileFallback = false }) {
  const containerRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [isDesktopViewport, setIsDesktopViewport] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return true;
    return window.matchMedia('(min-width: 768px)').matches;
  });
  const [isInView, setIsInView] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setWebglSupported(supportsWebGL());
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = (e) => setIsDesktopViewport(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: '100px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fallback = <ParametricFallbackSVG />;
  const showCanvas = webglSupported && isDesktopViewport && !forceMobileFallback;

  return (
    <div ref={containerRef} className="parametric-stage" aria-hidden="true">
      {!showCanvas ? (
        fallback
      ) : (
        <ParametricErrorBoundary fallback={fallback}>
          <div className="parametric-stage__canvas">
            <Canvas
              shadows
              frameloop={isInView && !reducedMotion ? 'always' : 'demand'}
              dpr={[1, 1.75]}
              camera={{ position: [0.2, 0.5, 6.2], fov: 36 }}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: 'high-performance',
              }}
            >
              <ambientLight intensity={0.65} color="#FAFAF8" />
              <directionalLight
                position={[4, 7, 5]}
                intensity={1.65}
                color="#FFF9EF"
                castShadow
                shadow-mapSize={[512, 512]}
              />
              <directionalLight
                position={[-5, 2, -3]}
                intensity={0.75}
                color="#D9EFEA"
              />

              <Environment resolution={128} frames={1}>
                <Lightformer
                  form="rect"
                  intensity={1.6}
                  color="#FFFFFF"
                  scale={[8, 4, 1]}
                  position={[0, 5, 2]}
                  rotation={[Math.PI / 2, 0, 0]}
                />
                <Lightformer
                  form="rect"
                  intensity={1.0}
                  color="#EAF4F2"
                  scale={[5, 4, 1]}
                  position={[-5, 1, 2]}
                  rotation={[0, Math.PI / 2, 0]}
                />
              </Environment>

              <Suspense fallback={null}>
                <ParametricRibbonSculpture reducedMotion={reducedMotion} />
                <ContactShadows
                  position={[0, -1.08, 0]}
                  opacity={0.22}
                  scale={8}
                  blur={2.4}
                  far={3}
                  color="#15171A"
                />
              </Suspense>
            </Canvas>
          </div>
        </ParametricErrorBoundary>
      )}
    </div>
  );
}
