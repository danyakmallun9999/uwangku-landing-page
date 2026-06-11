"use client";

import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "./ThemeProvider";

// ─── Brand gradient ───────────────────────────────────────────────────────────
// Colours are boosted so that after MeshPhongMaterial diffuse shading
// the rendered surface still looks vivid (not dull/muted).
//
// Physics:  display ≈ sRGB_encode( vertex_linear × totalLight )
// With ambient 0.70 + key 0.55 on a front face → totalLight ≈ 1.25
// Teal G linear (≈0.45) × 1.55 × 1.25 = 0.87  →  sRGB ≈ 0.94  ← very vivid
const COLOR_BOTTOM = new THREE.Color("#0FAF9A").multiplyScalar(1.55);
const COLOR_MIDDLE = new THREE.Color("#35D6A3").multiplyScalar(1.55);
const COLOR_TOP    = new THREE.Color("#FFE68A").multiplyScalar(1.4);
const GRADIENT_MID = 0.5;
const TARGET_HEIGHT = 2.6; // world-unit height — comfortable size with padding

function sampleGradient(t: number, out: THREE.Color): void {
  const tc = Math.max(0, Math.min(1, t));
  if (tc <= GRADIENT_MID) {
    out.copy(COLOR_BOTTOM).lerp(COLOR_MIDDLE, tc / GRADIENT_MID);
  } else {
    out.copy(COLOR_MIDDLE).lerp(COLOR_TOP, (tc - GRADIENT_MID) / (1 - GRADIENT_MID));
  }
}

// ─── 3-D Logo ─────────────────────────────────────────────────────────────────

function LogoModel({ paused }: { paused: boolean }) {
  const { scene } = useGLTF("/uwangku-logo.glb");
  const groupRef  = useRef<THREE.Group>(null);

  const { object, fitScale } = useMemo(() => {
    const root = scene.clone(true);

    // World-space bounding box BEFORE centering
    const box    = new THREE.Box3().setFromObject(root);
    const size   = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const yMinOrig = box.min.y;
    const yRange   = (box.max.y - box.min.y) || 1;

    // Centre at origin, propagate matrices
    root.position.sub(center);
    root.updateWorldMatrix(false, true);

    // After centering the Y baseline shifts by -center.y
    const yMinAdj = yMinOrig - center.y;

    const vWorld = new THREE.Vector3();
    const vColor = new THREE.Color();

    root.traverse((child) => {
      if (!(child as THREE.Mesh).isMesh) return;
      const mesh = child as THREE.Mesh;

      // Each mesh owns its own geometry buffer (no sharing)
      const geo = mesh.geometry.clone();
      mesh.geometry = geo;

      const pos    = geo.attributes.position;
      const n      = pos.count;
      const colors = new Float32Array(n * 3);
      const mw     = mesh.matrixWorld; // already propagated above

      for (let i = 0; i < n; i++) {
        vWorld.fromBufferAttribute(pos, i).applyMatrix4(mw);
        sampleGradient((vWorld.y - yMinAdj) / yRange, vColor);
        colors[i * 3]     = vColor.r;
        colors[i * 3 + 1] = vColor.g;
        colors[i * 3 + 2] = vColor.b;
      }

      geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      // MeshPhongMaterial = classic plastic: vivid diffuse + specular highlight
      mesh.material = new THREE.MeshPhongMaterial({
        vertexColors: true,
        shininess:    90,
        specular:     new THREE.Color("#d0fff8"),
        side:         THREE.DoubleSide, // never lose a face on rotation
        transparent:  false,
        opacity:      1,
      });

      mesh.castShadow    = false;
      mesh.receiveShadow = false;
    });

    const fit = TARGET_HEIGHT / (size.y || 1);
    return { object: root, fitScale: fit };
  }, [scene]);

  useFrame((_, delta) => {
    if (paused || !groupRef.current) return;
    groupRef.current.rotation.y += Math.min(delta, 0.05) * 0.25;
  });

  return (
    <Float speed={1.0} rotationIntensity={0.04} floatIntensity={0.2} floatingRange={[-0.03, 0.03]}>
      {/* Isometric-ish angle that shows both front face and extruded depth */}
      <group ref={groupRef} scale={fitScale} rotation={[0.28, -0.55, 0]}>
        <primitive object={object} />
      </group>
    </Float>
  );
}

// ─── Lighting ─────────────────────────────────────────────────────────────────

function BrandLights() {
  return (
    <>
      {/*
       * Ambient 0.70 keeps every face (including side extrusions) bright.
       * Key 0.55 from front-top-right:
       *   – drives Phong specular highlight (the plastic sheen)
       *   – total on lit face ≈ 1.25 × vertex → vivid overbright
       * Rim 0.20 from behind outlines the silhouette edges clearly.
       */}
      <ambientLight intensity={0.70} />
      <directionalLight position={[ 3,  8,  6]} intensity={0.55} color="#ffffff" />
      <directionalLight position={[-4,  3,  5]} intensity={0.14} color="#ffffff" />
      <directionalLight position={[ 0,  3, -6]} intensity={0.20} color="#ffffff" />
      <directionalLight position={[ 0, -5,  3]} intensity={0.07} color="#ffffff" />
    </>
  );
}

// ─── Canvas ───────────────────────────────────────────────────────────────────

export default function Logo3D() {
  const { theme }       = useTheme();
  const containerRef    = useRef<HTMLDivElement>(null);
  const [visible, setVisible]             = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq     = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const paused = !visible || reducedMotion;
  void theme;

  return (
    <div ref={containerRef} className="relative h-[420px] w-full md:h-[520px]">
      {/* Brand glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="h-80 w-80 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(15,175,154,0.14) 0%, rgba(255,230,138,0.07) 55%, transparent 80%)",
          }}
        />
      </div>

      <Canvas
        dpr={[1, 2]}
        frameloop={paused ? "never" : "always"}
        camera={{ position: [0, 0.8, 6], fov: 44 }}
        style={{ width: "100%", height: "100%" }}
        gl={{
          antialias:       true,
          alpha:           true,
          powerPreference: "high-performance",
          toneMapping:     THREE.NoToneMapping,
        }}
        onCreated={({ gl }) => {
          gl.outputColorSpace = THREE.SRGBColorSpace;
        }}
      >
        <Suspense fallback={null}>
          <BrandLights />
          <LogoModel paused={paused} />

          {/* Free rotation like 3dsvg — no angle limits, smooth damping */}
          <OrbitControls
            enableZoom
            zoomSpeed={0.5}
            enablePan={false}
            autoRotate={false}
            minDistance={3}
            maxDistance={10}
            dampingFactor={0.06}
            enableDamping
          />
        </Suspense>
      </Canvas>

      {/* Interaction hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-[var(--outline)] bg-[var(--surface-container)] px-4 py-2 opacity-50 transition-opacity hover:opacity-100">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
        <span className="text-xs font-medium">Drag untuk memutar</span>
      </div>
    </div>
  );
}

useGLTF.preload("/uwangku-logo.glb");
