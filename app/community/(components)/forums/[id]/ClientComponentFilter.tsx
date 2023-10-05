"use client";
import Link from "next/link";
import React, { useMemo, useState } from "react";

const ClientComponentFilter = ({ discussionsDataFiltered, id }: any) => {
  console.log(
    "🚀 ~ file: ClientComponentFilter.tsx:6 ~ ClientComponentFilter ~ discussionsDataFiltered:",
    discussionsDataFiltered
  );

  const [selectedTag, setSelectedTag] = useState<string>("");
  console.log(
    "🚀 ~ file: ClientComponentFilter.tsx:12 ~ ClientComponentFilter ~ selectedTag:",
    typeof selectedTag
  );
  useState;

  const forumsData = [
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
      discussions: [
        {
          id: 101,
          title: "Vaccination Schedules",
          author: "user123",
          date: "3 hours ago",
          tags: ["Wellness", "Vaccinations"],
          content:
            "Let's discuss the recommended vaccination schedules for pets.",
          replies: [
            {
              id: 1001,
              author: "user789",
              date: "2 hours ago",
              content: "I have a question about puppy vaccinations.",
            },
            {
              id: 1002,
              author: "user456",
              date: "1 hour ago",
              content: "Here's a useful resource about vaccination schedules.",
            },
          ],
        },
        {
          id: 102,
          title: "Dietary Tips",
          author: "user456",
          date: "5 hours ago",
          tags: ["Diet"],
          content: "Share your tips on providing a balanced diet for pets.",
          replies: [],
        },
      ],
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
      discussions: [
        {
          id: 201,
          title: "Puppy Obedience Training",
          author: "user789",
          date: "4 hours ago",
          tags: ["Behavior", "Training Tools"],
          content:
            "Let's discuss effective techniques for puppy obedience training.",
          replies: [],
        },
        {
          id: 202,
          title: "Behavioral Challenges",
          author: "user234",
          date: "2 hours ago",
          tags: ["Behavior"],
          content:
            "I'm facing some behavioral challenges with my dog. Any advice?",
          replies: [
            {
              id: 2001,
              author: "user567",
              date: "1 hour ago",
              content: "I had a similar issue. Here's what worked for me...",
            },
          ],
        },
      ],
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
      discussions: [],
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
      discussions: [],
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
      discussions: [],
    },
  ];
  const forumData = forumsData.filter(
    (forum: any) => forum.id === Number(id)
  )[0];

  const xxx = discussionsDataFiltered.map((c: any) => c.tags);

  const filteredDiscussions = selectedTag
    ? discussionsDataFiltered.filter((discussion: any) =>
        discussion.tags.includes(selectedTag[0])
      )
    : discussionsDataFiltered;
  console.log(
    "🚀 ~ file: ClientComponentFilter.tsx:146 ~ ClientComponentFilter ~ filteredDiscussions:"
  );
  return (
    <>
      <div className="mb-4">
        {xxx &&
          xxx?.map((tag: string) => (
            <button
              key={tag}
              className={`${
                selectedTag === tag
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } px-3 py-1.5 rounded-md text-xs mr-2 cursor-pointer`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        <button
          className={`${
            !selectedTag
              ? "bg-indigo-500 text-white"
              : "bg-gray-200 text-gray-700"
          } px-3 py-1.5 rounded-md text-xs`}
          onClick={() => setSelectedTag("")}
        >
          All
        </button>
      </div>
      {filteredDiscussions.map((discussion: any) => (
        <div
          key={discussion.id}
          className="w-full my-3 border p-4 rounded-lg cursor-pointer shadow-md transition bg-white duration-300 ease-in-out  hover:translate-x-[1px] hover:translate-y-[1px]"
        >
          <Link href={`/community/forums/${id}/discussion/${discussion.id}`}>
            <h3 className="text-xl font-semibold mb-2">{discussion.title}</h3>
            <p className="text-gray-600 mb-2">{discussion.writer.name}</p>
            <p className="text-gray-400 text-sm mb-2">
              {new Date(
                filteredDiscussions[0].createdAt.seconds * 1000
              ).toDateString()}
            </p>
            <p>{discussion.content}</p>
            <div className="text-gray-600 mt-2">
              Tags:{" "}
              {discussion.tags.map((tag: any) => (
                <span key={tag} className="text-indigo-500 mr-2">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ClientComponentFilter;
