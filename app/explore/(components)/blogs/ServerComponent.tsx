import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import BlogCard from "./BlogCard";

async function getData() {
  const blogsData: any[] = [];
  const blogRef = collection(db, "blogs");

  const snapshot = await getDocs(blogRef);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  snapshot.forEach((doc: any) => {
    blogsData.push({ id: doc.id, ...doc.data() });
  });
  return blogsData;
}

const ServerComponent = async () => {
  const blogsData = await getData();
  console.log(
    "🚀 ~ file: ServerComponent.tsx:22 ~ ServerComponent ~ blogsData:",
    blogsData
  );

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-5 sm:mx-6 mx-1">
      {blogsData &&
        blogsData.map((blog: any, index: any) => (
          <BlogCard blog={blog} index={index} />
        ))}
    </div>
  );
};
export default ServerComponent;
