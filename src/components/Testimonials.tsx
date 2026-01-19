"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle2, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Momin",
    role: "Marketing Strategist",
    content: "Building Velano with Ali was seamless. The custom e-commerce dashboard he built allows me to manage products and edit customer reviews instantly without touching code. The site performance is top-tier.",
    avatar: "https://ui-avatars.com/api/?name=Momin&background=0D8ABC&color=fff",
    project: "Velano E-commerce"
  },
  {
    name: "Volpea Solutions",
    role: "Internal Feedback",
    content: "A developer with a rare eye for UI consistency. During his time here, Ali consistently delivered pixel-perfect interfaces that required zero design revisions. His work on our internal tools was exceptional.",
    avatar: "https://ui-avatars.com/api/?name=Volpea+Solutions&background=6366f1&color=fff",
    project: "Software Agency"
  },
  {
    name: "Gemini",
    role: "AI Thought Partner",
    content: "Ali's ability to bridge the gap between complex backend logic and sleek, responsive frontend design is impressive. He doesn't just write code; he architects scalable digital experiences.",
    avatar: "https://ui-avatars.com/api/?name=Gemini&background=f59e0b&color=fff",
    project: "Portfolio Collaboration"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header - Left Aligned for a more "Modern Agency" look */}
        <div className="max-w-2xl mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight"
          >
            What people say about <br />
            <span className="text-blue-600">working with me.</span>
          </motion.h2>
        </div>

        {/* Improved Bento-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col justify-between p-6 md:p-8 bg-slate-50 border border-slate-200/60 rounded-3xl hover:bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-6 right-6 text-slate-200 group-hover:text-blue-100 transition-colors" size={40} />

              <div className="relative z-10">
                {/* Project Tag */}
                <span className="inline-block px-2 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                  {item.project}
                </span>

                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-blue-500 text-blue-500" />
                  ))}
                </div>

                <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium mb-8">
                  "{item.content}"
                </p>
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-sm"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-0.5 border-2 border-white">
                    <CheckCircle2 size={10} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm md:text-base">{item.name}</h4>
                  <p className="text-[11px] md:text-xs text-slate-500 font-medium">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;