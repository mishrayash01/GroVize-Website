import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import ScrollReveal from '@/react-app/components/ScrollReveal';
import { Target, Truck, Lightbulb, Heart, Linkedin, Instagram, Globe } from 'lucide-react';
import founderImage from '../../founderprofile.jpg';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-rich-black mb-6">
              Our <span className="text-muted-gold">Mission</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-dark-grey max-w-3xl mx-auto">
              Digitizing Indian retail, one shopkeeper at a time
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <ScrollReveal>
          <div className="bg-light-cool-grey rounded-3xl p-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-rich-black mb-6">Our Story</h2>
            <div className="space-y-4 text-dark-grey leading-relaxed text-lg">
              <p>
                GroVize was born from a simple observation: millions of Indian shopkeepers still rely on pen and paper to manage their businesses. In an era where technology has transformed industries worldwide, our local retailers were being left behind.
              </p>
              <p>
                We saw hardworking shopkeepers struggling with inventory management, spending hours on manual billing, and losing track of important business metrics. We knew there had to be a better way.
              </p>
              <p>
                That's when we created GroVize - a mobile-first solution designed specifically for Indian retailers. Our mission is simple: empower every shopkeeper with the digital tools they need to compete in today's market, without requiring technical expertise or expensive infrastructure.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Founder Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <ScrollReveal>
          <div className="bg-light-cool-grey rounded-3xl p-12 border border-gray-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-full">
                  <img src={founderImage} alt="Yash Mishra" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-rich-black mb-2">Yash Mishra</h3>
                <p className="text-muted-gold font-semibold mb-4">Founder</p>
                <p className="text-dark-grey leading-relaxed mb-6">
                  Driven by a vision that sees beyond boundaries. Passionate about solving complex real-world problems with a broad strategic outlook for India's growth.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="https://www.linkedin.com/in/yash-mishra-b90782332/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 bg-gray-200 hover:bg-premium-gold/20 rounded-lg flex items-center justify-center text-dark-grey hover:text-muted-gold transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/mishrayash_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 bg-gray-200 hover:bg-premium-gold/20 rounded-lg flex items-center justify-center text-dark-grey hover:text-muted-gold transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Vision Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold text-rich-black mb-6">
                Empowering India's Retail Ecosystem <span className="text-muted-gold">Without Limits</span>
              </h2>
              <p className="text-xl text-dark-grey max-w-3xl mx-auto">
                Our goal is not just a number. We are on a journey to digitally transform the very fabric of Indian retail, creating infinite growth opportunities for every shopkeeper, from metro cities to the remotest villages.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: Target,
                title: 'Our Goal',
                description: 'Make digital business management accessible to every Indian retailer, regardless of their technical background',
              },
              {
                icon: Lightbulb,
                title: 'Our Innovation',
                description: 'Leverage AI and cloud technology to provide enterprise-grade tools at an affordable price point',
              },
              {
                icon: Heart,
                title: 'Our Commitment',
                description: 'Build lasting relationships with our users through exceptional support and continuous improvement',
              },
              {
                icon: Truck,
                title: 'The Future: End-to-End Logistics',
                description: 'We are building a supply chain revolution. Soon, GroVize will deploy a dedicated logistics fleet to handle deliveries between our users (shopkeepers) and their vendors, ensuring end-to-end business growth.',
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="bg-light-cool-grey rounded-2xl p-8 border border-gray-200 hover:border-premium-gold hover:scale-105 transition-all duration-500 group">
                  <div className={`w-16 h-16 bg-muted-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-rich-black mb-4">{item.title}</h3>
                  <p className="text-dark-grey leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Future Vision Section */}
      <div className="bg-[#1A0F0A] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-['Playfair_Display'] font-bold text-[#F5E6D3] text-center mb-16"
          >
            The Future
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1: Logistics */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#2D1810] p-8 rounded-2xl border border-[#5A4034] hover:border-[#4F9C8F] hover:shadow-[0_0_20px_rgba(79,156,143,0.2)] transition-all shadow-xl group"
            >
              <div className="w-14 h-14 bg-[#4F9C8F]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-8 h-8 text-[#4F9C8F]" />
              </div>
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#F5E6D3] mb-4">
                End-to-End Logistics
              </h3>
              <p className="text-[#C9B8A0] font-['Inter'] text-lg leading-relaxed">
                Seamless delivery boy deployment and automated route optimization for local merchants to scale beyond their street.
              </p>
            </motion.div>

            {/* Feature 2: Websites */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#2D1810] p-8 rounded-2xl border border-[#5A4034] hover:border-[#4F9C8F] hover:shadow-[0_0_20px_rgba(79,156,143,0.2)] transition-all shadow-xl group"
            >
              <div className="w-14 h-14 bg-[#4F9C8F]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-[#4F9C8F]" />
              </div>
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#F5E6D3] mb-4">
                Personalized 3D Storefronts
              </h3>
              <p className="text-[#C9B8A0] font-['Inter'] text-lg leading-relaxed">
                High-conversion, 3D-animated websites that sync in real-time with your GroVize inventory. Change a price on the app, and it updates on the web instantly.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
