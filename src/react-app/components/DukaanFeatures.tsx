import ScrollReveal from '@/react-app/components/ScrollReveal';
import { GlassCard } from '@/react-app/components/GlassCard';
import {
  Box,
  Sparkles,
  FileText,
  MessageCircle,
  BarChart3,
  TrendingUp,
  Package,
  Receipt,
} from 'lucide-react';

export default function DukaanFeatures() {
  const features = [
    {
      icon: Package,
      title: 'Smart Inventory',
      subtitle: 'Never Run Out of Stock',
      description: 'AI-powered alerts notify you before items run low. Automatic reorder suggestions based on sales patterns.',
      visual: (
        <div className="space-y-2 text-sm">
          <p className="text-red-400">Low Stock Alert: 5 items need reorder</p>
          <p className="text-green-400">Smart Prediction: Order 20% more rice</p>
        </div>
      ),
    },
    {
      icon: Sparkles,
      title: 'AI Powered',
      subtitle: 'Predict Future Sales',
      description: 'Know what will sell next week with AI forecasting.',
      visual: (
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-8 h-8 text-green-400" />
          <p className="text-lg font-bold text-green-400">+23% Expected growth</p>
        </div>
      ),
    },
    {
      icon: Receipt,
      title: 'GST Billing',
      subtitle: '10-Second Invoices',
      description: 'Create GST-compliant bills instantly.',
      visual: (
        <div className="text-sm space-y-1">
          <p className="text-gray-400">Invoice #1247</p>
          <p className="font-bold text-white">₹4,851 (GST Included)</p>
        </div>
      ),
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Marketing',
      subtitle: 'Automated Customer Messages',
      description: 'Send payment reminders, offers, and updates automatically to your customers on WhatsApp.',
      visual: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
          <div>
            <p className="font-bold text-white">156</p>
            <p className="text-gray-400 text-xs">Payment Reminders (Sent this week)</p>
          </div>
          <div>
            <p className="font-bold text-white">89</p>
            <p className="text-gray-400 text-xs">Special Offers (Active campaigns)</p>
          </div>
          <div>
            <p className="font-bold text-white">67%</p>
            <p className="text-gray-400 text-xs">Response Rate (Customers engaged)</p>
          </div>
        </div>
      ),
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      subtitle: 'AI Growth Insights',
      description: 'Profit/Loss, GST reports, and smart recommendations.',
      visual: (
        <div className="text-sm space-y-1">
          <p className="text-green-400">Monthly Profit: +₹45,230</p>
          <p className="text-gray-400">GST Collected: ₹12,450</p>
        </div>
      ),
    },
  ];

  return (
    <div className="py-20 bg-gray-900 text-white">
      <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="text-center">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Everything You Need to <span className="text-muted-gold">Grow Your Dukaan</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From smart inventory to automated marketing, GroVize is the all-in-one platform for Indian retailers.
          </p>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <GlassCard>
                <div className="flex items-center space-x-4 mb-4">
                  <feature.icon className="w-10 h-10 text-muted-gold" />
                  <div>
                    <h2 className="text-xl font-bold text-white">{feature.title}</h2>
                    <p className="text-sm text-gray-400">{feature.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="bg-white/5 p-4 rounded-lg">
                  {feature.visual}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
