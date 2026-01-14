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
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=60&w=800", // Optimized width/quality
    color: "bg-emerald-50"
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Real-time data visualization platform for B2B startups to track user retention metrics.",
    tech: ["TypeScript", "Recharts", "Prisma", "Auth.js"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=60&w=800", // Optimized width/quality
    color: "bg-blue-50"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
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
          <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            View All Projects <ArrowUpRight size={20} />
          </button>
        </div>

        {/* Project List */}
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }} // Reduced y distance for smoother feel
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }} // Triggers slightly before/after entering screen
              transition={{ duration: 0.5, delay: index * 0.05 }} // Faster transition
              className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-[2.5rem] p-4 md:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-100/50 ${project.color} border border-transparent hover:border-white will-change-transform`}
            >
              {/* Image Side - Optimized for performance */}
              <div className="relative overflow-hidden rounded-[2rem] aspect-[16/10] shadow-2xl bg-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy" // Native lazy loading
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 motion-safe:transform-gpu"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Content Side */}
              <div className="px-4 md:px-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-600 text-xs font-bold rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{project.title}</h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-6">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    Live Demo <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
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