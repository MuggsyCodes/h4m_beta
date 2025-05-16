"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlowConnectorProps {
  isActive: boolean;
}

export default function FlowConnector({ isActive }: FlowConnectorProps) {
  return (
    <div className="absolute top-8 w-full h-0.5 bg-neutral-800 -z-10">
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: isActive ? "100%" : "0%" }}
        transition={{ duration: 0.5 }}
        className={cn("h-full bg-red-600")}
      />
    </div>
  );
}
