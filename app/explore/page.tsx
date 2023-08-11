"use client";
import { useState } from "react";
import Gallery from "./components/Gallery";
import Tips from "./components/Tips";

const ExplorePage = () => {
  const [activeTab, setActiveTab] = useState<string>("Gallery"); // Initial active tab

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const tabs = ["Gallery", "Tips", "Blogs", "Stories"];

  return (
    <div className="mt-20 bg-tealLight">
      <div className="flex justify-center">
        <div className="flex bg-gray-100 rounded-lg">
          {tabs.map((tab, index) => (
            <TabButton
              key={index}
              tabName={tab}
              isActive={activeTab === tab}
              onClick={() => handleTabClick(tab)}
            />
          ))}
        </div>
      </div>

      {/* Content for the active tab */}
      {activeTab === "Gallery" && <Gallery />}
      {activeTab === "Tips" && <Tips />}
      {activeTab === "Blogs" && <Blogs />}
      {activeTab === "Stories" && <Stories />}
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
// const Gallery = () => {
//   // Render content for the "Pet Images" tab
//   return <div>HHHHHHHHh</div>;
// };

const Blogs = () => {
  // Render content for the "Blogs" tab
  return <div>yaaay</div>;
};

const Stories = () => {
  // Render content for the "Inspiring User Stories" tab
  return <div>hahahaha</div>;
};

export default ExplorePage;
