"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { Suspense, useState } from "react";
import DiscussionModal from "./[id]/DiscussionModal";
import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";
import Loading from "./loading";

const Forums = () => {
  const forumData = [
    {
      id: 1,
      title: "Pet Health and Care",
      description: "Discuss topics related to pet health and care.",
      lastPost: "1 hour ago",
      posts: 120,
      category: "Health",
      tags: ["Wellness", "Diet", "Vaccinations"],
      sticky: false,
      participants: ["user123", "user456", "user789"],
    },
    {
      id: 2,
      title: "Training Tips and Tricks",
      description: "Share your training techniques and advice.",
      lastPost: "2 hours ago",
      posts: 85,
      category: "Training",
      tags: ["Obedience", "Behavior", "Training Tools"],
      sticky: true,
      participants: ["user789", "user234", "user567"],
    },
    {
      id: 3,
      title: "Pet Behavior Issues",
      description: "Seek help and solutions for pet behavior problems.",
      lastPost: "3 hours ago",
      posts: 150,
      category: "Behavior",
      tags: ["Aggression", "Anxiety", "Training"],
      sticky: false,
      participants: ["user987", "user654", "user321"],
    },
    {
      id: 4,
      title: "Adoption Stories",
      description: "Share heartwarming stories of pet adoptions.",
      lastPost: "4 hours ago",
      posts: 68,
      category: "Adoption",
      tags: ["Rescue", "Happy Endings", "Foster Care"],
      sticky: true,
      participants: ["user111", "user222", "user333"],
    },
    {
      id: 5,
      title: "Pet Product Reviews",
      description: "Discuss and review various pet products and gadgets.",
      lastPost: "5 hours ago",
      posts: 45,
      category: "Product Reviews",
      tags: ["Toys", "Grooming", "Food"],
      sticky: false,
      participants: ["user999", "user888", "user777"],
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (pet: any) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container bg-gradient-to-b from-tealLight to-sky-200 h-screen">
      <ClientComponent />
      <Suspense fallback={<Loading />}>
        <ServerComponent />
      </Suspense>
    </div>
  );
};

export default Forums;
