import React from "react";
// import heroImage from "../images/hero-image.jpg";
// import heroImage from "../images/pets5.jpg";
import heroImage from "../images/pets7.jpg";
// import heroImage from "../images/pets4.jpg";
import Image from "next/image";
import { Old_Standard_TT } from "next/font/google";
import Link from "next/link";

const ost = Old_Standard_TT({ subsets: ["latin"], weight: "700" });

const HeroSection = () => {
  return (
    <section className="hero-section bg-tealLight min-h-[calc(100vh-80px)] flex flex-col items-center justify-center">
      <h1
        className={`mx-2 sm:mx-0 text-3xl md:text-4xl lg:text-5xl mt-5 mb-8 sm:mt-8 sm:-mb-4 lg:mt-2 lg:mb-6  font-semibold text-teal-700  ${ost.className}`}
      >
        Embark on Your Pet's Journey
      </h1>
      <div className="container text-center flex flex-col md:flex-row md:text-sm lg:text-lg">
        {/* Layout for larger screens (tablets and laptops) */}
        <div className="md:flex flex-col justify-between items-center mx-6 my-6 md:my-10 md:w-[25%] mt-8 sm:mt-0 space-y-8 order-2 md:order-1">
          <div className="animate-fadeIn flex flex-col items-center group cursor-pointer delay-1000">
            <span className="text-6xl sm:text-5xl mb-2">🐾</span>
            <p className="text-xl font-semibold">Explore Galleries</p>
            <p className="text-gray-600 mt-2">
              Find shared moments and memories of beloved companions.
            </p>
            <Link href={"/explore?section=Gallery"}>
              <button className="hover:animate-buttonHover mt-4 lg:opacity-0 animate-fadeInOut group-hover:opacity-100 bg-gradient-to-r from-indigo-500 to-indigo-300 p-2 rounded-md transition-all duration-1000 cursor-pointer">
                Discover
              </button>
            </Link>
          </div>
          <div className="animate-fadeIn flex flex-col items-center group">
            <span className="text-6xl sm:text-5xl mb-2">🌟</span>
            <p className="text-xl font-semibold">Share Your Tale</p>
            <p className="text-gray-600 mt-2">
              Share your heartwarming pet tales with the world.
            </p>
            <Link href={"/explore?section=Stories"}>
              <button className="hover:animate-buttonHover mt-4 lg:opacity-0 animate-fadeInOut group-hover:opacity-100 bg-gradient-to-r from-indigo-500 to-indigo-300 py-2 px-3 rounded-md transition-all duration-1000 cursor-pointer">
                Inspire
              </button>
            </Link>
          </div>
        </div>

        <div className="text-center md:flex md:items-center md:justify-center md:w-[50%] order-1 md:order-2">
          <Image
            src={heroImage}
            alt="Happy pets"
            className="mx-auto object-cover w-5/6"
          />
        </div>

        <div className="md:flex flex-col justify-between items-center mx-6 my-6 md:my-10 md:w-[25%] mt-2 sm:mt-0 space-y-8 order-2 md:order-3">
          <div className="animate-fadeIn flex flex-col items-center group">
            <span className="text-6xl sm:text-5xl mb-2">🛍️</span>
            <p className="text-xl font-semibold">Browse Store</p>
            <p className="text-gray-600 mt-2">
              Get food, toys, gadget and all sort of things for your pet.
            </p>
            <Link href={"/store"}>
              <button className="hover:animate-buttonHover mt-4 animate-fadeInOut lg:opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500 to-indigo-300 py-2 px-6 rounded-md transition-all duration-1000 cursor-pointer">
                Shop
              </button>
            </Link>
          </div>
          <div className=" flex flex-col items-center group">
            <span className="text-6xl sm:text-5xl mb-2">🌐</span>
            <p className="text-xl font-semibold">Global Community</p>
            <p className="text-gray-600 mt-2">
              Join a global community of pet lovers and enthusiasts.
            </p>

            <Link href={"/community"}>
              <button className="hover:animate-buttonHover mt-4 animate-fadeInOut lg:opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500 to-indigo-300 p-2 rounded-md transition-all duration-1000 cursor-pointer">
                Connect
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
