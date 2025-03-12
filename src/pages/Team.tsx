
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionHeader from '@/components/ui/SectionHeader';

// Sample team data
const teamMembers = [
  {
    id: 1,
    name: "Robert Johnson",
    position: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    bio: "Robert has over 25 years of experience in the electrical industry and leads our company with a focus on innovation and excellence."
  },
  {
    id: 2,
    name: "Sarah Thompson",
    position: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    bio: "With a background in both electrical engineering and business management, Sarah ensures our operations run smoothly and efficiently."
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Technical Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    bio: "Michael's expertise in advanced electrical systems and smart building technology drives our innovative solutions and technical excellence."
  },
  {
    id: 4,
    name: "Jessica Rodriguez",
    position: "Project Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    bio: "Jessica excels at managing complex electrical projects, ensuring they're completed on time, within budget, and to the highest standards."
  },
  {
    id: 5,
    name: "David Martinez",
    position: "Lead Electrical Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    bio: "With a master's degree in electrical engineering and 15 years of field experience, David leads our engineering team with precision and insight."
  },
  {
    id: 6,
    name: "Emily Wilson",
    position: "Business Development Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    bio: "Emily builds and maintains our client relationships, identifying new opportunities and ensuring we continue to meet our clients' evolving needs."
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

const Team = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                The experienced professionals behind VoltEdge's success, bringing expertise and dedication to every electrical project.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <SectionHeader
              title="Our Leadership Team"
              subtitle="The Experts Behind Our Success"
              description="Meet the dedicated professionals who lead VoltEdge with expertise, innovation, and a commitment to excellence."
            />
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {teamMembers.map((member) => (
                <motion.div 
                  key={member.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
                  variants={item}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-electric-600 mb-4">{member.position}</p>
                    <p className="text-gray-600 mb-5">{member.bio}</p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-500 hover:text-electric-600 transition-colors">
                        <Linkedin size={20} />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-electric-600 transition-colors">
                        <Twitter size={20} />
                      </a>
                      <a href="#" className="text-gray-500 hover:text-electric-600 transition-colors">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <SectionHeader
              title="Our Core Values"
              subtitle="What Drives Us Every Day"
              description="These principles guide our team and define how we work together to deliver exceptional electrical services."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                {
                  title: "Excellence",
                  description: "We strive for excellence in every project, delivering solutions that exceed expectations and stand the test of time."
                },
                {
                  title: "Integrity",
                  description: "We operate with honesty and transparency, building trust through ethical business practices and keeping our promises."
                },
                {
                  title: "Innovation",
                  description: "We embrace new technologies and creative approaches to provide cutting-edge electrical solutions for our clients."
                },
                {
                  title: "Safety",
                  description: "We prioritize safety in every aspect of our work, protecting our team, clients, and the public through rigorous standards."
                }
              ].map((value, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg border-t-4 border-electric-500">
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-16 bg-electric-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              We're always looking for talented, passionate individuals to join VoltEdge. Check out our current openings and become part of our success story.
            </p>
            <a 
              href="/career" 
              className="inline-block bg-white text-electric-600 hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition-all duration-300"
            >
              View Career Opportunities
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
