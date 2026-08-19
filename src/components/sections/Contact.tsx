import { Github, Instagram, Linkedin, Mail, Phone, Send, Twitter } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="section-shell grid gap-14 lg:grid-cols-2 lg:gap-10">
        <div>
          <Reveal>
            <span className="eyebrow">Contact</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-3 max-w-md text-balance font-display text-4xl font-medium tracking-tightest text-paper sm:text-5xl">
              Let&apos;s build something great together.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-paper-dim">
              Open to frontend and QA opportunities, collaborations, and conversations about robotics, design, and code.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3">
              <MagneticButton href={`mailto:${profile.email}`} variant="primary" className="w-fit">
                <Mail size={16} /> {profile.email}
              </MagneticButton>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex w-fit items-center gap-2 text-sm text-paper-dim transition-colors hover:text-accent-soft"
              >
                <Github size={16} /> {profile.github.replace("https://", "")}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="rounded-2xl border border-line bg-ink-soft p-7 sm:p-8">
            <div className="grid gap-4">
              <a href="tel:+93791652761" className="flex items-center gap-3 text-sm text-paper-dim transition-colors hover:text-accent-soft">
                <Phone size={17} /> +93791652761
              </a>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-paper-dim transition-colors hover:text-accent-soft">
                <Mail size={17} /> {profile.email}
              </a>
              <a href="https://www.linkedin.com/in/satayesh-esmaily-8a2555342" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-paper-dim transition-colors hover:text-accent-soft">
                <Linkedin size={17} /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-paper-dim transition-colors hover:text-accent-soft">
                <Github size={17} /> GitHub
              </a>
              <a href="https://t.me/s4tayesh2009" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-paper-dim transition-colors hover:text-accent-soft">
                <Send size={17} /> Telegram
              </a>
              <a href="https://instagram.com/satayesh.esmaily" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-paper-dim transition-colors hover:text-accent-soft">
                <Instagram size={17} /> Instagram
              </a>
              <a href="https://x.com/SatayeshE59770" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-paper-dim transition-colors hover:text-accent-soft">
                <Twitter size={17} /> X
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
