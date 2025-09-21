import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SlidingCounterProps {
  value: number;
  duration?: number;
}

export function SlidingCounter({ value, duration = 2000 }: SlidingCounterProps) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentValue(value);
    }, 100);

    return () => clearTimeout(timer);
  }, [value]);

  const digits = currentValue.toString().split('');

  return (
    <div className="flex">
      {digits.map((digit, index) => (
        <div key={index} className="relative w-[0.6em] overflow-hidden">
          <motion.div
            key={`${index}-${digit}`}
            className="flex flex-col items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            {digit}
          </motion.div>
        </div>
      ))}
    </div>
  );
}