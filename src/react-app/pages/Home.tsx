import { useEffect, useState } from 'react';
import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import ScrollReveal from '@/react-app/components/ScrollReveal';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { AnimatedZap } from '@/react-app/components/AnimatedZap';
import { ScanEffectIcon } from '@/react-app/components/ScanEffectIcon';
import { CounterEffect } from '@/react-app/components/CounterEffect';
import { SyncLockIcon } from '@/react-app/components/SyncLockIcon';
import { TrendLineChartIcon } from '@/react-app/components/TrendLineChartIcon';
import { LowStockIcon } from '@/react-app/components/LowStockIcon';
import { MagneticButton } from '@/react-app/components/MagneticButton';
import TrustBar from '@/react-app/components/TrustBar';

export default function Home() {

  const features = [
    {
      title: 'Fast Billing',
      description: 'Generate GST/Non-GST invoices in 3 clicks.',
      icon: AnimatedZap,
    },
    {
      title: 'AI Inventory Tracking',
      description: 'Auto-deduct stock on every sale.',
      icon: ScanEffectIcon,
    },
    {
      title: '500+ Item Database',
      description: 'Pre-loaded FMCG & Pharma catalog.',
      icon: CounterEffect,
    },
    {
      title: 'Secure Cloud Backup',
      description: 'Auto-sync data (Never lose a ledger).',
      icon: SyncLockIcon,
    },
    {
      title: 'Real-time Analytics',
      description: 'Track daily profit & sales trends.',
      icon: TrendLineChartIcon,
    },
    {
      title: 'Restock Alerts',
      description: '"Low Stock" notifications before you run out.',
      icon: LowStockIcon,
    },
  ];

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

      {/* Bento Grid Features */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-rich-black mb-4">
                Everything You Need to Run a Digital Dukaan
              </h2>
              <p className="text-xl text-slate-grey">
                Powerful features to run your retail business efficiently
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group bg-soft-off-white rounded-2xl p-6 border border-border-light transition-all duration-300 hover:scale-105 hover:border-muted-gold hover:shadow-xl">
                  <div className={`w-14 h-14 bg-metallic-gold rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-rich-black mb-2">{feature.title}</h3>
                  <p className="text-slate-grey">{feature.description}</p>
                </div>
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