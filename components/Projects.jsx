'use client';

import { motion } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';

export default function Projects() {
  const projects = [
  {
    title: 'Air Canvas: Virtual Drawing in Video Conferencing',
    description:
      'A video meeting application with an integrated gesture-based Air Canvas, enabling users to draw virtually during live sessions using hand tracking.',
    tech: ['Next.js', 'Clerk API', 'Stream API', 'Python', 'OpenCV', 'MediaPipe', 'Tailwind CSS'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'ArhansRTO: Car Parking Simulation Game',
    description:
      'An interactive car parking simulation game focusing on smooth controls, collision handling, and real-time game logic.',
    tech: ['React', 'Vite', 'JavaScript', 'CSS'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'SmartMailGuard: Spam Email Detection System',
    description:
      'A spam mail detection system that classifies emails as spam or legitimate using keyword-based text analysis.',
    tech: ['Python', 'NumPy', 'Pandas', 'Text Processing'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'NumRush: Random Score Accumulation Game',
    description:
      'A logic-based game where players select numbers and random values are added per round to determine the final winner.',
    tech: ['JavaScript', 'Random Logic', 'Game Algorithms'],
    gradient: 'from-green-500 to-teal-500',
  },
  {
    title: 'DevSnap: Minimal Developer Portfolio',
    description:
      'A lightweight and responsive mini portfolio designed to showcase skills and projects with fast performance.',
    tech: ['React', 'Vite', 'JavaScript', 'CSS'],
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'ArhanWebsite: Personal Portfolio & Showcase(This one only)',
    description:
      'A modern personal portfolio highlighting projects, experience, and skills with a clean and scalable design.',
    tech: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    gradient: 'from-yellow-500 to-orange-500',
  },
];


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A collection of projects that showcase my skills and passion for building exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="glass rounded-2xl p-6 glow-hover group"
            >
              <div className="space-y-4">
                <div
                  className={`h-40 rounded-xl bg-gradient-to-br ${project.gradient} opacity-80 flex items-center justify-center`}
                >
                  <HiCode className="w-16 h-16 text-white" />
                </div>

                <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full glass"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-sm font-medium"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    <HiExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-sm font-medium"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    <HiCode className="w-4 h-4" />
                    <span>View Code</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
