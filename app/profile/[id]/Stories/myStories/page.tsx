import { db } from "@/firebase";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import React from "react";
import { Playball, Roboto_Mono } from "next/font/google";
import BlogCard from "@/app/explore/(components)/blogs/BlogCard";
import StoryCard from "@/app/explore/(components)/stories/StoryCard";

const font = Roboto_Mono({ subsets: ["latin"], weight: "600" });

async function getData(userx: any) {
  const blogsData: any[] = [];
  const blogRef = query(
    collection(db, "storys"),
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
const myGallery = async ({ params: { id } }: any) => {
  const meetupsData = await getData(id);

  return (
    <div className="flex flex-col bg-tealLight h-full">
      <p
        className={`text-base mt-28 lg:text-xl ${font.className} text-center underline underline-offset-2`}
      >
        My Stories
      </p>

      <div className="mt-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0 sm:gap-4 mx-2 sm:mx-auto max-w-6xl">
        {meetupsData
          ?.filter(
            (meetups: any) =>
              meetups.writer.id === id && meetups.draft === false
          )
          .map((meetup: any, index: any) => (
            <StoryCard story={meetup} index={index} />
          ))}
      </div>
    </div>
  );
};

export default myGallery;
