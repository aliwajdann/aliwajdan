// File: components/About.tsx
"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 text-lg">
          A self-taught developer with a deep passion for building fast, elegant web apps. I combine technical skills with a design-focused mindset to deliver next-gen UI/UX, blending motion, responsiveness, and purpose.
        </p>
      </motion.div>
    </section>
  );
}