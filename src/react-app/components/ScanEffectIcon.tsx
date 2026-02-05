import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

export const ScanEffectIcon = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Package className="w-full h-full text-white" />
      <motion.div
        className="absolute w-full h-0.5 bg-muted-gold"
        style={{ top: '20%' }}
        animate={{
          top: ['20%', '80%', '20%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};
