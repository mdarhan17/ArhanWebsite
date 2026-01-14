'use client';

import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);

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

      const isLight = document.documentElement.classList.contains('light');

      ctx.fillStyle = isLight
        ? 'rgba(249,115,22,0.45)' // ✅ white theme → orange
        : 'rgba(0,26,249,0.45)';  // 🔒 dark theme → blue (#001AF9)

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
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
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
        <div className="grid lg:grid-cols-2 gap-14 items-center">

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

              {/* 🔥 NAME – THEME SAFE */}
              <h1
                className="text-5xl md:text-7xl font-extrabold leading-tight"
                style={{
                  background: document.documentElement.classList.contains('light')
                    ? 'linear-gradient(135deg,#f97316,#facc15)' // white theme
                    : 'linear-gradient(135deg,#001AF9,#4F6BFF)', // dark theme
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: document.documentElement.classList.contains('light')
                    ? '0 0 18px rgba(249,115,22,0.45)'
                    : '0 0 22px rgba(0,26,249,0.55)',
                }}
              >
                Mohammed Arhan
              </h1>
            </div>

            <div className="space-y-1">
              <h3
                className="text-2xl md:text-3xl font-semibold"
                style={{ color: 'var(--hero-text-primary)' }}
              >
                Full Stack Developer
              </h3>
              <h3
                className="text-2xl md:text-3xl font-semibold"
                style={{ color: 'var(--hero-text-primary)' }}
              >
                Content Creator
              </h3>
            </div>

            <p
              className="text-lg max-w-xl leading-relaxed"
              style={{ color: 'var(--hero-text-secondary)' }}
            >
              I build modern websites, scalable web applications and premium
              digital experiences focused on performance, design and clarity.
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
                boxShadow: document.documentElement.classList.contains('light')
                  ? '0 0 28px rgba(249,115,22,0.45)'
                  : '0 0 32px rgba(0,26,249,0.45)',
              }}
            >
              <HiDownload className="text-xl" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* RIGHT – IMAGE GLOW */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-[380px] h-[380px]">
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute inset-0 rounded-full blur-[110px] opacity-35"
                style={{
                  background: document.documentElement.classList.contains('light')
                    ? 'linear-gradient(135deg,#f97316,#facc15)'
                    : 'linear-gradient(135deg,#001AF9,#4F6BFF)',
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
