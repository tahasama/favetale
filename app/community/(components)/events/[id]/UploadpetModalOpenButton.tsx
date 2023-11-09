"use client";
import { useCart } from "@/app/provider/CartProvider";
import React from "react";

const UploadpetModalOpenButton = () => {
  const { setImageModalOpen } = useCart();

  return (
    <button
      onClick={() => {
        setImageModalOpen(true);
      }}
      className="hover:bg-sky-600 text-sky-700 ring-1 ring-sky-700 hover:text-white sm:px-4 sm:py-3 px-3 py-2 rounded-md  transition-colors duration-500"
    >
      Upload Images
    </button>
  );
};

export default UploadpetModalOpenButton;
