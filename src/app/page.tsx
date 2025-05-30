import React from 'react'
// import Hero from '@/components/deepseek-hero'
// import Skills from '@/components/deepseek-skills'
// import Projects from '@/components/deepseek-projects'
// import Contact from '@/components/deepseek-contact'
// import Testimonials from '@/components/deepseek-testimonials'/
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';



export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* <Testimonials /> */}
      {/* <Skills /> */}
      <About />
      <Projects />
      <Contact />
      <Footer></Footer>
    </main>
  );
}
