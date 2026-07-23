'use client';

import { motion } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';

export default function Projects() {
  const projects = [
    {
      title: 'Air Canvas: Virtual Drawing in Video Conferencing',
      description:
        'A video meeting application with an integrated gesture-based Air Canvas, enabling users to draw virtually during live sessions using hand tracking.',
      tech: [
        'Next.js',
        'Clerk API',
        'Stream API',
        'Python',
        'OpenCV',
        'MediaPipe',
        'Tailwind CSS',
      ],
      gradient: 'from-cyan-400 to-sky-600',
    },
    {
      title: 'ArhansRTO: Car Parking Simulation Game',
      description:
        'An interactive car parking simulation game focusing on smooth controls, collision handling, and real-time game logic.',
      tech: ['React', 'Vite', 'JavaScript', 'CSS'],
      gradient: 'from-fuchsia-500 to-rose-500',
    },
    {
      title: 'Edumate: Online Course Management System',
      description:
        'A MERN-based learning platform where students enroll in courses, instructors manage content, and admins control users with secure authentication.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      gradient: 'from-violet-500 to-indigo-600',
    },
    {
      title: 'SmartMailGuard: Spam Email Detection System',
      description:
        'A spam mail detection system that classifies emails as spam or legitimate using keyword-based text analysis.',
      tech: ['Python', 'NumPy', 'Pandas', 'Text Processing'],
      gradient: 'from-amber-500 to-red-600',
    },
    {
      title: 'NumRush: Random Score Accumulation Game',
      description:
        'A logic-based game where players select numbers and random values are added per round to determine the final winner.',
      tech: ['JavaScript', 'Random Logic', 'Game Algorithms'],
      gradient: 'from-emerald-400 to-teal-600',
    },
    {
      title: 'CarConnect: Smart Car Service Booking Platform',
      description:
        'A MERN-based platform enabling users to book nearby car services, track bookings, and manage service status with role-based access.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      gradient: 'from-red-500 to-red-800',
    },
    {
      title: 'Beyond Payana: Experience Karnataka Like a Local',
      description:
        'A community-driven tourism platform connecting foreign travellers with verified local guides for authentic cultural experiences.',
      tech: [
        'Next.js',
        'Node.js',
        'MongoDB',
        'Maps API',
        'Recommendation System',
      ],
      gradient: 'from-lime-500 to-green-700',
    },
    {
      title: 'DevSnap: Minimal Developer Portfolio',
      description:
        'A lightweight and responsive mini portfolio designed to showcase skills and projects with fast performance.',
      tech: ['React', 'Vite', 'JavaScript', 'CSS'],
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'ArhanWebsite: Personal Portfolio & Showcase',
      description:
        'A modern personal portfolio highlighting projects, experience, and skills with a clean and scalable design.',
      tech: ['Next.js', 'JavaScript', 'Tailwind CSS'],
      gradient: 'from-yellow-400 to-orange-600',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
    >
      {/* TOP DIVIDER */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, var(--accent-primary), transparent)',
        }}
      />

      {/* MULTI COLOR BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full blur-[180px] opacity-15"
          style={{
            background:
              'radial-gradient(circle, rgba(168,85,247,0.55) 0%, transparent 70%)',
          }}
        />

        <div
          className="absolute bottom-20 left-10 w-[500px] h-[500px] rounded-full blur-[200px] opacity-15"
          style={{
            background:
              'radial-gradient(circle, rgba(59,130,246,0.55) 0%, transparent 70%)',
          }}
        />

        <div
          className="absolute top-1/2 left-[20%] w-[350px] h-[350px] rounded-full blur-[150px] opacity-10"
          style={{
            background:
              'radial-gradient(circle, rgba(34,211,238,0.55) 0%, transparent 70%)',
          }}
        />

        <div
          className="absolute bottom-1/3 right-[25%] w-[300px] h-[300px] rounded-full blur-[140px] opacity-10"
          style={{
            background:
              'radial-gradient(circle, rgba(236,72,153,0.5) 0%, transparent 70%)',
          }}
        />

        <div
          className="absolute top-[70%] left-[50%] w-[350px] h-[350px] rounded-full blur-[150px] opacity-10"
          style={{
            background:
              'radial-gradient(circle, rgba(16,185,129,0.45) 0%, transparent 70%)',
          }}
        />

        <div
          className="absolute top-[10%] left-[40%] w-[300px] h-[300px] rounded-full blur-[140px] opacity-10"
          style={{
            background:
              'radial-gradient(circle, rgba(249,115,22,0.45) 0%, transparent 70%)',
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
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

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            A collection of projects that showcase my skills and passion
            for building exceptional digital experiences.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.03,
                y: -10,
              }}
              className="
                glass
                rounded-3xl
                p-6
                group
                border
                border-white/10
                transition-all
                duration-500
                hover:border-white/20
                hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]
              "
            >
              <div className="space-y-5">
                <div
                  className={`h-40 rounded-2xl bg-gradient-to-br ${project.gradient}
                  opacity-90 flex items-center justify-center
                  shadow-[0_0_40px_rgba(59,130,246,0.15)]
                  group-hover:scale-[1.02]
                  transition-all duration-500`}
                >
                  <HiCode className="w-16 h-16 text-white" />
                </div>

                <h3
                  className="text-xl font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
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

                <div className="flex gap-4 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-medium"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    <HiExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-medium"
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

      {/* BOTTOM DIVIDER */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, var(--accent-primary), transparent)',
        }}
      />
    </section>
  );
}