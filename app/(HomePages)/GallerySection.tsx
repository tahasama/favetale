"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import pet20 from "../images/pet20.jpg";
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
// import ImageModal from "../explore/(components)/gallery/ImageModal";
import Link from "next/link";
import pet7 from "../images/pet7a.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCart } from "../provider/CartProvider";

const vollkorn = Vollkorn({ subsets: ["latin"], weight: "400" });

const GallerySection = () => {
  const pets = [
    { name: "fish", img: pet20 },
    { name: "cats", img: pet2 },
    { name: "dogs", img: pet3 },
    { name: "birds", img: pet12 },
    { name: "small pets", img: pet11 },
  ];

  const {
    setSelectedImage,
    setUploadpetModalOpen,
    filterImage,
    setFilterImage,
  } = useCart();
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

  const ref = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundTranslateY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textTranslateY = useTransform(scrollYProgress, [0, 1], [0, 300]); // Adjust the range and values for text
  const ops = useTransform(scrollYProgress, [0, 0.8], [1, 0]); // Adjust the range and values for text
  // const ops1 = useTransform(scrollYProgress, [0.5, 0.52], [1, 0]); // Adjust the range and values for text
  const ops1 = useTransform(scrollYProgress, [0.5, 0.42], [1, 0]); // Adjust the range and values for text

  return (
    <section className="bg-tealLight py-12 w-auto -mt-10 sm:mt-0">
      <div className=" text-center">
        <div
          className=" relative w-full h-[100vh] flex flex-col items-center"
          ref={ref}
        >
          <motion.div
            className={`absolute top-0 z-40 translate-x-1/2 w-fit p-3.5 rounded-md mx-4 md:mx-2 sm:gap-4 lg:mx-2`}
            style={{ y: textTranslateY }}
          >
            <div className="grid place-items-center">
              <div className="bg-teal-500 h-1 w-40 ml-2 my-5"></div>

              <h2
                className={`lg:text-3xl font-semibold mb-4 ${vollkorn.className}`}
              >
                Discover Our Gallery
              </h2>
              <div className="bg-teal-500 h-1 w-40 ml-2 mb-7"></div>
            </div>
            <Link href="/explore">
              <button className="hover:animate-buttonHover my-4 bg-gradient-to-r from-indigo-500 to-indigo-300 text-white px-4 py-3  sm:px-8 sm:py-3 shadow-xl rounded-3xl">
                Explore Gallery
              </button>
            </Link>
          </motion.div>

          <motion.div
            className="absolute inset-0 z-0 xl:top-20 bg-100% sm:bg-50%"
            style={{
              backgroundImage: `url(${pet7.src})`,
              backgroundPosition: "center center", // Center the image horizontally and vertically
              // backgroundSize: "55% auto", // Ensure the image fits while maintaining its aspect ratio
              y: backgroundTranslateY,
              // width: "70vh",
              backgroundRepeat: "no-repeat",
              opacity: ops,
            }}
          />
        </div>
      </div>
      <div className="-mt-56 sm:-mt-44 lg:-mt-32 xl:-mt-32 ">
        <Swiper
          slidesPerView={
            windowWidth < 700 ? 1.4 : windowWidth < 900 ? 2.4 : 3.4
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
          className=" bg-tealLight"
        >
          {pets.map((pet: any, index: any) => (
            <SwiperSlide
              className="bg-tealDark !w-80 mx-1 rounded-lg mt-2"
              key={index}
            >
              <Link href={"/explore/gallery"}>
                <Image
                  src={pet.img}
                  alt="pet"
                  className=" cursor-pointer  rounded-lg shadow-xl bg-tealDark"
                />
                {pet.name}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <ImageModal /> */}
    </section>
  );
};

export default GallerySection;
