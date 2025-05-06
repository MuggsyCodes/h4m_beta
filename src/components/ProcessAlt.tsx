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
    title: "Obtaining Bloodwork",
    description:
      "Get your diagnostic bloodwork done at one of our partner laboratories. We'll provide you with a requisition form and help you find the nearest location for convenient testing.",
  },
  {
    id: 2,
    title: "Onboarding Survey",
    description:
      "Complete our comprehensive onboarding survey to help us understand your health goals, medical history, and current symptoms. This information helps us create a personalized approach to your care.",
  },
  /*
  {
    id: 3,
    title: "Patient Forms / Waivers",
    description:
      "Complete all necessary medical forms and waivers electronically through our secure patient portal. This ensures we have all required documentation before proceeding with your treatment plan.",
  }
      */ {
    id: 3,
    title: "Call with Customer Care Coordinator",
    description:
      "Connect with your dedicated Customer Care Coordinator who will guide you through the process, answer any questions, and ensure you're comfortable with the next steps in your journey.",
  },
  {
    id: 4,
    title: "Invoice Payment",
    description:
      "Review and process payment for your personalized treatment plan. We offer various payment options and will provide a detailed breakdown of all costs involved.",
  },
  {
    id: 5,
    title: "Telemedicine Call with Our Dr",
    description:
      "Have a comprehensive video consultation with one of our experienced physicians to discuss your test results, treatment options, and create your personalized optimization plan.",
  },
  {
    id: 6,
    title: "Shipment",
    description:
      "Receive your prescribed medications and supplements directly to your door, carefully packaged and shipped with tracking information provided for your convenience.",
  },
];

export default function ProcessAlt() {
  const [activeStep, setActiveStep] = useState<number | null>(1);

  return (
    <section
      id="process"
      className="bg-black text-white py-16 px-4 md:px-8"
      style={{ scrollMarginTop: "90px" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Mobile Header */}
        <div className="md:hidden text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our expert process.</h2>
          <p className="text-gray-400 text-lg">
            Our 6 step process was developed with convenience in mind. We
            partner with medical providers to bring high quality treatment
            straight to your door.
          </p>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block max-w-[50%] mb-12">
          <h2 className="text-3xl font-bold mb-4">Our expert process.</h2>
          <p className="text-gray-400 text-lg">
            Our comprehensive 6-step process ensures you receive the highest
            quality care and support throughout your optimization journey.
          </p>
        </div>

        {/* Mobile Steps Navigation */}
        <div className="md:hidden mb-8">
          <h3 className="text-2xl text-center mb-6">The 6 Steps</h3>
          <div className="flex justify-center gap-4 overflow-x-auto pb-2 px-4">
            {["One", "Two", "Three", "Four", "Five", "Six"].map(
              (label, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setActiveStep(activeStep === index + 1 ? null : index + 1)
                  }
                  className={`text-lg whitespace-nowrap transition-colors duration-200 ${
                    activeStep === index + 1
                      ? "text-[#FF6B6B]"
                      : "text-[#4A9C9C] hover:text-[#FF6B6B]"
                  }`}
                >
                  {label}
                </button>
              )
            )}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            {activeStep && (
              <motion.div
                key={`card-${activeStep}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                className="bg-[#0A0A0A] rounded-2xl p-6"
              >
                <div className="w-10 h-10 rounded-full bg-[#4D1C1C] text-[#FF6B6B] flex items-center justify-center mb-6 text-lg font-medium">
                  {activeStep}
                </div>
                <h4 className="text-2xl font-semibold mb-4 text-white">
                  {processSteps[activeStep - 1].title}
                </h4>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {processSteps[activeStep - 1].description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop View - Original Layout */}
        <div className="hidden md:flex gap-16">
          <div className="w-[240px]">
            <h3 className="text-2xl font-semibold mb-4">The 6 Steps</h3>
            <div className="relative flex flex-col space-y-2 py-4">
              <div className="absolute top-0 left-0 right-0 h-px bg-gray-800"></div>
              {processSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() =>
                    setActiveStep(activeStep === index + 1 ? null : index + 1)
                  }
                  className={`text-left py-1.5 text-lg transition-colors duration-200 ${
                    activeStep === index + 1
                      ? "text-[#FF6B6B]"
                      : "text-gray-400 hover:text-[#FF6B6B]"
                  }`}
                >
                  Step {index + 1}
                </button>
              ))}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-800"></div>
            </div>
          </div>

          <div className="flex-1 flex items-center relative">
            <AnimatePresence mode="wait">
              {activeStep && (
                <motion.div
                  key={`card-${activeStep}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#0A0A0A] rounded-2xl p-8 w-full max-w-[600px]"
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
