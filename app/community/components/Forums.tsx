import Link from "next/link";
import React from "react";

const Forums = () => {
  const forumData = [
    {
      id: 1,
      title: "Pet Health and Care",
      description: "Discuss topics related to pet health and care.",
      lastPost: "1 hour ago",
      posts: 120,
    },
    {
      id: 2,
      title: "Training Tips and Tricks",
      description: "Share your training techniques and advice.",
      lastPost: "2 hours ago",
      posts: 85,
    },
    {
      id: 3,
      title: "Pet Behavior Issues",
      description: "Seek help and solutions for pet behavior problems.",
      lastPost: "3 hours ago",
      posts: 150,
    },
    {
      id: 4,
      title: "Adoption Stories",
      description: "Share heartwarming stories of pet adoptions.",
      lastPost: "4 hours ago",
      posts: 68,
    },
    {
      id: 5,
      title: "Pet Product Reviews",
      description: "Discuss and review various pet products and gadgets.",
      lastPost: "5 hours ago",
      posts: 45,
    },
    {
      id: 6,
      title: "Pet Photography Tips",
      description: "Share photography techniques for capturing pets.",
      lastPost: "6 hours ago",
      posts: 32,
    },
    {
      id: 7,
      title: "Lost and Found Pets",
      description: "Help reunite lost pets with their owners.",
      lastPost: "7 hours ago",
      posts: 78,
    },
    {
      id: 8,
      title: "Pet-Friendly Travel",
      description: "Share travel experiences with your furry companions.",
      lastPost: "8 hours ago",
      posts: 56,
    },
    {
      id: 9,
      title: "Pet Grooming Tips",
      description: "Discuss grooming techniques and advice for pets.",
      lastPost: "9 hours ago",
      posts: 92,
    },
    {
      id: 10,
      title: "Pet Memorials",
      description: "Share memories and tributes for beloved pets.",
      lastPost: "10 hours ago",
      posts: 25,
    },
  ];

  return (
    <div className="container mx-auto bg-gradient-to-b from-tealLight to-sky-500 p-2">
      <h2 className="text-3xl font-semibold mb-6">Forums</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 ">
        {forumData.map((forum) => (
          <Link
            key={forum.id}
            href={`/forums/${forum.id}`}
            className="block hover:scale-105 transition-all duration-300"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{forum.title}</h3>
              <p className="text-gray-600 mb-1">{forum.description}</p>
              <p className="text-gray-400 text-sm">{forum.lastPost}</p>
              <div className="flex items-center mt-2">
                <div className="bg-indigo-500 text-white px-2 py-1 rounded-md text-xs mr-2">
                  {forum.posts} posts
                </div>
                <div className="bg-gray-100 text-gray-500 px-2 py-1 rounded-md text-xs">
                  Join the discussion
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Forums;
