import Chart from "chart.js/auto";
import React from "react";

const ContentDistribution = () => {
  const contentTypesData = {
    labels: ["Images", "Blogs", "Stories", "Meetups", "Forum Posts"],
    counts: [30, 20, 15, 10, 25],
  };

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
  return (
    <div className="bg-indigo-50 rounded-lg shadow-lg  lg:w-6/12 xl:w-6/12 md:scale-95 lg:scale-100 p-2">
      <h3 className="text-lg font-semibold text-slate-500">
        Content Type Distribution
      </h3>
      <div className="h-52 lg:h-80 grid place-items-center w-full">
        <canvas id="contentTypesChart" width="300" height="150"></canvas>
      </div>
    </div>
  );
};

export default ContentDistribution;
