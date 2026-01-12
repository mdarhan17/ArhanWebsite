'use client';

import { motion } from 'framer-motion';
import { HiCode, HiLightningBolt, HiColorSwatch, HiDatabase } from 'react-icons/hi';

export default function About() {
  const skills = [
    {
      icon: HiCode,
      title: 'Frontend Development',
      description: 'React, Next.js, Tailwind CSS, TypeScript',
    },
    {
      icon: HiDatabase,
      title: 'Backend Development',
      description: 'Node.js, Express, PostgreSQL, MongoDB',
    },
    {
      icon: HiLightningBolt,
      title: 'Performance',
      description: 'Optimization, SEO, Web Vitals',
    },
    {
      icon: HiColorSwatch,
      title: 'UI/UX Design',
      description: 'Figma, Design Systems, Prototyping',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Passionate developer with expertise in building modern web applications and creating engaging digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-6 glow-hover"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div
                  className="p-4 rounded-xl glass"
                  style={{
                    background: 'var(--gradient-accent)',
                  }}
                >
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {skill.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
              My Journey
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I'm a dedicated full-stack developer with a passion for creating innovative solutions that make a difference.
              With years of experience in web development, I specialize in building scalable applications using modern technologies.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Beyond coding, I'm an active content creator, sharing my knowledge and experiences with the developer community.
              I believe in continuous learning and staying updated with the latest trends in technology.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
              or creating content that helps others on their development journey.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
