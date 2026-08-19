import { experience } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <SectionHeading eyebrow="Experience" title="Where the work has happened so far." />

        <div className="relative mt-16">
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-line sm:left-[9px]" />

          <ol className="space-y-14">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.08}>
                <li className="relative pl-8 sm:pl-10">
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent-soft bg-ink sm:h-[18px] sm:w-[18px]" />

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-xl font-medium text-paper">{job.role}</h3>
                    <span className="font-mono text-xs text-paper-dim">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-accent-soft">
                    {job.company} · {job.location}
                  </p>
                  <p className="mt-4 max-w-2xl text-paper-dim">{job.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-paper-dim"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
