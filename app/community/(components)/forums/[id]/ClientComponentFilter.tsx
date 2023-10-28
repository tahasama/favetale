"use client";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import DiscussionCard from "./DiscussionCard";

const ClientComponentFilter = ({ discussionsDataFiltered, id }: any) => {
  console.log(
    "🚀 ~ file: ClientComponentFilter.tsx:7 ~ ClientComponentFilter ~ id:",
    id
  );
  const [selectedTag, setSelectedTag] = useState<any>(null);

  const xxx: any[] = discussionsDataFiltered?.map((c: any) => c.tags).flat();
  const uniqueTags: any[] = [...new Set(xxx)];

  const filteredDiscussions = selectedTag
    ? discussionsDataFiltered.filter((discussion: any) =>
        discussion.tags.includes(selectedTag)
      )
    : discussionsDataFiltered;

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
      {filteredDiscussions?.map((discussion: any) => (
        <DiscussionCard discussion={discussion} idx={id} />
      ))}
    </>
  );
};

export default ClientComponentFilter;
