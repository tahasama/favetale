"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FiMessageSquare,
  FiUsers,
  FiCalendar,
  FiHelpCircle,
} from "react-icons/fi";
const CommunityClient = () => {
  const pathName = usePathname();
  const [activeTab, setActiveTab] = useState<string>(pathName.split("/")[2]);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const tabs = [
    { name: "forums", icon: <FiMessageSquare /> },
    { name: "meetups", icon: <FiUsers /> },
    { name: "events", icon: <FiCalendar /> },
    { name: "questions", icon: <FiHelpCircle /> },
  ];

  return (
    <div className="mt-20">
      <div className="sticky top-20 flex z-30 justify-center w-full bg-tealLight">
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
    </div>
  );
};

const TabButton = ({ tabName, isActive, onClick, icon }: any) => {
  return (
    <Link
      href={`/community/${tabName}`}
      className={`flex mt-8 items-center justify-center w-full py-3 border-l-2 group  bg-indigo-50 text-gray-600 rounded-t-lg ${
        isActive
          ? "bg-violet-100  border-l-2 border-l-gray-300 flex-col transition-all ease-in-out duration-1000"
          : "border-slate-200"
      } transition-all duration-1000 hover:bg-purple-100`}
      onClick={onClick}
    >
      <span
        className={`${
          isActive
            ? "absolute bottom-[2rem] md:bottom-[2.7rem] z-40 scale-[140%] md:scale-[190%] bg-violet-100  group-hover:bg-purple-100  rounded-full p-2 transition-all ease-linear"
            : "block"
        } `}
      >
        {icon}
      </span>
      <span
        className={`ml-2 capitalize text-xs md:text-base z-50 ${
          isActive && "mt-3"
        }`}
      >
        {tabName}
      </span>
    </Link>
  );
};

export default CommunityClient;
