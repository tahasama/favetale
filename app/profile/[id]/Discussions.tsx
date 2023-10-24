import { db } from "@/firebase";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import React from "react";
import DiscussionCard from "./DiscussionCard";

async function getData(userx: any) {
  const blogsData: any[] = [];
  const blogRef = query(
    collection(db, "discussions"),
    or(where("writer.id", "==", userx))
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
const Discussions = async ({ tab, userx }: any) => {
  const meetupsData = await getData(userx);

  return (
    <div>
      ServerComponent{" "}
      {meetupsData?.map((discussion: any) => (
        <DiscussionCard discussion={discussion} />
      ))}
    </div>
  );
};

export default Discussions;
