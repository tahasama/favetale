"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import veterinary from "../../../images/coverImages/veterinary.jpg";
import food from "../../../images/coverImages/food.jpg";
import sport from "../../../images/coverImages/sport3.jpg";
import grooming from "../../../images/coverImages/grooming.jpg";
import training from "../../../images/coverImages/training.jpg";
import social from "../../../images/coverImages/social.jpg";
import safe from "../../../images/coverImages/safe2.jpg";
import care from "../../../images/coverImages/care.jpg";
import para from "../../../images/coverImages/para3.jpg";
import time from "../../../images/coverImages/time.jpg";
import {
  MotionValue,
  motion,
  useAnimation,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Tips = () => {
  const tipsData = [
    {
      id: 1,
      title: "Regular Veterinary Check-ups",
      description:
        "Consistent veterinary check-ups are fundamental to your pet's well-being.",
      emoji: "🏥",
      coverImage: veterinary.src,
    },
    {
      id: 2,
      title: "Balanced Diet and Nutrition",
      description:
        "Provide a balanced diet that meets the nutritional needs of your pet.",
      emoji: "🍎",
      coverImage: food.src,
    },
    {
      id: 3,
      title: "Daily Exercise and Play",
      description:
        "Engage your pet in daily exercise and play href maintain physical and mental health.",
      emoji: "🏃‍♂️",
      coverImage: sport.src,
    },
    {
      id: 4,
      title: "Regular Grooming",
      description:
        "Practice regular grooming href keep your pet's coat and skin healthy.",
      emoji: "🛁",
      coverImage: grooming.src,
    },
    {
      id: 5,
      title: "Positive Reinforcement Training",
      description:
        "Use positive reinforcement methods href train and encourage good behavior in your pet.",
      emoji: "🐕",
      coverImage: training.src,
    },
    {
      id: 6,
      title: "Socialization Opportunities",
      description:
        "Expose your pet href various environments and socialization experiences.",
      emoji: "🐶",
      coverImage: social.src,
    },
    {
      id: 7,
      title: "Safe Environment",
      description: "Create a safe and secure environment for your pet at home.",
      emoji: "🏠",
      coverImage: safe.src,
    },
    {
      id: 8,
      title: "Regular Dental Care",
      description:
        "Prioritize dental care by brushing your pet's teeth and providing dental treats.",
      emoji: "🦷",
      coverImage: care.src,
    },
    {
      id: 9,
      title: "Prevent Parasites",
      description:
        "Protect your pet from parasites with regular preventive measures.",
      emoji: "🐛",
      coverImage: para.src,
    },
    {
      id: 10,
      title: "Quality Time together",
      description:
        "Spend quality time bonding with your pet to strengthen your relationship.",
      emoji: "🌺",
      coverImage: time.src,
    },
  ];

  const controls = useAnimation();
  useEffect(() => {
    controls.stop();
    controls.set({ opacity: 0, y: 500 });

    // Start the animation
    controls.start({ opacity: 1, y: -70 });
  }, []);

  const handleSlideChange = () => {
    console.log("uuuuuu");
    controls.stop();
    controls.set({ opacity: 0, y: 500 });

    // Start the animation
    controls.start({ opacity: 1, y: -70 });
  };

  const u = [1, 2, 3, 4, 5, 6];

  return (
    <div className="h-[81.8vh] xl:h-[85.5vh]  flex items-center justify-center flex-col mt-20 ">
      {/* <h2 className="text-3xl font-semibold mb-6">Advice & Tips</h2> */}
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        speed={500}
        modules={[Mousewheel, Pagination]}
        onSlideChange={handleSlideChange}
      >
        {tipsData.map((tip: any, x: number) => (
          <SwiperSlide key={x} className="relative">
            <Image
              src={tip.coverImage}
              alt="A London skyscraper"
              className=""
              width={2000}
              height={1000}
            />
            <motion.div
              animate={controls}
              transition={{ duration: 0.7 }} // Animation duration and delay
              className=" bg-white bg-opacity-80 rounded-lg shadow-md bottom-0 xl:bottom-3 p-5  sm:mx-5 md:p-7 xl:p-7 text-left left-0  w-full sm:w-5/6 lg:w-4/6 transition-all duration-200 absolute sm:right-5"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3 lg:mb-4">
                {tip.emoji}
                {tip.title}
              </h3>
              <p className="text-gray-600 text-sm mb-7 md:text-base lg:text-lg">
                {tip.description}
              </p>
              <Link
                href={`/explore/tips/${tip.id}`}
                className="hover:animate-bounceQ bg-gradient-to-r from-indigo-500 to-indigo-300 text-white text-base lg:text-lg px-3 md:px-4 lg:px-6 py-3 md:py-3 lg:py-3 sm:shadow-xl md:shadow-lg lg:shadow-xl rounded-lg"
              >
                <>Read More</>
              </Link>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Tips;
