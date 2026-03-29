"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { shouldReduceMotion } from "@/app/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: "Eco-Commerce Platform",
    description:
      "A performance-focused storefront with a custom dashboard, cleaner buying flow, and a brand-led front end.",
    tech: ["Next.js", "Firebase", "TypeScript"],
    link: "https://www.velanoshop.store/",
    github: "https://github.com/aliwajdann/nexwear",
    image: "https://cdn.velanoshop.store/banners//velano.png",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal site built to present frontend work with a stronger visual rhythm, motion, and modern hierarchy.",
    tech: ["Next.js", "Tailwind CSS", "GSAP"],
    link: "#",
    github: "https://github.com/aliwajdann/aliwajdan",
    image: "https://cdn.velanoshop.store/banners//portfolio.png",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reducedMotion = shouldReduceMotion();
    if (reducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".projects-intro", {
        scrollTrigger: { trigger: ".projects-intro", start: "top 78%" },
        opacity: 0,
        y: 32,
        duration: 0.75,
        ease: "power3.out",
      });

      gsap.from(".project-card", {
        scrollTrigger: { trigger: ".projects-grid", start: "top 80%" },
        opacity: 0,
        y: 42,
        duration: 0.65,
        stagger: 0.14,
        ease: "power3.out",
      });

      gsap.from(".projects-footnote", {
        scrollTrigger: { trigger: ".projects-footnote", start: "top 88%" },
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section-shell py-16 lg:py-28"
    >
      <div className="projects-intro mx-auto flex w-full max-w-7xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="section-kicker">Projects</span>
          <h2 className="section-title mt-6 text-white">
            Selected work with interaction, clarity, and product thinking at the center.
          </h2>
        </div>
      </div>

      <div className="projects-grid mx-auto mt-12 grid w-full max-w-7xl gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_320px]">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="project-card interactive-card glass-panel group overflow-hidden rounded-[2rem]"
          >
            <div className="relative h-56 overflow-hidden sm:h-72">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050816] via-[#050816]/35 to-transparent" />
              <div className="absolute left-5 top-5 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-slate-950/65 text-xs font-semibold text-cyan-100">
                0{index + 1}
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                loading="lazy"
              />
            </div>

            <div className="relative z-10 p-5 sm:p-7">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="mt-6 text-[1.2rem] font-semibold tracking-[-0.03em] text-white transition duration-200 group-hover:text-cyan-200 sm:text-2xl sm:tracking-[-0.04em]">
                {project.title}
              </h3>
              <p className="mt-4 text-[0.86rem] leading-6 text-slate-400 sm:text-[0.96rem] sm:leading-7">
                {project.description}
              </p>

              <div className="mt-7 flex items-center gap-5 border-t border-white/8 pt-5">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition duration-200 hover:text-white"
                >
                  Live Site
                  <ExternalLink size={16} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition duration-200 hover:text-white"
                >
                  Source
                  <Github size={16} />
                </a>
              </div>
            </div>
          </article>
        ))}

        <aside className="project-card glass-panel flex rounded-[2rem] p-5 sm:p-7 xl:min-h-full">
          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-300/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-100">
                More Work
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl">
                More experiments, builds, and shipped interfaces on GitHub.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Open source, product experiments, and implementation details
                live there.
              </p>
            </div>

            <a
              href="https://github.com/aliwajdann"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 to-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Visit GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>
        </aside>
      </div>


    </section>
  );
}
