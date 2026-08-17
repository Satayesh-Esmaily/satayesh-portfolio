'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, RoundedBox, Sparkles, Text } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const skin = '#d49c80';
const hair = '#211827';

function CodeScreen({ laptop = false }: { laptop?: boolean }) {
  return <group position={laptop ? [0, 0, .04] : [0, 0, .06]}><mesh><planeGeometry args={laptop ? [1.37, .84] : [1.55, .82]} /><meshBasicMaterial color="#0d1119" /></mesh><Text position={[-(laptop ? .52 : .61), .28, .01]} fontSize={laptop ? .065 : .105} color="#bd9dff" anchorX="left">{'< developer />'}</Text><Text position={[-(laptop ? .52 : .61), .08, .01]} fontSize={laptop ? .053 : .073} color="#70d6bd" anchorX="left">{'const ideas = build();'}</Text><Text position={[-(laptop ? .52 : .61), -.1, .01]} fontSize={laptop ? .053 : .073} color="#e899b7" anchorX="left">{'return <Experience />'}</Text><mesh position={[-(laptop ? .52 : .61), -.28, .01]}><boxGeometry args={[laptop ? .34 : .47, laptop ? .025 : .035, .008]} /><meshBasicMaterial color="#7963c9" /></mesh></group>;
}

function Monitor() {
  return <group position={[.82, 1.62, -.38]}><RoundedBox args={[1.78, 1.16, .1]} radius={.055} smoothness={4}><meshStandardMaterial color="#282231" metalness={.5} roughness={.27} /></RoundedBox><CodeScreen /><mesh position={[0, -.75, 0]}><boxGeometry args={[.11, .48, .1]} /><meshStandardMaterial color="#302a3a" /></mesh><mesh position={[0, -1, 0]}><boxGeometry args={[.72, .07, .3]} /><meshStandardMaterial color="#302a3a" /></mesh><mesh position={[-.65, .56, .07]}><sphereGeometry args={[.035, 10, 10]} /><meshBasicMaterial color="#76e0bf" /></mesh></group>;
}

function Laptop() {
  return <group position={[-.35, .72, .42]} rotation={[0, -.1, 0]}>
    <RoundedBox args={[1.7, .07, 1.02]} radius={.03} smoothness={4}><meshStandardMaterial color="#aaa0b8" metalness={.75} roughness={.24} /></RoundedBox>
    <group position={[0, .58, -.48]} rotation={[-.06, 0, 0]}><RoundedBox args={[1.62, 1.12, .07]} radius={.045} smoothness={4}><meshStandardMaterial color="#756b80" metalness={.55} roughness={.25} /></RoundedBox><CodeScreen laptop /></group>
    {Array.from({ length: 30 }).map((_, i) => <mesh key={i} position={[-.54 + (i % 10) * .108, .105, -.18 + Math.floor(i / 10) * .16]}><boxGeometry args={[.07, .014, .075]} /><meshStandardMaterial color={i % 6 === 0 ? '#a98eff' : '#51495b'} /></mesh>)}
  </group>;
}

