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
  return (
    <div className="mt-0">
      <Gallery />
    </div>
  );
};

const TabButton = ({ tabName, isActive, onClick, icon }: any) => {
  return (
    <button
      className={`flex mt-8 items-center justify-center w-full py-3 border-l-2 group  bg-indigo-50 text-gray-600 rounded-t-lg ${
        isActive
          ? "bg-indigo-50 border-l-2 border-l-gray-300 flex-col transition-all ease-linear duration-1000"
          : "border-slate-200"
      } transition-all duration-1000 hover:bg-purple-100`}
      onClick={onClick}
    >
      <span
        className={`${
          isActive
            ? "absolute bottom-[2rem] md:bottom-[2.7rem] z-40 scale-[140%] md:scale-[190%] bg-indigo-50 group-hover:bg-purple-100  rounded-full p-2 transition-all ease-linear"
            : "block"
        } `}
      >
        {icon}
      </span>
      <span className={`ml-2 text-xs md:text-base z-50 ${isActive && "mt-3"}`}>
        {tabName}
      </span>
    </button>
  );
};

export default ExplorePage;
