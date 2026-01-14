"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Code, Rocket, Coffee, Globe2, Cpu } from "lucide-react";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <section id="about" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div {...fadeIn} className="flex items-center gap-2 text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">
            <User size={16} />
            <span>The Story</span>
          </motion.div>
          <motion.h2
            {...fadeIn}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Engineering with <span className="text-blue-600">Purpose.</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Main Bio Card */}
          <motion.div
            {...fadeIn}
            className="md:col-span-2 bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                I’m a developer who lives at the intersection of <span className="font-bold text-slate-900 underline decoration-blue-200 decoration-4">design and logic</span>.
                With over 4 years of experience, I don't just write code—I build digital experiences that are fast, accessible, and conversion-optimized.
              </p>
              <p className="text-slate-600 leading-relaxed">
                My philosophy is simple: tech should be invisible. Whether I'm architecting a Next.js dashboard or styling a landing page, my goal is to make the user's journey as frictionless as possible.
              </p>
            </div>

            <div className="mt-10 flex gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900">20+</span>
                <span className="text-sm text-slate-500 font-medium">Projects Done</span>
              </div>
              <div className="w-[1px] bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-900">4+</span>
                <span className="text-sm text-slate-500 font-medium">Years Exp.</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.1 }}
            className="bg-blue-600 p-8 rounded-[2rem] text-white flex flex-col justify-center items-center text-center group"
          >
            <div className="p-4 bg-white/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
              <Globe2 size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Remote Work</h3>
            <p className="text-blue-100 text-sm">Based in Europe, working with clients worldwide.</p>
          </motion.div>

          {/* Technical Approach */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm"
          >
            <div className="p-3 bg-orange-50 text-orange-500 w-fit rounded-xl mb-6">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Clean Architecture</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              I believe in "Dry" code and scalable folder structures. Maintainability is my top priority.
            </p>
          </motion.div>

          {/* Hobbies/Personal */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-slate-900 p-8 rounded-[2rem] text-white overflow-hidden relative"
          >
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Coffee size={20} className="text-blue-400" />
                  Beyond the Code
                </h3>
                <p className="text-slate-400 text-sm max-w-md">
                  When I'm not in front of a terminal, you'll find me exploring UI trends,
                  contributing to open source, or perfecting the ultimate pour-over coffee.
                </p>
              </div>
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-bold">
                    {i === 3 ? <Rocket size={16} /> : <Code size={16} />}
                  </div>
                ))}
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;