"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { shouldReduceMotion } from "@/app/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reducedMotion = shouldReduceMotion();
    if (reducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".cta-content", {
        scrollTrigger: { trigger: ".cta-content", start: "top 85%" },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-shell py-16 lg:py-28">
      <div className="cta-content glass-panel relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] p-8 text-center sm:p-16 lg:p-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_70%)]" />
        
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-200">
          <Sparkles size={14} />
          Limited Openings
        </div>
        
        <h2 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Ready to scale your <br className="hidden sm:block" /> digital presence?
        </h2>
        
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          Let&apos;s build a high-performance SaaS platform, Shopify store, or custom web application that drives results for your business. Book your free consultation today and let&apos;s discuss your project.
        </p>
        
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-500 px-8 py-4 text-base font-bold text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.3)] transition duration-200 hover:scale-105 hover:shadow-[0_0_40px_rgba(56,189,248,0.4)] active:scale-95"
          >
            Get a Free Consultation
            <ArrowUpRight size={20} />
          </a>
          <a
            href="#projects"
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition duration-200 hover:bg-white/10 active:scale-95"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
