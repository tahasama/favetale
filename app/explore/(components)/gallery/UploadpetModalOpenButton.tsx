"use client";
import { useCart } from "@/app/provider/CartProvider";
import React from "react";

const UploadpetModalOpenButton = () => {
  const { uploadpetModalOpen, setUploadpetModalOpen } = useCart();

  return (
    <button
      onClick={() => {
        setUploadpetModalOpen(true);
      }}
      className="bg-amber-700 hover:text-amber-700 text-white sm:px-4 sm:py-3 px-3 py-2 rounded-md hover:bg-tealLight  transition-colors duration-500"
    >
      Upload an Image
    </button>
  );
};

export default UploadpetModalOpenButton;
