import { db } from "@/firebase";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import React from "react";
import { Playball, Roboto_Mono } from "next/font/google";
import BlogCard from "@/app/explore/(components)/blogs/BlogCard";

const font = Roboto_Mono({ subsets: ["latin"], weight: "600" });

async function getData(userx: any) {
  const blogsData: any[] = [];
  const blogRef = query(
    collection(db, "blogs"),
    or(where("writer.id", "==", userx), where("likes", "array-contains", userx))
  );

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
const Blogs = async ({ tab, userx }: any) => {
  const meetupsData: any = await getData(userx);
  console.log(
    "🚀 ~ file: Blogs.tsx:29 ~ Blogs ~ meetupsData:",
    meetupsData[0].likes.includes(userx)
  );

  return (
    <div className="m-6 h-full">
      <div className="flex flex-col">
        <p
          className={`text-base  lg:text-xl ${font.className} text-center underline underline-offset-2`}
        >
          My Blogs
        </p>
        <div className="mt-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0 sm:gap-4 mx-2 sm:mx-auto max-w-6xl">
          {meetupsData
            ?.filter((meetups: any) => meetups.writer.id === userx)
            .map((meetup: any, index: any) => (
              <BlogCard blog={meetup} index={index} />
            ))}
        </div>
      </div>
      <div className=" border-r-2 mx-5 border-slate-300"></div>
      <div className="flex flex-col">
        <p
          className={`text-base  lg:text-xl ${font.className} text-center underline underline-offset-2`}
        >
          My Reactions
        </p>
        <div className="mt-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0 sm:gap-4 mx-2 sm:mx-auto max-w-6xl">
          {meetupsData
            ?.filter((meetups: any) => meetups.likes.includes(userx))
            .map((meetup: any, index: any) => (
              <BlogCard blog={meetup} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
