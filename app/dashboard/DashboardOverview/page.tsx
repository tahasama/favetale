"use client";

import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const DashboardOverview = () => {
  const userGrowthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    totalUsers: [100, 150, 220, 300, 400, 500],
    activeUsers: [80, 120, 180, 250, 350, 450],
  };

  const contentTypesData = {
    labels: ["Images", "Blogs", "Stories", "Meetups", "Forum Posts"],
    counts: [30, 20, 15, 10, 25],
  };

  // Add this code to your DashboardOverview component
  const storeSalesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    sales: [5000, 6000, 4500, 7000, 8000, 7500], // Placeholder data
    revenue: [3000, 4000, 3500, 5500, 6000, 5500], // Placeholder data
  };

  // Add this code to your DashboardOverview component
  const contentSubmissionTrendsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    counts: [100, 150, 120, 180, 200, 250], // Placeholder data
  };

  useEffect(() => {
    // Create and render content submission trends chart
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

    // Create and render store sales and revenue chart
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

    // Create and render content type distribution chart
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

    // Create and render user growth chart
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
  return (
    <div id="dashboard" className="bg-tealLight min-h-screen w-full">
      <h2
        id="dashboard"
        className="text-2xl font-semibold my-4 indent-4 md:indent-5 lg:indent-8 xl:indent-10"
      >
        Dashboard Overview
      </h2>
      <div className="flex flex-col w-full gap-">
        <div className="flex flex-row flex-wrap w-full items-center gap-3 md:gap-4 mb-4 text-center justify-around scale-95">
          <div className="bg-teal-300 p-1 md:p-3 rounded-lg shadow-lg w-52 xl:w-60 flex-grow">
            <h3 className="text-base md:text-lg font-semibold text-white">
              Total Users
            </h3>
            <p className="text-lg md:text-2xl font-bold text-white">1,234</p>
          </div>

          <div className="bg-sky-300 p-1 md:p-3 rounded-lg shadow-lg w-52 xl:w-60 flex-grow">
            <h3 className="text-base md:text-lg font-semibold text-white">
              Active Users
            </h3>
            <p className="text-lg md:text-2xl font-bold text-white">789</p>
          </div>

          <div className="bg-indigo-300 p-1 md:p-3 rounded-lg shadow-lg w-52 xl:w-60 flex-grow">
            <h3 className="text-base md:text-lg font-semibold text-white">
              Content Submissions
            </h3>
            <p className="text-lg md:text-2xl font-bold text-white">2,345</p>
          </div>
          <div className="bg-purple-300 p-1 md:p-3 rounded-lg shadow-lg w-52 xl:w-60 flex-grow">
            <h3 className="text-base md:text-lg font-semibold text-white">
              Total Sold
            </h3>
            <p className="text-lg md:text-2xl font-bold text-white">
              18,345 Dh
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-around gap-5 p-3 scale-95">
          <div className="bg-indigo-50 rounded-lg shadow-lg  lg:w-6/12 xl:w-6/12 md:scale-95 lg:scale-100 p-2">
            <h3 className="text-lg font-semibold text-slate-500">
              User Growth
            </h3>
            <canvas id="userGrowthChart" width="400" height="200"></canvas>
          </div>

          <div className="bg-indigo-50 rounded-lg shadow-lg  lg:w-6/12 xl:w-6/12 md:scale-95 lg:scale-100 p-2">
            <h3 className="text-lg font-semibold text-slate-500">
              Content Submission Trends
            </h3>
            <canvas
              id="contentSubmissionTrendsChart"
              width="400"
              height="200"
            ></canvas>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-around gap-5 p-3 scale-95">
          {/* Content Type Distribution Chart */}
          <div className="bg-indigo-50 rounded-lg shadow-lg  lg:w-6/12 xl:w-6/12 md:scale-95 lg:scale-100 p-2">
            <h3 className="text-lg font-semibold text-slate-500">
              Content Type Distribution
            </h3>
            <div className="h-52 lg:h-80 grid place-items-center w-full">
              <canvas id="contentTypesChart" width="300" height="150"></canvas>
            </div>
          </div>
          {/* Store Sales and Revenue Chart */}
          <div className="bg-indigo-50 rounded-lg shadow-lg  lg:w-6/12 xl:w-6/12 md:scale-95 lg:scale-100 p-2">
            <h3 className="text-lg font-semibold text-slate-500">
              Store Sales and Revenue
            </h3>
            <canvas id="storeSalesChart" width="400" height="200"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
