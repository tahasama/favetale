"use client";
import React from "react";

import { useCart } from "@/app/provider/CartProvider";
import DiscussionModal from "./[id]/DiscussionModal";
import { AnimatePresence, motion } from "framer-motion";

const ClientComponent = () => {
  const { uploadpetModalOpen, setUploadpetModalOpen } = useCart();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-6">
          <div className="bg-violet-800 rounded-br-3xl p-6 sm:p-12 text-left leading-loose tracking-wide">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3 md:mb-5">
              {" "}
              Join Our Forums
            </h2>
            <p className="text-slate-100 text-base md:text-lg mb-6 md:mb-8">
              Engage in discussions, share your insights, and learn from fellow
              pet enthusiasts.
            </p>
            <button
              onClick={() => setUploadpetModalOpen(true)}
              className="bg-tealLight hover:text-white sm:px-4 sm:py-3 px-3 py-2 rounded-md hover:bg-indigo-500 hover:animate-buttonHover transition-colors duration-500"
            >
              Start a Discussion
            </button>
          </div>
        </div>
        <DiscussionModal
          isOpen={uploadpetModalOpen}
          onClose={() => setUploadpetModalOpen(false)}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ClientComponent;
