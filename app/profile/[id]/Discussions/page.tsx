import { db } from "@/firebase";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import React from "react";
import Link from "next/link";
import { Roboto_Mono } from "next/font/google";
import DiscussionCard from "./DiscussionCard";
import ClientComponentButtuns from "@/app/community/(components)/forums/[id]/ClientComponentButtons";

const font = Roboto_Mono({ subsets: ["latin"], weight: "600" });

async function getData(id: any) {
  const blogsData: any[] = [];
  const blogRef = query(
    collection(db, "discussions"),
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
const Discussions = async ({ params: { id } }: any) => {
  const meetupsData = await getData(id);

  const buttonStyle =
    "bg-indigo-500 px-3 mx-2 py-3 h-fit rounded hover:bg-indigo-700 text-slate-200";

  return (
    <div className="m-6 flex flex-col md:flex-row h-full gap-10 justify-center relative">
      <div className="absolute right-0 top-0 lg:right-12 pb-2">
        <ClientComponentButtuns buttonStyle={buttonStyle} />
      </div>
      {meetupsData &&
        meetupsData?.filter((meet: any) => meet.writer.id === id).length !==
          0 && (
          <div className="flex flex-col md:w-1/2">
            <p
              className={`text-base lg:text-xl ${font.className} underline underline-offset-2`}
            >
              Discussions
            </p>
            <Link
              href={`/profile/${id}/Discussions/myDiscussions`}
              className={`text-slate-600 my-2 ${font.className}`}
            >
              View all{" "}
              {meetupsData?.filter((meet: any) => meet.writer.id === id).length}{" "}
            </Link>
            <div className="mt-0 flex gap-4  w-full  border-2 border-indigo-300 rounded-md">
              {meetupsData
                ?.filter((meet: any) => meet.writer.id === id)
                .slice(0, 2)
                .map((discussion: any) => (
                  <DiscussionCard discussion={discussion} />
                ))}
            </div>
          </div>
        )}

      {meetupsData &&
        meetupsData?.filter((meet: any) => meet.participants.includes(id))
          .length !== 0 && (
          <div className="flex flex-col md:w-1/2">
            <p
              className={`text-base  lg:text-xl ${font.className} underline underline-offset-2`}
            >
              Participations
            </p>
            <Link
              href={`/profile/${id}/Discussions/myParticipations`}
              className={`text-slate-600 my-2 ${font.className}`}
            >
              View all{" "}
              {
                meetupsData?.filter((meet: any) =>
                  meet.participants.includes(id)
                ).length
              }{" "}
            </Link>
            <div className="mt-0 flex gap-4 mx-2 border-2 border-indigo-300 rounded-md">
              {meetupsData
                ?.filter((meet: any) => meet.participants.includes(id))
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
