// File: components/Contact.tsx
"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-white bg-gradient-to-t from-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>
        <p className="text-gray-300 mb-8">
          Whether you want to build a product, a portfolio, or just say hello. I’d love to hear from you.
        </p>
        <div className="flex gap-2 justify-center">
        <a
          href="mailto:aliwajdan.it@gmail.com"
          className="inline-block bg-white text-black font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition"
        >
          aliwajdan.it@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/ali-wajdan/"
          className="inline-block bg-white text-black font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition"
        >
          LinkedIn
        </a>
        </div>
      </motion.div>
    </section>
  );
}