import { Award as AwardIcon } from "lucide-react";
import { certifications } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="relative bg-ink-soft py-28 sm:py-36">
      <div className="section-shell">
        <SectionHeading eyebrow="Certifications" title="Courses, workshops, and recognitions." />

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 6) * 0.05}>
              <div className="flex h-full items-start gap-3 rounded-xl border border-line bg-ink p-5">
                <AwardIcon size={16} className="mt-0.5 shrink-0 text-accent-soft" />
                <div>
                  <h3 className="font-display text-sm font-medium leading-snug text-paper">{cert.title}</h3>
                  <p className="mt-1 font-mono text-xs text-paper-dim">
                    {cert.meta} · {cert.year}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
