
import { motion } from 'framer-motion';

const barVariants = {
  initial: { height: '20%' },
  animate: (i) => ({
    height: ['20%', '80%', '40%', '100%', '60%', '20%'],
    transition: {
      duration: 2,
      repeat: Infinity,
      delay: i * 0.3,
      ease: "easeInOut"
    },
  }),
};

export const AnalyticsAnimation = () => {
  return (
    <div className="flex items-end justify-center w-full h-full gap-1">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={barVariants}
          initial="initial"
          animate="animate"
          className="w-1/4 bg-white rounded-t-sm"
        />
      ))}
    </div>
  );
};
