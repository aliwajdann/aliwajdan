// components/Testimonials.tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const Testimonials = () => {
 const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=3')
      .then(res => res.json())
      .then(data => {
        const fakeReviews = [
  "Ali is an incredibly skilled developer who not only delivered our project ahead of schedule, but also took the time to walk us through every detail. His commitment to clean, maintainable code and user experience really stood out.",
  
  "Working with Ali was like a breath of fresh air. He communicated clearly, responded quickly, and handled feedback like a true professional. The final product was polished, responsive, and exceeded all expectations.",

  "I can't speak highly enough about Ali’s work. Every little UI/UX detail was spot on. It felt like having a full product team in one person. Absolute legend!"
];


        const formatted = data.results.map((user: any, i: number) => ({
          id: i + 1,
          name: `${user.name.first} ${user.name.last}`,
          role: 'Founder', // or make random roles if you want
          company: 'DemoCorp',
          content: fakeReviews[i],
          avatar: user.picture.medium,
        }));

        setTestimonials(formatted);
      });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const nextTestimonial = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 === testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0,
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Client <span className="text-cyan-500">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here's what people I've worked with have to say about my work.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className=" h-96">
           {testimonials.length > 0 && (
  <AnimatePresence mode="wait">
    <motion.div
      key={currentIndex}
      variants={slideVariants}
      initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
      animate="visible"
      exit="exit"
      className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center"
    >
      <Quote className="h-10 w-10 text-cyan-500 mb-6 rotate-180" />
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
        {testimonials[currentIndex].content}
      </p>
      <div className="mt-auto flex items-center">
        <img 
          src={testimonials[currentIndex].avatar} 
          alt={testimonials[currentIndex].name}
          className="h-16 w-16 rounded-full object-cover mr-4 border-2 border-cyan-500"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
          </p>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
)}

          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute left-10 dark:bg-cyan-500 md:left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white dark:md:bg-gray-800  p-2 rounded-full shadow-md hover:bg-cyan-500 hover:text-white transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextTestimonial}
            // bg-cyan-500
            className="absolute right-10 md:right-0 dark:bg-cyan-500 top-1/2 -translate-y-1/2 translate-x-12 bg-white dark:md:bg-gray-800 p-2 rounded-full shadow-md hover:bg-cyan-500 hover:text-white transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 'right' : 'left');
                  setCurrentIndex(index);
                }}
                className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-cyan-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;