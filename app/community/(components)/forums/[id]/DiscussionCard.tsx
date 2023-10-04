import Link from "next/link";
import React from "react";

const DiscussionCard = ({ discussion, id }: any) => {
  console.log("🚀 ~ file: DiscussionCard.tsx:5 ~ DiscussionCard ~ id:", id);
  return (
    <Link
      key={discussion.id}
      className="border p-4 rounded-lg cursor-pointer shadow-md transition bg-white duration-300 ease-in-out  hover:translate-x-[1px] hover:translate-y-[1px]"
      href={`/community/forums/${id}/discussion/${discussion.id}`}
    >
      <h3 className="text-xl font-semibold mb-2">{discussion.title}</h3>
      <p className="text-gray-600 mb-2">{discussion.writer.name}</p>
      <p className="text-gray-400 text-sm mb-2">
        {discussion.createdAt.toDate().toLocaleString()}
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
  );
};

export default DiscussionCard;
