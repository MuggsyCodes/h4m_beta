"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Explanatory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-black py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="overflow-hidden">
            <motion.h2
              className="text-2xl md:text-3xl text-white mb-4"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // custom ease curve for a 'pop' effect
              }}
            >
              Let&apos;s face it, traditional healthcare is{" "}
              <motion.span
                className="text-red-500 inline-block"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.5, opacity: 0 }
                }
                transition={{
                  delay: 0.5,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
              >
                broken
              </motion.span>
              . You deserve better than stubborn insurance companies, overworked
              physicians, and outdated treatment guidelines.
            </motion.h2>
          </div>

          <motion.p
            className="text-2xl md:text-3xl text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            You deserve Guided Optimization®
          </motion.p>
        </div>
      </div>
    </section>
  );
}
