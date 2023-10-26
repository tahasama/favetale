import MeetupCard from "@/app/community/(components)/meetups/MeetupCard";
import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";

async function getData(userx: any) {
  const blogsData: any[] = [];
  const blogRef = query(
    collection(db, "gatherings"),
    where("writer.id", "==", userx)
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
const Meetups = async ({ tab, userx }: any) => {
  console.log(
    "🚀 ~ file: ServerComponent.tsx:23 ~ ServerComponent ~ userx:",
    userx
  );
  const meetupsData = await getData(userx);
  console.log(
    "🚀 ~ file: ServerComponent.tsx:25 ~ ServerComponent ~ meetupsData:",
    meetupsData
  );

  return (
    <div className="mt-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0 sm:gap-4 mx-2 sm:mx-auto max-w-6xl">
      {meetupsData?.map((meetup: any) => (
        <MeetupCard meetup={meetup} />
      ))}
    </div>
  );
};

export default Meetups;
