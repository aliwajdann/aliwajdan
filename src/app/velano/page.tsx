"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, CheckCircle, Zap, ShoppingCart, Database, Layout, ExternalLink, TrendingUp, Users, Star } from 'lucide-react';

export default function VelanoCaseStudy() {
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
    { icon: ShoppingCart, title: 'Smart Cart System', desc: 'Custom UI for cart drawer + full cart page with real-time updates' },
    { icon: Zap, title: 'Lightning Fast', desc: 'Ultra-fast product pages with variant support (size/color) and instant loading' },
    { icon: Database, title: 'Robust Backend', desc: 'Firestore-based product + order + cart activity tracking for reliability' },
    { icon: CheckCircle, title: 'Secure Checkout', desc: 'Secure checkout form with real-time validation and error handling' },
    { icon: Layout, title: 'Admin Panel', desc: 'Full admin panel with product CRUD, duplication & order management' }
  ];

  const stats = [
    { icon: TrendingUp, value: '40%', label: 'Sales Increase' },
    { icon: Users, value: '10k+', label: 'Customers' },
    { icon: Star, value: '<2s', label: 'Load Time' }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-6">
            <ShoppingCart className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">E-Commerce Platform</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Velano
            </span>
            <br />
            Modern Clothing E-Commerce
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8">
            A full-featured clothing e-commerce store built from scratch using modern tech. 
            Features product management, cart handling, checkout, order tracking, and a complete admin panel—all built for real customers.
          </p>

          {/* Action Buttons */}
          <div className="flex justify-center flex-wrap gap-4 w-full">
            <a
              href="https://velanoshop.store"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-white flex items-center gap-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all hover:scale-105"
            >
              Visit Live Site
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Key Details Grid */}
        <div className={`max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <DetailCard title="Timeline" value="1.5 Months" />
          <DetailCard title="My Role" value="Full-Stack Dev" />
          <DetailCard title="Platform" value="velanoshop.store" />
          <DetailCard title="Status" value="Live & Growing" />
        </div>

        {/* Project Image Placeholder */}
        {/* <div className={`max-w-5xl mx-auto mb-16 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-800 bg-slate-900">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="w-20 h-20 text-purple-400 mx-auto mb-4" />
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
            {['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Firestore', 'Redux', 'Framer Motion'].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-lg text-sm text-slate-300 hover:border-purple-500/50 transition-all"
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
            The store required a clean, fast, and easy-to-manage e-commerce system that didn't rely on 
            Shopify or expensive platforms. The goal was to build a custom solution with full ownership, 
            smooth UX, and low running costs while maintaining professional quality and scalability.
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
                  className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition-all hover:scale-105"
                >
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 mb-4 group-hover:scale-110 transition-transform">
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
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-center hover:border-purple-500/50 transition-all"
                >
                  <Icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
            Velano now runs as a live e-commerce store with real customers. It loads fast, feels polished, 
            and gives full control without monthly platform fees. The custom admin panel allows easy product 
            management, and the seamless checkout experience has resulted in strong conversion rates.
          </p>
        </Section>

        {/* CTA */}
        <div className={`max-w-5xl mx-auto text-center mt-16 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in a similar project?</h3>
            <p className="text-slate-400 mb-6">Let's build something amazing together.</p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all hover:scale-105"
            >
              Start a Project
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
      <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
        {title}
      </h2>
      {children}
    </div>
  );
}