"use client";
import Link from "next/link";
import React from "react";
import blog1 from "../../../images/blog/blog1.jpg";
import blog2 from "../../../images/blog/blog2.jpg";
import blog3 from "../../../images/blog/blog3.jpg";
import blog4 from "../../../images/blog/blog4.jpg";
import blog5 from "../../../images/blog/blog5.jpg";
import blog6 from "../../../images/blog/blog6.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

const Blogs = () => {
  const blogsData = [
    {
      id: 1,
      title: "Tips for Pet Care",
      excerpt: "Learn how to provide the best care for your beloved pets...",
      image: blog1.src,
    },
    {
      id: 2,
      title: "The Joy of Adopting a Rescue Pet",
      excerpt: "Discover the heartwarming journey of adopting a rescue pet...",
      image: blog2.src,
    },
    {
      id: 3,
      title: "Creating a Pet-Friendly Home Environment",
      excerpt:
        "Transform your living space into a safe and welcoming haven for your pets...",
      image: blog3.src,
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
    {
      id: 6,
      title: "Preparing for a New Puppy: Tips for First-Time Owners",
      excerpt:
        "Get ready to welcome a new puppy into your home with these helpful tips...",
      image: blog6.src,
    },
    // Add more blog data here
  ];

  return (
    <div className="container my-20  w-full">
      {/* Prominent Call-to-Action */}
      <div className="mb-6">
        <div className="bg-sky-600 p-12 rounded-lg text-left leading-loose tracking-wide  ">
          <h2 className="text-4xl font-semibold text-white mb-5">
            Discover Our Blog
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Explore insightful articles and tips from our community of pet
            lovers. Enhance your knowledge and share in the joy of pet
            companionship!
          </p>
          <Link
            href="/blogs"
            className="bg-tealLight hover:text-white px-4 py-3 rounded-md hover:bg-sky-700 transition-colors duration-500"
          >
            Write a Blog
          </Link>
        </div>
      </div>

      {/* Masonry Layout */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-5 mx-6">
        {blogsData.map((blog, index) => (
          <motion.div
            initial={{ opacity: 0, x: index * 20 + 50 }} // Initial state (hidden and slightly moved down)
            animate={{ opacity: 1, x: 0 }} // Animation state (visible and at normal position)
            transition={{ duration: 0.75, delay: 0.75 }} // Animation duration
          >
            <Link
              key={blog.id}
              href={`/explore/blogs/${blog.id}`}
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
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600">{blog.excerpt}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
