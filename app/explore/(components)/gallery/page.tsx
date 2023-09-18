"use client";
import React, { useState } from "react";
import i13 from "../../../images/13.jpg";
import i14 from "../../../images/14.jpg";
import i15 from "../../../images/15.jpg";
import i16 from "../../../images/16.jpg";
import i17 from "../../../images/17.jpg";
import i18 from "../../../images/18.jpg";
import i19 from "../../../images/19.jpg";
import Image from "next/image";
import ImageModal from "./ImageModal";
import { motion } from "framer-motion";
import Link from "next/link";
import UploadImageModal from "./UploadImageModal";

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  console.log(
    "🚀 ~ file: GallerySection.tsx:31 ~ GallerySection ~ selectedImage:",
    selectedImage
  );

  const petImages = [i13, i14, i15, i16, i17, i18, i19];

  const handleImageClick = (image: any) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  return (
    <div className="container  my-20  w-full">
      {/* Prominent Call-to-Action */}
      <div className="mb-6">
        <div className="bg-yellow-500 p-6 sm:p-12 rounded-lg text-left leading-loose tracking-wide  ">
          <h2 className="text-2xl sm:text-4xl font-semibold text- mb-5">
            Browse Our Gallery
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-8">
            Find lots and lots of pet moments shared by our beloved community,
          </p>
          <button
            onClick={() => setUploadModalOpen(true)}
            className="bg-amber-700 hover:text-amber-700 text-white sm:px-4 sm:py-3 px-3 py-2 rounded-md hover:bg-tealLight  transition-colors duration-500"
          >
            Upload an Image
          </button>
        </div>
      </div>
      <UploadImageModal
        isOpen={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
      />

      <div className="mt-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 sm:gap-4 mx-2 sm:mx-auto max-w-6xl">
        {petImages.map((image, index) => (
          <motion.div
            key={index}
            className="relative mb-8"
            initial={{ opacity: 0, y: index * 100 + 100 }} // Initial state (hidden and slightly moved down)
            animate={{ opacity: 1, y: 0 }} // Animation state (visible and at normal position)
            transition={{ duration: 0.75, delay: 0.75 }} // Animation duration
          >
            <div
              className="overflow-hidden rounded-lg shadow-md"
              onClick={() => handleImageClick(image)}
            >
              <Image
                src={image}
                alt={`Pet Image ${index + 1}`}
                className="w-full h-40 lg:h-[55vh]  object-cover cursor-pointer"
                width={1000}
                height={1000}
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
