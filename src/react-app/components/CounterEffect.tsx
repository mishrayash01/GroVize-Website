import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const CounterEffect = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, 500, { duration: 1.5 });
      return controls.stop;
    }
  }, [inView, count]);

  return (
    <div ref={ref} className="w-full h-full flex items-center justify-center">
      <h3 className="font-bold text-white">
        <motion.span>{rounded}</motion.span>+
      </h3>
    </div>
  );
};