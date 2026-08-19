"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Line, Points, PointMaterial, Text } from "@react-three/drei";
import * as THREE from "three";

interface CodeConstellationProps {
  reducedMotion: boolean;
  isMobile: boolean;
  pointer: React.MutableRefObject<{ x: number; y: number }>;
}

const GLYPHS = ["{ }", "< />", "( )", "=>", "def", "const", "[ ]", "//"];
const ACCENT = "#4f46e5";
const ACCENT_SOFT = "#818cf8";
const SIGNAL = "#0d9488";
const INK_TEXT = "#16161c";

// Deterministic pseudo-random node cluster so the scene reads as
// "a developer's mental graph of code" rather than a random shape.
function buildNodes(count: number, radius: number) {
  const nodes: THREE.Vector3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    nodes.push(new THREE.Vector3(Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius));
  }
  return nodes;
}

function Nodes({ nodes }: { nodes: THREE.Vector3[] }) {
  return (
    <>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <icosahedronGeometry args={[i % 3 === 0 ? 0.075 : 0.05, 0]} />
          <meshStandardMaterial
            color={i % 4 === 0 ? SIGNAL : ACCENT}
            emissive={i % 4 === 0 ? SIGNAL : ACCENT}
            emissiveIntensity={0.55}
            roughness={0.25}
            metalness={0.5}
          />
        </mesh>
      ))}
    </>
  );
}

function Connections({ nodes }: { nodes: THREE.Vector3[] }) {
  const segments = useMemo(() => {
    const lines: [THREE.Vector3, THREE.Vector3][] = [];
    nodes.forEach((a, i) => {
      nodes.forEach((b, j) => {
        if (j <= i) return;
        if (a.distanceTo(b) < 1.35) lines.push([a, b]);
      });
    });
    return lines;
  }, [nodes]);

  return (
    <>
      {segments.map(([a, b], i) => (
        <Line key={i} points={[a, b]} color={ACCENT_SOFT} transparent opacity={0.4} lineWidth={0.7} />
      ))}
    </>
  );
}

function Glyphs({ reducedMotion }: { reducedMotion: boolean }) {
  const positions = useMemo(
    () => [
      new THREE.Vector3(-2.4, 1.1, 0.6),
      new THREE.Vector3(2.2, -0.6, 0.3),
      new THREE.Vector3(-1.6, -1.4, -0.4),
      new THREE.Vector3(1.9, 1.5, -0.5),
      new THREE.Vector3(0.2, 2.1, 0.8),
      new THREE.Vector3(-0.3, -2.2, 0.2),
      new THREE.Vector3(-2.6, -0.3, -0.6),
      new THREE.Vector3(2.7, 0.5, -0.7),
    ],
    []
  );

  return (
    <>
      {positions.map((pos, i) => (
        <Float
          key={i}
          speed={reducedMotion ? 0 : 1.2 + (i % 3) * 0.25}
          floatIntensity={reducedMotion ? 0 : 1}
          rotationIntensity={reducedMotion ? 0 : 0.3}
        >
          <Text position={pos} fontSize={0.34} color={INK_TEXT} anchorX="center" anchorY="middle" fillOpacity={0.4}>
            {GLYPHS[i % GLYPHS.length]}
          </Text>
        </Float>
      ))}
    </>
  );
}

