import { db } from "@/firebase";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import React from "react";
import BlogCard from "@/app/explore/(components)/blogs/BlogCard";
import Link from "next/link";
import { Playball, Roboto_Mono } from "next/font/google";
import DiscussionCard from "./DiscussionCard";

const font = Roboto_Mono({ subsets: ["latin"], weight: "600" });

async function getData(userx: any) {
  const blogsData: any[] = [];
  const blogRef = query(
    collection(db, "discussions"),
    or(
      where("writer.id", "==", userx),
      where("participants", "array-contains", userx)
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
const Discussions = async ({ tab, userx }: any) => {
  const meetupsData = await getData(userx);

  return (
    <div className="m-6 flex flex-col md:flex-row h-full gap-10 justify-center">
      {meetupsData?.filter((meet: any) => meet.writer.id === userx).length !==
        0 && (
        <div className="flex flex-col md:w-1/2">
          <p
            className={`text-base lg:text-xl ${font.className} underline underline-offset-2`}
          >
            My Discussions
          </p>
          <Link
            href={`/profile/${userx}/Discussions/myDiscussions`}
            className={`text-slate-600 my-2 ${font.className}`}
          >
            View all{" "}
            {
              meetupsData?.filter((meet: any) => meet.writer.id === userx)
                .length
            }{" "}
            Discussions
          </Link>
          <div className="mt-0 flex gap-4  w-full  border-2 border-indigo-300 rounded-md">
            {meetupsData
              ?.filter((meet: any) => meet.writer.id === userx)
              .slice(0, 2)
              .map((discussion: any) => (
                <DiscussionCard discussion={discussion} />
              ))}
          </div>
        </div>
      )}
      {/* <div className=" border-r-2 mx-5 border-slate-300"></div> */}

      {meetupsData?.filter((meet: any) => meet.participants.includes(userx))
        .length !== 0 && (
        <div className="flex flex-col md:w-1/2">
          <p
            className={`text-base  lg:text-xl ${font.className} underline underline-offset-2`}
          >
            My Participations
          </p>
          <Link
            href={`/profile/${userx}/Discussions/myParticipations`}
            className={`text-slate-600 my-2 ${font.className}`}
          >
            View all{" "}
            {
              meetupsData?.filter((meet: any) =>
                meet.participants.includes(userx)
              ).length
            }{" "}
            Participations
          </Link>
          <div className="mt-0 flex gap-4 mx-2 border-2 border-indigo-300 rounded-md">
            {meetupsData
              ?.filter((meet: any) => meet.participants.includes(userx))
              .slice(0, 2)
              .map((discussion: any) => (
                <DiscussionCard discussion={discussion} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Discussions;
