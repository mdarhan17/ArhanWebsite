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
    }, 45);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.bg} />

      <div className={styles.imageWrap}>
        {/* BLACK SILHOUETTE */}
        <Image
          src="/loader.png"
          alt="Shadow"
          fill
          priority
          className={styles.shadowImg}
        />

        {/* COLOR IMAGE (REVEAL ONLY INSIDE SILHOUETTE) */}
        <Image
          src="/loader.png"
          alt="Reveal"
          fill
          priority
          className={styles.realImg}
          style={{ '--fill': `${progress}%` }}
        />
      </div>

      <div className={styles.percent}>{progress}%</div>

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
