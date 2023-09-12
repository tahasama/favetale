import { Vollkorn } from "next/font/google";
import Image from "next/image";
import React from "react";
import pet8 from "../images/8.jpg";
import pet9 from "../images/9.jpg";
import pet10 from "../images/10.jpg";
import user from "../images/user/userf.jpg";
import user2 from "../images/user/user2.png";
import Link from "next/link";

const vollkorn = Vollkorn({ subsets: ["latin"], weight: "400" });

const communityContributions = [
  {
    image: pet8,
    title: "Rescue Story: Finding Hope",
    description:
      "Read about how our community member rescued a stray puppy and gave it a forever home.",
    location: "Paris",
    date: "24 Jun 2023",
    writer: "Jon Smith",
  },
  {
    image: pet10,
    title: "DIY Pet Accessories: Creative Crafts",
    description:
      "Explore a step-by-step guide to making adorable pet accessories that our member created.",
    location: "NY",
    date: "15 Jan 2022",
    writer: "Elena Cruz",
  },
  {
    image: pet9,
    title: "Training Tips: Happy Paws",
    description:
      "Discover expert training tips shared by a community member that helped improve their pet's behavior.",
    location: "Tokyo",
    date: "31 Mar 2023",
    writer: "Sylvia Throne",
  },
];

const CommunitySection = () => {
  return (
    <section className="bg-tealDark py-12 ">
      <div className="container mx-auto text-center">
        <h2 className={`text-3xl font-semibold mb-8 ${vollkorn.className}`}>
          Community Spotlights
        </h2>
        <p className="text-gray-600 mb-6">
          Our community is a vibrant space where pet lovers from around the
          world come together to share their stories, connect with fellow
          enthusiasts, and celebrate the joy of having pets. Explore the amazing
          contributions from our community members below!
        </p>
        <div className="flex flex-col gap-8 mx-2 md:mx-6">
          {/* User Contributions */}
          {communityContributions.map((contribution: any, i: any) => (
            <div
              key={i}
              className={`bg-tealLight rounded-lg shadow-xl flex mx-2 sm:w-4/5 lg:w-2/3 overflow-hidden justify-between self-center flex-col ${
                i % 2 !== 0
                  ? "md:flex-row sm:self-start"
                  : "md:flex-row-reverse sm:self-end"
              }`}
            >
              <div>
                <Image
                  src={contribution.image}
                  alt="Featured Story 2"
                  className="w-full h-full aspect-auto object-cover cursor-pointer"
                />
              </div>

              <div className="p-4 flex  justify-evenly flex-col h-auto">
                <span>
                  <h3
                    className={`text-md lg:text-xl font-semibold mb-3 ${vollkorn.className}`}
                  >
                    {contribution.title}
                  </h3>
                  <p className="text-gray-400 text-xs mb-2">
                    📅 {contribution.date} | 📌
                    {contribution.location}
                  </p>
                </span>
                <p className="text-gray-600 lg:line-clamp-3 sm:line-clamp-2">
                  {contribution.description}
                </p>
                <p className="text-gray-500 text-xs self-end">
                  ~ {contribution.writer}
                </p>
                <button className="hover:animate-buttonHover mt-4 bg-gradient-to-r from-indigo-500 to-indigo-300 text-white px-4 py-2 rounded-md shadow-md">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials or Quotes */}
        <div className="mt-10">
          <div className="p-5 flex flex-col items-center space-y-5 bg-teal-700 mx-2  rounded-lg shadow-md">
            <p
              className={`text-2xl tracking-wider text-slate-200 ${vollkorn.className}`}
            >
              What Our Community Members Say
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-tealLight p-4 rounded-lg shadow-md flex flex-col sm:flex-row  space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={user}
                    alt="Featured Story 2"
                    className="h-16 w-16 cursor-pointer rounded-full"
                  />
                </div>
                <div className="flex-grow">
                  <span className="text-4xl">💬</span>
                  <p className={`text-gray-600 italic ${vollkorn.className}`}>
                    "Being a part of this community has truly enriched my life.
                    I've learned so much from fellow pet lovers and made
                    lifelong friends."
                  </p>
                  <p className="text-gray-500 mt-2">
                    - Dude Johnson, Pet Enthusiast
                  </p>
                </div>
              </div>
              <div className="bg-tealLight p-4 rounded-lg shadow-md flex flex-col sm:flex-row  space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={user2}
                    alt="Featured Story 3"
                    className="h-16 w-16 cursor-pointer rounded-full"
                  />
                </div>
                <div className="flex-grow">
                  <span className="text-4xl py-4">💬</span>
                  <p className={`text-gray-600 italic ${vollkorn.className}`}>
                    "I have had am ncredible journey with this community. I've
                    found valuable advice, shared heartwarming stories, and
                    connected with people who share my passion for pets. This is
                    more than just a community; it's a family."
                  </p>
                  <p className="text-gray-500 mt-2">
                    - Jane Smith, Pet Enthusiast
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link href={"/community"}>
            <button className="hover:animate-buttonHover mt-6 bg-gradient-to-r from-indigo-500 to-indigo-300 text-white px-4 py-3 sm:px-12 sm:py-4 shadow-xl rounded-3xl">
              Go to Community
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
