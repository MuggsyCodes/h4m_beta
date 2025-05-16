"use client";

import { motion } from "framer-motion";
import { DivideIcon as LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlowNodeProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
}

export default function FlowNode({
  title,
  description,
  icon: Icon,
  isActive,
  onClick,
}: FlowNodeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "w-32 cursor-pointer relative z-10",
        "transition-all duration-300 ease-in-out"
      )}
    >
      <div
        className={cn(
          "rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-3",
          "border-2 transition-all duration-300",
          isActive
            ? "bg-red-950 border-red-600 text-red-500"
            : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-red-800 hover:text-red-400"
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div className="text-center">
        <h4
          className={cn(
            "font-medium text-sm mb-1 transition-colors",
            isActive ? "text-red-500" : "text-neutral-200"
          )}
        >
          {title}
        </h4>
        <p className="text-xs text-muted-foreground hidden md:block">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
