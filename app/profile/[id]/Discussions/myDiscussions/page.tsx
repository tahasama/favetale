import { db } from "@/firebase";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import React from "react";
import { Playball, Roboto_Mono } from "next/font/google";
import BlogCard from "@/app/explore/(components)/blogs/BlogCard";
import DiscussionCard from "../DiscussionCard";

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
const myGallery = async ({ params: { id } }: any) => {
  const meetupsData = await getData(id);

  return (
    <div className="flex bg-tealLight h-full w-full justify-center">
      <div className="w-6/12 mt-28">
        <p
          className={`text-base  lg:text-xl ${font.className} text-center underline underline-offset-2`}
        >
          My Discussions
        </p>

        <div className="mt-10 mx-2">
          {meetupsData
            ?.filter((meet: any) => meet.writer.id === id)
            .map((discussion: any) => (
              <DiscussionCard discussion={discussion} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default myGallery;
