"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AmbientBlobsProps {
  variant?: "accent" | "signal" | "mixed";
}

export function AmbientBlobs({ variant = "mixed" }: AmbientBlobsProps) {
  const reducedMotion = useReducedMotion();

  const colorA = variant === "signal" ? "rgba(13,148,136,0.16)" : "rgba(79,70,229,0.16)";
  const colorB = variant === "accent" ? "rgba(79,70,229,0.12)" : "rgba(13,148,136,0.12)";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.span
        className="ambient-blob h-72 w-72"
        style={{ background: colorA, top: "-4rem", left: "-3rem" }}
        animate={
          reducedMotion
            ? undefined
            : { x: [0, 40, 0], y: [0, 30, 0] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="ambient-blob h-80 w-80"
        style={{ background: colorB, bottom: "-5rem", right: "-4rem" }}
        animate={
          reducedMotion
            ? undefined
            : { x: [0, -50, 0], y: [0, -20, 0] }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
