"use client";

import story1 from "../../../images/stories/story1.jpg";
import story2 from "../../../images/stories/story2.jpg";
import story3 from "../../../images/stories/story3.jpg";
import story4 from "../../../images/stories/story4.jpg";

import { Suspense, useState } from "react";
import ServerComponent from "./ServerComponent";
import ClientComponent from "./ClientComponent";
import Loading from "./loading";

const Stories = () => {
  const storiesData = [
    {
      id: 1,
      title: "A Rescue Journey",
      excerpt:
        "Read the heartwarming story of how Bella, a shelter dog, found her forever home.Read the heartwarming story of how Bella, a shelter dog, found her forever home.Read the heartwarming story of how Bella, a shelter dog, found her forever home.",
      image: story1.src,
    },
    {
      id: 2,
      title: "From Stray to Family",
      excerpt:
        "Discover the incredible journey of Max, a stray cat, as he transforms into a beloved family member.",
      image: story2.src,
    },
    {
      id: 3,
      title: "Unbreakable Bond",
      excerpt:
        "Explore the extraordinary bond between Sarah and her service dog, Luna, as they conquer life's challenges together.",
      image: story3.src,
    },
    // ... Add more stories
    {
      id: 10,
      title: "Pawprints of Love",
      excerpt:
        "Join us in celebrating the joyous moments shared by pet owners and their furry companions.",
      image: story4.src,
    },
  ];

  return (
    <div className="z-10  mb-20  w-full">
      <ClientComponent />
      <Suspense fallback={<Loading />}>
        <ServerComponent />
      </Suspense>
    </div>
  );
};

export default Stories;
