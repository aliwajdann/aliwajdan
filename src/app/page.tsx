import Navbar from '@/components/Navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Services from '@/components/services';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';



export default function Home() {
  return (
    <div className="site-shell">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
