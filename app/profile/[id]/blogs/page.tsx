import { db } from "@/firebase";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import React from "react";
import { Playball, Roboto_Mono } from "next/font/google";
import BlogCard from "@/app/explore/(components)/blogs/BlogCard";
import Link from "next/link";

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
const Blogs = async ({ userx }: any) => {
  const meetupsData: any = await getData(userx);

  return (
    <div className="m-6 flex h-full gap-10 justify-center">
      <div className="flex flex-col w-2/5 ">
        <p
          className={`text-base lg:text-xl ${font.className} underline underline-offset-2`}
        >
          My Blogs
        </p>
        <Link
          href={`/profile/${userx}/blogs/myBlogs`}
          className={`text-slate-600 my-2 ${font.className}`}
        >
          View all{" "}
          {
            meetupsData?.filter((meetups: any) => meetups.writer.id === userx)
              .length
          }{" "}
          blogs
        </Link>
        <div className="mt-0 flex  gap-4 mx-2 sm:mx-auto max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
          {meetupsData
            ?.filter((meetups: any) => meetups.writer.id === userx)
            .map((meetup: any, index: any) => (
              <BlogCard blog={meetup} index={index} />
            ))}
        </div>
      </div>
      {/* <div className=" border-r-2 mx-5 border-slate-300"></div> */}
      <div className="flex flex-col w-2/5">
        <p
          className={`text-base  lg:text-xl ${font.className} underline underline-offset-2`}
        >
          My Reactions
        </p>
        <Link
          href={`/profile/${userx}/blogs/myCollection`}
          className={`text-slate-600 my-2 ${font.className}`}
        >
          View all{" "}
          {
            meetupsData?.filter(
              (meetups: any) =>
                meetups.likes.includes(userx) || meetups.hearts.includes(userx)
            ).length
          }{" "}
          blogs
        </Link>
        <div className="mt-0 flex gap-4 mx-2 sm:mx-auto max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
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
