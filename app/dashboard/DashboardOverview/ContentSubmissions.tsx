import React from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";
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

const ContentSubmissions = async () => {
  const blogsData: any = await getBlogsData();
  const storiesData: any = await getStoriesData();
  const galleryData: any = await getGalleryData();
  const meetupsData: any = await getGatheringsData();
  const questionsData: any = await getQuestionsData();
  const discussionsData: any = await getDiscussionsData();
  const commentsData: any = await fetchComments("");
  // const usersData: any = await getUsersData();

  const fullData = [
    ...storiesData,
    ...blogsData,
    ...galleryData,
    ...meetupsData,
    ...questionsData,
    ...discussionsData,
    ...commentsData,
  ];

  return (
    <p className="text-lg md:text-2xl font-bold text-white">
      {(fullData && fullData.length) || 0}
    </p>
  );
};

export default ContentSubmissions;
