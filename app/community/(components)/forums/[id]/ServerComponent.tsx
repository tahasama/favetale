import React, { Suspense } from "react";
import Loading from "./loading";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import ClientComponentFilter from "./ClientComponentFilter";
import { getDiscussionsData } from "@/app/api/GerData";

const ServerComponent = async ({ id, selectedTag }: any) => {
  const discussionsData = await getDiscussionsData();

  const categoryMap: any = {
    1: "Health",
    2: "Training",
    3: "Behavior",
    4: "Adoption",
    5: "Products",
  };
  const discussionsDataFiltered: any = discussionsData?.filter(
    (discussionFiltered: any) => discussionFiltered.category === categoryMap[id]
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
