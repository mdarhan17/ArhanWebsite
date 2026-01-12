import './globals.css';

export const metadata = {
  title: 'Mohammed Arhan - Full Stack Developer & Content Creator',
  description: 'Portfolio of Mohammed Arhan - Full Stack Developer and Content Creator specializing in modern web development',
  openGraph: {
    title: 'Mohammed Arhan - Full Stack Developer & Content Creator',
    description: 'Portfolio showcasing web development projects and content creation',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Arhan - Full Stack Developer & Content Creator',
    description: 'Portfolio showcasing web development projects and content creation',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
