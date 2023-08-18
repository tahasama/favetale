"use client";
import React, { useState } from "react";
import i13 from "../../images/13.jpg";
import i14 from "../../images/14.jpg";
import i15 from "../../images/15.jpg";
import i16 from "../../images/16.jpg";
import i17 from "../../images/17.jpg";
import i18 from "../../images/18.jpg";
import i19 from "../../images/19.jpg";
import Image from "next/image";
import ImageModal from "./ImageModal";
import { motion } from "framer-motion";

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const petImages = [i13, i14, i15, i16, i17, i18, i19];

  const handleImageClick = (image: any) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  return (
    <div className="mx-2 sm:mx-auto max-w-6xl">
      <h2 className="text-3xl font-semibold">Pet Images Gallery</h2>
      <div className="mt-28  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 sm:gap-4">
        {petImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative mb-8"
            initial={{ opacity: 0, y: index * 50 + 100 }} // Initial state (hidden and slightly moved down)
            animate={{ opacity: 1, y: 0 }} // Animation state (visible and at normal position)
            transition={{ duration: 0.75 }} // Animation duration
          >
            <div
              className="overflow-hidden rounded-lg shadow-md"
              onClick={() => handleImageClick(image)}
            >
              <Image
                src={image}
                alt={`Pet Image ${index + 1}`}
                className="w-full h-40 lg:h-[55vh]  object-cover cursor-pointer"
              />
            </div>
          </motion.div>
        ))}
        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          imageSrc={selectedImage?.src}
          petImages={petImages}
        />
      </div>
    </div>
  );
};

export default Gallery;
