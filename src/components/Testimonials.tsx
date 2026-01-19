"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO at TechFlow",
    content: "Working with this dev was a game-changer. Our site speed increased by 40%. Truly a Next.js wizard.",
    avatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    content: "The attention to detail in the UI is incredible. It's rare to find a dev who truly understands both design and logic.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "James Wilson",
    role: "Startup Founder",
    content: "Delivered a complex SaaS dashboard 2 weeks ahead of schedule. The code is clean and easy to maintain.",
    avatar: "https://i.pravatar.cc/150?u=james",
  }
];

const Testimonials = () => {
  return (
    // Reduced vertical padding for mobile
    <section className="py-16 md:py-24 bg-slate-50/50 relative overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header - Scaled down for mobile */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-4 md:mb-6"
          >
            <div className="flex -space-x-1.5 md:-space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-slate-200 border-2 border-white" />
              ))}
            </div>
            <span className="text-[10px] md:text-sm font-bold text-slate-700 uppercase tracking-tight">Trusted by 20+ clients</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-4 px-2">
            Don't take my word for it.
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-xl">
            Hear from the founders and managers I've collaborated with.
          </p>
        </div>

        {/* Testimonials Grid - Tightened gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }} // Reduced Y offset for smoother mobile feel
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // Reduced p-6 and rounding to 1.5rem for mobile
              className="relative bg-white p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-lg transition-all group"
            >
              {/* Quote Icon - Scaled down */}
              <div className="absolute top-6 right-6 text-blue-50/50">
                <Quote size={32} className="md:w-10 md:h-10" fill="currentColor" />
              </div>

              {/* Rating - Smaller star gap */}
              <div className="flex gap-0.5 mb-4 md:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-6 md:mb-8 relative z-10 italic">
                "{item.content}"
              </p>

              <div className="flex items-center gap-3 border-t border-slate-50 pt-5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 object-cover"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <h4 className="font-bold text-slate-900 text-sm md:text-base leading-none">{item.name}</h4>
                    <CheckCircle2 size={12} className="text-blue-500" />
                  </div>
                  <p className="text-[11px] md:text-sm text-slate-500 mt-1">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Bar - Scaled for mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-30 grayscale"
        >
          <span className="font-black text-lg md:text-2xl tracking-tighter text-slate-900">COMPANY_A</span>
          <span className="font-black text-lg md:text-2xl tracking-tighter text-slate-900">STARTUP_X</span>
          <span className="font-black text-lg md:text-2xl tracking-tighter text-slate-900">GLOBAL_INC</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;