"use client";
import Link from "next/link";
import React, { useMemo, useState } from "react";

const ClientComponentFilter = ({ discussionsDataFiltered, id }: any) => {
  const [selectedTag, setSelectedTag] = useState<any>(null);
  console.log(
    "🚀 ~ file: ClientComponentFilter.tsx:7 ~ ClientComponentFilter ~ selectedTag:",
    selectedTag
  );

  const xxx: any[] = discussionsDataFiltered.map((c: any) => c.tags).flat();
  const uniqueTags: any[] = [...new Set(xxx)];

  const filteredDiscussions = selectedTag
    ? discussionsDataFiltered.filter((discussion: any) =>
        discussion.tags.includes(selectedTag)
      )
    : discussionsDataFiltered;
  console.log(
    "🚀 ~ file: ClientComponentFilter.tsx:16 ~ ClientComponentFilter ~ discussionsDataFiltered:",
    discussionsDataFiltered
  );

  return (
    <>
      <div className="mb-4">
        Select a tag to filter by : &nbsp;
        {xxx &&
          uniqueTags?.map((tag: string) => (
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
          onClick={() => setSelectedTag(null)}
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
