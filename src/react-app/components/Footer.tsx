import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import brandLogo from '../../logo2.png';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];



  return (
    <footer className="bg-[#0a192f] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img src={brandLogo} alt="GroVize Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Indian retailers with smart billing and inventory management solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex items-center space-x-2 mb-4 text-gray-400 text-sm">
              <Mail className="w-4 h-4" />
              <a href="mailto:helpgrovize@gmail.com" className="hover:text-green-400 transition-colors duration-300">
                helpgrovize@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2026 GroVize. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
