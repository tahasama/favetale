"use client";

import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const DashboardOverview = () => {
  const userGrowthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    totalUsers: [100, 150, 220, 300, 400, 500],
    activeUsers: [80, 120, 180, 250, 350, 450],
  };

  const contentSubmissionData = {
    labels: ["Images", "Blogs", "Stories", "Meetups", "Forum Posts"],
    counts: [100, 50, 75, 30, 120],
  };

  const contentTypesData = {
    labels: ["Images", "Blogs", "Stories", "Meetups", "Forum Posts"],
    counts: [30, 20, 15, 10, 25], // Placeholder data
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
              backgroundColor: "rgba(75, 192, 192, 0.6)",
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
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
          },
          {
            label: "Revenue",
            data: storeSalesData.revenue,
            borderColor: "rgba(255, 99, 132, 1)",
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
          },
        ],
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
    <div id="dashboard" className="bg-gray-100 min-h-screen w-full p-6">
      <div className="flex flex-col w-full gap-6">
        <div className="flex w-full gap-7 justify-around">
          {/* Total Users */}
          <div className="bg-teal-300 p-4 rounded-lg shadow-lg flex-grow">
            <h3 className="text-lg font-semibold text-white">Total Users</h3>
            <p className="text-2xl font-bold text-white">1,234</p>
          </div>

          {/* Active Users */}
          <div className="bg-sky-300 p-4 rounded-lg shadow-lg flex-grow">
            <h3 className="text-lg font-semibold text-white">Active Users</h3>
            <p className="text-2xl font-bold text-white">789</p>
          </div>

          {/* Content Submissions */}
          <div className="bg-indigo-300 p-4 rounded-lg shadow-lg flex-grow">
            <h3 className="text-lg font-semibold text-white">
              Content Submissions
            </h3>
            <p className="text-2xl font-bold text-white">2,345</p>
          </div>
          <div className="bg-purple-300 p-4 rounded-lg shadow-lg flex-grow">
            <h3 className="text-lg font-semibold text-white">Total Sold</h3>
            <p className="text-2xl font-bold text-white">18,345 Dh</p>
          </div>
        </div>
        <div className="flex w-full justify-around gap-4">
          {/* User Growth Chart */}
          <div className="bg-purple-200 p-4 rounded-lg shadow-lg flex-grow w-1/3">
            <h3 className="text-lg font-semibold text-white">User Growth</h3>
            <canvas id="userGrowthChart" width="400" height="200"></canvas>
          </div>

          {/* Content Submission Trends Chart */}
          <div className="bg-teal-200 p-4 rounded-lg shadow-lg flex-grow w-1/3">
            <h3 className="text-lg font-semibold text-white">
              Content Submission Trends
            </h3>
            <canvas
              id="contentSubmissionTrendsChart"
              width="400"
              height="200"
            ></canvas>
          </div>
        </div>
        <div className="flex w-full justify-around gap-4">
          {/* Content Type Distribution Chart */}
          <div className="bg-sky-200 p-4 rounded-lg shadow-lg flex-grow w-1/3">
            <h3 className="text-lg font-semibold text-white">
              Content Type Distribution
            </h3>
            <canvas
              id="contentTypesChart"
              width="300"
              height="150"
              className="scale-[.8]"
            ></canvas>
          </div>
          {/* Store Sales and Revenue Chart */}
          <div className="bg-indigo-200 p-4 rounded-lg shadow-lg flex-grow w-1/3">
            <h3 className="text-lg font-semibold text-white">
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
