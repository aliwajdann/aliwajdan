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
    title: "SaaS Order Management Platform",
    description:
      "A centralized dashboard for streamlined operations, helping businesses manage orders, track fulfillment, and monitor customer activity in real-time.",
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    link: "https://sell-track.vercel.app/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Premium Shopify Fashion Store",
    description:
      "A mobile-first, conversion-optimized Shopify experience for a fashion brand, featuring custom sections and a seamless shopping journey.",
    tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
    link: "https://comfrt.com/",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Custom E-commerce",
    description:
      "Luxury jewelry e-commerce with custom branding, advanced product filtering, and a premium customer experience across all devices.",
    tech: ["Next.js", "Firebase", "JavaScript", "Tailwind"],
    link: "https://www.velanoshop.store/",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "EMR-TEK Wellness Store",
    description:
      "A premium Shopify e-commerce experience for a wellness technology brand specializing in red light therapy devices. Built to showcase products, educate customers, and drive conversions through a seamless shopping journey.",
    tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
    link: "https://emr-tek.com/",
    image: "https://emr-tek.com/cdn/shop/files/logo.png",
  },
  {
    title: "Pora & Co Digital Technology Store",
    description:
      "A modern Shopify storefront for a consumer electronics brand offering digital photo frames, portable monitors, cameras, and smart technology products. Designed with a clean shopping experience and mobile-first performance.",
    tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
    link: "https://poraenco.nl/",
    image: "https://poraenco.nl/cdn/shop/files/logo.png",
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
          <span className="section-kicker">Our Work</span>
          <h2 className="section-title mt-6 text-white">
            Selected case studies focused on performance, clarity, and results.
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
                  View Case Study
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </article>
        ))}

        <aside className="project-card glass-panel flex rounded-[2rem] p-5 sm:p-7 xl:min-h-full">
          <div className="flex flex-col justify-between">
            <div>
              {/* <span className="inline-flex rounded-full border border-cyan-300/18 bg-cyan-300/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-100"> */}
              {/* More Work*/}
              {/* </span> */}
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl">
                Dozens of successful projects delivered.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                From small business landing pages to complex e-commerce platforms, we have the experience to handle your next project.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 to-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Your Project
              <ArrowUpRight size={16} />
            </a>
          </div>
        </aside>
      </div>


    </section>
  );
}
