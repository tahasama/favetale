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
import Meetups from "./meetups/page";
import Images from "./gallery/page";
import Gallery from "./gallery/page";
import Blogs from "./blogs/page";
import Stories from "./Stories";
import Discussions from "./Discussions/page";
import Questions from "./Questions";
import Loading from "@/app/community/(components)/forums/loading";

const font = Saira_Semi_Condensed({ subsets: ["latin"], weight: "400" });
const ClientComponent = () => {
  const { userx, uploadpetModalOpen } = useCart();

  return (
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
          Passionate about pets and animals. Love sharing tips and experiences.
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
  );
};

export default ClientComponent;
