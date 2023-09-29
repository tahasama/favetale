"use client";
import { useCart } from "@/app/provider/CartProvider";
import { motion } from "framer-motion";
import React from "react";

const petImages = ({ image, index }: any) => {
  const { setSelectedImage, setUploadpetModalOpen } = useCart();

  return (
    <motion.div
      key={image.id}
      className="relative mb-8"
      initial={{ opacity: 0 }} // Initial state (hidden and slightly moved down)
      animate={{ opacity: 1 }} // Animation state (visible and at normal position)
      transition={{ duration: 0.75, delay: 0.75 }} // Animation duration
    >
      <div
        className="overflow-hidden rounded-lg shadow-md"
        onClick={() => {
          setSelectedImage(image), setUploadpetModalOpen(true);
        }}
      >
        <img
          src={image.image}
          alt={`Pet Image ${1}`}
          className="w-full h-40 lg:h-[55vh]  object-cover cursor-pointer"
        />
      </div>
    </motion.div>
  );
};

export default petImages;
