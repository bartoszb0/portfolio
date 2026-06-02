import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const projects = [
  {
    title: "GymTracker",
    description:
      "Full-stack workout tracker with a set-by-set Workout Mode that lets you log and update weights in real time as you train. Built with React, TypeScript, TanStack Query, and a Django REST Framework backend.",
    github: "https://github.com/bartoszb0/GymTrackerFrontendRebuilt",
  },
  {
    title: "Rapperdle",
    description:
      "A Wordle-inspired daily guessing game where the answer is always a rapper. Guess the hidden artist from color-coded tile feedback — new rapper every day. Built with React and TypeScript.",
    github: "https://github.com/bartoszb0/RapperdleReact",
  },
];

export default function OtherProjects() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-14 pb-20">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">
          02
        </p>
        <h2 className="text-3xl text-white font-semibold">Other projects</h2>
      </div>

      <div
        className="rounded-2xl border border-white/[0.07] overflow-hidden divide-y divide-white/[0.05]"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        {projects.map((project, i) => (
          <div key={project.title}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors duration-150 hover:cursor-pointer"
              style={{
                backgroundColor:
                  open === i ? "var(--color-surface-hover)" : "transparent",
              }}
            >
              <span className="text-sm font-semibold text-white">
                {project.title}
              </span>
              <FiChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  open === i ? "rotate-180 text-accent" : "text-neutral-500"
                }`}
              />
            </button>

            {open === i && (
              <div
                className="slide-down px-6 pt-1 pb-5 border-t-2 border-t-accent"
                style={{ backgroundColor: "var(--color-surface-hover)" }}
              >
                <p
                  className="text-sm leading-[1.75] mb-4 mt-4"
                  style={{ color: "#9a9a9a" }}
                >
                  {project.description}
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-accent transition-colors duration-150"
                >
                  <FaGithub size={12} />
                  GitHub →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
