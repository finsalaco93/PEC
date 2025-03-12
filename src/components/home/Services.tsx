
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Factory, 
  Wrench, 
  Zap, 
  Sun, 
  Shield 
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import AnimatedButton from '../ui/AnimatedButton';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`p-4 rounded-full bg-electric-50 text-electric-600 inline-block mb-4 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link 
        to={`/services#${title.toLowerCase().replace(/\s+/g, '-')}`} 
        className="inline-flex items-center text-electric-600 font-medium hover:text-electric-700 transition-colors group"
      >
        Learn More 
        <svg 
          className={`ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
          width="20" 
          height="20" 
          viewBox="0 0 20 20" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M4.16666 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Building2 size={28} />,
      title: 'Commercial Wiring',
      description: 'Complete commercial electrical installations for new construction and renovation projects.',
    },
    {
      icon: <Factory size={28} />,
      title: 'Industrial Systems',
      description: 'Specialized electrical solutions for manufacturing and industrial facilities.',
    },
    {
      icon: <Wrench size={28} />,
      title: 'Maintenance & Repair',
      description: 'Regular maintenance and swift repairs to minimize downtime and maximize efficiency.',
    },
    {
      icon: <Zap size={28} />,
      title: 'Emergency Services',
      description: '24/7 emergency response for critical electrical issues requiring immediate attention.',
    },
    {
      icon: <Sun size={28} />,
      title: 'Renewable Energy',
      description: 'Solar panel installation and renewable energy solutions for sustainable businesses.',
    },
    {
      icon: <Shield size={28} />,
      title: 'Safety Compliance',
      description: 'Thorough electrical safety inspections and code compliance assessments.',
    },
  ];

  return (
    <section className="section bg-gray-50">
      <SectionHeader 
        eyebrow="Our Services"
        title="Comprehensive Electrical Solutions"
        description="From basic electrical installations to complex industrial systems, our certified technicians deliver exceptional quality and reliability for businesses of all sizes."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <AnimatedButton variant="outline" href="/services">
          View All Services
        </AnimatedButton>
      </div>
    </section>
  );
};

export default Services;
