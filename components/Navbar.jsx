'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
    }

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? 'py-3' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="glass-nav rounded-[30px] px-7 py-4">

          {/* BLUR & DARK LAYER */}
          <div className="nav-dark-layer" />

          <div className="relative z-10 flex items-center justify-between">

            {/* LOGO */}
            <motion.div
              whileHover={{ scale: 1.06 }}
              className="text-2xl font-extrabold tracking-wide gradient-text cursor-pointer"
            >
              MA
            </motion.div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${
                    item.name === 'Home' ? 'nav-link-active' : ''
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-4">

              {/* THEME TOGGLE */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="theme-toggle"
              >
                <span
                  className={`theme-thumb ${
                    theme === 'light' ? 'translate-x-6' : ''
                  }`}
                >
                  {theme === 'dark' ? <HiMoon /> : <HiSun />}
                </span>
              </motion.button>

              {/* MOBILE MENU */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg glass"
              >
                {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
              </motion.button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="md:hidden mt-5 pt-5 border-t border-white/10"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="nav-link"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </motion.nav>
  );
}
