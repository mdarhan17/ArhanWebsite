'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaEnvelope,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from 'react-icons/fa6';


export default function About() {
  return (
  <section
  id="about"
  className="relative min-h-[90vh] py-24 overflow-hidden will-change-transform"
>


  {/* ================= PREMIUM FLOATING PARTICLES ================= */}
  {/* ================= BACKGROUND PARTICLES ================= */}
{/* ================= BACKGROUND PARTICLES (VISIBLE) ================= */}
<motion.div
  className="absolute inset-0 z-0 pointer-events-none"
  animate={{ opacity: [0.25, 0.4, 0.25] }}
  transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
>
  {/* PRIMARY GLOW */}
  <motion.div
    animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
    transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
    className="
      absolute top-1/4 left-1/4
      w-[520px] h-[520px]
      rounded-full blur-[140px]
      opacity-40
    "
    style={{ background: 'var(--hero-accent)' }}
  />

  {/* SECONDARY GLOW */}
  <motion.div
    animate={{ y: [0, 50, 0], x: [0, -35, 0] }}
    transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
    className="
      absolute bottom-1/4 right-1/4
      w-[580px] h-[580px]
      rounded-full blur-[180px]
      opacity-35
    "
    style={{ background: 'var(--hero-accent-soft)' }}
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
  initial={{ opacity: 0, scale: 0.96 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="about-image-wrapper"
>
  <div className="about-image-glow" />

  <div className="about-image-frame">
    <Image
      src="/arhan.JPG"
      alt="Mohammed Arhan"
      fill
      priority
      className="about-image"
    />
    <div className="about-image-shine" />
  </div>
</motion.div>





{/* ================= RIGHT CONTENT ================= */}
<div className="space-y-5 text-lg leading-relaxed">

  <p className="text-[var(--hero-text-primary)]">
    I am an{' '}
    <span className="font-semibold text-[var(--hero-highlight)]">
      MCA Graduate (2025)
    </span>{' '}
    with a strong passion for technology and innovation. I completed my{' '}
    <span className="font-semibold text-[var(--hero-highlight)]">
      Full Stack Developer Internship at CDAC, Bengaluru
    </span>
    , earning the{' '}
    <span className="font-semibold text-[var(--hero-highlight)]">
      Star Performer Award
    </span>{' '}
    for my performance.
  </p>

  <p className="text-[var(--hero-text-primary)]">
    Currently, I work as a{' '}
    <span className="font-semibold text-[var(--hero-highlight)]">
      Full Stack & AI/ML Engineer
    </span>{' '}
    in{' '}
    <span className="font-semibold text-[var(--hero-highlight)]">
      Mangalore
    </span>
    , building end-to-end web applications and intelligent, data-driven
    solutions using modern frameworks and machine learning models.
  </p>

  <p className="text-[var(--hero-text-primary)]">
    I specialize in{' '}
    <span className="font-semibold text-[var(--hero-highlight)]">
      Full Stack Development
    </span>{' '}
    and{' '}
    <span className="font-semibold text-[var(--hero-highlight)]">
      Machine Learning
    </span>
    , focusing on scalable, secure, and user-centric applications. As a{' '}
    <span className="font-semibold text-[var(--hero-highlight)]">
      PWD candidate
    </span>
    , my journey has strengthened my resilience and adaptability.
  </p>

  <p className="text-[var(--hero-text-primary)]">
    Beyond development, I am a{' '}
    <span className="font-semibold text-[var(--hero-highlight)]">
      Creative Content Creator
    </span>
    ,{' '}
    <span className="font-semibold text-[var(--hero-highlight)]">
      Digital Designer
    </span>
    , and{' '}
    <span className="font-semibold text-[var(--hero-highlight)]">
      Social Media Manager
    </span>
    , blending technical expertise with creativity.
  </p>

 {/* ================= SOCIAL ICONS ================= */}
<div
  className="
    flex items-center gap-5 pt-6
    flex-nowrap
    overflow-x-auto
    md:overflow-visible
  "
>
  {[
    // 📧 GMAIL
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      deepLink: 'googlegmail://co?to=mdarhanofficial@gmail.com',
      fallbackUrl:
        'https://mail.google.com/mail/?view=cm&fs=1&to=mdarhanofficial@gmail.com',
      color: 'from-red-500 to-orange-500',
    },

    // ▶️ YOUTUBE (FIXED – channel ID based)
    {
      icon: <FaYoutube className="w-6 h-6" />,
      deepLink: 'vnd.youtube://channel/UCXpmkxJk6vIyS2amJniuynw',
      fallbackUrl:
        'https://www.youtube.com/channel/UCXpmkxJk6vIyS2amJniuynw',
      color: 'from-red-600 to-red-500',
      isPrimary: true,
    },

    // 💼 LINKEDIN
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      deepLink: 'linkedin://in/mdarhan',
      fallbackUrl: 'https://www.linkedin.com/in/mdarhan/',
      color: 'from-blue-600 to-blue-500',
    },

    // 📸 INSTAGRAM
    {
      icon: <FaInstagram className="w-6 h-6" />,
      deepLink: 'instagram://user?username=arhanyay',
      fallbackUrl: 'https://www.instagram.com/arhanyay/',
      color: 'from-pink-500 to-purple-600',
    },

    // ❌ X (TWITTER)
    {
      icon: <FaXTwitter className="w-6 h-6" />,
      deepLink: 'twitter://user?screen_name=mdarhan',
      fallbackUrl: 'https://x.com/mdarhan',
      color: 'from-slate-700 to-slate-900',
    },
  ].map((item, i) => (
    <motion.button
      key={i}
      onClick={() => {
        // 🖥 Desktop → always web
        if (!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.open(item.fallbackUrl, '_blank', 'noopener,noreferrer');
          return;
        }

        // 📱 Mobile → try app first
        if (item.deepLink) {
          const start = Date.now();
          window.location.href = item.deepLink;

          // fallback if app not installed
          setTimeout(() => {
            if (Date.now() - start < 1500) {
              window.open(item.fallbackUrl, '_blank', 'noopener,noreferrer');
            }
          }, 1000);
        } else {
          window.open(item.fallbackUrl, '_blank', 'noopener,noreferrer');
        }
      }}
      whileHover={{ scale: 1.15, rotate: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 220 }}
      className={`
        w-11 h-11 min-w-[44px]
        rounded-full
        flex items-center justify-center
        bg-gradient-to-r ${item.color}
        text-white
        shadow-md
        border border-white/20
      `}
    >
      {item.icon}
    </motion.button>
  ))}
</div>



            </div>
          </div>
        </motion.div>
      </div>
      <div className="hero-divider" />
    </section>
  );
}
