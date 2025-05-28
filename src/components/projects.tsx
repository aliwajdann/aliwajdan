// components/ProjectShowcase.tsx
'use client';
import { motion } from 'framer-motion';
import { Code, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  codeUrl?: string;
}

const ProjectShowcase = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online store with cart functionality and payment processing.',
      tags: ['Next.js', 'Stripe', 'Tailwind'],
      image: '/project1.jpg',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A modern portfolio with smooth animations and responsive design.',
      tags: ['React', 'Framer Motion', 'GSAP'],
      image: '/project2.jpg',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Dashboard UI',
      description: 'Admin dashboard with data visualization and user management.',
      tags: ['TypeScript', 'Chart.js', 'Material UI'],
      image: '/project3.jpg',
      liveUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-cyan-500">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my selected works. Each project was carefully crafted to solve specific problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        className="bg-white text-cyan-600 p-3 rounded-full hover:bg-cyan-600 hover:text-white transition-colors duration-300"
                        aria-label="View live demo"
                      >
                        <Eye className="h-5 w-5" />
                      </a>
                    )}
                    {project.codeUrl && (
                      <a 
                        href={project.codeUrl}
                        className="bg-white text-cyan-600 p-3 rounded-full hover:bg-cyan-600 hover:text-white transition-colors duration-300"
                        aria-label="View source code"
                      >
                        <Code className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;