"use client";

import Link from "next/link";
import React from "react";

const DiscussionCard = ({ discussion }: any) => {
  console.log(
    "🚀 ~ file: DiscussionCard.tsx:7 ~ DiscussionCard ~ discussion:",
    discussion
  );

  const categoryMap: any = {
    1: "Health",
    2: "Training",
    3: "Behavior",
    4: "Adoption",
    5: "Products",
  };

  return (
    <div className="grid place-items-center mt-10">
      <div
        key={discussion.id}
        className="w-full my-3 border p-4 rounded-lg cursor-pointer shadow-md transition bg-white duration-300 ease-in-out md:w-6/12 hover:translate-x-[1px] hover:translate-y-[1px]"
      >
        <Link
          href={`/community/forums/${Object.keys(categoryMap).find(
            ([key]) => categoryMap[key] === discussion.category
          )}/discussion/${discussion.id}`}
        >
          <div className="flex justify-between">
            <Link
              href={`/community/forums/${Object.keys(categoryMap).find(
                ([key]) => categoryMap[key] === discussion.category
              )}`}
              className="z-50"
            >
              Forum:{" "}
              <span className="underline underline-offset-2 hover:text-red-600 text-blue-700">
                {discussion.category}{" "}
              </span>
            </Link>

            <Link href={`/profile/${discussion.writer.id}`}>
              by : &nbsp;
              <span className="capitalize text-sky-500 underline underline-offset-2">
                {discussion.writer.name}
              </span>
            </Link>
          </div>
          <h3 className="text-xl font-semibold mt-2 indent-3">
            {discussion.title}
          </h3>

          <div className="flex justify-between">
            <div className="text-gray-600 mt-2">
              Tags:{" "}
              {discussion.tags.map((tag: any) => (
                <span key={tag} className="text-indigo-500 mr-2">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-2">
              {new Date(discussion.createdAt.seconds * 1000).toDateString()}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DiscussionCard;
