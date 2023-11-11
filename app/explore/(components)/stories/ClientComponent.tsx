"use client";
import React from "react";

import { useCart } from "@/app/provider/CartProvider";
import StoryModal from "./StoryModal";
import { AnimatePresence, motion } from "framer-motion";

const ClientComponent = () => {
  const { uploadpetModalOpen, setUploadpetModalOpen } = useCart();

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 1000 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6  bg-green-500">
          <div className="bg-indigo-600 p-6 sm:p-12 rounded-lg text-left leading-loose tracking-wide w-full ">
            <h2 className="text-2xl sm:text-4xl font-semibold text-white mb-5">
              Share Your Inspiring Story
            </h2>
            <p className="text-base sm:text-lg text-gray-200 mb-4 sm:mb-8">
              Contribute your unique story to our community and inspire others!
            </p>
            <button
              onClick={() => setUploadpetModalOpen(true)}
              className="bg-tealLight hover:text-white sm:px-4 sm:py-3 px-3 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-500"
            >
              Share a story
            </button>
          </div>
          <StoryModal
            isOpen={uploadpetModalOpen}
            onClose={() => setUploadpetModalOpen(false)}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ClientComponent;
