import { Link } from 'react-router-dom';
import brandLogo from '../../logo2.png';
import { Instagram } from 'lucide-react';

export default function Footer() {
  const productLinks = [
    { name: 'Solution', path: '/solution' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Desktop Login', path: '/desktop-login' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/desktop-login' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/desktop-login' },
    { name: 'Terms of Service', path: '/desktop-login' },
  ];

  return (
    <footer className="bg-slate-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img src={brandLogo} alt="GroVize Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-rich-black ml-2">GroVize</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Empowering Indian retailers with smart billing and inventory management solutions.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-base text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Socials</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/grovize.in/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-muted-gold transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-base text-gray-400">
            © 2026 GroVize | Made with ❤️ in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
