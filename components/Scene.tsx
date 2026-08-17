'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, RoundedBox, Sparkles, Text } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const skin = '#d49c80';
const hair = '#211827';

function CodeScreen({ laptop = false }: { laptop?: boolean }) {
  return <group position={laptop ? [0, 0, .035] : [0, 0, .06]}><mesh><planeGeometry args={laptop ? [1.15, .58] : [1.55, .82]} /><meshBasicMaterial color="#0d1119" /></mesh><Text position={[-(laptop ? .43 : .61), .26, .01]} fontSize={laptop ? .065 : .105} color="#bd9dff" anchorX="left">{'< developer />'}</Text><Text position={[-(laptop ? .43 : .61), .08, .01]} fontSize={laptop ? .053 : .073} color="#70d6bd" anchorX="left">{'const ideas = build();'}</Text><Text position={[-(laptop ? .43 : .61), -.09, .01]} fontSize={laptop ? .053 : .073} color="#e899b7" anchorX="left">{'return <Experience />'}</Text><mesh position={[-(laptop ? .43 : .61), -.25, .01]}><boxGeometry args={[laptop ? .34 : .47, laptop ? .025 : .035, .008]} /><meshBasicMaterial color="#7963c9" /></mesh></group>;
}

function Monitor() {
  return <group position={[.82, 1.62, -.38]}><RoundedBox args={[1.78, 1.16, .1]} radius={.055} smoothness={4}><meshStandardMaterial color="#282231" metalness={.5} roughness={.27} /></RoundedBox><CodeScreen /><mesh position={[0, -.75, 0]}><boxGeometry args={[.11, .48, .1]} /><meshStandardMaterial color="#302a3a" /></mesh><mesh position={[0, -1, 0]}><boxGeometry args={[.72, .07, .3]} /><meshStandardMaterial color="#302a3a" /></mesh><mesh position={[-.65, .56, .07]}><sphereGeometry args={[.035, 10, 10]} /><meshBasicMaterial color="#76e0bf" /></mesh></group>;
}

function Laptop() {
  return <group position={[-.58, .75, .38]} rotation={[0, -.16, 0]}><RoundedBox args={[1.5, .07, .98]} radius={.025} smoothness={3}><meshStandardMaterial color="#aaa0b8" metalness={.75} roughness={.24} /></RoundedBox><group position={[0, .05, -.46]} rotation={[-.2, 0, 0]}><RoundedBox args={[1.43, .85, .06]} radius={.035} smoothness={3}><meshStandardMaterial color="#756b80" metalness={.55} roughness={.25} /></RoundedBox><CodeScreen laptop /></group>{Array.from({ length: 30 }).map((_, i) => <mesh key={i} position={[-.53 + (i % 10) * .105, .095, -.19 + Math.floor(i / 10) * .17]}><boxGeometry args={[.067, .014, .09]} /><meshStandardMaterial color={i % 5 === 0 ? '#a98eff' : '#51495b'} /></mesh>)}</group>;
}

