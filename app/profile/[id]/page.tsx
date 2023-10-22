"use client";
import React, { useState } from "react";
import user from "../../images/user/userf.jpg";
import catu from "../../images/user/catu.jpg";
import catu2 from "../../images/user/catu2.jpg";
import catu3 from "../../images/user/catu3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

import i16 from "../../images/16.jpg";
import i17 from "../../images/17.jpg";
import i18 from "../../images/18.jpg";
import i19 from "../../images/19.jpg";

import blog1 from "../../images/blog/blog1.jpg";
import blog2 from "../../images/blog/blog2.jpg";
import blog3 from "../../images/blog/blog3.jpg";
import blog4 from "../../images/blog/blog4.jpg";
import blog5 from "../../images/blog/blog5.jpg";
import blog6 from "../../images/blog/blog6.jpg";

import story1 from "../../images/stories/story1.jpg";
import story2 from "../../images/stories/story2.jpg";
import story3 from "../../images/stories/story3.jpg";
import story4 from "../../images/stories/story4.jpg";
import story5 from "../../images/stories/story5.jpg";
import story6 from "../../images/stories/story6.jpg";
import story7 from "../../images/stories/story7.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ImageModal from "../ImageModal";
import { motion } from "framer-motion";
import Link from "next/link";

import cage from "../../images/store/cage.jpg";
import feeder from "../../images/store/feeder.jpg";
import scratch from "../../images/store/scratch.jpg";
import { useCart } from "../../provider/CartProvider";
import { useParams } from "next/navigation";

const UserProfile = ({ params: { id } }: any) => {
  console.log("🚀 ~ file: page.tsx:46 ~ UserProfile ~ params:", id);
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
  const products = [
    {
      id: 7,
      name: "Cat Scratching Post",
      image: scratch.src,
      price: 24.99,
      discount: 30,
      rating: 4.7,
      reviews: 110,
      quantity: 1,
    },
    {
      id: 8,
      name: "Small Animal Cage",
      image: cage.src,
      price: 39.99,
      discount: 25,
      rating: 4.3,
      reviews: 70,
      quantity: 1,
    },
    {
      id: 9,
      name: "Squirrel Feeder",
      image: feeder.src,
      price: 7.99,
      discount: 15,
      rating: 4.6,
      reviews: 90,
      quantity: 1,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState();
  const [expandedPurchase, setExpandedPurchase] = useState<any>(null);
  const { userx } = useCart();
  console.log("🚀 ~ file: page.tsx:166 ~ UserProfile ~ user:", userx);

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

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
      <div className="bg-white mx-6  p-6 mt-8  shadow-md rounded-lg grid grid-cols-1 sm:grid-cols-2  ">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: 500 }} // Initial state (hidden and slightly moved down)
          animate={{ opacity: 1, x: 0 }} // Animation state (visible and at normal position)
          transition={{ duration: 1, delay: 0.3 }} // Animation duration
          className=" grid place-content-around place-items-start"
        >
          {/* Username */}
          <h2 className="text-2xl font-semibold mb-2">{userx.name}</h2>
          <p className="text-md font-light mb-2">
            Join on: {userx.creationTime.slice(0, 16)}
          </p>
          <p className="text-md font-light mb-2">
            Last visit on: {userx.lastSignInTime.slice(0, 16)}
          </p>

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
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }} // Initial state (hidden and slightly moved down)
          animate={{ opacity: 1 }} // Animation state (visible and at normal position)
          transition={{ duration: 0.75, delay: 1 }} // Animation duration
        >
          <div className="grid place-items-center place-content-center">
            <img
              src={user.src}
              alt="Profile Picture"
              className="rounded-3xl w-[1/12] object-cover bg-sky-500"
              width={400}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UserProfile;
