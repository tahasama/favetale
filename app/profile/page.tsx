"use client";
import React, { useState } from "react";
import user from "../images/user/userf.jpg";
import catu from "../images/user/catu.jpg";
import catu2 from "../images/user/catu2.jpg";
import catu3 from "../images/user/catu3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

import i16 from "../images/16.jpg";
import i17 from "../images/17.jpg";
import i18 from "../images/18.jpg";
import i19 from "../images/19.jpg";

import blog1 from "../images/blog/blog1.jpg";
import blog2 from "../images/blog/blog2.jpg";
import blog3 from "../images/blog/blog3.jpg";
import blog4 from "../images/blog/blog4.jpg";
import blog5 from "../images/blog/blog5.jpg";
import blog6 from "../images/blog/blog6.jpg";

import story1 from "../images/stories/story1.jpg";
import story2 from "../images/stories/story2.jpg";
import story3 from "../images/stories/story3.jpg";
import story4 from "../images/stories/story4.jpg";
import story5 from "../images/stories/story5.jpg";
import story6 from "../images/stories/story6.jpg";
import story7 from "../images/stories/story7.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ImageModal from "./ImageModal";
import { motion } from "framer-motion";
import Link from "next/link";

const UserProfile = () => {
  const catus = [catu, catu2, catu3];
  const petImages = [i16, i17, i18, i19];
  const blogsData = [
    {
      id: 2,
      title: "The Joy of Adopting a Rescue Pet",
      excerpt: "Discover the heartwarming journey of adopting a rescue pet...",
      image: blog2.src,
    },
    {
      id: 4,
      title: "Exploring the Benefits of Pet Socialization",
      excerpt:
        "Uncover the positive impact of socializing your pets with others...",
      image: blog4.src,
    },
    {
      id: 5,
      title: "The Healing Power of Pet Companionship",
      excerpt:
        "Discover how pets can bring comfort and healing to our lives...",
      image: blog5.src,
    },

    // Add more blog data here
  ];
  const blogsData2 = [
    {
      id: 1,
      title: "Tips for Pet Care",
      excerpt: "Learn how to provide the best care for your beloved pets...",
      image: blog1.src,
    },

    {
      id: 3,
      title: "Creating a Pet-Friendly Home Environment",
      excerpt:
        "Transform your living space into a safe and welcoming haven for your pets...",
      image: blog3.src,
    },
    {
      id: 6,
      title: "Preparing for a New Puppy: Tips for First-Time Owners",
      excerpt:
        "Get ready to welcome a new puppy into your home with these helpful tips...",
      image: blog6.src,
    },
    // Add more blog data here
  ];
  const storiesData = [
    {
      id: 1,
      title: "A Rescue Journey",
      excerpt:
        "Read the heartwarming story of how Bella, a shelter dog, found her forever home.Read the heartwarming story of how Bella, a shelter dog, found her forever home.Read the heartwarming story of how Bella, a shelter dog, found her forever home.",
      image: story1.src,
    },

    {
      id: 3,
      title: "Unbreakable Bond",
      excerpt:
        "Explore the extraordinary bond between Sarah and her service dog, Luna, as they conquer life's challenges together.",
      image: story3.src,
    },
    // ... Add more stories
  ];
  const storiesData2 = [
    {
      id: 2,
      title: "From Stray to Family",
      excerpt:
        "Discover the incredible journey of Max, a stray cat, as he transforms into a beloved family member.",
      image: story2.src,
    },

    {
      id: 10,
      title: "Pawprints of Love",
      excerpt:
        "Join us in celebrating the joyous moments shared by pet owners and their furry companions.",
      image: story4.src,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState();

  const openModal = (pet: any) => {
    setIsModalOpen(true);
    setImage(pet);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-teal-50 min-h-screen pt-20">
      {/* User Information */}
      <div className="bg-white mx-6 sm:mx-60 p-6 mt-8  shadow-md rounded-lg grid grid-cols-1 sm:grid-cols-2  ">
        {/* Profile Picture */}

        <div className=" grid place-content-around place-items-start">
          {/* Username */}
          <h2 className="text-2xl font-semibold mb-2">John Doe</h2>
          <h2 className="text-md font-light mb-2">join on 2nd August 23</h2>

          {/* Bio */}
          <p className="text-gray-600 mb-4">
            Passionate about pets and animals. Love sharing tips and
            experiences.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2  place-content-center place-items-start">
            {/* Edit Profile Information */}
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">
              Edit Profile
            </button>

            {/* Account Settings */}
            <button className="bg-violet-1000 text-white px-4 py-2 -ml-3 rounded-md">
              Account Settings
            </button>
          </div>
        </div>
        <div className="grid place-items-center place-content-center">
          <img
            src={user.src}
            alt="Profile Picture"
            className="rounded-3xl w-[1/12] object-cover bg-sky-500"
            width={400}
          />
        </div>
      </div>

      {/* Content Sections */}
      <div className="mx-6 sm:mx-52 p-7 mt-8 max-w-5x">
        {/* My Images Section */}
        <div className="p-4 bg-violet-100 mb-3 rounded-md">
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">My Images</h3>

            {/* Upload an Image Button */}
            <div className="flex justify-end mb-6 hover:animate-buttonHover">
              <button className="bg-purple-600 text-white px-4 py-3 rounded-md">
                Upload an Image
              </button>
            </div>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}
            <div className=" mx-4 md:mx-2 sm:gap-4 lg:mx-2">
              <Swiper
                slidesPerView={2.3}
                spaceBetween={10}
                keyboard={{
                  enabled: true,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="my-swiper "
              >
                {catus.map((pet: any, index: any) => (
                  <SwiperSlide className="bg-tealDark  rounded-lg">
                    <Image
                      onClick={() => openModal(pet)}
                      src={pet.src}
                      alt="pet"
                      className="w-full h-auto cursor-pointer  rounded-lg shadow-xl bg-tealDark"
                      width={1000}
                      height={1000}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <ImageModal
                catus={catus}
                isOpen={isModalOpen}
                onClose={closeModal}
                image={image}
              />
            </div>
            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 ring-1 ring-violet-300 px-3 py-2 hover:ring-white hover:bg-violet-200 transition-all duration-300 rounded-full hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">
              Upvoted / Commented Images
            </h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}
            <Swiper
              slidesPerView={3.1}
              spaceBetween={10}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Keyboard, Pagination, Navigation]}
              className="my-swiper "
            >
              {petImages.map((pet: any, index: any) => (
                <SwiperSlide className="bg-tealDark  rounded-lg">
                  <Image
                    onClick={() => openModal(pet)}
                    src={pet.src}
                    alt="pet"
                    className="w-full h-auto cursor-pointer  rounded-lg shadow-xl bg-tealDark"
                    width={1000}
                    height={1000}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <ImageModal
              catus={catus}
              isOpen={isModalOpen}
              onClose={closeModal}
              image={image}
            />

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 ring-1 ring-violet-300 px-3 py-2 hover:ring-white hover:bg-violet-200 transition-all duration-300 rounded-full hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
        </div>

        {/* My Blogs Section */}
        <div className="p-4 bg-violet-100 mb-3 rounded-md">
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">My Blogs</h3>

            {/* Write a blog Button */}
            <div className="flex justify-end mb-6 hover:animate-buttonHover">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-md">
                Write a blog
              </button>
            </div>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-5 mx-6">
              {blogsData.map((blog, index) => (
                <motion.div
                  initial={{ opacity: 0, x: index * 20 + 50 }} // Initial state (hidden and slightly moved down)
                  animate={{ opacity: 1, x: 0 }} // Animation state (visible and at normal position)
                  transition={{ duration: 0.75, delay: 0.75 }} // Animation duration
                >
                  <Link
                    key={blog.id}
                    href={`/blogs/${blog.id}`}
                    className="flex flex-col bg-white shadow-md overflow-hidden  mb-6"
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        className="mb-4 rounded-lg"
                        width={500}
                        height={500}
                      />
                      <h3 className="text-lg font-semibold mb-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600">{blog.excerpt}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 ring-1 ring-violet-300 px-3 py-2 hover:ring-white hover:bg-violet-200 transition-all duration-300 rounded-full hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">
              Upvoted / Commented Blogs
            </h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-5 mx-6">
              {blogsData2.map((blog, index) => (
                <motion.div
                  initial={{ opacity: 0, x: index * 20 + 50 }} // Initial state (hidden and slightly moved down)
                  animate={{ opacity: 1, x: 0 }} // Animation state (visible and at normal position)
                  transition={{ duration: 0.75, delay: 0.75 }} // Animation duration
                >
                  <Link
                    key={blog.id}
                    href={`/blogs/${blog.id}`}
                    className="flex flex-col bg-white shadow-md overflow-hidden  mb-6"
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        className="mb-4 rounded-lg"
                        width={500}
                        height={500}
                      />
                      <h3 className="text-lg font-semibold mb-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600">{blog.excerpt}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 ring-1 ring-violet-300 px-3 py-2 hover:ring-white hover:bg-violet-200 transition-all duration-300 rounded-full hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
        </div>

        {/*  My Stories Section */}
        <div className="p-4 bg-violet-100 mb-3 rounded-md">
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">My Stories</h3>

            {/* Share a story Button */}
            <div className="flex justify-end mb-6 hover:animate-buttonHover">
              <button className="bg-purple-600 text-white px-4 py-3 rounded-md">
                Share a story
              </button>
            </div>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-7 gap-6 mb-4">
              {storiesData.map((story, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: index * 100 + 100,
                    // transform: "scale(1.1)",
                  }} // Initial state (hidden and slightly moved down)
                  animate={{
                    opacity: 1,
                    y: 0,
                    // transform: "scale(1)",
                  }} // Animation state (visible and at normal position)
                  transition={{ duration: 0.75, delay: 0.75 }} // Animation duration
                >
                  <Link
                    key={story.id}
                    href={`/stories/${story.id}`}
                    className="block"
                  >
                    <div
                      className={`bg-white rounded-lg shadow-md overflow-hidden  sm:h-60`}
                    >
                      <div className="flex flex-col sm:flex-row h-full">
                        <div className="p-4 flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg font-semibold mb-4 mt-2">
                              {story.title}
                            </h3>
                            <p className="text-gray-600 mb-2 line-clamp-4">
                              {story.excerpt}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-400 mt-2">
                              story.timestamp
                            </p>
                            <p className="text-tealDark font-semibold">
                              story.user
                            </p>
                          </div>
                        </div>
                        <Image
                          src={story.image}
                          alt={story.title}
                          className="sm:w-1/3 sm:h-auto object-cover w-auto"
                          width={1000}
                          height={1000}
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 ring-1 ring-violet-300 px-3 py-2 hover:ring-white hover:bg-violet-200 transition-all duration-300 rounded-full hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">
              Upvoted / Commented Stories
            </h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-7 gap-6 mb-4">
              {storiesData2.map((story, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: index * 100 + 100,
                    // transform: "scale(1.1)",
                  }} // Initial state (hidden and slightly moved down)
                  animate={{
                    opacity: 1,
                    y: 0,
                    // transform: "scale(1)",
                  }} // Animation state (visible and at normal position)
                  transition={{ duration: 0.75, delay: 0.75 }} // Animation duration
                >
                  <Link
                    key={story.id}
                    href={`/stories/${story.id}`}
                    className="block"
                  >
                    <div
                      className={`bg-white rounded-lg shadow-md overflow-hidden  sm:h-60`}
                    >
                      <div className="flex flex-col sm:flex-row h-full">
                        <div className="p-4 flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg font-semibold mb-4 mt-2">
                              {story.title}
                            </h3>
                            <p className="text-gray-600 mb-2 line-clamp-4">
                              {story.excerpt}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-400 mt-2">
                              story.timestamp
                            </p>
                            <p className="text-tealDark font-semibold">
                              story.user
                            </p>
                          </div>
                        </div>
                        <Image
                          src={story.image}
                          alt={story.title}
                          className="sm:w-1/3 sm:h-auto object-cover w-auto"
                          width={1000}
                          height={1000}
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 ring-1 ring-violet-300 px-3 py-2 hover:ring-white hover:bg-violet-200 transition-all duration-300 rounded-full hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
        </div>
        <div className="border border-gray-300 my-4"></div>
        {/*  My Purshases Section */}
        <div className="p-4 bg-violet-100 mb-3 rounded-md">
          <div className="bg-white shadow-md rounded-lg p-4 ">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-0">My Purshases</h3>

            {/* Shop now Button */}
            <div className="flex justify-end mb-6 hover:animate-buttonHover">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-md">
                Shop now
              </button>
            </div>
            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}
            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 ring-1 ring-violet-300 px-3 py-2 hover:ring-white hover:bg-violet-200 transition-all duration-300 rounded-full hover:text-gray-800">
                View All
              </button>
            </div>
            {/* Display Comments */}
            {/* Display Likes */}
          </div>
        </div>
        <div className="border border-gray-300 my-4"></div>

        {/*  My events Section */}
        <div className="p-4 bg-violet-100 mb-3 rounded-md">
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">Events created</h3>

            {/*    Create an event Button */}
            <div className="flex justify-end mb-6 hover:animate-buttonHover">
              <button className="bg-purple-600 text-white px-4 py-3 rounded-md">
                Create an event
              </button>
            </div>
            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 ring-1 ring-violet-300 px-3 py-2 hover:ring-white hover:bg-violet-200 transition-all duration-300 rounded-full hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">Events Attended</h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 ring-1 ring-violet-300 px-3 py-2 hover:ring-white hover:bg-violet-200 transition-all duration-300 rounded-full hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
        </div>

        {/*  My forums Section */}
        <div className="p-4 bg-violet-100 mb-3rounded-md">
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">Discussions started</h3>

            {/* Start a discussion Button */}
            <div className="flex justify-end mb-6 hover:animate-buttonHover">
              <button className="bg-purple-600 text-white px-4 py-3 rounded-md">
                Start a discussion
              </button>
            </div>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 ring-1 ring-violet-300 px-3 py-2 hover:ring-white hover:bg-violet-200 transition-all duration-300 rounded-full hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">
              discussions participated in
            </h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 ring-1 ring-violet-300 px-3 py-2 hover:ring-white hover:bg-violet-200 transition-all duration-300 rounded-full hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
        </div>
        <div className="border border-gray-300 my-4"></div>

        {/*  My Questions Section */}
        <div className="p-4 bg-violet-100 mb-3 rounded-md">
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">Questions Asked</h3>

            {/* Ask a question Button */}
            <div className="flex justify-end mb-6 hover:animate-buttonHover">
              <button className="bg-purple-600 text-white px-4 py-3 rounded-md">
                Ask a question
              </button>
            </div>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 ring-1 ring-violet-300 px-3 py-2 hover:ring-white hover:bg-violet-200 transition-all duration-300 rounded-full hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 mb-3">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">Questions Answered</h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 ring-1 ring-violet-300 px-3 py-2 hover:ring-white hover:bg-violet-200 transition-all duration-300 rounded-full hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4">Questions Upvoted</h3>

            {/* Display List of Uploaded Images */}
            {/* Use a responsive grid or carousel/slider */}

            {/* Button Group */}
            <div className="flex justify-between mt-4">
              <button className="text-gray-600 ring-1 ring-violet-300 px-3 py-2 hover:ring-white hover:bg-violet-200 transition-all duration-300 rounded-full hover:text-gray-800">
                View All
              </button>
            </div>

            {/* Display Comments */}
            {/* Display Likes */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
