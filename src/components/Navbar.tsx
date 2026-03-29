"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Menu, Send, X } from "lucide-react";
import Link from "next/link";
import { shouldReduceMotion } from "@/app/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = shouldReduceMotion();
    const ctx = gsap.context(() => {
      if (reducedMotion) {
        return;
      }

      gsap.from(".nav-shell", {
        y: -24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          gsap.set(progressRef.current, {
            scaleX: self.progress,
            transformOrigin: "left center",
          });
        },
      });

      ScrollTrigger.create({
        start: 40,
        end: "max",
        onToggle: (self) => {
          navRef.current?.classList.toggle("is-scrolled", self.isActive);
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[70] hidden h-1 overflow-hidden bg-white/[0.03] backdrop-blur-sm md:block">
        <div
          ref={progressRef}
          className="h-full origin-left scale-x-0 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 shadow-[0_0_24px_rgba(56,189,248,0.6)]"
        />
      </div>

      <nav
        ref={navRef}
        className="fixed inset-x-0 top-0 z-[60] px-2.5 pt-4 sm:px-5 lg:px-8"
      >
        <div className="nav-shell mx-auto flex w-full max-w-7xl items-center justify-between rounded-[1.4rem] border border-white/10 bg-slate-950/92 px-3 py-3 shadow-[0_10px_30px_rgba(2,6,23,0.28)] transition-all duration-300 sm:rounded-[1.6rem] sm:px-5 sm:py-3.5 md:bg-slate-950/55 md:shadow-[0_18px_70px_rgba(2,6,23,0.35)] md:backdrop-blur-xl">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 transition duration-200 group-hover:scale-[1.05] group-hover:border-cyan-300/35 group-hover:bg-cyan-300/16 sm:h-11 sm:w-11">
              <Code2 size={18} className="text-cyan-200 sm:hidden" />
              <Code2 size={20} className="hidden text-cyan-200 sm:block" />
            </div>
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-500">
                Portfolio
              </p>
              <p className="text-[0.86rem] font-semibold tracking-[-0.03em] text-white sm:text-base sm:tracking-[-0.04em]">
                Ali Wajdan
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition duration-200 hover:text-cyan-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="#contact"
              className="inline-flex min-h-11 items-center gap-2 rounded-2xl border border-cyan-300/20 bg-gradient-to-r from-cyan-300/95 to-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(56,189,248,0.24)] transition duration-200 hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(56,189,248,0.35)] active:scale-[0.98]"
            >
              Contact
              <Send size={15} />
            </Link>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-200 transition duration-200 active:scale-[0.96] lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="mx-auto mt-3 w-full max-w-7xl rounded-[1.5rem] border border-white/10 bg-slate-950/95 p-3.5 shadow-[0_16px_50px_rgba(2,6,23,0.35)] lg:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition duration-200 hover:bg-white/[0.04] active:scale-[0.98]"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 to-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 active:scale-[0.98]"
              >
                Let&apos;s Talk
                <Send size={15} />
              </Link>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        .is-scrolled .nav-shell {
          border-color: rgba(94, 234, 212, 0.16);
          background: rgba(2, 6, 23, 0.78);
          box-shadow: 0 20px 90px rgba(2, 6, 23, 0.44);
        }
      `}</style>
    </>
  );
};

export default Navbar;
