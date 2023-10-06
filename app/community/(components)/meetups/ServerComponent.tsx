import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import MeetupCard from "./MeetupCard";
import FilterComponent from "./FilterComponent";

async function getData() {
  const blogsData: any[] = [];
  const blogRef = collection(db, "gatherings");

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

const ServerComponent = async () => {
  const meetupsData = await getData();
  console.log(
    "🚀 ~ file: ServerComponent.tsx:23 ~ ServerComponent ~ meetupsData:",
    meetupsData
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 w-full">
      <FilterComponent meetupsData={meetupsData} />
    </div>
  );
};

export default ServerComponent;
