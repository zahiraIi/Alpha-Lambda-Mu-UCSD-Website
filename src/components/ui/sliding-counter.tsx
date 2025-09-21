import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface SlidingCounterProps {
  value: number;
  duration?: number;
}

export function SlidingCounter({ value, duration = 2000 }: SlidingCounterProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          const timer = setTimeout(() => {
            setCurrentValue(value);
          }, 200);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value, isVisible]);

  const digits = currentValue.toString().split('');

  return (
    <div ref={ref} className="flex">
      {digits.map((digit, index) => (
        <div key={index} className="relative w-[0.6em] overflow-hidden">
          <motion.div
            key={`${index}-${digit}`}
            className="flex flex-col items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              type: "spring",
              stiffness: 120,
              damping: 20
            }}
          >
            {digit}
          </motion.div>
        </div>
      ))}
    </div>
  );
}