import ImageModal from "@/app/explore/(components)/gallery/ImageModal";
import PetImages from "@/app/explore/(components)/gallery/PetImages";
import { db } from "@/firebase";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import React from "react";
import { Playball, Roboto_Mono } from "next/font/google";
import Link from "next/link";
import UploadpetModalOpenButton from "@/app/explore/(components)/gallery/UploadpetModalOpenButton";
import UploadImageModal from "@/app/explore/(components)/gallery/UploadImageModal";

const font = Roboto_Mono({ subsets: ["latin"], weight: "600" });

async function getData(id: any) {
  const blogsData: any[] = [];
  const blogRef = query(
    collection(db, "petImages"),
    or(
      where("poster.id", "==", id),
      where("likes", "array-contains", id),
      where("hearts", "array-contains", id)
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
const Gallery = async ({ params: { id } }: any) => {
  const meetupsData = await getData(id);
  const buttonStyle =
    "bg-indigo-500 px-3 mx-2 py-3 h-fit rounded hover:bg-indigo-700 text-slate-200";

  return (
    <div className="m-6 flex flex-col md:flex-row h-full gap-10 justify-center relative">
      <div className="absolute right-0 top-0 lg:right-12">
        <UploadpetModalOpenButton buttonStyle={buttonStyle} />
      </div>
      <UploadImageModal />

      {meetupsData &&
        meetupsData?.filter((meetups: any) => meetups.poster.id === id)
          .length !== 0 && (
          <div className="flex flex-col md:w-2/5 ">
            <p
              className={`text-base lg:text-xl ${font.className} underline underline-offset-2`}
            >
              Collection
            </p>
            <Link
              href={`/profile/${id}/gallery/myGallery`}
              className={`text-slate-600 my-2 ${font.className}`}
            >
              View all{" "}
              {
                meetupsData?.filter((meetups: any) => meetups.poster.id === id)
                  .length
              }{" "}
            </Link>
            <div className="mt-0 flex  gap-4 mx-2 sm:mx-auto max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
              {meetupsData
                ?.filter((meetups: any) => meetups.poster.id === id)
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
          meetups.likes.includes(id) || meetups.hearts.includes(id)
      ).length !== 0 && (
        <div className="flex flex-col md:w-2/5">
          <p
            className={`text-base  lg:text-xl ${font.className} underline underline-offset-2`}
          >
            Reactions
          </p>
          <Link
            href={`/profile/${id}/gallery/myCollection`}
            className={`text-slate-600 my-2 ${font.className}`}
          >
            View all{" "}
            {
              meetupsData?.filter(
                (meetups: any) =>
                  meetups.likes.includes(id) || meetups.hearts.includes(id)
              ).length
            }{" "}
          </Link>
          <div className="mt-0 flex gap-4 mx-2 sm:mx-auto max-w-6xl border-2 border-indigo-300 m-2 p-2 rounded-md">
            {meetupsData
              ?.filter(
                (meetups: any) =>
                  meetups.likes.includes(id) || meetups.hearts.includes(id)
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
