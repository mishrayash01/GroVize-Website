import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Instagram, Globe } from 'lucide-react';
import logo from '../../logo1.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solution', path: '/solution' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Support', path: '/contact' },
  ];

  const apkLink = "https://drive.google.com/uc?export=download&id=154jd6ciBpYSsv8XYKxQdI1bc7cIs0Z5x";
  const webAppLink = "https://gro-vize-frontend.vercel.app";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="GroVize Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-extrabold text-rich-black">GroVize</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-muted-gold ${
                  location.pathname === link.path ? 'text-muted-gold' : 'text-dark-grey'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/grovize.in/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rich-black hover:text-muted-gold transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <div className="flex items-center gap-3">
                <a
                  href={webAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border-2 border-muted-gold text-rich-black rounded-lg font-bold text-sm flex items-center space-x-2 hover:bg-muted-gold/10 transition-all duration-300"
                >
                  <Globe className="w-4 h-4" />
                  <span>Launch Web App</span>
                </a>

                <a
                  href={apkLink}
                  download="GroVize.apk"
                  className="px-4 py-2 bg-muted-gold text-rich-black rounded-lg font-bold text-sm flex items-center space-x-2 hover:scale-105 hover:bg-darker-muted-gold transition-all duration-300 shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download App</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-rich-black hover:text-muted-gold transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl rounded-b-2xl shadow-2xl border-t border-gray-200">
            <div className="px-4 pt-4 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-muted-gold/20 text-muted-gold'
                      : 'text-dark-grey hover:bg-gray-100 hover:text-rich-black'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-medium text-slate-500">Follow us</span>
                <a
                  href="https://www.instagram.com/grovize.in/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rich-black hover:text-muted-gold transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>

              <div className="flex flex-col gap-3 px-4">
                <a
                  href={webAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 border-2 border-muted-gold text-rich-black rounded-lg font-bold flex items-center justify-center space-x-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>Launch Web App</span>
                </a>
                <a
                  href={apkLink}
                  download="GroVize.apk"
                  className="w-full px-6 py-3 bg-muted-gold text-rich-black rounded-lg font-bold flex items-center justify-center space-x-2 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download App</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
