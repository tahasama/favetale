"use client";
import { useEffect, useState } from "react";
import Gallery from "./(components)/Gallery";
import Tips from "./(components)/tips/page";
import Blogs from "./(components)/blogs/page";
import Stories from "./(components)/stories/page";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";

const ExplorePage = () => {
  const [activeTab, setActiveTab] = useState<string>("Gallery"); // Initial active tab

  const searchParams = useSearchParams();
  const router = useRouter();

  const section = searchParams.get("section");

  const handleTabClick = (tabName: string) => {
    // router.push(`/explore?section=${tabName}`);
    // const lowerTabName = tabName.toLocaleLowerCase();
    // router.push(`/explore/${lowerTabName}`);

    setActiveTab(tabName);
  };

  useEffect(() => {
    section === "Stories" && setActiveTab("Stories");
    section === "Gallery" && setActiveTab("Gallery");
    section === "Blogs" && setActiveTab("Blogs");
    section === "Tips" && setActiveTab("Tips");
  }, [section]);

  const tabs = ["Gallery", "Blogs", "Stories", "Tips"];

  return (
    <div className=" bg-tealLight ">
      <div className="sticky top-20 z-40 flex justify-center  w-full bg-tealLight">
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
      className={`px-6 py-4 bg-gray-100  text-gray-600 rounded-t-lg ${
        isActive ? "bg-indigo-50 border-b-2 border-teal-500" : ""
      } transition-colors duration-500 hover:bg-purple-100`}
      onClick={onClick}
    >
      {tabName}
    </button>
  );
};

export default ExplorePage;
