import React from 'react'
// import Hero from '@/components/deepseek-hero'
// import Skills from '@/components/deepseek-skills'
// import Projects from '@/components/deepseek-projects'
// import Contact from '@/components/deepseek-contact'
// import Testimonials from '@/components/deepseek-testimonials'/
import Navbar from '@/components/Navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/Footer';



export default function Home() {
  return (
    <main className="overflow-x-hidden">
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
