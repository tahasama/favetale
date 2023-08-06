"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import pet1 from "../images/1.jpg";
import pet2 from "../images/2.jpg";
import pet3 from "../images/3.jpg";
import pet4 from "../images/4.jpg";
import pet11 from "../images/11.jpg";
import pet12 from "../images/12.jpg";
import { Volkhov, Vollkorn } from "next/font/google";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Navigation, Pagination } from "swiper/modules";

const vollkorn = Vollkorn({ subsets: ["latin"], weight: "400" });

const GallerySection = () => {
  const pets = [pet1, pet2, pet3, pet11, pet12];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the window width state whenever the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
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
              window.innerWidth < 700 ? 1 : window.innerWidth < 900 ? 2 : 3
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
            className="my-swiper"
          >
            {pets.map((pet: any) => (
              <SwiperSlide>
                <Image
                  src={pet}
                  alt="pet"
                  className="w-full h-auto cursor-pointer rounded-lg shadow-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
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
              />
              <div className="mt-2 flex flex-col items-center justify-between w-full">
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">❤️ Likes: 100</span>
                  <span className="text-gray-600">💬 Comments: 50</span>
                </div>
                <button className="mt-4 bg-gradient-to-r from-indigo-500 to-indigo-300 text-white px-4 py-3  sm:px-8 sm:py-3 shadow-xl rounded-3xl">
                  Explore Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
