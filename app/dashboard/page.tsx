"use client";
import React, { useState } from "react";
import UserManagement from "./UserManagement/page";
import DashboardOverview from "./DashboardOverview/page";

const Dashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] =
    useState<any>("Dashboard Overview");

  const handleMenuItemClick = (menuItem: any) => {
    setSelectedMenuItem(menuItem);
  };

  const components: any = {
    "Dashboard Overview": <DashboardOverview />,
    "User Management": <UserManagement />,
    // 'Content Moderation': <ContentModerationComponent />,
    // 'Store Management': <StoreManagementComponent />,
    // 'Event Management': <EventManagementComponent />,
  };
  return (
    <div className="bg-tealLight relative top-20 h-[calc(100vh-5rem)]">
      {/* Header */}
      <header className="bg-teal-500 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Manager Dashboard</h1>
          <button className="text-sm underline">Log Out</button>
        </div>
      </header>

      <div className="flex gap-1 mt-6">
        {/* Navigation Menu */}
        <nav className="bg-slate-50 p-4  rounded-lg shadow-lg w-60">
          <h2 className="text-lg font-semibold mb-2">Menu</h2>
          <ul>
            {Object.keys(components).map((menuItem) => (
              <li className="mb-2 hover:underline list-none" key={menuItem}>
                <p onClick={() => handleMenuItemClick(menuItem)}>{menuItem}</p>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content Area */}
        <main className="bg-white p-4 mx-2 w-full rounded-lg shadow-lg">
          {/* Content related to the selected feature will be displayed here */}
          <h2 id="dashboard" className="text-2xl font-semibold mb-4">
            Dashboard Overview
          </h2>
          {selectedMenuItem && components[selectedMenuItem]}
        </main>
      </div>

      {/* Footer */}
      <footer className=" text-sm p-2 text-center">
        &copy; Your App Name 2023
      </footer>
    </div>
  );
};

export default Dashboard;
