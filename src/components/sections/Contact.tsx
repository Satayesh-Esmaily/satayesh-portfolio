"use client";

import { FormEvent, useState } from "react";
import { Github, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "no-backend">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No email service is wired up yet — this intentionally does not
    // pretend to send anything. Swap this handler once a backend exists.
    setStatus("no-backend");
  }

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
          <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-ink-soft p-7 sm:p-8">
            <div className="grid gap-5">
              <div>
                <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest2 text-paper-dim">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  autoComplete="name"
                  className="mt-2 w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-paper outline-none transition-colors placeholder:text-paper-dim/50 focus:border-accent-soft"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest2 text-paper-dim">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  className="mt-2 w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-paper outline-none transition-colors placeholder:text-paper-dim/50 focus:border-accent-soft"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest2 text-paper-dim">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-2 w-full resize-none rounded-lg border border-line bg-ink px-4 py-3 text-sm text-paper outline-none transition-colors placeholder:text-paper-dim/50 focus:border-accent-soft"
                  placeholder="What's on your mind?"
                />
              </div>

              <button
                type="submit"
                className="mt-1 w-full rounded-full bg-paper py-3 text-sm font-medium text-ink transition-colors hover:bg-accent-soft"
              >
                Send message
              </button>

              {status === "no-backend" && (
                <p role="status" className="font-mono text-xs text-paper-dim">
                  This form isn&apos;t connected to an email service yet — please reach out directly at{" "}
                  <a href={`mailto:${profile.email}`} className="text-accent-soft underline underline-offset-2">
                    {profile.email}
                  </a>{" "}
                  in the meantime.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
