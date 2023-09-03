"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import pet1 from "../images/1.jpg";
import pet2 from "../images/2.jpg";
import pet3 from "../images/3.jpg";
import pet4 from "../images/4.jpg";
import pet11 from "../images/11.jpg";
import pet12 from "../images/12.jpg";
import { Vollkorn } from "next/font/google";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Navigation, Pagination } from "swiper/modules";
import ImageModal from "../explore/(components)/ImageModal";
import Link from "next/link";

const vollkorn = Vollkorn({ subsets: ["latin"], weight: "400" });

const GallerySection = () => {
  const pets = [pet1, pet2, pet3, pet11, pet12];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const [selectedImage, setSelectedImage] = useState<any>(null);

  const handleImageClick = (image: any) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const openModal = (pet: any) => {
    setIsModalOpen(true);
    setImage(pet);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(typeof window !== "undefined" ? window.innerWidth : 0);
    };
    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize);
    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="bg-tealDark py-12">
      <div className="container mx-auto text-center">
        <h2 className={`text-3xl font-semibold mb-8 ${vollkorn.className}`}>
          Featured Pets
        </h2>
        <div className=" mx-4 md:mx-2 sm:gap-4 lg:mx-2">
          <Swiper
            slidesPerView={
              windowWidth < 700 ? 1.3 : windowWidth < 900 ? 2.3 : 3.3
            }
            spaceBetween={20}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="my-swiper "
          >
            {pets.map((pet: any, index: any) => (
              <SwiperSlide className="bg-tealDark  rounded-lg" key={index}>
                <Image
                  src={pet}
                  alt="pet"
                  className="w-full h-auto cursor-pointer  rounded-lg shadow-xl bg-tealDark"
                  onClick={() => handleImageClick(pet)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <ImageModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            imageSrc={selectedImage?.src}
            petImages={pets}
          />
        </div>
        <div className="mt-10 flex justify-center">
          <div className="bg-tealLight rounded-lg shadow-md overflow-hidden mx-2 sm:w-3/5">
            <div className="p-4 flex flex-col items-center space-y-3">
              <p
                className={`text-gray-600 text-2xl tracking-wider ${vollkorn.className}`}
              >
                Meet our winner of the Week!{" "}
              </p>
              <span className="text-5xl">👑</span>
              <Image
                src={pet4}
                alt="Pet of the Week"
                className="w-12/12 xl:w-10/12 h-auto rounded-lg cursor-pointer"
                onClick={() => handleImageClick(pet4)}
              />
              <div className="mt-2 flex flex-col items-center justify-between w-full">
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">❤️ Likes: 100</span>
                  <span className="text-gray-600">💬 Comments: 50</span>
                </div>
                <Link href={"/explore?section=Gallery"}>
                  <button className="hover:animate-buttonHover mt-4 bg-gradient-to-r from-indigo-500 to-indigo-300 text-white px-4 py-3  sm:px-8 sm:py-3 shadow-xl rounded-3xl">
                    Explore Gallery
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
