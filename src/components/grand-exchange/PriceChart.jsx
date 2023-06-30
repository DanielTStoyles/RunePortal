/** @format */

import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Card, CardContent } from "@mui/material";

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
    plugins: {
      title: {
        display: true,
        text: `${title}`,
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
        backgroundColor: ["#8bc34a", "#f44336"],
        borderColor: "#f44336",
        borderWidth: 1,
      },

      {
        label: "Low Price Overtime",
        data: lowTimeSeries,
        timeSeries,
        backgroundColor: ["#8bc34a", "#f44336"],
        borderColor: "#f44336",
        borderWidth: 1,
      },
    ],
  };

  return <Line data={data} options={options} />;
};

export default React.memo(PriceChart);
