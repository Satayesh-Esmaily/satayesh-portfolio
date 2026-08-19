import { projects } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { AmbientBlobs } from "@/components/ui/AmbientBlobs";

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-ink-soft py-28 sm:py-36">
      <AmbientBlobs variant="accent" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work, in progress."
          description="Real project write-ups are being prepared — these slots are structured placeholders, not filler claims."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
