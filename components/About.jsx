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
      className="relative min-h-[90vh] py-24 overflow-hidden"
      style={{
        background:
          'linear-gradient(to bottom, var(--hero-bg-start), var(--hero-bg-mid), var(--hero-bg-end))',
      }}
    >
      {/* ================= BACKGROUND PARTICLES ================= */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 14, repeat: Infinity }}
      >
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/3 left-1/4 w-[420px] h-[420px] rounded-full blur-[140px]"
          style={{ background: 'var(--hero-accent)' }}
        />
        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 24, repeat: Infinity }}
          className="absolute bottom-1/3 right-1/4 w-[420px] h-[420px] rounded-full blur-[140px]"
          style={{ background: 'var(--hero-accent-soft)' }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* ================= ABOUT GLASS CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative glass rounded-[36px] p-8 md:p-14 border border-white/10 backdrop-blur-2xl"
        >
          {/* CARD SOFT AURA */}
          <div
            className="absolute inset-0 -z-10 rounded-[36px] blur-[90px] opacity-20"
            style={{
              background:
                'linear-gradient(135deg,var(--hero-accent),var(--hero-accent-soft))',
            }}
          />

          {/* TITLE INSIDE CARD */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 gradient-text">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* ================= LEFT IMAGE ================= */}
            <motion.div
              whileHover={{ scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="relative flex justify-center"
            >
              <div className="relative w-[260px] h-[340px] md:w-[340px] md:h-[440px] rounded-3xl overflow-hidden border border-white/20">
                {/* IMAGE */}
                <Image
                  src="/arhan.jpg"
                  alt="Mohammed Arhan"
                  fill
                  className="object-cover"
                  priority
                />

                {/* STROKE TRAVEL EFFECT */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    border: '1.5px solid transparent',
                    background:
                      'linear-gradient(90deg,var(--hero-accent),var(--hero-accent-soft)) border-box',
                    WebkitMask:
                      'linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)',
                    WebkitMaskComposite: 'xor',
                  }}
                />

                {/* IMAGE SOFT GLOW */}
                <div
                  className="absolute inset-0 blur-[80px] opacity-25"
                  style={{
                    background:
                      'linear-gradient(135deg,var(--hero-accent),var(--hero-accent-soft))',
                  }}
                />
              </div>
            </motion.div>

            {/* ================= RIGHT CONTENT ================= */}
            <div className="space-y-6 text-lg leading-relaxed">
              <p style={{ color: 'var(--hero-text-secondary)' }}>
                I am an{' '}
                <span className="font-semibold text-[var(--hero-accent)]">
                  MCA Graduate (2025)
                </span>{' '}
                with a strong passion for technology, innovation, and continuous
                learning. I completed my{' '}
                <span className="font-semibold text-[var(--hero-accent)]">
                  Full Stack Developer Internship at CDAC, Bengaluru
                </span>{' '}
                where I received the{' '}
                <span className="font-semibold text-[var(--hero-accent)]">
                  Star Performer Award
                </span>.
              </p>

              <p style={{ color: 'var(--hero-text-secondary)' }}>
                I specialize in{' '}
                <span className="font-semibold text-[var(--hero-accent)]">
                  Full Stack Development
                </span>{' '}
                and{' '}
                <span className="font-semibold text-[var(--hero-accent)]">
                  Machine Learning
                </span>
                , building scalable and user-focused applications. As a{' '}
                <span className="font-semibold text-[var(--hero-accent)]">
                  PWD candidate
                </span>
                , my journey has strengthened my resilience and discipline.
              </p>

              <p style={{ color: 'var(--hero-text-secondary)' }}>
                Beyond development, I am a{' '}
                <span className="font-semibold text-[var(--hero-accent)]">
                  Creative Content Creator
                </span>
                , Digital Designer, and Social Media Manager with achievements
                across multiple competitions.
              </p>

              {/* ================= SOCIAL ICONS ================= */}
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
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center glass border border-white/15"
                    style={{
                      boxShadow: `0 0 22px ${item.color}55`,
                    }}
                  >
                    <item.icon
                      className="text-2xl"
                      style={{
                        color: item.color,
                        filter: `drop-shadow(0 0 10px ${item.color})`,
                      }}
                    />
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
