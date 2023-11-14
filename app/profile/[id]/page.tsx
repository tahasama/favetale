import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Suspense, useEffect } from "react";

import { useCart } from "@/app/provider/CartProvider";
import { motion } from "framer-motion";
import React from "react";
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
import Loading from "@/app/community/(components)/forums/loading";
import ClientComponent from "./ClientComponent";
import Purchases from "./purchases/page";
import Questions from "./questions/page";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

const font = Saira_Semi_Condensed({ subsets: ["latin"], weight: "400" });

const UserProfile = async (id: any) => {
  console.log("🚀 ~ file: page.tsx:37 ~ UserProfile ~ id:", id);

  return (
    <div className="bg-teal-50 min-h-screen  place-items-center hidden h-fit pt-20 pb-10">
      Nothing to show here
    </div>
  );
};

export default UserProfile;
