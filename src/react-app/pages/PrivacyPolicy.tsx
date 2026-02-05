import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow flex items-center justify-center text-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-rich-black mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-grey mb-8">
            Last updated: February 04, 2026
          </p>
          <div className="text-left space-y-4 text-slate-grey">
            <p>
              GroVize Technologies Pvt. Ltd. ("us", "we", or "our") operates the GroVize mobile application and the GroVize.in website (the "Service").
            </p>
            <p>
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
            </p>
            <h2 className="text-2xl font-bold text-rich-black pt-4">Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <h2 className="text-2xl font-bold text-rich-black pt-4">Types of Data Collected</h2>
            <p>
              Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally, identifiable information may include, but is not limited to: Email address, Phone number, Business Name, Usage Data.
            </p>
            <h2 className="text-2xl font-bold text-rich-black pt-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us by email: helpgrovize@gmail.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
