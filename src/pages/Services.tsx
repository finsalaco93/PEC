
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Cpu, Wrench, PlugZap, Factory } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionHeader from '@/components/ui/SectionHeader';

const servicesList = [
  {
    icon: <ShieldCheck size={40} className="text-electric-500" />,
    title: "Electrical Safety Inspections",
    description: "Comprehensive safety assessments to identify potential hazards and ensure code compliance in your commercial facilities."
  },
  {
    icon: <Cpu size={40} className="text-electric-500" />,
    title: "Building Management Systems",
    description: "Advanced automated control systems for heating, ventilation, lighting, power systems, and security configurations."
  },
  {
    icon: <Wrench size={40} className="text-electric-500" />,
    title: "Maintenance & Repairs",
    description: "Regular preventative maintenance and emergency repair services to keep your electrical systems running efficiently."
  },
  {
    icon: <Zap size={40} className="text-electric-500" />,
    title: "Power Distribution",
    description: "Design and installation of reliable power distribution systems tailored to your commercial or industrial facility needs."
  },
  {
    icon: <PlugZap size={40} className="text-electric-500" />,
    title: "Energy Efficiency Solutions",
    description: "Energy audits and implementation of efficiency measures to reduce electrical consumption and operational costs."
  },
  {
    icon: <Factory size={40} className="text-electric-500" />,
    title: "Industrial Automation",
    description: "Integration of advanced control systems to automate industrial processes and improve operational efficiency."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-dark-600 text-white">
          <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Electrical Services</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Professional commercial and industrial electrical solutions with a commitment to safety, quality, and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <SectionHeader
              title="Comprehensive Electrical Services"
              subtitle="Expert Solutions for Commercial & Industrial Projects"
              description="Our team of certified electricians delivers a wide range of services designed to meet the unique requirements of modern businesses."
            />

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {servicesList.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  variants={item}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <SectionHeader
              title="Our Working Process"
              subtitle="How We Deliver Excellence"
              description="We follow a structured approach to ensure high-quality results for every electrical project."
            />

            <div className="mt-12 max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-1 bg-electric-200"></div>
                
                {/* Timeline Items */}
                <div className="space-y-12">
                  {[
                    { phase: "01", title: "Initial Consultation", description: "We begin with a thorough assessment of your electrical needs and facility requirements." },
                    { phase: "02", title: "Custom Design", description: "Our experts develop a tailored electrical solution designed specifically for your project." },
                    { phase: "03", title: "Professional Installation", description: "Our certified electricians execute the installation with precision and attention to detail." },
                    { phase: "04", title: "Quality Assurance", description: "Rigorous testing and inspection to ensure everything meets our high standards." },
                    { phase: "05", title: "Client Handover", description: "We provide complete documentation and training on your new electrical systems." }
                  ].map((step, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className="z-10 mb-8 md:mb-0 flex-1 md:p-6">
                        <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                          <div className="inline-block px-3 py-1 bg-electric-100 text-electric-600 rounded-full text-sm font-medium mb-3">
                            Phase {step.phase}
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                      <div className="z-10 w-8 h-8 bg-electric-500 rounded-full flex items-center justify-center border-4 border-white"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-electric-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Contact our team today to discuss your electrical needs and how we can help with your next commercial or industrial project.
            </p>
            <a 
              href="/#contact" 
              className="inline-block bg-white text-electric-600 hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
