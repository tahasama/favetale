"use client";
import { useEffect, useState } from "react";
import Forums from "./(components)/forums/page";
import Meetups from "./(components)/meetups/page";
import Events from "./(components)/events/page";
import Questions from "./(components)/Questions";
import { AnimatePresence, motion } from "framer-motion";

const CommunityPage = () => {
  const storedTab =
    (typeof window !== "undefined" &&
      localStorage.getItem("communityActiveTab")) ||
    "Forums";

  const [activeTab, setActiveTab] = useState<string>(storedTab); // Initial active tab

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    // Save the activeTab to localStorage whenever it changes.
    typeof window !== "undefined" &&
      localStorage.setItem("communityActiveTab", activeTab);
  }, [activeTab]);

  const tabs = ["Forums", "Meetups", "Events", "Questions"];

  return (
    <div className="mt-20">
      <div className="sticky top-20 flex z-40 justify-center  w-full bg-tealLight">
        {tabs.map((tab) => (
          <TabButton
            tabName={tab}
            isActive={activeTab === tab}
            onClick={() => handleTabClick(tab)}
          />
        ))}
      </div>
      <AnimatePresence mode="popLayout">
        {/* Content for the active tab */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 1000 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "Forums" && <Forums />}
          {activeTab === "Meetups" && <Meetups />}
          {activeTab === "Events" && <Events />}
          {activeTab === "Questions" && <Questions />}
        </motion.div>
      </AnimatePresence>
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

// const Questions = () => {
//   // Render content for the "Inspiring User Stories" tab
//   return <div>hahahaha</div>;
// };

export default CommunityPage;
