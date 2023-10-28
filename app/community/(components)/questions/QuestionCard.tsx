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
        className="bg-white cursor-pointer hover:animate-bounceQ p-7 rounded-lg shadow-md x flex flex-col md:flex-row md:items-center md:justify-between"
      >
        <div className="mb-4 md:mb-0 w-1/12 flex flex-col items-start md:items-center">
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
        <div className="hidden md:block md:mx-2 w-1/12">
          <hr className="border-r border-t-0 border-gray-300 h-12 mx-6" />
        </div>
        <div className="w-10/12">
          <h3 className="text-base font-semibold mb-2 line-clamp-2">
            {question.title}
          </h3>
          <h4 className="text-md mb-2 line-clamp-2">{question.content}</h4>
          <p className="text-gray-600 mb-2">
            Asked by{" "}
            <span className="text-yellow-700">{question.writer.name}</span> on{" "}
            {new Date(question.createdAt.seconds * 1000).toDateString()}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogCard;
