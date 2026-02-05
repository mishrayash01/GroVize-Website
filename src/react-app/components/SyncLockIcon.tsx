import { motion } from 'framer-motion';
import { Cloud, RotateCw, Check } from 'lucide-react';

export const SyncLockIcon = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Cloud className="w-full h-full text-white" />
      <motion.div
        className="absolute"
        animate={{
          rotate: [0, 360],
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          times: [0, 0.8, 1],
        }}
      >
        <RotateCw className="w-1/2 h-1/2 text-white" />
      </motion.div>
      <motion.div
        className="absolute"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          times: [0.9, 1, 1],
        }}
      >
        <Check className="w-1/2 h-1/2 text-green-400" />
      </motion.div>
    </div>
  );
};
