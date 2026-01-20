'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Loader.module.css';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let value = 0;

    const timer = setInterval(() => {
      value += 1;
      setProgress(value);

      if (value >= 100) {
        clearInterval(timer);
        setTimeout(() => setDone(true), 600);
      }
    }, 45); // ~4.5s smooth cinematic

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* 🔵 BACKGROUND */}
      <div className={styles.bg} />

      {/* 🧍 IMAGE CONTAINER */}
      <div className={styles.imageWrap}>
        
        {/* 🖤 BLACK SHADOW (ALWAYS FULL BODY) */}
        <Image
          src="/loader.png"
          alt="Loader Shadow"
          fill
          priority
          className={styles.shadowImg}
        />

        {/* ✨ REAL IMAGE – PURE BOTTOM → TOP REVEAL */}
        <Image
          src="/loader.png"
          alt="Loader Reveal"
          fill
          priority
          className={styles.realImg}
          style={{
            '--fill': `${progress}%`,
          }}
        />

      </div>

      {/* 🔢 PERCENT */}
      <div className={styles.percent}>{progress}%</div>

      {/* ✍️ TYPEWRITER TEXT */}
      {done && (
        <p className={styles.text}>
          {'Hello Guys, Welcome To My Portfolio Website'
            .split('')
            .map((char, i) => (
              <span
                key={i}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
        </p>
      )}
    </div>
  );
}
