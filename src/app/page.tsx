import React from 'react'
import Hero from '@/components/hero'
// import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Testimonials from '@/components/testimonials'


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      {/* <About /> */}
      <Testimonials />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
