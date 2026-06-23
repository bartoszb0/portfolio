import { FaGithub, FaLink, FaLock } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import djangoImg from "../../images/django.png";
import javascriptImg from "../../images/javascript.png";
import nestImg from "../../images/nest.png";
import nextImg from "../../images/next.png";
import postgresImg from "../../images/postgres.png";
import pythonImg from "../../images/python.png";
import reactImg from "../../images/react.png";
import supabaseImg from "../../images/supabase.png";
import typescriptImg from "../../images/typescript.png";
import vueImg from "../../images/vue.png";

type SelectedProjectProps = {
  title: string;
  wip?: boolean;
  description: string;
  github?: string;
  demo?: string;
  website?: string;
  technologies: string[];
};

export default function SelectedProject({
  title,
  wip = false,
  description,
  github,
  demo,
  website,
  technologies,
}: SelectedProjectProps) {
  const images: Record<string, string> = {
    Django: djangoImg,
    Javascript: javascriptImg,
    Postgres: postgresImg,
    Python: pythonImg,
    React: reactImg,
    Typescript: typescriptImg,
    "Next.js": nextImg,
    Supabase: supabaseImg,
    Vue: vueImg,
    NestJS: nestImg,
  };

  return (
    <div
      className="group rounded-2xl border border-white/[0.07] border-l-2 border-l-accent p-7 transition-all duration-250 hover:-translate-y-0.5 hover:border-accent"
      style={{
        backgroundColor: "var(--color-surface)",
        transition:
          "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.backgroundColor =
          "var(--color-surface-hover)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 0 0 1px color-mix(in srgb, var(--color-accent) 25%, transparent), 0 8px 32px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.backgroundColor =
          "var(--color-surface)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-lg font-semibold text-white">{title}</span>
          {wip && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
              In progress
            </span>
          )}
        </div>

        {/* Tech stack chips */}
        <div className="flex items-center gap-1.5 flex-wrap justify-end shrink-0">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs text-neutral-400 border border-white/[0.07]"
              style={{ backgroundColor: "var(--color-bg)" }}
            >
              {images[tech] && (
                <img
                  src={images[tech]}
                  alt={tech}
                  className="w-3.5 h-3.5 object-contain"
                />
              )}
              <span className="hidden sm:inline">{tech}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-[1.75] mb-6" style={{ color: "#9a9a9a" }}>
        {description}
      </p>

      {/* Links */}
      <div className="flex gap-2.5 text-xs">
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.07] text-neutral-400 hover:border-accent/50 hover:text-accent transition-all duration-200"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <FaGithub size={12} />
            GitHub
          </a>
        ) : (
          <span
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.05] text-neutral-600 cursor-default"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <FaLock size={12} />
            Private repo
          </span>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.07] text-neutral-400 hover:border-accent/50 hover:text-accent transition-all duration-200"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <FaLink size={12} />
            Live demo
          </a>
        )}

        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.07] text-neutral-400 hover:border-accent/50 hover:text-accent transition-all duration-200"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <TbWorld size={12} />
            Website
          </a>
        )}
      </div>
    </div>
  );
}
