import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow flex items-center justify-center text-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-rich-black mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-grey mb-8">
            Last updated: February 04, 2026
          </p>
          <div className="text-left space-y-4 text-slate-grey">
            <h2 className="text-2xl font-bold text-rich-black pt-4">1. Agreement to Terms</h2>
            <p>
              By using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
            <h2 className="text-2xl font-bold text-rich-black pt-4">2. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
            </p>
            <h2 className="text-2xl font-bold text-rich-black pt-4">3. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us by email: helpgrovize@gmail.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
