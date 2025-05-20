"use client";
import React, { useState } from "react";
import { Zap, BookOpen, Brain, HeartPulse } from "lucide-react";
import "./PulsatingOrb.css";

interface PulsatingOrbProps {
  text?: string;
  className?: string;
}

const PulsatingOrb: React.FC<PulsatingOrbProps> = ({
  text = "Get Educated",
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (option: string) => {
    console.log(`Selected: ${option}`);
    setIsHovered(false);
  };

  return (
    <div className={`orb-container ${className}`}>
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => !isHovered && setIsHovered(true)}
      >
        <button
          className="orb-button"
          aria-expanded={isHovered}
          aria-label="Open education menu"
        >
          <div className="orb-outer">
            <div className="orb-inner">
              <BookOpen className="orb-icon" />
            </div>
          </div>
          <div className="orb-pulse"></div>
          <div className="orb-pulse delay-1"></div>
          <div className="orb-pulse delay-2"></div>
        </button>

        <div className={`orb-menu ${isHovered ? "active" : ""}`}>
          <button
            className="orb-menu-item"
            onClick={() => handleClick("Health Insights")}
            aria-label="View Health Insights"
          >
            <HeartPulse className="orb-menu-item-icon text-pink-500" />
            <span>Health Insights</span>
          </button>
          <button
            className="orb-menu-item"
            onClick={() => handleClick("Expert Knowledge")}
            aria-label="Access Expert Knowledge"
          >
            <Brain className="orb-menu-item-icon text-purple-500" />
            <span>Expert Knowledge</span>
          </button>
          <button
            className="orb-menu-item"
            onClick={() => handleClick("Quick Guides")}
            aria-label="Browse Quick Guides"
          >
            <Zap className="orb-menu-item-icon text-amber-500" />
            <span>Quick Guides</span>
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <span className="text-lg font-medium text-white">{text}</span>
      </div>
    </div>
  );
};

export default PulsatingOrb;
