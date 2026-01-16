'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaSnapchat,
} from 'react-icons/fa6';

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-28 overflow-hidden"
      style={{
        background:
          'linear-gradient(to bottom, var(--hero-bg-start), var(--hero-bg-mid), var(--hero-bg-end))',
      }}
    >
      {/* 🌌 FLOATING PARTICLES */}
      <motion.div
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute top-1/3 left-1/4 w-[520px] h-[520px] rounded-full blur-[180px]"
          style={{ background: 'var(--hero-accent)' }}
        />
        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-[520px] h-[520px] rounded-full blur-[180px]"
          style={{ background: 'var(--hero-accent-soft)' }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-20 gradient-text"
        >
          About Me
        </motion.h2>

        {/* GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative glass rounded-[36px] p-8 md:p-14 border border-white/10 backdrop-blur-2xl"
        >
          {/* CARD GLOW */}
          <div
            className="absolute inset-0 -z-10 rounded-[36px] blur-[130px] opacity-30"
            style={{
              background:
                'linear-gradient(135deg,var(--hero-accent),var(--hero-accent-soft))',
            }}
          />

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT – FULL IMAGE */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="flex justify-center"
            >
              <div className="relative w-[260px] h-[320px] md:w-[340px] md:h-[420px] rounded-3xl overflow-hidden border border-white/20">
                <Image
                  src="/arhan.jpg"
                  alt="Mohammed Arhan"
                  fill
                  className="object-contain"
                  priority
                />

                {/* IMAGE NEON */}
                <div
                  className="absolute inset-0 blur-[100px] opacity-40"
                  style={{
                    background:
                      'linear-gradient(135deg,var(--hero-accent),var(--hero-accent-soft))',
                  }}
                />
              </div>
            </motion.div>

            {/* RIGHT – CONTENT */}
            <div className="space-y-6 text-lg leading-relaxed">
              <p style={{ color: 'var(--hero-text-secondary)' }}>
                I am an <span className="font-semibold text-[var(--hero-accent)]">
                MCA Graduate (2025)</span> with a strong passion for technology,
                innovation, and continuous learning. I completed my{' '}
                <span className="font-semibold text-[var(--hero-accent)]">
                Full Stack Developer Internship at CDAC, Bengaluru</span>, where
                I received the{' '}
                <span className="font-semibold text-[var(--hero-accent)]">
                Star Performer Award</span>.
              </p>

              <p style={{ color: 'var(--hero-text-secondary)' }}>
                I specialize in{' '}
                <span className="font-semibold text-[var(--hero-accent)]">
                Full Stack Development</span> and{' '}
                <span className="font-semibold text-[var(--hero-accent)]">
                Machine Learning</span>, building scalable and user-focused
                applications. As a{' '}
                <span className="font-semibold text-[var(--hero-accent)]">
                PWD candidate</span>, my journey shaped strong resilience.
              </p>

              <p style={{ color: 'var(--hero-text-secondary)' }}>
                Beyond development, I am a{' '}
                <span className="font-semibold text-[var(--hero-accent)]">
                Creative Content Creator</span>, Digital Designer, and Social
                Media Manager with achievements across multiple competitions.
              </p>

              {/* SOCIAL ICONS */}
              <div className="flex flex-wrap gap-6 pt-6">
                {[
                  { icon: FaYoutube, color: '#ff0000' },
                  { icon: FaInstagram, color: '#e1306c' },
                  { icon: FaLinkedin, color: '#0a66c2' },
                  { icon: FaXTwitter, color: '#1da1f2' },
                  { icon: FaSnapchat, color: '#fffc00' },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      color: item.color,
                      filter: `drop-shadow(0 0 12px ${item.color})`,
                    }}
                    className="text-3xl"
                  >
                    <item.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}