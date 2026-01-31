import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Get in Touch with GroVize
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are here to help your business grow. Reach out for support, feedback, or partnership.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <ScrollReveal>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <a href="mailto:helpgrovize@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                    helpgrovize@gmail.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Business Hours</h3>
                  <p className="text-gray-400">Mon-Sat: 9:00 AM - 6:00 PM IST.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <Footer />
    </div>
  );
}