import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import ScrollReveal from '@/react-app/components/ScrollReveal';
import { Zap, Package, TrendingUp, Shield, Clock, Bell } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: '3-Click Billing Process',
      description: 'Generate professional invoices in just three clicks. Our streamlined billing system saves you time and reduces errors, making transaction processing faster than ever.',
      icon: Zap,
      color: 'from-green-400 to-green-600',
      direction: 'left',
    },
    {
      title: 'Low Stock Alerts',
      description: 'Never run out of essential items. Our intelligent system monitors your inventory levels and sends timely alerts when stock runs low, helping you maintain optimal inventory.',
      icon: Bell,
      color: 'from-blue-400 to-blue-600',
      direction: 'right',
    },
    {
      title: 'Expiry Date Tracking',
      description: 'Reduce waste and protect your customers. Automatically track product expiry dates and receive notifications before items expire, ensuring product quality and safety.',
      icon: Clock,
      color: 'from-purple-400 to-purple-600',
      direction: 'left',
    },
    {
      title: 'Sales Analytics',
      description: 'Make data-driven decisions with comprehensive sales reports. Visualize trends, identify best-sellers, and understand your business performance at a glance.',
      icon: TrendingUp,
      color: 'from-orange-400 to-orange-600',
      direction: 'right',
    },
    {
      title: 'AI Inventory Management',
      description: 'Leverage artificial intelligence to predict demand, optimize stock levels, and automate reordering. Our AI learns your business patterns to help you stay ahead.',
      icon: Package,
      color: 'from-pink-400 to-pink-600',
      direction: 'left',
    },
    {
      title: 'Secure Cloud Backup',
      description: 'Your data is precious. Automatic cloud backups ensure your business information is always safe and accessible from anywhere, on any device.',
      icon: Shield,
      color: 'from-cyan-400 to-cyan-600',
      direction: 'right',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Features</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to run your retail business efficiently, all in one place
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
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 group-hover:scale-105 transition-transform duration-500">
                      <feature.icon className={`w-24 h-24 text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="flex-1">
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20">
                    <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-500/10 to-green-600/10 backdrop-blur-xl rounded-3xl p-12 border border-green-500/20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of retailers already using GroVize
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=168xhn-_shuHG4Vzr6aeWgWX522g3jvBg"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300"
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
