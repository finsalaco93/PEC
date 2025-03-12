
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import AnimatedButton from '../ui/AnimatedButton';

const ContactCTA = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would normally handle form submission
    // For this demo, we'll just simulate a successful submission
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };
  
  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-electric-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-600/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3 z-0"></div>
      
      <div className="relative z-10">
        <SectionHeader 
          eyebrow="Contact Us"
          title="Ready to Power Your Business?"
          description="Get in touch with our team for a consultation and quote tailored to your commercial electrical needs."
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <div className="bg-white rounded-lg p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">How We Can Help</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-electric-100 rounded-full text-electric-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-gray-600">(123) 456-7890</p>
                    <p className="text-gray-500 text-sm mt-1">Mon-Fri: 8am - 5pm</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-electric-100 rounded-full text-electric-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">info@voltedge.com</p>
                    <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-electric-100 rounded-full text-electric-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Visit Us</h4>
                    <p className="text-gray-600">
                      123 Electric Avenue,<br />
                      Suite 200<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-semibold mb-4">Emergency Service</h4>
                <p className="text-gray-600 mb-4">
                  For after-hours electrical emergencies, call our 24/7 emergency line:
                </p>
                <div className="text-electric-600 font-bold text-xl">
                  (800) 555-1234
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <motion.div 
            ref={formRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="text-electric-600 mb-4">
                  <CheckCircle size={60} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your message has been sent. We'll get back to you as soon as possible.
                </p>
                <AnimatedButton
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                >
                  Send Another Message
                </AnimatedButton>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-electric-500 transition-colors"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-electric-500 transition-colors"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-electric-500 transition-colors"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                    <select
                      id="service"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-electric-500 transition-colors"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="commercial">Commercial Wiring</option>
                      <option value="industrial">Industrial Systems</option>
                      <option value="maintenance">Maintenance & Repair</option>
                      <option value="emergency">Emergency Services</option>
                      <option value="renewable">Renewable Energy</option>
                      <option value="safety">Safety Compliance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-electric-500 transition-colors"
                      placeholder="Tell us about your project or needs..."
                      required
                    ></textarea>
                  </div>
                  
                  <AnimatedButton 
                    type="submit" 
                    variant="primary"
                    size="lg"
                    fullWidth
                    className="justify-center"
                    icon={<Send size={18} />}
                  >
                    Send Message
                  </AnimatedButton>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
