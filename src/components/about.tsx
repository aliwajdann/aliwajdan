"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Code2, Zap, Users, Award, ArrowRight } from 'lucide-react';
import image from "../picture.jpeg"
import Image from 'next/image';

export default function About() {
  // const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
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

 const stats = [
  { number: '10+', label: 'Projects Built', icon: Code2 },
  { number: '2+', label: 'Years Experience', icon: Zap },
  { number: '8+', label: 'Clients Served', icon: Users },
  { number: '12+', label: 'Technologies Used', icon: Award }
];


 const highlights = [
  {
    title: 'Detail-Oriented Developer',
    description: 'I focus on building clean, stable features that work reliably in real-world use.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Performance & UX Focused',
    description: 'Fast load times and smooth interactions are always a priority in my builds.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Practical Problem Solver',
    description: 'I approach development with a clear goal: make things simple, usable, and efficient.',
    gradient: 'from-orange-500 to-yellow-500'
  }
];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-20 sm:py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 opacity-100 translate-y-0`}>
        {/* <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}> */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-purple-300 font-medium">About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Turning Ideas Into
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Left Side - Image & Visual */}
          <div className={`transition-all duration-700 delay-100 ${'opacity-100 translate-x-0' 
          }`}>
          {/* <div className={`transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}> */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-2xl animate-pulse" />
                <div className="absolute -inset-4 rounded-3xl border-2 border-purple-500/20 animate-spin-slow" />
                
                {/* Image */}
                <div className="relative h-full rounded-3xl overflow-hidden border border-slate-800 bg-slate-900">
                  {/* Placeholder for your photo */}
                   <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-slate-900 to-blue-600/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      {/* <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-6xl font-bold text-white">
                        Y
                      </div>
                      <p className="text-slate-400 text-sm">Your Photo Here</p> */}
                    </div>
                  </div> 
                  <Image src={image} alt="" className='object-fill'/>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-4 bg-slate-900 border border-slate-800 rounded-2xl p-3 backdrop-blur-xl shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div>
                      <p className="text-white font-semibold text-sm">Available for work</p>
                      <p className="text-slate-400 text-xs">Open to opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`transition-all duration-700 delay-200 ${
            'opacity-100 translate-x-0' 
          }`}>
          {/* <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}> */}
           <div className="space-y-6">
  <h3 className="text-2xl sm:text-3xl font-bold text-white">
    Hey, I’m Ali Wajdan
  </h3>

  <div className="space-y-4 text-slate-400 text-sm sm:text-base leading-relaxed">
    <p>
      I’m a full-stack developer who enjoys building clean, fast, and user-friendly
      digital experiences. From e-commerce stores to modern portfolios, I focus on
      making products that look great and work flawlessly.
    </p>

    <p>
      My journey started with experimenting in HTML and CSS, and over time it grew
      into a passion for building full applications with real functionality. I love
      combining strong UI with solid engineering to create meaningful experiences.
    </p>

    <p>
      Outside of coding, I’m usually learning new tools, improving my skills, or studying
      how real businesses use technology. I’m always open to collaborations where I can
      bring ideas to life and solve real problems.
    </p>
  </div>

  <div className="flex flex-wrap gap-3 pt-2">
    <a href='#contact' className="group px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium text-white text-sm flex items-center gap-2 focus:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all hover:scale-105">
      Let’s Connect
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </a>

    <a
      href="/aliwajdan-cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="px-5 py-2.5 rounded-lg font-medium text-white text-sm border-2 border-slate-700 hover:border-purple-500 hover:bg-purple-500/10 transition-all hover:scale-105"
    >
      View Resume
    </a>
  </div>
</div>

          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 transition-all duration-700 delay-300 ${
           'opacity-100 translate-y-0' 
        }`}>
        {/* <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}> */}
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative p-4 sm:p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition-all hover:scale-105 cursor-pointer"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:to-blue-600/5 transition-all" />
                <div className="relative">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlights Cards */}
        <div className={`grid md:grid-cols-3 gap-4 sm:gap-6 transition-all duration-700 delay-400 ${
          'opacity-100 translate-y-0' 
        }`}>
        {/* <div className={`grid md:grid-cols-3 gap-4 sm:gap-6 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}> */}
          {highlights.map((highlight, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              className="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
              
              <div className="relative">
                <div className={`inline-block p-2 rounded-lg bg-gradient-to-br ${highlight.gradient} mb-4 transition-transform group-hover:scale-110`}>
                  <div className="w-6 h-6" />
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-slate-300 transition-all">
                  {highlight.title}
                </h4>
                
                <p className="text-sm text-slate-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity rounded-full -translate-y-1/2 translate-x-1/2`} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}