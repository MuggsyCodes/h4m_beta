"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Schedule a 1 on 1 intake with a Hormones for Me Health Coach.",
    description:
      "Meet with your health coach via video conference to examine your symptoms and goals so they can get started with your personalized protocol.",
  },
  {
    id: 2,
    title: "Get personalized diagnostic lab work",
    description:
      "Diagnostic testing designed just for you. Results arrive within 14 days and are accompanied by a comprehensive review with actionable recommendations.",
  },
  {
    id: 3,
    title: "Review your plan with a Health Care Provider",
    description:
      "One of our partnered medical providers will meet with you via video conference to discuss your results in detail, answer questions in real time, and formulate a customized treatment plan.",
  },
  {
    id: 4,
    title: "Treatments sent directly to your door",
    description:
      "Once you have reviewed the lifestyle, supplement, and treatment recommendations with your Marek team, treatments will be conveniently sent to your door. From there, you&apos;ll participate in monthly check-ins with your health success team to help you along the way.",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(1);

  return (
    <section className="bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-[50%] mb-12">
          <h2 className="text-3xl font-bold mb-4">Our expert process.</h2>
          <p className="text-gray-400 text-lg">
            Our 4 step process was developed with convenience in mind. We
            partner with medical providers to bring high quality treatment
            straight to your door.
          </p>
        </div>

        <div className="flex gap-24">
          <div className="w-[240px]">
            <h3 className="text-2xl font-semibold mb-8">The 4 Steps</h3>
            <div className="relative flex flex-col space-y-4 py-4">
              {/* Top border line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gray-800"></div>

              {["One", "Two", "Three", "Four"].map((step, index) => (
                <button
                  key={step}
                  onClick={() =>
                    setActiveStep(activeStep === index + 1 ? null : index + 1)
                  }
                  className={`text-left py-1.5 text-lg transition-colors duration-200 ${
                    activeStep === index + 1
                      ? "text-[#FF6B6B]"
                      : "text-gray-400 hover:text-[#FF6B6B]"
                  }`}
                >
                  {step}
                </button>
              ))}

              {/* Bottom border line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-800"></div>
            </div>
          </div>

          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              {activeStep && (
                <motion.div
                  key={`card-${activeStep}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#0A0A0A] rounded-2xl p-8 absolute top-0 left-0 right-0 w-full max-w-[600px]"
                >
                  <div className="w-10 h-10 rounded-full bg-[#4D1C1C] text-[#FF6B6B] flex items-center justify-center mb-6 text-lg font-medium">
                    {activeStep}
                  </div>
                  <h4 className="text-2xl font-semibold mb-4 text-white">
                    {processSteps[activeStep - 1].title}
                  </h4>
                  <p className="text-[#8B8B8B] text-lg leading-relaxed">
                    {processSteps[activeStep - 1].description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
