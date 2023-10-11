"use client";
import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import Stories from "./(components)/stories/page";
import Blogs from "./(components)/blogs/page";
import Gallery from "./(components)/gallery/page";
import Tips from "./(components)/tips/page";
import { FiImage, FiBook, FiClipboard } from "react-icons/fi";
import { FaLightbulb } from "react-icons/fa";

const ExplorePage = () => {
  const storedTab =
    (typeof window !== "undefined" && localStorage.getItem("activeTab")) ||
    "Stories";
  // const storedTab = "Gallery";

  const [activeTab, setActiveTab] = useState<string>(storedTab); // Initial active tab

  const handleTabClick = (tabName: string) => {
    // router.push(`/explore?section=${tabName}`);
    // const lowerTabName = tabName.toLocaleLowerCase();
    // router.push(`/explore/${lowerTabName}`);

    setActiveTab(tabName);
  };

  useEffect(() => {
    // Save the activeTab to localStorage whenever it changes.
    typeof window !== "undefined" &&
      localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  // const tabs = ["Gallery", "Blogs", "Stories", "Tips"];

  const tabs = [
    { name: "Gallery", icon: <FiImage /> },
    { name: "Blogs", icon: <FiBook /> },
    { name: "Stories", icon: <FiClipboard /> },
    { name: "Tips", icon: <FaLightbulb /> },
  ];

  return (
    <div className="mt-0">
      <div className="sticky top-20 flex z-40 justify-center w-full bg-tealLight">
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
      <AnimatePresence mode="popLayout">
        {/* Content for the active tab */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 1000 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "Gallery" && <Gallery />}
          {activeTab === "Tips" && <Tips />}
          {activeTab === "Blogs" && <Blogs />}
          {activeTab === "Stories" && <Stories />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const TabButton = ({ tabName, isActive, onClick, icon }: any) => {
  return (
    <button
      className={`flex mt-8 items-center justify-center w-full py-3 border-l-2 group  bg-gray-100 text-gray-600 rounded-t-lg ${
        isActive
          ? "bg-indigo-50 border-l-2 border-l-gray-300 flex-col transition-all ease-linear duration-1000"
          : "border-slate-200"
      } transition-all duration-1000 hover:bg-purple-100`}
      onClick={onClick}
    >
      <span
        className={`${
          isActive
            ? "absolute bottom-[2rem] md:bottom-[2.7rem]  scale-[140%] md:scale-[190%] bg-indigo-50 group-hover:bg-purple-100  rounded-full p-2 transition-all ease-linear"
            : "block"
        } `}
      >
        {icon}
      </span>
      <span className={`ml-2 z-50 text-xs md:text-base ${isActive && "mt-3"}`}>
        {tabName}
      </span>
    </button>
  );
};

export default ExplorePage;
