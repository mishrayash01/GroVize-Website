import { motion } from 'framer-motion';

export const TrendLineChartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        d="M3 17l6-6 4 4 8-8"
        stroke="#10B981"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'loop', repeatDelay: 1 }}
      />
      <motion.polyline
        points="17 7 21 7 21 11"
        stroke="#10B981"
        strokeWidth="2"
      />
    </svg>
  );
};
