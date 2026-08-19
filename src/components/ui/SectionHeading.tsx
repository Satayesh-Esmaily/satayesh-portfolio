import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-tightest text-paper sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p
            className={`mt-4 max-w-xl text-paper-dim ${align === "center" ? "mx-auto" : ""}`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
