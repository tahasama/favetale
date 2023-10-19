"use client";
import React from "react";
import DiscussionModal from "./DiscussionModal";
import { useCart } from "@/app/provider/CartProvider";

const ClientComponentButtuns = ({ id }: any) => {
  const { uploadpetModalOpen, setUploadpetModalOpen } = useCart();
  return (
    <>
      <button
        onClick={() => setUploadpetModalOpen(true)}
        className="mb-4 bg-indigo-500 text-white xl:py-2 xl:px-4 text-base xl:text-lg sm:py-2 sm:px-2 rounded-md hover:bg-indigo-600 focus:outline-none"
      >
        Start a discussion
      </button>
      <DiscussionModal
        isOpen={uploadpetModalOpen}
        onClose={() => setUploadpetModalOpen(false)}
        forumId={id}
      />
    </>
  );
};

export default ClientComponentButtuns;
