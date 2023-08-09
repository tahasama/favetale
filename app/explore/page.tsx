import Link from "next/link";
import React from "react";
import Image from "next/image";
import pet1 from "../images/1.jpg";
import pet2 from "../images/2.jpg";
import pet3 from "../images/3.jpg";

const ExplorePage = () => {
  return (
    <section className="mt-20">
      <div className="flex flex-col md:flex-row">
        {/* First Card */}
        <div className="w-full md:w-1/2 bg-gray-100 p-6 mb-4 md:mr-4 relative">
          <h2 className="text-2xl font-semibold mb-2">Big Headline</h2>
          <div className="absolute inset-0">
            <Image
              src={pet3}
              alt="Image 1"
              className="w-full h-full aspect-auto object-cover scale-75"
            />
          </div>
          <button className="absolute bottom-0 left-0 bg-indigo-500 text-white px-4 py-2 rounded-md shadow-md">
            Call to Action
          </button>
        </div>

        <div className="md:flex md:flex-col md:w-2/5">
          {/* Second Card */}
          <div className="bg-gray-100 p-4 mb-4 md:mb-2">
            <Image
              src={pet2}
              alt="Image 2"
              className="w-full h-auto aspect-auto object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Headline 2</h3>
            <p className="text-gray-600 mb-2">Subtext here</p>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-md">
              Call to Action
            </button>
          </div>

          {/* Third Card */}
          <div className="flex bg-gray-100 p-6">
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-2">Headline 3</h3>
              <p className="text-gray-600 mb-2">Subtext here</p>
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-md">
                Call to Action
              </button>
            </div>
            <Image
              src={pet1}
              alt="Image 3"
              className="w-1/2 h-auto aspect-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplorePage;
