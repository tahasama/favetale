import MeetupCard from "@/app/community/(components)/meetups/MeetupCard";
import { db } from "@/firebase";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import Link from "next/link";
import React from "react";
import { Roboto_Mono } from "next/font/google";

const font = Roboto_Mono({ subsets: ["latin"], weight: "600" });

async function getData(id: any) {
  const blogsData: any[] = [];
  const blogRef = query(
    collection(db, "event"),
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

  const buttonStyle =
    "bg-indigo-500 px-3 mx-2 py-3 h-fit rounded hover:bg-indigo-700 text-slate-200";

  return (
    <div className="m-6 flex h-full gap-10 justify-center relative">
      <div className="absolute right-0 top-3 lg:right-12 !pb-4">
        <Link href={"/community/events"} className={buttonStyle}>
          Browse events dd
        </Link>
      </div>

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
