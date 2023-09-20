"use client";
import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import Stories from "./(components)/stories/page";
import Blogs from "./(components)/blogs/page";
import Gallery from "./(components)/gallery/page";
import Tips from "./(components)/tips/page";

const ExplorePage = () => {
  const storedTab =
    (typeof window !== "undefined" && localStorage.getItem("activeTab")) ||
    "Gallery";
  // const storedTab = "Gallery";

  const [activeTab, setActiveTab] = useState<string>(storedTab); // Initial active tab

  const searchParams = useSearchParams();

  const section = searchParams.get("section");

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

  useEffect(() => {
    section === "Stories" && setActiveTab("Stories");
    section === "Gallery" && setActiveTab("Gallery");
    section === "Blogs" && setActiveTab("Blogs");
    section === "Tips" && setActiveTab("Tips");
  }, [section]);

  const tabs = ["Gallery", "Blogs", "Stories", "Tips"];

  return (
    <div className=" bg-tealLight ">
      <div className="sticky top-[80px]  flex justify-between  w-full bg-tealLight">
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
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

const TabButton = ({ tabName, isActive, onClick }: any) => {
  return (
    <button
      className={`w-full py-4 border-l-2  bg-gray-100  text-gray-600 rounded-t-lg ${
        isActive ? "bg-indigo-50 border-l-2 l-gray-300" : "border-slate-200"
      } transition-colors duration-500 hover:bg-purple-100`}
      onClick={onClick}
    >
      {tabName}
    </button>
  );
};

export default ExplorePage;
