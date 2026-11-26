import React, { Component, Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Lightformer } from '@react-three/drei';
import * as THREE from 'three';
import './HeroLattice3D.css';

const PALETTE = {
  aqua: '#CBF3F0',
  teal: '#2EC4B6',
  orange: '#FF9F1C',
  orangeWarm: '#FFBF69',
  white: '#FFFFFF',
};

/**
 * Checks if WebGL is available in the current browser environment.
 */
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

/**
 * Subscribes to the user's prefers-reduced-motion media query.
 */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (event) => setReduced(event.matches);

    if (mql.addEventListener) {
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    }
    mql.addListener(onChange);
    return () => mql.removeListener(onChange);
  }, []);

  return reduced;
}

/**
 * React ErrorBoundary so any WebGL/Three.js failure degrades gracefully
 * to the geometric SVG fallback without crashing the hero.
 */
class HeroErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // Fallback UI handles presentation; no-op avoids noisy uncaught errors.
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

/**
 * Lightweight Tropical Sunrise geometric SVG fallback for non-WebGL or error states.
 */
function HeroLatticeFallback() {
  return (
    <div className="hero-lattice__fallback" aria-hidden="true">
      <svg
        className="hero-lattice__fallback-svg"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="scalar-aqua-grad" x1="110" y1="90" x2="290" y2="310" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.92" />
            <stop offset="48%" stopColor="#CBF3F0" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#2EC4B6" stopOpacity="0.45" />
          </linearGradient>
          <linearGradient id="scalar-orange-grad" x1="50" y1="120" x2="350" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF9F1C" />
            <stop offset="100%" stopColor="#FFBF69" />
          </linearGradient>
        </defs>

        {/* Orbital ribbons */}
        <g className="hero-lattice__fallback-orbit">
          <ellipse
            cx="200"
            cy="200"
            rx="154"
            ry="66"
            transform="rotate(-24 200 200)"
            stroke="url(#scalar-orange-grad)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <ellipse
            cx="200"
            cy="200"
            rx="136"
            ry="54"
            transform="rotate(36 200 200)"
            stroke="#FFBF69"
            strokeWidth="4.5"
            strokeDasharray="10 8"
            strokeLinecap="round"
          />
          {/* Precision teal nodes */}
          <circle cx="66" cy="256" r="11" fill="#2EC4B6" />
          <circle cx="334" cy="144" r="9" fill="#2EC4B6" />
          <circle cx="288" cy="306" r="7.5" fill="#2EC4B6" />
          <circle cx="114" cy="96" r="6.5" fill="#2EC4B6" />
        </g>

        {/* Central translucent aqua prism */}
        <g className="hero-lattice__fallback-core">
          <polygon
            points="200,82 292,158 256,286 144,286 108,158"
            fill="url(#scalar-aqua-grad)"
            stroke="#2EC4B6"
            strokeOpacity="0.5"
            strokeWidth="2"
          />
          <polygon
            points="200,82 292,158 200,206 108,158"
            fill="#FFFFFF"
            fillOpacity="0.48"
          />
          <polygon
            points="200,206 292,158 256,286"
            fill="#CBF3F0"
            fillOpacity="0.55"
          />
          <polygon
            points="200,206 108,158 144,286"
            fill="#2EC4B6"
            fillOpacity="0.22"
          />
          <circle cx="200" cy="200" r="18" fill="#FF9F1C" fillOpacity="0.9" />
          <circle cx="200" cy="200" r="8" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
}

/**
 * "The Scalar Lattice" — procedural Three.js architectural sculpture.
 */
function ScalarLatticeSculpture({ scrollProgress, reducedMotion }) {
  const rootRef = useRef(null);
  const innerCoreRef = useRef(null);
  const primaryOrbitRef = useRef(null);
  const secondaryOrbitRef = useRef(null);
  const nodesGroupRef = useRef(null);
  const knotRef = useRef(null);

  // Precompute orbital node transforms along two tilted rings
  const orbitalNodes = useMemo(() => {
    const items = [];
    const ringACount = 5;
    for (let i = 0; i < ringACount; i += 1) {
      const angle = (i / ringACount) * Math.PI * 2;
      const radius = 2.08;
      items.push({
        id: `ringA-${i}`,
        type: i % 2 === 0 ? 'sphere' : 'capsule',
        position: [Math.cos(angle) * radius, Math.sin(angle) * radius * 0.34, Math.sin(angle) * radius * 0.94],
        rotation: [angle * 0.5, angle, Math.PI / 4],
        scale: i % 2 === 0 ? 0.13 : 0.1,
      });
    }
    const ringBCount = 4;
    for (let i = 0; i < ringBCount; i += 1) {
      const angle = (i / ringBCount) * Math.PI * 2 + 0.4;
      const radius = 1.66;
      items.push({
        id: `ringB-${i}`,
        type: 'sphere',
        position: [Math.cos(angle) * radius * 0.9, Math.sin(angle) * radius, Math.sin(angle) * 0.45],
        rotation: [0, angle, 0],
        scale: 0.095,
      });
    }
    return items;
  }, []);

  useFrame((state, rawDelta) => {
    const root = rootRef.current;
    if (!root) return;

    const dt = Math.min(rawDelta, 0.05);
    const damp = 1 - Math.exp(-4.5 * dt);

    // Resolve scroll progress from prop or window.scrollY
    let scrollFactor = 0;
    if (typeof scrollProgress === 'number' && Number.isFinite(scrollProgress)) {
      scrollFactor = THREE.MathUtils.clamp(scrollProgress, 0, 1);
    } else if (typeof window !== 'undefined') {
      const vh = Math.max(window.innerHeight, 1);
      scrollFactor = THREE.MathUtils.clamp(window.scrollY / vh, 0, 1);
    }

    if (reducedMotion) {
      root.rotation.x = 0.16;
      root.rotation.y = -0.32;
      root.scale.setScalar(1);
      return;
    }

    // Subtle cursor parallax + scroll-driven rotation & expansion
    const targetRotX = state.pointer.y * 0.22 + 0.14 + scrollFactor * 0.32;
    const targetRotY = state.pointer.x * 0.34 - 0.28 + scrollFactor * 0.65;
    const targetScale = 1 + scrollFactor * 0.08;

    root.rotation.x = THREE.MathUtils.lerp(root.rotation.x, targetRotX, damp);
    root.rotation.y = THREE.MathUtils.lerp(root.rotation.y, targetRotY, damp);
    const nextScale = THREE.MathUtils.lerp(root.scale.x, targetScale, damp);
    root.scale.setScalar(nextScale);

    // Smooth continuous sculptural motion
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y += dt * 0.24;
      innerCoreRef.current.rotation.z += dt * 0.12;
    }
    if (knotRef.current) {
      knotRef.current.rotation.x -= dt * 0.16;
      knotRef.current.rotation.y += dt * 0.2;
    }
    if (primaryOrbitRef.current) {
      primaryOrbitRef.current.rotation.z += dt * 0.18;
    }
    if (secondaryOrbitRef.current) {
      secondaryOrbitRef.current.rotation.z -= dt * 0.22;
    }
    if (nodesGroupRef.current) {
      nodesGroupRef.current.rotation.y += dt * 0.28;
      nodesGroupRef.current.rotation.x += dt * 0.08;
    }
  });

  const latticeBody = (
    <group ref={rootRef} rotation={[0.14, -0.28, 0]}>
      {/* Central Translucent Aqua Prisms */}
      <group ref={innerCoreRef}>
        {/* Primary Octahedral Prism */}
        <mesh castShadow receiveShadow>
          <octahedronGeometry args={[1.05, 0]} />
          <meshPhysicalMaterial
            color={PALETTE.aqua}
            transmission={0.72}
            roughness={0.14}
            ior={1.45}
            thickness={0.9}
            clearcoat={0.8}
            clearcoatRoughness={0.12}
            attenuationColor={PALETTE.teal}
            attenuationDistance={2.2}
          />
        </mesh>

        {/* Interlocking Faceted Icosahedron Core */}
        <mesh rotation={[0.4, 0.7, 0.2]}>
          <icosahedronGeometry args={[0.68, 0]} />
          <meshPhysicalMaterial
            color={PALETTE.aqua}
            transmission={0.72}
            roughness={0.14}
            ior={1.45}
            thickness={0.9}
            clearcoat={0.8}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Architectural Chamfered Box Satellites */}
        <mesh position={[1.18, 0.62, -0.35]} rotation={[0.6, 0.5, 0.3]}>
          <boxGeometry args={[0.42, 0.42, 0.42]} />
          <meshPhysicalMaterial
            color={PALETTE.aqua}
            transmission={0.72}
            roughness={0.14}
            ior={1.45}
            thickness={0.9}
            clearcoat={0.8}
          />
        </mesh>
        <mesh position={[-1.12, -0.58, 0.42]} rotation={[-0.4, 0.8, 0.5]}>
          <octahedronGeometry args={[0.34, 0]} />
          <meshPhysicalMaterial
            color={PALETTE.aqua}
            transmission={0.72}
            roughness={0.14}
            ior={1.45}
            thickness={0.9}
            clearcoat={0.8}
          />
        </mesh>
      </group>

      {/* Inner Brushed Warm-Orange TorusKnot Ribbon */}
      <mesh ref={knotRef} scale={0.78}>
        <torusKnotGeometry args={[1.05, 0.055, 140, 20, 2, 3]} />
        <meshStandardMaterial
          color={PALETTE.orangeWarm}
          metalness={0.55}
          roughness={0.28}
        />
      </mesh>

      {/* Primary Brushed Warm-Orange Orbital Ribbon */}
      <group rotation={[Math.PI * 0.36, -0.25, 0.3]}>
        <mesh ref={primaryOrbitRef}>
          <torusGeometry args={[2.08, 0.048, 24, 120]} />
          <meshStandardMaterial
            color={PALETTE.orange}
            metalness={0.55}
            roughness={0.28}
          />
        </mesh>
      </group>

      {/* Secondary Warm-Amber Orbital Ribbon */}
      <group rotation={[-Math.PI * 0.28, 0.42, -0.5]}>
        <mesh ref={secondaryOrbitRef}>
          <torusGeometry args={[1.66, 0.036, 20, 108]} />
          <meshStandardMaterial
            color={PALETTE.orangeWarm}
            metalness={0.55}
            roughness={0.28}
          />
        </mesh>
      </group>

      {/* Matte Teal Precision Nodes */}
      <group ref={nodesGroupRef}>
        {orbitalNodes.map((node) => (
          <mesh
            key={node.id}
            position={node.position}
            rotation={node.rotation}
          >
            {node.type === 'sphere' ? (
              <sphereGeometry args={[node.scale, 24, 24]} />
            ) : (
              <capsuleGeometry args={[node.scale * 0.65, node.scale * 1.4, 10, 18]} />
            )}
            <meshStandardMaterial
              color={PALETTE.teal}
              roughness={0.4}
              metalness={0.15}
            />
          </mesh>
        ))}
      </group>
    </group>
  );

  return (
    <Float
      speed={reducedMotion ? 0 : 1.4}
      rotationIntensity={reducedMotion ? 0 : 0.22}
      floatIntensity={reducedMotion ? 0 : 0.42}
      floatingRange={[-0.12, 0.12]}
    >
      {latticeBody}
    </Float>
  );
}

