import React from "react";
import Image from "next/image";

import pet1 from "../images/1.jpg";
import pet2 from "../images/2.jpg";
import pet3 from "../images/3.jpg";
import pet4 from "../images/4.jpg";
import { Volkhov, Vollkorn } from "next/font/google";

const vollkorn = Vollkorn({ subsets: ["latin"], weight: "400" });

const GallerySection = () => {
  const pets = [pet1, pet2, pet3];
  return (
    <section className="bg-tealDark py-12">
      <div className="container mx-auto text-center">
        <h2 className={`text-3xl font-semibold mb-8 ${vollkorn.className}`}>
          Featured Pets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-2 sm:gap-4 lg:mx-2">
          {pets.map((pet: any) => (
            <div className="bg-tealDark eleva rounded-lg shadow-xl overflow-hidden">
              <Image
                src={pet}
                alt="pet"
                className="w-full h-auto cursor-pointer "
              />
            </div>
          ))}
        </div>
        <div className="mt-10">
          <div className="bg-tealLight rounded-lg shadow-md overflow-hidden  lg:mx-36">
            <div className="p-4 flex flex-col items-center space-y-5">
              <p
                className={`text-gray-600 text-2xl tracking-wider ${vollkorn.className}`}
              >
                Meet our winner of the Week!{" "}
              </p>
              <span className="text-5xl">👑</span>
              <Image
                src={pet4}
                alt="Pet of the Week"
                className="w-12/12 xl:w-8/12 h-auto rounded-lg cursor-pointer"
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
