
import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ContactCTA from '@/components/home/ContactCTA';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedProjects />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
