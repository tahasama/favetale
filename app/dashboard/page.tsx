import React from "react";
import UserManagement from "./UserManagement/page";

const Dashboard = () => {
  return (
    <div className="bg-teal-100 min-h-screen mt-24">
      {/* Header */}
      <header className="bg-teal-500 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Manager Dashboard</h1>
          <button className="text-sm underline">Log Out</button>
        </div>
      </header>

      <div className="flex gap-1 mt-6">
        {/* Navigation Menu */}
        <nav className="bg-slate-50 p-4 rounded-lg shadow-lg w-60">
          <h2 className="text-lg font-semibold mb-2">Menu</h2>
          <ul>
            <li className="mb-2 hover:underline">
              <a href="#dashboard">Dashboard Overview</a>
            </li>
            <li className="mb-2 hover:underline">
              <a href="#user">User Management</a>
            </li>
            <li className="mb-2 hover:underline">
              <a href="#content">Content Moderation</a>
            </li>
            <li className="mb-2 hover:underline">
              <a href="#store">Store Management</a>
            </li>
            <li className="mb-2 hover:underline">
              <a href="#event">Event Management</a>
            </li>
          </ul>
        </nav>

        {/* Main Content Area */}
        <main className="bg-white p-4 mx-2 w-full rounded-lg shadow-lg">
          {/* Content related to the selected feature will be displayed here */}
          <h2 id="dashboard" className="text-2xl font-semibold mb-4">
            Dashboard Overview
          </h2>
          <UserManagement />
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 text-sm p-2 text-center">
        &copy; Your App Name 2023
      </footer>
    </div>
  );
};

export default Dashboard;
