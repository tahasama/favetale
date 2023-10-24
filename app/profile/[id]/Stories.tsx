import StoryCard from "@/app/explore/(components)/stories/StoryCard";
import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";

import BlogCard from "@/app/explore/(components)/blogs/BlogCard";
import { Roboto_Mono } from "next/font/google";

const font = Roboto_Mono({ subsets: ["latin"], weight: "600" });

async function getData(userx: any) {
  const blogsData: any[] = [];
  const blogRef = query(
    collection(db, "storys"),
    where("writer.id", "==", userx)
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
const Stories = async ({ tab, userx }: any) => {
  const meetupsData = await getData(userx);
  console.log(
    "🚀 ~ file: Stories.tsx:30 ~ Stories ~ meetupsData:",
    meetupsData
  );

  return (
    <div className="m-6 flex h-full">
      <div className="flex flex-col">
        <p
          className={`text-base  lg:text-xl ${font.className} text-center underline underline-offset-2`}
        >
          My Stories
        </p>
        <div className="mt-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0 sm:gap-4 mx-2 sm:mx-auto max-w-6xl">
          {meetupsData
            ?.filter((meetups: any) => meetups.writer.id === userx)
            .map((meetup: any, index: any) => (
              <StoryCard story={meetup} index={index} />
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
              <StoryCard story={meetup} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
