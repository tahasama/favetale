import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";

import Link from "next/link";

import CanvasClient from "./CanvasClient";

async function getData() {
  const blogsData: any[] = [];
  const blogRef = query(collection(db, "blogs"), where("draft", "==", false));

  const blogSnapshot = await getDocs(blogRef);

  blogSnapshot.forEach((doc: any) => {
    blogsData.push({ id: doc.id, ...doc.data() });
  });

  const storiesData: any[] = [];
  const storyRef = query(collection(db, "storys"), where("draft", "==", false));

  const storySnapshot = await getDocs(blogRef);

  storySnapshot.forEach((doc: any) => {
    storiesData.push({ id: doc.id, ...doc.data() });
  });
  const petImages: any[] = [];
  const imageRef = collection(db, "petImages");

  const imageSnapshot = await getDocs(imageRef);

  imageSnapshot.forEach((doc: any) => {
    petImages.push({ id: doc.id, ...doc.data() });
  });

  const discussionsData: any[] = [];
  const discussionRef = query(collection(db, "discussions"));

  const discussionSnapshot = await getDocs(discussionRef);

  discussionSnapshot.forEach((doc: any) => {
    discussionsData.push({ id: doc.id, ...doc.data() });
  });

  const questionsData: any[] = [];
  const questionsRef = query(collection(db, "questions"));

  const questionSnapshot = await getDocs(blogRef);

  questionSnapshot.forEach((doc: any) => {
    questionsData.push({ id: doc.id, ...doc.data() });
  });

  const MeetupsData: any[] = [];
  const MeetupsRef = query(collection(db, "gatherings"));

  const MeetupSnapshot = await getDocs(blogRef);

  MeetupSnapshot.forEach((doc: any) => {
    MeetupsData.push({ id: doc.id, ...doc.data() });
  });
  return [
    ...storiesData,
    ...blogsData,
    ...petImages,
    ...MeetupsData,
    ...questionsData,
    ...discussionsData,
  ];
}

const ContentSubmissionTrends = async () => {
  const blogsData: any = await getData();
  let month: any = "";
  const monthlyCounts: any = blogsData?.reduce((counts: any, blog: any) => {
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
    <div className="bg-indigo-50 rounded-lg shadow-lg  lg:w-6/12 xl:w-6/12 md:scale-95 lg:scale-100 p-2">
      <h3 className="text-lg font-semibold text-slate-500">
        Content Submission Trends
      </h3>
      <CanvasClient contentSubmissionTrendsData={contentSubmissionTrendsData} />
    </div>
  );
};

export default ContentSubmissionTrends;
