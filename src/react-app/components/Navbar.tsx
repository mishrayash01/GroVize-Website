import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
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
    { name: 'Features', path: '/features' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Support', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img 
              src={logo} 
              alt="GroVize Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-extrabold text-rich-black">GroVize</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
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
            <a
              href="https://drive.google.com/uc?export=download&id=168xhn-_shuHG4Vzr6aeWgWX522g3jvBg"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-muted-gold text-black rounded-lg font-semibold flex items-center space-x-2 hover:scale-105 hover:bg-darker-muted-gold transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Download App</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-rich-black hover:text-muted-gold transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl rounded-b-2xl shadow-2xl border-t border-gray-200">
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
              <a
                href="https://drive.google.com/uc?export=download&id=168xhn-_shuHG4Vzr6aeWgWX522g3jvBg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 bg-muted-gold text-black rounded-lg font-semibold flex items-center justify-center space-x-2 hover:scale-105 hover:bg-darker-muted-gold transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Download App</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
