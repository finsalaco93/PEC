
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  ArrowRight 
} from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-800 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-electric-500 text-white p-2 rounded-md transition-transform group-hover:scale-105">
                <Zap size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight">VoltEdge</span>
            </Link>
            <p className="text-gray-300 max-w-xs">
              Delivering cutting-edge electrical solutions for commercial 
              projects with precision and reliability since 2005.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-electric-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-electric-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-electric-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-electric-300">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/company" className="text-gray-300 hover:text-electric-400 inline-flex items-center transition-colors">
                  <ArrowRight size={16} className="mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-electric-400 inline-flex items-center transition-colors">
                  <ArrowRight size={16} className="mr-2" /> Our Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-electric-400 inline-flex items-center transition-colors">
                  <ArrowRight size={16} className="mr-2" /> Recent Projects
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-electric-400 inline-flex items-center transition-colors">
                  <ArrowRight size={16} className="mr-2" /> Meet Our Team
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-gray-300 hover:text-electric-400 inline-flex items-center transition-colors">
                  <ArrowRight size={16} className="mr-2" /> Career Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-electric-300">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services#commercial" className="text-gray-300 hover:text-electric-400 inline-flex items-center transition-colors">
                  <ArrowRight size={16} className="mr-2" /> Commercial Wiring
                </Link>
              </li>
              <li>
                <Link to="/services#industrial" className="text-gray-300 hover:text-electric-400 inline-flex items-center transition-colors">
                  <ArrowRight size={16} className="mr-2" /> Industrial Systems
                </Link>
              </li>
              <li>
                <Link to="/services#maintenance" className="text-gray-300 hover:text-electric-400 inline-flex items-center transition-colors">
                  <ArrowRight size={16} className="mr-2" /> Maintenance & Repair
                </Link>
              </li>
              <li>
                <Link to="/services#emergency" className="text-gray-300 hover:text-electric-400 inline-flex items-center transition-colors">
                  <ArrowRight size={16} className="mr-2" /> Emergency Services
                </Link>
              </li>
              <li>
                <Link to="/services#renewable" className="text-gray-300 hover:text-electric-400 inline-flex items-center transition-colors">
                  <ArrowRight size={16} className="mr-2" /> Renewable Energy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-electric-300">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-electric-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Electric Avenue,<br />
                  Suite 200<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-electric-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-electric-400 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-electric-400 flex-shrink-0" />
                <a href="mailto:info@voltedge.com" className="text-gray-300 hover:text-electric-400 transition-colors">
                  info@voltedge.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-dark-600 my-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {year} VoltEdge Electrical. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-electric-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-electric-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-electric-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
