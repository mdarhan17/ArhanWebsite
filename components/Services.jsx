'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  Smartphone,
  Server,
  BarChart3,
  Clapperboard,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description:
        'Custom web applications built with modern technologies, optimized for performance, scalability and exceptional user experience.',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description:
        'Intelligent solutions powered by predictive analytics, automation and machine learning models to solve real-world challenges.',
    },
    {
      icon: Smartphone,
      title: 'Android App Development',
      description:
        'High-performance Android applications with intuitive design, smooth functionality and seamless user engagement.',
    },
    {
      icon: Server,
      title: 'Cloud & Deployment',
      description:
        'Deploy, manage and optimize applications with secure hosting, cloud infrastructure and scalable solutions.',
    },
    {
      icon: BarChart3,
      title: 'Social Media Management',
      description:
        'Strategic content planning, audience growth and brand positioning to strengthen your digital presence.',
    },
    {
      icon: Clapperboard,
      title: 'Content Creation & Branding',
      description:
        'Creative content production and personal branding strategies that help businesses stand out in a competitive market.',
    },
  ];

  return (
    <section id="services" className="section-padding relative">

      {/* TOP DIVIDER */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, var(--accent-primary), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            What I Can Do For You
          </h2>

          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Helping businesses, creators and startups transform ideas into
            powerful digital experiences through modern technology,
            intelligent systems and strategic branding.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
              }}
              className="
                glass
                rounded-3xl
                p-8
                relative
                overflow-hidden
                border
                border-white/10
                transition-all
                duration-500
                group
                hover:shadow-2xl
              "
            >

              {/* PREMIUM GLOW */}
              <div
                className="
                  absolute
                  inset-0
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

              {/* ICON */}
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  mb-6
                  shadow-lg
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-6
                "
                style={{
                  background: 'var(--gradient-accent)',
                }}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-xl
                  font-bold
                  mb-4
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                "
                style={{ color: 'var(--text-primary)' }}
              >
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="leading-relaxed text-[15px]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {service.description}
              </p>

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