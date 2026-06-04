"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, Star } from "lucide-react";
import { shouldReduceMotion } from "@/app/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    name: "Momin",
    role: "E-commerce Founder",
    content:
      "Working with Velano Digital was a game-changer for our Shopify store. The custom dashboard they built allows us to manage products and reviews seamlessly without touching code.",
    avatar: "https://ui-avatars.com/api/?name=Momin&background=0D8ABC&color=fff",
    project: "Shopify Store",
  },
  {
    name: "Volpea Solutions",
    role: "SaaS Founder",
    content:
      "A rare eye for UI consistency and performance. Velano Digital consistently delivered pixel-perfect interfaces that required minimal revision and improved our user retention.",
    avatar:
      "https://ui-avatars.com/api/?name=Volpea+Solutions&background=6366f1&color=fff",
    project: "Web Application",
  },
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    content:
      "They bridge the gap between complex logic and polished frontend execution. Our new landing pages have seen a 25% increase in conversion rates since the redesign.",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen&background=f59e0b&color=fff",
    project: "Growth Campaign",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reducedMotion = shouldReduceMotion();
    if (reducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".testimonials-intro", {
        scrollTrigger: { trigger: ".testimonials-intro", start: "top 80%" },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".testimonial-card", {
        scrollTrigger: { trigger: ".testimonials-grid", start: "top 80%" },
        opacity: 0,
        y: 34,
        duration: 0.55,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="section-shell py-16 lg:py-28"
    >
      <div className="testimonials-intro mx-auto max-w-7xl">
        <span className="section-kicker">Testimonials</span>
        <h2 className="section-title mt-6 max-w-4xl text-white">
          Trusted by businesses to deliver premium digital results.
        </h2>
      </div>

      <div className="testimonials-grid mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="testimonial-card interactive-card glass-panel relative rounded-[2rem] p-5 sm:p-7"
          >
            <Quote
              className="absolute right-6 top-6 text-cyan-300/18"
              size={38}
            />

            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-300">
              {item.project}
            </span>

            <div className="mt-5 flex gap-1 text-cyan-300">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={15} className="fill-current" />
              ))}
            </div>

            <p className="mt-5 text-[0.86rem] leading-6 text-slate-300 sm:text-[0.96rem] sm:leading-7">
              &quot;{item.content}&quot;
            </p>

            <div className="mt-8 flex items-center gap-4 border-t border-white/8 pt-5">
              <img
                src={item.avatar}
                alt={item.name}
                className="h-12 w-12 rounded-full border border-white/10 object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
