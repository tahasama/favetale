import React, { Suspense } from "react";
import Loading from "./loading";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import ClientComponentFilter from "./ClientComponentFilter";

async function getData(selectedTag: any) {
  const discussionsData: any[] = [];
  const discussionRef = query(
    collection(db, "discussions")
    // where("tags", "array-contains", selectedTag)
  );
  const snapshot = await getDocs(discussionRef);
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  snapshot.forEach((doc: any) => {
    discussionsData.push({ id: doc.id, ...doc.data() });
  });
  return discussionsData;
}

const ServerComponent = async ({ id, selectedTag }: any) => {
  const discussionsData = await getData(selectedTag);
  console.log(
    "🚀 ~ file: ServerComponent.tsx:26 ~ ServerComponent ~ discussionsData:",
    discussionsData
  );
  const categoryMap: any = {
    1: "Health",
    2: "Training",
    3: "Behavior",
    4: "Adoption",
  };
  const discussionsDataFiltered: any = discussionsData?.filter(
    (discussionFiltered: any) =>
      discussionFiltered.category === (categoryMap[id] || "Product")
  );
  console.log(
    "🚀 ~ file: ServerComponent.tsx:40 ~ ServerComponent ~ discussionsDataFiltered:",
    discussionsDataFiltered
  );
  return (
    <Suspense fallback={<Loading />}>
      <ClientComponentFilter
        discussionsDataFiltered={discussionsDataFiltered}
        id={id}
      />
    </Suspense>
  );
};

export default ServerComponent;
