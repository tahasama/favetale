"use client";
import { useEffect, useState } from "react";
import Forums from "./(components)/forums/page";
import Meetups from "./(components)/meetups/page";
import Events from "./(components)/events/page";
import Questions from "./(components)/questions/page";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiMessageSquare,
  FiUsers,
  FiCalendar,
  FiHelpCircle,
} from "react-icons/fi";

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

  const tabs = [
    { name: "Forums", icon: <FiMessageSquare /> },
    { name: "Meetups", icon: <FiUsers /> },
    { name: "Events", icon: <FiCalendar /> },
    { name: "Questions", icon: <FiHelpCircle /> },
  ];

  return (
    <div className="mt-20">
      <div className="sticky top-0 flex z-40 justify-center w-full bg-tealLight">
        {tabs.map((tab) => (
          <TabButton
            key={tab.name}
            tabName={tab.name}
            isActive={activeTab === tab.name}
            onClick={() => handleTabClick(tab.name)}
            icon={tab.icon}
          />
        ))}
      </div>
      <AnimatePresence mode="wait">
        {/* Content for the active tab */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
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

const TabButton = ({ tabName, isActive, onClick, icon }: any) => {
  return (
    <button
      className={`flex items-center justify-center w-full py-4 border-l-2 group  bg-gray-100 text-gray-600 rounded-t-lg ${
        isActive
          ? "bg-indigo-50 border-l-2 border-l-gray-300 flex-col transition-all ease-linear duration-1000"
          : "border-slate-200"
      } transition-all duration-1000 hover:bg-purple-100`}
      onClick={onClick}
    >
      <span
        className={`${
          isActive
            ? "absolute top-[2rem] md:top-[2.5rem] scale-[140%] md:scale-[180%] bg-indigo-50 group-hover:bg-purple-100  rounded-full p-1.5 transition-all ease-linear"
            : "block"
        } `}
      >
        {icon}
      </span>
      <span className="ml-2 z-50 text-xs md:text-base">{tabName}</span>
    </button>
  );
};

export default CommunityPage;
