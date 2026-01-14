"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Layout, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Eco-Commerce Platform",
    description: "A high-performance e-commerce engine focused on sustainability and lightning-fast load times.",
    tech: ["Next.js 14", "Stripe", "PostgreSQL", "Tailwind"],
    link: "#",
    github: "#",
    color: "bg-emerald-50"
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Real-time data visualization platform for B2B startups to track user retention metrics.",
    tech: ["TypeScript", "Recharts", "Prisma", "Auth.js"],
    link: "#",
    github: "#",
    color: "bg-blue-50"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header - Simple Fade In */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs mb-3"
            >
              <Layout size={16} />
              <span>Selected Work</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Crafting digital products with <span className="text-slate-400">clean code.</span>
            </h2>
          </div>
          <button className="text-blue-600 font-semibold flex items-center gap-2">
            View All Projects <ArrowUpRight size={20} />
          </button>
        </div>

        {/* Project List */}
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              // Optimization: Use simple opacity for mobile, avoid Y-axis movement if lag persists
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              // Removed 'backdrop-blur' and 'hover:shadow-2xl' which are heavy on mobile
              className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-[2.5rem] p-4 md:p-8 transition-colors duration-300 ${project.color} border border-slate-100`}
            >
              {/* Placeholder for Image - use a simple colored div to test lag */}
              <div className="relative overflow-hidden rounded-[2rem] aspect-[16/10] bg-slate-200/50 shadow-md">
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  Project Preview
                </div>
              </div>

              {/* Content Side */}
              <div className="px-2 md:px-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      // Optimization: Removed backdrop-blur-sm
                      className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{project.title}</h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-6">
                  <a href={project.link} className="flex items-center gap-2 font-bold text-slate-900">
                    Live Demo <ExternalLink size={18} />
                  </a>
                  <a href={project.github} className="flex items-center gap-2 font-bold text-slate-900">
                    View Code <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;