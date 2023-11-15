import { db } from "@/firebase";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import React from "react";
import Link from "next/link";
import { Playball, Roboto_Mono } from "next/font/google";
import StoryCard from "@/app/explore/(components)/stories/StoryCard";
import WriteBlogButton from "@/app/dashboard/ContentModeration/stories/WriteBlogButton";

const font = Roboto_Mono({ subsets: ["latin"], weight: "600" });

async function getData(id: any) {
  console.log("🚀 ~ file: page.tsx:11 ~ getData ~ id:", id);
  const StoriesData: any[] = [];
  const StoryRef = query(
    collection(db, "storys"),
    or(where("writer.id", "==", id), where("likes", "array-contains", id))
  );

  const snapshot = await getDocs(StoryRef);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  snapshot.forEach((doc: any) => {
    StoriesData.push({ id: doc.id, ...doc.data() });
  });
  return StoriesData;
}
const Stories = async ({ params: { id } }: any) => {
  const meetupsData: any = await getData(id);
  console.log("🚀 ~ file: page.tsx:31 ~ Stories ~ meetupsData:", meetupsData);

  return (
    <div className="m-6 flex flex-wrap flex-col md:flex-row h-full gap-10 justify-center relative">
      <div className="absolute right-0 top-0 lg:right-12 pb-2">
        <WriteBlogButton />
      </div>
      {meetupsData &&
        meetupsData?.filter(
          (meetups: any) => meetups.writer.id === id && meetups.draft === false
        ).length !== 0 && (
          <div className="flex flex-col md:w-5/12 ">
            <p
              className={`text-base lg:text-xl ${font.className} underline underline-offset-2`}
            >
              Stories
            </p>
            <Link
              href={`/profile/${id}/Stories/myStories`}
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
                  <StoryCard story={meetup} index={index} />
                ))}
            </div>
          </div>
        )}
      {/* <div className=" border-r-2 mx-5 border-slate-300"></div> */}
      {meetupsData &&
        meetupsData?.filter(
          (meetups: any) => meetups.writer.id === id && meetups.draft === true
        ).length !== 0 && (
          <div className="flex flex-col md:w-5/12">
            <p
              className={`text-base  lg:text-xl ${font.className} underline underline-offset-2`}
            >
              Draft
            </p>
            <Link
              href={`/profile/${id}/Stories/myDraft`}
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
            <div className="mt-0 flex flex-col gap-4 mx-2 sm:mx-0 max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
              {meetupsData
                ?.filter(
                  (meetups: any) =>
                    meetups.writer.id === id && meetups.draft === true
                )
                ?.slice(0, 1)
                .map((meetup: any, index: any) => (
                  <StoryCard story={meetup} index={index} />
                ))}
            </div>
          </div>
        )}
      {meetupsData &&
        meetupsData?.filter((meetups: any) => meetups.likes.includes(id))
          .length !== 0 && (
          <div className="flex flex-col md:w-5/12">
            <p
              className={`text-base  lg:text-xl ${font.className} underline underline-offset-2`}
            >
              Reactions
            </p>
            <Link
              href={`/profile/${id}/Stories/myCollection`}
              className={`text-slate-600 my-2 ${font.className}`}
            >
              View all{" "}
              {
                meetupsData?.filter((meetups: any) =>
                  meetups.likes.includes(id)
                ).length
              }{" "}
            </Link>
            <div className="mt-0 flex flex-col gap-4 mx-2 sm:mx-auto max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
              {meetupsData
                ?.filter((meetups: any) => meetups.likes.includes(id))
                ?.slice(0, 1)
                .map((meetup: any, index: any) => (
                  <StoryCard story={meetup} index={index} />
                ))}
            </div>
          </div>
        )}
    </div>
  );
};

export default Stories;
