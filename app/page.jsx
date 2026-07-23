import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import ContentCreation from '@/components/ContentCreation';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Experience />
      <ContentCreation />
      <Contact />
    </main>
  );
}