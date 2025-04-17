"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const buttons = [
  "Testosterone",
  "Heart Health",
  "Fertility",
  "Look Younger",
  "Think Sharper",
  "Weight Loss",
  "Stop Hair Loss",
  "Sleep Better",
  "Perform Better",
];

export default function ButtonCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startAnimation = () => {
      controls.start({
        x: [0, -2000],
        transition: {
          duration: 45,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };

    if (!isPaused) {
      startAnimation();
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  return (
    <div className="w-full overflow-hidden py-2">
      <motion.div
        ref={containerRef}
        className="flex gap-6 px-4"
        animate={controls}
        initial={{ x: 0 }}
      >
        {/* Create three sets of buttons for smoother looping */}
        {[...buttons, ...buttons, ...buttons].map((text, index) => (
          <motion.button
            key={`${text}-${index}`}
            className="whitespace-nowrap px-6 py-3 rounded-full border-2 border-white text-white 
                     hover:bg-white hover:text-red-500 transition-all duration-300
                     min-w-max"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {text}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
