import React from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import StoryCard from "./StoryCard";
import { getStoriesData } from "@/app/api/GerData";

const ServerComponent = async () => {
  const storiesData = await getStoriesData();

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
