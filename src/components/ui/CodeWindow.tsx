"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { codeSnippet } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CodeWindow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reducedMotion = useReducedMotion();
  const [typed, setTyped] = useState(reducedMotion ? codeSnippet : "");

  useEffect(() => {
    if (!inView || reducedMotion) return;
    let i = 0;
    const interval = setInterval(() => {
      i += 2;
      setTyped(codeSnippet.slice(0, i));
      if (i >= codeSnippet.length) clearInterval(interval);
    }, 14);
    return () => clearInterval(interval);
  }, [inView, reducedMotion]);

  return (
    <div
      ref={ref}
      className="w-full max-w-md overflow-hidden rounded-2xl border border-line bg-ink-soft shadow-[0_30px_80px_-30px_rgba(124,138,255,0.25)]"
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
        <span className="ml-3 font-mono text-xs text-paper-dim">developer.ts</span>
      </div>
      <pre className="whitespace-pre-wrap px-5 py-6 font-mono text-[13px] leading-relaxed text-paper-dim sm:text-sm">
        {typed}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="text-accent-soft"
        >
          _
        </motion.span>
      </pre>
    </div>
  );
}
