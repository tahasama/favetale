"use client";
import { useState } from "react";
import Gallery from "./components/Gallery";
import Tips from "./components/Tips";
import Blogs from "./components/Blogs";
import Stories from "./components/Stories";

const ExplorePage = () => {
  const [activeTab, setActiveTab] = useState<string>("Gallery"); // Initial active tab

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const tabs = ["Gallery", "Tips", "Blogs", "Stories"];

  return (
    <div className=" bg-tealLight gap-0 justify-stretch flex w-full">
      <div className="sticky top-0 h-screen justify-center my-auto flex flex-col mt-20 ml-5 z-50 w-1/12">
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            tabName={tab}
            isActive={activeTab === tab}
            onClick={() => handleTabClick(tab)}
          />
        ))}
      </div>
      <div className="w-11/12 ">
        {activeTab === "Gallery" && <Gallery />}
        {activeTab === "Tips" && <Tips />}
        {activeTab === "Blogs" && <Blogs />}
        {activeTab === "Stories" && <Stories />}
      </div>
    </div>
  );
};

const TabButton = ({ tabName, isActive, onClick }: any) => {
  return (
    <button
      className={`px-4 py-4 bg-gray-100  text-gray-600 rounded-t-lg ${
        isActive ? "bg-white border-b-2 border-teal-500" : ""
      } transition-colors duration-500 hover:bg-indigo-50`}
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

// const Blogs = () => {
//   // Render content for the "Blogs" tab
//   return <div>yaaay</div>;
// };

// const Stories = () => {
//   // Render content for the "Inspiring User Stories" tab
//   return <div>hahahaha</div>;
// };

export default ExplorePage;
