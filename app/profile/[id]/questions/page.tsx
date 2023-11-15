import QuestionCard from "@/app/community/(components)/questions/QuestionCard";
import { db } from "@/firebase";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import React from "react";

import { Playball, Roboto_Mono } from "next/font/google";
import Link from "next/link";
import WriteQuestionButton from "@/app/dashboard/ContentModeration/questions/WriteQuestionButton";

const font = Roboto_Mono({ subsets: ["latin"], weight: "600" });

async function getData(id: any) {
  const blogsData: any[] = [];
  const blogRef = query(
    collection(db, "questions"),
    or(
      where("writer.id", "==", id),
      where("upvotes", "array-contains", id),
      where("answerers", "array-contains", id)
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
const Questions = async ({ params: { id } }: any) => {
  const meetupsData = await getData(id);
  console.log(
    "🚀 ~ file: page.tsx:34 ~ Questions ~ meetupsData:",
    meetupsData?.filter((meetups: any) => meetups.answerers.includes(id))
  );

  return (
    <div className="m-6 flex  flex-col md:flex-row h-full gap-10 justify-center relative">
      <div className="absolute right-0 top-0 lg:right-12 pb-2">
        <WriteQuestionButton />
      </div>
      {meetupsData &&
        meetupsData?.filter((meetups: any) => meetups.writer.id === id)
          .length !== 0 && (
          <div className="flex flex-col md:w-2/5 ">
            <p
              className={`text-base  lg:text-xl ${font.className} underline underline-offset-2`}
            >
              Questions
            </p>
            <Link
              href={`/profile/${id}/questions/myQuestions`}
              className={`text-slate-600 my-2 ${font.className}`}
            >
              View all{" "}
              {
                meetupsData?.filter((meetups: any) => meetups.writer.id === id)
                  .length
              }{" "}
            </Link>
            <div className="mt-0 flex flex-col gap-4 mx-2 sm:mx-auto max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
              {meetupsData
                ?.filter((neet: any) => neet.writer.id === id)
                .slice(0, 2)
                .map((meetup: any, index: any) => (
                  <div className="m-2 text-xs">
                    <QuestionCard question={meetup} index={index} />
                  </div>
                ))}
            </div>
          </div>
        )}
      {meetupsData &&
        meetupsData?.filter((meetups: any) => meetups.answerers.includes(id))
          .length !== 0 && (
          <div className="flex flex-col md:w-2/5 ">
            <p
              className={`text-base  lg:text-xl ${font.className} underline underline-offset-2`}
            >
              Answers
            </p>
            <Link
              href={`/profile/${id}/questions/myAnswers`}
              className={`text-slate-600 my-2 ${font.className}`}
            >
              View all{" "}
              {
                meetupsData?.filter((meetups: any) =>
                  meetups.answerers.includes(id)
                ).length
              }{" "}
            </Link>
            <div className="mt-0 flex flex-col gap-4 mx-2 sm:mx-auto max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
              {meetupsData
                ?.filter((neet: any) => neet.answerers.includes(id))
                .slice(0, 2)
                .map((meetup: any, index: any) => (
                  <div className="m-2 text-xs">
                    <QuestionCard question={meetup} index={index} />
                  </div>
                ))}
            </div>
          </div>
        )}
      {meetupsData &&
        meetupsData?.filter((neet: any) => neet.upvotes.includes(id)).length !==
          0 && (
          <div className="flex flex-col md:w-2/5 ">
            <p
              className={`text-base  lg:text-xl ${font.className} underline underline-offset-2`}
            >
              Upvotes
            </p>
            <Link
              href={`/profile/${id}/questions/myCollection`}
              className={`text-slate-600 my-2 ${font.className}`}
            >
              View all{" "}
              {
                meetupsData?.filter((meetups: any) =>
                  meetups.upvotes.includes(id)
                ).length
              }{" "}
            </Link>
            <div className="mt-0 flex flex-col gap-4 mx-2 sm:mx-auto max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
              {meetupsData
                ?.filter((neet: any) => neet.upvotes.includes(id))
                .slice(0, 2)
                .map((meetup: any, index: any) => (
                  <div className="m-2 text-xs">
                    <QuestionCard question={meetup} index={index} />
                  </div>
                ))}
            </div>
          </div>
        )}
    </div>
  );
};

export default Questions;
