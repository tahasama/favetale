"use client";
import React from "react";

import { useCart } from "@/app/provider/CartProvider";
import BlogModal from "./BlogModal";
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
        {/* Prominent Call-to-Action */}
        <div className="mb-6">
          <div className="bg-sky-600 p-6 sm:p-12 rounded-lg text-left leading-loose tracking-wide  ">
            <h2 className="text-2xl sm:text-4xl font-semibold text-white mb-5">
              Discover Our Blog
            </h2>
            <p className="text-base sm:text-lg text-gray-200 mb-4 sm:mb-8">
              Explore insightful articles and tips from our community of pet
              lovers. Enhance your knowledge and share in the joy of pet
              companionship!
            </p>
            <button
              onClick={() => setUploadpetModalOpen(true)}
              className="bg-tealLight hover:text-white sm:px-4 sm:py-3 px-3 py-2 rounded-md hover:bg-sky-700 transition-colors duration-500"
            >
              Write a Blog
            </button>
          </div>
        </div>

        <BlogModal
          isOpen={uploadpetModalOpen}
          onClose={() => setUploadpetModalOpen(false)}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ClientComponent;
