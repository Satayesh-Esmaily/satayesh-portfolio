"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CodeConstellation } from "./CodeConstellation";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";

function SceneFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="grid-bg absolute inset-0" />
      <div className="relative h-56 w-56 rounded-full border border-line bg-ink-raised/40 blur-0">
        <div className="absolute inset-6 animate-spin-slow rounded-full border border-dashed border-accent-dim" />
        <div className="absolute inset-14 rounded-full border border-line" />
      </div>
    </div>
  );
}

export function Scene() {
  const reducedMotion = useReducedMotion();
  const webglSupported = useWebGLSupport();
  const [isMobile, setIsMobile] = useState(false);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    function handleMove(event: PointerEvent) {
      pointer.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      };
    }
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [reducedMotion]);

  if (webglSupported === false) {
    return <SceneFallback />;
  }

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Suspense fallback={<SceneFallback />}>
        <Canvas
          dpr={isMobile ? [1, 1.4] : [1, 2]}
          camera={{ position: [0, 0, 6], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <CodeConstellation reducedMotion={reducedMotion} isMobile={isMobile} pointer={pointer} />
        </Canvas>
      </Suspense>
    </div>
  );
}
