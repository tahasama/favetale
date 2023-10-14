import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import StoryCard from "./StoryCard";

async function getData() {
  const storiesData: any[] = [];
  const storyRef = collection(db, "storys");

  const snapshot = await getDocs(storyRef);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  snapshot.forEach((doc: any) => {
    storiesData.push({ id: doc.id, ...doc.data() });
  });
  return storiesData;
}

const ServerComponent = async () => {
  const storiesData = await getData();
  console.log(
    "🚀 ~ file: ServerComponent.tsx:22 ~ ServerComponent ~ storiesData:",
    storiesData
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:mx-7 mx-2 gap-6 mb-4">
      {storiesData &&
        storiesData.map((story: any, index: any) => (
          <StoryCard story={story} index={index} />
        ))}
    </div>
  );
};
export default ServerComponent;
