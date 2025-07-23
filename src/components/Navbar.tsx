"use client";
import { motion } from "framer-motion";
import Link from "next/link";

// Initialize the Poppins font with your desired configuration

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/30 px-6 py-4 flex justify-between items-center text-white`}
    >
      <h1 className="md:text-2xl text-xl font-normal">AliWajdan.dev</h1>
      <div className="space-x-6 text-sm hidden md:flex">
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </motion.nav>
  );
}