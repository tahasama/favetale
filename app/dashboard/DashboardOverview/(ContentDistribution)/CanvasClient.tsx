import Chart from "chart.js/auto";
import React, { useEffect } from "react";

const CanvasClient = ({ contentTypesData }: any) => {
  console.log(
    "🚀 ~ file: CanvasClient.tsx:5 ~ CanvasClient ~ contentTypesData:",
    contentTypesData.counts
  );
  useEffect(() => {
    const contentTypesChart = new Chart("contentTypesChart", {
      type: "pie",
      data: {
        labels: contentTypesData.labels,
        datasets: [
          {
            data: contentTypesData.counts,
            backgroundColor: [
              "rgba(75, 192, 192, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 205, 86, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(103, 102, 255, 0.6)",
            ],
            circumference: 180,
            rotation: -90,
          },
        ],
      },
      options: {
        radius: "100%",
        cutout: "25%",
      },
    });
  }, []);

  return <canvas id="contentTypesChart" width="400" height="200"></canvas>;
};

export default CanvasClient;
