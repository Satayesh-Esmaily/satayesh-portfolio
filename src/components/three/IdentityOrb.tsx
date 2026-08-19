"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";
import { identityTags } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ACCENT = "#4f46e5";
const SIGNAL = "#0d9488";

function Core({ reducedMotion }: { reducedMotion: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current && !reducedMotion) {
      ref.current.rotation.y += delta * 0.25;
      ref.current.rotation.x += delta * 0.08;
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.9, 1]} />
      <meshStandardMaterial color={ACCENT} wireframe roughness={0.3} metalness={0.5} />
    </mesh>
  );
}

function OrbitingTags({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const radius = 2.1;

  const items = useMemo(
    () =>
      identityTags.map((tag, i) => {
        const angle = (i / identityTags.length) * Math.PI * 2;
        return {
          tag,
          angle,
          y: Math.sin(i * 1.7) * 0.5,
          color: i % 2 === 0 ? ACCENT : SIGNAL,
        };
      }),
    []
  );

  useFrame((_, delta) => {
    if (group.current && !reducedMotion) {
      group.current.rotation.y += delta * 0.16;
    }
  });

  return (
    <group ref={group}>
      {items.map((item, i) => {
        const x = Math.cos(item.angle) * radius;
        const z = Math.sin(item.angle) * radius;
        return (
          <Float key={item.tag} speed={reducedMotion ? 0 : 1.4} floatIntensity={reducedMotion ? 0 : 0.7} rotationIntensity={0}>
            <group position={[x, item.y, z]}>
              <mesh>
                <sphereGeometry args={[0.06, 16, 16]} />
                <meshStandardMaterial color={item.color} emissive={item.color} emissiveIntensity={0.8} />
              </mesh>
              <Text
                position={[0, 0.24, 0]}
                fontSize={0.18}
                color="#16161c"
                anchorX="center"
                anchorY="middle"
                fillOpacity={0.75}
              >
                {item.tag}
              </Text>
            </group>
          </Float>
        );
      })}
    </group>
  );
}

function Rings() {
  const ring1 = useMemo(() => new THREE.EllipseCurve(0, 0, 2.1, 2.1).getPoints(80), []);
  const ring2 = useMemo(() => new THREE.EllipseCurve(0, 0, 1.5, 1.5).getPoints(80), []);

  return (
    <>
      <line rotation={[Math.PI / 2.3, 0, 0]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(ring1.flatMap((p) => [p.x, p.y, 0])), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color={ACCENT} transparent opacity={0.25} />
      </line>
      <line rotation={[Math.PI / 2.6, 0, 0]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(ring2.flatMap((p) => [p.x, p.y, 0])), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color={SIGNAL} transparent opacity={0.2} />
      </line>
    </>
  );
}

export function IdentityOrb() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="h-64 w-full overflow-hidden rounded-2xl border border-line bg-ink sm:h-72">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 1.4, 5.4], fov: 42 }} dpr={[1, 1.6]} gl={{ alpha: true, antialias: true }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[3, 3, 3]} intensity={1} color="#818cf8" />
          <hemisphereLight args={["#ffffff", "#e8e6dc", 0.7]} />
          <Core reducedMotion={reducedMotion} />
          <Rings />
          <OrbitingTags reducedMotion={reducedMotion} />
        </Canvas>
      </Suspense>
    </div>
  );
}
