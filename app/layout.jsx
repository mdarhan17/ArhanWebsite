import './globals.css';
import LoadingProvider from '@/components/LoadingProvider';

export const metadata = {
  title: 'Mohammed Arhan | Full Stack & AI/ML Engineer',
  description:
    'Mohammed Arhan – Full Stack & AI/ML Engineer. Portfolio showcasing modern web apps, machine learning projects, and creative work.',

  openGraph: {
    title: 'Mohammed Arhan | Full Stack & AI/ML Engineer',
    description:
      'Explore my portfolio featuring full stack development, AI/ML projects, and creative digital work.',
    type: 'website',
    url: 'https://mohammedarhan.vercel.app', // 🔁 apna domain
    images: [
      {
        url: '/hero.png', // ✅ YOUR HERO / PORTFOLIO IMAGE
        width: 1200,
        height: 630,
        alt: 'Mohammed Arhan Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Arhan | Full Stack & AI/ML Engineer',
    description:
      'Portfolio of Mohammed Arhan – Full Stack, AI/ML Engineer & Content Creator.',
    images: ['/og-image.png'], // ✅ SAME IMAGE
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* 🔥 GLOBAL LOADER */}
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
