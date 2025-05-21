"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, X } from "lucide-react";
import { EducationModal } from "../EducationModal";

export default function InteractiveCTA() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-md mx-auto px-[6vw] sm:px-0">
      <motion.div
        className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg"
        initial={{ borderRadius: 16 }}
        animate={{
          borderRadius: isExpanded ? 24 : 16,
          height: isExpanded ? "auto" : "auto",
        }}
      >
        {/* Main button when collapsed */}
        {!isExpanded && (
          <motion.button
            className="group w-full flex items-center justify-between gap-4 bg-black text-white px-8 py-5 rounded-xl font-medium text-xl"
            onClick={() => setIsExpanded(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-3">
              <BookOpen className="h-5 w-5" />
              Get Educated
            </span>
            <motion.div
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
                times: [0, 0.6, 1],
              }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </motion.button>
        )}

        {/* Expanded content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-black flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Knowledge Hub
                </h3>
                <motion.button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-500 hover:text-black p-1 rounded-full hover:bg-gray-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              <p className="text-gray-600 mb-6">
                Access our comprehensive knowledge base with expert insights and
                research-backed information to make informed decisions.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                  <span className="text-gray-700">Evidence-based research</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                  <span className="text-gray-700">Expert-reviewed content</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                  <span className="text-gray-700">
                    Personalized recommendations
                  </span>
                </div>
              </div>

              <motion.button
                className="group w-full flex items-center justify-center gap-2 bg-black text-white px-6 py-4 rounded-xl font-medium text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
              >
                <span>Explore Knowledge Hub</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "easeInOut",
                    times: [0, 0.6, 1],
                  }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </motion.button>
              {isModalOpen && (
                <EducationModal
                  isOpen={isModalOpen}
                  setIsOpen={setIsModalOpen}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
