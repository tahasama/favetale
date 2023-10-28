"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import parse from "html-react-parser";

const StoryCard = ({ story, index }: any) => {
  return (
    <motion.div
      key={story.id}
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
      <Link href={`/explore/stories/${story.id}`} className="block">
        <div
          className={`bg-white rounded-lg shadow-lg overflow-hidden sm:h-60`}
        >
          <div className="flex flex-col sm:flex-row justify-between h-full">
            <div className="flex flex-col justify-between px-4 ">
              <div>
                <h3 className="text-lg font-semibold mb-4 mt-2">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-2 line-clamp-4">
                  {parse(story.content)}
                </p>
              </div>
              <div className="mb-2">
                <p className="text-gray-400 mt-2">
                  {story.createdAt &&
                    new Date(story.createdAt.seconds * 1000).toDateString()}
                </p>

                <p className="text-tealDark font-semibold">
                  {story.writer.name}
                </p>
              </div>
            </div>
            <Image
              src={story.image}
              alt={story.title}
              className="sm:w-3/5 sm:h-auto object-cover w-auto"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default StoryCard;
