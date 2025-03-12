
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import AnimatedButton from '../ui/AnimatedButton';
import { Check, Award, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader 
            eyebrow="About VoltEdge"
            title="Powering Businesses Since 2005"
            description="VoltEdge has grown from a small team of licensed electricians to one of the most trusted commercial electrical contractors in the region."
          />
          
          <p className="mb-6 text-gray-600">
            With a focus on innovation, safety, and customer satisfaction, we deliver superior electrical solutions for businesses across various industries. Our team of certified professionals is dedicated to quality workmanship and exceptional service.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="p-2 bg-electric-100 rounded-full text-electric-600 mr-4">
                <Check size={20} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Licensed & Insured</h4>
                <p className="text-sm text-gray-600">Fully certified professionals you can trust</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-2 bg-electric-100 rounded-full text-electric-600 mr-4">
                <Award size={20} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Industry Certified</h4>
                <p className="text-sm text-gray-600">Meeting highest industry standards</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-2 bg-electric-100 rounded-full text-electric-600 mr-4">
                <Lightbulb size={20} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Innovation Focused</h4>
                <p className="text-sm text-gray-600">Embracing the latest technologies</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="p-2 bg-electric-100 rounded-full text-electric-600 mr-4">
                <Check size={20} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Satisfaction Guaranteed</h4>
                <p className="text-sm text-gray-600">Customer satisfaction is our priority</p>
              </div>
            </motion.div>
          </div>
          
          <AnimatedButton href="/company">
            Learn More About Us
          </AnimatedButton>
        </div>
        
        <div className="relative">
          <motion.div 
            className="rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Electrical workers in commercial setting" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-3">
              <div className="p-2 bg-electric-600 rounded-full text-white">
                <Award size={20} />
              </div>
              <h4 className="font-bold text-lg">15+ Years</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Delivering excellence in commercial electrical services for over 15 years
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
