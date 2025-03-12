
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        // Parallax effect on hero background
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.2}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1594818379496-da1e345388c0?q=80&w=1974&auto=format&fit=crop)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-800/90 to-dark-700/75 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl stagger-animate">
          <div className="inline-block bg-electric-600/90 backdrop-blur-md text-white px-4 py-1 rounded-md mb-6 font-medium">
            Commercial Electrical Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Powering Business Success with Electrical Excellence
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            VoltEdge delivers cutting-edge electrical solutions for commercial and industrial projects. From installation to maintenance, we keep your business running at peak efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <AnimatedButton
              variant="primary"
              size="lg"
              href="/services"
            >
              Explore Our Services
            </AnimatedButton>
            <AnimatedButton
              variant="outline"
              size="lg"
              href="/#contact"
              className="bg-transparent border-white text-white hover:bg-white/10"
              icon={<ArrowRight />}
            >
              Get A Quote
            </AnimatedButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
