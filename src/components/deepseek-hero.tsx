// components/Hero.tsx
'use client';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.p 
            variants={variants}
            className="text-lg md:text-xl font-medium text-cyan-400 mb-4"
          >
            Hello, I'm
          </motion.p>
          <motion.h1 
            variants={variants}
            className="text-4xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Ali Wajdan
            </span>
          </motion.h1>
          <motion.h2 
            variants={variants}
            className="text-2xl md:text-4xl font-medium mb-8 text-gray-300"
          >
            Frontend Developer & UI Designer
          </motion.h2>
          <motion.p 
            variants={variants}
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-400 mb-12"
          >
            I create beautiful, responsive websites with modern technologies like React, Next.js, and Tailwind CSS.
          </motion.p>
          <motion.div variants={variants}>
            <button className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-full font-medium text-white transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
          </motion.div>
          <motion.div 
            variants={variants}
            className="mt-24 animate-bounce"
          >
            <ArrowDown className="mx-auto h-8 w-8 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;