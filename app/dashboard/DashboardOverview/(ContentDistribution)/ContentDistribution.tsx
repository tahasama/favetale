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
    counts: Object.values(fullData[0]).map((data: any) => data?.length),
  };

  return <CanvasClient contentTypesData={contentTypesData} />;
};

export default ContentDistribution;
