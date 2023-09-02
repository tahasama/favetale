import React from "react";
import Image from "next/image";

import pet5 from "../images/5.jpg";
import pet6 from "../images/6.jpg";
import pet7 from "../images/7.jpg";
import Link from "next/link";

const StorySection = () => {
  const stories = [
    {
      id: 0,
      image: pet5,
      title: "Amazing Pet Adventures",
      description:
        "Join us as we explore incredible stories of pets and their ownersembarking on unforgettable adventures.",
    },
    {
      id: 1,
      image: pet6,
      title: "Heartwarming Pet Tales",
      description:
        " Discover touching stories that showcase the strong bonds between pets and their humans, leaving your heart warmed and inspired.",
    },
    {
      id: 2,
      image: pet7,
      title: "Fast and Curious",
      description:
        " stories of pets and their ownersembarking, the strong bonds between pets and their humans.",
    },
  ];
  return (
    <section className="bg-tealLight py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Featured Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 place-items-center">
          {/* Featured Story 1 */}

          {stories.map((story: any) => (
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full pb-16">
              <Image
                src={story.image}
                alt="Featured Story 2"
                className="w-full h-auto cursor-pointer"
              />
              <div className="p-4 relative">
                <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-gray-600 line-clamp-2 ">
                  {story.description}
                </p>
                <div className="absolute -bottom-10 left-0 w-full flex justify-center items-center pt-5">
                  <button className="hover:animate-buttonHover bg-teal-500 text-white px-6 py-2 rounded-full">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href="/explore?section=story">
          <button className="hover:animate-buttonHover text-lg mt-8 bg-gradient-to-r from-indigo-500 to-indigo-300 text-white px-4 py-3 sm:px-12 sm:py-4 shadow-xl rounded-2xl">
            Check stories
          </button>
        </Link>
      </div>
    </section>
  );
};

export default StorySection;
