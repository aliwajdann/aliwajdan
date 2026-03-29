"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Github, Linkedin, Mail } from "lucide-react";
import { shouldReduceMotion } from "@/app/lib/motion";

const links = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "Email",
    href: "mailto:aliwajdan.it@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ali-wajdan/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/aliwajdann",
    icon: Github,
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reducedMotion = shouldReduceMotion();
    if (reducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".footer-block", {
        opacity: 0,
        y: 24,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="section-shell pb-10 lg:pb-12"
    >
      <div className="glass-panel mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] px-4 py-7 sm:px-7 sm:py-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="footer-block max-w-lg">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-500">
            Ali Wajdan
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl">
            Designing and shipping frontend experiences with clarity and polish.
          </h3>
        </div>

        <div className="footer-block flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition duration-200 hover:text-cyan-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-card inline-flex items-center gap-2 rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2.5 text-[0.86rem] text-slate-300 sm:px-4 sm:py-3 sm:text-sm"
                >
                  <Icon size={16} />
                  {item.label}
                </a>
              );
            })}
          </div>

          <p className="text-sm text-slate-500">© 2026 Ali Wajdan</p>
        </div>
      </div>
    </footer>
  );
}