function Developer() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => { if (ref.current) ref.current.position.y = Math.sin(state.clock.elapsedTime * 1.3) * .018; });
  return <group ref={ref} position={[-.18, -.28, -.08]}>
    {/* clean, seated silhouette: the seat is visibly below the desk */}<mesh position={[-.05, .82, -.42]}><boxGeometry args={[.72, 1.1, .12]} /><meshStandardMaterial color="#352b49" /></mesh><mesh position={[-.05, .54, -.35]}><cylinderGeometry args={[.47, .52, .1, 32]} /><meshStandardMaterial color="#41345c" /></mesh><mesh position={[-.05, .14, -.35]}><cylinderGeometry args={[.06, .06, .75, 16]} /><meshStandardMaterial color="#332d3b" /></mesh>
    {/* torso */}<mesh position={[-.2, 1.12, -.02]}><capsuleGeometry args={[.32, .55, 8, 16]} /><meshStandardMaterial color="#7561a9" roughness={.85} /></mesh>
    {/* head, hair cap and ponytail */}<mesh position={[-.2, 1.76, -.02]}><cylinderGeometry args={[.12, .12, .16, 20]} /><meshStandardMaterial color={skin} /></mesh><mesh position={[-.2, 2.02, -.02]}><sphereGeometry args={[.3, 24, 20]} /><meshStandardMaterial color={skin} roughness={.7} /></mesh><mesh position={[-.2, 2.13, -.07]}><sphereGeometry args={[.34, 24, 16, 0, Math.PI * 2, 0, Math.PI * .58]} /><meshStandardMaterial color={hair} roughness={.65} /></mesh><mesh position={[-.47, 1.94, -.03]}><sphereGeometry args={[.2, 16, 16]} /><meshStandardMaterial color={hair} /></mesh><mesh position={[-.53, 1.72, -.05]}><sphereGeometry args={[.16, 16, 16]} /><meshStandardMaterial color={hair} /></mesh>
    {/* short arms angled naturally toward the keyboard */}<mesh position={[-.45, 1.22, .22]} rotation={[.05, 0, -.45]}><capsuleGeometry args={[.095, .38, 8, 12]} /><meshStandardMaterial color="#7561a9" /></mesh><mesh position={[.04, 1.22, .22]} rotation={[.05, 0, .45]}><capsuleGeometry args={[.095, .38, 8, 12]} /><meshStandardMaterial color="#7561a9" /></mesh><mesh position={[-.62, 1.02, .38]}><sphereGeometry args={[.09, 16, 12]} /><meshStandardMaterial color={skin} /></mesh><mesh position={[.22, 1.02, .38]}><sphereGeometry args={[.09, 16, 12]} /><meshStandardMaterial color={skin} /></mesh>
    {/* bent legs: thighs rest on the seat, shins drop toward the floor */}<mesh position={[-.37, .48, .18]} rotation={[0, 0, -.26]}><capsuleGeometry args={[.12, .42, 8, 12]} /><meshStandardMaterial color="#302a42" /></mesh><mesh position={[.05, .48, .18]} rotation={[0, 0, .26]}><capsuleGeometry args={[.12, .42, 8, 12]} /><meshStandardMaterial color="#302a42" /></mesh><mesh position={[-.48, .22, .38]} rotation={[0, 0, .03]}><capsuleGeometry args={[.1, .3, 8, 12]} /><meshStandardMaterial color="#302a42" /></mesh><mesh position={[.16, .22, .38]} rotation={[0, 0, -.03]}><capsuleGeometry args={[.1, .3, 8, 12]} /><meshStandardMaterial color="#302a42" /></mesh><mesh position={[-.48, .05, .47]} rotation={[0, 0, -.1]}><boxGeometry args={[.22, .09, .4]} /><meshStandardMaterial color="#d7d0dc" /></mesh><mesh position={[.16, .05, .47]} rotation={[0, 0, .1]}><boxGeometry args={[.22, .09, .4]} /><meshStandardMaterial color="#d7d0dc" /></mesh>
  </group>;
}

function Mug() {
  return <group position={[1.18, .54, .18]}><mesh position={[0, .2, 0]}><cylinderGeometry args={[.16, .13, .38, 24]} /><meshStandardMaterial color="#d39b45" metalness={.35} roughness={.28} /></mesh><mesh position={[0, .405, 0]}><cylinderGeometry args={[.16, .16, .045, 24]} /><meshStandardMaterial color="#1d1c25" metalness={.4} roughness={.25} /></mesh><mesh position={[0, .45, 0]}><cylinderGeometry args={[.035, .035, .3, 12]} /><meshStandardMaterial color="#b7a9b9" metalness={.7} roughness={.2} /></mesh><mesh position={[.17, .22, 0]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[.105, .035, 12, 24, Math.PI * 1.5]} /><meshStandardMaterial color="#c48a3c" metalness={.35} roughness={.3} /></mesh></group>;
}

function Desk() {
  return <group><mesh position={[0, .54, .12]}><boxGeometry args={[3.7, .13, 1.35]} /><meshStandardMaterial color="#302837" roughness={.7} /></mesh><mesh position={[-1.5, -.2, .12]}><boxGeometry args={[.12, 1.45, .12]} /><meshStandardMaterial color="#211d29" /></mesh><mesh position={[1.5, -.2, .12]}><boxGeometry args={[.12, 1.45, .12]} /><meshStandardMaterial color="#211d29" /></mesh><mesh position={[-1.4, .78, -.28]}><cylinderGeometry args={[.16, .2, .52, 16]} /><meshStandardMaterial color="#4d7867" /></mesh><mesh position={[-1.4, 1.12, -.28]}><sphereGeometry args={[.29, 16, 12]} /><meshStandardMaterial color="#82b68b" /></mesh><Mug /></group>;
}

function SceneContent() { return <Float speed={1.15} rotationIntensity={.045} floatIntensity={.12}><group rotation={[0, -.1, 0]}><Desk /><Monitor /><Laptop /></group></Float>; }

export default function Scene() { return <div className="scene"><Canvas camera={{ position: [0, 1.35, 6.35], fov: 42 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}><ambientLight intensity={1.5} /><pointLight position={[2.5, 4, 3]} intensity={10} color="#f4dcff" /><pointLight position={[-3, 1.5, 2]} intensity={5} color="#7960ff" /><spotLight position={[0, 4, 2]} angle={.45} penumbra={1} intensity={5} color="#ffcfac" /><SceneContent /><Sparkles count={80} scale={5.4} size={2.1} speed={.25} color="#d8c5ff" /><OrbitControls enableZoom={false} enablePan={false} target={[0, 1, 0]} /></Canvas></div>; }
