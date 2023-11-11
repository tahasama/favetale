"use client";
import { useCart } from "@/app/provider/CartProvider";
import React from "react";
import MeetupsModal from "./MeetupsModal";
import { AnimatePresence, motion } from "framer-motion";

const ClientComponent = () => {
  const { meetupModalOpen, setMeetupModalOpen } = useCart();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        // key={activeTab}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-fuchsia-700 p-6 sm:p-12 text-left rounded-br-3xl leading-loose tracking-wide">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3 md:mb-5">
            {" "}
            Join Pet Meetups
          </h2>
          <p className="text-slate-100 text-base md:text-lg mb-6 md:mb-8">
            Connect with local pet lovers, attend fun events, and create lasting
            memories with your furry friends.
          </p>

          <button
            onClick={() => setMeetupModalOpen(true)}
            className="bg-tealLight hover:animate-buttonHover hover:text-white px-3 lg:px-4 py-2 lg:py-3 rounded-md hover:bg-fuchsia-400 transition-colors duration-500"
          >
            Create a Gathering
          </button>
          <MeetupsModal
            isOpen={meetupModalOpen}
            onClose={() => setMeetupModalOpen(false)}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ClientComponent;
