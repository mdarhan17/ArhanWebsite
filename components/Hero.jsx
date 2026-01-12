'use client';

import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';


export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = !document.documentElement.classList.contains('light');
      ctx.fillStyle = isDark ? 'rgba(6, 182, 212, 0.5)' : 'rgba(249, 115, 22, 0.5)';

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-30"
      />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'var(--accent-primary)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'var(--accent-secondary)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-xl md:text-2xl font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                Hi, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
                Mohammed Arhan
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-2"
            >
              <h3 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                Full Stack Developer
              </h3>
              <h3 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                Content Creator
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: 'var(--text-secondary)' }}
            >
              Crafting elegant solutions through code and creating engaging content that inspires and educates.
              Passionate about building seamless user experiences and sharing knowledge with the community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 glow-hover"
                style={{ color: 'var(--text-primary)' }}
              >
                <HiDownload className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>
          </motion.div>

        <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="relative flex items-center justify-center"
>
  <div className="relative w-full max-w-lg aspect-square">

    {/* 🔥 GLOW BACKDROP */}
    <motion.div
      animate={{
        scale: [1, 1.08, 1],
        rotate: [0, 6, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute inset-0 rounded-full blur-3xl opacity-35"
      style={{ background: 'var(--gradient-accent)' }}
    />

    {/* 🔥 FLOATING Spline */}
    <motion.div
      animate={{ y: [0, -18, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="relative z-10 w-full h-full flex items-center justify-center"
    >
      <div className="relative w-80 h-80 glass rounded-3xl overflow-hidden glow-hover">

        <Spline
          scene="https://prod.spline.design/JDdt49usoxHMM4X0/scene.splinecode"
          className="w-full h-full scale-[1.15]"
        />

      </div>
    </motion.div>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
}
