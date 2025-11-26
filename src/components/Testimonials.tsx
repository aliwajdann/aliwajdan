"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Building2, Award, TrendingUp } from 'lucide-react';

export default function Testimonials() {
//   const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
        //   setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechFlow Inc',
      image: '👩‍💼',
      rating: 5,
      text: 'Working with Ali was an absolute game-changer for our business. He took our complex requirements and delivered a solution that exceeded all expectations. The attention to detail and commitment to quality is unmatched.',
      project: 'SaaS Dashboard',
      result: '40% increase in user engagement',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'StartupXYZ',
      image: '👨‍💻',
      rating: 5,
      text: 'Ali transformed our vision into reality with incredible speed and precision. His technical expertise combined with creative problem-solving made him an invaluable partner. Highly recommend!',
      project: 'E-commerce Platform',
      result: '250% revenue growth',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Creative Agency Co',
      image: '👩‍🎨',
      rating: 5,
      text: 'The website Ali built for us is not just beautiful—it converts. We\'ve seen a massive uptick in leads and client inquiries. His understanding of both design and business goals is exceptional.',
      project: 'Agency Website',
      result: '300% more qualified leads',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      name: 'David Park',
      role: 'Founder',
      company: 'FitLife App',
      image: '👨‍🏫',
      rating: 5,
      text: 'From concept to launch, Ali was with us every step of the way. His ability to understand our users and translate that into a seamless experience is what made our app successful.',
      project: 'Fitness Mobile App',
      result: '25k+ downloads in 3 months',
      gradient: 'from-green-600 to-emerald-600'
    }
  ];

  const stats = [
    { icon: Star, value: '5.0', label: 'Average Rating', color: 'text-yellow-400' },
    { icon: Award, value: '100%', label: 'Client Satisfaction', color: 'text-purple-400' },
    { icon: TrendingUp, value: '50+', label: 'Projects Delivered', color: 'text-blue-400' }
  ];

  const companies = [
    { name: 'TechFlow', icon: '🚀' },
    { name: 'StartupXYZ', icon: '⚡' },
    { name: 'Creative Co', icon: '🎨' },
    { name: 'FitLife', icon: '💪' },
    { name: 'DataSync', icon: '📊' },
    { name: 'CloudBase', icon: '☁️' }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="relative py-20 sm:py-32 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
         'opacity-100 translate-y-0' 
        }`}>
        {/* <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}> */}
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

        {/* Stats Bar */}
        <div className={`grid grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-700 delay-100 ${
          'opacity-100 translate-y-0' 
        }`}>
        {/* <div className={`grid grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}> */}
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group p-4 sm:p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all text-center hover:scale-105"
              >
                <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main Testimonial Carousel */}
        <div className={`max-w-5xl mx-auto mb-12 sm:mb-16 transition-all duration-700 delay-200 ${
           'opacity-100 translate-y-0' 
        }`}>
        {/* <div className={`max-w-5xl mx-auto mb-12 sm:mb-16 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}> */}
          <div className="relative">
            {/* Testimonial Card */}
            <div className="relative p-6 sm:p-10 rounded-3xl bg-slate-900/50 border border-slate-800 overflow-hidden">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[activeTestimonial].gradient} opacity-5 blur-3xl`} />
              
              <div className="relative">
                {/* Quote Icon */}
                <div className="absolute -top-2 -left-2 sm:top-0 sm:left-0 opacity-10">
                  <Quote className="w-16 h-16 sm:w-24 sm:h-24 text-purple-400" />
                </div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4 sm:mb-6">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-base sm:text-xl text-white leading-relaxed mb-6 sm:mb-8 font-medium">
                    "{testimonials[activeTestimonial].text}"
                  </blockquote>

                  {/* Project & Result */}
                  <div className="flex flex-wrap gap-3 mb-6 sm:mb-8">
                    <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700">
                      <div className="text-xs text-slate-400 mb-0.5">Project</div>
                      <div className="text-sm font-semibold text-white">{testimonials[activeTestimonial].project}</div>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30">
                      <div className="text-xs text-green-400 mb-0.5">Result</div>
                      <div className="text-sm font-semibold text-green-300">{testimonials[activeTestimonial].result}</div>
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-2xl sm:text-3xl">
                      {testimonials[activeTestimonial].image}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm sm:text-base">
                        {testimonials[activeTestimonial].name}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-400">
                        {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
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
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeTestimonial 
                        ? 'w-8 bg-purple-500' 
                        : 'bg-slate-700 hover:bg-slate-600'
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
        <div className={`transition-all duration-700 delay-300 ${
         'opacity-100 translate-y-0' 
        }`}>
        {/* <div className={`transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}> */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
              <h3 className="text-sm sm:text-base font-semibold text-slate-400 uppercase tracking-wider">
                Trusted by Companies Like
              </h3>
            </div>
          </div>

          {/* Company Logos */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            {companies.map((company, index) => (
              <div
                key={index}
                className="group px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/50 transition-all hover:scale-110"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl">{company.icon}</span>
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