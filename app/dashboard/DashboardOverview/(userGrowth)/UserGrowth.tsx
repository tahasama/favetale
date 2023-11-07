import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
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

async function getUserData() {
  const questionsData: any[] = [];
  const blogRef = collection(db, "users");

  const snapshot = await getDocs(blogRef);

  snapshot.forEach((doc: any) => {
    questionsData.push({ id: doc.id, ...doc.data() });
  });
  return questionsData;
}

const UserGrowth = async () => {
  const blogsData: any = await getBlogsData();
  const storiesData: any = await getStoriesData();
  const galleryData: any = await getGalleryData();
  const meetupsData: any = await getGatheringsData();
  const questionsData: any = await getQuestionsData();
  const discussionsData: any = await getDiscussionsData();
  const commentsData: any = await fetchComments("");
  const usersData: any = await getUserData();

  const fullData = [
    ...storiesData,
    ...blogsData,
    ...galleryData,
    ...meetupsData,
    ...questionsData,
    ...discussionsData,
    ...commentsData,
  ];
  console.log(
    "🚀 ~ file: userGrowth.tsx:46 ~ UserGrowth ~ fullData:",
    fullData
  );

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const userMonths: any = {};

  fullData.forEach((blog) => {
    const userID = blog.writer
      ? blog.writer.id
      : blog.poster
      ? blog.poster.id
      : blog.commenter.id;
    const postDate = blog.createdAt
      ? new Date(blog.createdAt.toDate())
      : blog.postedOn
      ? new Date(blog.postedOn)
      : new Date(blog.timestamp);
    const month = postDate.getMonth() + 1;

    if (!userMonths[month]) {
      userMonths[month] = [];
    }

    if (!userMonths[month].includes(userID)) {
      userMonths[month].push(userID);
    }
  });

  const userMonthz: any = {};

  usersData.forEach((user: any) => {
    const creationDate = new Date(user.creationTime);
    const month = creationDate.getMonth() + 1; // Adding 1 because getMonth() returns 0-based months

    if (!userMonthz[month]) {
      userMonthz[month] = [];
    }

    if (!userMonthz[month].includes(user.id)) {
      userMonthz[month].push(user.id);
    }
  });

  const activeUsers = labels.map((label, index) => {
    return userMonths[index + 1] ? userMonths[index + 1].length : 0;
  });

  // const totalUser = labels.map((label, index) => {
  //   return userMonthz[index + 1] ? userMonthz[index + 1].length : 0;
  // });

  const cumulativeTotalUsers = labels.map((_, index) => {
    const currentMonth = index + 1;
    const newUsersInMonth = userMonthz[currentMonth]
      ? userMonthz[currentMonth].length
      : 0;

    let cumulativeUsers = 0;

    for (let i = 1; i < currentMonth; i++) {
      cumulativeUsers += userMonthz[i] ? userMonthz[i].length : 0;
    }

    return cumulativeUsers + newUsersInMonth;
  });

  const userGrowthData = {
    labels,
    activeUsers,
    totalUsers: cumulativeTotalUsers,
  };

  return (
    <div className="bg-indigo-50 rounded-lg shadow-lg  lg:w-6/12 xl:w-6/12 md:scale-95 lg:scale-100 p-2">
      <h3 className="text-lg font-semibold text-slate-500">User Growth</h3>
      <CanvasClient userGrowthData={userGrowthData} />{" "}
    </div>
  );
};

export default UserGrowth;
