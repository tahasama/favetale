"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Suspense } from "react";

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

const font = Saira_Semi_Condensed({ subsets: ["latin"], weight: "400" });

const UserProfile = ({ params: { id } }: any) => {
  const { userx } = useCart();
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
      <div className="bg-white mx-6  p-6 mt-8  shadow-md rounded-lg grid grid-cols-1 sm:grid-cols-2  ">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: 500 }} // Initial state (hidden and slightly moved down)
          animate={{ opacity: 1, x: 0 }} // Animation state (visible and at normal position)
          transition={{ duration: 1, delay: 0.3 }} // Animation duration
          className=" grid place-content-around place-items-start"
        >
          {/* Username */}
          <h2 className="text-2xl font-semibold mb-2">{userx.name}</h2>
          <p className="text-md font-light mb-2">
            Join on: {userx.creationTime.slice(0, 16)}
          </p>
          <p className="text-md font-light mb-2">
            Last visit on: {userx.lastSignInTime.slice(0, 16)}
          </p>

          {/* Bio */}
          <p className="text-gray-600 mb-4">
            Passionate about pets and animals. Love sharing tips and
            experiences.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2  place-content-center place-items-start">
            {/* Edit Profile Information */}
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">
              Edit Profile
            </button>

            {/* Account Settings */}
            <button className="bg-violet-1000 text-white px-4 py-2 -ml-3 rounded-md">
              Account Settings
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} // Initial state (hidden and slightly moved down)
          animate={{ opacity: 1 }} // Animation state (visible and at normal position)
          transition={{ duration: 0.75, delay: 1 }} // Animation duration
        >
          <div className="grid place-items-center place-content-center">
            <img
              src={userx.image ? userx.image.src : user.src}
              alt="Profile Picture"
              className="rounded-3xl w-[1/12] object-cover bg-sky-500"
              width={400}
            />
          </div>
        </motion.div>
      </div>
      <div className="bg-white mx-6 p-6 mt-6 shadow-md rounded-lg flex flex-wrap justify-center gap-6">
        {tabs.map((ta: any, index: any) => (
          <div
            onClick={() => setTab(ta.name)}
            className="relative grid place-items-center w-32 h-32 bg-tealLight ring-1 ring-teal-00 rounded-lg cursor-pointer hover:scale-[1.02] hover:shadow-md transition-all duration-150"
          >
            <div className="scale-[2.4] text-blue-900">{ta.icon}</div>
            <div
              className={`absolute top-1 text-base ${
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
        {tab === "Gallery" && <Gallery userx={userx} />}
        {tab === "Blogs" && <Blogs userx={userx} />}
        {tab === "Stories" && <Stories userx={userx} />}
        {tab === "Discussions" && <Discussions userx={userx} />}
        {tab === "Meetups" && <Questions userx={userx} />}
        {tab === "Meetups" && <Meetups userx={userx} />}
        {/* {tab === "Meetups" && <Events userx={userx} />}
        {tab === "Meetups" && <Purchases userx={userx} />} */}
      </Suspense>
    </div>
  );
};

export default UserProfile;
