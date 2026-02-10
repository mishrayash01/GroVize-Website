import { useEffect, useState, useRef } from 'react';
import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import ScrollReveal from '@/react-app/components/ScrollReveal';
import { motion, useScroll, useTransform, useMotionValue, useAnimationFrame } from 'framer-motion';
import { Download, Box, Sparkles, FileText, MessageCircle, BarChart3, Truck, Globe } from 'lucide-react';
import { MagneticButton } from '@/react-app/components/MagneticButton';
import TrustBar from '@/react-app/components/TrustBar';
import imgLeft from '../../IMG_0978.PNG';
import imgRight from '../../IMG_0975.PNG';
import { GlassCard } from '@/react-app/components/GlassCard';

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

const futureFeatures = [
  {
    icon: Truck,
    title: 'End-to-End Logistics',
    description: 'Seamless delivery boy deployment and automated route optimization for local merchants.',
  },
  {
    icon: Globe,
    title: 'Personalized Storefront (GroVize Mart)',
    description: "Don't just bill; start selling. Your entire stock is instantly listed on the GroVize Hyperlocal Network. Customers in your colony can check your live inventory and place orders directly. Hustle Free —just pure business.",
  },
];

const AnimatedTitle = ({ text }: { text: string }) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      style={{ perspective: "1000px" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-rich-black flex flex-wrap"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="mr-3"
          style={{ display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const InteractiveMarquee = ({ items }: { items: string[] }) => {
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      // We render the list multiple times, so the wrap point is the width of one set of items
      setContentWidth(containerRef.current.scrollWidth / 4);
    }
  }, [items]);

  useAnimationFrame((_, delta) => {
    if (isPaused) return;

    // Move left by default
    const moveBy = -0.05 * delta; 
    let newX = x.get() + moveBy;

    // Infinite wrap logic
    if (contentWidth > 0) {
      if (newX <= -contentWidth) {
        newX += contentWidth;
      } else if (newX > 0) {
        newX -= contentWidth;
      }
    }
    
    x.set(newX);
  });

  const handleDrag = () => {
    if (contentWidth > 0) {
      let currentX = x.get();
      if (currentX <= -contentWidth) {
        x.set(currentX + contentWidth);
      } else if (currentX > 0) {
        x.set(currentX - contentWidth);
      }
    }
  };

  return (
    <div 
      className="relative overflow-hidden py-8 cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        ref={containerRef}
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -Infinity, right: Infinity }}
        onDragStart={() => setIsPaused(true)}
        onDragEnd={() => setIsPaused(false)}
        onDrag={handleDrag}
        className="flex whitespace-nowrap"
      >
        {/* Render 4 times to ensure enough buffer for dragging and infinite loop */}
        {[...items, ...items, ...items, ...items].map((shop, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-4 px-8 py-4 bg-soft-off-white rounded-xl border border-border-light select-none"
          >
            <span className="text-rich-black font-semibold whitespace-nowrap">{shop}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

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
    <div className="min-h-screen bg-white overflow-hidden">
      <TrustBar />
      <Navbar />
      
      {/* Hero Section */}
      <div className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 relative">
        {/* Animated background element */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-muted-gold/10 rounded-full blur-[120px] -z-10"
        />

        <div className="max-w-7xl mx-auto w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="text-left">
              <AnimatedTitle text="Empowering Bharat’s Dukaans with Super-Powers Made For Smart Bharat" />

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl text-slate-grey mb-8 leading-relaxed max-w-xl"
              >
                Manage Inventory, Create Invoices & Track Sales in seconds. Transform your Dukaan with AI-powered tools designed specifically for Indian retailers.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="https://drive.google.com/uc?export=download&id=1Mi47EGd-ECCv7jm1zBlTXsd1dXyu9md1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#4F9C8F] text-white rounded-full font-semibold flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg hover:shadow-[#4F9C8F]/40 transition-all duration-300 group"
                >
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Download className="w-5 h-5" />
                  </motion.div>
                  <span>Download App (Free APK)</span>
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="mt-4"
              >
                <p className="text-xs text-slate-grey opacity-75">
                  Note: You are downloading the Developer Beta directly. If you see a security warning, click "Download Anyway" – It is 100% Safe & Secure.
                </p>
              </motion.div>
            </div>

            {/* Right Side - App Mockup with Floating Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.6, type: "spring" }}
              className="flex justify-center items-center relative mt-12 lg:mt-0"
            >
              <motion.div
                animate={{ 
                  y: [0, -30, 0],
                  rotateZ: [0, 2, 0, -2, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-soft-off-white/50 backdrop-blur-sm rounded-[2rem] sm:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] p-3 sm:p-4 border border-white/20 w-full max-w-[300px] sm:max-w-md"
              >
                <img 
                  src="https://019c0931-75c4-76fa-b832-8ca7391e15f9.mochausercontent.com/Untitled_design__1_-removebg-preview_upscaled.png" 
                  alt="GroVize App" 
                  className="relative w-full h-auto rounded-[1.5rem] sm:rounded-[2.5rem]"
                />
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100"
                >
                  <Sparkles className="text-muted-gold w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Visual Showcase Section - Banner */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="relative group overflow-hidden rounded-3xl">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://019c0931-75c4-76fa-b832-8ca7391e15f9.mochausercontent.com/GroVize-banner.png" 
                alt="GroVize - Not just billing. A partner who stands by you, every day." 
                className="relative w-full h-auto shadow-2xl border border-border-light cursor-pointer"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Image Showcase Section */}
      <div className="container mx-auto px-4 py-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Left Image */}
          <ScrollReveal>
            <div className="relative group overflow-hidden rounded-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-muted-gold to-dark-gold rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src={imgLeft} 
                alt="GroVize App Showcase 1" 
                className="relative rounded-2xl border border-white/20 shadow-2xl w-full object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Right Image */}
          <ScrollReveal delay={0.2}>
            <div className="relative group overflow-hidden rounded-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-dark-gold to-muted-gold rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src={imgRight} 
                alt="GroVize App Showcase 2" 
                className="relative rounded-2xl border border-white/20 shadow-2xl w-full object-cover"
              />
            </div>
          </ScrollReveal>

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
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="w-8 h-8 text-muted-gold" />
                    </motion.div>
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

      {/* The Future Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-coffee-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-cream mb-4">
              The Future <span className="text-accent-teal">of Retail</span>
            </h2>
            <div className="w-24 h-1 bg-accent-teal mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative p-8 bg-coffee-card backdrop-blur-md rounded-3xl border border-coffee-border hover:border-accent-teal hover:shadow-[0_0_20px_rgba(79,156,143,0.3)] transition-all duration-500"
              >
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 bg-accent-teal/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-accent-teal" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-cream mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-brown font-inter text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Background glow effects */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-teal/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-teal/5 rounded-full blur-[100px]" />
      </div>

      {/* Trust Section - Interactive Scrolling Ticker */}
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

          <InteractiveMarquee items={shopTypes} />
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
              href="https://drive.google.com/uc?export=download&id=1Mi47EGd-ECCv7jm1zBlTXsd1dXyu9md1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-[#4F9C8F] text-white rounded-full font-bold text-xl inline-flex items-center justify-center space-x-3 mx-auto hover:scale-110 hover:shadow-lg hover:shadow-[#4F9C8F]/40 transition-all duration-300 group"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Download className="w-6 h-6" />
              </motion.div>
              <span>Download for Free</span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      <Footer />
    </div>
  );
}
