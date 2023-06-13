/** @format */

import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

const PriceChart = ({ itemData, itemId }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["High Price", "Low Price"],
      datasets: [
        {
          label: "High vs Low Price",
          data: [itemData.data[itemId].high, itemData.data[itemId].low],
          Color: "rgb(0,0,0)",
          backgroundColor: "rgba(53,162,235,0.4)",
        },
      ],
    });

    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "High vs Low Price",
        },
      },
    });
  }, []);

  return <Bar options={chartOptions} data={chartData} />;
};

export default PriceChart;
