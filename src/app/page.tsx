import Navbar from '@/components/Navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/Footer';
import Services from '@/components/services';
// import PlanetComponent from '@/components/PlanetComponent'



export default function Home() {
  return (
    <div className='bg-black'>
      <Navbar />
      <Hero />
      <About /> 
      <Services />
      <Projects />   
      {/* <PlanetComponent/> */}
      <Contact />
      <Footer />
    </div>
  );
}
