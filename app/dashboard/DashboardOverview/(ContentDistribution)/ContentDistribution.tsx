import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";

import Link from "next/link";

import CanvasClient from "./CanvasClient";

async function fetchFirestoreData(collectionName: any) {
  const data: any = [];
  const collectionRef = collection(db, collectionName);

  const snapshot = await getDocs(collectionRef);

  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
}

async function getData() {
  const blogsData = await fetchFirestoreData("blogs");
  const storiesData = await fetchFirestoreData("storys");
  const petImages = await fetchFirestoreData("petImages");
  const discussionsData = await fetchFirestoreData("discussions");
  const questionsData = await fetchFirestoreData("questions");
  const MeetupsData = await fetchFirestoreData("gatherings");

  return [
    {
      storiesData: storiesData,
      blogsData: blogsData,
      petImages: petImages,
      MeetupsData: MeetupsData,
      questionsData: questionsData,
      discussionsData: discussionsData,
    },
  ];
}

const ContentDistribution = async () => {
  const blogsData: any = await getData();

  const contentTypesData = {
    labels: Object.keys(blogsData[0]),
    counts: Object.values(blogsData[0]).map((data: any) => data.length),
  };

  return (
    <div className="bg-indigo-50 rounded-lg shadow-lg  lg:w-6/12 xl:w-6/12 md:scale-95 lg:scale-100 p-2">
      <h3 className="text-lg font-semibold text-slate-500">
        Content Type Distribution
      </h3>
      <div className="h-52 lg:h-80 grid place-items-center w-full">
        <CanvasClient contentTypesData={contentTypesData} />
      </div>
    </div>
  );
};

export default ContentDistribution;
