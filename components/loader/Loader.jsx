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
    }, 45); // ~4.5 sec

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* BACKGROUND */}
      <div className={styles.bg} />

      {/* IMAGE HOLDER */}
      <div className={styles.imageWrap}>
        
        {/* BLACK SHADOW BASE (FULL BODY ALWAYS PRESENT) */}
        <Image
          src="/loader.png"
          alt="shadow"
          fill
          priority
          className={styles.shadowImg}
        />

        {/* REAL IMAGE REVEAL (BOTTOM → TOP) */}
        <div
          className={styles.reveal}
          style={{
            clipPath: `inset(${100 - progress}% 0 0 0)`
          }}
        >
          <Image
            src="/loader.png"
            alt="reveal"
            fill
            priority
            className={styles.realImg}
          />
        </div>

      </div>

      {/* PERCENT */}
      <div className={styles.percent}>{progress}%</div>

      {/* TYPEWRITER TEXT */}
      {done && (
        <p className={styles.text}>
          {'Hello Guys, Welcome To My Portfolio Website'
            .split('')
            .map((char, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
        </p>
      )}
    </div>
  );
}
