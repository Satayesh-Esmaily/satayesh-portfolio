'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
const Scene = dynamic(() => import('./Scene'), { ssr: false, loading: () => <div className="scene-loading">در حال آماده‌سازی فضا...</div> });

const projects = [
  { number: '01', title: 'Nova — Music Platform', type: 'FRONTEND / 2024', tone: 'violet' },
  { number: '02', title: 'Atrium — Architecture Studio', type: 'WEB EXPERIENCE / 2023', tone: 'orange' },
  { number: '03', title: 'Flow — Wellness App', type: 'PRODUCT UI / 2023', tone: 'blue' },
];

export default function Portfolio() {
  const [menu, setMenu] = useState(false);
  return <main>
    <header className="nav"><a className="brand" href="#top">S<span>/</span></a><button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Open menu">{menu ? '×' : '☰'}</button><nav className={menu ? 'open' : ''}><a href="#work" onClick={() => setMenu(false)}>Work</a><a href="#about" onClick={() => setMenu(false)}>About</a><a href="#contact" onClick={() => setMenu(false)}>Contact</a></nav><a className="nav-cta" href="mailto:hello@satayesh.dev">Let&apos;s work together <span>↗</span></a></header>
    <section id="top" className="hero"><div className="hero-copy"><p className="eyebrow"><i /> Frontend Developer · React · Next.js</p><h1>I build digital<br /><em>experiences.</em></h1><p className="hero-text">I&apos;m Satayesh — a frontend developer turning thoughtful ideas into fast, accessible and memorable products.</p><div className="hero-actions"><a className="primary" href="#work">Explore my work <span>↓</span></a><a className="text-link" href="#about">More about me <span>↗</span></a></div></div><div className="hero-art"><div className="orb-label">SCROLL TO<br />EXPLORE <b>↓</b></div><Scene /><div className="art-caption"><span>01</span><span>Digital<br />Craft</span></div></div><div className="hero-meta"><span>Based in Tehran — Available worldwide</span><span>Scroll to explore ↓</span></div></section>
    <section id="work" className="work section"><div className="section-head"><p className="eyebrow">Selected projects</p><h2>Things I&apos;ve<br /><em>built.</em></h2><p className="section-intro">Interfaces with a sharp eye for detail, smooth interactions and code that lasts.</p></div><div className="project-list">{projects.map((p) => <a className="project" href="#contact" key={p.number}><div className={'project-art ' + p.tone}><span>{p.number}</span><div className="shape" /></div><div className="project-info"><div><h3>{p.title}</h3><p>{p.type}</p></div><strong>↗</strong></div></a>)}</div></section>
    <section id="about" className="about section"><div><p className="eyebrow">A little about me</p><h2>Good code should<br />feel <em>invisible.</em></h2></div><div className="about-copy"><p>I combine product thinking, visual design and modern frontend engineering to create digital experiences people enjoy using.</p><div className="stats"><div><b>06+</b><span>Years building</span></div><div><b>32</b><span>Projects shipped</span></div><div><b>12</b><span>Happy partners</span></div></div></div></section>
    <section id="contact" className="contact section"><p className="eyebrow">Have a project in mind?</p><h2>Let&apos;s make<br /><em>something great.</em></h2><a className="contact-link" href="mailto:hello@satayesh.dev">hello@satayesh.dev <span>↗</span></a></section>
    <footer><span className="brand">S<span>/</span></span><span>© 2024 Satayesh — Built with care</span><div><a href="#top">GitHub</a><a href="#top">LinkedIn</a></div></footer>
  </main>;
}
