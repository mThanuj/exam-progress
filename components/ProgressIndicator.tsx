import React from "react";

interface ProgressIndicatorProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  progress,
  size = 24,
  strokeWidth = 4,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative inline-block w-10 h-10 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-14 lg:h-14">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#3b82f6"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold text-blue-500">{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressIndicator;
