"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowRight, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         // Placeholder for future animations or tracking
  //       }
  //     },
  //     { threshold: 0.1 }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => observer.disconnect();
  // }, []);

  const filters = ['all', 'web app', 'landing page', 'e-commerce', 'portfolio']; // Added portfolio to filters

  const projects = [
    {
      title: 'Velano Clothing Store',
      category: 'e-commerce',
      description:
        'A fully functional clothing e-commerce platform with product variants, cart system, checkout, and admin panel — built for real usage.',
      impact: [
        { icon: Zap, label: 'Real-time updates', value: 'Firestore' },
        { icon: Users, label: 'Admin panel', value: 'Product & order management' },
        { icon: TrendingUp, label: 'Optimized UX', value: 'Fast & responsive' }
      ],
      tech: ['Next.js', 'Tailwind', 'Firebase', 'Redux', 'Vercel'],
      image: 'project1',
      gradient: 'from-purple-600 to-pink-600',
      featured: true,
      link: "https://www.velanoshop.store/",
      page: "/velano",
      github: "https://github.com/aliwajdann/nexwear"
    },
    {
      title: 'Personal Portfolio',
      category: 'portfolio',
      description:
        'A modern, animated portfolio showcasing my projects, skills, and experience. Built with smooth UX, GSAP animations, and optimized performance.',
      impact: [
        { icon: Zap, label: 'Smooth animations', value: 'GSAP + Framer' },
        { icon: TrendingUp, label: 'Optimized', value: 'Lightweight & fast' },
        { icon: Users, label: 'Responsive', value: 'Across all devices' }
      ],
      tech: ['Next.js', 'Tailwind', 'GSAP', 'Framer Motion', 'React Three Fiber'],
      image: 'project2',
      gradient: 'from-blue-600 to-cyan-600',
      featured: true,
      link: "https://aliwajdan.vercel.app/",
      page: "/portfolio",
      github: "https://github.com/aliwajdann/aliwajdan"
    }

  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      id="work"
      // Adjusted padding for better rhythm
      className="relative py-16 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
    >
      {/* Background Elements (Kept the same) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-10 sm:mb-14 transition-all duration-700 opacity-100 translate-y-0`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
            <span className="text-xs sm:text-sm text-blue-300 font-medium">Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Projects That
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Make an Impact
            </span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Real projects, real results. Here's a selection of work I'm proud to have built.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 transition-all duration-700 delay-100 opacity-100 translate-y-0`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all capitalize duration-300
                ${activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-[1.05]' // Added scale for impact
                  : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:border-blue-500/50 hover:text-white hover:bg-slate-800 transition-colors' // Refined hover
                }`}
            >
              {filter.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative transition-all duration-700 opacity-100 translate-y-0`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                
                {/* Image/Thumbnail Area */}
                <div className="relative aspect-video overflow-hidden bg-slate-800">
                  {/* Placeholder with gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                  
                  {/* Project Preview (Icon) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {/* Live Demo Link */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-110 active:scale-[0.95] duration-150"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    {/* GitHub Link */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-110 active:scale-[0.95] duration-150"
                      aria-label="View Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-yellow-500/20 backdrop-blur-md rounded-full border border-yellow-500/30">
                      <span className="text-yellow-300 text-xs font-medium flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  {/* Title & Category */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      {/* Title hover effect refined */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {project.title}
                      </h3>
                      <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">
                        {project.category.replace('-', ' ')}
                      </span>
                    </div>
                    {/* Description text size reduced on mobile */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-4 py-4 border-y border-slate-800">
                    {project.impact.map((metric, i) => {
                      const Icon = metric.icon;
                      return (
                        <div key={i} className="text-center">
                          <Icon className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                          {/* Metrics text sizes adjusted */}
                          <div className="text-xs font-semibold text-white mb-0.5">
                            {metric.label}
                          </div>
                          <div className="text-[10px] text-slate-500">{metric.value}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        // Tech tag styling refined
                        className="px-3 py-1 bg-slate-800/60 border border-slate-700 rounded-lg text-xs text-slate-300 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Details Link */}
                  <Link
                    href={project.page}
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-all hover:scale-[1.01] active:scale-[0.99] duration-150"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Glow effect - Made it slightly more intense/blurry */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-15 blur-2xl transition-opacity pointer-events-none`} />
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA (Restored and styled for premium feel) */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-700 delay-500 opacity-100 translate-y-0`}>
          <a
            href="#" // Replace with actual link to "All Projects" page
            className="group inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 border-2 border-slate-700 rounded-full font-medium text-sm sm:text-base text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all hover:scale-[1.03] duration-300 shadow-md hover:shadow-blue-500/20"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}