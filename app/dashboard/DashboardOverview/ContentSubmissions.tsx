import React from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";

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

const ContentSubmissions = async () => {
  const blogsData: any = await getData();

  return (
    <p className="text-lg md:text-2xl font-bold text-white">
      {blogsData && blogsData.length}
    </p>
  );
};

export default ContentSubmissions;
