import { education } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <SectionHeading eyebrow="Education" title="Formal study, alongside self-directed learning." />

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={item.school + item.period} delay={i * 0.06}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-ink-soft p-6">
                <div>
                  <span className="font-mono text-xs text-paper-dim">{item.period}</span>
                  <h3 className="mt-2 font-display text-lg font-medium text-paper">{item.school}</h3>
                  {item.focus && <p className="mt-1 text-sm text-accent-soft">{item.focus}</p>}
                </div>
                <p className="mt-4 text-sm text-paper-dim">{item.location}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
