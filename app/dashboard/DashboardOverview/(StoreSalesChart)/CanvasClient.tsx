"use client";
import Chart from "chart.js/auto";
import React, { useEffect } from "react";

const CanvasClient = ({ storeSalesData }: any) => {
  useEffect(() => {
    const storeSalesChart = new Chart("storeSalesChart", {
      type: "line",
      data: {
        labels: storeSalesData.labels,
        datasets: [
          {
            label: "Sales",
            data: storeSalesData.sales,
            borderColor: "rgba(75, 042, 192, 1)",
            borderWidth: 2,
          },
          {
            label: "Revenue",
            data: storeSalesData.revenue,
            borderColor: "rgba(255, 149, 132, 1)",
            borderWidth: 2,
          },
        ],
      },
    });
  }, []);

  return <canvas id="storeSalesChart" width="400" height="200"></canvas>;
};

export default CanvasClient;
