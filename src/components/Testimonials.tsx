"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO at TechFlow",
    content: "Working with this dev was a game-changer. Our site speed increased by 40%, and the conversion rate followed. Truly a Next.js wizard.",
    avatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    content: "The attention to detail in the UI is incredible. It's rare to find a developer who truly understands both design and scalable architecture.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "James Wilson",
    role: "Startup Founder",
    content: "Delivered a complex SaaS dashboard 2 weeks ahead of schedule. The code is clean, documented, and easy for our internal team to maintain.",
    avatar: "https://i.pravatar.cc/150?u=james",
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white" />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-700">Trusted by 20+ clients</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Don't take my word for it.
          </h2>
          <p className="text-slate-600 max-w-xl">
            Hear from the founders and managers I've collaborated with to build high-performance products.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-100/30 transition-all group"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-blue-50/50 group-hover:text-blue-100 transition-colors">
                <Quote size={40} fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-8 relative z-10 italic">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full bg-slate-100"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <h4 className="font-bold text-slate-900 leading-none">{item.name}</h4>
                    <CheckCircle2 size={14} className="text-blue-500" />
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA for trust */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-8 opacity-40 grayscale"
        >
          {/* You can put company logos here if you have them */}
          <span className="font-black text-2xl tracking-tighter text-slate-900">COMPANY_A</span>
          <span className="font-black text-2xl tracking-tighter text-slate-900">STARTUP_X</span>
          <span className="font-black text-2xl tracking-tighter text-slate-900">GLOBAL_INC</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;