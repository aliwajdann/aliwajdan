"use client";
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
    <section id="about" className="py-16 md:py-24 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="mb-10 md:mb-16">
          <motion.div {...fadeIn} className="flex items-center gap-2 text-blue-600 font-bold tracking-wider uppercase text-xs md:text-sm mb-3">
            <User size={14} />
            <span>The Story</span>
          </motion.div>
          <motion.h2
            {...fadeIn}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6"
          >
            Engineering with <span className="text-blue-600">Purpose.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

          {/* Main Bio Card */}
          <motion.div
            {...fadeIn}
            className="md:col-span-2 bg-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Reduced text size to text-lg on mobile */}
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-4 md:mb-6">
                I’m a developer who lives at the intersection of <span className="font-bold text-slate-900 underline decoration-blue-200 decoration-4">design and logic</span>.
                With over 2 years of experience, I build digital experiences that are fast and accessible.
              </p>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                My philosophy is simple: tech should be invisible. Whether I'm architecting a Next.js dashboard or styling a landing page, my goal is to make the user's journey frictionless.
              </p>
            </div>

            <div className="mt-8 md:mt-10 flex gap-6">
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-slate-900">3+</span>
                <span className="text-[10px] md:text-sm text-slate-500 font-medium uppercase tracking-tight">Projects Done</span>
              </div>
              <div className="w-[1px] bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-slate-900">2+</span>
                <span className="text-[10px] md:text-sm text-slate-500 font-medium uppercase tracking-tight">Years Exp.</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Info Card - Globe */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.1 }}
            className="bg-blue-600 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] text-white flex flex-col justify-center items-center text-center group"
          >
            <div className="p-3 md:p-4 bg-white/10 rounded-2xl mb-3 md:mb-4 group-hover:scale-110 transition-transform">
              <Globe2 size={28} className="md:w-8 md:h-8" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Remote Work</h3>
            <p className="text-blue-100 text-xs md:text-sm">Based in Asia, working with clients worldwide.</p>
          </motion.div>

          {/* Technical Approach Card */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 shadow-sm"
          >
            <div className="p-2.5 bg-orange-50 text-orange-500 w-fit rounded-xl mb-4 md:mb-6">
              <Cpu size={20} className="md:w-6 md:h-6" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">Clean Architecture</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              I believe in "Dry" code and scalable structures. Maintainability is my top priority.
            </p>
          </motion.div>

          {/* Hobbies/Personal Card */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-slate-900 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] text-white overflow-hidden relative"
          >
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 flex items-center gap-2">
                  <Coffee size={18} className="text-blue-400" />
                  Beyond the Code
                </h3>
                <p className="text-slate-400 text-xs md:text-sm max-w-md leading-relaxed">
                  When I'm not in front of a terminal, I'm exploring UI trends,
                  contributing to open source, or perfecting the ultimate coffee.
                </p>
              </div>
              {/* Stacked icons - hidden on very small screens to save space if needed, or kept for flair */}
              <div className="flex -space-x-3 md:-space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-bold">
                    {i === 3 ? <Rocket size={14} /> : <Code size={14} />}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;