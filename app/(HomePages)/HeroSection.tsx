import React from "react";
// import heroImage from "../images/hero-image.jpg";
// import heroImage from "../images/pets5.jpg";
import heroImage from "../images/pets7.jpg";
// import heroImage from "../images/pets4.jpg";
import Image from "next/image";
import { Old_Standard_TT } from "next/font/google";

const ost = Old_Standard_TT({ subsets: ["latin"], weight: "700" });

const HeroSection = () => {
  return (
    <section className="hero-section bg-tealLight min-h-[calc(100vh-80px)] flex flex-col items-center justify-center">
      <h1
        className={`text-3xl md:text-4xl lg:text-5xl mt-5 mb-8 sm:mt-8 sm:-mb-4 lg:mt-2 lg:mb-6  font-semibold text-teal-700  ${ost.className}`}
      >
        Embark on Your Pet's Journey
      </h1>
      <div className="container text-center flex flex-col md:flex-row md:text-sm lg:text-lg">
        {/* Layout for larger screens (tablets and laptops) */}
        <div className="md:flex flex-col justify-between items-center mx-6 my-6 md:my-10 md:w-[25%] mt-8 sm:mt-0 space-y-8 order-2 md:order-1">
          <div className="flex flex-col items-center group cursor-pointer">
            <span className="text-6xl sm:text-5xl mb-2">🐾</span>
            <p className="text-xl font-semibold">Explore Galleries</p>
            <p className="text-gray-600 mt-2">
              Find shared moments and memories of beloved companions.
            </p>
            <button className="mt-4 lg:opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500 to-indigo-300 p-2 rounded-md transition-all duration-500 cursor-pointer">
              Discover
            </button>
          </div>
          <div className="flex flex-col items-center group cursor-pointer">
            <span className="text-6xl sm:text-5xl mb-2">🌟</span>
            <p className="text-xl font-semibold">Share Your Tale</p>
            <p className="text-gray-600 mt-2">
              Share your heartwarming pet tales with the world.
            </p>
            <button className="mt-4 lg:opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500 to-indigo-300 p-2 rounded-md transition-all duration-500 cursor-pointer">
              Inspire
            </button>
          </div>
        </div>

        <div className="text-center md:flex md:items-center md:justify-center md:w-[50%] order-1 md:order-2">
          <Image
            src={heroImage}
            alt="Happy pets"
            className="mx-auto object-cover w-5/6"
          />
        </div>

        <div className="md:flex flex-col justify-between items-center mx-6 md:my-10 md:w-[25%] mt-8 sm:mt-0 space-y-8 order-2 md:order-3">
          <div className="flex flex-col items-center group cursor-pointer">
            <span className="text-6xl sm:text-5xl mb-2">🏆</span>
            <p className="text-xl font-semibold">Celebrate Bonds</p>
            <p className="text-gray-600 mt-2">
              Celebrate the special bond between pets and their humans.
            </p>
            <button className="mt-4 lg:opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500 to-indigo-300 p-2 rounded-md transition-all duration-500 cursor-pointer">
              Celebrate
            </button>
          </div>
          <div className="flex flex-col items-center group ">
            <span className="text-6xl sm:text-5xl mb-2">🌐</span>
            <p className="text-xl font-semibold">Global Community</p>
            <p className="text-gray-600 mt-2">
              Join a global community of pet lovers and enthusiasts.
            </p>
            <button className="mt-4 lg:opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500 to-indigo-300 p-2 rounded-md transition-all duration-500 cursor-pointer">
              Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
