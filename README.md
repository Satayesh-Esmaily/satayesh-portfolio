# Satayesh Esmaily — Portfolio

A dark, technical, motion-forward portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and a signature Three.js "code constellation" hero scene built with React Three Fiber.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

Requires Node.js 18.18+ (Node 20 LTS recommended).

## Where things live

- `src/app` — App Router entry (`layout.tsx` for fonts/SEO metadata, `page.tsx` assembles the sections, `globals.css` for tokens/base styles).
- `src/components/sections` — one file per page section (Hero, About, Skills, Experience, Projects, Education, Certifications, Recognition = Awards + Volunteer + Languages, Contact).
- `src/components/three` — the R3F hero scene (`Scene.tsx` is the Canvas wrapper with WebGL/mobile/reduced-motion handling; `CodeConstellation.tsx` is the actual 3D content).
- `src/components/ui` — reusable primitives: `Reveal` (scroll reveal), `MagneticButton`, `ProjectCard` (3D tilt), `CodeWindow` (typed terminal), `AnimatedCounter`, `SectionHeading`.
- `src/lib/data.ts` — **single source of truth for all copy.** Every fact on the site (experience, education, certifications, etc.) comes from here and traces back to the CV provided — nothing is invented. Real project links/descriptions were not supplied, so `projects` currently holds three clearly-labeled placeholder entries — edit that array once real project details are ready.
- `src/hooks` — `useReducedMotion`, `useActiveSection` (navbar scrollspy), `useWebGLSupport` (3D fallback).

## Recent revision

- **Switched to a light theme.** All color tokens live in `tailwind.config.ts` (`ink` = light surfaces, `paper` = dark text, `accent` = indigo, `signal` = teal) — the whole site re-themes from those two files (`tailwind.config.ts` + `src/app/globals.css`) without touching individual components.
- **More 3D, more motion.** The hero scene (`components/three/CodeConstellation.tsx`) now includes extra floating primitives (torus/octahedron/box/dodecahedron), a small orbiting low-poly "developer bot" character, and a denser particle field. The About section gained a second 3D scene, `components/three/IdentityOrb.tsx` — an orbiting ring of the identity tags (Frontend, Python, React, Next.js, Three.js, QA) around a wireframe core, sitting above the terminal window. Skills and Projects sections got slow-drifting ambient gradient blobs (`components/ui/AmbientBlobs.tsx`) for extra background motion. All of it still respects `prefers-reduced-motion` and skips the heavier elements on mobile.

## Notes on this build

- **The contact form has no backend.** It's a real, accessible form UI, but submitting it shows an inline note pointing to the email link instead of pretending to send anything — wire it up to an email service (Resend, Formspree, a serverless function, etc.) when ready.
- **3D scene is adaptive:** fewer particles/nodes and no ambient particle field on screens under 768px, `prefers-reduced-motion` disables rotation/float/parallax and freezes the typed terminal, and a WebGL-unavailable fallback renders a static styled panel instead of a blank canvas.
- **This code has not been run or built in this environment** (no package registry access here), so double-check `npm run build` and `npm run lint` locally before deploying. The code was written carefully against current Next.js 14 / R3F / drei APIs, but a first local build is worth doing before you ship.

## Suggested next steps

- Swap the placeholder entries in `projects` (in `src/lib/data.ts`) for real repos/write-ups.
- Wire the contact form to an actual email service.
- Add an Open Graph image (`opengraph-image.png` in `src/app`) for richer link previews.
- Consider adding a resume/CV PDF link near the Hero CTAs.
