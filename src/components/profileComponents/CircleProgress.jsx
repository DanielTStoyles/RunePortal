/** @format */

import React from "react";

const CircleProgress = ({ progress }) => {
  const radius = 12;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg width="50" height="50">
        <circle
          stroke="gray"
          fill="transparent"
          strokeWidth="5"
          strokeDasharray={circumference}
          style={{ strokeDashoffset }}
          r={radius}
          cx="25"
          cy="25"
        />
        <circle
          stroke="blue"
          fill="transparent"
          strokeWidth="5"
          strokeDasharray={circumference}
          r={radius}
          cx="25"
          cy="25"
        />
      </svg>
    </div>
  );
};

export default CircleProgress;
