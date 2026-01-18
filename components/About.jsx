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
  className="
    relative min-h-[90vh] py-24 overflow-hidden
    bg-black
    light:bg-white
  "
>

  {/* ================= PREMIUM FLOATING PARTICLES ================= */}
  {/* ================= BACKGROUND PARTICLES ================= */}
<motion.div
  className="absolute inset-0 pointer-events-none"
  animate={{ opacity: [0.14, 0.22, 0.14] }}
  transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
>
  {/* PRIMARY FLOAT */}
  <motion.div
    animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
    transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
    className="
      absolute top-1/4 left-1/4
      w-[480px] h-[480px]
      rounded-full blur-[160px]
      bg-[var(--hero-accent)]
      opacity-35
    "
  />

  {/* SECONDARY FLOAT */}
  <motion.div
    animate={{ y: [0, 45, 0], x: [0, -25, 0] }}
    transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
    className="
      absolute bottom-1/4 right-1/4
      w-[520px] h-[520px]
      rounded-full blur-[180px]
      bg-[var(--hero-accent-soft)]
      opacity-30
    "
  />

  {/* DEPTH VIGNETTE */}
  <div
    className="
      absolute inset-0
      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_65%)]
      light:bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04),transparent_65%)]
    "
  />
</motion.div>


  {/* ================= CONTENT WRAPPER ================= */}
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
            {/* ================= LEFT IMAGE ================= */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center items-center"
>
  <div
    className="
      relative 
      w-[240px] h-[320px]
      sm:w-[280px] sm:h-[360px]
      md:w-[340px] md:h-[440px]
      rounded-3xl 
      overflow-hidden
      border border-white/20
      backdrop-blur-sm
    "
  >
    {/* 🌈 BACK AURA (BEHIND IMAGE) */}
    <div
      className="absolute inset-0 -z-10 blur-[90px] opacity-30"
      style={{
        background:
          'linear-gradient(135deg,var(--hero-accent),var(--hero-accent-soft))',
      }}
    />

    {/* 🧑 IMAGE (CRISP + SMOOTH ZOOM) */}
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full h-full"
    >
      <Image
        src="/arhan.jpg"
        alt="Mohammed Arhan"
        fill
        sizes="(max-width: 768px) 80vw, 340px"
        quality={100}
        priority
        className="object-cover object-center"
      />
    </motion.div>

    {/* ✨ SUBTLE EDGE GLOW */}
    <div
      className="pointer-events-none absolute inset-0 rounded-3xl"
      style={{
        boxShadow:
          'inset 0 0 0.5px rgba(255,255,255,0.4), 0 0 40px var(--glow-color)',
      }}
    />
  </div>
</motion.div>


          {/* ================= RIGHT CONTENT ================= */}
<div className="space-y-6 text-lg leading-relaxed">

  {/* PARAGRAPH 1 */}
  <p className="text-[var(--hero-text-primary)]">
    I am an{' '}
    <span className="font-semibold text-[var(--hero-highlight)]">
      MCA Graduate (2025)
    </span>{' '}
    with a strong passion for technology, innovation, and continuous
    learning. I completed my{' '}
    <span className="font-semibold text-[var(--hero-highlight)]">
      Full Stack Developer Internship at CDAC, Bengaluru
    </span>{' '}
    where I received the{' '}
    <span className="font-semibold text-[var(--hero-highlight)]">
      Star Performer Award
    </span>.
  </p>

  {/* PARAGRAPH 2 */}
  <p className="text-[var(--hero-text-primary)]">
    I specialize in{' '}
    <span className="font-semibold text-[var(--hero-highlight)]">
      Full Stack Development
    </span>{' '}
    and{' '}
    <span className="font-semibold text-[var(--hero-highlight)]">
      Machine Learning
    </span>
    , building scalable and user-focused applications. As a{' '}
    <span className="font-semibold text-[var(--hero-highlight)]">
      PWD candidate
    </span>
    , my journey has strengthened my resilience and discipline.
  </p>

  {/* PARAGRAPH 3 */}
  <p className="text-[var(--hero-text-primary)]">
    Beyond development, I am a{' '}
    <span className="font-semibold text-[var(--hero-highlight)]">
      Creative Content Creator
    </span>
    , Digital Designer, and Social Media Manager with achievements across
    multiple competitions.
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
        whileHover={{
          scale: 1.18,
          rotate: -6,
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 220 }}
        className="w-12 h-12 rounded-full flex items-center justify-center glass border border-white/15 shadow-md"
      >
        <item.icon
          className="text-2xl"
          style={{ color: item.color }}
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
