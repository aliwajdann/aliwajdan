"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import { shouldReduceMotion } from "@/app/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    description: "We start by understanding your business goals, target audience, and current challenges to create a data-driven roadmap.",
  },
  {
    icon: PenTool,
    title: "Design & Prototyping",
    description: "Our designers craft premium, high-converting interfaces that align with your brand and provide a seamless user experience.",
  },
  {
    icon: Code,
    title: "Development & Integration",
    description: "We build your solution using modern tech like Shopify and Next.js, ensuring high performance and scalable architecture.",
  },
  {
    icon: Rocket,
    title: "Optimization & Launch",
    description: "After rigorous testing and performance optimization, we launch your site and provide ongoing support for continued growth.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reducedMotion = shouldReduceMotion();
    if (reducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".process-intro", {
        scrollTrigger: { trigger: ".process-intro", start: "top 80%" },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".process-step", {
        scrollTrigger: { trigger: ".process-grid", start: "top 80%" },
        opacity: 0,
        y: 34,
        duration: 0.55,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="section-shell py-16 lg:py-28">
      <div className="process-intro mx-auto max-w-7xl">
        <span className="section-kicker">Our Process</span>
        <h2 className="section-title mt-6 max-w-4xl text-white">
          How we turn your vision into a high-performing digital asset.
        </h2>
      </div>

      <div className="process-grid mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="process-step glass-panel relative rounded-[2rem] p-6 sm:p-8">
              <div className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-sm font-bold text-cyan-300">
                0{index + 1}
              </div>
              <div className="rounded-2xl border border-cyan-300/14 bg-cyan-300/10 p-3 text-cyan-200 w-fit">
                <Icon size={24} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
