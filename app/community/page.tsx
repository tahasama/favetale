"use client";
import { useState } from "react";

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState<string>("Pet Images"); // Initial active tab

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const tabs = ["Forums", "Meetups", "Events", "Questions"];

  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <div className="flex bg-gray-100 rounded-lg">
          {tabs.map((tab) => (
            <TabButton
              tabName={tab}
              isActive={activeTab === tab}
              onClick={() => handleTabClick(tab)}
            />
          ))}
        </div>
      </div>

      {/* Content for the active tab */}
      {activeTab === "Forums" && <Forums />}
      {activeTab === "Meetups" && <Meetups />}
      {activeTab === "Events" && <Events />}
      {activeTab === "Questions" && <Questions />}
    </div>
  );
};

const TabButton = ({ tabName, isActive, onClick }: any) => {
  return (
    <button
      className={`px-4 py-2 text-gray-600 ${
        isActive ? "bg-white border-b-2 border-teal-500" : ""
      }`}
      onClick={onClick}
    >
      {tabName}
    </button>
  );
};

// Define the content components for each tab
const Forums = () => {
  // Render content for the "Pet Images" tab
  return <div>HHHHHHHHh</div>;
};

const Meetups = () => {
  // Render content for the "Advice & Tips" tab
  return <div>wooooz</div>;
};

const Events = () => {
  // Render content for the "Blogs" tab
  return <div>yaaay</div>;
};

const Questions = () => {
  // Render content for the "Inspiring User Stories" tab
  return <div>hahahaha</div>;
};

export default CommunityPage;
