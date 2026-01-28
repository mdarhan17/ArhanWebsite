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
    url: 'https://mohammedarhan.vercel.app',

    images: [
      {
        url: 'https://mohammedarhan.vercel.app/hero.png', // ✅ FIXED
        width: 1200,
        height: 630,
        alt: 'Mohammed Arhan Portfolio Hero',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Arhan | Full Stack & AI/ML Engineer',
    description:
      'Portfolio of Mohammed Arhan – Full Stack & AI/ML Engineer.',
    images: ['https://mohammedarhan.vercel.app/hero.png'], // ✅ FIXED
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}
  