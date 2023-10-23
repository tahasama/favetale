"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Suspense, useEffect } from "react";

import { useCart } from "@/app/provider/CartProvider";
import { motion } from "framer-motion";
import React, { useState } from "react";
import user from "../../images/user/userf.jpg";
import { Saira_Semi_Condensed } from "next/font/google";
import { BsShop } from "react-icons/bs";
import {
  FiImage,
  FiBook,
  FiClipboard,
  FiMessageSquare,
  FiUsers,
  FiCalendar,
  FiHelpCircle,
} from "react-icons/fi";
import Meetups from "./Meetups";
import Images from "./Gallery";
import Gallery from "./Gallery";
import Blogs from "./Blogs";
import Stories from "./Stories";
import Discussions from "./Discussions";
import Questions from "./Questions";
import Loading from "@/app/community/(components)/forums/loading";
import ClientComponent from "./ClientComponent";

const font = Saira_Semi_Condensed({ subsets: ["latin"], weight: "400" });

const UserProfile = ({ params: { id } }: any) => {
  const [tab, setTab] = useState("Gallery");

  const tabs = [
    { name: "Gallery", icon: <FiImage /> },
    { name: "Blogs", icon: <FiBook /> },
    { name: "Stories", icon: <FiClipboard /> },
    { name: "Purchases", icon: <BsShop /> },
    { name: "Forums", icon: <FiMessageSquare /> },
    { name: "Meetups", icon: <FiUsers /> },
    { name: "Events", icon: <FiCalendar /> },
    { name: "Questions", icon: <FiHelpCircle /> },
  ];
  return (
    <div className="bg-teal-50 min-h-screen h-fit pt-20 pb-10">
      <ClientComponent />
      <div className="bg-white md:mx-6 px-1 mx-1 py-4 md:p-6 mt-6 shadow-md rounded-lg flex flex-wrap justify-center gap-3.5 md:gap-6">
        {tabs.map((ta: any, index: any) => (
          <div
            onClick={() => setTab(ta.name)}
            className="relative grid place-items-center w-16 h-16 md:w-32 md:h-32 bg-tealLight ring-1 ring-teal-00 rounded-lg cursor-pointer hover:scale-[1.02] shadow-md hover:shadow-lg transition-all duration-200"
          >
            <div className="scale-[1.7] md:scale-[2.4] mt-2 md:mt-0 text-blue-900">
              {ta.icon}
            </div>
            <div
              className={`absolute top-1 text-xs md:text-base ${
                (font.className,
                ta.name === tab && "text-blue-600 transition-all duration-300")
              } `}
            >
              {ta.name}
            </div>
          </div>
        ))}
      </div>
      <Suspense fallback={<Loading />}>
        {tab === "Gallery" && <Gallery userx={id} />}
        {tab === "Blogs" && <Blogs userx={id} />}
        {tab === "Stories" && <Stories userx={id} />}
        {tab === "Discussions" && <Discussions userx={id} />}
        {tab === "Meetups" && <Questions userx={id} />}
        {tab === "Meetups" && <Meetups userx={id} />}
        {/* {tab === "Meetups" && <Events userx={userx} />}
        {tab === "Meetups" && <Purchases userx={userx} />} */}
      </Suspense>
    </div>
  );
};

export default UserProfile;
