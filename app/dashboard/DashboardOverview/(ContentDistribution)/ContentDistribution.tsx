import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";

import Link from "next/link";

import CanvasClient from "./CanvasClient";

import {
  fetchComments,
  getBlogsData,
  getDiscussionsData,
  getGalleryData,
  getGatheringsData,
  getQuestionsData,
  getStoriesData,
  getUsersData,
} from "@/app/api/GerData";

const ContentDistribution = async () => {
  const blogsData: any = await getBlogsData();
  const storiesData: any = await getStoriesData();
  const galleryData: any = await getGalleryData();
  const meetupsData: any = await getGatheringsData();
  const questionsData: any = await getQuestionsData();
  const discussionsData: any = await getDiscussionsData();
  const fullData = [
    {
      storiesData: storiesData,
      blogsData: blogsData,
      petImages: galleryData,
      MeetupsData: meetupsData,
      questionsData: questionsData,
      discussionsData: discussionsData,
    },
  ];

  const contentTypesData = {
    labels: Object.keys(fullData[0]),
    counts: Object.values(fullData[0]).map((data: any) => data.length),
  };

  return (
    <div className="bg-indigo-50 rounded-lg shadow-lg  lg:w-6/12 xl:w-6/12 md:scale-95 lg:scale-100 p-2">
      <h3 className="text-lg font-semibold text-slate-500">
        Content Type Distribution
      </h3>
      <div className="h-52 lg:h-96 grid place-items-center w-full">
        <CanvasClient contentTypesData={contentTypesData} />
      </div>
    </div>
  );
};

export default ContentDistribution;
