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
    <>
      <Navbar />
      <Hero />
      {/* <Testimonials /> */}
      {/* <Skills /> */}
      <About />
      <Projects />
      {/* Experience Timeline */}
      <section id="experience" className="p-8 md:p-16">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="border-l-4 border-primary pl-6 space-y-6">
          <div>
            <h3 className="font-bold">2023 - Started Learning HTML/CSS</h3>
            <p className="text-sm text-muted">First step into the dev world</p>
          </div>
          <div>
            <h3 className="font-bold">2024 - Mastered React & Shopify</h3>
            <p className="text-sm text-muted">Built real-world stores</p>
          </div>
          <div>
            <h3 className="font-bold">2025 - Joined Internship & Built Stunning UI</h3>
            <p className="text-sm text-muted">Leveling up every day 🚀</p>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section id="blog" className="p-8 md:p-16 bg-gray-50 dark:bg-gray-950">
        <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
        <div className="space-y-6">
          <article className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-bold">⚡ Why I Love React + Firebase</h3>
            <p className="text-sm text-muted">Learn how I built full apps lightning-fast...</p>
          </article>
          <article className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-bold">🎨 Designing UIs That Pop</h3>
            <p className="text-sm text-muted">Tips I use to make sites scroll-stopping good.</p>
          </article>
        </div>
      </section>

      <Contact />
      <Footer></Footer>
    </>
  );
}
