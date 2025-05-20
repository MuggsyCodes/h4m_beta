import React from "react";
import { BookOpen } from "lucide-react";
import "./styles.css";

interface NeomorphicButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
}

const NeomorphicButton: React.FC<NeomorphicButtonProps> = ({
  text = "Get Educated",
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`neomorphic-button ${className}`}
      onClick={onClick}
      aria-label={text}
    >
      <div className="neomorphic-inner">
        <div className="neomorphic-icon-wrapper">
          <BookOpen className="neomorphic-icon" />
        </div>
        <span className="neomorphic-text">{text}</span>
      </div>
      <div className="neomorphic-shadow"></div>
    </button>
  );
};

export default NeomorphicButton;
