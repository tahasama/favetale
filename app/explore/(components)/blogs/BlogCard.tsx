// "use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: any) => {
  return (
    <Link
      href={`/explore/blogs/${blog.id}`}
      className="flex flex-col mb-5 -z-50 overflow-hidden w-[100%] rounded-t-lg shadow-lg  hover:scale-[1.007] transition-all duration-300"
    >
      <div className="bg-white p-0 rounded-lg relative grid place-items-center -z-50">
        <Image
          src={blog.image}
          alt={blog.title}
          className=""
          width={500}
          height={500}
        />
        <h3 className="text-lg font-semibold m-2">{blog.title}</h3>
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
  );
};

export default BlogCard;
