"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Code2, Layers3, Palette, Zap } from "lucide-react";
import { shouldReduceMotion } from "@/app/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Responsive React and Next.js builds with cleaner structure, stronger hierarchy, and production-ready implementation.",
    features: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    icon: Palette,
    title: "UI Direction",
    description:
      "Modern interfaces with deliberate spacing, typography systems, and visuals shaped around the product rather than trends.",
    features: ["Design systems", "Responsive UI", "Visual polish", "Accessibility"],
  },
  {
    icon: Zap,
    title: "Motion and Performance",
    description:
      "GSAP-powered transitions and interactive detail that stay smooth, light, and aligned with performance goals.",
    features: ["GSAP", "Core Web Vitals", "Interaction states", "Optimization"],
  },
  {
    icon: Layers3,
    title: "Product Integration",
    description:
      "Connecting frontend work to APIs, CMS flows, and dashboards while keeping the experience cohesive and maintainable.",
    features: ["REST APIs", "Firebase", "Dashboards", "Content flows"],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reducedMotion = shouldReduceMotion();
    if (reducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".services-intro", {
        scrollTrigger: { trigger: ".services-intro", start: "top 80%" },
        opacity: 0,
        y: 30,
        duration: 0.75,
        ease: "power3.out",
      });

      gsap.from(".service-card", {
        scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
        opacity: 0,
        y: 34,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".services-cta", {
        scrollTrigger: { trigger: ".services-cta", start: "top 88%" },
        opacity: 0,
        y: 24,
        duration: 0.55,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section-shell py-16 lg:py-28"
    >
      <div className="services-intro mx-auto flex w-full max-w-7xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="section-kicker">Services</span>
          <h2 className="section-title mt-6 text-white">
            Focused frontend services built around product quality, not noise.
          </h2>
        </div>

      </div>

      <div className="services-grid mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="service-card interactive-card glass-panel rounded-[2rem] p-5 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-2xl border border-cyan-300/14 bg-cyan-300/10 p-3 text-cyan-200">
                  <Icon size={22} />
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Service
                </span>
              </div>

              <h3 className="mt-6 text-[1.15rem] font-semibold tracking-[-0.03em] text-white sm:text-2xl sm:tracking-[-0.04em]">
                {service.title}
              </h3>
              <p className="mt-4 text-[0.86rem] leading-6 text-slate-400 sm:text-sm sm:leading-7">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-cyan-300/12 bg-cyan-300/[0.08] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-cyan-100"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <div className="services-cta mx-auto mt-12 max-w-7xl">
        <div className="glass-panel flex flex-col items-start justify-between gap-6 rounded-[2rem] p-5 sm:p-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full border border-cyan-300/16 bg-cyan-300/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-100">
              Open for projects
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl">
              Need a sharper interface, a cleaner frontend, or a better first impression?
            </h3>
          </div>

          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 to-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Let&apos;s Talk
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
