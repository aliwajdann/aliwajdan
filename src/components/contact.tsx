"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Linkedin, Github, Send,
  CheckCircle2, Clock, MapPin,
  MessageSquare, ArrowUpRight
} from 'lucide-react';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'aliwajdan.it@gmail.com', link: 'mailto:aliwajdan.it@gmail.com', color: 'bg-blue-50 text-blue-600' },
    { icon: Linkedin, label: 'LinkedIn', value: '@aliwajdan', link: 'https://linkedin.com/in/ali-wajdan/', color: 'bg-indigo-50 text-indigo-600' },
    { icon: Github, label: 'GitHub', value: '@aliwajdann', link: 'https://github.com/aliwajdann', color: 'bg-slate-100 text-slate-800' },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <div className="mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Available Now</span>
          </motion.div>
          <h2 className="text-3xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
            Ready to build <br />
            <span className="text-blue-600 font-serif italic">something great?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-slate-50 border border-slate-200 p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-8 md:py-12"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-xl shadow-blue-200">
                    <CheckCircle2 className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-sm text-slate-600">I'll get back to you within 12 hours.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-bold text-slate-700 ml-1 ">Your Name</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 md:px-5 md:py-4 bg-white border border-slate-200 rounded-xl md:rounded-2xl text-sm outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-bold text-slate-700 ml-1">Email Address</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 md:px-5 md:py-4 bg-white border border-slate-200 rounded-xl md:rounded-2xl text-sm outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-slate-700 ml-1">Subject</label>
                    <input
                      required
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 md:px-5 md:py-4 bg-white border border-slate-200 rounded-xl md:rounded-2xl text-sm outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-slate-700 ml-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 md:px-5 md:py-4 bg-white border border-slate-200 rounded-xl md:rounded-2xl text-sm outline-none focus:ring-4 focus:ring-blue-100 transition-all resize-none"
                      placeholder="Tell me about your vision..."
                    />
                  </div>
                  <button
                    disabled={isLoading}
                    className="w-full py-4 md:py-5 bg-slate-900 hover:bg-blue-600 text-white font-bold rounded-xl md:rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-sm md:text-base"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                    <Send size={16} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
              <MessageSquare size={160} />
            </div>
          </motion.div>

          {/* Info Side */}
          <div className="lg:col-span-5 space-y-4 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white border border-slate-100 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm"
            >
              <h3 className="font-bold text-slate-900 mb-4 md:mb-6 text-sm md:text-base">Connect Directly</h3>
              <div className="space-y-2 md:space-y-4">
                {contactMethods.map((item, i) => (
                  <a key={i} href={item.link} target="_blank" className="flex items-center justify-between p-3 md:p-4 rounded-xl hover:bg-slate-50 transition-colors group">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className={`p-2.5 rounded-lg ${item.color}`}>
                        <item.icon size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] text-left font-bold text-slate-400 uppercase tracking-tighter">{item.label}</p>
                        <p className="text-xs md:text-sm text-slate-900 font-medium">{item.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight size={18} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-blue-600 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] text-white">
                <Clock className="mb-3 md:mb-4 opacity-50" size={20} />
                <p className="text-[10px] font-medium opacity-80 uppercase">Response</p>
                <p className="text-sm md:text-base font-bold">Under 12h</p>
              </div>
              <div className="bg-slate-900 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] text-white">
                <MapPin className="mb-3 md:mb-4 opacity-50" size={20} />
                <p className="text-[10px] font-medium opacity-80 uppercase">Location</p>
                <p className="text-sm md:text-base font-bold">Remote</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Minimal Footer - Tightened margin and padding */}
        <footer className="mt-12 md:mt-20 pt-6 md:pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 w-7 h-7 rounded flex items-center justify-center text-white font-bold text-xs">A</div>
            <span className="font-bold text-slate-900 uppercase tracking-widest text-[10px] md:text-sm">Ali Wajdan © 2026</span>
          </div>
          <div className="flex gap-6 md:gap-8 text-xs md:text-sm font-medium text-slate-500">
            <a href="#projects" className="hover:text-blue-600">Work</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
          {/* <p className="text-[10px] text-slate-400 font-medium italic">Hand-coded with Next.js</p> */}
        </footer>
      </div>
    </section>
  );
}