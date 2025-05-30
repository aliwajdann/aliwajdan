// File: components/Projects.tsx
"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Ecommerce Clothing Store",
    desc: "A full-stack clothing store built using Next.js, Firebase, Redux and Framer Motion.",
  },
  {
    title: "3D Portfolio",
    desc: "A unique portfolio using React Three Fiber and GSAP to showcase work in 3D.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-[1.02] transition-transform"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
