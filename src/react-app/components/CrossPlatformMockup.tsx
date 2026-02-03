import { motion } from 'framer-motion';

const LaptopPlaceholder = () => (
  <div className="w-full h-full bg-white rounded-lg p-4 flex space-x-2">
    <div className="w-1/4 bg-muted-gold/20 rounded-md"></div>
    <div className="w-3/4 flex flex-col space-y-2">
      <div className="h-1/3 bg-gray-200 rounded-md"></div>
      <div className="h-1/3 bg-gray-200 rounded-md"></div>
      <div className="h-1/3 bg-gray-200 rounded-md"></div>
    </div>
  </div>
);

const PhonePlaceholder = () => (
  <div className="w-full h-full bg-white rounded-lg flex flex-col items-center justify-center p-4">
    <button className="px-6 py-3 bg-muted-gold text-black rounded-lg font-semibold">
      Start Billing
    </button>
  </div>
);

export const CrossPlatformMockup = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Laptop */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-[80%] aspect-video bg-soft-off-white rounded-xl shadow-2xl p-2 border border-border-light"
        style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
      >
        <LaptopPlaceholder />
      </motion.div>

      {/* Phone */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-[-10%] right-[-5%] w-[30%] aspect-[9/19] bg-soft-off-white rounded-xl shadow-2xl p-1.5 border border-border-light"
        style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
      >
        <PhonePlaceholder />
      </motion.div>
    </div>
  );
};
