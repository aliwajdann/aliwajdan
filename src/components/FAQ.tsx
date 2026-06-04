"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus } from "lucide-react";
import { shouldReduceMotion } from "@/app/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "A standard landing page or small Shopify store usually takes 2-4 weeks. More complex custom applications or large e-commerce redesigns can take 6-12 weeks depending on requirements.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! We work with businesses globally. We use tools like Slack, Zoom, and Notion to ensure seamless communication and project management regardless of your time zone.",
  },
  {
    question: "Which platforms do you support?",
    answer: "We specialize in Shopify for e-commerce and Next.js/React for custom web applications. We also provide headless commerce solutions and integration with various CMS platforms.",
  },
  {
    question: "How much does a new website cost?",
    answer: "Project pricing varies based on scope and complexity. We offer transparent, fixed-price quotes after our discovery call. Our goal is to provide high-value solutions that deliver a clear ROI.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. We provide ongoing maintenance and support packages to ensure your site stays secure, updated, and continues to perform optimally as your business grows.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const reducedMotion = shouldReduceMotion();
    if (reducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".faq-intro", {
        scrollTrigger: { trigger: ".faq-intro", start: "top 80%" },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".faq-item", {
        scrollTrigger: { trigger: ".faq-list", start: "top 80%" },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="section-shell py-16 lg:py-28">
      <div className="faq-intro mx-auto max-w-3xl text-center">
        <span className="section-kicker mx-auto">FAQ</span>
        <h2 className="section-title mt-6 text-white">
          Common questions about working with us.
        </h2>
      </div>

      <div className="faq-list mx-auto mt-12 max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item glass-panel overflow-hidden rounded-[1.5rem] transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <span className="text-lg font-medium text-white">{faq.question}</span>
              <div className="ml-4 flex-shrink-0 text-cyan-300">
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-48" : "max-h-0"
              }`}
            >
              <p className="px-6 pb-6 text-sm leading-7 text-slate-400">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
