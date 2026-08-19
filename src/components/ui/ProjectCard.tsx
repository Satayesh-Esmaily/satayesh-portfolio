"use client";

import { MouseEvent, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 220, damping: 20 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-ink-soft p-7 transition-colors duration-500 hover:border-accent-dim"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-transparent to-signal/[0.05] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-medium text-paper">{project.title}</h3>
          {project.isPlaceholder && (
            <span className="shrink-0 rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest2 text-paper-dim">
              Placeholder
            </span>
          )}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-paper-dim">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-paper-dim">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-8 flex items-center gap-4">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-paper transition-colors hover:text-accent-soft"
          >
            <Github size={15} /> Code
          </a>
        ) : (
          <span className="flex items-center gap-1.5 text-sm text-paper-dim/50">
            <Github size={15} /> Code — TBA
          </span>
        )}
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-paper transition-colors hover:text-accent-soft"
          >
            Live demo <ArrowUpRight size={15} />
          </a>
        ) : (
          <span className="flex items-center gap-1.5 text-sm text-paper-dim/50">Demo — TBA</span>
        )}
      </div>
    </motion.div>
  );
}
