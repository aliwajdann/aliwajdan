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
import Services from '@/components/services';



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />   
      <Contact />
      <Footer></Footer>
    </>
  );
}
