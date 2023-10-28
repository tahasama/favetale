"use client";

import Link from "next/link";
import React from "react";

const DiscussionCard = ({ discussion, idx }: any) => {
  console.log("🚀 ~ file: DiscussionCard.tsx:7 ~ DiscussionCard ~ id:", idx);
  return (
    <div
      key={discussion.id}
      className="w-full my-3 border p-4 rounded-lg cursor-pointer shadow-md transition bg-white duration-300 ease-in-out  hover:translate-x-[1px] hover:translate-y-[1px]"
    >
      <Link href={`/community/forums/${idx}/discussion/${discussion.id}`}>
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold mb-2">{discussion.title}</h3>
          <Link
            href={`/profile/${discussion.writer.id}`}
            className="capitalize text-sky-500 underline underline-offset-2 hover:text-sky-700"
          >
            {discussion.writer.name}
          </Link>
        </div>

        <div className="flex justify-between">
          <div className="text-gray-600 mt-2">
            Tags:{" "}
            {discussion.tags.map((tag: any) => (
              <span key={tag} className="text-indigo-500 mr-2">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-400 text-sm my-2">
            {new Date(discussion.createdAt.seconds * 1000).toDateString()}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default DiscussionCard;
