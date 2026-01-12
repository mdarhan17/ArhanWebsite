'use client';

import { motion } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with real-time inventory management, secure payment processing, and admin dashboard.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling tools, and engagement metrics.',
      tech: ['React', 'Express', 'MongoDB', 'Chart.js'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and progress tracking.',
      tech: ['Next.js', 'Firebase', 'Tailwind CSS'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content generation platform using machine learning models for creating marketing copy and blog posts.',
      tech: ['React', 'Python', 'TensorFlow', 'FastAPI'],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Real Estate Platform',
      description: 'Property listing website with advanced search filters, virtual tours, and integrated booking system.',
      tech: ['Next.js', 'Supabase', 'Mapbox'],
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Fitness Tracking App',
      description: 'Mobile-first fitness application with workout tracking, nutrition planning, and progress analytics.',
      tech: ['React Native', 'Node.js', 'PostgreSQL'],
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
