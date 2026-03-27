"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Gauge, Globe2, Layers3, Sparkles, Smartphone } from "lucide-react";
import { shouldReduceMotion } from "@/app/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const cards = [
  {
    icon: Globe2,
    title: "Global-ready builds",
    copy: "Remote-friendly collaboration, responsive systems, and interfaces that hold up across devices and teams.",
  },
  {
    icon: Layers3,
    title: "Structured frontends",
    copy: "Component systems, scalable architecture, and visual consistency without sacrificing iteration speed.",
  },
  {
    icon: Cpu,
    title: "Performance-led polish",
    copy: "Intentional motion, accessible interactions, and fast-loading experiences designed to feel refined.",
  },
];

const stats = [
  { value: "2+", label: "Years building" },
  { value: "20+", label: "Interfaces shipped" },
  { value: "90+", label: "Lighthouse focus" },
];

const highlights = [
  { icon: Smartphone, text: "Mobile-first interactions" },
  { icon: Gauge, text: "Fast-loading sections" },
  { icon: Sparkles, text: "Intentional visual polish" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reducedMotion = shouldReduceMotion();
    if (reducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".about-intro", {
        scrollTrigger: { trigger: ".about-intro", start: "top 78%" },
        opacity: 0,
        y: 34,
        duration: 0.75,
        ease: "power3.out",
      });

      gsap.from(".about-copy", {
        scrollTrigger: { trigger: ".about-copy-wrap", start: "top 80%" },
        opacity: 0,
        y: 28,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".about-stat", {
        scrollTrigger: { trigger: ".about-stats", start: "top 82%" },
        opacity: 0,
        y: 20,
        duration: 0.45,
        stagger: 0.08,
        ease: "power2.out",
      });

      gsap.from(".about-card", {
        scrollTrigger: { trigger: ".about-grid", start: "top 78%" },
        opacity: 0,
        y: 36,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-shell px-4 py-16 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
        <div className="about-intro max-w-xl">
          <span className="section-kicker">About</span>
          <h2 className="section-title mt-6 text-white">
            Building frontend systems that feel composed from the first scroll.
          </h2>
        </div>

        <div className="about-copy-wrap glass-panel rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="about-copy section-copy">
                I&apos;m a frontend developer focused on React and Next.js,
                shaping interfaces with strong hierarchy, clean spacing, and
                motion that supports the experience instead of distracting from
                it.
              </p>
              <p className="about-copy section-copy mt-5">
                The work is design-sensitive and engineering-led: accessible
                layouts, scalable components, and performance-minded detail at
                every layer.
              </p>
            </div>
            <div className="hidden rounded-3xl border border-cyan-300/12 bg-cyan-300/10 p-3 text-cyan-200 sm:block">
              <Sparkles size={18} />
            </div>
          </div>

          <div className="about-stats mt-8 grid gap-4 border-t border-white/8 pt-6 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="about-stat">
                <p className="text-3xl font-semibold tracking-[-0.05em] text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 border-t border-white/8 pt-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.text}
                className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
              >
                <item.icon size={16} className="text-cyan-200" />
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.13em] text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-grid mx-auto mt-10 grid w-full max-w-7xl gap-5 md:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <article
              key={card.title}
              className="about-card interactive-card glass-panel rounded-[1.8rem] p-6 sm:p-7"
            >
              <div className="inline-flex rounded-2xl border border-cyan-300/14 bg-cyan-300/10 p-3 text-cyan-200">
                <Icon size={20} />
              </div>
              <h3 className="mt-6 text-[1.35rem] font-semibold tracking-[-0.035em] text-white sm:text-2xl sm:tracking-[-0.04em]">
                {card.title}
              </h3>
              <p className="mt-4 text-[0.9rem] leading-6 text-slate-400 sm:text-sm sm:leading-7">
                {card.copy}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
