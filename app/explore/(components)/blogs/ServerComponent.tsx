import React from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import BlogCard from "./BlogCard";
import { getBlogsData } from "@/app/api/GerData";

const ServerComponent = async () => {
  const blogsData = await getBlogsData();
  console.log(
    "🚀 ~ file: ServerComponent.tsx:9 ~ ServerComponent ~ blogsData:",
    blogsData
  );

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 mx-10 pb-4">
      {blogsData &&
        blogsData.map((blog: any, index: any) => (
          <BlogCard blog={blog} index={index} />
        ))}
    </div>
  );
};
export default ServerComponent;
