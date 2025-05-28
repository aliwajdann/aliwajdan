import React from 'react'
import Hero from '@/components/hero'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Testimonials from '@/components/testimonials'


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Testimonials />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
