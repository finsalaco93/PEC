
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Company', path: '/company' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Career', path: '/career' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="bg-electric-600 text-white p-2 rounded-md transition-transform group-hover:scale-105">
            <Zap size={24} className="transition-all" />
          </div>
          <span className="font-bold text-xl tracking-tight">VoltEdge</span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`transition-colors duration-200 font-medium relative pb-1 ${
                isActive(link.path) 
                  ? 'text-electric-600' 
                  : 'text-dark-500 hover:text-electric-600'
              }`}
            >
              {link.name}
              <span 
                className={`absolute bottom-0 left-0 h-0.5 bg-electric-500 transition-all duration-300 ${
                  isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            to="/#contact"
            className="bg-electric-600 hover:bg-electric-700 text-white px-5 py-2.5 rounded-md transition-all duration-300 ease-in-out hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-dark-500 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-electric-600 text-white p-2 rounded-md">
                <Zap size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight">VoltEdge</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-dark-500 p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`border-b border-gray-100 pb-2 ${
                  isActive(link.path) ? 'text-electric-600 font-medium' : 'text-dark-500'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="bg-electric-600 text-white py-3 mt-4 rounded-md text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
