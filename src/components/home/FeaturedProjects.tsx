
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import AnimatedButton from '../ui/AnimatedButton';

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  index: number;
}

const ProjectCard = ({ image, category, title, description, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div 
      ref={cardRef}
      className="group relative bg-white rounded-lg overflow-hidden shadow-lg h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute top-4 left-4">
        <span className="bg-electric-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
          {category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-electric-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <a 
          href="/projects" 
          className="inline-flex items-center text-electric-600 font-medium hover:text-electric-700 transition-colors"
        >
          View Project Details
          <svg 
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.16666 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" 
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const FeaturedProjects = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Office Building",
      title: "Oceanview Tower",
      description: "Complete electrical system installation for a new 20-story office building, including energy-efficient lighting and smart control systems."
    },
    {
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Retail",
      title: "Meridian Shopping Center",
      description: "Electrical infrastructure upgrade and maintenance for a 150,000 sq ft shopping mall, enhancing safety and reducing energy consumption."
    },
    {
      image: "https://images.unsplash.com/photo-1507097489474-c9212a8f8597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Healthcare",
      title: "Central Medical Center",
      description: "Critical power systems design and installation for a state-of-the-art hospital, including backup generators and UPS systems."
    },
  ];

  return (
    <section className="section bg-gray-50">
      <SectionHeader 
        eyebrow="Featured Work"
        title="Recent Projects"
        description="Explore some of our recent commercial electrical projects that showcase our expertise, precision, and innovation."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            image={project.image}
            category={project.category}
            title={project.title}
            description={project.description}
            index={index}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <AnimatedButton variant="outline" href="/projects">
          View All Projects
        </AnimatedButton>
      </div>
    </section>
  );
};

export default FeaturedProjects;
