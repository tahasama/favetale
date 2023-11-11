"use client";
import React from "react";
import UploadpetModalOpenButton from "./UploadpetModalOpenButton";
import UploadImageModal from "./UploadImageModal";
import { AnimatePresence, motion } from "framer-motion";

const ClientComponent = () => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 1000 }}
        transition={{ duration: 0.5 }}
      >
        <div className="  mt-0  w-full">
          <div className="mb-6">
            <div className="bg-yellow-500 p-6 sm:p-12 rounded-lg text-left leading-loose tracking-wide  ">
              <h2 className="text-2xl sm:text-4xl font-semibold text- mb-5">
                Browse Our Gallery
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-8">
                Find lots and lots of pet moments shared by our beloved
                community,
              </p>
              <UploadpetModalOpenButton />
            </div>
            <UploadImageModal />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ClientComponent;
