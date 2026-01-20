'use client';

import { useEffect, useState } from 'react';
import Loader from './loader/Loader';

export default function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8200); // 🔥 Loader duration (5.2 sec)

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return children;
}
