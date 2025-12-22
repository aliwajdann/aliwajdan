"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Mail, MessageSquare, Linkedin, Github, Twitter, Send, CheckCircle2, Calendar, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Removed unused isVisible logic
  // useEffect logic retained for potential future use (e.g., animations)
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

  const handleSubmit = async (e?: any) => {
  e?.preventDefault();

  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    return;
  }

  try {
    setIsLoading(true); 

    // Placeholder for actual API call
    // const res = await fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });
    // if (!res.ok) throw new Error("Failed to send email");
    
    // Simulate API delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Please try again!");
  } finally {
    setIsLoading(false); 
  }
};


  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aliwajdan.it@gmail.com',
      link: 'mailto:aliwajdan.it@gmail.com',
      gradient: 'from-purple-600 to-pink-600',
      description: 'Send me an email anytime'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '@aliwajdan',
      link: 'https://www.linkedin.com/in/ali-wajdan/',
      gradient: 'from-blue-600 to-cyan-600',
      description: 'Let\'s connect professionally'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@aliwajdan',
      link: 'https://github.com/aliwajdann',
      gradient: 'from-slate-600 to-slate-800',
      description: 'Check out my code'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@aliwajdan',
      link: 'https://twitter.com',
      gradient: 'from-blue-400 to-blue-600',
      description: 'Follow my journey'
    }
  ];

  const availability = [
    { icon: Clock, label: 'Response Time', value: 'Within 12 hours' },
    { icon: Calendar, label: 'Availability', value: 'Open for projects' },
    { icon: MapPin, label: 'Location', value: 'Remote / Worldwide' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      // Adjusted padding for better vertical rhythm
      className="relative py-6 bg-slate-950 overflow-hidden"
    >
      {/* Background Elements (Kept the same) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-10 sm:mb-14 transition-all duration-700 opacity-100 translate-y-0`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-green-300 font-medium">Let's Work Together</span>
          </div>
          {/* Title size slightly reduced on mobile */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Got a Project
          <span>?</span>  <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Let's Talk!
            </span>
          </h2>
          {/* Subtitle text size slightly reduced on mobile */}
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi—I'm always happy to connect.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-14 sm:mb-16">
          {/* Left: Contact Form */}
          <div className={`transition-all duration-700 delay-100 opacity-100 translate-x-0`}>
            <div className="relative p-3 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5" />
              
              <div className="relative">
                {/* Heading size slightly reduced on mobile */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Send a Message</h3>
                {/* Subtitle text size slightly reduced on mobile */}
                <p className="text-xs sm:text-sm text-slate-400 mb-6">Fill out the form below and I'll get back to you ASAP.</p>

                {isSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Message Sent! 🎉</h4>
                    <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you soon!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Form Fields - Adjusted text sizes and input styling */}
                    {['name', 'email', 'subject'].map((field) => (
                      <div key={field}>
                        <label htmlFor={field} className="text-left block text-xs sm:text-sm font-medium text-slate-300 mb-2 capitalize">
                          Your {field} *
                        </label>
                        <input
                          type={field === 'email' ? 'email' : 'text'}
                          id={field}
                          value={formData[field as keyof typeof formData]}
                          onChange={(e) => handleChange(field, e.target.value)}
                          // Input styling refined for premium look
                          className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all"
                          placeholder={
                            field === 'name' ? 'Name' : 
                            field === 'email' ? 'name@example.com' : 
                            'Project Inquiry'
                          }
                        />
                      </div>
                    ))}

                    <div>
                      <label htmlFor="message" className="text-left block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        rows={5}
                        // Input styling refined for premium look
                        className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                   <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className={`group w-full px-6 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base text-white flex items-center justify-center gap-2 transition-all duration-300
                      ${isLoading ? 
                        "bg-gray-500 cursor-not-allowed" : 
                        "bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-[1.01] active:scale-[0.99]" // Subtle scale on hover/active
                      }
                    `}
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white border-solid"></div>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Contact Methods & Info */}
          <div className={`space-y-6 transition-all duration-700 delay-200 opacity-100 translate-x-0`}>
            {/* Quick Contact Methods */}
            <div>
              {/* Heading size slightly reduced on mobile */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Other Ways to Connect</h3>
              <div className="grid grid-cols-2 gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      // Subtle scale and shadow for premium feel
                      className="group relative p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all hover:scale-[1.03] overflow-hidden hover:shadow-lg hover:shadow-purple-500/10"
                    >
                      {/* Gradient background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                      
                      <div className="relative">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${method.gradient} mb-3 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        {/* Text sizes reduced on mobile */}
                        <div className="font-bold text-white mb-1 text-sm sm:text-base">{method.label}</div>
                        <div className="text-xs text-slate-400 mb-2">{method.description}</div>
                        <div className="text-xs font-medium text-purple-400 group-hover:text-purple-300 transition-colors">
                          {method.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Info */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h4 className="text-lg font-bold text-white mb-4">Availability & Info</h4>
              <div className="space-y-3">
                {availability.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                        <Icon className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-left text-sm font-medium text-slate-300">{item.label}</div>
                        {/* Value text size reduced on mobile */}
                        <div className="text-left text-xs text-slate-500">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Box (Schedule Call) - Kept the look, adjusted text size */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="relative">
                <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400 mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">
                  Prefer a Quick Chat?
                </h4>
                {/* Description text size reduced on mobile */}
                <p className="text-xs sm:text-sm text-slate-300 mb-4">
                  Schedule a 15-minute call to discuss your project and see how I can help.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors hover:scale-[1.02] active:scale-[0.98] duration-150"
                >
                  Book a Call
                  <Calendar className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA - Adjusted text sizes and button padding */}
        <div className={`text-center transition-all duration-700 delay-300 opacity-100 translate-y-0`}>
          <div className="inline-block p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 backdrop-blur-sm">
            {/* Title size slightly reduced on mobile */}
            <h3 className="text-xl sm:text-3xl font-bold text-white mb-3">
              Ready to Start Your Project?
            </h3>
            {/* Subtitle text size slightly reduced on mobile */}
            <p className="text-sm text-slate-400 mb-6 max-w-xl mx-auto">
              Let's turn your vision into reality. Drop me a message and let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-sm sm:text-base text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all hover:scale-[1.03]"
              >
                Get Started Now
              </a>
              <a
                href="#work"
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base text-white border-2 border-slate-700 hover:border-purple-500 hover:bg-purple-500/10 transition-all hover:scale-[1.03]"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative mt-16 sm:mt-24 pt-10 sm:pt-12 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            {/* Logo area refined */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center font-bold text-white">
                <span className="text-lg sm:text-xl">A</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">
                Ali<span className="text-purple-400"> Wajdan</span>
              </span>
            </div>
            {/* Tagline size reduced */}
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Building digital experiences that make an impact.
            </p>
            {/* Social Icons (Kept the same, they look great) */}
            <div className="flex justify-center gap-4 mb-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all hover:scale-110"
                    aria-label={method.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            {/* Copyright text size reduced for premium feel */}
            <p className="text-xs text-slate-500 pb-4">
              © 2025 Ali Wajdan. All rights reserved. Built with ❤️ and lots of ☕
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}