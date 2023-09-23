"use client";
import React, { useState } from "react";
import Image from "next/image";

import pet5 from "../images/5.jpg";
import pet6 from "../images/6.jpg";
import pet7 from "../images/7.jpg";

import user1 from "../images/users/user1.jpg";
import user2 from "../images/users/user2.jpg";
import user3 from "../images/users/user3.jpg";
import user4 from "../images/users/user4.jpg";
import user5 from "../images/users/user5.jpg";

import story1 from "../images/stories/story1.jpg";
import story2 from "../images/stories/story2.jpg";
import story3 from "../images/stories/story3.jpg";
import story4 from "../images/stories/story4.jpg";

import Link from "next/link";
import { Vollkorn } from "next/font/google";

const vollkorn = Vollkorn({ subsets: ["latin"], weight: "400" });

const StorySection = () => {
  const stories = [
    {
      id: 1,
      title: "My Rescue Journey with Bella",
      excerpt:
        "Read about my heartwarming journey with Bella, a shelter dog, as she found her forever home.",
      image: story1.src,
      writer: {
        name: "Bella's Best Friend",
        image: user1.src,
      },
      likes: 56,
      content: `
  My journey with Bella, the shelter dog, began with a visit to our local animal shelter. I had heard about her through a friend and was instantly drawn to her story.

  Bella was a beautiful soul, patiently waiting for a loving family to come into her life. Her eyes told a story of resilience and hope. I knew I had to be the one to give her a forever home.

  The day I brought Bella home marked the start of a transformation, not just for her but for both of us. She went from being a shelter dog to becoming an integral part of my life. Our bond grew stronger with each passing day.

  Bella's happiness radiated throughout our home. She enjoyed long walks in the park, cuddles on the couch, and a warm bed to sleep in every night. It was a journey filled with love and joy.

  Bella's story is a testament to the power of adoption and the incredible transformation that can occur when a shelter pet finds a loving family. She reminds me every day that every shelter animal deserves a chance at happiness.

  Join me in celebrating Bella's rescue journey, and may her story inspire others to open their hearts and homes to shelter pets in need.
      `,
      comments: [
        {
          text: "What a heartwarming story! Bella is so lucky to have found a loving family.",
          user: {
            name: "AnimalLover42",
            image: user2.src,
          },
        },
        {
          text: "Bella's story brought tears to my eyes. It's amazing how love can transform lives.",
          user: {
            name: "PetRescuer",
            image: user3.src,
          },
        },
      ],
    },
    {
      id: 2,
      title: "Max's Journey: From Stray to My Family",
      excerpt:
        "Discover my incredible journey with Max, a stray cat, as he transformed into a beloved family member.",
      image: story2.src,
      writer: {
        name: "Max's Proud Owner",
        image: user4.src,
      },
      likes: 78,
      content: `
  Max's journey from stray to family member is a story that I'm privileged to share. It all began when I spotted Max on the streets, a stray cat surviving on his own.

  My heart went out to Max, and I knew I had to make a difference in his life. I brought him home, and that marked the beginning of an incredible transformation.

  Max, once a wary and cautious stray, blossomed into a loving and affectionate cat. He found comfort in a warm home, delicious meals, and the gentle touch of our family. 

  The bond between Max and me grew stronger with each passing day. He became more than just a pet; he became a cherished family member. Max's journey is a reminder that even a stray cat can become an integral part of a family.

  Today, Max continues to inspire us with his resilience and love. His story showcases the power of second chances and the magic of transformation. Max is living proof that love can heal and bring happiness.

  Join me in celebrating Max's journey from stray to family, and may his story encourage others to rescue animals in need.
      `,
      comments: [
        {
          text: "Max's story is a beautiful reminder that every stray deserves a loving home. Thank you for sharing.",
          user: {
            name: "CatLover88",
            image: user5.src,
          },
        },
        {
          text: "I'm in awe of Max's transformation. It just goes to show how love can heal and bring happiness.",
          user: {
            name: "RescueAdvocate",
            image: user1.src,
          },
        },
      ],
    },
    {
      id: 3,
      title: "My Unbreakable Bond with Luna",
      excerpt:
        "Explore the extraordinary bond between me and my service dog, Luna, as we conquer life's challenges together.",
      image: story3.src,
      writer: {
        name: "Luna's Companion",
        image: user3.src,
      },
      likes: 92,
      content: `
  My journey with Luna, my beloved service dog, is a testament to the unbreakable bond between humans and their furry companions. Luna came into my life during a time of need, and she has since become my greatest source of strength and support.

  Luna isn't just a service dog; she's my confidante, my protector, and my best friend. Together, we've faced life's challenges with unwavering determination. Her loyalty and devotion are a constant source of inspiration.

  Luna has been trained to assist me with various tasks, but her role in my life goes beyond her training. She provides emotional support and an incredible sense of companionship. With Luna by my side, I've been able to overcome obstacles I never thought possible.

  Our adventures together are filled with laughter, joy, and the kind of companionship that words can't fully capture. Luna has touched my heart in ways I never imagined, and I'm grateful for every moment we share.

  Luna's story is a reminder of the profound impact that service animals can have on the lives of individuals with disabilities. She has not only made my life better but also brighter.

  Join me in celebrating the unbreakable bond between Luna and me, and may her story inspire others to appreciate the incredible role that service animals play in our lives.
      `,
      comments: [
        {
          text: "Your bond with Luna is truly remarkable. She's an amazing companion.",
          user: {
            name: "ServiceDogHero",
            image: user4.src,
          },
        },
        {
          text: "Luna's story touched my heart. Thank you for sharing your journey with us.",
          user: {
            name: "InspiredReader",
            image: user1.src,
          },
        },
      ],
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(false);
  const [hoveredCards, setHoveredCards] = useState();

  return (
    <section className="bg-tealLight py-20">
      <div className="text-center">
        <div className="grid place-items-center">
          <div className="bg-teal-500 h-1 w-40 ml-2 mb-5"></div>

          <h2 className={`text-3xl font-semibold mb-4 ${vollkorn.className}`}>
            Featured Stories
          </h2>

          <div className="bg-teal-500 h-1 w-40 ml-2 mb-7"></div>
          <h3 className="">
            Enjoy stories written by our beloved community members about their
            pets
          </h3>
        </div>
        <div
          className={
            "overflow-hidden h-full flex justify-center group items-center"
          }
        >
          {/* <div className="bg-red-400 h-[100vh] w-[25%]"></div> */}
          {/* Featured Story 1 */}
          <div
            //  -rotate-[68deg]
            className={
              "lg-mt-0 md:mt-0 xl:-mt-6 relative w-[100vw] md:mr-40 flex justify-center group items-center  h-[60vh] sm:h-[85vh] lg:h-[100vh]"
            }
            style={
              {
                // transform: !hoveredCard ? `rotate(-70deg)` : "",
              }
            }
            onMouseEnter={() => setHoveredCard(true)}
            onMouseLeave={() => setHoveredCard(false)}
          >
            <div className="-ml-12 md:ml-10 scale-44% sm:scale-75 md:scale-75 lg:scale-100 -mt-20 relative w-[100vw]  flex justify-center  items-center  h-[100vh]">
              {stories.map((story: any, i: any) => (
                <div
                  className="grid place-items-center mt-48 -ml-10"
                  style={{
                    transform: `rotate(-70deg)`,
                    transformOrigin: "bottom left",
                    zIndex: i === hoveredCards ? 999 : i,

                    // transition: "z-index 3s ease",
                  }}
                >
                  <div
                    // top-56 right-96
                    className={"absolute transition-all duration-75 "}
                    style={{
                      transform: `rotate(${(i + 0.1) * 28}deg)`,
                      transformOrigin: "bottom left",
                      // transition: "z-index 3s ease",
                    }}
                    key={i}
                    onMouseEnter={() => setHoveredCards(i)}
                    onMouseLeave={() => setHoveredCards(i)}
                  >
                    <div
                      className={`bg-white rounded-lg  -mr-12 -mt-40 shadow-md h-fit w-80 pb-16 cursor-pointer z-10 transition-all duration-500`}
                      style={{
                        transform:
                          i === hoveredCards
                            ? i === 0
                              ? `rotate(${68 / (i + 1)}deg)`
                              : i === 1
                              ? `rotate(${78 / (i + 1)}deg)`
                              : `rotate(${35 / (i + 1)}deg)`
                            : `rotate(${i * 28}deg)`,
                      }}
                      onMouseEnter={() => setHoveredCards(i)}
                      onMouseLeave={() => setHoveredCards(i)}
                    >
                      <Image
                        src={story.image}
                        alt="Featured Story 2"
                        className="w-full h-80 rounded-xl object-cover"
                        width={600}
                        height={400}
                      />
                      <div className="p-4 relative">
                        <h3 className="text-lg font-semibold mb-2">
                          {story.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2">
                          {story.description}
                        </p>
                        <Link
                          href={`/explore/stories/${story.id}`}
                          className="absolute -bottom-10 left-0 w-full flex justify-center items-center pt-5"
                        >
                          <button className="hover:animate-buttonHover bg-teal-500 text-white px-6 py-2 rounded-full">
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="bg-red-400 h-[100vh] w-[25%]">weeeeeeeee</div> */}
        </div>

        <Link href="/explore?section=Stories">
          <button className="hover:animate-buttonHover text-lg relative -top-20 bg-gradient-to-r from-indigo-500 to-indigo-300 text-white px-4 py-3 sm:px-12 sm:py-4 shadow-xl rounded-2xl">
            Check stories
          </button>
        </Link>
      </div>
    </section>
  );
};

export default StorySection;
