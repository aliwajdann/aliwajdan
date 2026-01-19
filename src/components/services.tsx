"use client";
import { motion } from "framer-motion";
import { Code2, Smartphone, Zap, ShieldCheck, BarChart3, Globe } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description: "Building robust, scalable web applications using the T3 stack (Next.js, TypeScript, React.js.",
    icon: <Code2 className="text-blue-600" size={24} />,
    color: "bg-blue-50"
  },
  {
    title: "Performance Optimization",
    description: "Specializing in Core Web Vitals, and ensuring your app runs at 100/100 Lighthouse scores.",
    icon: <Zap className="text-amber-600" size={24} />,
    color: "bg-amber-50"
  },
  {
    title: "UI/UX Implementation",
    description: "Pixel-perfect conversion from Figma to code with smooth Framer Motion animations and responsive CSS.",
    icon: <Smartphone className="text-purple-600" size={24} />,
    color: "bg-purple-50"
  }
];

const Skills = () => {
  return (
    <section id="services" className="py-10 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Solutions that drive <span className="text-blue-600 font-serif italic">results.</span>
          </motion.h2>
          <p className="text-slate-600 text-lg">
            I don't just write code. I build digital assets that help businesses grow,
            scale, and outperform their competition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all group"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Expertise / Tech Tags */}
        <div className="bg-slate-900 rounded-[3rem] p-4 md:p-16 overflow-hidden relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-sm">
              <h3 className="text-2xl font-bold text-white mb-4">My Tech Stack</h3>
              <p className="text-slate-400 text-sm">
                I stay at the forefront of the industry by using the most reliable and modern technologies available.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-3 max-w-xl">
              {["Next.js 14", "TypeScript", "Tailwind CSS", "Node.js", "Framer Motion", "Redux Toolkit", "React.js", "Javascript"].map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-white text-xs font-medium hover:bg-white/10 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[100px]" />
        </div>
      </div>
    </section>
  );
};

export default Skills;