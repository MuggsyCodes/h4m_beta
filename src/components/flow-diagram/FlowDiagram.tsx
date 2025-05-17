"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  // ChevronRight,
  Activity,
  FileCheck,
  ClipboardCheck,
  FlaskConical,
  Pencil,
  Calendar,
  UserCheck,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import FlowNode from "./FlowNode";
import FlowConnector from "./FlowConnector";

export default function FlowDiagram() {
  const [selectedPath, setSelectedPath] = useState<"yes" | "no" | null>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Refs for step icons
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (activeStep !== null && stepRefs.current[activeStep]) {
      stepRefs.current[activeStep]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeStep, selectedPath]);

  const handlePathSelect = (path: "yes" | "no") => {
    setSelectedPath(path);
    setActiveStep(0);
  };

  const resetFlow = () => {
    setSelectedPath(null);
    setActiveStep(null);
  };

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  const yesPathSteps = [
    {
      title: "Review Blood Work",
      description: "Initial review of client's existing blood work",
      icon: FileCheck,
    },
    {
      title: "Analysis",
      description: "Detailed analysis of blood work results",
      icon: FlaskConical,
    },
    {
      title: "Recommendations",
      description: "Create personalized recommendations",
      icon: Pencil,
    },
    {
      title: "Schedule Consultation",
      description: "Book follow-up consultation",
      icon: Calendar,
    },
    {
      title: "Client Onboarding",
      description: "Complete the onboarding process",
      icon: UserCheck,
    },
  ];

  const noPathSteps = [
    {
      title: "Optimantra Onboarding Form",
      description: "New Client Questionnaire",
      icon: ClipboardCheck,
    },
    {
      title: "Request Blood Work",
      description: "Provide instructions for required tests",
      icon: Activity,
    },
    {
      title: "Schedule Physical",
      description: "Physical exam to make sure we have a solid baseline",
      icon: Calendar,
    },
    {
      title: "Meet Customer Care Coordinator",
      description: "Personalized game plan",
      icon: FileCheck,
    },
    {
      title: "Meet our Physician",
      description: "Quick telemedicine visit to review results",
      icon: UserCheck,
    },
    {
      title: "Your Products Ship",
      description: "Personalized products shipped to your door",
      icon: Calendar,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Client Intake Process
      </h2>

      <div className="relative">
        <div
          className={cn(
            "transition-all duration-500 ease-in-out",
            selectedPath ? "opacity-50 scale-95" : "opacity-100 scale-100"
          )}
        >
          <Card className="p-8 max-w-md mx-auto text-center bg-neutral-900 border-neutral-800">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Got Blood Work?
            </h3>
            <p className="text-muted-foreground mb-6">
              Please select whether you already have recent blood work results
              available.
            </p>
            <div className="flex justify-center gap-4">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(220, 38, 38, 0)",
                    "0 0 20px 2px rgba(220, 38, 38, 0.3)",
                    "0 0 0 0 rgba(220, 38, 38, 0)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-md"
              >
                <Button
                  onClick={() => handlePathSelect("yes")}
                  disabled={selectedPath !== null}
                  variant="outline"
                  className="border-red-800 text-red-500 hover:bg-red-950 hover:text-red-400 transition-colors duration-300"
                >
                  Yes
                </Button>
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(220, 38, 38, 0)",
                    "0 0 20px 2px rgba(220, 38, 38, 0.3)",
                    "0 0 0 0 rgba(220, 38, 38, 0)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.75,
                }}
                className="rounded-md"
              >
                <Button
                  onClick={() => handlePathSelect("no")}
                  disabled={selectedPath !== null}
                  variant="outline"
                  className="border-red-800 text-red-500 hover:bg-red-950 hover:text-red-400 transition-colors duration-300"
                >
                  No
                </Button>
              </motion.div>
            </div>
          </Card>
        </div>

        <AnimatePresence>
          {selectedPath && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-16 relative"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-medium text-white">
                  {selectedPath === "yes"
                    ? "Process with Existing Blood Work"
                    : "Process without Blood Work"}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetFlow}
                  className="text-neutral-400 hover:text-red-500 hover:bg-red-950/20"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>

              <div className="relative pb-8 overflow-x-auto">
                <div className="min-w-[800px] flex flex-col items-center">
                  <div className="flex justify-between items-center w-full max-w-5xl">
                    {(selectedPath === "yes" ? yesPathSteps : noPathSteps).map(
                      (step, index) => (
                        <div
                          key={index}
                          className="relative flex flex-col items-center"
                          ref={(el) => {
                            stepRefs.current[index] = el;
                          }}
                        >
                          <FlowNode
                            title={step.title}
                            description={step.description}
                            icon={step.icon}
                            isActive={activeStep === index}
                            onClick={() => handleStepClick(index)}
                          />

                          {index <
                            (selectedPath === "yes"
                              ? yesPathSteps
                              : noPathSteps
                            ).length -
                              1 && (
                            <FlowConnector
                              isActive={
                                activeStep !== null && activeStep > index
                              }
                            />
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {activeStep !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8"
                >
                  <Card className="p-6 max-w-3xl mx-auto bg-neutral-900 border-neutral-800">
                    <h4 className="text-xl font-medium mb-3 text-white">
                      {selectedPath === "yes"
                        ? yesPathSteps[activeStep].title
                        : noPathSteps[activeStep].title}
                    </h4>
                    <p className="text-muted-foreground">
                      {selectedPath === "yes"
                        ? `Detailed information about the ${yesPathSteps[activeStep].title.toLowerCase()} step in our client intake process. This step is crucial for clients who already have blood work results.`
                        : `Detailed information about the ${noPathSteps[activeStep].title.toLowerCase()} step in our client intake process. This step helps new clients become part of the H4M Team.`}
                    </p>
                    <div className="flex justify-between mt-6 items-center">
                      <Button
                        variant="outline"
                        disabled={activeStep === 0}
                        onClick={() =>
                          setActiveStep((prev) =>
                            prev !== null ? prev - 1 : null
                          )
                        }
                        className="border-red-800 text-red-500 hover:bg-red-950 hover:text-red-400"
                      >
                        Previous
                      </Button>
                      {selectedPath === "no" &&
                        noPathSteps[activeStep].title ===
                          "Optimantra Onboarding Form" && (
                          <motion.div
                            animate={{
                              scale: [1, 1.05, 1],
                              boxShadow: [
                                "0 0 0 0 rgba(220, 38, 38, 0)",
                                "0 0 20px 2px rgba(220, 38, 38, 0.3)",
                                "0 0 0 0 rgba(220, 38, 38, 0)",
                              ],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="flex justify-center rounded-md"
                          >
                            <a
                              href="https://www.optimantra.com/optimus/patient/patientaccess/prospects?pid=Zm8yWlliS1dGaDVXRXN0bTIyOS9Pdz09"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button className="bg-red-600 hover:bg-red-700 text-white">
                                Start Form
                              </Button>
                            </a>
                          </motion.div>
                        )}
                      <Button
                        disabled={
                          activeStep ===
                          (selectedPath === "yes"
                            ? yesPathSteps.length - 1
                            : noPathSteps.length - 1)
                        }
                        onClick={() =>
                          setActiveStep((prev) =>
                            prev !== null ? prev + 1 : null
                          )
                        }
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        Next
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
