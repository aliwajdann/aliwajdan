"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Terminal, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-50/50 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Sparkles size={14} />
            <span>Available for new projects</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Scalable Apps</span> with Precision.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
          >
            I'm a Senior Web Developer specializing in Next.js and TypeScript. I help businesses turn complex ideas into high-performance digital products.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <button className="group relative px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-2 overflow-hidden transition-all hover:bg-blue-600 active:scale-95 shadow-xl shadow-slate-200">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-3">
              <a href="#" className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
                <Github size={20} />
              </a>
              <a href="#" className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Trust Bar / Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full pt-12 border-t border-slate-100 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all"
          >
            <TechIcon name="Next.js" />
            <TechIcon name="TypeScript" />
            <TechIcon name="Tailwind" />
            <TechIcon name="Node.js" />
            <TechIcon name="PostgreSQL" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TechIcon = ({ name }: { name: string }) => (
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 rounded-full bg-slate-300" />
    <span className="text-sm font-bold text-slate-900">{name}</span>
  </div>
);

export default Hero;