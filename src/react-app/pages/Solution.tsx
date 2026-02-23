import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import ScrollReveal from '@/react-app/components/ScrollReveal';
import { Zap, Package, TrendingUp, Bell, Smartphone, CreditCard, Wallet, Banknote, Coins, Download } from 'lucide-react';
import mockup1 from '@/grovize-mockup-1.png';
import mockup2 from '@/grovize-mockup-2.png';
import mockup3 from '@/grovize-mockup-3.png';
import mockup4 from '@/grovize-mockup-4.png';
import { motion } from 'framer-motion';

const StorefrontVisual = () => (
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, type: "spring" }}
    className="relative"
  >
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="bg-[#F0FFF4] p-8 rounded-[2.5rem] border-4 border-white shadow-2xl relative z-10 flex items-center justify-center"
    >
      <Smartphone className="w-32 h-32 text-accent-teal" strokeWidth={1} />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-3 rounded-2xl shadow-sm border border-[#E6FFFA]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-12 h-2 bg-[#81E6D9] rounded-full mb-1" />
        <div className="w-8 h-2 bg-[#B2F5EA] rounded-full" />
      </motion.div>
    </motion.div>
    <div className="absolute -inset-4 bg-accent-teal/10 blur-3xl rounded-full" />
  </motion.div>
);

const PaymentVisual = () => {
  const icons = [Wallet, CreditCard, Banknote, Coins];
  return (
    <div className="flex flex-wrap justify-center gap-6 relative max-w-sm">
      {icons.map((Icon, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3 + i, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="bg-white p-6 rounded-[2rem] shadow-xl border border-[#E6FFFA] group"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          >
            <Icon className="w-12 h-12 text-accent-teal" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      ))}
      <div className="absolute -inset-10 bg-[#E6FFFA]/30 blur-3xl rounded-full -z-10" />
    </div>
  );
};

export default function Solution() {
  const features = [
    {
      title: '3-Click Ultra-Fast Billing',
      description: 'Generate professional invoices instantly. No typing needed—just scan or select. Reduces lines at your counter.',
      icon: Zap,
      direction: 'left',
    },
    {
      title: 'Smart Low Stock Alerts',
      description: 'Never say "No" to a customer. GroVize alerts you before your best-selling items go out of stock.',
      icon: Bell,
      direction: 'right',
    },
    {
      title: 'AI Inventory Management',
      description: 'Our AI learns your sales patterns to predict demand. It\'s like having a smart manager in your pocket.',
      icon: Package,
      direction: 'left',
    },
    {
      title: 'Business Sales Analytics',
      description: 'Visual reports of your daily, weekly, and monthly sales. Know exactly how much profit you made today.',
      icon: TrendingUp,
      direction: 'right',
    },
    {
      title: 'Your Digital Twin on GroVize Mart',
      description: 'Instantly sync your inventory with the GroVize Mart consumer app. Give your customers a premium shopping experience with a dedicated digital storefront that’s open 24/7.',
      icon: Smartphone,
      direction: 'left',
      customVisual: <StorefrontVisual />,
    },
    {
      title: 'Accept Every Rupee',
      description: 'Never lose a customer again. Accept Sodexo, Credit Cards, Debit Cards, and UPI directly through our integrated payment gateway to increase your checkout conversion by 40%.',
      icon: CreditCard,
      direction: 'right',
      customVisual: <PaymentVisual />,
    },
  ];

  const apkLink = "https://drive.google.com/uc?export=download&id=154jd6ciBpYSsv8XYKxQdI1bc7cIs0Z5x";

  return (
    <div className="min-h-screen bg-soft-off-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-rich-black mb-6">
              Powerful Solutions for the <span className="text-accent-teal">Modern Retailer</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-slate-grey max-w-3xl mx-auto">
              Replace your notebook and calculator with one powerful mobile app. Built for Bharat.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Features Zig-Zag Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-32">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={0.1}>
              <motion.div 
                whileTap={{ scale: 0.98 }}
                className={`flex flex-col ${feature.direction === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 cursor-pointer`}
              >
                {/* Visual Side */}
                <div className="flex-1 flex justify-center w-full">
                  {feature.customVisual ? (
                    feature.customVisual
                  ) : (
                    <div className="relative group">
                      <div className="relative bg-white rounded-[2.5rem] p-12 border border-border-light group-hover:scale-105 transition-transform duration-500 shadow-xl shadow-accent-teal/5">
                        <feature.icon className="w-24 h-24 text-accent-teal" strokeWidth={1.5} />
                      </div>
                      <div className="absolute -inset-4 bg-accent-teal/5 blur-2xl rounded-full -z-10 group-hover:bg-accent-teal/10 transition-colors" />
                    </div>
                  )}
                </div>

                {/* Text Side */}
                <div className="flex-1">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-[2.5rem] p-10 border border-border-light hover:shadow-2xl hover:shadow-accent-teal/10 transition-all duration-500"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-rich-black mb-6">{feature.title}</h2>
                    <p className="text-slate-grey leading-relaxed text-lg md:text-xl">
                      {feature.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Mockup Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-rich-black mb-16">
              See GroVize in <span className="text-accent-teal">Action</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[mockup1, mockup2, mockup3, mockup4].map((mockup, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.img 
                  whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                  whileTap={{ scale: 0.95 }}
                  src={mockup} 
                  alt={`GroVize App Mockup ${i + 1}`} 
                  className="rounded-[2rem] shadow-2xl w-full border-4 border-white cursor-pointer"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-16 border-2 border-[#E6FFFA] text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6FFFA] rounded-full blur-[100px] -z-10 group-hover:bg-[#B2F5EA] transition-colors duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F0FFF4] rounded-full blur-[100px] -z-10" />
            
            <h2 className="text-4xl md:text-6xl font-bold text-rich-black mb-8">
              Ready to Transform <br />Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-slate-grey mb-12 max-w-2xl mx-auto">
              Join thousands of retailers already scaling with GroVize. Simple, Fast, Powerful.
            </p>
            <motion.a
              href={apkLink}
              download="GroVize.apk"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-12 py-6 bg-accent-teal text-white rounded-full font-bold text-2xl hover:shadow-[0_20px_50px_rgba(79,209,197,0.4)] transition-all duration-300 shadow-lg cursor-pointer"
            >
              <Download className="w-8 h-8" />
              <span>Download for Free</span>
            </motion.a>
          </div>
        </ScrollReveal>
      </div>

      <Footer />
    </div>
  );
}
