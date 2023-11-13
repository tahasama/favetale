"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useCart } from "@/app/provider/CartProvider";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import user from "../../images/user/userf.jpg";
import { Saira_Semi_Condensed } from "next/font/google";
import UserModal from "./UserModal";
import { FaFacebook, FaInstagram, FaLink, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import {
  FiImage,
  FiBook,
  FiClipboard,
  FiMessageSquare,
  FiUsers,
  FiCalendar,
  FiHelpCircle,
} from "react-icons/fi";
import { BsShop } from "react-icons/bs";

const font = Saira_Semi_Condensed({ subsets: ["latin"], weight: "400" });

const ClientComponent = ({ idx, userProfile }: any) => {
  const { profile, setProfile } = useCart();
  // const [userProfile, setuserProfile] = useState<any>(null);
  const [tab, setTab] = useState("Gallery");
  const tabs = [
    { name: "gallery", icon: <FiImage /> },
    { name: "blogs", icon: <FiBook /> },
    { name: "stories", icon: <FiClipboard /> },
    { name: "purchases", icon: <BsShop /> },
    { name: "forums", icon: <FiMessageSquare /> },
    { name: "meetups", icon: <FiUsers /> },
    { name: "events", icon: <FiCalendar /> },
    { name: "questions", icon: <FiHelpCircle /> },
  ];

  // useEffect(() => {
  //   const getBlog = async () => {
  //     const docRef = doc(db, "users", String(idx));
  //     console.log("🚀 ~ file: ClientComponent.tsx:29 ~ getBlog ~ idx:", idx);
  //     const docSnap = await getDoc(docRef);
  //     console.log(
  //       "🚀 ~ file: ClientComponent.tsx:31 ~ getBlog ~ docSnap:",
  //       docSnap.data()
  //     );

  //     if (docSnap.exists()) {
  //       // console.log("Document data:");
  //       setuserProfile({ ...docSnap.data(), idx: docSnap.id });
  //     } else {
  //       // docSnap.data() will be undefined in this case
  //       console.log("No such document!");
  //     }
  //   };
  //   getBlog();
  // }, [idx]);

  return (
    <>
      <div className="grid place-items-center w-full">
        {" "}
        <div className="lg:w-9/12 bg-white mx-6 p-6 mt-8 shadow-md rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col justify-around  order-2 md:order-1"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {userProfile?.name} {userProfile?.lastName}
            </h2>
            <p className="text-md font-light mb-2">
              Join on: {userProfile?.creationTime.slice(0, 16)}
            </p>
            <p className="text-md font-light mb-2">
              Last visit on: {userProfile?.lastSignInTime.slice(0, 16)}
            </p>

            {userProfile?.description && (
              <p className="text-gray-600 mb-4">{userProfile?.description}</p>
            )}
            <div className="grid grid-cols-4 gap-2 w-full">
              {userProfile?.socialMedia?.instagram && (
                <Link
                  href={userProfile?.socialMedia?.website}
                  className="flex items-center scale-125"
                >
                  <FaInstagram className="text-gray-600" />
                </Link>
              )}

              {userProfile?.socialMedia?.twitter && (
                <Link
                  href={userProfile?.socialMedia?.website}
                  className="flex items-center scale-125"
                >
                  <FaTwitter className="text-gray-600" />
                </Link>
              )}

              {userProfile?.socialMedia?.facebook && (
                <Link
                  href={userProfile?.socialMedia?.website}
                  className="flex items-center scale-125"
                >
                  <FaFacebook className="text-gray-600" />
                </Link>
              )}

              {userProfile?.socialMedia?.website && (
                <Link
                  href={userProfile?.socialMedia?.website}
                  className="flex items-center scale-125"
                >
                  <FaLink className="text-gray-600" />
                </Link>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 place-content-center place-items-start mt-2 hover:animate-bounceZ">
              <button
                onClick={() => setProfile(true)}
                className="bg-indigo-500 text-white px-5 py-2.5 rounded-md"
              >
                Edit Profile
              </button>
            </div>

            <UserModal isOpen={profile} onClose={() => setProfile(false)} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 1 }}
            className="order-1 md:order-2"
          >
            <div className="grid place-items-center place-content-end">
              <img
                src={userProfile?.image ? userProfile?.image : user.src}
                alt="Profile Picture"
                className="rounded-3xl max-h-80 w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-white md:mx-6 mb-6 px-1 lg:w-11/12 mx-1 py-4 md:p-6 mt-6 shadow-md rounded-lg flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6">
        {tabs.map((ta: any, index: any) => (
          <Link
            href={`/profile/${idx}/${
              ta.name !== "forums" ? ta.name : "discussions"
            }`}
            onClick={() => setTab(ta.name)}
            className="relative grid place-items-center  w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-tealLight ring-1 ring-teal-00 rounded-lg cursor-pointer hover:scale-[1.02] shadow-md hover:shadow-lg transition-all duration-200"
          >
            <div className="scale-[1.7] md:scale-[2] lg:scale-[2.4] mt-2 md:mt-3    text-blue-900">
              {ta.icon}
            </div>
            <div
              className={`absolute top-1 mx-1 capitalize text-[0.5rem] md:text-xs lg:text-sm  ${
                (font.className,
                ta.name === tab && "text-blue-600 transition-all duration-300")
              } `}
            >
              {ta.name}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ClientComponent;
