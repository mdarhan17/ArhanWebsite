'use client';

import { motion } from 'framer-motion';
import { Briefcase, Code2, BarChart3 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      icon: Briefcase,
      title: 'Full Stack Developer & Content Creator',
      company: 'Zephyr Technologies',
      period: 'Present',
      badge: 'Current',
      description:
        'Developing modern web applications, managing digital content, and contributing to branding and online growth strategies.',
      points: [
        'Building responsive and scalable web applications',
        'Working with React, Next.js, Node.js & MongoDB',
        'Creating engaging digital content and branding assets',
        'Managing social media presence and audience growth',
      ],
    },
    {
      icon: Code2,
      title: 'Full Stack Development Intern',
      company: 'CDAC Bengaluru',
      period: 'Apr 2025 – Jun 2025',
      badge: 'Star Performer',
      description:
        'Worked on real-world development projects with a focus on frontend, backend and API integration.',
      points: [
        'Developed responsive web applications',
        'Integrated frontend with backend services',
        'Built RESTful APIs and database solutions',
        'Recognized as a Star Performer during internship',
      ],
    },
    {
      icon: BarChart3,
      title: 'Data Analyst Intern',
      company: 'Internship Experience',
      period: 'May 2022 – Jul 2022',
      badge: 'Analytics',
      description:
        'Performed data cleaning, reporting and analysis to generate meaningful business insights.',
      points: [
        'Data cleaning and preprocessing',
        'Excel and Python based analysis',
        'Generated reports and visual insights',
        'Worked with structured datasets',
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding relative">

      {/* TOP DIVIDER */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, var(--accent-primary), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Professional Experience
          </h2>

          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Building impactful digital solutions through software development,
            content creation and real-world industry experience.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
            style={{
              background:
                'linear-gradient(to bottom, transparent, var(--accent-primary), transparent)',
            }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className={`relative flex items-center mb-14 ${
                index % 2 === 0
                  ? 'md:justify-start'
                  : 'md:justify-end'
              }`}
            >

              {/* TIMELINE DOT */}
              <div
                className="
                hidden md:flex
                absolute left-1/2
                -translate-x-1/2
                w-5 h-5
                rounded-full
                border-4
                z-10
                "
                style={{
                  background: 'var(--accent-primary)',
                  borderColor: 'var(--bg-primary)',
                }}
              />

              {/* CARD */}
              <div
                className="
                glass
                rounded-3xl
                p-8
                w-full
                md:w-[46%]
                border
                border-white/10
                relative
                overflow-hidden
                group
                transition-all
                duration-500
                hover:-translate-y-2
                "
              >

                {/* HOVER GLOW */}
                <div
                  className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  pointer-events-none
                  "
                  style={{
                    background:
                      'radial-gradient(circle at top right, color-mix(in srgb, var(--accent-primary) 25%, transparent), transparent 65%)',
                  }}
                />

                {/* TOP */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <div
                      className="inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-3"
                      style={{
                        background: 'var(--gradient-accent)',
                        color: '#fff',
                      }}
                    >
                      {exp.badge}
                    </div>

                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {exp.title}
                    </h3>

                    <p
                      className="font-medium"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      {exp.company}
                    </p>

                    <p
                      className="text-sm mt-1"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {exp.period}
                    </p>
                  </div>

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'var(--gradient-accent)',
                    }}
                  >
                    <exp.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p
                  className="leading-relaxed mb-5"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {exp.description}
                </p>

                {/* POINTS */}
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span
                        className="mt-2 w-2 h-2 rounded-full"
                        style={{
                          background: 'var(--accent-primary)',
                        }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>
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