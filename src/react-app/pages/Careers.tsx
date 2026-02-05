import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';
import ScrollReveal from '@/react-app/components/ScrollReveal';
import { Briefcase, FastForward, Users, Globe, ArrowRight } from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: 'Flutter/Android Developer',
      description: 'Build the core mobile experience that our retailers use every day. You will own features from concept to launch.',
    },
    {
      title: 'Backend Engineer (Node/Python)',
      description: 'Scale our AI-powered inventory and sales prediction engine. Handle data for millions of transactions.',
    },
    {
      title: 'Growth & Marketing Intern',
      description: 'Design and execute campaigns to bring GroVize to every corner of India. Your words will reach millions.',
    },
    {
      title: 'Sales Rockstar',
      description: 'Be the face of GroVize. Onboard new shopkeepers, understand their needs, and help them succeed.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <header className="pt-32 pb-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-rich-black mb-4">
              Don't Just Get a Job. <span className="text-muted-gold">Build a Legacy.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-slate-grey max-w-2xl mx-auto mb-8">
              Join the team that is revolutionizing how 15 million Indian shopkeepers do business. Be a part of the GroVize story from Chapter 1.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <a
              href="#open-positions"
              className="px-8 py-4 bg-muted-gold text-black rounded-xl font-semibold text-lg inline-flex items-center justify-center space-x-2 hover:scale-105 hover:bg-darker-muted-gold transition-all duration-300"
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </ScrollReveal>
        </div>
      </header>

      {/* Our Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-rich-black mb-4">Our Mission</h2>
            <div className="w-20 h-1 bg-muted-gold mx-auto mb-8"></div>
            <p className="text-xl text-slate-grey">
              We are on a mission to empower the smallest shopkeepers with the smartest AI. We are building the operating system for Indian Retail. Join us to solve hard problems and create real impact.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-rich-black text-center mb-12">
              Why You'll Love It Here
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Briefcase, title: 'Maximum Ownership', description: 'You don\'t just execute tasks; you own projects from start to finish.' },
              { icon: FastForward, title: 'Steep Learning Curve', description: 'Learn in 6 months what corporate employees learn in 2 years. Grow at lightning speed.' },
              { icon: Globe, title: 'Build for Bharat', description: 'Create technology that impacts real people in your city and beyond.' },
              { icon: Users, title: 'Flexible Culture', description: 'We believe in working hard and playing hard. Remote-friendly options available.' },
            ].map((perk, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-transparent hover:border-muted-gold transition-all duration-300 transform hover:-translate-y-2">
                  <perk.icon className="w-12 h-12 text-muted-gold mb-4" />
                  <h3 className="text-xl font-bold text-rich-black mb-2">{perk.title}</h3>
                  <p className="text-slate-grey">{perk.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-rich-black text-center mb-12">
              Current Openings
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-muted-gold transition-all duration-300">
                  <h3 className="text-2xl font-bold text-rich-black mb-2">{position.title}</h3>
                  <p className="text-slate-grey">{position.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Footer */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <p className="text-xl text-slate-grey mb-4">
              Don't see a role that fits? We hire for talent, not just titles.
            </p>
            <a
              href="mailto:careers@grovize.in"
              className="text-xl font-semibold text-muted-gold hover:text-darker-muted-gold transition-all duration-300"
            >
              Email your portfolio to careers@grovize.in
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
