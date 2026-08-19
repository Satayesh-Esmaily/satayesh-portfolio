import { Github } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="section-shell flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-base text-paper">{profile.name}</p>
          <p className="mt-0.5 font-mono text-xs text-paper-dim">Frontend Developer · Python Enthusiast</p>
        </div>

        <p className="font-mono text-xs text-paper-dim">© 2026 {profile.name}</p>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-paper transition-colors hover:border-accent-soft/60 hover:text-accent-soft"
          aria-label="GitHub profile"
        >
          <Github size={16} />
        </a>
      </div>
    </footer>
  );
}
