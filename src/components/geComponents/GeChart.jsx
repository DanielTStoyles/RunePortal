/** @format */

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PriceChart = ({ title, timeSeries }) => {
  const highTimeSeries = timeSeries.map((item) => item.avgHighPrice);
  const lowTimeSeries = timeSeries.map((item) => item.avgLowPrice);

  const dateOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const dateRange = timeSeries.map((item) =>
    new Date(item.timestamp * 1000).toLocaleString("en-US", dateOptions)
  );

  const options = {
    maintainAspectRatio: false,
    aspectRatio: 1,
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
          color: "#FFFFFF",
          font: {
            size: 18,
          },
          padding: { top: 20, left: 0, right: 0, bottom: 0 },
        },
        ticks: {
          color: "#FFFFFF",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price (gp)",
          color: "#FFFFFF",
          font: {
            size: 18,
          },
          padding: { top: 0, left: 0, right: 0, bottom: 20 },
        },
        ticks: {
          color: "#FFFFFF",
        },
      },
    },
    plugins: {
      title: {
        display: false,
        text: title,
        color: "#FFFFFF",
        font: {
          size: 36,
        },
      },
      legend: {
        labels: {
          color: "#FFFFFF",
        },
      },
    },
  };

  const data = {
    labels: dateRange,
    datasets: [
      {
        label: "High Price Overtime",
        data: highTimeSeries,
        backgroundColor: "#f44336",
        borderColor: "#f44336",
        borderWidth: 1,
        tension: 0.1, // Adds some curvature to the line
        fill: false, // Removes the background fill under the line
      },
      {
        label: "Low Price Overtime",
        data: lowTimeSeries,
        backgroundColor: "#8bc34a",
        borderColor: "#8bc34a",
        borderWidth: 1,
        tension: 0.1,
        fill: false,
      },
    ],
  };

  return <Line data={data} options={options} />;
};

export default React.memo(PriceChart);
