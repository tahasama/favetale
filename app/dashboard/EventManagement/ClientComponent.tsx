"use client";
import { useCart } from "@/app/provider/CartProvider";
import React from "react";
import MeetupsModal from "./MeetupsModal";

const ClientComponent = () => {
  const { meetupModalOpen, setMeetupModalOpen } = useCart();

  return (
    <>
      <button
        onClick={() => setMeetupModalOpen(true)}
        className="bg-indigo-400 m-4 hover:animate-buttonHover hover:text-white px-3 lg:px-4 py-2 lg:py-3 rounded-md hover:bg-fuchsia-400 transition-colors duration-500"
      >
        Create an event
      </button>
      <MeetupsModal
        isOpen={meetupModalOpen}
        onClose={() => setMeetupModalOpen(false)}
      />
    </>
  );
};

export default ClientComponent;