/**
 * Interactive 3D Hero Sculpture ("The Scalar Lattice") with studio lighting,
 * procedural Environment/Lightformers, WebGL/ErrorBoundary fallback, mobile SVG downgrade,
 * off-screen frameloop pause, and reduced-motion support.
 */
export default function HeroLattice3D({ scrollProgress, className = '' }) {
  const containerRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [isDesktopViewport, setIsDesktopViewport] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return true;
    return window.matchMedia('(min-width: 768px)').matches;
  });
  const [isInView, setIsInView] = useState(true);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setWebglSupported(supportsWebGL());
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = (event) => setIsDesktopViewport(event.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '120px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fallbackElement = <HeroLatticeFallback />;
  const shouldRenderCanvas = webglSupported && isDesktopViewport;

  return (
    <div
      ref={containerRef}
      className={`hero-lattice ${className}`.trim()}
      aria-hidden="true"
    >
      <div className="hero-lattice__aura" />

      {!shouldRenderCanvas ? (
        fallbackElement
      ) : (
        <HeroErrorBoundary fallback={fallbackElement}>
          <div className="hero-lattice__canvas-wrap">
            <Canvas
              frameloop={isInView && !reducedMotion ? 'always' : 'demand'}
              dpr={[1, 1.75]}
              camera={{ position: [0, 0.15, 6.2], fov: 38 }}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: 'high-performance',
              }}
            >
              {/* Studio 3-point lighting */}
              <ambientLight intensity={0.55} color={PALETTE.white} />
              <directionalLight
                position={[5, 6, 4]}
                intensity={2.2}
                color="#FFF3E0"
              />
              <pointLight
                position={[-5, -3, 3]}
                intensity={2.6}
                color={PALETTE.aqua}
                distance={18}
                decay={2}
              />
              <pointLight
                position={[2, -4, -4]}
                intensity={1.5}
                color={PALETTE.orange}
                distance={16}
                decay={2}
              />

              {/* Procedural Studio Reflections (zero external HDR URLs) */}
              <Environment resolution={256} frames={1}>
                <Lightformer
                  form="rect"
                  intensity={2.4}
                  color={PALETTE.white}
                  scale={[10, 4, 1]}
                  position={[0, 5, 2]}
                  rotation={[Math.PI / 2, 0, 0]}
                />
                <Lightformer
                  form="rect"
                  intensity={2.0}
                  color={PALETTE.orangeWarm}
                  scale={[6, 3, 1]}
                  position={[5, 1, 2]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <Lightformer
                  form="rect"
                  intensity={2.2}
                  color={PALETTE.aqua}
                  scale={[6, 4, 1]}
                  position={[-5, -1, 2]}
                  rotation={[0, Math.PI / 2, 0]}
                />
                <Lightformer
                  form="ring"
                  intensity={1.2}
                  color={PALETTE.white}
                  scale={[4, 4, 1]}
                  position={[0, -4, -3]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
              </Environment>

              <Suspense fallback={null}>
                <ScalarLatticeSculpture
                  scrollProgress={scrollProgress}
                  reducedMotion={reducedMotion}
                />
              </Suspense>
            </Canvas>
          </div>
        </HeroErrorBoundary>
      )}
    </div>
  );
}
