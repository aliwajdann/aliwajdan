"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Linkedin, Github, Twitter, Send,
  CheckCircle2, Calendar, Clock, MapPin,
  MessageSquare, ArrowUpRight, Copy
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

    try {
      setIsLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // const data = await res.json();

      // if (!res.ok || !data.success) {
      //   throw new Error("Email failed");
      // }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error: any) {
      console.error("MAIL ERROR:", error);

      return Response.json(
        {
          success: false,
          message: error?.message || "Mail failed",
        },
        { status: 500 }
      );
    }
  }




  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'aliwajdan.it@gmail.com', link: 'mailto:aliwajdan.it@gmail.com', color: 'bg-blue-50 text-blue-600' },
    { icon: Linkedin, label: 'LinkedIn', value: '@aliwajdan', link: 'https://linkedin.com/in/ali-wajdan/', color: 'bg-indigo-50 text-indigo-600' },
    { icon: Github, label: 'GitHub', value: '@aliwajdann', link: 'https://github.com/aliwajdann', color: 'bg-slate-100 text-slate-800' },
  ];

  return (
    <section id="contact" className="py-10 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Available Now</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
            Ready to build <br />
            <span className="text-blue-600 font-serif italic">something great?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Form Side - 7 Cols */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-slate-50 border border-slate-200 p-4 md:p-12 rounded-[2.5rem] relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-blue-200">
                    <CheckCircle2 className="text-white w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">I'll get back to you within 12 hours. Talk soon!</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 text-left">
                      <label className="align-left text-sm font-bold text-slate-700 ml-1">Your Name</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                    <input
                      required
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all resize-none"
                      placeholder="Tell me about your vision..."
                    />
                  </div>
                  <button
                    disabled={isLoading}
                    className="w-full py-5 bg-slate-900 hover:bg-blue-600 text-white font-bold rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-slate-200"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                    <Send size={18} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <MessageSquare size={200} />
            </div>
          </motion.div>

          {/* Info Side - 5 Cols */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm"
            >
              <h3 className="font-bold text-slate-900 mb-6">Connect Directly</h3>
              <div className="space-y-4">
                {contactMethods.map((item, i) => (
                  <a key={i} href={item.link} target="_blank" className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${item.color}`}>
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{item.label}</p>
                        <p className="text-slate-900 font-medium">{item.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight size={20} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability Bento */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-blue-600 p-6 rounded-[2rem] text-white">
                <Clock className="mb-4 opacity-50" size={24} />
                <p className="text-xs font-medium opacity-80 uppercase">Response Time</p>
                <p className="font-bold">Under 12h</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-[2rem] text-white">
                <MapPin className="mb-4 opacity-50" size={24} />
                <p className="text-xs font-medium opacity-80 uppercase">Location</p>
                <p className="font-bold">Remote / Global</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Minimal Footer */}
        <footer className="mt-32 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold">A</div>
            <span className="font-bold text-slate-900 uppercase tracking-widest text-sm">Ali Wajdan © 2026</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#projects" className="hover:text-blue-600">Work</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
          </div>
          <p className="text-xs text-slate-400 font-medium italic">Hand-coded with ❤️ and Next.js</p>
        </footer>
      </div>
    </section>
  );
}