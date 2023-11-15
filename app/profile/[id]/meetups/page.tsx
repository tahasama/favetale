import MeetupCard from "@/app/community/(components)/meetups/MeetupCard";
import { db } from "@/firebase";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import Link from "next/link";
import React from "react";
import { Playball, Roboto_Mono } from "next/font/google";
import WriteMeetupButton from "@/app/dashboard/ContentModeration/meetups/WriteMeetupButton";

const font = Roboto_Mono({ subsets: ["latin"], weight: "600" });

async function getData(id: any) {
  const blogsData: any[] = [];
  const blogRef = query(
    collection(db, "gatherings"),
    or(
      where("writer.id", "==", id),
      where("participants", "array-contains", id)
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
const Meetups = async ({ params: { id } }: any) => {
  const meetupsData = await getData(id);

  return (
    <div className="m-6 flex h-full gap-10 justify-center relative">
      <div className="absolute right-0 top-0 lg:right-12 pb-2">
        <WriteMeetupButton />
      </div>
      {meetupsData &&
        meetupsData?.filter((meetups: any) => meetups.writer.id === id)
          .length !== 0 && (
          <div className="flex flex-col md:w-3/5 ">
            <p
              className={`text-base lg:text-xl ${font.className} underline underline-offset-2`}
            >
              Meetups
            </p>
            <Link
              href={`/profile/${id}/blogs/myBlogs`}
              className={`text-slate-600 my-2 ${font.className}`}
            >
              View all{" "}
              {
                meetupsData?.filter((meetups: any) => meetups.writer.id === id)
                  .length
              }{" "}
            </Link>
            <div className="mt-0 flex flex-col md:flex-row justify-start gap-4 mx-2 sm:mx-0 w-fit max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
              {meetupsData
                ?.slice(0, 2)
                .filter((meetups: any) => meetups.writer.id === id)
                .map((meetup: any, index: any) => (
                  <MeetupCard meetup={meetup} index={index} />
                ))}
            </div>
          </div>
        )}
      {/* <div className=" border-r-2 mx-5 border-slate-300"></div> */}
      {meetupsData &&
        meetupsData?.filter((meetups: any) => meetups.participants.includes(id))
          .length !== 0 && (
          <div className="flex flex-col md:w-3/5">
            <p
              className={`text-base  lg:text-xl ${font.className} underline underline-offset-2`}
            >
              Participations
            </p>
            <Link
              href={`/profile/${id}/blogs/myCollection`}
              className={`text-slate-600 my-2 ${font.className}`}
            >
              View all{" "}
              {
                meetupsData?.filter((meetups: any) =>
                  meetups.participants.includes(id)
                ).length
              }{" "}
            </Link>
            <div className="mt-0 flex flex-col md:flex-row gap-4 mx-2 sm:mx-0 w-fit max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
              {meetupsData
                ?.slice(0, 2)
                .filter((meetups: any) => meetups.participants.includes(id))
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
