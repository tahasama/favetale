import Chart from "chart.js/auto";
import React, { useEffect } from "react";

const CanvasClient = ({ contentSubmissionTrendsData }: any) => {
  console.log(
    "🚀 ~ file: CanvasClient.tsx:5 ~ CanvasClient ~ contentSubmissionTrendsData:",
    contentSubmissionTrendsData
  );
  useEffect(() => {
    const contentSubmissionTrendsChart = new Chart(
      "contentSubmissionTrendsChart",
      {
        type: "bar",
        data: {
          labels: contentSubmissionTrendsData.labels,
          datasets: [
            {
              label: "Content Submissions",
              data: contentSubmissionTrendsData.counts,
              backgroundColor: "rgb(125 111 235)",
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      }
    );
  }, []);

  return (
    <canvas id="contentSubmissionTrendsChart" width="400" height="200"></canvas>
  );
};

export default CanvasClient;
