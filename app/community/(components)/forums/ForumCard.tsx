"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ForumCard = ({ forum, index, discussionsData }: any) => {
  console.log(
    "🚀 ~ file: ForumCard.tsx:8 ~ ForumCard ~ discussionsData:",
    discussionsData
  );
  return (
    <motion.div
      initial={{ opacity: 0, x: index * 20 + 50 }} // Initial state (hidden and slightly moved down)
      animate={{ opacity: 1, x: 0 }} // Animation state (visible and at normal position)
      transition={{ duration: 0.75, delay: 0.5 }} // Animation duration
    >
      <Link
        key={forum.id}
        href={`/community/forums/${forum.id}`}
        className="block hover:scale-[1.015] transition-all duration-300"
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
  );
};

export default ForumCard;
