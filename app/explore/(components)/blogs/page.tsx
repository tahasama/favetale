import Link from "next/link";
import React, { Suspense } from "react";
import blog1 from "../../../images/blog/blog1.jpg";
import blog2 from "../../../images/blog/blog2.jpg";
import blog3 from "../../../images/blog/blog3.jpg";
import blog4 from "../../../images/blog/blog4.jpg";
import blog5 from "../../../images/blog/blog5.jpg";
import blog6 from "../../../images/blog/blog6.jpg";

import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";
import Loading from "./loading";

const Blogs = () => {
  const blogsData = [
    {
      id: 1,
      title: "Tips for Pet Care",
      excerpt: "Learn how to provide the best care for your beloved pets...",
      image: blog1.src,
    },
    {
      id: 2,
      title: "The Joy of Adopting a Rescue Pet",
      excerpt: "Discover the heartwarming journey of adopting a rescue pet...",
      image: blog2.src,
    },
    {
      id: 3,
      title: "Creating a Pet-Friendly Home Environment",
      excerpt:
        "Transform your living space into a safe and welcoming haven for your pets...",
      image: blog3.src,
    },
    {
      id: 4,
      title: "Exploring the Benefits of Pet Socialization",
      excerpt:
        "Uncover the positive impact of socializing your pets with others...",
      image: blog4.src,
    },
    {
      id: 5,
      title: "The Healing Power of Pet Companionship",
      excerpt:
        "Discover how pets can bring comfort and healing to our lives...",
      image: blog5.src,
    },
    {
      id: 6,
      title: "Preparing for a New Puppy: Tips for First-Time Owners",
      excerpt:
        "Get ready to welcome a new puppy into your home with these helpful tips...",
      image: blog6.src,
    },
    // Add more blog data here
  ];

  return (
    <div className="mt-20 w-full">
      <ClientComponent />
      <Suspense fallback={<Loading />}>
        <ServerComponent />
      </Suspense>
    </div>
  );
};

export default Blogs;
