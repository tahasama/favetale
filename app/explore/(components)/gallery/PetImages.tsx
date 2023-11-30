"use client";
import { useCart } from "@/app/provider/CartProvider";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const petImages = ({ image, index }: any) => {
  const { setSelectedImage, setUploadpetModalOpen, filterImage } = useCart();

  return (
    <motion.div
      key={image.id}
      className={`relative flex-grow ${
        filterImage === "All" ||
        filterImage === "" ||
        (image.category === filterImage?.toLowerCase() ? "block" : "hidden")
      }`}
      initial={{ opacity: 0, y: index * 100 + 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.75 }}
    >
      <div
        className="overflow-hidden rounded-lg shadow-md"
        onClick={() => {
          setSelectedImage(image), setUploadpetModalOpen(true);
        }}
      >
        <Image
          src={image.image}
          alt={`Pet Image ${1}`}
          className="w-full h-40 lg:h-[55vh]  object-cover cursor-pointer"
          width={500}
          height={700}
        />
      </div>
    </motion.div>
  );
};

export default petImages;
