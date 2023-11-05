"use client";
import React, { useEffect, useState } from "react";
import UserManagement from "./UserManagement/page";
import DashboardOverview from "./DashboardOverview/page";
import { HiMenu } from "react-icons/hi";
import ContentModeration from "./content/page";
import StoreManagement from "./StoreManagement/page";
import EventManagement from "./Event Management/page";

const Dashboard = () => {
  const storedTab =
    (typeof window !== "undefined" &&
      localStorage.getItem("dashboardActiveTab")) ||
    "Dashboard Overview";
  const [selectedMenuItem, setSelectedMenuItem] = useState<any>(storedTab);

  useEffect(() => {
    typeof window !== "undefined" &&
      localStorage.setItem("dashboardActiveTab", selectedMenuItem);
  }, [selectedMenuItem]);

  const [open, setOpen] = useState(false);

  const handleMenuItemClick = (menuItem: any) => {
    setSelectedMenuItem(menuItem);
    setOpen(!open);
  };

  const components: any = {
    "Dashboard Overview": <DashboardOverview />,
    "User Management": <UserManagement />,
    "Content Moderation": <ContentModeration />,
    "Store Management": <StoreManagement />,
    "Event Management": <EventManagement />,
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
            className={`cursor-pointer sm:hidden  absolute top-1.5 right-1.5 text-3xl ${
              open ? "text-indigo-200" : "text-white"
            }`}
          >
            <HiMenu />
          </p>
          <ul
            className={`flex items-center transform gap-1 md:gap-4 ${
              open ? "scale-y-100" : "scale-y-0 sm:scale-y-100 "
            } transition-transform origin-top-right absolute right-0 top-11 p-1 rounded-b-lg bg-teal-500 sm:bg-transparent z-50 sm:relative sm:top-0 flex-col sm:flex-row`}
          >
            {Object.keys(components).map((menuItem) => (
              <li
                className={`hover:animate-buttonHover list-none text-xs lg:text-xl border-b-2 md:border-none backdrop-brightness-95 w-full md:w-auto rounded-md md:backdrop-brightness-75 py-3 md:p-1.5 cursor-pointer`}
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
      <main className="bg-white p-0 rounded-lg shadow-lg  ">
        {/* Content related to the selected feature will be displayed here */}

        {selectedMenuItem && components[selectedMenuItem]}
      </main>
    </div>
  );
};

export default Dashboard;
