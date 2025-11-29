"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Sparkles, Code2, Layout, Monitor, Cpu, ExternalLink, TrendingUp, Users, Award } from 'lucide-react';

export default function PortfolioCaseStudy() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Sparkles, title: 'Custom Branding', desc: 'Custom UI with gradients, glass effects, and motion to match personal branding' },
    { icon: Monitor, title: 'Instant Clarity', desc: 'Hero section with instant clarity: who I am, what I do, what I offer' },
    { icon: Code2, title: 'Performance First', desc: 'Performance-optimized Next.js pages with lazy loading + smooth transitions' },
    { icon: Layout, title: 'Smart Structure', desc: 'Structured sections: Projects, Skills, Tools, Highlights, Stats' },
    { icon: Cpu, title: 'Professional Extras', desc: 'Resume download + preview functionality for easy hiring' }
  ];

  const stats = [
    { icon: TrendingUp, value: '60%', label: 'More Leads' },
    { icon: Users, value: '5k+', label: 'Monthly Views' },
    { icon: Award, value: 'Top 10%', label: 'Recognition' }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Back Button */}
        <a 
          href="/#work"
          className={`inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-all hover:gap-3 mb-8 sm:mb-12 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </a>

        {/* Header Section */}
        <div className={`max-w-5xl mx-auto mb-12 sm:mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-pink-300 font-medium">Personal Branding</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Personal Portfolio
            </span>
            <br />
            Modern Developer Identity
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8">
            A sleek, responsive portfolio designed to represent my skills, projects, and personality. 
            It focuses on performance, clarity, and visual storytelling—helping clients understand my expertise instantly.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 w-full">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg font-medium text-white flex items-center gap-2 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all hover:scale-105"
            >
              View Live Site
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Key Details Grid */}
        <div className={`max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <DetailCard title="Timeline" value="1 Week" />
          <DetailCard title="My Role" value="Designer & Dev" />
          <DetailCard title="Type" value="Personal Project" />
          <DetailCard title="Focus" value="UX & Performance" />
        </div>

        {/* Project Image Placeholder */}
        {/* <div className={`max-w-5xl mx-auto mb-16 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-800 bg-slate-900">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Monitor className="w-20 h-20 text-pink-400 mx-auto mb-4" />
                <p className="text-slate-400">Project Screenshot</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Tech Stack */}
        <div className={`max-w-5xl mx-auto mb-16 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Hooks'].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-lg text-sm text-slate-300 hover:border-pink-500/50 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* The Problem */}
        <Section
          title="The Problem"
          delay={400}
          isVisible={isVisible}
        >
          <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
            I needed a portfolio that looked modern, clean, and professional—without feeling generic. 
            Something that reflects who I am, shows real projects, and convinces a client or recruiter in 10 seconds. 
            It had to stand out in a sea of cookie-cutter portfolios while remaining accessible and fast.
          </p>
        </Section>

        {/* The Solution */}
        <Section
          title="The Solution"
          delay={500}
          isVisible={isVisible}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-pink-500/50 transition-all hover:scale-105"
                >
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-pink-600 to-purple-600 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Results */}
        <Section
          title="Outcome & Impact"
          delay={600}
          isVisible={isVisible}
        >
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-center hover:border-pink-500/50 transition-all"
                >
                  <Icon className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
            The portfolio helped me position myself as a professional developer. It is fast, modern, and 
            immediately communicates my value. It also increased confidence while applying for jobs and talking 
            to clients. The clean design and smooth animations create a memorable first impression that sets me 
            apart from the competition.
          </p>
        </Section>

        {/* Key Features Highlight */}
        <Section
          title="Design Decisions"
          delay={700}
          isVisible={isVisible}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-600/10 to-purple-600/10 border border-pink-500/20">
              <h4 className="text-lg font-bold text-white mb-3">Visual Hierarchy</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Every section is designed to guide the eye naturally. From hero to contact, the flow tells a story 
                that builds trust and showcases expertise progressively.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-purple-500/20">
              <h4 className="text-lg font-bold text-white mb-3">Performance Focus</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Lazy loading, optimized images, and efficient animations ensure lightning-fast load times. 
                First impressions matter, and speed is part of the experience.
              </p>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <div className={`max-w-5xl mx-auto text-center mt-16 transition-all duration-700 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="p-8 rounded-3xl bg-gradient-to-r from-pink-600/10 to-purple-600/10 border border-pink-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Need a portfolio that stands out?</h3>
            <p className="text-slate-400 mb-6">Let me help you build your digital identity.</p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full font-semibold text-white hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
      <p className="text-xs uppercase text-slate-500 mb-2 tracking-wider">{title}</p>
      <p className="text-lg font-bold text-white">{value}</p>
    </div>
  );
}

function Section({ 
  title, 
  children, 
  delay, 
  isVisible 
}: { 
  title: string; 
  children: React.ReactNode; 
  delay: number;
  isVisible: boolean;
}) {
  return (
    <div className={`max-w-5xl mx-auto mb-16 transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`} style={{ transitionDelay: `${delay}ms` }}>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
        {title}
      </h2>
      {children}
    </div>
  );
}