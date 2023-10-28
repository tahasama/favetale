import { db } from "@/firebase";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import React from "react";
import Link from "next/link";
import { Playball, Roboto_Mono } from "next/font/google";
import StoryCard from "@/app/explore/(components)/stories/StoryCard";

const font = Roboto_Mono({ subsets: ["latin"], weight: "600" });

async function getData(userx: any) {
  const StoriesData: any[] = [];
  const StoryRef = query(
    collection(db, "storys"),
    or(where("writer.id", "==", userx), where("likes", "array-contains", userx))
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
const Stories = async ({ userx }: any) => {
  const meetupsData: any = await getData(userx);

  return (
    <div className="m-6 flex flex-wrap flex-col md:flex-row h-full gap-10 justify-center">
      {meetupsData?.filter(
        (meetups: any) => meetups.writer.id === userx && meetups.draft === false
      ).length !== 0 && (
        <div className="flex flex-col md:w-5/12 ">
          <p
            className={`text-base lg:text-xl ${font.className} underline underline-offset-2`}
          >
            My Stories
          </p>
          <Link
            href={`/profile/${userx}/Stories/myStories`}
            className={`text-slate-600 my-2 ${font.className}`}
          >
            View all{" "}
            {
              meetupsData?.filter(
                (meetups: any) =>
                  meetups.writer.id === userx && meetups.draft === false
              ).length
            }{" "}
            Stories
          </Link>
          <div className="mt-0 flex gap-4 mx-2 sm:mx-auto max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
            {meetupsData
              ?.filter(
                (meetups: any) =>
                  meetups.writer.id === userx && meetups.draft === false
              )
              .slice(0, 1)
              .map((meetup: any, index: any) => (
                <StoryCard story={meetup} index={index} />
              ))}
          </div>
        </div>
      )}
      {/* <div className=" border-r-2 mx-5 border-slate-300"></div> */}
      {meetupsData?.filter(
        (meetups: any) => meetups.writer.id === userx && meetups.draft === true
      ).length !== 0 && (
        <div className="flex flex-col md:w-5/12">
          <p
            className={`text-base  lg:text-xl ${font.className} underline underline-offset-2`}
          >
            My draft
          </p>
          <Link
            href={`/profile/${userx}/Stories/myDraft`}
            className={`text-slate-600 my-2 ${font.className}`}
          >
            View all{" "}
            {
              meetupsData?.filter(
                (meetups: any) =>
                  meetups.writer.id === userx && meetups.draft === true
              ).length
            }{" "}
            draft
          </Link>
          <div className="mt-0 flex flex-col gap-4 mx-2 sm:mx-0 max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
            {meetupsData

              .filter(
                (meetups: any) =>
                  meetups.writer.id === userx && meetups.draft === true
              )
              ?.slice(0, 1)
              .map((meetup: any, index: any) => (
                <StoryCard story={meetup} index={index} />
              ))}
          </div>
        </div>
      )}
      {meetupsData?.filter((meetups: any) => meetups.likes.includes(userx))
        .length !== 0 && (
        <div className="flex flex-col md:w-5/12">
          <p
            className={`text-base  lg:text-xl ${font.className} underline underline-offset-2`}
          >
            My Reactions
          </p>
          <Link
            href={`/profile/${userx}/Stories/myCollection`}
            className={`text-slate-600 my-2 ${font.className}`}
          >
            View all{" "}
            {
              meetupsData?.filter((meetups: any) =>
                meetups.likes.includes(userx)
              ).length
            }{" "}
            reactions
          </Link>
          <div className="mt-0 flex flex-col gap-4 mx-2 sm:mx-auto max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
            {meetupsData

              .filter((meetups: any) => meetups.likes.includes(userx))
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
