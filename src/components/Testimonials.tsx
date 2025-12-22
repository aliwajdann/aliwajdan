"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Building2, Award, TrendingUp, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //       // Placeholder for future scroll-based animations
  //       }
  //     },
  //     { threshold: 0.1 }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => observer.disconnect();
  // }, []);

  const testimonials = [
    {
      name: 'Sarah Ahmed',
      role: 'Store Owner',
      company: 'Velano Shop',
      image: '🛍️', // Changed to thematic icon
      rating: 5,
      text: 'Ali revamped my entire store’s frontend and checkout experience. The product pages became much cleaner and the admin panel he built helped me manage inventory easily. Smooth communication and fast delivery.',
      project: 'E-Commerce Store (Velano)',
      result: 'Reduced cart issues & easier product management',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Michael Khan',
      role: 'Founder',
      company: 'MK Digital Solutions',
      image: '👨‍💻',
      rating: 5,
      text: 'Ali built a fully responsive business website for us using Next.js. It loads super fast and represents our brand exactly the way we wanted. His attention to detail and clear explanations really stood out.',
      project: 'Business Website',
      result: 'Faster load times & stronger online presence',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      company: 'Spark Agency',
      image: '👩‍🎨',
      rating: 5,
      text: 'Ali helped us convert our Figma designs into pixel-perfect React components. The animations were smooth, and he handled last-minute changes professionally. Would definitely collaborate again.',
      project: 'UI to React Conversion',
      result: 'Improved UI consistency across pages',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      name: 'David Park',
      role: 'Startup Owner',
      company: 'TaskFlow',
      image: '💡', // Changed to thematic icon
      rating: 5,
      text: 'Great experience working with Ali. He developed a clean and functional landing page for our product launch. The layout was modern, and the page performed well even under high traffic.',
      project: 'Product Landing Page',
      result: 'Higher signup rate during launch week',
      gradient: 'from-green-600 to-emerald-600'
    }
  ];


  const stats = [
    { icon: Star, value: '5.0', label: 'Average Rating', color: 'text-yellow-400' }, // Set to 5.0 for better impact
    { icon: Award, value: '98%', label: 'Client Satisfaction', color: 'text-purple-400' },
    { icon: TrendingUp, value: '10+', label: 'Projects Delivered', color: 'text-blue-400' }
  ];

  const companies = [
    { name: 'Velano Shop', icon: '🛍️' },
    { name: 'MK Digital', icon: '⚡' },
    { name: 'Spark Agency', icon: '🎨' },
    { name: 'TaskFlow', icon: '🗂️' },
    { name: 'Local Businesses', icon: '🏪' },
    { name: 'Freelance Clients', icon: '🌍' }
  ];


  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="relative py-16 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 opacity-100 translate-y-0`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm mb-4">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-xs sm:text-sm text-yellow-300 font-medium">Client Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Amazing People
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Don't just take my word for it—here's what clients say about working together.
          </p>
        </div>

        {/* Stats Bar (Enhanced Hover & Border) */}
        <div className={`grid grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-700 delay-100 opacity-100 translate-y-0`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative p-4 sm:p-6 rounded-2xl bg-slate-900/50 border border-slate-800 transition-all text-center 
                         hover:scale-[1.03] hover:bg-slate-900 duration-300
                         before:absolute before:inset-0 before:rounded-2xl before:border before:border-transparent 
                         hover:before:border-slate-700 before:transition-colors" // Hover border trick
              >
                <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`} />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main Testimonial Carousel */}
        <div className={`max-w-5xl mx-auto mb-12 sm:mb-16 transition-all duration-700 delay-200 opacity-100 translate-y-0`}>
          <div className="relative">
            {/* Testimonial Card */}
            <div className="relative p-6 sm:p-10 rounded-3xl bg-slate-900/50 border border-slate-800 overflow-hidden">
              
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.gradient} opacity-5 blur-3xl`} />
              
              {/* Keyed div for smooth transition */}
              <div 
                key={activeTestimonial}
                className="relative transition-opacity duration-500 ease-in-out opacity-100 animate-fade-in" // Added animation classes
              >
                {/* Quote Icon */}
                <div className="absolute -top-2 -left-2 sm:top-0 sm:left-0 opacity-10">
                  <Quote className="w-16 h-16 sm:w-24 sm:h-24 text-purple-400" />
                </div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4 sm:mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-base sm:text-xl text-white leading-relaxed mb-6 sm:mb-8 font-medium italic">
                    "{currentTestimonial.text}"
                  </blockquote>

                  {/* Project & Result */}
                  <div className="flex flex-wrap gap-3 mb-6 sm:mb-8">
                    <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center gap-2">
                      <div className="text-xs text-slate-400">Project:</div>
                      <div className="text-sm font-semibold text-white">{currentTestimonial.project}</div>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <div className="text-sm font-semibold text-green-300">{currentTestimonial.result}</div>
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-xl sm:text-3xl flex-shrink-0">
                      {currentTestimonial.image}
                    </div>
                    <div>
                      <div className="font-bold text-white text-base sm:text-lg leading-tight">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-400">
                        {currentTestimonial.role} at **{currentTestimonial.company}**
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'w-6 bg-purple-500' // slightly wider active dot
                        : 'w-2 bg-slate-700 hover:bg-slate-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Companies Worked With */}
        <div className={`transition-all duration-700 delay-300 opacity-100 translate-y-0`}>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
              <h3 className="text-sm sm:text-base font-semibold text-slate-400 uppercase tracking-wider">
                Trusted by Companies Like
              </h3>
            </div>
          </div>

          {/* Company Logos (Refined look) */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
            {companies.map((company, index) => (
              <div
                key={index}
                className="group px-4 sm:px-6 py-3 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900/50 transition-all hover:scale-[1.05]"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-lg sm:text-xl">{company.icon}</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-400 group-hover:text-slate-300 transition-colors">
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}