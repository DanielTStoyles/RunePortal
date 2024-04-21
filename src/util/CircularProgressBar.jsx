/** @format */

import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBarComponent = ({ percentage }) => {
  return (
    <div style={{ width: "px", height: "25px" }}>
      <CircularProgressbar
        value={percentage}
        styles={{
          root: { width: "100%", height: "100%" },
          path: {
            // Path color
            stroke: `#5E4979`,
            strokeWidth: "10",
          },
          trail: {
            // Trail color
            stroke: "#74717A",
            strokeWidth: "10",
          },
          text: {
            // Text color
            fill: "#f88",
            fontSize: "16px",
          },
        }}
      />
    </div>
  );
};

export default CircularProgressBarComponent;
