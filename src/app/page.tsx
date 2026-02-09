import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Experience';
import Services from '@/sections/Services';
import Contact from '@/sections/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import CursorGlow from '@/components/CursorGlow';

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
