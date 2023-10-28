import { db } from "@/firebase";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import React from "react";
import { Playball, Roboto_Mono } from "next/font/google";
import BlogCard from "@/app/explore/(components)/blogs/BlogCard";
import QuestionCard from "@/app/community/(components)/questions/QuestionCard";

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

const myCollection = async ({ params: { id } }: any) => {
  const meetupsData = await getData(id);

  return (
    <div className="flex flex-col bg-gradient-to-b from-tealLight to-yellow-100 mt-20 min-h-screen">
      <p
        className={`text-base  lg:text-xl ${font.className} text-center underline underline-offset-2 mt-8`}
      >
        My Reactions
      </p>
      <div className="flex justify-center items-start">
        <div className="flex flex-col w-full md:w-2/3 p-3 mt-10 gap-4">
          {" "}
          {meetupsData
            ?.filter((neet: any) => neet.upvotes.includes(id))

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

export default myCollection;
