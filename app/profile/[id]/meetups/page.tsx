import MeetupCard from "@/app/community/(components)/meetups/MeetupCard";
import { db } from "@/firebase";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import Link from "next/link";
import React from "react";
import { Playball, Roboto_Mono } from "next/font/google";

const font = Roboto_Mono({ subsets: ["latin"], weight: "600" });

async function getData(userx: any) {
  const blogsData: any[] = [];
  const blogRef = query(
    collection(db, "gatherings"),
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
const Meetups = async ({ tab, userx }: any) => {
  const meetupsData = await getData(userx);

  return (
    <div className="m-6 flex h-full gap-10 justify-center">
      {meetupsData?.filter((meetups: any) => meetups.writer.id === userx)
        .length !== 0 && (
        <div className="flex flex-col md:w-3/5 ">
          <p
            className={`text-base lg:text-xl ${font.className} underline underline-offset-2`}
          >
            My Meetups
          </p>
          <Link
            href={`/profile/${userx}/blogs/myBlogs`}
            className={`text-slate-600 my-2 ${font.className}`}
          >
            View all{" "}
            {
              meetupsData?.filter((meetups: any) => meetups.writer.id === userx)
                .length
            }{" "}
            Meetups
          </Link>
          <div className="mt-0 flex flex-col md:flex-row justify-start gap-4 mx-2 sm:mx-0 w-fit max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
            {meetupsData
              ?.slice(0, 2)
              .filter((meetups: any) => meetups.writer.id === userx)
              .map((meetup: any, index: any) => (
                <MeetupCard meetup={meetup} index={index} />
              ))}
          </div>
        </div>
      )}
      {/* <div className=" border-r-2 mx-5 border-slate-300"></div> */}
      {meetupsData?.filter((meetups: any) =>
        meetups.participants.includes(userx)
      ).length !== 0 && (
        <div className="flex flex-col md:w-3/5">
          <p
            className={`text-base  lg:text-xl ${font.className} underline underline-offset-2`}
          >
            My Participations
          </p>
          <Link
            href={`/profile/${userx}/blogs/myCollection`}
            className={`text-slate-600 my-2 ${font.className}`}
          >
            View all{" "}
            {
              meetupsData?.filter((meetups: any) =>
                meetups.participants.includes(userx)
              ).length
            }{" "}
            Participations
          </Link>
          <div className="mt-0 flex flex-col md:flex-row gap-4 mx-2 sm:mx-0 w-fit max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
            {meetupsData
              ?.slice(0, 2)
              .filter((meetups: any) => meetups.participants.includes(userx))
              .map((meetup: any, index: any) => (
                <MeetupCard meetup={meetup} index={index} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Meetups;
