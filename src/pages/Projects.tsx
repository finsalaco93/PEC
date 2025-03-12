
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionHeader from '@/components/ui/SectionHeader';

// Sample project data
const projects = [
  {
    id: 1,
    title: "Corporate Office Tower",
    category: "Commercial",
    description: "Complete electrical infrastructure design and installation for a 35-story office building, including power distribution, lighting, and smart building controls.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    year: "2023"
  },
  {
    id: 2,
    title: "Manufacturing Plant Automation",
    category: "Industrial",
    description: "Implementation of advanced automation systems for a manufacturing facility, improving efficiency and reducing energy consumption by 35%.",
    image: "https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    year: "2022"
  },
  {
    id: 3,
    title: "Healthcare Facility",
    category: "Institutional",
    description: "Design and installation of mission-critical electrical systems for a major hospital, including emergency power systems and dedicated medical equipment circuits.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    year: "2022"
  },
  {
    id: 4,
    title: "Data Center Power Infrastructure",
    category: "Technology",
    description: "Implementation of redundant power systems for a tier III data center, ensuring 99.999% uptime and efficient power management.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    year: "2021"
  },
  {
    id: 5,
    title: "Solar Integration Project",
    category: "Renewable Energy",
    description: "Installation of commercial-scale solar power systems with battery storage for a retail complex, reducing grid dependency by 40%.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    year: "2021"
  },
  {
    id: 6,
    title: "Hotel Renovation",
    category: "Hospitality",
    description: "Complete electrical system upgrade for a 250-room luxury hotel, including smart room controls, energy efficient lighting, and enhanced safety systems.",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    year: "2020"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Projects = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Explore our portfolio of successful commercial and industrial electrical projects that demonstrate our expertise and commitment to excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <SectionHeader
              title="Featured Projects"
              subtitle="Our Work Speaks For Itself"
              description="Browse through our diverse portfolio of successfully completed commercial and industrial electrical projects."
            />
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {projects.map((project) => (
                <motion.div 
                  key={project.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  variants={item}
                >
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="px-3 py-1 bg-electric-100 text-electric-600 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <span className="text-gray-500 text-sm">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <button className="text-electric-600 font-medium hover:text-electric-700 transition-colors">
                      View Details →
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <SectionHeader
              title="Client Testimonials"
              subtitle="What Our Clients Say"
              description="Our clients' satisfaction is the true measure of our success. Here's what they have to say about working with VoltEdge."
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "VoltEdge provided exceptional service throughout our office tower project. Their attention to detail and innovative solutions exceeded our expectations.",
                  author: "Michael Thornton",
                  position: "Facilities Director, Skyline Properties"
                },
                {
                  quote: "The team at VoltEdge demonstrated remarkable expertise in upgrading our manufacturing plant's electrical systems. The automation solutions they implemented have significantly improved our operational efficiency.",
                  author: "Jennifer Wright",
                  position: "Operations Manager, Advanced Manufacturing Inc."
                },
                {
                  quote: "Working with VoltEdge on our hospital's critical power systems was a pleasure. Their understanding of healthcare facility requirements and commitment to safety made them the perfect partner.",
                  author: "Dr. Robert Chen",
                  position: "Chief of Operations, Central Medical Center"
                },
                {
                  quote: "The solar integration project completed by VoltEdge has dramatically reduced our energy costs. Their team's expertise in renewable energy solutions was evident throughout the entire process.",
                  author: "Sarah Johnson",
                  position: "Sustainability Director, Metro Retail Group"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <div className="text-electric-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-electric-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Contact our team today to discuss how we can bring your electrical project to life with our expertise and dedication to quality.
            </p>
            <a 
              href="/#contact" 
              className="inline-block bg-white text-electric-600 hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
