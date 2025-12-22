"use client";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative md:pt-[2%] h-lvh flex items-center justify-center md:min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      {/* Animated background elements (lighter for mobile) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20 flex flex-col items-center justify-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-6 sm:mb-8">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
          <span className="text-xs sm:text-sm text-purple-300 font-medium">
            Available for freelance work
          </span>
        </div>

        {/* Main heading */}
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-center mb-4 sm:mb-6">
          <h2 className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Building Digital
          </h2>
          <h2 className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Experiences
          </h2>
        </div>

        {/* Subheading */}
        <p className="text-sm sm:text-lg md:text-lg text-slate-400 text-center max-w-2xl mb-8 sm:mb-12 px-2 sm:px-0">
          Full-stack developer crafting beautiful, performant web applications
          with modern technologies. Turning complex problems into elegant
          solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 w-full sm:w-auto px-4 sm:px-0">
          <button className="group relative px-4 sm:px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-sm text-white overflow-hidden focus:hover:scale-105 hover:scale-105 transition-all">
            <a href="#work" className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 rounded-full font-semibold text-sm text-white border-2 border-slate-700 hover:border-purple-500 hover:bg-purple-500/10 hover:scale-105 transition-all"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="https://github.com/aliwajdann"
            className="p-2.5 sm:p-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 hover:scale-110 transition-all"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ali-wajdan/"
            className="p-2.5 sm:p-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 hover:scale-110 transition-all"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="mailto:aliwajdan.it@gmail.com"
            className="p-2.5 sm:p-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 hover:scale-110 transition-all"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>

    </div>
  );
}
