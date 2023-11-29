"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogCard = ({ question, index }: any) => {
  return (
    <Link href={`/community/questions/${question.id}`}>
      <motion.div
        initial={{ opacity: 0, y: index * 50 + 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.5 }}
        key={question.id}
        className="bg-white cursor-pointer hover:animate-bounceQ p-7 rounded-lg shadow-md x flex flex-col md:items-center md:justify-between"
      >
        <div className="mb-3 flex gap-4 items-start md:items-center justify-start w-full">
          <div className="flex items-center mb-1">
            <button className="text-indigo-500 font-semibold mr-2">
              <span role="img" aria-label="Upvote">
                👍
              </span>{" "}
              {question.upvotes ? question.upvotes.length : 0}
            </button>
            <button className="text-red-500 font-semibold">
              <span role="img" aria-label="Downvote">
                👎
              </span>{" "}
              {question.downvotes ? question.downvotes.length : 0}
            </button>
          </div>

          <div className="text-gray-600 flex">
            <p className="ml-2">
              {" "}
              {question.answers ? question.answers.length : 0}
            </p>
            <p className="ml-2">Answers</p>
          </div>
        </div>

        <div className="flex flex-col justify-start w-full">
          <h3 className="text-base font-semibold mb-2 line-clamp-2">
            {question.title}
          </h3>
          <h4 className="text-md mb-2 line-clamp-2">{question.content}</h4>
          <p className="text-gray-600 mb-2">
            Asked by{" "}
            <Link
              href={`/profile/${question.writer.id}`}
              className="text-yellow-700 hover:underline hover:text-red-400 transition-all duration-300"
            >
              {question.writer.name}
            </Link>{" "}
            on {new Date(question.createdAt.seconds * 1000).toDateString()}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogCard;
