import QuestionCard from "@/app/community/(components)/questions/QuestionCard";
import { db } from "@/firebase";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import React from "react";

import { Playball, Roboto_Mono } from "next/font/google";

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
    <div className="grid place-items-center">
      <div className=" w-7/12 flex flex-col space-y-3">
        <div>
          <p
            className={`text-base  lg:text-xl ${font.className} text-center underline underline-offset-2 my-6`}
          >
            my questions
          </p>

          {meetupsData
            ?.filter((neet: any) => neet.writer.id === userx)
            .map((meetup: any, index: any) => (
              <div className="m-6">
                <QuestionCard question={meetup} index={index} />
              </div>
            ))}
        </div>
        <div>
          <p
            className={`text-base  lg:text-xl ${font.className} text-center underline underline-offset-2 my-6`}
          >
            my answers
          </p>
          {meetupsData
            ?.filter((neet: any) => neet.answerers.includes(userx))
            .map((meetup: any, index: any) => (
              <div className="m-6">
                <QuestionCard question={meetup} index={index} />
              </div>
            ))}
        </div>
        <div>
          <p
            className={`text-base  lg:text-xl ${font.className} text-center underline underline-offset-2 my-6`}
          >
            my upvotes
          </p>
          {meetupsData
            ?.filter((neet: any) => neet.upvotes.includes(userx))
            .map((meetup: any, index: any) => (
              <div className="m-6">
                <QuestionCard question={meetup} index={index} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
