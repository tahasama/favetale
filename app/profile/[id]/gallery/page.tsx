import ImageModal from "@/app/explore/(components)/gallery/ImageModal";
import PetImages from "@/app/explore/(components)/gallery/PetImages";
import { db } from "@/firebase";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import React from "react";
import { Playball, Roboto_Mono } from "next/font/google";
import Link from "next/link";

const font = Roboto_Mono({ subsets: ["latin"], weight: "600" });

async function getData(userx: any) {
  const blogsData: any[] = [];
  const blogRef = query(
    collection(db, "petImages"),
    or(
      where("poster.id", "==", userx),
      where("likes", "array-contains", userx),
      where("hearts", "array-contains", userx)
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
const Gallery = async ({ tab, userx }: any) => {
  const meetupsData = await getData(userx);
  return (
    <div className="m-6 flex flex-col md:flex-row h-full gap-10 justify-center">
      {meetupsData?.filter((meetups: any) => meetups.poster.id === userx)
        .length !== 0 && (
        <div className="flex flex-col md:w-2/5 ">
          <p
            className={`text-base lg:text-xl ${font.className} underline underline-offset-2`}
          >
            Collection
          </p>
          <Link
            href={`/profile/${userx}/gallery/myGallery`}
            className={`text-slate-600 my-2 ${font.className}`}
          >
            View all{" "}
            {
              meetupsData?.filter((meetups: any) => meetups.poster.id === userx)
                .length
            }{" "}
          </Link>
          <div className="mt-0 flex  gap-4 mx-2 sm:mx-auto max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
            {meetupsData
              ?.filter((meetups: any) => meetups.poster.id === userx)
              .slice(0, 2)
              .map((meetup: any, index: any) => (
                <PetImages image={meetup} index={index} />
              ))}
          </div>
        </div>
      )}
      {/* <div className=" border-r-2 mx-5 border-slate-300"></div> */}
      {meetupsData?.filter(
        (meetups: any) =>
          meetups.likes.includes(userx) || meetups.hearts.includes(userx)
      ).length !== 0 && (
        <div className="flex flex-col md:w-2/5">
          <p
            className={`text-base  lg:text-xl ${font.className} underline underline-offset-2`}
          >
            Reactions
          </p>
          <Link
            href={`/profile/${userx}/gallery/myCollection`}
            className={`text-slate-600 my-2 ${font.className}`}
          >
            View all{" "}
            {
              meetupsData?.filter(
                (meetups: any) =>
                  meetups.likes.includes(userx) ||
                  meetups.hearts.includes(userx)
              ).length
            }{" "}
          </Link>
          <div className="mt-0 flex gap-4 mx-2 sm:mx-auto max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
            {meetupsData
              ?.filter(
                (meetups: any) =>
                  meetups.likes.includes(userx) ||
                  meetups.hearts.includes(userx)
              )
              .slice(0, 3)
              .map((meetup: any, index: any) => (
                <PetImages image={meetup} index={index} />
              ))}
          </div>
        </div>
      )}
      <ImageModal />
    </div>
  );
};

export default Gallery;
