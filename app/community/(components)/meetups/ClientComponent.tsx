"use client";
import { useCart } from "@/app/provider/CartProvider";
import React from "react";
import MeetupsModal from "./MeetupsModal";

const ClientComponent = () => {
  const { uploadpetModalOpen, setUploadpetModalOpen } = useCart();

  return (
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
        onClick={() => setUploadpetModalOpen(true)}
        className="bg-tealLight hover:animate-buttonHover hover:text-white px-3 lg:px-4 py-2 lg:py-3 rounded-md hover:bg-fuchsia-400 transition-colors duration-500"
      >
        Create a Gathering
      </button>
      <MeetupsModal
        isOpen={uploadpetModalOpen}
        onClose={() => setUploadpetModalOpen(false)}
      />
    </div>
  );
};

export default ClientComponent;
