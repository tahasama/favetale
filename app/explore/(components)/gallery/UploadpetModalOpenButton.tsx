"use client";
import { useCart } from "@/app/provider/CartProvider";
import { useRouter } from "next/navigation";
import React from "react";

const UploadpetModalOpenButton = ({ buttonStyle }: any) => {
  const { setImageModalOpen, userx } = useCart();
  const router = useRouter();

  return (
    <button
      onClick={() => {
        setImageModalOpen(true);
      }}
      className={`${
        buttonStyle
          ? buttonStyle
          : "bg-amber-700 hover:text-amber-700 text-white sm:px-4 sm:py-3 px-3 py-2 rounded-md hover:bg-tealLight  transition-colors duration-500"
      }`}
    >
      Upload an Image
    </button>
  );
};

export default UploadpetModalOpenButton;
