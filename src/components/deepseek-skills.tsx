// components/SkillsRadar.tsx
'use client';
import { motion } from 'framer-motion';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Skills = () => {
  const data = {
    labels: ['React', 'Shopify', 'Next.js', 'Tailwind', 'TypeScript', 'UI/UX'],
    datasets: [
      {
        label: 'Skill Level',
        data: [90, 85, 80, 95, 70, 75],
        backgroundColor: 'rgba(6, 182, 212, 0.2)',
        borderColor: 'rgba(6, 182, 212, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(6, 182, 212, 1)',
        pointBorderColor: '#fff',
        pointHoverRadius: 5,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'rgba(255, 255, 255, 0.1)',
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          display: false,
          stepSize: 20,
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        pointLabels: {
          color: 'white',
          font: {
            size: 14,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A visual representation of my technical skills and expertise areas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl">
            <Radar data={data} options={options} />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
          {[
            { name: 'React', level: 'Advanced' },
            { name: 'Next.js', level: 'Advanced' },
            { name: 'TypeScript', level: 'Advanced' },
            { name: 'Tailwind CSS', level: 'Expert' },
            { name: 'Shopify', level: 'Expert' },
            { name: 'UI/UX Design', level: 'Intermediate' },
            { name: 'Framer Motion', level: 'Advanced' },
            { name: 'GSAP', level: 'Intermediate' },
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-2">{skill.name}</h3>
              <p className="text-gray-400">{skill.level}</p>
              <div className="mt-3 h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level === 'Expert' ? 95 : skill.level === 'Advanced' ? 80 : 60}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-cyan-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;