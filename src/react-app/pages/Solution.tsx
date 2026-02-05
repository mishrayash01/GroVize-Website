import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import ScrollReveal from '@/react-app/components/ScrollReveal';
import { Zap, Package, TrendingUp, Bell } from 'lucide-react';
import mockup1 from '@/grovize-mockup-1.png';
import mockup2 from '@/grovize-mockup-2.png';
import mockup3 from '@/grovize-mockup-3.png';
import mockup4 from '@/grovize-mockup-4.png';



export default function Solution() {
  const features = [
    {
      title: '3-Click Ultra-Fast Billing',
      description: 'Generate professional invoices instantly. No typing needed—just scan or select. Reduces lines at your counter.',
      icon: Zap,
      color: 'from-green-400 to-green-600',
      direction: 'left',
    },
    {
      title: 'Smart Low Stock Alerts',
      description: 'Never say "No" to a customer. GroVize alerts you before your best-selling items go out of stock.',
      icon: Bell,
      color: 'from-blue-400 to-blue-600',
      direction: 'right',
    },
    {
      title: 'AI Inventory Management',
      description: 'Our AI learns your sales patterns to predict demand. It\'s like having a smart manager in your pocket.',
      icon: Package,
      color: 'from-pink-400 to-pink-600',
      direction: 'left',
    },
    {
      title: 'Business Sales Analytics',
      description: 'Visual reports of your daily, weekly, and monthly sales. Know exactly how much profit you made today.',
      icon: TrendingUp,
      color: 'from-orange-400 to-orange-600',
      direction: 'right',
    },
  ];

  return (
    <div className="min-h-screen">

      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-rich-black mb-6">
              Powerful Solutions for the Modern Retailer
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-dark-grey max-w-3xl mx-auto">
              Replace your notebook and calculator with one powerful mobile app.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Features Zig-Zag Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-32">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={0.1}>
              <div className={`flex flex-col ${feature.direction === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
                {/* Icon Side */}
                <div className="flex-1 flex justify-center">
                  <div className="relative group">
                    <div className="relative bg-light-cool-grey rounded-3xl p-12 border border-gray-200 group-hover:scale-105 transition-transform duration-500">
                      <feature.icon className="w-24 h-24 text-muted-gold" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="flex-1">
                  <div className="bg-light-cool-grey rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-500">
                    <h2 className="text-3xl font-bold text-rich-black mb-4">{feature.title}</h2>
                    <p className="text-dark-grey leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Mockup Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-rich-black mb-12">
              See GroVize in Action
            </h2>
          </ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <ScrollReveal delay={0.1}>
              <img 
                src={mockup1} 
                alt="GroVize App Mockup 1" 
                className="rounded-2xl shadow-2xl max-w-sm w-full"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <img 
                src={mockup2} 
                alt="GroVize App Mockup 2" 
                className="rounded-2xl shadow-2xl max-w-sm w-full"
              />
            </ScrollReveal>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-8 md:mt-16">
            <ScrollReveal delay={0.1}>
              <img
                src={mockup3}
                alt="GroVize App Mockup 3"
                className="rounded-2xl shadow-2xl max-w-sm w-full"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <img
                src={mockup4}
                alt="GroVize App Mockup 4"
                className="rounded-2xl shadow-2xl max-w-sm w-full"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto bg-light-cool-grey rounded-3xl p-12 border border-gray-200 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-rich-black mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-dark-grey mb-8">
              Join thousands of retailers already using GroVize
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=168xhn-_shuHG4Vzr6aeWgWX522g3jvBg"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-dark-gold text-rich-black rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-dark-gold/50 transition-all duration-300"
            >
              Download for Free
            </a>
          </div>
        </ScrollReveal>
      </div>

      <Footer />
    </div>
  );
}
