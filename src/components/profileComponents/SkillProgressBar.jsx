/** @format */

// ProgressBar.jsx
import React from "react";
import styles from "../style/ProgressBarStyle.module.css"; // Assume you have this CSS file

const ProgressBar = ({ progress }) => {
  return (
    <div className={styles.progressBarContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
