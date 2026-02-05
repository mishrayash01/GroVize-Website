import Navbar from '@/react-app/components/Navbar';
import Footer from '@/react-app/components/Footer';

export default function ComingSoon() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-5xl font-bold text-rich-black mb-4">
            Coming Soon
          </h1>
          <p className="text-xl text-slate-grey">
            For further queries contact us on{' '}
            <a
              href="mailto:helpgrovize@gmail.com"
              className="text-muted-gold hover:underline"
            >
              helpgrovize@gmail.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}