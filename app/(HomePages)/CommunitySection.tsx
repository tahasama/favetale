import { Vollkorn } from "next/font/google";
import Image from "next/image";
import React from "react";
import pet8 from "../images/8.jpg";
import pet9 from "../images/9.jpg";
import pet10 from "../images/10.jpg";
import user from "../images/user.jpg";

const vollkorn = Vollkorn({ subsets: ["latin"], weight: "400" });

const communityContributions = [
  {
    image: pet8,
    title: "Rescue Story: Finding Hope",
    description:
      "Read about how our community member rescued a stray puppy and gave it a forever home.",
  },
  {
    image: pet10,
    title: "DIY Pet Accessories: Creative Crafts",
    description:
      "Explore a step-by-step guide to making adorable pet accessories that our member created.",
  },
  {
    image: pet9,
    title: "Training Tips: Happy Paws",
    description:
      "Discover expert training tips shared by a community member that helped improve their pet's behavior.",
  },

  // Add more contributions as needed
];

const contribution = [
  {
    image: pet8,
    title: "Rescue Story: Finding Hope",
    description:
      "Read about how our community member rescued a stray puppy and gave it a forever home.",
  },
  {
    image: pet10,
    title: "DIY Pet Accessories: Creative Crafts",
    description:
      "Explore a step-by-step guide to making adorable pet accessories that our member created.",
  },
  {
    image: pet9,
    title: "Training Tips: Happy Paws",
    description:
      "Discover expert training tips shared by a community member that helped improve their pet's behavior.",
  },

  // Add more contributions as needed
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
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mx-16 ">
          {/* User Contributions */}
          {communityContributions.map((contribution: any, i: any) => (
            <div
              className={`bg-tealLight rounded-lg shadow-xl flex  w-fit overflow-hidden justify-between  ${
                i % 2 !== 0 ? "flex-row " : "flex-row-reverse"
              }`}
            >
              <div>
                <Image
                  src={contribution.image}
                  alt="Featured Story 2"
                  className="w-full h-96 aspect-auto object-cover cursor-pointer"
                  width={500}
                />
              </div>

              <div className="p-4 flex items-center justify-center flex-col">
                <h3
                  className={`text-xl font-semibold mb-2 ${vollkorn.className}`}
                >
                  {contribution.title}
                </h3>
                <p className="text-gray-600">{contribution.description}</p>
                <button className="mt-4 bg-gradient-to-r from-indigo-500 to-indigo-300 text-white px-4 py-2 rounded-md shadow-md">
                  Explore Contribution
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Testimonials or Quotes */}
        <div className="mt-10">
          <div className="bg-tealLight lg:rounded-lg shadow-md overflow-hidden lg:mx-56">
            <div className="p-4 flex flex-col items-center space-y-5">
              <p
                className={`text-gray-600 text-2xl tracking-wider ${vollkorn.className}`}
              >
                What Our Community Members Say
              </p>
              <div className="flex">
                <Image
                  src={user}
                  alt="Featured Story 2"
                  className="w-full h-16 aspect-auto object-cover cursor-pointer rounded-full"
                  width={500}
                />
                <span className="text-5xl">💬</span>
              </div>
              <div className="mt-4">
                <p className={`text-gray-600 italic ${vollkorn.className}`}>
                  "Being a part of this community has truly enriched my life.
                  I've learned so much from fellow pet lovers and made lifelong
                  friends."
                </p>
                <p className="text-gray-500 mt-2">
                  - Dude Johnson, Pet Enthusiast
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
