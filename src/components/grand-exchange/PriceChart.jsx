/** @format */

import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Card, CardContent } from "@mui/material";

const PriceChart = ({ high, low, title }) => {
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
    labels: ["High Price", "Low Price"],
    datasets: [
      {
        title: "THIS IS THE TITLE",
        label: "Current High vs Low Price",
        data: [high, low],
        backgroundColor: ["#8bc34a", "#f44336"],
        borderColor: "#f44336",
        borderWidth: 1,
      },
    ],
  };

  return <Line data={data} options={options} />;
};

export default PriceChart;
