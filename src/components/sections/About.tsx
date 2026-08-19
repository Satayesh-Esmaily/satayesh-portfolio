"use client";

import dynamic from "next/dynamic";
import { identityTags, profile } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CodeWindow } from "@/components/ui/CodeWindow";

const IdentityOrb = dynamic(() => import("@/components/three/IdentityOrb").then((m) => m.IdentityOrb), {
  ssr: false,
});

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="section-shell grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <SectionHeading eyebrow="About" title="Building with intention, not just syntax." />
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-paper-dim sm:text-lg">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-2">
              {identityTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line px-4 py-1.5 font-mono text-xs text-paper-dim transition-colors hover:border-accent-dim hover:text-accent-soft"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6">
          <Reveal delay={0.18}>
            <IdentityOrb />
          </Reveal>
          <Reveal delay={0.26} className="flex justify-center lg:justify-end">
            <CodeWindow />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
