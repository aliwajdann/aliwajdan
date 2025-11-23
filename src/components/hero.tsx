// // File: components/Hero.tsx
// "use client";
// import { motion } from "framer-motion";
// import { useEffect, useState } from 'react';
//   import { Poppins, Dosis, Coiny} from "next/font/google";


//  const skills = [
//   "Shopify Stores",
//   "React Apps",
//   "Tailwind UI",
//   "3D Websites",
//   "Fast Prototypes",
// ];
// const coiny = Coiny({ 
//     weight: ['400'], 
//     subsets: ['latin'], 
//   });
// export default function Hero() {
  
//   const [currentSkill, setCurrentSkill] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSkill((prev) => (prev + 1) % skills.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <section className=" h-screen w-full flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
//       <motion.h1
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className={`text-4xl md:text-7xl font-extrabold ${coiny.className} gradient-text-animated`}
//       >
//         Turning Ideas Into Reality
//       </motion.h1>
      
//       <motion.p
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//         className="mt-6 max-w-xl text-lg text-gray-300"
//       >
//         I’m Ali Wajdan, a creative frontend developer crafting modern web experiences with React, Next.js, and motion design.
//       </motion.p>
//       <motion.div
//           key={currentSkill}
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="font-semibold text-lg sm:text-xl pt-6 gradient-text-animated"
//         >
//           {skills[currentSkill]}
//         </motion.div>

//     </section>
//   );
// }
"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Code2, Sparkles } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e:any) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1s'
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen">
        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-purple-300 font-medium">Available for freelance work</span>
        </div>

        {/* Main heading */}
        <h1 
          className={`text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Building Digital
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Experiences
          </span>
        </h1>

        {/* Subheading */}
        <p 
          className={`text-lg md:text-xl text-slate-400 text-center max-w-2xl mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Full-stack developer crafting beautiful, performant web applications with modern technologies. 
          Turning complex problems into elegant solutions.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          
          <button className="px-8 py-4 rounded-full font-semibold text-white border-2 border-slate-700 hover:border-purple-500 hover:bg-purple-500/10 transition-all hover:scale-105">
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div 
          className={`flex items-center gap-6 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a 
            href="#" 
            className="p-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="p-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="p-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="p-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all hover:scale-110"
            aria-label="Portfolio"
          >
            <Code2 className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-slate-500 uppercase tracking-wider">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-purple-500 rounded-full animate-pulse" />
            </div>
          </div>
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

       