// Extra scattered geometric primitives — pure decoration, gives the scene
// more visual density and "3D-ness" beyond the node cluster.
function FloatingShapes({ reducedMotion, isMobile }: { reducedMotion: boolean; isMobile: boolean }) {
  const shapes = useMemo(
    () => [
      { pos: new THREE.Vector3(-3.1, 1.8, -1.2), geo: "torus", color: ACCENT, scale: 0.32 },
      { pos: new THREE.Vector3(3.2, -1.6, -1), geo: "octahedron", color: SIGNAL, scale: 0.3 },
      { pos: new THREE.Vector3(-3, -2, -0.6), geo: "box", color: ACCENT_SOFT, scale: 0.24 },
      { pos: new THREE.Vector3(3.1, 2, -0.4), geo: "dodecahedron", color: ACCENT, scale: 0.26 },
      { pos: new THREE.Vector3(0, -2.9, -1.4), geo: "torus", color: SIGNAL, scale: 0.22 },
    ],
    []
  );

  if (isMobile) return null;

  return (
    <>
      {shapes.map((shape, i) => (
        <Float
          key={i}
          speed={reducedMotion ? 0 : 0.9 + i * 0.15}
          floatIntensity={reducedMotion ? 0 : 1.4}
          rotationIntensity={reducedMotion ? 0 : 0.6}
        >
          <mesh position={shape.pos} scale={shape.scale}>
            {shape.geo === "torus" && <torusGeometry args={[0.6, 0.2, 12, 32]} />}
            {shape.geo === "octahedron" && <octahedronGeometry args={[0.8, 0]} />}
            {shape.geo === "box" && <boxGeometry args={[1, 1, 1]} />}
            {shape.geo === "dodecahedron" && <dodecahedronGeometry args={[0.75, 0]} />}
            <meshStandardMaterial
              color={shape.color}
              roughness={0.2}
              metalness={0.6}
              transparent
              opacity={0.85}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

// A small, friendly, low-poly "developer bot" — built entirely from
// primitives so it stays technical rather than cartoonish, and orbits
// the main cluster as a memorable signature character.
function DeveloperBot({ reducedMotion }: { reducedMotion: boolean }) {
  const orbit = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (orbit.current && !reducedMotion) {
      orbit.current.rotation.y += delta * 0.14;
    }
    if (head.current && !reducedMotion) {
      head.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.35;
    }
  });

  return (
    <group ref={orbit}>
      <Float speed={reducedMotion ? 0 : 1.4} floatIntensity={reducedMotion ? 0 : 1.1} rotationIntensity={0.1}>
        <group position={[3.4, -0.3, 0.8]} scale={0.34}>
          {/* body */}
          <mesh position={[0, -0.55, 0]}>
            <boxGeometry args={[1, 1.1, 0.7]} />
            <meshStandardMaterial color="#e8e6dc" roughness={0.4} metalness={0.3} />
          </mesh>
          {/* head */}
          <group ref={head} position={[0, 0.35, 0]}>
            <mesh>
              <boxGeometry args={[0.85, 0.75, 0.75]} />
              <meshStandardMaterial color="#f8f7f3" roughness={0.3} metalness={0.4} />
            </mesh>
            {/* eyes / screen */}
            <mesh position={[0, 0, 0.39]}>
              <planeGeometry args={[0.5, 0.24]} />
              <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={1.1} />
            </mesh>
            {/* antenna */}
            <mesh position={[0, 0.55, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.3, 6]} />
              <meshStandardMaterial color="#8b8b96" />
            </mesh>
            <mesh position={[0, 0.72, 0]}>
              <sphereGeometry args={[0.06, 12, 12]} />
              <meshStandardMaterial color={SIGNAL} emissive={SIGNAL} emissiveIntensity={1} />
            </mesh>
          </group>
          {/* arms */}
          <mesh position={[-0.62, -0.4, 0]} rotation={[0, 0, 0.3]}>
            <capsuleGeometry args={[0.09, 0.55, 4, 8]} />
            <meshStandardMaterial color="#c7cafe" roughness={0.4} metalness={0.3} />
          </mesh>
          <mesh position={[0.62, -0.4, 0]} rotation={[0, 0, -0.3]}>
            <capsuleGeometry args={[0.09, 0.55, 4, 8]} />
            <meshStandardMaterial color="#c7cafe" roughness={0.4} metalness={0.3} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

function AmbientParticles() {
  const positions = useMemo(() => {
    const count = 320;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial transparent color={ACCENT} size={0.02} sizeAttenuation depthWrite={false} opacity={0.4} />
    </Points>
  );
}

export function CodeConstellation({ reducedMotion, isMobile, pointer }: CodeConstellationProps) {
  const group = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const nodeCount = isMobile ? 18 : 30;
  const nodes = useMemo(() => buildNodes(nodeCount, isMobile ? 1.7 : 2.1), [nodeCount, isMobile]);

  useFrame((_, delta) => {
    if (group.current && !reducedMotion) {
      group.current.rotation.y += delta * 0.075;
    }

    // gentle camera parallax toward the pointer
    const targetX = pointer.current.x * 0.6;
    const targetY = pointer.current.y * 0.35;
    camera.position.x += (targetX - camera.position.x) * 0.03;
    camera.position.y += (-targetY - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return (
    <group>
      <ambientLight intensity={0.75} />
      <pointLight position={[4, 4, 4]} intensity={1} color={ACCENT_SOFT} />
      <pointLight position={[-4, -3, 2]} intensity={0.7} color={SIGNAL} />
      <hemisphereLight args={["#ffffff", "#e8e6dc", 0.6]} />

      <group ref={group}>
        <Connections nodes={nodes} />
        <Nodes nodes={nodes} />
      </group>

      <Glyphs reducedMotion={reducedMotion} />
      <FloatingShapes reducedMotion={reducedMotion} isMobile={isMobile} />
      {!isMobile && <DeveloperBot reducedMotion={reducedMotion} />}
      {!isMobile && <AmbientParticles />}
    </group>
  );
}
