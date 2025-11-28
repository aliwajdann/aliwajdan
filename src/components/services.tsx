"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Code2, Palette, Database, Cloud, Smartphone, Zap, Layers, Globe } from 'lucide-react';

export default function Skills() {
  // const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
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

 const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend Development',
    gradient: 'from-purple-600 to-pink-600',
    description: 'Building fast, modern, and responsive user interfaces',
    skills: [
      { name: 'React & Next.js', level: 95, color: 'bg-cyan-500' },
      { name: 'TypeScript', level: 90, color: 'bg-blue-500' },
      { name: 'Tailwind CSS', level: 95, color: 'bg-teal-500' },
      { name: 'GSAP & Framer Motion', level: 85, color: 'bg-green-500' }
    ],
    capabilities: [
      'Reusable Components',
      'State Management (Redux)',
      'SSR & App Router',
      'Animations & 3D UI'
    ]
  },

  {
    icon: Database,
    title: 'Backend & Databases',
    gradient: 'from-blue-600 to-cyan-600',
    description: 'Building secure, scalable backend systems',
    skills: [
      { name: 'Node.js (Basics)', level: 70, color: 'bg-green-500' },
      { name: 'Firebase / Firestore', level: 90, color: 'bg-yellow-500' },
      { name: 'Authentication (Clerk)', level: 85, color: 'bg-blue-500' },
      { name: 'REST APIs', level: 80, color: 'bg-green-500' }
    ],
    capabilities: [
      'Firestore Database Modeling',
      'Secure Auth',
      'API Integration',
      'Server Actions'
    ]
  },

  {
    icon: Cloud,
    title: 'Deployment & DevOps',
    gradient: 'from-orange-600 to-red-600',
    description: 'Shipping production-ready applications',
    skills: [
      { name: 'Vercel Deployment', level: 95, color: 'bg-gray-500' },
      { name: 'Git & GitHub', level: 90, color: 'bg-blue-500' },
      { name: 'CI/CD (GitHub Actions)', level: 75, color: 'bg-purple-500' },
      { name: 'Performance Optimization', level: 85, color: 'bg-orange-500' }
    ],
    capabilities: [
      'Build Optimization',
      'Zero-Downtime Deployments',
      'Version Control',
      'Automated Builds'
    ]
  },

  {
    icon: Palette,
    title: 'UI / UX & Branding',
    gradient: 'from-pink-600 to-purple-600',
    description: 'Creating clean, modern, visually appealing designs',
    skills: [
      { name: 'Figma', level: 90, color: 'bg-purple-500' },
      { name: 'Photoshop (Basic)', level: 75, color: 'bg-pink-500' },
      { name: 'Framer UI', level: 80, color: 'bg-blue-500' },
      { name: 'Responsive Design', level: 95, color: 'bg-green-500' }
    ],
    capabilities: [
      'Landing Page Design',
      'Brand Visuals',
      'Wireframing',
      'Interaction Design'
    ]
  }
];

 const tools = [
  { name: 'Git & GitHub', icon: '🔧' },
  { name: 'VS Code', icon: '💻' },
  { name: 'Vercel', icon: '🚀' },
  { name: 'Firebase Console', icon: '🔥' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Postman', icon: '📬' }
];


  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative py-20 sm:py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
           'opacity-100 translate-y-0' 
        }`}>
        {/* <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}> */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-4">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
            <span className="text-xs sm:text-sm text-purple-300 font-medium">Skills & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What I Bring to
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              The Table
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            A full-stack toolkit to turn your ideas into polished, production-ready applications.
          </p>
        </div>

        {/* Category Cards */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-100 ${
           'opacity-100 translate-y-0' 
        }`}>
        {/* <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}> */}
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`group relative p-6 rounded-2xl border transition-all text-left ${
                  activeCategory === index
                    ? 'bg-slate-900 border-slate-700 scale-105'
                    : 'bg-slate-900/30 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 ${activeCategory === index ? 'opacity-10' : 'group-hover:opacity-5'} transition-opacity blur-xl`} />
                
                <div className="relative">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.gradient} mb-3 ${activeCategory === index ? 'scale-110' : 'group-hover:scale-110'} transition-transform`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {category.description}
                  </p>
                </div>

                {/* Active indicator */}
                {activeCategory === index && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Category Details */}
        <div className={`transition-all duration-700 delay-200 ${
           'opacity-100 translate-y-0'
        }`}>
        {/* <div className={`transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}> */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 overflow-hidden">
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${skillCategories[activeCategory].gradient} opacity-5 blur-3xl`} />
            
            <div className="relative grid lg:grid-cols-2 gap-8">
              {/* Left: Skills with Progress Bars */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-purple-400" />
                  Technical Skills
                </h4>
                <div className="space-y-5">
                  {skillCategories[activeCategory].skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-white">{skill.name}</span>
                        <span className="text-xs text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width:  `${skill.level}%`,
                            transitionDelay: `${300 + index * 100}ms`
                          }}
                          // style={{ 
                          //   width: isVisible ? `${skill.level}%` : '0%',
                          //   transitionDelay: `${300 + index * 100}ms`
                          // }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Capabilities */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  What I Can Build
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {skillCategories[activeCategory].capabilities.map((capability, index) => (
                    <div
                      key={index}
                      className="group p-4 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-purple-500/50 transition-all hover:scale-105 cursor-default"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 group-hover:animate-pulse" />
                        <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {capability}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-800">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">5+</div>
                    <div className="text-xs text-slate-400">Years Exp</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">50+</div>
                    <div className="text-xs text-slate-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">15+</div>
                    <div className="text-xs text-slate-400">Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className={`mt-12 sm:mt-16 transition-all duration-700 delay-300 ${
           'opacity-100 translate-y-0' 
        }`}>
        {/* <div className={`mt-12 sm:mt-16 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}> */}
          <h4 className="text-lg sm:text-xl font-bold text-white text-center mb-6">
            Tools I Use Daily
          </h4>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group px-4 sm:px-6 py-3 sm:py-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-purple-500/50 hover:bg-slate-900 transition-all hover:scale-110 cursor-default"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl">{tool.icon}</span>
                  <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {tool.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-700 delay-400 ${
           'opacity-100 translate-y-0' 
        }`}>
        {/* <div className={`text-center mt-12 sm:mt-16 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}> */}
          <div className="inline-block p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20">
            <p className="text-slate-300 text-sm sm:text-base mb-4">
              Got a project in mind? Let's discuss how these skills can bring your vision to life.
            </p>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium text-white text-sm sm:text-base hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all hover:scale-105">
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}