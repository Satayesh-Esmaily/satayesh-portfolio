# Personal Portfolio — Satayesh Esmaily

A personal and professional portfolio for **Satayesh Esmaily**, a Frontend Developer and Python enthusiast. This project is built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and a custom 3D experience using **Three.js / React Three Fiber**.

The design uses a **Light Theme** with a technical and minimalist visual identity, smooth scroll-based animations, and several interactive 3D scenes, including a code constellation, developer robot, and technical identity circuit.

🔗 **Demo:** See the [Deployment](#deployment) section for details.

---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation and Running](#installation-and-running)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Content Source and Editing](#content-source-and-editing)
- [Color and Theme System](#color-and-theme-system)
- [3D Scenes](#3d-scenes)
- [Animations](#animations)
- [Responsive Design and Accessibility](#responsive-design-and-accessibility)
- [Performance](#performance)
- [SEO](#seo)
- [Contact Form](#contact-form)
- [Deployment](#deployment)
- [Known Limitations](#known-limitations)
- [Remaining / Recommended Tasks](#remaining--recommended-tasks)
- [Quick Troubleshooting](#quick-troubleshooting)

---

## Features

- Custom Light Theme with an Indigo/Teal color palette
- Main 3D Hero scene featuring a cluster of connected nodes representing a code graph, floating geometric shapes, and a small developer robot
- Second 3D scene in the About section featuring a technical identity circuit surrounding a wireframe core
- Terminal window with a live typing effect
- Navigation with an active-section tracker (Scroll Spy) and mobile menu
- Project cards with a 3D Tilt effect on hover
- Magnetic buttons
- Animated counter for displaying the Duolingo score
- Scroll Reveal animations for each section
- Functional contact form UI (without a backend for now)
- Full support for `prefers-reduced-motion`
- Static fallback for browsers without WebGL support
- Clean, component-based, and maintainable TypeScript code

---



## Installation and Running

# Install dependencies
npm install

# Start the development server
npm run dev

Then open:
http://localhost:3000

---


----------------------------------------------------------------------------------------------------------------------------------------------------------------
All website content is stored in a single file:

src/lib/data.ts

This includes:

Personal information
Work experience
Education
Skills
Certifications
Awards
Contact information
Projects

To update the website content, simply edit src/lib/data.ts. No component changes are required.

Note: The projects section currently contains three clearly labeled placeholder cards because real project details were not available in the provided resume. No fictional projects or achievements have been added.

Color and Theme System

The website uses centralized color tokens defined in:

tailwind.config.ts
src/app/globals.css
Current Light Theme Palette
Token	Value	Usage
ink	#f8f7f3	Main background
ink-soft	#f0efe8	Alternating sections
ink-raised	#e8e6dc	Highlighted cards
paper	#16161c	Main text
paper-dim	#5c5c68	Secondary text
accent	#4f46e5	Primary Indigo color
signal	#0d9488	Secondary Teal color
line	rgba(22,22,28,0.1)	Borders and dividers

Changing the color values in tailwind.config.ts updates the entire website because the components use centralized color classes.

3D Scenes
Hero — Code Constellation

Located at:

src/components/three/CodeConstellation.tsx

Features:

Connected glowing code nodes
Floating programming symbols
Torus, octahedron, box, and dodecahedron shapes
Low-poly developer robot
Ambient particles
Mouse-based camera parallax
Mobile performance optimization

On mobile devices, the number of nodes and particles is reduced and additional 3D elements are disabled.

About — Identity Orb

Located at:

src/components/three/IdentityOrb.tsx

Features:

Central wireframe core
Rotating identity labels
Frontend
Python
React
Next.js
Three.js
QA
Decorative orbital rings

Both 3D scenes:

Respect prefers-reduced-motion
Include WebGL fallbacks
Use dynamic imports
Disable server-side rendering for Canvas components
Animations

Animations are implemented using Framer Motion.

Included animations:

Hero entrance animations
Scroll Reveal animations
Staggered skill and project cards
Magnetic buttons
3D project-card Tilt effects
Animated Duolingo score counter
Circular progress animation
Terminal typing animation
Animated gradient blobs
Active navigation indicator

All animations respect prefers-reduced-motion.

Responsive Design and Accessibility

The portfolio is designed for:

Mobile
Tablet
Laptop
Desktop

Accessibility features include:

Semantic HTML
Proper heading hierarchy
Visible keyboard focus states
Skip-to-content navigation
Appropriate alt attributes
aria-label attributes
Responsive mobile navigation
Reduced-motion support
WebGL fallback
Reviewed text/background contrast
Performance

Performance optimizations include:

Client-side loading for 3D components
next/dynamic with ssr: false
Limited Canvas dpr
Reduced 3D complexity on mobile
Optimized fonts using next/font/google
Lazy loading for 3D scenes
Suspense for asynchronous scene loading

Before deployment, it is recommended to run Lighthouse in Chrome DevTools and check:

Performance
Accessibility
Best Practices
SEO
SEO

SEO metadata is configured in:

src/app/layout.tsx

Included:

SEO title
Meta description
Open Graph metadata
Twitter Card metadata
SVG favicon
Title
Satayesh Esmaily | Frontend Developer & Python Enthusiast

A custom Open Graph image can also be added:

src/app/opengraph-image.png
Contact Form

The Contact section contains a complete form UI with:

Input validation
Accessible form controls
Error handling
Responsive styling

However, the form is not currently connected to an email service or backend.

The form does not pretend that an email was successfully sent. Instead, users are directed to the direct email address.

Possible solutions for implementing real email functionality:

Resend
SendGrid
Formspree
Web3Forms
Next.js Server Actions

For Resend or SendGrid, a Route Handler can be created at:

src/app/api/contact/route.ts
Deployment

This is a standard Next.js application and can be deployed on any platform that supports Next.js.

Recommended platforms:


Author

Satayesh Esmaily

Frontend Developer & Python Enthusiast

📧 Email: setayeshesmaily59@gmail.com

🐙 GitHub: Satayesh-Esmaily
