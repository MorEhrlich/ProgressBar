// src/ProgressBar.js
import React from 'react';
import './ProgressBar.css'; // Create this file for custom styles

const ProgressBar = ({ startDate, endDate }) => {
  const calculateProgress = () => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Calculate the total duration
    const totalDuration = end - start;
    // Calculate the elapsed time
    const elapsedTime = now - start;

    // Calculate the progress percentage
    const progress = Math.min((elapsedTime / totalDuration) * 100, 100);

    return progress;
  };

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${calculateProgress()}%` }} />
      <span className="progress-label">{Math.round(calculateProgress())}%</span>
    </div>
  );
};

export default ProgressBar;
