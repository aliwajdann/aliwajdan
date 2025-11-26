"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowRight, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

export default function Projects() {
  // const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filters = ['all', 'web app', 'landing page', 'e-commerce'];

  const projects = [
    {
      title: 'SaaS Dashboard Platform',
      category: 'web app',
      description: 'A complete analytics dashboard for SaaS companies with real-time data visualization, team collaboration, and automated reporting.',
      impact: [
        { icon: TrendingUp, label: '40% faster insights', value: 'Performance' },
        { icon: Users, label: '10k+ active users', value: 'Reach' },
        { icon: Zap, label: '99.9% uptime', value: 'Reliability' }
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
      image: 'project1',
      gradient: 'from-purple-600 to-blue-600',
      featured: true
    },
    {
      title: 'AI-Powered E-Commerce',
      category: 'e-commerce',
      description: 'Next-gen online store with AI product recommendations, smart search, and seamless checkout experience.',
      impact: [
        { icon: TrendingUp, label: '250% sales increase', value: 'Revenue' },
        { icon: Users, label: '50k+ customers', value: 'Growth' },
        { icon: Zap, label: '<2s load time', value: 'Speed' }
      ],
      tech: ['Next.js', 'Stripe', 'MongoDB', 'TensorFlow', 'Vercel'],
      image: 'project2',
      gradient: 'from-blue-600 to-cyan-600',
      featured: true
    },
    {
      title: 'Creative Agency Website',
      category: 'landing page',
      description: 'Award-winning portfolio site with stunning animations, smooth transitions, and immersive storytelling.',
      impact: [
        { icon: TrendingUp, label: '300% more leads', value: 'Conversion' },
        { icon: Users, label: '100k+ monthly views', value: 'Traffic' },
        { icon: Sparkles, label: 'Awwwards nominee', value: 'Recognition' }
      ],
      tech: ['React', 'Three.js', 'GSAP', 'Tailwind', 'Framer'],
      image: 'project3',
      gradient: 'from-orange-600 to-pink-600',
      featured: false
    },
    {
      title: 'Fitness Tracking App',
      category: 'web app',
      description: 'Social fitness platform connecting trainers and clients with workout plans, progress tracking, and community features.',
      impact: [
        { icon: Users, label: '25k+ downloads', value: 'Adoption' },
        { icon: TrendingUp, label: '4.8★ rating', value: 'Satisfaction' },
        { icon: Zap, label: 'Real-time sync', value: 'Technology' }
      ],
      tech: ['React Native', 'Firebase', 'GraphQL', 'Stripe'],
      image: 'project4',
      gradient: 'from-green-600 to-emerald-600',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section 
      ref={sectionRef}
      id="work" 
      className="relative pb-10 sm:pb-32 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
           'opacity-100 translate-y-0' 
        }`}>
        {/* <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}> */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
            <span className="text-xs sm:text-sm text-blue-300 font-medium">Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Projects That
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Make an Impact
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Real projects, real results. Here's a selection of work I'm proud to have built.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 transition-all duration-700 delay-100 ${
           'opacity-100 translate-y-0' 
        }`}>
        {/* <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}> */}
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all capitalize ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:border-blue-500/50 hover:text-white'
              }`}
            >
              {filter}
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
              className={`group relative transition-all duration-700 ${
                'opacity-100 translate-y-0' 
              }`}
              // className={`group relative transition-all duration-700 ${
              //   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              // }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
                {/* Project Image/Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-slate-800">
                  {/* Placeholder with gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                  
                  {/* Project Preview */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Sparkles className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-slate-400 text-sm">Project Screenshot</p>
                    </div>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href="#"
                      className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-110"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-110"
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
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                        {project.title}
                      </h3>
                      <span className="text-xs text-slate-500 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
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
                          <div className="text-xs font-semibold text-white mb-0.5">
                            {metric.label}
                          </div>
                          <div className="text-xs text-slate-500">{metric.value}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-lg text-xs text-slate-300 hover:border-blue-500/50 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Details Link */}
                  <a
                    href="#"
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-all"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity pointer-events-none`} />
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-700 delay-500 ${
         'opacity-100 translate-y-0' 
        }`}>
        {/* <div className={`text-center mt-12 sm:mt-16 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}> */}
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 border-2 border-slate-700 rounded-full font-medium text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all hover:scale-105"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}