import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function AboutMe() {
  return (
    <section className="relative pt-10 pb-8 mb-4">
      {/* Dot-grid texture */}
      <div className="hero-texture absolute inset-0 pointer-events-none" />
      {/* Accent glow behind the name */}
      <div className="absolute top-12 -left-10 w-96 h-56 bg-accent opacity-30 blur-3xl rounded-full pointer-events-none" />
      {/* Fade out at the bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 50% 100%, var(--color-bg) 20%, transparent 100%)",
        }}
      />

      <div className="relative">
        <p className="fade-up text-xs font-semibold uppercase text-accent mb-6">
          Frontend Developer · Warsaw
        </p>

        <h1 className="fade-up-1 text-display font-semibold text-white mb-7">
          Bartosz Bednarczyk
        </h1>

        <p
          className="fade-up-2 text-base leading-[1.75] mb-8 max-w-[520px]"
          style={{ color: "#bebebe" }}
        >
          I'm Bartosz, a frontend-leaning web developer based in Warsaw, working
          primarily with TypeScript, React, Next.js, and Vue. Over the past two
          years I've taught myself to build and ship real applications —
          including a live commercial product used at real events with paying
          users. I'm looking for my first professional developer role where I
          can keep growing within a team.
        </p>

        <div className="fade-up-3 flex flex-wrap gap-3 text-sm">
          <a
            href="https://github.com/bartoszb0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-neutral-300 hover:border-accent/70 hover:text-accent transition-all duration-200"
          >
            <FaGithub size={14} />
            GitHub
          </a>
          <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-neutral-300">
            <MdEmail size={14} />
            bartoszb2020@gmail.com
          </span>
        </div>
      </div>
    </section>
  );
}
