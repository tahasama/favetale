import React, { useEffect, useState } from "react";
import UserManagement from "./UserManagement/page";
import DashboardOverview from "./DashboardOverview/page";
import { HiMenu } from "react-icons/hi";
import ContentModeration from "./content/page";
import StoreManagement from "./StoreManagement/page";
import EventManagement from "./Event Management/page";
import Link from "next/link";
import ClientComponentPage from "./ClientComponentPage";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  // const storedTab =
  //   (typeof window !== "undefined" &&
  //     localStorage.getItem("dashboardActiveTab")) ||
  //   "Dashboard Overview";
  // const [selectedMenuItem, setSelectedMenuItem] = useState<any>(storedTab);

  // useEffect(() => {
  //   typeof window !== "undefined" &&
  //     localStorage.setItem("dashboardActiveTab", selectedMenuItem);
  // }, [selectedMenuItem]);

  // const [open, setOpen] = useState(false);

  // const handleMenuItemClick = (menuItem: any) => {
  //   setSelectedMenuItem(menuItem);
  //   setOpen(!open);
  // };

  const components: any = {
    "Dashboard Overview": "DashboardOverview",
    "User Management": "UserManagement",
    "Content Moderation": "ContentModeration",
    "Store Management": "StoreManagement",
    "Event Management": "EventManagement",
  };
  return (
    <div className="bg-tealLight relative top-20 h-[calc(100vh-5rem)]">
      {/* Header */}
      {/* <ClientComponentPage /> */}

      {/* Navigation Menu */}

      {/* Main Content Area */}
      <main className="bg-white p-0 rounded-lg shadow-lg mt-40 ">
        {/* Content related to the selected feature will be displayed here */}
        BROOOOOOo
      </main>
    </div>
  );
};

export default Dashboard;
