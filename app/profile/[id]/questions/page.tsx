import QuestionCard from "@/app/community/(components)/questions/QuestionCard";
import { db } from "@/firebase";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import React from "react";

import { Playball, Roboto_Mono } from "next/font/google";
import Link from "next/link";

const font = Roboto_Mono({ subsets: ["latin"], weight: "600" });

async function getData(userx: any) {
  const blogsData: any[] = [];
  const blogRef = query(
    collection(db, "questions"),
    or(
      where("writer.id", "==", userx),
      where("upvotes", "array-contains", userx),
      where("answerers", "array-contains", userx)
    )
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
const Questions = async ({ tab, userx }: any) => {
  const meetupsData = await getData(userx);

  return (
    <div className="m-6 flex  flex-col md:flex-row h-full gap-10 justify-center">
      <div className="flex flex-col md:w-2/5 ">
        <p
          className={`text-base  lg:text-xl ${font.className} underline underline-offset-2`}
        >
          my questions
        </p>
        <Link
          href={`/profile/${userx}/questions/myQuestions`}
          className={`text-slate-600 my-2 ${font.className}`}
        >
          View all{" "}
          {
            meetupsData?.filter((meetups: any) => meetups.writer.id === userx)
              .length
          }{" "}
          questions
        </Link>
        <div className="mt-0 flex flex-col gap-4 mx-2 sm:mx-auto max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
          {meetupsData
            ?.filter((neet: any) => neet.writer.id === userx)
            .slice(0, 2)
            .map((meetup: any, index: any) => (
              <div className="m-2 text-xs">
                <QuestionCard question={meetup} index={index} />
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col md:w-2/5 ">
        <p
          className={`text-base  lg:text-xl ${font.className} underline underline-offset-2`}
        >
          my answers
        </p>
        <Link
          href={`/profile/${userx}/questions/myAnswers`}
          className={`text-slate-600 my-2 ${font.className}`}
        >
          View all{" "}
          {
            meetupsData?.filter((meetups: any) =>
              meetups.answerers.includes(userx)
            ).length
          }{" "}
          answers
        </Link>
        <div className="mt-0 flex flex-col gap-4 mx-2 sm:mx-auto max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
          {meetupsData
            ?.filter((neet: any) => neet.answerers.includes(userx))
            .slice(0, 2)
            .map((meetup: any, index: any) => (
              <div className="m-2 text-xs">
                <QuestionCard question={meetup} index={index} />
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col md:w-2/5 ">
        <p
          className={`text-base  lg:text-xl ${font.className} underline underline-offset-2`}
        >
          my upvotes
        </p>
        <Link
          href={`/profile/${userx}/questions/myCollection`}
          className={`text-slate-600 my-2 ${font.className}`}
        >
          View all{" "}
          {
            meetupsData?.filter((meetups: any) =>
              meetups.upvotes.includes(userx)
            ).length
          }{" "}
          reactions
        </Link>
        <div className="mt-0 flex flex-col gap-4 mx-2 sm:mx-auto max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
          {meetupsData
            ?.filter((neet: any) => neet.upvotes.includes(userx))
            .slice(0, 2)
            .map((meetup: any, index: any) => (
              <div className="m-2 text-xs">
                <QuestionCard question={meetup} index={index} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
