"use client";
import { useState } from "react";
import Forums from "./components/Forums";
import Meetups from "./components/Meetups";
import Events from "./components/Events";

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState<string>("Forums"); // Initial active tab

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const tabs = ["Forums", "Meetups", "Events", "Questions"];

  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <div className="sticky top-20 z-50 flex justify-center  w-full bg-tealLight">
          {tabs.map((tab) => (
            <TabButton
              tabName={tab}
              isActive={activeTab === tab}
              onClick={() => handleTabClick(tab)}
            />
          ))}
        </div>
      </div>
      <div>
        {/* Content for the active tab */}
        {activeTab === "Forums" && <Forums />}
        {activeTab === "Meetups" && <Meetups />}
        {activeTab === "Events" && <Events />}
        {activeTab === "Questions" && <Questions />}
      </div>
    </div>
  );
};

const TabButton = ({ tabName, isActive, onClick }: any) => {
  return (
    <button
      className={`px-4 py-4 bg-gray-100  text-gray-600 rounded-t-lg ${
        isActive ? "bg-indigo-50 border-b-2 border-teal-500" : ""
      } transition-colors duration-500 hover:bg-purple-100`}
      onClick={onClick}
    >
      {tabName}
    </button>
  );
};

// Define the content components for each tab
// const Forums = () => {
//   // Render content for the "Pet Images" tab
//   return <div>HHHHHHHHh</div>;
// };

// const Meetups = () => {
//   // Render content for the "Advice & Tips" tab
//   return <div>wooooz</div>;
// };

// const Events = () => {
//   // Render content for the "Blogs" tab
//   return <div>yaaay</div>;
// };

const Questions = () => {
  // Render content for the "Inspiring User Stories" tab
  return <div>hahahaha</div>;
};

export default CommunityPage;
