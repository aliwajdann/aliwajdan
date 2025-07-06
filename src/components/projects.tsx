"use client";
import { motion } from "framer-motion";
import { link } from "fs";

const projects = [
  {
    title: "Ecommerce Clothing Store",
    desc: "A full-stack clothing store built using Next.js, Firebase, Redux and Framer Motion.",
    url: "https://nexwear-seven.vercel.app/"
  },
  {
    title: "Portfolio",
    desc: "A unique portfolio using React Three Fiber and GSAP to showcase work in 3D.",
    url: "https://aliwajdan.vercel.app"
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
              <h3 className="text-xl font-semibold">{project.title}</h3>
               {/* {i == 0 ? 1 : i == 1 ? 2 : undefined} */}
              <p className="text-gray-400 text-sm mt-2">Short description of what you built, tech used, and result.</p>
              <div className="flex justify-center gap-4 mt-4">
                <a href={project.url} className="text-blue-400 underline">Live Demo</a>
                <a href="#" className="text-green-400 underline">Code</a>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
}
 {/* Projects */}
      <section className="max-w-4xl mx-auto mb-24 text-center">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
         
        </div>
      </section>