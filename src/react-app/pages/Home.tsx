import { useEffect, useState } from 'react';
import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import ScrollReveal from '@/react-app/components/ScrollReveal';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { MagneticButton } from '@/react-app/components/MagneticButton';
import TrustBar from '@/react-app/components/TrustBar';
import imgLeft from '../../IMG_0978.PNG';
import imgRight from '../../IMG_0975.PNG';


import { GlassCard } from '@/react-app/components/GlassCard';
import { Box, Sparkles, FileText, MessageCircle, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Box,
    title: 'Smart Inventory',
    subtitle: 'Never Run Out of Stock',
    description: 'AI-powered alerts notify you before items run low. Automatic reorder suggestions based on sales patterns.',
    visual: (
      <>
        <div className="text-red-500 text-sm font-semibold">Low Stock Alert: 5 items need reorder</div>
        <div className="text-green-500 text-sm font-semibold">Smart Prediction: Order 20% more rice</div>
      </>
    ),
  },
  {
    icon: Sparkles,
    title: 'AI Powered',
    subtitle: 'Predict Future Sales',
    description: 'Know what will sell next week with AI forecasting.',
    visual: (
      <div className="text-green-500 text-sm font-semibold">Next Week: +23% Expected growth</div>
    ),
  },
  {
    icon: FileText,
    title: 'GST Billing',
    subtitle: '10-Second Invoices',
    description: 'Create GST-compliant bills instantly.',
    visual: (
      <>
        <div>Invoice #1247</div>
        <div>₹4,851 (GST Included)</div>
      </>
    ),
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Marketing',
    subtitle: 'Automated Customer Messages',
    description: 'Send payment reminders, offers, and updates automatically to your customers on WhatsApp.',
    visual: (
      <div className="text-sm">
        <div>Payment Reminders: 156 (Sent this week)</div>
        <div>Special Offers: 89 (Active campaigns)</div>
        <div>Response Rate: 67% (Customers engaged)</div>
      </div>
    ),
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    subtitle: 'AI Growth Insights',
    description: 'Profit/Loss, GST reports, and smart recommendations.',
    visual: (
      <>
        <div className="text-green-500 font-semibold">Monthly Profit: +₹45,230</div>
        <div>GST Collected: ₹12,450</div>
      </>
    ),
  },
];

export default function Home() {
  const shopTypes = [
    'Medical Stores',
    'Kirana & Grocery',
    'Electronics',
    'Mobile Shops',
    'Hardware',
    'Clothing Boutiques',
    'Stationery',
  ];

  return (
    <div className="min-h-screen bg-white">
      <TrustBar />
      <Navbar />
      
      {/* Hero Section */}
      <div className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-rich-black"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Smart AI-Powered Business Growth App for Smart Bharat
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-slate-grey mb-8 leading-relaxed"
              >
                Manage Inventory, Create Invoices & Track Sales in seconds. Transform your Dukaan with AI-powered tools designed specifically for Indian retailers.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <MagneticButton
                  as="a"
                  href="https://drive.google.com/uc?export=download&id=168xhn-_shuHG4Vzr6aeWgWX522g3jvBg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-muted-gold text-black rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:scale-105 hover:bg-darker-muted-gold transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  <span>Download App (Free APK)</span>
                </MagneticButton>

              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-4 text-center"
              >
                <p className="text-xs text-slate-grey opacity-75">
                  Note: You are downloading the Developer Beta directly. If you see a security warning, click "Download Anyway" – It is 100% Safe & Secure.
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
                className="relative bg-soft-off-white rounded-3xl shadow-2xl p-4"
              >
                {/* App Mockup Image */}
                <img 
                  src="https://019c0931-75c4-76fa-b832-8ca7391e15f9.mochausercontent.com/Untitled_design__1_-removebg-preview_upscaled.png" 
                  alt="GroVize App" 
                  className="relative w-full max-w-md h-auto"
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
              {/* Banner Image */}
              <img 
                src="https://019c0931-75c4-76fa-b832-8ca7391e15f9.mochausercontent.com/GroVize-banner.png" 
                alt="GroVize - Not just billing. A partner who stands by you, every day." 
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-border-light"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Image Showcase Section */}
      <div className="container mx-auto px-4 py-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Left Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-muted-gold to-dark-gold rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src={imgLeft} 
              alt="GroVize App Showcase 1" 
              className="relative rounded-2xl border border-white/20 shadow-2xl w-full object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-dark-gold to-muted-gold rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src={imgRight} 
              alt="GroVize App Showcase 2" 
              className="relative rounded-2xl border border-white/20 shadow-2xl w-full object-cover"
            />
          </div>

        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-rich-black mb-4">
                Everything You Need to Grow Your Dukaan
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlassCard>
                  <div className="flex items-center gap-4 mb-4">
                    <feature.icon className="w-8 h-8 text-muted-gold" />
                    <div>
                      <h3 className="text-xl font-bold text-rich-black">{feature.title}</h3>
                      <p className="text-slate-grey">{feature.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-slate-grey mb-4">{feature.description}</p>
                  <div className="bg-white/10 p-4 rounded-lg">
                    {feature.visual}
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>





      {/* Trust Section - Scrolling Ticker */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-rich-black mb-4">
                Billing App for Every Indian Shop
              </h2>
              <p className="text-xl text-slate-grey">
                Serving businesses across India
              </p>
            </div>
          </ScrollReveal>

          <div className="relative overflow-hidden py-8">
            <div className="flex animate-scroll">
              {[...shopTypes, ...shopTypes].map((shop, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-4 px-8 py-4 bg-soft-off-white rounded-xl border border-border-light"
                >
                  <span className="text-rich-black font-semibold whitespace-nowrap">{shop}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto bg-soft-off-white rounded-3xl p-12 border border-border-light text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-rich-black mb-6">
              Download the APK Now
            </h2>
            <p className="text-xl text-slate-grey mb-8">
              Join thousands of retailers transforming their business with GroVize
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=168xhn-_shuHG4Vzr6aeWgWX522g3jvBg"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-muted-gold text-black rounded-xl font-bold text-xl inline-flex items-center justify-center space-x-3 mx-auto hover:scale-105 hover:bg-darker-muted-gold transition-all duration-300"
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