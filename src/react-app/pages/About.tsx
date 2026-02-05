import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import ScrollReveal from '@/react-app/components/ScrollReveal';
import { Target, Truck, Lightbulb, Heart, Linkedin, Instagram } from 'lucide-react';
import founderImage from '../../founderprofile.jpg';


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

      <Footer />
    </div>
  );
}