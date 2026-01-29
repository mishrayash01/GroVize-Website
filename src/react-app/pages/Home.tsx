import { useEffect, useState } from 'react';
import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import ScrollReveal from '@/react-app/components/ScrollReveal';
import { motion } from 'framer-motion';
import { Zap, Package, Database, Shield, Clock, TrendingUp, Download } from 'lucide-react';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Smart Billing for Smart Bharat.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      title: 'Fast Billing',
      description: 'Generate invoices in 3 clicks',
      icon: Zap,
      color: 'from-green-400 to-green-600',
    },
    {
      title: 'AI Inventory Tracking',
      description: 'Smart stock management',
      icon: Package,
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: '500+ Item Database',
      description: 'Pre-loaded product catalog',
      icon: Database,
      color: 'from-purple-400 to-purple-600',
    },
    {
      title: 'Secure Cloud Backup',
      description: 'Never lose your data',
      icon: Shield,
      color: 'from-orange-400 to-orange-600',
    },
    {
      title: 'Real-time Analytics',
      description: 'Track sales performance',
      icon: TrendingUp,
      color: 'from-pink-400 to-pink-600',
    },
    {
      title: 'Restock Alerts',
      description: 'Prevent product waste',
      icon: Clock,
      color: 'from-cyan-400 to-cyan-600',
    },
  ];

  const shopTypes = [
    'Medical Stores',
    'Kirana Shops',
    'Electronics Retailers',
    'Grocery Stores',
    'Hardware Shops',
    'Stationery Stores',
    'Clothing Boutiques',
    'Mobile Shops',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 mb-6">
                  <span className="text-green-400 text-sm font-semibold">AI-Powered Solution</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              >
                {typedText}
                <span className="animate-pulse">|</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-400 mb-8 leading-relaxed"
              >
                Manage Inventory & Billing in seconds. Transform your shop with AI-powered tools designed for Indian retailers.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="https://drive.google.com/uc?export=download&id=168xhn-_shuHG4Vzr6aeWgWX522g3jvBg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  <span>Download for Free</span>
                </a>

              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-4 text-center"
              >
                <p className="text-xs text-gray-400 opacity-75">
                  Note: As this is a Developer Beta, your phone may show a security warning. Please click "Download Anyway" to proceed.
                </p>
              </motion.div>
            </div>

            {/* Right Side - App Mockup with Floating Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:flex justify-center items-center"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Glowing shadow */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-3xl opacity-30" />
                
                {/* App Mockup Image */}
                <img 
                  src="https://019c0931-75c4-76fa-b832-8ca7391e15f9.mochausercontent.com/Untitled_design__1_-removebg-preview_upscaled.png" 
                  alt="GroVize App" 
                  className="relative w-full max-w-md h-auto drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Visual Showcase Section - Banner */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="relative">
              {/* Glow effect behind banner */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-blue-500/20 to-green-400/20 rounded-3xl blur-3xl" />
              
              {/* Banner Image */}
              <img 
                src="https://019c0931-75c4-76fa-b832-8ca7391e15f9.mochausercontent.com/GroVize-banner.png" 
                alt="GroVize - Not just billing. A partner who stands by you, every day." 
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-white/10"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bento Grid Features */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Everything You Need
              </h2>
              <p className="text-xl text-gray-400">
                Powerful features to run your retail business efficiently
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500">
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Section - Scrolling Ticker */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#0a192f]/50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Made For Retailers
              </h2>
              <p className="text-xl text-gray-400">
                Serving businesses across India
              </p>
            </div>
          </ScrollReveal>

          <div className="relative overflow-hidden py-8">
            <div className="flex animate-scroll">
              {[...shopTypes, ...shopTypes].map((shop, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-4 px-8 py-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10"
                >
                  <span className="text-white font-semibold whitespace-nowrap">{shop}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-500/10 to-green-600/10 backdrop-blur-xl rounded-3xl p-12 border border-green-500/20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Download the APK Now
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of retailers transforming their business with GroVize
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=168xhn-_shuHG4Vzr6aeWgWX522g3jvBg"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-xl flex items-center justify-center space-x-3 mx-auto hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300"
            >
              <Download className="w-6 h-6" />
              <span>Download for Free</span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      <Footer />

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
