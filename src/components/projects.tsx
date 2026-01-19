"use client";

import { motion } from "framer-motion";
import { image } from "framer-motion/client";
import { ExternalLink, Github, Layout, ArrowUpRight } from "lucide-react";
import { Oooh_Baby } from "next/font/google";

const projects = [
  {
    title: "Eco-Commerce Platform",
    description: "A high-performance e-commerce engine focused on sustainability and fast load times. With Dashboard features.",
    tech: ["Next.js", "Firebase", "Typescript"],
    link: "#https://www.velanoshop.store/",
    github: "#https://github.com/aliwajdann/nexwear",
    color: "bg-emerald-50",
    image: "https://cdn.velanoshop.store/banners//velano.png"
  },
  {
    title: "Personal Portfolio Website",
    description: "A responsive portfolio site built with modern web technologies.",
    tech: ["Framer-motion", "TypeScript", "Next.js"],
    link: "#",
    github: "#https://github.com/aliwajdann/aliwajdan",
    color: "bg-blue-50",
    image: "https://cdn.velanoshop.store/banners//portfolio.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-2 md:mb-3"
            >
              <Layout size={14} className="md:w-4 md:h-4" />
              <span>Selected Work</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.2] md:leading-tight">
              Crafting products with <span className="text-slate-400">clean code.</span>
            </h2>
          </div>
          <button className="text-blue-600 font-bold text-sm md:text-base flex items-center gap-1.5 self-start md:self-auto">
            View All Projects <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4 }}
              className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-8 transition-colors duration-300 ${project.color} border border-slate-100`}
            >
              <div className="relative overflow-hidden rounded-[1.25rem] md:rounded-[2rem] aspect-[16/9] md:aspect-[16/10] bg-slate-200/50 shadow-sm">
                <img src={project.image} className="w-full h-full flex items-center justify-center text-slate-400 text-sm font-medium" />
                {/* <img  alt="" /> */}
                {/* </div> */}
              </div>

              <div className="px-1 md:px-8">
                <div className="flex flex-wrap gap-1.5 mb-4 md:mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 bg-white border border-slate-200 text-slate-600 text-[10px] md:text-xs font-bold rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 md:mb-4">{project.title}</h3>
                <p className="text-slate-600 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-5">
                  <a href={project.link} className="flex items-center gap-1.5 text-sm md:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a href={project.github} className="flex items-center gap-1.5 text-sm md:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    View Code <Github size={16} />
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