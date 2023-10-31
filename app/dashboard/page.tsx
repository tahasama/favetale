"use client";
import React, { useState } from "react";
import UserManagement from "./UserManagement/page";
import DashboardOverview from "./DashboardOverview/page";
import { HiMenu } from "react-icons/hi";

const Dashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] =
    useState<any>("Dashboard Overview");

  const [open, setOpen] = useState(false);

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
      <header className="bg-teal-500 p-3 text-white relative">
        <nav className="ml-3 flex items-center gap-4">
          <h1 className="text-sm lg:text-2xl font-semibold">
            Manager Dashboard
          </h1>
          <p
            onClick={() => setOpen(!open)}
            className={`cursor-pointer sm:hidden absolute top-1.5 right-1.5 text-3xl ${
              open ? "text-indigo-200" : "text-white"
            }`}
          >
            <HiMenu />
          </p>
          <ul
            className={`flex items-center transform gap-4 ${
              open ? "scale-y-100" : "scale-y-0 sm:scale-y-100 "
            } transition-transform origin-top-right absolute right-0 top-9 p-1 rounded-b-lg bg-teal-600 sm:bg-transparent z-50 sm:relative sm:top-0 flex-col sm:flex-row`}
          >
            {Object.keys(components).map((menuItem) => (
              <li
                className={`hover:underline list-none lg:text-xl w-auto rounded-md font-semibold bg-teal-600 p-2 cursor-pointer`}
                key={menuItem}
              >
                <p onClick={() => handleMenuItemClick(menuItem)}>{menuItem}</p>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Navigation Menu */}

      {/* Main Content Area */}
      <main className="bg-white p-0 rounded-lg shadow-lg">
        {/* Content related to the selected feature will be displayed here */}
        <h2
          id="dashboard"
          className="text-2xl font-semibold mb-4 indent-4 md:indent-5 lg:indent-8 xl:indent-10"
        >
          Dashboard Overview
        </h2>
        {selectedMenuItem && components[selectedMenuItem]}
      </main>

      {/* Footer */}
      <footer className=" text-sm p-2 text-center">
        &copy; Your App Name 2023
      </footer>
    </div>
  );
};

export default Dashboard;