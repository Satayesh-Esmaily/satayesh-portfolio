'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type Motion = { scroll: number; pointerX: number; pointerY: number };
type Vec3 = [number, number, number];

function Box({ position, scale, color, rotation = [0, 0, 0] }: { position: Vec3; scale: Vec3; color: string; rotation?: Vec3 }) {
  return <mesh position={position} scale={scale} rotation={rotation}><boxGeometry args={[1, 1, 1]} /><meshStandardMaterial color={color} roughness={.82} /></mesh>;
}

function Laptop() {
  return <group position={[-.35, .62, .08]} rotation={[0, -.12, 0]}>
    <Box position={[0, 0, 0]} scale={[1.65, .1, 1.05]} color="#27343a" />
    <group position={[0, .58, -.45]} rotation={[-.08, 0, 0]}><Box position={[0, 0, 0]} scale={[1.58, 1.12, .07]} color="#263238" /><mesh position={[0, 0, -.04]}><planeGeometry args={[1.38, .88]} /><meshBasicMaterial color="#12252d" /></mesh><mesh position={[-.42, .26, -.05]}><planeGeometry args={[.7, .045]} /><meshBasicMaterial color="#f4a261" /></mesh><mesh position={[-.36, .09, -.05]}><planeGeometry args={[.58, .045]} /><meshBasicMaterial color="#59c3c3" /></mesh><mesh position={[-.28, -.08, -.05]}><planeGeometry args={[.47, .045]} /><meshBasicMaterial color="#e9c46a" /></mesh></group>
    {Array.from({ length: 20 }).map((_, i) => <Box key={i} position={[-.54 + (i % 10) * .115, .07, -.2 + Math.floor(i / 10) * .2]} scale={[.075, .018, .1]} color={i % 5 === 0 ? '#9d82f5' : '#4e5b63'} />)}
  </group>;
}

function DesktopMonitor() {
  return <group position={[.95, 1.12, -.5]} rotation={[0, -.08, 0]}><Box position={[0, 0, 0]} scale={[1.75, 1.05, .08]} color="#202a30" /><mesh position={[0, 0, -.05]}><planeGeometry args={[1.53, .84]} /><meshBasicMaterial color="#101d24" /></mesh><mesh position={[-.56, .27, -.06]}><planeGeometry args={[.72, .05]} /><meshBasicMaterial color="#9d82f5" /></mesh><mesh position={[-.48, .09, -.06]}><planeGeometry args={[.95, .035]} /><meshBasicMaterial color="#59c3c3" /></mesh><mesh position={[-.4, -.07, -.06]}><planeGeometry args={[.7, .035]} /><meshBasicMaterial color="#f4a261" /></mesh><Box position={[0, -.72, 0]} scale={[.1, .42, .1]} color="#263238" /><Box position={[0, -.94, 0]} scale={[.72, .07, .28]} color="#263238" /></group>;
}

function StanleyMug() {
  return <group position={[1.55, .55, .25]}><mesh position={[0, .22, 0]}><cylinderGeometry args={[.17, .14, .42, 16]} /><meshStandardMaterial color="#d78938" roughness={.5} /></mesh><mesh position={[0, .445, 0]}><cylinderGeometry args={[.17, .17, .05, 16]} /><meshStandardMaterial color="#20272b" roughness={.4} /></mesh><mesh position={[0, .5, 0]}><cylinderGeometry args={[.035, .035, .28, 10]} /><meshStandardMaterial color="#b7c4c4" metalness={.5} /></mesh><mesh position={[.19, .24, 0]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[.11, .035, 8, 16, Math.PI * 1.5]} /><meshStandardMaterial color="#c1762f" roughness={.5} /></mesh></group>;
}

function DeskWorld({ motion }: { motion: React.MutableRefObject<Motion> }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => { if (!group.current) return; const { scroll, pointerX, pointerY } = motion.current; group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, -.28 + scroll * .18 + pointerX * .05, 2.4, delta); group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -.06 + pointerY * .02, 2.4, delta); state.camera.lookAt(0, .55, 0); });
  return <group ref={group} rotation={[-.06, -.28, 0]}><Box position={[0, .34, 0]} scale={[4.2, .18, 2.3]} color="#aa7952" /><Box position={[-1.75, -.28, -.8]} scale={[.16, 1.12, .16]} color="#775135" /><Box position={[1.75, -.28, -.8]} scale={[.16, 1.12, .16]} color="#775135" /><Box position={[-1.75, -.28, .8]} scale={[.16, 1.12, .16]} color="#775135" /><Box position={[1.75, -.28, .8]} scale={[.16, 1.12, .16]} color="#775135" /><Laptop /><DesktopMonitor /><StanleyMug /></group>;
}

export default function Scene() {
  const motion = useRef<Motion>({ scroll: 0, pointerX: 0, pointerY: 0 });
  useEffect(() => { let scrollFrame = 0; let pointerFrame = 0; const updateScroll = () => { if (scrollFrame) return; scrollFrame = requestAnimationFrame(() => { const range = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1); motion.current.scroll = Math.min(Math.max(window.scrollY / range, 0), 1); scrollFrame = 0; }); }; const updatePointer = (event: PointerEvent) => { if (pointerFrame) return; pointerFrame = requestAnimationFrame(() => { motion.current.pointerX = event.clientX / window.innerWidth * 2 - 1; motion.current.pointerY = event.clientY / window.innerHeight * 2 - 1; pointerFrame = 0; }); }; window.addEventListener('scroll', updateScroll, { passive: true }); window.addEventListener('pointermove', updatePointer, { passive: true }); return () => { window.removeEventListener('scroll', updateScroll); window.removeEventListener('pointermove', updatePointer); if (scrollFrame) cancelAnimationFrame(scrollFrame); if (pointerFrame) cancelAnimationFrame(pointerFrame); }; }, []);
  return <div className="scene" role="img" aria-label="A low-poly developer desk with a laptop, desktop monitor and Stanley mug."><Canvas camera={{ position: [0, 2.9, 7.2], fov: 42, near: .1, far: 40 }} dpr={1} gl={{ antialias: true, alpha: true }}><ambientLight intensity={1.7} /><hemisphereLight args={['#fff4de', '#3b5662', 1.25]} /><directionalLight position={[5, 8, 5]} intensity={2.8} color="#fff2d7" /><DeskWorld motion={motion} /></Canvas></div>;
}
