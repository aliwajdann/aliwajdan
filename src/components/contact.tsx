"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { shouldReduceMotion } from "@/app/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "aliwajdan.it@gmail.com",
    link: "mailto:aliwajdan.it@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "@ali-wajdan",
    link: "https://linkedin.com/in/ali-wajdan/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@aliwajdann",
    link: "https://github.com/aliwajdann",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const reducedMotion = shouldReduceMotion();
    if (reducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".contact-intro", {
        scrollTrigger: { trigger: ".contact-intro", start: "top 80%" },
        opacity: 0,
        y: 32,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".contact-panel", {
        scrollTrigger: { trigger: ".contact-grid", start: "top 82%" },
        opacity: 0,
        y: 34,
        duration: 0.65,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      window.setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      setError("Message could not be sent right now. Please try email or LinkedIn.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-shell pb-16 pt-16 lg:pb-20 lg:pt-28"
    >
      <div className="contact-intro mx-auto max-w-7xl">
        <span className="section-kicker">Contact</span>
        <h2 className="section-title mt-6 max-w-4xl text-white">
          Ready to build something sharp, responsive, and production-ready.
        </h2>
      </div>

      <div className="contact-grid mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1.1fr)_360px]">
        <div className="contact-panel glass-panel rounded-[2rem] p-5 sm:p-7 lg:p-10">
          {isSubmitted ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <div className="flex h-18 w-18 items-center justify-center rounded-full bg-cyan-300/14 text-cyan-200">
                <CheckCircle2 size={34} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                Message sent.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                Your note reached the inbox. I&apos;ll get back to you as soon as
                possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-left">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Name
                  </span>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-3.5 py-3 text-[0.86rem] text-white outline-none transition duration-200 placeholder:text-slate-500 focus:border-cyan-300/30 focus:bg-cyan-300/[0.05] sm:px-4 sm:py-3.5 sm:text-sm"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-left">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-3.5 py-3 text-[0.86rem] text-white outline-none transition duration-200 placeholder:text-slate-500 focus:border-cyan-300/30 focus:bg-cyan-300/[0.05] sm:px-4 sm:py-3.5 sm:text-sm"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="block text-left">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Subject
                </span>
                <input
                  required
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-3.5 py-3 text-[0.86rem] text-white outline-none transition duration-200 placeholder:text-slate-500 focus:border-cyan-300/30 focus:bg-cyan-300/[0.05] sm:px-4 sm:py-3.5 sm:text-sm"
                  placeholder="Project inquiry"
                />
              </label>

              <label className="block text-left">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Message
                </span>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-3.5 py-3 text-[0.86rem] text-white outline-none transition duration-200 placeholder:text-slate-500 focus:border-cyan-300/30 focus:bg-cyan-300/[0.05] sm:px-4 sm:py-3.5 sm:text-sm"
                  placeholder="Tell me about the product, goals, and timeline."
                />
              </label>

              {error ? (
                <p className="text-sm text-rose-300">{error}</p>
              ) : null}

              <button
                disabled={isLoading}
                className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 to-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:scale-[1.01] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          )}
        </div>

        <div className="contact-panel flex flex-col gap-6">
          <div className="glass-panel rounded-[2rem] p-5 sm:p-7">
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
              Connect directly
            </h3>
            <div className="mt-6 space-y-3">
              {contactMethods.map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-card flex items-center justify-between rounded-[1.5rem] border border-white/8 bg-white/[0.03] px-4 py-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl border border-cyan-300/14 bg-cyan-300/10 p-3 text-cyan-200">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm text-slate-200">{item.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={17} className="text-slate-500" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div className="glass-panel rounded-[2rem] p-5 sm:p-6">
              <Clock3 className="text-cyan-200" size={22} />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Response Time
              </p>
              <p className="mt-2 text-base font-semibold text-white sm:text-lg">Usually under 12 hours</p>
            </div>
            <div className="glass-panel rounded-[2rem] p-5 sm:p-6">
              <MapPin className="text-cyan-200" size={22} />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Location
              </p>
              <p className="mt-2 text-base font-semibold text-white sm:text-lg">Pakistan, remote worldwide</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
