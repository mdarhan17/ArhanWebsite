'use client';

import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import { useEffect, useRef, useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Image from 'next/image';

export default function Hero() {
  const canvasRef = useRef(null);
  const [isLight, setIsLight] = useState(false);

  /* ===============================
     THEME SYNC (NAVBAR TO HERO)
  =============================== */
  useEffect(() => {
    const updateTheme = () => {
      setIsLight(document.documentElement.classList.contains('light'));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  /* ===============================
     PARTICLE BACKGROUND
  =============================== */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const particles = [];
    const COUNT = 55;

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.6 + 0.8,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = isLight
        ? 'rgba(249,115,22,0.45)'
        : 'rgba(0,26,249,0.45)';

      particles.forEach((p) => {
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [isLight]);

  return (
    <section
  id="home"
  className="
    relative min-h-screen
    flex items-center justify-center
    overflow-hidden
    pt-24
    px-4 sm:px-6 lg:px-0
  "
  style={{
    background: `
      linear-gradient(
        to bottom,
        var(--hero-bg-start),
        var(--hero-bg-mid),
        var(--hero-bg-end)
      )
    `,
  }}
>

      {/* PARTICLES */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-35"
      />

      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[420px] h-[420px] rounded-full blur-[120px] opacity-25"
          style={{ background: 'var(--hero-accent)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'var(--hero-bg-mid)' }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2
                className="text-xl mb-2"
                style={{ color: 'var(--hero-text-secondary)' }}
              >
                Hi, I’m
              </h2>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
                style={{
                  background:
                    'linear-gradient(135deg,var(--hero-accent),var(--hero-accent-soft))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 22px var(--glow-color)',
                }}
              >
                Mohammed Arhan
              </h1>
            </div>

            {/* TYPEWRITER */}
            <div className="flex items-center gap-2 text-[20px] sm:text-2xl md:text-3xl font-semibold whitespace-nowrap">
              <span
                className="mr-2 font-medium"
                style={{ color: isLight ? '#111827' : '#ffffff' }}
              >
                I am a</span>

              <TypeText isLight={isLight} />
            </div>

            <p
              className="text-lg max-w-xl leading-relaxed"
              style={{ color: 'var(--hero-text-secondary)' }}
            >
            MCA Graduate with 5+ years of Experience, Driving 
            Modern Digital Solutions through Creativity and Growth
            </p>

            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-9 py-4 rounded-xl font-semibold border backdrop-blur-xl transition-all"
              style={{
                background: 'rgba(0,0,0,0.65)',
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.15)',
                boxShadow: isLight
                  ? '0 0 28px rgba(249,115,22,0.45)'
                  : '0 0 32px rgba(0,26,249,0.45)',
              }}
            >
              <HiDownload className="text-xl" />
              Download Resume
            </motion.a>
          </motion.div>
     
{/* RIGHT – IMAGE WITH BIG FLOATING AURA */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative flex justify-center items-center"
>
  <div className=" relative
  w-[280px] h-[280px]
  sm:w-[340px] sm:h-[340px]
  md:w-[380px] md:h-[380px]
  lg:w-[460px] lg:h-[460px]
  mx-autorelative w-[460px] h-[460px]">

    {/* 🔵🔶 BIG OUTER AURA (SLOW BREATHING) */}
    <motion.div
      animate={{
        y: [0, -26, 0],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute inset-[-40px] rounded-full blur-[160px] opacity-45"
      style={{
        background: isLight
          ? 'linear-gradient(135deg,#f97316,#fde047)'
          : 'linear-gradient(135deg,#001AF9,#4F6BFF)',
      }}
    />

    {/* ✨ INNER ENERGY AURA (COUNTER FLOAT) */}
    <motion.div
      animate={{
        y: [0, 18, 0],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute inset-[-10px] rounded-full blur-[110px] opacity-35"
      style={{
        background: isLight
          ? 'linear-gradient(135deg,#fb923c,#facc15)'
          : 'linear-gradient(135deg,#2563eb,#60a5fa)',
      }}
    />

    {/* 🌫️ SOFT AMBIENT GLOW (STATIC DEPTH) */}
    <div
      className="absolute inset-[20px] rounded-full blur-[90px] opacity-20"
      style={{
        background: isLight
          ? 'linear-gradient(135deg,#fde68a,#fb923c)'
          : 'linear-gradient(135deg,#1e40af,#3b82f6)',
      }}
    />

    {/* 🧑 CARTOON IMAGE – ALWAYS ON TOP */}
    <div className="relative z-10 w-full h-full flex items-center justify-center">
      <Image
        src={isLight ? '/orange.png' : '/blue.png'}
        alt="Mohammed Arhan"
        width={380}
        height={380}
        className="object-contain drop-shadow-2xl scale-110"
        priority
      />
    </div>

  </div>
</motion.div>


        </div>
      </div>
      
    </section>
  );
}

/* ===============================
   TYPEWRITER COMPONENT
=============================== */
function TypeText({ isLight }) {
  const [text] = useTypewriter({
    words: [
      'Full Stack Developer',
      'Content Creator',
      'Digital Designer',
    ],
    loop: true,
    typeSpeed: 55,
    deleteSpeed: 40,
    delaySpeed: 2000,
  });

  const styleMap = {
    'Full Stack Developer': 'type-fs',
    'Content Creator': 'type-cc',
    'Digital Designer': 'type-dd',
  };

 return (
  <span className={`typing-text ${styleMap[text]} inline-block whitespace-nowrap`}>
    {text}
    <Cursor cursorStyle="|" />
  </span>
);

}
