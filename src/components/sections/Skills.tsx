"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AmbientBlobs } from "@/components/ui/AmbientBlobs";

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-ink-soft py-28 sm:py-36">
      <AmbientBlobs variant="mixed" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Skills"
          title="A working map of the tools I reach for."
          description="Grouped by how they're actually used — not ranked by arbitrary percentages."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.id} delay={groupIndex * 0.06}>
              <div className="group relative overflow-hidden rounded-2xl border border-line bg-ink p-6 transition-colors duration-500 hover:border-accent-dim sm:p-8">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
                  <h3 className="font-display text-lg font-medium text-paper">{group.label}</h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.035 }}
                      className="rounded-lg border border-line bg-ink-raised px-3 py-1.5 font-mono text-xs text-paper-dim transition-colors duration-300 hover:border-accent-soft/50 hover:text-paper"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
