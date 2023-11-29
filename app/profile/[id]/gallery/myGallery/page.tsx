import PetImages from "@/app/explore/(components)/gallery/PetImages";
import { db } from "@/firebase";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import React from "react";
import { Roboto_Mono } from "next/font/google";

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
const myGallery = async ({ params: { id } }: any) => {
  const meetupsData = await getData(id);

  return (
    <div className="flex flex-col mt-24">
      <p
        className={`text-base lg:text-xl ${font.className} underline underline-offset-2`}
      >
        My Collection
      </p>

      <div className="mt-10 pb-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 sm:gap-4 mx-2 sm:mx-auto max-w-6xl">
        {meetupsData
          ?.filter((meetups: any) => meetups.poster.id === id)
          .map((meetup: any, index: any) => (
            <PetImages image={meetup} index={index} />
          ))}
      </div>
    </div>
  );
};

export default myGallery;
