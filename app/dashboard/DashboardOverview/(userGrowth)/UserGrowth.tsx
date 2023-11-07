import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import CanvasClient from "./CanvasClient";

async function getData() {
  const blogsData: any[] = [];
  const blogRef = query(collection(db, "blogs"));

  const blogSnapshot = await getDocs(blogRef);

  blogSnapshot.forEach((doc: any) => {
    blogsData.push({ id: doc.id, ...doc.data() });
  });

  const storiesData: any[] = [];
  const storyRef = query(collection(db, "storys"));

  const storySnapshot = await getDocs(storyRef);

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

  const questionSnapshot = await getDocs(questionsRef);

  questionSnapshot.forEach((doc: any) => {
    questionsData.push({ id: doc.id, ...doc.data() });
  });

  const MeetupsData: any[] = [];
  const MeetupsRef = query(collection(db, "gatherings"));

  const MeetupSnapshot = await getDocs(MeetupsRef);

  MeetupSnapshot.forEach((doc: any) => {
    MeetupsData.push({ id: doc.id, ...doc.data() });
  });

  const CommentsData: any[] = [];
  const CommentsRef = query(collection(db, "comments"));

  const CommentsSnapshot = await getDocs(CommentsRef);

  CommentsSnapshot.forEach((doc: any) => {
    CommentsData.push({ id: doc.id, ...doc.data() });
  });
  return [
    ...storiesData,
    ...blogsData,
    ...petImages,
    ...MeetupsData,
    ...questionsData,
    ...discussionsData,
    ...CommentsData,
  ];
}

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
  const blogsData = await getData();
  const usersData = await getUserData();

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

  blogsData.forEach((blog) => {
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

  usersData.forEach((user) => {
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

  const totalUser = labels.map((label, index) => {
    return userMonthz[index + 1] ? userMonthz[index + 1].length : 0;
  });

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
