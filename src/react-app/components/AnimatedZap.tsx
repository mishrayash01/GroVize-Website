import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export const AnimatedZap = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Zap className="w-full h-full" />
    </motion.div>
  );
};
