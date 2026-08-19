import { award, languages, volunteer } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function Recognition() {
  const progress = Math.round((award.score / award.maxScore) * 100);

  return (
    <section id="recognition" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <SectionHeading eyebrow="Awards & Involvement" title="Beyond the code editor." />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* Award — animated score */}
          <Reveal className="lg:col-span-1">
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-line bg-ink-soft p-8 text-center">
              <span className="eyebrow">{award.title}</span>
              <div className="relative mt-6 flex h-36 w-36 items-center justify-center">
                <svg viewBox="0 0 120 120" className="absolute inset-0 -rotate-90">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(243,242,238,0.08)" strokeWidth="6" />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="#7c8aff"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 52}
                    strokeDashoffset={2 * Math.PI * 52 * (1 - progress / 100)}
                  />
                </svg>
                <div className="font-display text-4xl font-medium text-paper">
                  <AnimatedCounter value={award.score} />
                </div>
              </div>
              <p className="mt-4 font-mono text-xs text-paper-dim">Score out of {award.maxScore} · {award.year}</p>
            </div>
          </Reveal>

          {/* Volunteer */}
          <Reveal delay={0.08} className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-ink-soft p-8">
              <div>
                <span className="eyebrow">Volunteer Experience</span>
                <h3 className="mt-3 font-display text-xl font-medium text-paper">{volunteer.role}</h3>
                <p className="mt-1 text-sm text-accent-soft">
                  {volunteer.organization} · {volunteer.location}
                </p>
                <p className="mt-4 max-w-lg text-paper-dim">{volunteer.description}</p>
              </div>
              <span className="mt-6 font-mono text-xs text-paper-dim">{volunteer.period}</span>
            </div>
          </Reveal>

          {/* Languages */}
          <Reveal delay={0.14} className="lg:col-span-3">
            <div className="rounded-2xl border border-line bg-ink-soft p-8">
              <span className="eyebrow">Languages</span>
              <div className="mt-5 flex flex-wrap gap-4">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center gap-3 rounded-xl border border-line px-5 py-3"
                  >
                    <span className="font-display text-base text-paper">{lang.name}</span>
                    <span className="h-1 w-1 rounded-full bg-line" />
                    <span className="font-mono text-xs text-paper-dim">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
