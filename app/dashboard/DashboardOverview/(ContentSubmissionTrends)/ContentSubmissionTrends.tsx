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
} from "@/app/api/GerData";

const ContentSubmissionTrends = async () => {
  const blogsData: any = await getBlogsData();
  const storiesData: any = await getStoriesData();
  const galleryData: any = await getGalleryData();
  const meetupsData: any = await getGatheringsData();
  const questionsData: any = await getQuestionsData();
  const discussionsData: any = await getDiscussionsData();
  const commentsData: any = await fetchComments("");

  const fullData = [
    ...storiesData,
    ...blogsData,
    ...galleryData,
    ...meetupsData,
    ...questionsData,
    ...discussionsData,
    ...commentsData,
  ];
  const monthlyCounts: any = fullData?.reduce((counts: any, blog: any) => {
    const createdAt = blog.createdAt
      ? new Date(blog.createdAt.toDate())
      : new Date(blog.postedOn);
    const monthYear = `${createdAt.getMonth() + 1}`;
    counts[monthYear] = (counts[monthYear] || 0) + 1;
    return counts;
  }, {});

  const labels = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  const contentSubmissionTrendsData = {
    labels: Object.values(labels),
    counts: Object.keys(labels).map(
      (label) => (monthlyCounts && monthlyCounts[label]) || 0
    ),
  };

  return (
    <CanvasClient contentSubmissionTrendsData={contentSubmissionTrendsData} />
  );
};

export default ContentSubmissionTrends;
