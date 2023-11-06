import Chart from "chart.js/auto";
import React, { useEffect } from "react";

const CanvasClient = ({ userGrowthData }: any) => {
  useEffect(() => {
    const userGrowthChart = new Chart("userGrowthChart", {
      type: "line",
      data: {
        labels: userGrowthData.labels,
        datasets: [
          {
            label: "Total Users",
            data: userGrowthData.totalUsers,
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
          },
          {
            label: "Active Users",
            data: userGrowthData.activeUsers,
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 2,
          },
        ],
      },
    });
  }, []);

  return <canvas id="userGrowthChart" width="400" height="200"></canvas>;
};

export default CanvasClient;
