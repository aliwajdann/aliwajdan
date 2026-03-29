"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, Mail } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { shouldReduceMotion } from "@/app/lib/motion";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const METRICS = [
  { value: "React", label: "UI systems" },
  { value: "Next.js", label: "App architecture" },
  { value: "GSAP", label: "Motion design" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reducedMotion = shouldReduceMotion();
    if (reducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(
        [".hero-heading", ".hero-copy", ".hero-cta", ".hero-visual"],
        { willChange: "transform, opacity" }
      );

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-kicker", {
          opacity: 0,
          y: 18,
          duration: 0.45,
        })
        .from(
          ".hero-heading-line",
          {
            opacity: 0,
            y: 36,
            duration: 0.7,
            stagger: 0.1,
          },
          "-=0.15"
        )
        .from(
          ".hero-copy",
          {
            opacity: 0,
            y: 22,
            duration: 0.55,
          },
          "-=0.35"
        )
        .from(
          ".hero-cta",
          {
            opacity: 0,
            y: 18,
            duration: 0.45,
            stagger: 0.1,
          },
          "-=0.25"
        )
        .from(
          ".hero-metric",
          {
            opacity: 0,
            y: 16,
            duration: 0.4,
            stagger: 0.08,
          },
          "-=0.2"
        )
        .from(
          ".hero-visual",
          {
            opacity: 0,
            y: 28,
            scale: 0.98,
            duration: 0.7,
          },
          "-=0.55"
        );

      gsap.to(".hero-orb-primary", {
        y: -18,
        x: 16,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-orb-secondary", {
        y: 16,
        x: -12,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-grid", {
        rotate: 360,
        duration: 42,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${inter.className} relative isolate flex min-h-screen items-center overflow-hidden bg-[#050816] px-3 pb-14 pt-24 text-white sm:px-6 lg:px-10`}
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_80%_22%,rgba(96,165,250,0.18),transparent_24%),linear-gradient(180deg,#07101f_0%,#050816_55%,#04060f_100%)]" />
      <div className="hero-orb-primary absolute left-[-8rem] top-[12%] -z-10 hidden h-72 w-72 rounded-full bg-cyan-400/15 blur-[110px] md:block" />
      <div className="hero-orb-secondary absolute right-[-5rem] top-[20%] -z-10 hidden h-80 w-80 rounded-full bg-blue-500/20 blur-[120px] md:block" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#050816] to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:gap-12">
        <div className="max-w-2xl">
          <div className="hero-kicker inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/80 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
            Frontend Developer
          </div>

          <div className="hero-heading mt-8 space-y-3 sm:space-y-4">
            <h1 className="hero-heading-line text-balance text-[2rem] font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
              Designing interfaces
            </h1>
            <h1 className="hero-heading-line text-balance text-[2rem] font-semibold leading-[0.98] tracking-[-0.05em] text-white/92 sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
              that feel sharp,
            </h1>
            <h1 className="hero-heading-line bg-gradient-to-r from-cyan-300 via-blue-300 to-sky-500 bg-clip-text text-balance text-[2rem] font-semibold leading-[0.98] tracking-[-0.05em] text-transparent sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
              fast, and premium.
            </h1>
          </div>

          <p className="hero-copy mt-7 max-w-xl text-pretty text-[0.88rem] leading-6 text-slate-300 sm:text-lg sm:leading-8">
            I build polished frontend experiences with React, Next.js, and
            motion that feels deliberate. Clean systems, strong visual
            hierarchy, and smooth interactions are the baseline.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {["Mobile-first performance", "Visual hierarchy", "Conversion-focused UI"].map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100/90"
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#projects"
              className="hero-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-5 py-2.5 text-[0.82rem] font-semibold text-slate-950 shadow-[0_0_24px_rgba(56,189,248,0.24)] transition duration-200 hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(56,189,248,0.34)] active:scale-[0.98] sm:min-h-13 sm:px-6 sm:py-3 sm:text-sm"
            >
              View Projects
              <ArrowUpRight size={17} />
            </Link>

            <a
              href="#contact"
              className="hero-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-2.5 text-[0.82rem] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md transition duration-200 hover:scale-[1.02] hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-cyan-100 active:scale-[0.98] sm:min-h-13 sm:px-6 sm:py-3 sm:text-sm"
            >
              Contact Me
              <Mail size={16} />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {METRICS.map((item) => (
              <div
                key={item.value}
                className="hero-metric rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 backdrop-blur-sm"
              >
                <p className="text-[0.84rem] font-semibold text-white sm:text-sm">{item.value}</p>
                <p className="mt-1 text-[0.8rem] text-slate-400 sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual relative mx-auto flex w-full max-w-[22rem] justify-center sm:max-w-[28rem] lg:max-w-[32rem] lg:justify-end">
          <div className="relative aspect-[0.86] w-full max-w-[21.5rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_24px_90px_rgba(3,7,18,0.65)] backdrop-blur-xl sm:aspect-[0.9] sm:max-w-[26rem] sm:p-5 lg:aspect-[0.94] lg:max-w-[30rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.18),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
            <div className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15" />
            <div className="hero-grid absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10">
              <div className="absolute inset-[14%] rounded-full border border-cyan-300/20" />
              <div className="absolute inset-[28%] rounded-full border border-blue-300/15" />
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-300/35 to-transparent" />
              <div className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
            </div>

            <div className="relative flex h-full flex-col justify-between rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(7,14,28,0.76),rgba(7,14,28,0.32))] p-4 sm:p-6 lg:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.26em] text-slate-400 sm:text-xs sm:tracking-[0.3em]">
                    Selected Stack
                  </p>
                  <p className="mt-2 text-[1.15rem] font-semibold leading-tight tracking-[-0.03em] text-white sm:mt-3 sm:text-2xl sm:tracking-[-0.04em]">
                    Modern frontend,
                    <br />
                    refined motion.
                  </p>
                </div>
                <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-[0.62rem] font-medium text-cyan-100 sm:px-3 sm:text-xs">
                  Available
                </div>
              </div>

              <div className="grid gap-2.5 sm:gap-3">
                {[
                  "Responsive layouts with strong visual rhythm",
                  "Interactive React and Next.js experiences",
                  "GSAP-led motion with lightweight polish",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-3 text-[0.8rem] leading-5 text-slate-300 sm:px-4 sm:py-4 sm:text-sm sm:leading-6"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.2em] text-slate-500 sm:text-xs sm:tracking-[0.24em]">
                    Focus
                  </p>
                  <p className="mt-2 text-[0.95rem] font-medium text-white sm:text-lg">
                    Premium UI systems with performance in mind.
                  </p>
                </div>
                <div className="h-14 w-14 rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.85)_0%,rgba(59,130,246,0.22)_42%,transparent_72%)] blur-sm sm:h-20 sm:w-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
