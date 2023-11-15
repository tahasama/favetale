import { db } from "@/firebase";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import React from "react";
import BlogCard from "@/app/explore/(components)/blogs/BlogCard";
import Link from "next/link";
import { Playball, Roboto_Mono } from "next/font/google";
import WriteBlogButton from "@/app/dashboard/ContentModeration/blogs/WriteBlogButton";

const font = Roboto_Mono({ subsets: ["latin"], weight: "600" });

async function getData(id: any) {
  const blogsData: any[] = [];
  const blogRef = query(
    collection(db, "blogs"),
    or(where("writer.id", "==", id), where("likes", "array-contains", id))
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
const Blogs = async ({ params: { id } }: any) => {
  const meetupsData: any = await getData(id);
  console.log("🚀 ~ file: page.tsx:29 ~ Blogs ~ meetupsData:", meetupsData);

  const buttonStyle =
    "bg-indigo-500 px-3 mx-2 py-3 h-fit rounded hover:bg-indigo-700 text-slate-200";

  return (
    <div className="m-6 flex flex-wrap flex-col md:flex-row h-full gap-10 justify-center relative">
      <div className="absolute right-0 top-0 lg:right-12 pb-2">
        <WriteBlogButton />
      </div>
      {meetupsData &&
        meetupsData?.filter(
          (meetups: any) => meetups.writer.id === id && meetups.draft === false
        ).length !== 0 && (
          <div className="flex flex-col md:w-3/12 ">
            <p
              className={`text-base lg:text-xl ${font.className} underline underline-offset-2`}
            >
              Blogs
            </p>
            <Link
              href={`/profile/${id}/blogs/myBlogs`}
              className={`text-slate-600 my-2 ${font.className}`}
            >
              View all{" "}
              {
                meetupsData?.filter(
                  (meetups: any) =>
                    meetups.writer.id === id && meetups.draft === false
                ).length
              }{" "}
            </Link>
            <div className="mt-0 flex gap-4 mx-2 sm:mx-auto max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
              {meetupsData
                ?.filter(
                  (meetups: any) =>
                    meetups.writer.id === id && meetups.draft === false
                )
                .slice(0, 1)
                .map((meetup: any, index: any) => (
                  <BlogCard blog={meetup} index={index} />
                ))}
            </div>
          </div>
        )}
      {/* <div className=" border-r-2 mx-5 border-slate-300"></div> */}
      {meetupsData &&
        meetupsData?.filter(
          (meetups: any) => meetups.writer.id === id && meetups.draft === true
        ).length !== 0 && (
          <div className="flex flex-col md:w-3/12">
            <p
              className={`text-base  lg:text-xl ${font.className} underline underline-offset-2`}
            >
              Draft
            </p>
            <Link
              href={`/profile/${id}/blogs/myDraft`}
              className={`text-slate-600 my-2 ${font.className}`}
            >
              View all{" "}
              {
                meetupsData?.filter(
                  (meetups: any) =>
                    meetups.writer.id === id && meetups.draft === true
                ).length
              }{" "}
            </Link>
            <div className="mt-0 flex gap-4 mx-2 sm:mx-0 max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
              {meetupsData
                ?.filter(
                  (meetups: any) =>
                    meetups.writer.id === id && meetups.draft === true
                )
                ?.slice(0, 1)
                .map((meetup: any, index: any) => (
                  <BlogCard blog={meetup} index={index} />
                ))}
            </div>
          </div>
        )}
      {meetupsData &&
        meetupsData?.filter((meetups: any) => meetups.likes.includes(id))
          .length !== 0 && (
          <div className="flex flex-col md:w-3/12">
            <p
              className={`text-base  lg:text-xl ${font.className} underline underline-offset-2`}
            >
              Reactions
            </p>
            <Link
              href={`/profile/${id}/blogs/myCollection`}
              className={`text-slate-600 my-2 ${font.className}`}
            >
              View all{" "}
              {
                meetupsData?.filter((meetups: any) =>
                  meetups.likes.includes(id)
                ).length
              }{" "}
            </Link>
            <div className="mt-0 flex gap-4 mx-2 sm:mx-auto max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
              {meetupsData
                ?.filter((meetups: any) => meetups.likes.includes(id))
                ?.slice(0, 1)
                .map((meetup: any, index: any) => (
                  <BlogCard blog={meetup} index={index} />
                ))}
            </div>
          </div>
        )}
    </div>
  );
};

export default Blogs;
