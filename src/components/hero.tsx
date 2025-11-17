// File: components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
  import { Poppins, Dosis, Coiny} from "next/font/google";


 const skills = [
  "Shopify Stores",
  "React Apps",
  "Tailwind UI",
  "3D Websites",
  "Fast Prototypes",
];
const coiny = Coiny({ 
    weight: ['400'], 
    subsets: ['latin'], 
  });
export default function Hero() {
  
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className=" h-screen w-full flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-4xl md:text-7xl font-extrabold ${coiny.className} gradient-text-animated`}
      >
        Turning Ideas Into Reality
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 max-w-xl text-lg text-gray-300"
      >
        I’m Ali Wajdan, a creative frontend developer crafting modern web experiences with React, Next.js, and motion design.
      </motion.p>
      <motion.div
          key={currentSkill}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-semibold text-lg sm:text-xl pt-6 gradient-text-animated"
        >
          {skills[currentSkill]}
        </motion.div>

    </section>
  );
}


       
