import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";

async function getData(userx: any) {
  const blogsData: any[] = [];
  const blogRef = query(
    collection(db, "storys"),
    where("writer.id", "==", userx.id)
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
const Stories = async ({ tab, userx }: any) => {
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
    <div>
      ServerComponent{" "}
      {meetupsData?.map((meetup: any) => (
        <p>{meetup.id}</p>
      ))}
    </div>
  );
};

export default Stories;
