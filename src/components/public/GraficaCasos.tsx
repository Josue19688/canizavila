import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: number;
  icon: JSX.Element;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, transition: { duration: 0.5 } });

    const incrementCount = () => {
      let start = 0;
      const duration = 2000;
      const increment = value / duration;

      const interval = setInterval(() => {
        start += increment;
        if (start >= value) {
          clearInterval(interval);
          setCount(value);
        } else {
          setCount(Math.ceil(start));
        }
      }, 10);
    };

    incrementCount();
  }, [value, controls]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-full shadow-lg p-6 flex flex-col items-center justify-center text-center m-4 w-56 h-56"
    >
      <div className="mb-3 text-orange-500 text-4xl">{icon}</div>
      <motion.h3
        className="text-3xl font-bold text-gray-800"
        animate={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 1 }}
      >
        {count}
      </motion.h3>
      <p className="text-sm font-medium text-gray-500">{label}</p>
    </motion.div>
  );
};

export default StatCard;
