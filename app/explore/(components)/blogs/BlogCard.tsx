"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog, index }: any) => {
  return (
    // <motion.div
    //   key={blog.id}
    //   initial={{ opacity: 0, x: index * 20 + 50 }} // Initial state (hidden and slightly moved down)
    //   animate={{ opacity: 1, x: 0 }} // Animation state (visible and at normal position)
    //   transition={{ duration: 0.75, delay: 0.75 }} // Animation duration
    // >
    <Link
      href={`/explore/blogs/${blog.id}`}
      className="flex flex-col  -z-50 overflow-hidden w-[100%] rounded-t-lg shadow-lg  hover:scale-[1.007] transition-all duration-300"
    >
      <div className="bg-white p-0 rounded-lg relative grid place-items-center -z-50">
        <Image
          src={blog.image}
          alt={blog.title}
          className=""
          width={500}
          height={500}
        />
        <h3 className="text-lg font-semibold my-2">{blog.title}</h3>
        <div className="flex">
          <p className="text-gray-600 underline capitalize mb-2">
            writer : {blog.writer.name}{" "}
          </p>
          <p className="text-green-800 indent-4 ">
            {blog.createdAt &&
              new Date(blog.createdAt.seconds * 1000).toDateString()}
          </p>
        </div>
      </div>
    </Link>
    // </motion.div>
  );
};

export default BlogCard;
