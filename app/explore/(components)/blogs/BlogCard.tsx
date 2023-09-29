"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog, index }: any) => {
  return (
    <motion.div
      key={blog.id}
      initial={{ opacity: 0, x: index * 20 + 50 }} // Initial state (hidden and slightly moved down)
      animate={{ opacity: 1, x: 0 }} // Animation state (visible and at normal position)
      transition={{ duration: 0.75, delay: 0.75 }} // Animation duration
    >
      <Link
        href={`/explore/blogs/${blog.id}`}
        className="flex flex-col bg-white shadow-md overflow-hidden  mb-6"
      >
        <div className="bg-white p-3 smp-6 rounded-lg shadow-md">
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
  );
};

export default BlogCard;
