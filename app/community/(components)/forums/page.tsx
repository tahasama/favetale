"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import DiscussionModal from "./[id]/DiscussionModal";

const Forums = () => {
  const forumData = [
    {
      id: 1,
      title: "Pet Health and Care",
      description: "Discuss topics related to pet health and care.",
      lastPost: "1 hour ago",
      posts: 120,
      category: "Health",
      tags: ["Wellness", "Diet", "Vaccinations"],
      sticky: false,
      participants: ["user123", "user456", "user789"],
    },
    {
      id: 2,
      title: "Training Tips and Tricks",
      description: "Share your training techniques and advice.",
      lastPost: "2 hours ago",
      posts: 85,
      category: "Training",
      tags: ["Obedience", "Behavior", "Training Tools"],
      sticky: true,
      participants: ["user789", "user234", "user567"],
    },
    {
      id: 3,
      title: "Pet Behavior Issues",
      description: "Seek help and solutions for pet behavior problems.",
      lastPost: "3 hours ago",
      posts: 150,
      category: "Behavior",
      tags: ["Aggression", "Anxiety", "Training"],
      sticky: false,
      participants: ["user987", "user654", "user321"],
    },
    {
      id: 4,
      title: "Adoption Stories",
      description: "Share heartwarming stories of pet adoptions.",
      lastPost: "4 hours ago",
      posts: 68,
      category: "Adoption",
      tags: ["Rescue", "Happy Endings", "Foster Care"],
      sticky: true,
      participants: ["user111", "user222", "user333"],
    },
    {
      id: 5,
      title: "Pet Product Reviews",
      description: "Discuss and review various pet products and gadgets.",
      lastPost: "5 hours ago",
      posts: 45,
      category: "Product Reviews",
      tags: ["Toys", "Grooming", "Food"],
      sticky: false,
      participants: ["user999", "user888", "user777"],
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (pet: any) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container bg-gradient-to-b from-tealLight to-sky-200 h-screen">
      <div className="mb-6">
        <div className="bg-violet-800 p-12 text-left leading-loose tracking-wide">
          <h2 className="text-4xl font-semibold text-white mb-5">
            Join Our Forums
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Engage in discussions, share your insights, and learn from fellow
            pet enthusiasts.
          </p>
          <button
            onClick={openModal}
            className="bg-tealLight hover:text-white px-4 py-3 rounded-md hover:bg-indigo-500 hover:animate-buttonHover transition-colors duration-500"
          >
            Start a Discussion
          </button>
        </div>
      </div>
      <DiscussionModal isOpen={isModalOpen} onClose={closeModal} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-2 ">
        {forumData.map((forum, index) => (
          <motion.div
            initial={{ opacity: 0, x: index * 20 + 50 }} // Initial state (hidden and slightly moved down)
            animate={{ opacity: 1, x: 0 }} // Animation state (visible and at normal position)
            transition={{ duration: 0.75, delay: 0.5 }} // Animation duration
          >
            <Link
              key={forum.id}
              href={`/community/forums/${forum.id}`}
              className="block hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2  flex justify-between items-center">
                  {forum.title}
                  <span className="px-2 py-1 bg-slate-400 border-slate-400 border-2 text-sm text-white rounded-xl">
                    {forum.category}
                  </span>
                </h3>
                <p className="text-gray-600 mb-1">{forum.description}</p>
                <p className="text-gray-400 text-sm">{forum.lastPost}</p>
                <div className="flex items-center mt-2">
                  <div className="bg-indigo-500 text-white px-2 py-1 rounded-md text-xs mr-2">
                    {forum.posts} posts
                  </div>
                  <div className="bg-gray-100 text-gray-500 px-2 py-1 rounded-md text-xs">
                    Join the discussion
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Forums;
