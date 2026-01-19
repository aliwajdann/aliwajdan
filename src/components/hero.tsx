"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-50/50 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles size={12} className="md:w-3.5 md:h-3.5" />
            <span>Available for new projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.15] md:leading-[1.1] mb-4"
          >
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Scalable Apps</span> with Precision.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed px-2 md:px-0"
          >
            I'm a Front End Developer specializing in Next.js and TypeScript. I help businesses turn complex ideas into high-performance digital products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-3 mb-12 md:mb-16"
          >
            <Link key={"work-button"} href="#projects" className="w-full sm:w-auto group relative px-7 py-3.5 md:px-8 md:py-4 bg-slate-900 text-white rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-2 overflow-hidden transition-all hover:bg-blue-600 active:scale-95 shadow-lg shadow-slate-200">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex items-center gap-3">
              <a href="https://github.com/aliwajdann" className="p-3.5 md:p-4 rounded-xl md:rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ali-wajdan/" className="p-3.5 md:p-4 rounded-xl md:rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full pt-8 md:pt-12 border-t border-slate-100 flex flex-wrap justify-center gap-6 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all"
          >
            <TechIcon name="Next.js" />
            <TechIcon name="TypeScript" />
            <TechIcon name="Tailwind" />
            <TechIcon name="React.js" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TechIcon = ({ name }: { name: string }) => (
  <div className="flex items-center gap-2">
    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-300" />
    <span className="text-[12px] md:text-sm font-bold text-slate-900">{name}</span>
  </div>
);

export default Hero;