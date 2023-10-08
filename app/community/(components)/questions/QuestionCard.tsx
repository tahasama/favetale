"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogCard = ({ question, index }: any) => {
  return (
    <Link href={`/community/questions/${question.id}`}>
      <motion.div
        initial={{ opacity: 0, y: index * 50 + 100 }} // Initial state (hidden and slightly moved down)
        animate={{ opacity: 1, y: 0 }} // Animation state (visible and at normal position)
        transition={{ duration: 0.75, delay: 0.5 }} // Animation duration
        key={question.id}
        className="bg-white cursor-pointer hover:animate-bounceQ p-7 rounded-lg shadow-md x flex flex-col md:flex-row md:items-center md:justify-between"
      >
        <div className="mb-4 md:mb-0 md:mr-4 flex flex-col items-start md:items-center">
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
          <div className="text-gray-600">
            {question.answers ? question.answers.length : 0} Answers
          </div>
        </div>
        <div className="hidden md:block">
          <hr className="border-r border-gray-300 h-12 mx-6" />
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-semibold mb-2">{question.title}</h3>
          <h4 className="text-md mb-2">{question.content}</h4>
          <p className="text-gray-600 mb-2">
            Asked by{" "}
            <span className="text-yellow-700">{question.writer.name}</span> on{" "}
            {question.createdAt.toDate().toLocaleString()}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogCard;
