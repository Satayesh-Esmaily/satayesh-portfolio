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

## Prerequisites

- **Node.js 18.18 or higher** (Node.js 20 LTS is recommended)
- **npm** (pnpm or yarn can also be used)
- Internet access for installing packages and downloading Google Fonts during the build process

> ⚠️ This project was developed in an environment without internet/npm registry access, so `npm install` and `npm run build` have not yet been tested on a real machine. Before deployment, make sure to run both commands locally and review the output.

---

## Installation and Running

```bash
# Install dependencies
npm install

# Start the development server
npm run dev