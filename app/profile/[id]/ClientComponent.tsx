"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useCart } from "@/app/provider/CartProvider";
import { motion } from "framer-motion";
import React from "react";
import user from "../../images/user/userf.jpg";
import { Saira_Semi_Condensed } from "next/font/google";
import UserModal from "./UserModal";
import { FaFacebook, FaInstagram, FaLink, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const font = Saira_Semi_Condensed({ subsets: ["latin"], weight: "400" });
const ClientComponent = () => {
  const { userx, uploadpetModalOpen, setUploadpetModalOpen } = useCart();

  return (
    <div className="grid place-items-center">
      {" "}
      <div className="lg:w-9/12 bg-white mx-6 p-6 mt-8 shadow-md rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-3">
        <motion.div
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid place-content-around place-items-start order-2 md:order-1"
        >
          <h2 className="text-2xl font-semibold mb-2">
            {userx.name} {userx.lastName}
          </h2>
          <p className="text-md font-light mb-2">
            Join on: {userx.creationTime.slice(0, 16)}
          </p>
          <p className="text-md font-light mb-2">
            Last visit on: {userx.lastSignInTime.slice(0, 16)}
          </p>

          {userx.description && (
            <p className="text-gray-600 mb-4">{userx.description}</p>
          )}
          <div className="grid grid-cols-4 gap-2 w-full">
            {userx.socialMedia?.instagram && (
              <Link
                href={userx.socialMedia?.website}
                className="flex items-center scale-125"
              >
                <FaInstagram className="text-gray-600" />
              </Link>
            )}

            {userx.socialMedia?.twitter && (
              <Link
                href={userx.socialMedia?.website}
                className="flex items-center scale-125"
              >
                <FaTwitter className="text-gray-600" />
              </Link>
            )}

            {userx.socialMedia?.facebook && (
              <Link
                href={userx.socialMedia?.website}
                className="flex items-center scale-125"
              >
                <FaFacebook className="text-gray-600" />
              </Link>
            )}

            {userx.socialMedia?.website && (
              <Link
                href={userx.socialMedia?.website}
                className="flex items-center scale-125"
              >
                <FaLink className="text-gray-600" />
              </Link>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 place-content-center place-items-start mt-2 hover:animate-bounceZ">
            <button
              onClick={() => setUploadpetModalOpen(true)}
              className="bg-indigo-500 text-white px-5 py-2.5 rounded-md"
            >
              Edit Profile
            </button>
          </div>

          <UserModal
            isOpen={uploadpetModalOpen}
            onClose={() => setUploadpetModalOpen(false)}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 1 }}
          className="order-1 md:order-2"
        >
          <div className="grid place-items-center place-content-end">
            <img
              src={userx.image ? userx.image : user.src}
              alt="Profile Picture"
              className="rounded-3xl max-h-80 w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientComponent;