function Developer() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => { if (ref.current) ref.current.position.y = Math.sin(state.clock.elapsedTime * 1.3) * .018; });
  return <group ref={ref} position={[-.18, 0, -.08]}>
    {/* ergonomic chair */}<mesh position={[-.05, .8, .66]}><boxGeometry args={[.72, 1.15, .13]} /><meshStandardMaterial color="#352b49" /></mesh><mesh position={[-.05, .54, .47]}><cylinderGeometry args={[.5, .56, .11, 32]} /><meshStandardMaterial color="#41345c" /></mesh><mesh position={[-.05, .12, .48]}><cylinderGeometry args={[.07, .07, .75, 16]} /><meshStandardMaterial color="#332d3b" /></mesh>
    {/* seated body */}<mesh position={[-.2, 1.13, .1]}><capsuleGeometry args={[.36, .62, 8, 16]} /><meshStandardMaterial color="#7561a9" roughness={.85} /></mesh><Text position={[-.2, 1.24, .48]} rotation={[0, 0, 0]} fontSize={.07} color="#cbb8ff">CODE</Text>
    {/* head and hair */}<mesh position={[-.2, 1.76, -.03]}><cylinderGeometry args={[.13, .13, .18, 20]} /><meshStandardMaterial color={skin} /></mesh><mesh position={[-.2, 2.03, -.03]}><sphereGeometry args={[.34, 24, 20]} /><meshStandardMaterial color={skin} roughness={.7} /></mesh><mesh position={[-.2, 2.15, -.06]}><sphereGeometry args={[.38, 24, 16, 0, Math.PI * 2, 0, Math.PI * .62]} /><meshStandardMaterial color={hair} roughness={.65} /></mesh><mesh position={[-.5, 2, -.01]}><sphereGeometry args={[.17, 16, 16]} /><meshStandardMaterial color={hair} /></mesh>
    {/* arms and hands on keyboard */}<mesh position={[-.48, .98, .25]} rotation={[.18, 0, -.6]}><capsuleGeometry args={[.11, .55, 8, 12]} /><meshStandardMaterial color="#7561a9" /></mesh><mesh position={[.08, .98, .25]} rotation={[.18, 0, .6]}><capsuleGeometry args={[.11, .55, 8, 12]} /><meshStandardMaterial color="#7561a9" /></mesh><mesh position={[-.68, .77, .4]}><sphereGeometry args={[.11, 16, 12]} /><meshStandardMaterial color={skin} /></mesh><mesh position={[.37, .77, .4]}><sphereGeometry args={[.11, 16, 12]} /><meshStandardMaterial color={skin} /></mesh>
    {/* legs and sneakers */}<mesh position={[-.42, .45, .32]} rotation={[.2, 0, -.15]}><capsuleGeometry args={[.13, .55, 8, 12]} /><meshStandardMaterial color="#302a42" /></mesh><mesh position={[.22, .45, .32]} rotation={[.2, 0, .15]}><capsuleGeometry args={[.13, .55, 8, 12]} /><meshStandardMaterial color="#302a42" /></mesh><mesh position={[-.53, .16, .52]} rotation={[0, 0, -.1]}><capsuleGeometry args={[.12, .28, 8, 12]} /><meshStandardMaterial color="#d7d0dc" /></mesh><mesh position={[.34, .16, .52]} rotation={[0, 0, .1]}><capsuleGeometry args={[.12, .28, 8, 12]} /><meshStandardMaterial color="#d7d0dc" /></mesh>
  </group>;
}

function Desk() {
  return <group><mesh position={[0, .54, .12]}><boxGeometry args={[3.7, .13, 1.35]} /><meshStandardMaterial color="#302837" roughness={.7} /></mesh><mesh position={[-1.5, -.2, .12]}><boxGeometry args={[.12, 1.45, .12]} /><meshStandardMaterial color="#211d29" /></mesh><mesh position={[1.5, -.2, .12]}><boxGeometry args={[.12, 1.45, .12]} /><meshStandardMaterial color="#211d29" /></mesh><mesh position={[-1.4, .78, -.28]}><cylinderGeometry args={[.16, .2, .52, 16]} /><meshStandardMaterial color="#4d7867" /></mesh><mesh position={[-1.4, 1.12, -.28]}><sphereGeometry args={[.29, 16, 12]} /><meshStandardMaterial color="#82b68b" /></mesh><mesh position={[1.35, .68, .05]}><cylinderGeometry args={[.13, .13, .1, 24]} /><meshStandardMaterial color="#e8b86d" /></mesh></group>;
}

function SceneContent() { return <Float speed={1.15} rotationIntensity={.045} floatIntensity={.12}><group rotation={[0, -.1, 0]}><Desk /><Monitor /><Laptop /><Developer /></group></Float>; }

export default function Scene() { return <div className="scene"><Canvas camera={{ position: [0, 1.25, 5.25], fov: 38 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}><ambientLight intensity={1.5} /><pointLight position={[2.5, 4, 3]} intensity={10} color="#f4dcff" /><pointLight position={[-3, 1.5, 2]} intensity={5} color="#7960ff" /><spotLight position={[0, 4, 2]} angle={.45} penumbra={1} intensity={5} color="#ffcfac" /><SceneContent /><Sparkles count={80} scale={5.4} size={2.1} speed={.25} color="#d8c5ff" /><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={.35} /></Canvas></div>; }
